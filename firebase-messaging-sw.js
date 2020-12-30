
/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.core.setCacheNameDetails({
    prefix: 'plqntes-du-225',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'run-time',
  });

  workbox.precaching.precacheAndRoute([{"revision":"0a27a4163254fc8fce870c8cc3a3f94f","url":"404.html"},{"revision":"346964e149ad49ccf4f3da77b66fa086","url":"assets/css/animate.css"},{"revision":"450fc463b8b1a349df717056fbb3e078","url":"assets/css/bootstrap.min.css"},{"revision":"9a778ff7858c0a4b76c6d96064470003","url":"assets/css/flaticon.css"},{"revision":"815b503a2d2bcae91dbc20ae90075b05","url":"assets/css/fontawesome.5.7.2.css"},{"revision":"30b593b71d7672658f89bfea0ab360c9","url":"assets/css/magnific-popup.css"},{"revision":"de3bb05f640c67bb3c3c10d33cfc50a4","url":"assets/css/main.css"},{"revision":"0b58c934d1889ab05da02f46c6788c38","url":"assets/css/owl.carousel.min.css"},{"revision":"b73d942324aec288f5456dc86dfb77b4","url":"assets/css/responsive.css"},{"revision":"b85c221eaf0fa549ff085533a1159c19","url":"assets/css/sections/_call_to_action.css"},{"revision":"b8d9764e9a58846916823fb2f18ff892","url":"assets/css/sections/_connect_area.css"},{"revision":"3d41f781d6ed3991ba78e8802babca48","url":"assets/css/sections/_contact.css"},{"revision":"e29488e0053996e6105ec5f20db3960e","url":"assets/css/sections/_counterup.css"},{"revision":"b7d871f0cde1167af3775c25ea3daf89","url":"assets/css/sections/_discover_items.css"},{"revision":"7063d43f561c88ea7a53ea83b34baefe","url":"assets/css/sections/_featured_area.css"},{"revision":"f5c3a37b7e0afe3d1c237667ebe3297c","url":"assets/css/sections/_footer.css"},{"revision":"32a350b105a85657754d1cb7c1bd6ada","url":"assets/css/sections/_full_width_feature_area.css"},{"revision":"c646b5224a35cb7b8547fd27d0365516","url":"assets/css/sections/_how_it_works.css"},{"revision":"ceedd521c5a4242c1bb45c79f29ec7e9","url":"assets/css/sections/_icon_box.css"},{"revision":"3823ff806977109b0c2a5b0a27d9abbf","url":"assets/css/sections/_pricing_plan.css"},{"revision":"706e2fe5a64b2e5258d5c6f15bcca559","url":"assets/css/sections/_screenshort.css"},{"revision":"992dee3c053e570983b2323e34444f0f","url":"assets/css/sections/_team_member.css"},{"revision":"4c62e1663c912d2db0221fcddea7bd40","url":"assets/css/sections/_testimonial.css"},{"revision":"d553cb3567661c6913b3f5d1f404372e","url":"assets/css/sections/_video_area.css"},{"revision":"15dad160f3fc18c2bf58b41931046202","url":"assets/css/sections/_why_choose_us.css"},{"revision":"7b6b25c9bae08c979af5c1fc7232d384","url":"assets/css/style.css"},{"revision":"80533988ff5fecd5be26557d08ce8237","url":"assets/fonts/fa-brands-400.svg"},{"revision":"e7e957c87c454bccaa3bf9fdaa6874f8","url":"assets/fonts/fa-regular-400.svg"},{"revision":"82905d8d1c06969df11c8c378e9bdd4c","url":"assets/fonts/fa-solid-900.svg"},{"revision":"814939551cda0b85e8b0ce7ee2d874bb","url":"assets/fonts/Flaticon.svg"},{"revision":"acea64291433db4fb237b99f2bf5a724","url":"assets/img/trafficday.ico"},{"revision":"14d449eb8876fa55e1ef3c2cc52b0c17","url":"assets/js/bootstrap.min.js"},{"revision":"968182bbf9e0871a619367a71d917905","url":"assets/js/contact.js"},{"revision":"623df3d9623fabb74722506ad105b386","url":"assets/js/goolg-map-activate.js"},{"revision":"ef36cca760bf1cd76cfcd0e4dc10cef1","url":"assets/js/jquery.counterup.min.js"},{"revision":"89c32b91cd2cbe8d45b2c6609c11ec58","url":"assets/js/jquery.js"},{"revision":"5b23ded83b6a631b06040ed574e43dd6","url":"assets/js/jquery.magnific-popup.js"},{"revision":"840fcef1c0add0e0177b5037039436d6","url":"assets/js/main.js"},{"revision":"c2dc175349b1ee00f8ea896ecac91518","url":"assets/js/owl.carousel.min.js"},{"revision":"70d3fda195602fe8b75e0097eed74dde","url":"assets/js/popper.min.js"},{"revision":"4c3dedef4b2f9db05f3b79376d606d14","url":"assets/js/script.js"},{"revision":"dfe0eedf8da578f4a4c43b05448c51d9","url":"assets/js/waypoints.min.js"},{"revision":"36050285bfeeb7395752f0f9bbc08273","url":"assets/js/wow.min.js"},{"revision":"b5232da179775f8f1dbb257bd4c25cfc","url":"icons/favicon.ico"},{"revision":"500c6d9f60f4c6d0a426d29307319f71","url":"index.html"}]);

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
   }),
  );

 // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
    }),
  ); 

  workbox.routing.registerRoute(
    new RegExp('/assets/css/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'css-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 15 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 30,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/icons/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'icons-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 15 * 24 * 60 * 60,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/fonts/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 15 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 30,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/scss/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'scss-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 15 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 30,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/js/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'js-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 30 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 25,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/assets/img/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 30 * 24 * 60 * 60,
          // Only cache 10 requests.
          maxEntries: 20,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

} else {
console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);
