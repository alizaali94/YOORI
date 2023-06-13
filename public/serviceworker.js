var staticCacheName = "yoori-pwa-" + new Date().getTime();
var filesToCache = [
    '/images/ico/apple-icon-72x72.png',
    '/images/ico/favicon-96x96.png',
    '/images/ico/android-icon-144x144.png',
    // '/images/ico/android-icon-144x144.png',
    '/images/ico/apple-icon-152x152.png',
    '/images/ico/android-icon-192x192.png',
    // '/images/ico/android-chrome-512x512.png',
    '/images/ico/android-chrome-512x512.png',
    '/images/ico/splash-640x1136.png',
    '/images/ico/splash-750x1334.png',
    '/images/ico/splash-1242x2208.png',
    '/images/ico/splash-1125x2436.png',
    '/images/ico/splash-828x1792.png',
    '/images/ico/splash-1242x2688.png',
    '/images/ico/splash-1536x2048.png',
    '/images/ico/splash-1668x2224.png',
    '/images/ico/splash-1668x2388.png',
    '/images/ico/splash-2048x2732.png'
];

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("yoori-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});

