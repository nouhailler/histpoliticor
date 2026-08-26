import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_UPDATE_STORAGE_KEY = "histpoliticor:auto-update";
const CHECK_INTERVAL = 30 * 60 * 1000;

export const currentAppVersion = {
  version: __APP_VERSION__,
  updatedAt: __APP_UPDATED_AT__
};

export type AppUpdateStatus = "idle" | "checking" | "up-to-date" | "available" | "installing" | "error";

export interface VersionPayload {
  version: string;
  updatedAt: string;
}

export interface AppUpdateController {
  automaticUpdates: boolean;
  current: VersionPayload;
  latest?: VersionPayload;
  lastCheckedAt?: Date;
  status: AppUpdateStatus;
  checkForUpdate: (installIfAvailable?: boolean) => Promise<void>;
  installUpdate: () => Promise<void>;
  setAutomaticUpdates: (enabled: boolean) => void;
}

export function useAppUpdate(): AppUpdateController {
  const [automaticUpdates, setAutomaticUpdatesState] = useState(() => {
    try {
      return localStorage.getItem(AUTO_UPDATE_STORAGE_KEY) !== "false";
    } catch {
      return true;
    }
  });
  const [latest, setLatest] = useState<VersionPayload>();
  const [lastCheckedAt, setLastCheckedAt] = useState<Date>();
  const [status, setStatus] = useState<AppUpdateStatus>("idle");
  const reloadOnUpdateRef = useRef(automaticUpdates);

  const installUpdate = useCallback(async () => {
    reloadOnUpdateRef.current = true;
    setStatus("installing");
    try {
      if (!("serviceWorker" in navigator)) {
        window.location.reload();
        return;
      }

      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        window.location.reload();
        return;
      }

      await registration.update();
      const worker = registration.waiting ?? registration.installing;
      if (!worker) {
        window.location.reload();
        return;
      }

      if (worker.state === "installed") {
        worker.postMessage({ type: "SKIP_WAITING" });
        return;
      }

      worker.addEventListener("statechange", () => {
        if (worker.state === "installed") worker.postMessage({ type: "SKIP_WAITING" });
      });
    } catch {
      setStatus("error");
    }
  }, []);

  const checkForUpdate = useCallback(async (installIfAvailable = false) => {
    setStatus("checking");
    try {
      const response = await fetch(`/version.json?checkedAt=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Version HTTP ${response.status}`);
      const remote = await response.json() as Partial<VersionPayload>;
      if (typeof remote.version !== "string" || typeof remote.updatedAt !== "string") throw new Error("Version invalide");
      const checkedVersion = { version: remote.version, updatedAt: remote.updatedAt };
      setLatest(checkedVersion);
      setLastCheckedAt(new Date());

      if (isVersionNewer(checkedVersion, currentAppVersion)) {
        setStatus("available");
        if (installIfAvailable) await installUpdate();
      } else {
        setStatus("up-to-date");
      }
    } catch {
      setLastCheckedAt(new Date());
      setStatus("error");
    }
  }, [installUpdate]);

  useEffect(() => {
    reloadOnUpdateRef.current = automaticUpdates || status === "installing";
  }, [automaticUpdates, status]);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let refreshing = false;
    const handleControllerChange = () => {
      if (refreshing || !reloadOnUpdateRef.current) return;
      refreshing = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
  }, []);

  useEffect(() => {
    if (!automaticUpdates) return;
    void checkForUpdate(true);
    const interval = window.setInterval(() => void checkForUpdate(true), CHECK_INTERVAL);
    const handleOnline = () => void checkForUpdate(true);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") void checkForUpdate(true);
    };
    window.addEventListener("online", handleOnline);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("online", handleOnline);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [automaticUpdates, checkForUpdate]);

  function setAutomaticUpdates(enabled: boolean) {
    setAutomaticUpdatesState(enabled);
    try {
      localStorage.setItem(AUTO_UPDATE_STORAGE_KEY, String(enabled));
    } catch {
      // Le réglage reste valable pour la session si le stockage local est indisponible.
    }
  }

  return {
    automaticUpdates,
    current: currentAppVersion,
    latest,
    lastCheckedAt,
    status,
    checkForUpdate,
    installUpdate,
    setAutomaticUpdates
  };
}

export function isVersionNewer(remote: VersionPayload, current: VersionPayload) {
  const comparison = compareVersions(remote.version, current.version);
  return comparison > 0 || (comparison === 0 && remote.updatedAt > current.updatedAt);
}

function compareVersions(left: string, right: string) {
  const leftParts = left.split(".").map((part) => Number.parseInt(part, 10) || 0);
  const rightParts = right.split(".").map((part) => Number.parseInt(part, 10) || 0);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}
