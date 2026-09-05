// PhysioFlow Demo - Service Worker & Offline PWA Cache
// Version: 1.3.0 (Cache: physioflow-demo-v13)
// ========================================================

const CACHE_NAME = 'physioflow-demo-v13';

const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/print.css',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/vendor/xlsx/xlsx.full.min.js',
  './js/app.js',
  './js/auth.js',
  './js/db.js',
  './js/demo-data.js',
  './js/doctor-dashboard.js',
  './js/patients.js',
  './js/sessions.js',
  './js/finance.js',
  './js/claims.js',
  './js/export.js',
  './js/audit.js',
  './js/roles.js',
  './js/pwa.js',
  './js/utils.js'
];

// Pre-cache core application shell during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL_ASSETS).catch((err) => {
        console.warn('PhysioFlow pre-cache asset notice:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Clean up old caches upon activation and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Cache-First with Network Revalidation for rock-solid Offline PWA support
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately
        // Refresh cache in background when online
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              try { cache.put(event.request, clone); } catch (e) {}
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      // If not in cache, fetch from network and store in cache
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              try { cache.put(event.request, clone); } catch (e) {}
            });
          }
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return caches.match('./index.html');
        });
    })
  );
});
