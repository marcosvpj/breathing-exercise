self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('respire').then(function(cache) {
            return cache.addAll([
                '/breathing-exercise/',
                '/breathing-exercise/index.html',
                '/breathing-exercise/index.html?utm_source=homescreen',
                '/breathing-exercise/?utm_source=homescreen',
                '/breathing-exercise/css/style.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('respire').then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  });