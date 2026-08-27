const CACHE_NAME = "histpoliticor-v7";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/version.json",
  "/offline.html",
  "/icons/favicon-32.png",
  "/icons/apple-touch-icon.png",
  "/icons/histpoliticor-icon-192.png",
  "/icons/histpoliticor-icon-512.png",
  "/icons/histpoliticor-maskable-512.png",
  "/data/elections/departements-1000m.geojson"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname === "/version.json") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put("/version.json", copy));
          }
          return response;
        })
        .catch(() => caches.match("/version.json"))
    );
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put("/index.html", copy));
          }
          return response;
        })
        .catch(async () => (
          await caches.match("/index.html")
          ?? await caches.match("/")
          ?? await caches.match("/offline.html")
        ))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match("/offline.html"));
    })
  );
});
