/* eslint-disable no-restricted-globals */

// Import Workbox library
import { precaching } from 'workbox-precaching';

const CACHE_NAME = 'portfolio-cache-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/assets/About.png',
];

// Precache the files using Workbox
self.__WB_MANIFEST = FILES_TO_CACHE;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch handler to serve cached assets or the offline page
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match('/offline.html');
      });
    })
  );
});

// Activate event to clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Register the service worker
const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
          console.error('ServiceWorker registration failed: ', error);
        });
    });
  }
};

// Export the register function
export { register };
