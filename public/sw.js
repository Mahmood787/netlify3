var cacheName="expCache";
var cacheFlies=[
    '/',
    'static/js/bundle.js',
    'static/js/0.chunk.js',
    'static/js/main.chunk.js',
    'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy'
]
console.log("registerrrrrrrrrrrrrrrrr")

self.addEventListener('activate',function(e){
    console.log("[service worker] activate")
}) 
self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(e){
            return e.addAll(cacheFlies)
        })
    )
})

self.addEventListener("fetch",function(e){
    console.log("fetching", e.request.url)
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    )
})