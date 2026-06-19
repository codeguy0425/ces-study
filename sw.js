const CACHE = 'ces-study-v12';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './styles/main.css',
  './units/unit1-2.html',
  './units/unit1-2-peer.html',
  './units/unit1-2-inclusive.html',
  './units/unit1-3.html',
  './units/unit1-3-money.html',
  './units/unit1-3-online.html',
  './units/unit1-3-green.html',
  './units/unit1-4.html',
  './units/unit1-4-constitution.html',
  './units/unit1-4-basiclaw.html',
  './units/unit1-4-ruleoflaw.html',
  './units/unit1-4-treaties.html',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './5-5/5-5.png',
  './book/ces_unit 1.4_2.2.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  e.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(request, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
