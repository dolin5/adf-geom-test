(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[83],{462:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return h})),r.d(t,"i",(function(){return i})),r.d(t,"j",(function(){return v})),r.d(t,"k",(function(){return p})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return f}));var n=r(8);r(48),r(233);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return[e[0],e[1],e[2],e[3],e[4],e[5]]}function i(e,t,r,n,i,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:a();return l[0]=e,l[1]=t,l[2]=r,l[3]=n,l[4]=i,l[5]=o,l}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,r){var n=t.length,a=e[0],i=e[1],o=e[2],l=e[3],u=e[4],s=e[5];if(r)for(var c=0;c<n;c++){var b=t[c];a=Math.min(a,b[0]),i=Math.min(i,b[1]),o=Math.min(o,b[2]),l=Math.max(l,b[0]),u=Math.max(u,b[1]),s=Math.max(s,b[2])}else for(var f=0;f<n;f++){var y=t[f];a=Math.min(a,y[0]),i=Math.min(i,y[1]),l=Math.max(l,y[0]),u=Math.max(u,y[1])}e[0]=a,e[1]=i,e[2]=o,e[3]=l,e[4]=u,e[5]=s}function s(e){return e[0]>=e[3]?0:e[3]-e[0]}function c(e){return e[1]>=e[4]?0:e[4]-e[1]}function b(e){return e[2]>=e[5]?0:e[5]-e[2]}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return t[0]=s(e),t[1]=c(e),t[2]=b(e),t}function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function v(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function d(e){return e?v(e,m):a(m)}function h(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function O(e){return 6===e.length}function j(e,t,r){if(Object(n.h)(e)||Object(n.h)(t))return e===t;if(!O(e)||!O(t))return!1;if(r){for(var a=0;a<e.length;a++)if(!r(e[a],t[a]))return!1}else for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}var m=[1/0,1/0,1/0,-1/0,-1/0,-1/0],g=[0,0,0,0,0,0];a()},607:function(e,t,r){"use strict";r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return g}));var n=r(6),a=r.n(n),i=r(14),o=r(12),l=r(62),u=r(60),s=r(171),c=r(57),b=r(17),f=r(24),y=r(37),p=r(462),v=r(253),d=r(258),h=r(110),O={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function j(e){var t=e.folders||[],r=t.slice(),n=new Map,a=new Map,i=new Map,o=new Map,l=new Map,u={esriGeometryPoint:a,esriGeometryPolyline:i,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=Object(b.a)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;n.set(r,t);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?k(a,l,e.featureSet.features):"esriGeometryPolyline"===r?k(i,l,e.featureSet.features):"esriGeometryPolygon"===r&&k(o,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){l.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var a=function(e,t,r){var n=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);a&&r.push(a)}))})),r.forEach((function(e){e.featureInfos&&(e.points=Object(b.a)(n.get("esriGeometryPoint")),e.polylines=Object(b.a)(n.get("esriGeometryPolyline")),e.polygons=Object(b.a)(n.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((function(t){switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var r=u[t.type].get(t.id);r&&e[O[t.type]].featureSet.features.push(r);break;case"GroundOverlay":var n=l.get(t.id);n&&e.mapImages.push(n)}})),e.fullExtent=w([e]))}));var s=w(r);return{folders:t,sublayers:r,extent:s}}function m(e,t,r,n){var a=u.b&&u.b.findCredential(e);e=Object(f.e)(e,{token:a&&a.token});var i=l.a.kmlServiceUrl;return Object(c.default)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=[],i={},o=t.sublayers,l=t.folders.map((function(e){return e.id}));return o.forEach((function(t){var o=new e;if(r?o.read(t,r):o.read(t),n.length&&l.indexOf(o.id)>-1&&(o.visible=-1!==n.indexOf(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var u=i[t.parentFolderId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(o)}else a.unshift(o)})),a}function k(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function S(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(a.a.mark((function e(t){var r,n,o,l,u,c,b,f,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=h.default.fromJSON(t.featureSet).features,n=t.layerDefinition,o=Object(d.a)(n.drawingInfo.renderer),l=s.a.fromJSON(t.popupInfo),u=[],c=Object(i.a)(r),e.prev=2,c.s();case 4:if((b=c.n()).done){e.next=12;break}return f=b.value,e.next=8,o.getSymbolAsync(f);case 8:y=e.sent,f.symbol=y,f.popupTemplate=l,f.visible=!0,u.push(f);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",u);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function w(e){var t,r=Object(p.b)(),n=Object(p.b)(p.a),a=Object(i.a)(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;if(o.polygons&&o.polygons.featureSet&&o.polygons.featureSet.features){var l,u=Object(i.a)(o.polygons.featureSet.features);try{for(u.s();!(l=u.n()).done;){var s=l.value;Object(v.b)(r,s.geometry),Object(p.e)(n,r)}}catch(k){u.e(k)}finally{u.f()}}if(o.polylines&&o.polylines.featureSet&&o.polylines.featureSet.features){var c,b=Object(i.a)(o.polylines.featureSet.features);try{for(b.s();!(c=b.n()).done;){var f=c.value;Object(v.b)(r,f.geometry),Object(p.e)(n,r)}}catch(k){b.e(k)}finally{b.f()}}if(o.points&&o.points.featureSet&&o.points.featureSet.features){var d,h=Object(i.a)(o.points.featureSet.features);try{for(h.s();!(d=h.n()).done;){var O=d.value;Object(v.b)(r,O.geometry),Object(p.e)(n,r)}}catch(k){h.e(k)}finally{h.f()}}if(o.mapImages){var j,m=Object(i.a)(o.mapImages);try{for(m.s();!(j=m.n()).done;){var g=j.value;Object(v.b)(r,g.extent),Object(p.e)(n,r)}}catch(k){m.e(k)}finally{m.f()}}}}catch(k){a.e(k)}finally{a.f()}return Object(p.d)(n,p.a)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:y.a.WGS84}}},755:function(e,t,r){"use strict";r.r(t);var n,a=r(14),i=r(6),o=r.n(i),l=r(12),u=r(28),s=r(11),c=r(2),b=r(3),f=r(39),y=r(36),p=r(4),v=r(5),d=r(0),h=(r(65),r(30)),O=r(144),j=r(8),m=r(323),g=r(21),k=r(24),S=r(1),x=(r(10),r(13)),w=(r(9),r(25)),M=r(7),E=r(23),I=r(37),_=r(207),P=r(329),F=r(326),G=r(325),L=r(335),N=r(327),T=r(98),C=r(87),J=r(19),R=r(93),A=r(74),K=r(26),z=r(42),H=r(607),V=r(48),W=n=function(e){Object(p.a)(r,e);var t=Object(v.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return Object(b.a)(r,[{key:"initialize",value:function(){var e=this;Object(K.j)(this,"networkLink").then((function(){return Object(K.l)(e,"visible")})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=Object(j.i)(e)?e.signal:null,a=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=Object(H.a)(e.sublayers);t.fullExtent=V.a.fromJSON(r),t.sourceJSON=e;var a=Object(x.m)(h.a.ofType(n),Object(H.e)(n,e));t.sublayers?t.sublayers.addMany(a):t.sublayers=a,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(a),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(x.m)(h.a.ofType(n),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return Object(H.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return Object(H.d)(e.data)}))}}]),r}(C.a.EventedMixin(Object(J.b)(R.a)));Object(d.a)([Object(S.b)()],W.prototype,"description",void 0),Object(d.a)([Object(S.b)()],W.prototype,"id",void 0),Object(d.a)([Object(S.b)({readOnly:!0,value:null})],W.prototype,"networkLink",void 0),Object(d.a)([Object(S.b)({json:{write:{allowNull:!0}}})],W.prototype,"parent",void 0),Object(d.a)([Object(S.b)({value:null,json:{write:{allowNull:!0}}})],W.prototype,"sublayers",null),Object(d.a)([Object(z.a)("sublayers")],W.prototype,"castSublayers",null),Object(d.a)([Object(S.b)({value:null,json:{read:{source:"name",reader:function(e){return Object(A.d)(e)}}}})],W.prototype,"title",void 0),Object(d.a)([Object(S.b)({value:!0})],W.prototype,"visible",null),Object(d.a)([Object(w.a)("visible",["visibility"])],W.prototype,"readVisible",null),Object(d.a)([Object(S.b)()],W.prototype,"sourceJSON",void 0),Object(d.a)([Object(S.b)({value:null})],W.prototype,"layer",null),Object(d.a)([Object(S.b)({type:V.a})],W.prototype,"fullExtent",void 0);var D=W=n=Object(d.a)([Object(M.a)("esri.layers.support.KMLSublayer")],W),Y=["kml","xml"],q=function(e){Object(p.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a)))._visibleFolders=[],e.allSublayers=new O.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=I.a.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return Object(b.a)(r,[{key:"initialize",value:function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return Object(H.e)(D,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var a=n[0];a.networkLink||(a.visible&&r.push(a.id),a.sublayers&&n.push.apply(n,Object(u.a)(a.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(k.k)(this.url,Y)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=Object(j.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(g.u).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){Object(f.a)(Object(y.a)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:Object(H.b)(a.url,a.outSpatialReference,a.refreshInterval,t)}));case 2:r=e.sent,(n=Object(H.d)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;this.extent&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,i=Object(a.a)(r.sublayers.items);try{for(i.s();!(n=i.n()).done;){var o=n.value;t(o),o.visible&&o.fullExtent&&(e?e.union(o.fullExtent):e=o.fullExtent.clone())}}catch(l){i.e(l)}finally{i.f()}}}(this),e}}]),r}(Object(P.a)(Object(L.a)(Object(N.a)(Object(F.a)(Object(G.a)(Object(m.a)(_.a)))))));Object(d.a)([Object(S.b)({readOnly:!0})],q.prototype,"allSublayers",void 0),Object(d.a)([Object(S.b)({type:I.a})],q.prototype,"outSpatialReference",void 0),Object(d.a)([Object(S.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],q.prototype,"path",void 0),Object(d.a)([Object(S.b)({readOnly:!0,json:{read:!1,write:!1}})],q.prototype,"legendEnabled",void 0),Object(d.a)([Object(S.b)({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),Object(d.a)([Object(S.b)({type:["KML"]})],q.prototype,"operationalLayerType",void 0),Object(d.a)([Object(S.b)({})],q.prototype,"resourceInfo",void 0),Object(d.a)([Object(S.b)({type:h.a.ofType(D),json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),Object(d.a)([Object(w.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],q.prototype,"readSublayersFromItemOrWebMap",null),Object(d.a)([Object(w.a)("service","sublayers",["sublayers"])],q.prototype,"readSublayers",null),Object(d.a)([Object(E.a)("sublayers")],q.prototype,"writeSublayers",null),Object(d.a)([Object(S.b)({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),Object(d.a)([Object(S.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],q.prototype,"title",null),Object(d.a)([Object(S.b)(T.n)],q.prototype,"url",void 0),Object(d.a)([Object(S.b)({readOnly:!0})],q.prototype,"visibleSublayers",null),Object(d.a)([Object(S.b)({type:V.a})],q.prototype,"extent",void 0),Object(d.a)([Object(S.b)()],q.prototype,"fullExtent",null);var U=q=Object(d.a)([Object(M.a)("esri.layers.KMLLayer")],q);t.default=U}}]);
//# sourceMappingURL=83.c49889c4.chunk.js.map