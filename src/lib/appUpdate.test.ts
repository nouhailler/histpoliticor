import { describe, expect, it } from "vitest";
import packageJson from "../../package.json";
import { currentAppVersion, isVersionNewer } from "./appUpdate";

describe("mises à jour de l'application", () => {
  it("expose la version du paquet dans l'interface", () => {
    expect(currentAppVersion.version).toBe(packageJson.version);
    expect(currentAppVersion.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("détecte une version sémantique plus récente", () => {
    expect(isVersionNewer(
      { version: "0.3.0", updatedAt: "2026-08-26" },
      { version: "0.2.9", updatedAt: "2026-08-26" }
    )).toBe(true);
  });

  it("détecte une reconstruction plus récente de la même version", () => {
    expect(isVersionNewer(
      { version: "0.2.0", updatedAt: "2026-08-27" },
      { version: "0.2.0", updatedAt: "2026-08-26" }
    )).toBe(true);
  });

  it("ignore une version identique ou plus ancienne", () => {
    const current = { version: "0.2.0", updatedAt: "2026-08-26" };
    expect(isVersionNewer(current, current)).toBe(false);
    expect(isVersionNewer({ version: "0.1.9", updatedAt: "2026-08-27" }, current)).toBe(false);
  });
});
