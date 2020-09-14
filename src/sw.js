//we define the cache name
const cacheName = 'cache-v1';
//we list all elements that we want to be cached
const resourceToCache = [
    '/',
    'index.html',
]

//we first install our service worker and save all those element into cache
self.addEventListener("install",event=>{
    console.log("install event")
    event.awaitUntil(
        caches.open(cacheName)
        .then(cache=>{
            return cache.addAll(resourceToCache)
        })
    )
})

self.addEventListener("activate",event=>{
    console.log("Activate called")
})

//with fetch, we intercept a request and check if we have caches, if not we save elements into cache
//cache first strategy
//when a page request a page, we first look into cache ( fetch event)
//when we have page into cache, we return the cache
//else we fetch the server, then cache the result and return cache content 
self.addEventListener("fetch",event=>{
    console.log("event intercpeted for ",event.request.url);

    //event.respondWith wait for the innse rpromise to resolve and return the result 

    event.respondWith(caches.match(event.request))
    then(cachedResponse=>{
        return cachedResponse || fetch(event.request)
    })
})
