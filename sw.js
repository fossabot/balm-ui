importScripts('workbox-sw.js');

// Configure Cache Names
workbox.core.setCacheNameDetails({
  prefix: 'balm-ui',
  suffix: 'v20190806', // NOTE: need update with every release
  precache: 'app-cache',
  runtime: 'app-runtime'
});

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.1300c022.css",
    "revision": "8e8624fce8a2b8ae9b6f047045e0412e"
  },
  {
    "url": "css/ie/latest.d41d8cd9.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/ie/lte10.d41d8cd9.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/plugins.6098f8df.css",
    "revision": "6098f8df207264352190b3ef789e27b7"
  },
  {
    "url": "index.html",
    "revision": "6f46e7bffd2f0339daa882ee2bbe25c5"
  },
  {
    "url": "js/app.a72ebc9a.js",
    "revision": "a72ebc9ad59533cac097b15aa929bf9d"
  },
  {
    "url": "js/async/0.a622c69c.js",
    "revision": "6864b41bdcdb56a7410a387ddf73711c"
  },
  {
    "url": "js/async/10.e9d4580a.js",
    "revision": "26600f14225095defbb86649912b6f77"
  },
  {
    "url": "js/async/11.0563581f.js",
    "revision": "b3b5f472a33ba843c7e228a985256540"
  },
  {
    "url": "js/async/12.c4bc252d.js",
    "revision": "5fc160b19d2d7ac8d964d76daefe60f6"
  },
  {
    "url": "js/async/13.1885a063.js",
    "revision": "b45047eef91c5495a9a84764b4a45021"
  },
  {
    "url": "js/async/14.cf506d38.js",
    "revision": "a2c5dadf6829d7400c97196e5bb54dab"
  },
  {
    "url": "js/async/15.ea2b25db.js",
    "revision": "78fb300b28693dacbdd1ee737061d10b"
  },
  {
    "url": "js/async/16.fd18e328.js",
    "revision": "42fe687bcdd3f9c233dccf5b6bbff77c"
  },
  {
    "url": "js/async/17.85b10eee.js",
    "revision": "ee18a89d0a877fe93a30fff99bfb77da"
  },
  {
    "url": "js/async/18.3139ee7c.js",
    "revision": "2640cf4f32096704cab6c38be10e6a25"
  },
  {
    "url": "js/async/19.8b2427de.js",
    "revision": "e00d7bf488f81fe9c830c12bd65ca159"
  },
  {
    "url": "js/async/20.1da12ab2.js",
    "revision": "f90b8b3a5d643bddcb718e85392b43b8"
  },
  {
    "url": "js/async/21.c0a1ea2a.js",
    "revision": "9d4436b6b53dd56b18a8c49e31485902"
  },
  {
    "url": "js/async/22.130e27a5.js",
    "revision": "f4735433c942f42fb80c8b4d4c8fc9bf"
  },
  {
    "url": "js/async/23.97e84e5d.js",
    "revision": "9dce63560d757293e789dfd19e0bff60"
  },
  {
    "url": "js/async/24.8a51d054.js",
    "revision": "45aa9f9d1123bc1227a5a16197a2108a"
  },
  {
    "url": "js/async/25.451bd261.js",
    "revision": "9ab1a7b5405827d1689a8503215ded7b"
  },
  {
    "url": "js/async/26.d63c4704.js",
    "revision": "7268744ff8c4f8f12bec0abe6dd3058f"
  },
  {
    "url": "js/async/27.cbcced14.js",
    "revision": "3b4c11abceec4f53d8f2ec523c28e9b2"
  },
  {
    "url": "js/async/28.250dc41f.js",
    "revision": "a17b3c5b9fdbc69f66f88c8da3a9cb30"
  },
  {
    "url": "js/async/29.73c580eb.js",
    "revision": "c10b30025c948c30848b2778b1d4c23d"
  },
  {
    "url": "js/async/3.b1e9f9ea.js",
    "revision": "ba09e3d658dec29a3c2fab9536c8153d"
  },
  {
    "url": "js/async/30.84ffd206.js",
    "revision": "cde61d312e92e34667d87f972dff1998"
  },
  {
    "url": "js/async/31.a0352499.js",
    "revision": "3657661585b7524ad4ebb0a7fe3c9726"
  },
  {
    "url": "js/async/32.354b61eb.js",
    "revision": "d9cc54b79053bee67f6cbc94ba0654cd"
  },
  {
    "url": "js/async/33.7e35a4dc.js",
    "revision": "6b89ccd57a7e0aca70028c3d5954c605"
  },
  {
    "url": "js/async/34.aacdc3b3.js",
    "revision": "000f9b479365e9caef6dbbd8d693a40a"
  },
  {
    "url": "js/async/35.fcbde8be.js",
    "revision": "1f8acf48eb62d5582df4587c3c69896c"
  },
  {
    "url": "js/async/36.05c04463.js",
    "revision": "6fd8509571c7e06c937d072eadeafa2f"
  },
  {
    "url": "js/async/37.bb167485.js",
    "revision": "b6830749483f24cf06dda7579a015321"
  },
  {
    "url": "js/async/38.a72196aa.js",
    "revision": "19b894dc9d012885c436337d57ff2d1a"
  },
  {
    "url": "js/async/39.233d0148.js",
    "revision": "0aeaa2307272d02d41fe8256ea1160aa"
  },
  {
    "url": "js/async/4.6fa5d8d2.js",
    "revision": "19adea626776449354d5cefc26ff6d3a"
  },
  {
    "url": "js/async/40.b05e86b9.js",
    "revision": "61da2cdad82123d3b312d6cae2355c89"
  },
  {
    "url": "js/async/41.cfac6013.js",
    "revision": "fa6997a5dabaf6d4ab9513829b2f0f11"
  },
  {
    "url": "js/async/42.9142c6a1.js",
    "revision": "4cf29ee0e27da44aabda07c751eb7c65"
  },
  {
    "url": "js/async/43.6ee6d8c0.js",
    "revision": "1c5b2b1f1504eb6bbd6557055a714015"
  },
  {
    "url": "js/async/44.f047de12.js",
    "revision": "e0be80d6be8690c948701dff063489dd"
  },
  {
    "url": "js/async/45.5da2884b.js",
    "revision": "627ccbad80b789e2a631e79d1c77bd0d"
  },
  {
    "url": "js/async/46.ddd5dd89.js",
    "revision": "ab1cdb29cfb8f8e2361dffabdb6ae35b"
  },
  {
    "url": "js/async/47.55867f7d.js",
    "revision": "7b2fc1005e1e1c7dc5530ca0b7d8b7fe"
  },
  {
    "url": "js/async/48.3e61c6e0.js",
    "revision": "aca4c130cb0357c26f007049bc400f00"
  },
  {
    "url": "js/async/49.65896cf5.js",
    "revision": "bfcb0a90f84c7ed62fed84b975e2963e"
  },
  {
    "url": "js/async/5.65d32d9a.js",
    "revision": "7e91ff086ff911b03a91cb781929b051"
  },
  {
    "url": "js/async/50.c32f090c.js",
    "revision": "0a79fe635bb180bd5d0974bb3ef56be2"
  },
  {
    "url": "js/async/51.9ea876da.js",
    "revision": "d5761b69f6c584957ec97f3d20d4c915"
  },
  {
    "url": "js/async/52.944aa04a.js",
    "revision": "2c2ac3f6542ed6ccc6fe72d9ae20f905"
  },
  {
    "url": "js/async/53.4a844ce2.js",
    "revision": "b5175ce50dcc055f584eb2b29e872e4a"
  },
  {
    "url": "js/async/54.ded6462b.js",
    "revision": "c61ebbdba05fe668b2c93086e8ffb3f2"
  },
  {
    "url": "js/async/55.8c2259f4.js",
    "revision": "8fd15c10dcd1c1803d5e124d50be8d11"
  },
  {
    "url": "js/async/56.c8546e93.js",
    "revision": "58e0aaf06ef5ba0cb0eb3781ab1aa463"
  },
  {
    "url": "js/async/57.01e3db28.js",
    "revision": "f65d5e4fb1e2d9e36fc91f1baead4e1a"
  },
  {
    "url": "js/async/58.d76a2f08.js",
    "revision": "521656491f6322d9522ac719933c1c77"
  },
  {
    "url": "js/async/59.62e9ec3c.js",
    "revision": "e1dd8d985f94eb61589fa1e79900e640"
  },
  {
    "url": "js/async/6.74045fcb.js",
    "revision": "32bf1a449ab9b24db7e01fa26bc3e269"
  },
  {
    "url": "js/async/7.b9fbdd77.js",
    "revision": "990f6e504822ff887c1db8e02f03844c"
  },
  {
    "url": "js/async/8.dc6cbc17.js",
    "revision": "4a2d3e9acd5fe074906ed60a6bed5a5c"
  },
  {
    "url": "js/async/9.79ae114e.js",
    "revision": "8b0bc3e4b4d74b7177e9e09440bd279e"
  },
  {
    "url": "js/vendor/mylib.0baad4e9.js",
    "revision": "0baad4e9a987d8d11a62a0f35fc5a990"
  },
  {
    "url": "service-worker.js",
    "revision": "dbd992deff0e3664e129780ca41e2258"
  },
  {
    "url": "workbox-sw.js",
    "revision": "6e1e47d706556eac8524f396e785d4bb"
  }
]);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico)|json|ttf|woff(2?)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Enable Offline Google Analytics
// workbox.googleAnalytics.initialize();
