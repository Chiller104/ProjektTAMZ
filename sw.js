var cacheName = 'bludisko';
var filesToCache = [
    './',
    './index.html',
    './quiz.html',
    './css/style.css',
    './js/maze.js',
    './js/quiz.js',
    './init-sw.js',
    './images/backgrounds/vsb.png',
    './images/sprites/student.svg',
    './images/sprites/wall.png',
    './images/sprites/degree.png',
    './images/sprites/sound.svg',
    './images/sprites/mute.svg',
    './audio/overtune.mp3',
    './audio/pop.mp3',
    './robots.txt',
    './.well-know/assetlinks.json'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});