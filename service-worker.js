self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('airhorner').then(function(cache) {
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
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});