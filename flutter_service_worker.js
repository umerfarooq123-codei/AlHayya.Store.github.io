'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "962da3ce51c010483cec806c5dbbf95d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db09f3ce6bdac7cf0e42e2a8cabb25c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a8cc4f3f99748f42c9abbcd28de1cc5",
".git/logs/refs/heads/main": "851619cac5349f1b29e8131c9c262414",
".git/objects/01/bb35f37b1f3adb62368d7f2e95a2c09f2dc5cb": "41950e6544483a205417ba9ca66e29a3",
".git/objects/04/543614a7cc82d119683fed32a7cdef086be422": "f0747ca8dd20745dc11c1df160528cae",
".git/objects/04/aceb265e0b8f4e36ce555897cb3363e532fd6c": "c7cea83427d9d6c7953913b4b6de114e",
".git/objects/07/2dbf1cd57ddb23c36f4046c75ea532a97f7241": "469442f82aa149304fa2210852ea10fa",
".git/objects/0c/9bffa13317984b8330588be09e609bc1ada3f7": "55a42fbd5c873245a9532861aad107fa",
".git/objects/10/fdafeb815bfa3d43d4e9aa4a4c52fd39453500": "3488a2d247c579451a3dd74a5c9085ee",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/c5739f94c88106429161300f80452e351f9a66": "f81298e92d899e6bcf6f270e16dca3b3",
".git/objects/1e/eb16a1927111f651ad21a734f55debeeaab3df": "d59fb891c7c8c955d99a83e87ddfa455",
".git/objects/1f/2605d021ec7476356e4d77a15813ba8828fc82": "89dc4876727806eb7c39e73c3e039657",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/e6e786e3f13e7e98e0d1687417acfac583411d": "b559e76f7ca5a6c51b5f441e9f438dfb",
".git/objects/25/8d2de4eba86de54235847d84b9d95734bf50b2": "336c7e0da319af16633125a32d8b7ead",
".git/objects/35/998a1860f564c2c4005e219ead7759368233de": "fbb4c622defaca48b3a8ae00caddfe7e",
".git/objects/38/17ebdf68bb37091353cf01d9fb45f9f9f4ba4c": "ba8138c3834ee69dbc67009bac557eba",
".git/objects/3b/e2e948547692fd8a0b3fccfa579d6ebdcd6c3f": "45e9575a4978bcf34c6ea6f1d7fac2a9",
".git/objects/40/3866574239e2e7ff56521d3de02894f866e135": "c31f35f5734b61cf4d51393389249719",
".git/objects/46/e2e1c5c1fea28a05064ccc7e3476ed0ab48a46": "bebe622a5c95aad31c6e6251cf296e73",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/e626501d9b2a538bbbc035c8f179fb453fa333": "af9f56d104dd90033e041e655a8c810a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/111d4d58a49334f82776ab2dcba36d927aeda4": "0c22ea20ebc03d2ed6de76534da6fdc5",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/67/c9c564d1fbe19d122e9b7040a5407c7912bfb3": "888ccc9861967a7b0059754228c26859",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/ca6141975f2783cd43f06deed83b43f82cf5e7": "50193aef21a6cc597a586f2e17e0083f",
".git/objects/71/aa203dd8c2c0e574529e25d0094a95c3d06d30": "1b36e4dd0f332ebc9f18bb5d101f1718",
".git/objects/74/48450cef817342565fe4f11b8285db2c6cc309": "b92504e06b8564907336f6da25a24469",
".git/objects/78/f775ab517d53b9387fb64b5da90f4210038a87": "3450e249e6c8af48f141260b634232c3",
".git/objects/83/a5d6a0ada4e8c1b71e01394df737807e033d86": "978158c5542d9179ffb3f5c9e611824c",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8386de5552026be261abc6a9092d5200737ce5": "ec2c95c7acd70c65cae6c1fbb0bea907",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/e22a65b00ad030c2905baba6d538e2a1bde7df": "4c7267091693511f8c4eb4400a716dd6",
".git/objects/8f/2e05397b1cfea2e8caeff1a0c3d4fcb816aa13": "edbc2f8b7f3cd9314391c2b7c75193f8",
".git/objects/90/87bf95d44d4e32df406903de17e4dd2916b6a7": "1e3282f4ca9238d6534020ddc9a6dae5",
".git/objects/91/649563a14b50cde7de22532eb3111e05d597ce": "e5e64e2e8e623e778cb5eb6fd2f3a8fb",
".git/objects/91/f41cc022a3a42cc57fb963c3c73024fb009439": "301a2e60e17dcbf8d12f18fb4b52ad35",
".git/objects/9a/ba32e588443ac7840dac4df74df3b884578a95": "d748d5d01ddbb5e9b61f7bb12cdcdc88",
".git/objects/a3/0c6951348c216ef2bfb6996ef6ff29d6350bed": "8dd83be9e717dc33c1fa95f78d0f9d32",
".git/objects/a7/285170bdf5e4c8c45e9ac92e79fbc6a01ac111": "dcbbc1b0db1a05ca8e6ebeb416ff0516",
".git/objects/a7/7762edf18e3af6d7bd11a9e5736c93771cbfde": "6cbd89ea88ada4c78a1b1d2149b372d6",
".git/objects/aa/77223a559c2a2968754478e8050264c2872947": "6237a9ba13e7f0f3ac717a4dd44ea433",
".git/objects/aa/9897a8351e43a86fd401e73cc62bc9cb93aadc": "297b23c2a8a1da8252cb81efe63e431f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/c224b60aac375c48db1bc8efe33ffd6b33d771": "f71dbc69e092ac4bec14bdc2bf9ffac8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/bf/8135054c6fc074aea8cefbc33c1d01bdc4ebda": "2f8f8f867ae2e4ed3be9e3d3b5803b16",
".git/objects/ce/68e2864d56b31c010764d216d9ba0eda2c7f80": "ec9d1c58d2cfbed070d3d17a1f7986fe",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bf22ba62d3e7cf2d4622f689f5c20183852143": "377e93d1fe80f3ede8b5162ea7b9cb00",
".git/objects/da/a689c162ada5c23d1a5666f65002a6b1de22aa": "f56ff1de19be84fe5ce8294df16f84ab",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a8142e6191bcd1aebee499c578060cab0cd0fb": "5fe3f991b10bd95cf741eb1ed9364af2",
".git/objects/f9/32fbb10fc96d398cb2201a57b8f53bfece253e": "70c2af77bcf923770bb373161afede95",
".git/objects/fa/90de33c495844899a7758db0b4048670d8f809": "5b10a9726583a52173b54547abce34ca",
".git/objects/fd/f0fdb19fb87657e5900353135ed885797440d5": "183b5f2f645d48d025d61ae7acdc9b7d",
".git/refs/heads/main": "5703af1bf967a3100d52dc6482d19ca2",
"assets/AssetManifest.bin": "9326d203acc4ef0d8d473f2bdca4a97a",
"assets/AssetManifest.json": "f0ce9a3b7a346d09cbe54c503fec3167",
"assets/assets/AssetManifest.bin": "4b39e5f97f207247159815e25a5b7457",
"assets/assets/AssetManifest.json": "e0136a195960397182eaec96920acc59",
"assets/assets/aus.png": "238de7a0293c99588e63326ca835c465",
"assets/assets/canada.png": "e4aa01722c8f44606b8d4b88028a2c36",
"assets/assets/discover.png": "0217a45248fac429c02ff40eb26f3462",
"assets/assets/euro.png": "a4b126e1590c1892b0c5e3dd2dcbfa91",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/google.png": "94276e4e5348b37b5e76b36a9d420673",
"assets/assets/graphic.jpg": "585fd5b21dd2f507ab90e52df52c7ea2",
"assets/assets/hodie.jpg": "b9ee1c6204dda96befc549b161b6b6dc",
"assets/assets/ice.png": "1e7dc16a9f52d4bf9e5ed93a8fefefff",
"assets/assets/mastercard.png": "a979e9db1efafd6ecff4bc7491a1bda3",
"assets/assets/NOTICES": "88995ff1792915f7f5d9d8f94bd79784",
"assets/assets/no_internet.jpg": "1b0162c7d0b76efe4a71fc8c320af7bd",
"assets/assets/paypal.png": "c3f5ababfc3df9c848a17df9b55f7275",
"assets/assets/person.jpg": "802f160a48ef08e445ed5527df4eba5a",
"assets/assets/pic1.jpg": "7c5466cfb2f16b3c876ee4fab8311819",
"assets/assets/pic2.jpg": "e0a1da4acfbf7bdf4eb67469d74340ca",
"assets/assets/pic3.jpg": "924b50a33779072239ef2461525ae3fe",
"assets/assets/pic4.png": "8f64433348372c9b7bd21a0b5cf68593",
"assets/assets/pic5.jpg": "496f26ee52633854d59c1a5ae7f27154",
"assets/assets/pic6.jpg": "77bdd33dfffc17f0fe22a091abdcf289",
"assets/assets/t-shirt.jpeg": "7ed4fb82d1de0d25bae1b564f097a173",
"assets/assets/top.jpg": "0f5e41fa32574c787d372caedae9abe4",
"assets/assets/uk.png": "773bbe150974723c3308aefc42f9f88b",
"assets/assets/usa.png": "b08cce473caa95d0fe0df12369e9aa68",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0c6756f3e7706b0175af698f8841fc94",
"assets/NOTICES": "c1c899371b7e660550181f942014e91f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "78daff025a185d11c6a08349e295f9eb",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b74876beea1de23fe3e4f3cd6c3ad2c7",
"/": "b74876beea1de23fe3e4f3cd6c3ad2c7",
"main.dart.js": "faf3511533d8712552eb3a84439b2d79",
"manifest.json": "38efb4c8cb9c2814f1b776dba833bcb4",
"README.md": "d3974415dda361a0d0f42f6e5bc61563",
"version.json": "86b84dc7f63221cbafcc129562e46748"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
