(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[173],{821:function(t,e,i){"use strict";i.r(e),i.d(e,"previewWebStyleSymbol",(function(){return a}));var n=i(57),h=i(32);function a(t,e,i){var a=t.thumbnail&&t.thumbnail.url;return a?Object(n.default)(a,{responseType:"image"}).then((function(t){var e=function(t,e){var i=!/\\.svg$/i.test(t.src)&&e&&e.disableUpsampling,n=Math.max(t.width,t.height),a=e&&null!=e.maxSize?Object(h.c)(e.maxSize):120;i&&(a=Math.min(n,a));var r=Math.min(a,e&&null!=e.size?Object(h.c)(e.size):n);if(r!==n){var u=0!==t.width&&0!==t.height?t.width/t.height:1;u>=1?(t.width=r,t.height=r/u):(t.width=r*u,t.height=r)}return t}(t.data,i);return i&&i.node?(i.node.appendChild(e),i.node):e})):t.fetchSymbol().then((function(t){return e(t,i)}))}}}]);
//# sourceMappingURL=173.854bc5f7.chunk.js.map