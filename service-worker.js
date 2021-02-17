/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "904a3ccfc493b2cd81b7becc12895fc0"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "41c026c15a7d87b4aea55ed0344c0739"
  },
  {
    "url": "assets/css/0.styles.2cec29ef.css",
    "revision": "f4a837204b628e243a1a041160e4f166"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.87f9d450.svg",
    "revision": "87f9d450e4ce8f1d445f17b1cb0a4e6a"
  },
  {
    "url": "assets/js/1.5356e291.js",
    "revision": "ea116b73508fd7162da344cb0b0d299a"
  },
  {
    "url": "assets/js/10.3786a6c5.js",
    "revision": "16f01e18a9e39bafbefb49ae0307e507"
  },
  {
    "url": "assets/js/11.f7940651.js",
    "revision": "60116fec49c186d0dae3e1864724ed55"
  },
  {
    "url": "assets/js/12.5938b05f.js",
    "revision": "6d6e24d51b400a888fc623060a6fda19"
  },
  {
    "url": "assets/js/13.2b6aa94c.js",
    "revision": "b4670b93e55418388569fed5a43ca7d2"
  },
  {
    "url": "assets/js/14.73179210.js",
    "revision": "8288ee86e9dec5493136c638e47a4d77"
  },
  {
    "url": "assets/js/15.4a2982a2.js",
    "revision": "cf480a2682ec49d365fe7e423cc5a785"
  },
  {
    "url": "assets/js/16.5d3bb788.js",
    "revision": "345634fc3470dedada2f96560ad7d10f"
  },
  {
    "url": "assets/js/17.c0daf22d.js",
    "revision": "f6a6a2c80be2d023fae6bbf3556e0066"
  },
  {
    "url": "assets/js/18.00ef7e79.js",
    "revision": "76db616816d772e4387c46f322141188"
  },
  {
    "url": "assets/js/19.639bfc8b.js",
    "revision": "b459ceb9cf61d2c3d2d98d2369ad4228"
  },
  {
    "url": "assets/js/2.485724b7.js",
    "revision": "5b4a6358d17228dd616666d215c78c9f"
  },
  {
    "url": "assets/js/20.5a63400a.js",
    "revision": "4fb74ed2b7ba4c34336c678cf8bcc3c1"
  },
  {
    "url": "assets/js/21.7779aab2.js",
    "revision": "6e2898e726bef99aa4076b352c471e4b"
  },
  {
    "url": "assets/js/22.a673ee11.js",
    "revision": "2e25dc37ce6ee26cc0203ff809c83f40"
  },
  {
    "url": "assets/js/23.355d292d.js",
    "revision": "4876afe294a2679943df7dc1f61d010c"
  },
  {
    "url": "assets/js/24.392ffd8c.js",
    "revision": "be96ea020c82f0a4e5973b850aa7b178"
  },
  {
    "url": "assets/js/25.e9f464f7.js",
    "revision": "36d7a4be6da492acba612a6c5fa94275"
  },
  {
    "url": "assets/js/26.b8188983.js",
    "revision": "2f89bb857003cd2ddfbd517eeda0fba5"
  },
  {
    "url": "assets/js/27.3779e656.js",
    "revision": "306a09f5743e3a544aef70f0cc318bd6"
  },
  {
    "url": "assets/js/28.ca1f2ff0.js",
    "revision": "2d1be9268ca4282998c63e9eb3011013"
  },
  {
    "url": "assets/js/29.cbb18481.js",
    "revision": "cbb097d6d950871c88988486c3086643"
  },
  {
    "url": "assets/js/3.33beb6f0.js",
    "revision": "26bbd48520d826bd694ca8c9f1828a14"
  },
  {
    "url": "assets/js/30.3b447a06.js",
    "revision": "714faff92313994318e240566ad557c7"
  },
  {
    "url": "assets/js/31.d5f3771a.js",
    "revision": "de356f94dd82c3b67e9fe438ab329c4d"
  },
  {
    "url": "assets/js/32.cd2e1533.js",
    "revision": "aa56a77e765877daf5e4bf79432764ca"
  },
  {
    "url": "assets/js/33.86c2e84a.js",
    "revision": "824c5afea15f1078e5a5b670d3caa64d"
  },
  {
    "url": "assets/js/34.196f295d.js",
    "revision": "cb19da0b7d5f24f219122199aa238774"
  },
  {
    "url": "assets/js/35.32f26fb8.js",
    "revision": "69d409f973bf5be4b6dd6fb73f51b5dc"
  },
  {
    "url": "assets/js/36.ed042025.js",
    "revision": "a1c5a5ae70795a00fb480784d166665f"
  },
  {
    "url": "assets/js/37.1c5126dc.js",
    "revision": "05c4f15d8a5e234f042219946233d9f4"
  },
  {
    "url": "assets/js/38.e394613e.js",
    "revision": "bd9c806b1b3c2b03cee043a8bec82169"
  },
  {
    "url": "assets/js/39.e3b1ea23.js",
    "revision": "80d19b5957035e84c17040d3fb45aee0"
  },
  {
    "url": "assets/js/4.7ac88345.js",
    "revision": "050d3432677df0ef95d7dea2aae367f1"
  },
  {
    "url": "assets/js/40.8b4d65c3.js",
    "revision": "9f62b66e3c64a5e91ef01ec27809f165"
  },
  {
    "url": "assets/js/41.5288f793.js",
    "revision": "89c44f1950bf212eb4350858f2b2931f"
  },
  {
    "url": "assets/js/42.9d4aa719.js",
    "revision": "4162eca7c42a1260c26a8a1bace085ee"
  },
  {
    "url": "assets/js/43.deab92ab.js",
    "revision": "ddf9a504353664b9bb23dd42ce5046d6"
  },
  {
    "url": "assets/js/44.608b6b19.js",
    "revision": "adb0467cdf392f9a710771378900749a"
  },
  {
    "url": "assets/js/45.8d1b84de.js",
    "revision": "8edf696191502a27786973c276938ae6"
  },
  {
    "url": "assets/js/46.219aa55b.js",
    "revision": "fb5ac7eaaf68317b6f9d125afff94366"
  },
  {
    "url": "assets/js/47.02f68e98.js",
    "revision": "cc24ef5a07afafa98a226e6bfeb25b0c"
  },
  {
    "url": "assets/js/48.abd04c65.js",
    "revision": "9159cf0c7eb5fb70a0afa51644660d5c"
  },
  {
    "url": "assets/js/49.45e4ed4a.js",
    "revision": "044b5823a91a13b23d18c7486c728572"
  },
  {
    "url": "assets/js/5.8aa9718c.js",
    "revision": "2ece813f376777972a4ed1c182bd0d0c"
  },
  {
    "url": "assets/js/50.a9d05454.js",
    "revision": "475a6f31246b5688ed3af8dd23e79b50"
  },
  {
    "url": "assets/js/51.4bc18dbe.js",
    "revision": "9621f040d19c832a69de83d69b5d6312"
  },
  {
    "url": "assets/js/52.cdd19ee5.js",
    "revision": "68bf7cefc4e53662cd8f795953fda16d"
  },
  {
    "url": "assets/js/53.2cb95a85.js",
    "revision": "fe0837e4f222b429143dd4b0ae293775"
  },
  {
    "url": "assets/js/54.bc084b90.js",
    "revision": "eb6f8ec962cead3380f852ac93d98f0a"
  },
  {
    "url": "assets/js/55.8f9ac8d0.js",
    "revision": "ee2fba4401456119405e72c92120d39c"
  },
  {
    "url": "assets/js/56.b3330bad.js",
    "revision": "2c90114022f17d3e0a1a5a8df8efc653"
  },
  {
    "url": "assets/js/57.94c04aca.js",
    "revision": "ef8451957920b4e1b1cfa8d53132245e"
  },
  {
    "url": "assets/js/58.09e878a1.js",
    "revision": "91663a9e9c7852feca02820d5181fae6"
  },
  {
    "url": "assets/js/59.8720956b.js",
    "revision": "ffceba36455214f17b686eafd8b2f5bf"
  },
  {
    "url": "assets/js/6.8a1df3c3.js",
    "revision": "38ed7488d6d695290a913619397b5ba9"
  },
  {
    "url": "assets/js/60.e458c372.js",
    "revision": "a25ab9697c10fe9fdb7396a8fa1be069"
  },
  {
    "url": "assets/js/7.d542e332.js",
    "revision": "4cbaf4d8bda6bbe056b09cab9d60a857"
  },
  {
    "url": "assets/js/9.95e199cd.js",
    "revision": "d8657467abdcfb442ef78b4ac8c31b5d"
  },
  {
    "url": "assets/js/app.fd6ce027.js",
    "revision": "36d0e9b9358e239e787af2bc36e56ec1"
  },
  {
    "url": "authors/henry.html",
    "revision": "99ae1c8bcc1e8aea96b6543e53e27962"
  },
  {
    "url": "authors/index.html",
    "revision": "4956a905356f8d6559374ac36f36c359"
  },
  {
    "url": "autores/henry.jpg",
    "revision": "bd1a559d0165c2aed472cebecfde0d33"
  },
  {
    "url": "autores/henrycgh.jpg",
    "revision": "7d84b7b9728c012d0df4f6ffed38fc33"
  },
  {
    "url": "blog-background.jpg",
    "revision": "e78b3327c97e8b848b95aaf12951a825"
  },
  {
    "url": "categories/entertainment.html",
    "revision": "48eb3d64d349a34880253afff1b6ea55"
  },
  {
    "url": "categories/es6.html",
    "revision": "d6434c8c55a347da4fa35dcaa65b9e2a"
  },
  {
    "url": "categories/html.html",
    "revision": "e433b0f34fdb437e2fe9f9b4178f4d81"
  },
  {
    "url": "categories/index.html",
    "revision": "d3e81c9be948e8d4e328dd84119024a3"
  },
  {
    "url": "categories/interview.html",
    "revision": "08ca0e9d363e4b228b387b5ca7080e17"
  },
  {
    "url": "categories/js.html",
    "revision": "277635479d9ed2f55306a444f2210164"
  },
  {
    "url": "categories/log.html",
    "revision": "bc22f67e97ee5968b927196545ec7c8e"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "f3d502ad2f836e5765e77cc6c40cc88a"
  },
  {
    "url": "contact/index.html",
    "revision": "420cf8f45dcd42a9435906c33003cee9"
  },
  {
    "url": "en/autores/index.html",
    "revision": "3f2837e3840b9e427099f96ddcef635a"
  },
  {
    "url": "en/autores/ktquez.html",
    "revision": "6534edc36f69f4676d3d2456006f8fd2"
  },
  {
    "url": "en/categorias/index.html",
    "revision": "b55c885f3f78f4f4ca052a777b342daf"
  },
  {
    "url": "en/categorias/vuejs.html",
    "revision": "579f2b03c6f37189e47995f44fec21b9"
  },
  {
    "url": "en/contacto/index.html",
    "revision": "870eeefefd7e77311765c095e0e33331"
  },
  {
    "url": "en/index.html",
    "revision": "994022d254038edccfedad61fcefc6c1"
  },
  {
    "url": "en/posts/index.html",
    "revision": "302dbf53ab9d4ec288f254ac2bb5ffc2"
  },
  {
    "url": "en/posts/mi-primir-post.html",
    "revision": "5ef451d36ad3555815088bb7e1549e01"
  },
  {
    "url": "en/sobre/index.html",
    "revision": "1afa8c9d88f4edc60f819c65348b80f4"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "henry-blog-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "henry-blog-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "images/posts/2019/7/second,w_680.png",
    "revision": "8f54eea0cee5692032edade3600d8f96"
  },
  {
    "url": "images/posts/2019/7/second.png",
    "revision": "8f54eea0cee5692032edade3600d8f96"
  },
  {
    "url": "images/posts/2019/8/interview_vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "images/posts/2019/9/chenqingling.jpg",
    "revision": "ac40a693d11def8a27743291bbc6be6c"
  },
  {
    "url": "images/posts/2019/9/cors_01.png",
    "revision": "ced3b37fd5bff707aafc7851b2ca9e14"
  },
  {
    "url": "images/posts/2019/9/cors_02.png",
    "revision": "cba7e17584d5610673e1b9bc39ccc09f"
  },
  {
    "url": "images/posts/2019/9/cors_03.png",
    "revision": "e6a1e1ae073caec6155074595b544b01"
  },
  {
    "url": "images/posts/2019/9/cors_04.png",
    "revision": "a7166e67f01ca93079e3de318be55753"
  },
  {
    "url": "images/posts/2019/9/cors_05.png",
    "revision": "433d62514fe3748ba76b80bc4be8b97c"
  },
  {
    "url": "images/posts/2019/9/cors_06.png",
    "revision": "850829d2af1eb1325a52979517d2d7c7"
  },
  {
    "url": "images/posts/2019/9/cors_07.png",
    "revision": "5107429a1bbac4fb5fd52c9a7982fb42"
  },
  {
    "url": "images/posts/2019/9/cors_08.png",
    "revision": "0feefb4befae3673436159d5cac9a39c"
  },
  {
    "url": "images/posts/2019/9/cors_09.png",
    "revision": "3e41aac7bc68d48d54561ccc73e51815"
  },
  {
    "url": "images/posts/2019/9/cors_10.png",
    "revision": "f20e74cae7de65dee1affe2bab6c48ec"
  },
  {
    "url": "images/posts/2019/9/cors_11.png",
    "revision": "4b67b457680095e597784dd884f5fedb"
  },
  {
    "url": "images/posts/2019/9/prototype.png",
    "revision": "ee2aa5c989a2fda37dfa9104f72e2469"
  },
  {
    "url": "index.html",
    "revision": "82a5c7c0f1bef57a3a99d87141dc7244"
  },
  {
    "url": "interview/interview001.jpg",
    "revision": "e8ac2f8a6c5b4f9ef9cab68dde7a506a"
  },
  {
    "url": "interview/interview002.jpg",
    "revision": "fd98baf3621b2918882fa0f783bff5cc"
  },
  {
    "url": "interview/interview003.jpg",
    "revision": "1dbf13306d10a502fbc9e71b0705c6e1"
  },
  {
    "url": "lucs.jpg",
    "revision": "eddd1475c7b2bbd468ee7a5cec8e95cf"
  },
  {
    "url": "posts/cors.html",
    "revision": "2d59920d7263ef7515ff3e39a360291d"
  },
  {
    "url": "posts/index.html",
    "revision": "60d088050a6aba2406440addc9747ce8"
  },
  {
    "url": "posts/interview_01.html",
    "revision": "f20beef0a9949a2f97d966ef3a23b3cf"
  },
  {
    "url": "posts/interview_css.html",
    "revision": "12476ae9f655ed7a8d4999656600fa50"
  },
  {
    "url": "posts/interview_html.html",
    "revision": "7b062130035e448181821bb1795e782a"
  },
  {
    "url": "posts/interview_http.html",
    "revision": "5fd11de62a86827ea306c486cbbdee62"
  },
  {
    "url": "posts/interview_js.html",
    "revision": "8be321e28b453d5ee2a5649ba12e0600"
  },
  {
    "url": "posts/interview_vue.html",
    "revision": "4c4f1e312627521e2bdddcbd94e72a25"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "5b38fb63a374af9877e23e22f2b5949d"
  },
  {
    "url": "posts/second.html",
    "revision": "5d7881e692817d02f333c32f4eb04568"
  },
  {
    "url": "posts/this_js.html",
    "revision": "3dbad91704dc023fe9377a33e957022a"
  },
  {
    "url": "vuelogo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
