if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),r={module:{uri:c},exports:o,require:t};s[c]=Promise.all(a.map((e=>r[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Z-IMfUJvIp6O0NcAEy6Uu/_buildManifest.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/Z-IMfUJvIp6O0NcAEy6Uu/_middlewareManifest.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/Z-IMfUJvIp6O0NcAEy6Uu/_ssgManifest.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/105.96b4ce4e1ea5af78.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/172.e7cdd3df1f1d14fc.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/1a48c3c1-773b6ed8728a2c82.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/1bfc9850-b2d7b2db04765647.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/252f366e-1c572ca7470b5645.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/401.7bcae5338c134b40.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/403-627e32e166d0ac8c.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/442-a4f19fbab753ad37.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/477.59a04198931cacbb.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/493.115020ef78665a9a.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/505-627337300ab731f0.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/528-8b8d4a0b0afd2c1d.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/642-4a7ba922bf21c159.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/779.2e868d2d94d84989.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/ea88be26-ba5ef49b4f6ae9f4.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/framework-4975f770e34de116.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/main-a4984d0bcf289454.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/404-668527c1bb54ffa6.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/_app-647dc40bbbb2f242.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/blog-511586437ffbf26f.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-520c48c9f505733c.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/blog/tag/%5Btag%5D-e3dd399a12180390.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/index-09ef1b71dbbff31b.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/team-cef2324e16f93ba9.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/pages/team/%5Bteammate%5D-e56775cf492fda06.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/chunks/webpack-e41abbf03a3ee786.js",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/css/80c1458149a4a630.css",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/_next/static/css/9bfa33dbd0f20b19.css",revision:"Z-IMfUJvIp6O0NcAEy6Uu"},{url:"/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/favicon.ico",revision:"76955cdc2a298f5f4b327acd6bb30f73"},{url:"/icon/android-icon-144x144.png",revision:"504ee9285fe9ec477eb45bc64ec29463"},{url:"/icon/android-icon-192x192.png",revision:"d4176644be32485eb0a1dd253b179bd9"},{url:"/icon/android-icon-36x36.png",revision:"00fd2419400283cb843b30812383de7b"},{url:"/icon/android-icon-48x48.png",revision:"02d2fbca06c0b7192ab0b14dda87ef00"},{url:"/icon/android-icon-72x72.png",revision:"de857eb4ca22b842bb01728e55032d1e"},{url:"/icon/android-icon-96x96.png",revision:"b7940caf8a34add5ddf7ee82476ccf24"},{url:"/icon/apple-icon-114x114.png",revision:"1423988819ea032c70df3035dda0bc45"},{url:"/icon/apple-icon-120x120.png",revision:"a2ebbcfe9633f27f2b407fcdbccec8a8"},{url:"/icon/apple-icon-144x144.png",revision:"504ee9285fe9ec477eb45bc64ec29463"},{url:"/icon/apple-icon-152x152.png",revision:"d76ee1e04094711a8b4d69fcc634f8c4"},{url:"/icon/apple-icon-180x180.png",revision:"0925aeeabc0bfbaa6c96b871c08f4472"},{url:"/icon/apple-icon-57x57.png",revision:"43378ba2bc009469bd6ec744eb74273c"},{url:"/icon/apple-icon-60x60.png",revision:"17076cf8fb6b58f7fb547885ac3a0186"},{url:"/icon/apple-icon-72x72.png",revision:"de857eb4ca22b842bb01728e55032d1e"},{url:"/icon/apple-icon-76x76.png",revision:"633d5c5f88b153ddaeb181ca130bf003"},{url:"/icon/apple-icon-precomposed.png",revision:"142ac325e6db850b9d1089a029500bc2"},{url:"/icon/apple-icon.png",revision:"142ac325e6db850b9d1089a029500bc2"},{url:"/icon/favicon-16x16.png",revision:"3d8f1c7fff89d38bf91b0621971e39cf"},{url:"/icon/favicon-32x32.png",revision:"2958498258e2123426710e21704ae7c1"},{url:"/icon/favicon-96x96.png",revision:"b7940caf8a34add5ddf7ee82476ccf24"},{url:"/icon/ms-icon-144x144.png",revision:"504ee9285fe9ec477eb45bc64ec29463"},{url:"/icon/ms-icon-150x150.png",revision:"4178c388b23911f559bb8437776c5c5d"},{url:"/icon/ms-icon-310x310.png",revision:"5ed3dc4392ba720383f961c0cf5a5771"},{url:"/icon/ms-icon-70x70.png",revision:"121ce464f93d437afc32de541daaf161"},{url:"/images/authors/bruno.webp",revision:"04cc1cfb0307a3b2fdee17fd1f19f190"},{url:"/images/authors/renato.webp",revision:"02bd0763b04c364ab2a65e2f980d9f88"},{url:"/images/authors/tayna.webp",revision:"53358df4cf62814c798becf3c1729dee"},{url:"/images/logo/logo-big.webp",revision:"80b6f7dbaa55b78b9be103abc2152e92"},{url:"/images/logo/logo-icon.png",revision:"da6520a2c6f95f6a67f1bf77632c7fa7"},{url:"/images/logo/transparent/logo-big.webp",revision:"eb0efcf9a03902f87da6e0570af10ba7"},{url:"/images/logo/transparent/logo-icon.png",revision:"104d12f123136e43a6bb2a564b2f28ba"},{url:"/images/posts/a-provisional-logo-and-name/animations-gif.gif",revision:"a89015724d3568b5aa22ce60fcd71b34"},{url:"/images/posts/a-provisional-logo-and-name/in-development.gif",revision:"54b544df3a726b00a300f5ead403a18a"},{url:"/images/posts/a-provisional-logo-and-name/logo-in-twitter.webp",revision:"2b8075afa73ca5070b40107e72cc8153"},{url:"/images/posts/a-provisional-logo-and-name/logo-in-wpp.webp",revision:"4065ce4f19ec60cf1c47afa6a3e41c3d"},{url:"/images/posts/a-provisional-logo-and-name/new-blog-page.webp",revision:"40a7c7fc7b02e6d70834337ceef8486e"},{url:"/images/posts/a-provisional-logo-and-name/provisional-logo.webp",revision:"7eb42000e2f0ae019d8a70e7f0edf9cb"},{url:"/images/posts/a-provisional-logo-and-name/tags-animation.gif",revision:"908117f826e0639ed9859b6823c589c8"},{url:"/images/posts/default-images-and-our-images-architecture/default-image-1.webp",revision:"f6de8decc79d63d1da68486832aea297"},{url:"/images/posts/default-images-and-our-images-architecture/default-image-2.webp",revision:"a34c905401475d9a35eb423012da01a4"},{url:"/images/posts/default-images-and-our-images-architecture/default-image-3.webp",revision:"532f096ab1434213f4626e6df6a6b324"},{url:"/images/posts/default-images-and-our-images-architecture/default-image-4.webp",revision:"2fee4636f1134f65a026adcb198d0eed"},{url:"/images/posts/default-images-and-our-images-architecture/dobro.webp",revision:"23ab7617e4be2ed4062a735ade30e43f"},{url:"/images/posts/default-images-and-our-images-architecture/folder-organization.webp",revision:"8a67e82b7e5fc4b17cfdddf65bcb5815"},{url:"/images/posts/default-images-and-our-images-architecture/generator-site.webp",revision:"6726f1ee1016fe54d081f4fb23db7764"},{url:"/images/posts/default-images-and-our-images-architecture/posts-exemple.webp",revision:"97bbe99318d05e6fae5fb77e832aeb4d"},{url:"/images/posts/default-images-and-our-images-architecture/store-images.webp",revision:"b512c98d249c86c9110e5bc523984a9e"},{url:"/images/posts/default-images/1.webp",revision:"f6de8decc79d63d1da68486832aea297"},{url:"/images/posts/default-images/2.webp",revision:"a34c905401475d9a35eb423012da01a4"},{url:"/images/posts/default-images/3.webp",revision:"532f096ab1434213f4626e6df6a6b324"},{url:"/images/posts/default-images/4.webp",revision:"2fee4636f1134f65a026adcb198d0eed"},{url:"/images/posts/discovering-meta-tags-plus-website-uptades/header-animations.gif",revision:"762331b4a9e84ad0251bd96637d19667"},{url:"/images/posts/discovering-meta-tags-plus-website-uptades/metatags-cover.webp",revision:"bb7ea1714a3974f46524e69557e9b171"},{url:"/images/posts/discovering-meta-tags-plus-website-uptades/post-in-twitter.webp",revision:"3de6e2b1c1f45336450edf6ddec59897"},{url:"/images/posts/discovering-meta-tags-plus-website-uptades/post-meta-tags.webp",revision:"ecc06fe4ec676db35f2e4414a88490c0"},{url:"/images/posts/reunion-0-1/baleia-palette.webp",revision:"e7def26e0b9cd79afeda4f29b21742ec"},{url:"/images/posts/reunion-0-1/cimento-palette.webp",revision:"2587b44e027101cdf26001da47ced261"},{url:"/images/posts/reunion-0-1/granito-palette.webp",revision:"120ebf365441d77266f1890902d3edd6"},{url:"/images/posts/reunion-0-1/mouse-palette.webp",revision:"b4759471a048555db97eb121e78ce35c"},{url:"/images/posts/reunion-0-1/painted-us-cover.webp",revision:"d0af8122b89e5b50bf0f31efc65d2207"},{url:"/images/posts/reunion-0-1/painted-us.webp",revision:"819c44c203a7b7245cdafa4dfee6d27d"},{url:"/images/posts/start-to-build-this-website/first-version.gif",revision:"a1d309676a59ac8aefb21ca26ec90d2e"},{url:"/images/posts/the-easiest-way-to-achieve-dark-theme/cover.webp",revision:"ac304778c8f16291e8470a91dd130161"},{url:"/images/posts/the-way-we-do-markdown-transcription/cover.webp",revision:"fd52315dc896be4f83ee2d08e2de1431"},{url:"/lotties/404-lottie.json",revision:"a0b60af807673f9bafef253c2a574038"},{url:"/lotties/programmer-lottie.json",revision:"55fe7a9b0886ce909563b3fa3ef51d73"},{url:"/manifest.json",revision:"14609678a6e0ed7455bdfcdf4d910697"},{url:"/robots.txt",revision:"13a5a0cbc03f1172cde28b530dfb3265"},{url:"/sitemap-0.xml",revision:"c0d0486871cbc7dc7102135cd06d4163"},{url:"/sitemap.xml",revision:"64ffd78c2252ba5c078933b7c28b73a3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
