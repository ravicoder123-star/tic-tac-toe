const CACHE_NAME = "tic-tac-enhance-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./icon-192.png",
  "./icon-512.png"
];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
