(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[141],{652:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var r=a(14),n=1;function i(e,t){var a,n=0,i=Object(r.a)(t);try{for(i.s();!(a=i.n()).done;){var o,l=null==(o=a.value.attributes)?void 0:o[e];"number"==typeof l&&isFinite(l)&&(n=Math.max(n,l))}}catch(c){i.e(c)}finally{i.f()}return n}},756:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(6),i=a.n(n),o=a(12),l=a(15),c=a(39),y=a(36),s=a(14),u=a(2),p=a(3),b=a(4),f=a(5),O=a(0),d=(a(65),a(73)),j=(a(51),a(30)),m=a(18),v=a(17),h=a(8),g=a(323),S=a(54),w=a(100),k=a(1),N=(a(13),a(10),a(9),a(25)),x=a(7),J=a(23),L=a(303),T=a(252),C=a(35),M=a(190),I=a(207),R=a(329),E=a(327),D=a(308),P=a(349),G=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).elevationInfo=null,r.graphics=new D.b,r.screenSizePerspectiveEnabled=!0,r.type="graphics",r.internal=!1,r}return Object(p.a)(a,[{key:"destroy",value:function(){this.removeAll(),this.graphics.destroy()}},{key:"add",value:function(e){return this.graphics.add(e),this}},{key:"addMany",value:function(e){return this.graphics.addMany(e),this}},{key:"removeAll",value:function(){return this.graphics.removeAll(),this}},{key:"remove",value:function(e){this.graphics.remove(e)}},{key:"removeMany",value:function(e){this.graphics.removeMany(e)}},{key:"on",value:function(e,t){return Object(c.a)(Object(y.a)(a.prototype),"on",this).call(this,e,t)}},{key:"graphicChanged",value:function(e){this.emit("graphic-update",e)}}]),a}(Object(R.a)(Object(E.a)(I.a)));Object(O.a)([Object(k.b)({type:P.a})],G.prototype,"elevationInfo",void 0),Object(O.a)([Object(k.b)(Object(D.c)())],G.prototype,"graphics",void 0),Object(O.a)([Object(k.b)({type:["show","hide"]})],G.prototype,"listMode",void 0),Object(O.a)([Object(k.b)()],G.prototype,"screenSizePerspectiveEnabled",void 0),Object(O.a)([Object(k.b)({readOnly:!0})],G.prototype,"type",void 0),Object(O.a)([Object(k.b)({constructOnly:!0})],G.prototype,"internal",void 0);var _=G=Object(O.a)([Object(x.a)("esri.layers.GraphicsLayer")],G),F=a(652),z=a(326),A=a(325),B=a(208),W=a(113),q=a(80),H=a(132),K=a(135),Q=a(37),U=a(48);function V(e){return e.layers.some((function(e){return null!=e.layerDefinition.visibilityField}))}var X=new B.a({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),Y=new B.a({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0}),Z=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.apply(this,arguments)).visibilityMode="inherited",e}return Object(p.a)(a,[{key:"initialize",value:function(){var e,t=this,a=Object(s.a)(this.graphics);try{for(a.s();!(e=a.n()).done;){e.value.sourceLayer=this.layer}}catch(r){a.e(r)}finally{a.f()}this.graphics.on("after-add",(function(e){e.item.sourceLayer=t.layer})),this.graphics.on("after-remove",(function(e){e.item.sourceLayer=null}))}},{key:"sublayers",get:function(){return this.graphics}}]),a}(_);Object(O.a)([Object(k.b)({readOnly:!0})],Z.prototype,"sublayers",null),Object(O.a)([Object(k.b)()],Z.prototype,"layer",void 0),Object(O.a)([Object(k.b)({readOnly:!0})],Z.prototype,"visibilityMode",void 0),Z=Object(O.a)([Object(x.a)("esri.layers.MapNotesLayer.MapNotesSublayer")],Z);var $=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new W.a).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new q.a).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new H.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new H.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new K.a).toJSON()}],ee=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).capabilities={operations:{supportsMapNotesEditing:!0}},r.featureCollections=null,r.featureCollectionJSON=null,r.featureCollectionType="notes",r.legendEnabled=!1,r.minScale=0,r.maxScale=0,r.spatialReference=Q.a.WGS84,r.sublayers=new j.a($.map((function(e){return new Z({id:e.layerId,title:e.title,layer:Object(l.a)(r)})}))),r.title="Map Notes",r.type="map-notes",r.visibilityMode="inherited",r}return Object(p.a)(a,[{key:"readCapabilities",value:function(e,t,a){return{operations:{supportsMapNotesEditing:!V(t)&&"portal-item"!==(null==a?void 0:a.origin)}}}},{key:"readFeatureCollections",value:function(e,t,a){if(!V(t))return null;var r=t.layers.map((function(e){var t=new M.default;return t.read(e,a),t}));return new j.a({items:r})}},{key:"readLegacyfeatureCollectionJSON",value:function(e,t){return V(t)?Object(v.a)(t.featureCollection):null}},{key:"readFullExtent",value:function(e,t){if(!t.layers.length)return new U.a({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:Q.a.WGS84});var a=Q.a.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((function(e,t){var a=t.layerDefinition.extent;return a?U.a.fromJSON(a).union(e):e}),new U.a({spatialReference:a}))}},{key:"readMinScale",value:function(e,t){var a,r=Object(s.a)(t.layers);try{for(r.s();!(a=r.n()).done;){var n=a.value;if(null!=n.layerDefinition.minScale)return n.layerDefinition.minScale}}catch(i){r.e(i)}finally{r.f()}return 0}},{key:"readMaxScale",value:function(e,t){var a,r=Object(s.a)(t.layers);try{for(r.s();!(a=r.n()).done;){var n=a.value;if(null!=n.layerDefinition.maxScale)return n.layerDefinition.maxScale}}catch(i){r.e(i)}finally{r.f()}return 0}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"readSpatialReference",value:function(e,t){return t.layers.length?Q.a.fromJSON(t.layers[0].layerDefinition.spatialReference):Q.a.WGS84}},{key:"readSublayers",value:function(e,t,a){var r=this;if(V(t))return null;for(var n=[],i=function(e){var a=t.layers[e],i=a.layerDefinition,o=a.featureSet,c=null!=(l=i.geometryType)?l:o.geometryType,y=$.find((function(e){var t,a,r;return c===e.geometryTypeJSON&&(null==(t=i.drawingInfo)||null==(a=t.renderer)||null==(r=a.symbol)?void 0:r.type)===e.identifyingSymbol.type}));if(y){var s=new Z({id:y.layerId,title:i.name,layer:r,graphics:o.features.map((function(e){var t=e.geometry,a=e.symbol,r=e.attributes,n=e.popupInfo;return d.a.fromJSON({attributes:r,geometry:t,symbol:a,popupTemplate:n})}))});n.push(s)}},o=0;o<t.layers.length;o++){var l;i(o)}return new j.a(n)}},{key:"writeSublayers",value:function(e,t,a,r){var n=this,i=this.minScale,o=this.maxScale;if(!Object(h.h)(e)){var l=e.some((function(e){return e.graphics.length>0}));if(this.capabilities.operations.supportsMapNotesEditing){var c,y=[],u=this.spatialReference.toJSON(),p=Object(s.a)(e);try{e:for(p.s();!(c=p.n()).done;){var b,f=c.value,O=Object(s.a)(f.graphics);try{for(O.s();!(b=O.n()).done;){var d=b.value;if(Object(h.i)(d.geometry)){u=d.geometry.spatialReference.toJSON();break e}}}catch(k){O.e(k)}finally{O.f()}}}catch(k){p.e(k)}finally{p.f()}var j,v=Object(s.a)($);try{var g=function(){var t=j.value,a=e.find((function(e){return t.layerId===e.id}));n._writeMapNoteSublayer(y,a,t,i,o,u,r)};for(v.s();!(j=v.n()).done;)g()}catch(k){v.e(k)}finally{v.f()}Object(S.c)("featureCollection.layers",y,t)}else{var w;l&&(null==r||null==(w=r.messages)||w.push(new m.a("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")))}}}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}},{key:"read",value:function(e,t){"featureCollection"in e&&(e=Object(v.a)(e),Object.assign(e,e.featureCollection)),Object(c.a)(Object(y.a)(a.prototype),"read",this).call(this,e,t)}},{key:"beforeSave",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,r,n,o,l,c,y,u,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(h.h)(this.sublayers)){e.next=2;break}return e.abrupt("return");case 2:t=null,a=[],r=Object(s.a)(this.sublayers),e.prev=5,r.s();case 7:if((n=r.n()).done){e.next=40;break}o=n.value,l=Object(s.a)(o.graphics),e.prev=10,l.s();case 12:if((c=l.n()).done){e.next=30;break}if(y=c.value,!Object(h.i)(y.geometry)){e.next=28;break}if(u=y.geometry,!t){e.next=26;break}if(e.t0=Object(C.c)(u.spatialReference,t),e.t0){e.next=24;break}if(e.t1=Object(L.a)(u.spatialReference,t)||Object(L.e)(),e.t1){e.next=23;break}return e.next=23,Object(L.g)();case 23:y.geometry=Object(L.h)(u,t);case 24:e.next=27;break;case 26:t=u.spatialReference;case 27:a.push(y);case 28:e.next=12;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(10),l.e(e.t2);case 35:return e.prev=35,l.f(),e.finish(35);case 38:e.next=7;break;case 40:e.next=45;break;case 42:e.prev=42,e.t3=e.catch(5),r.e(e.t3);case 45:return e.prev=45,r.f(),e.finish(45);case 48:return e.next=50,Object(T.a)(a.map((function(e){return e.geometry})));case 50:p=e.sent,a.forEach((function(e,t){return e.geometry=p[t]}));case 52:case"end":return e.stop()}}),e,this,[[5,42,45,48],[10,32,35,38]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findSublayer",value:function(e){var t,a;return Object(h.h)(this.sublayers)?null:null!=(t=null==(a=this.sublayers)?void 0:a.find((function(t){return t.id===e})))?t:null}},{key:"_writeMapNoteSublayer",value:function(e,t,a,r,n,i,o){var l=[];if(!Object(h.h)(t)){var c,y=Object(s.a)(t.graphics);try{for(y.s();!(c=y.n()).done;){var u=c.value;this._writeMapNote(l,u,a.geometryType,o)}}catch(p){y.e(p)}finally{y.f()}this._normalizeObjectIds(l,X),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(v.a)(a.identifyingSymbol)}},geometryType:a.geometryTypeJSON,minScale:r,maxScale:n,objectIdField:"OBJECTID",fields:[X.toJSON(),Y.toJSON()],spatialReference:i},featureSet:{features:l,geometryType:a.geometryTypeJSON}})}}},{key:"_writeMapNote",value:function(e,t,a,n){if(!Object(h.h)(t)){var i,o,l=t.geometry,c=t.symbol,y=t.popupTemplate;if(!Object(h.h)(l))if(l.type===a)if(Object(h.h)(c))null==n||null==(o=n.messages)||o.push(new w.a("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));else{var s={attributes:Object(r.a)({},t.attributes),geometry:l.toJSON(),symbol:c.toJSON()};Object(h.i)(y)&&(s.popupInfo=y.toJSON()),e.push(s)}else null==n||null==(i=n.messages)||i.push(new w.a("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(l.type,'" cannot be saved in "').concat(a,'" layer'),{graphic:t}))}}},{key:"_normalizeObjectIds",value:function(e,t){var a,r=t.name,n=Object(F.a)(r,e)+1,i=new Set,o=Object(s.a)(e);try{for(o.s();!(a=o.n()).done;){var l=a.value;l.attributes||(l.attributes={});var c=l.attributes;(null==c[r]||i.has(c[r]))&&(c[r]=n++),i.add(c[r])}}catch(y){o.e(y)}finally{o.f()}}}]),a}(Object(R.a)(Object(E.a)(Object(z.a)(Object(A.a)(Object(g.a)(I.a))))));Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"capabilities",void 0),Object(O.a)([Object(N.a)(["portal-item","web-map"],"capabilities",["layers"])],ee.prototype,"readCapabilities",null),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"featureCollections",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"featureCollections",["layers"])],ee.prototype,"readFeatureCollections",null),Object(O.a)([Object(k.b)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],ee.prototype,"featureCollectionJSON",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],ee.prototype,"readLegacyfeatureCollectionJSON",null),Object(O.a)([Object(k.b)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],ee.prototype,"featureCollectionType",void 0),Object(O.a)([Object(k.b)({json:{write:!1}})],ee.prototype,"fullExtent",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"fullExtent",["layers"])],ee.prototype,"readFullExtent",null),Object(O.a)([Object(k.b)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy:function(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],ee.prototype,"legendEnabled",void 0),Object(O.a)([Object(k.b)({type:["show","hide"]})],ee.prototype,"listMode",void 0),Object(O.a)([Object(k.b)({type:Number,nonNullable:!0,json:{write:!1}})],ee.prototype,"minScale",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"minScale",["layers"])],ee.prototype,"readMinScale",null),Object(O.a)([Object(k.b)({type:Number,nonNullable:!0,json:{write:!1}})],ee.prototype,"maxScale",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"maxScale",["layers"])],ee.prototype,"readMaxScale",null),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"multipointLayer",null),Object(O.a)([Object(k.b)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],ee.prototype,"operationalLayerType",void 0),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"pointLayer",null),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"polygonLayer",null),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"polylineLayer",null),Object(O.a)([Object(k.b)({type:Q.a})],ee.prototype,"spatialReference",void 0),Object(O.a)([Object(N.a)(["web-map","portal-item"],"spatialReference",["layers"])],ee.prototype,"readSpatialReference",null),Object(O.a)([Object(k.b)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],ee.prototype,"sublayers",void 0),Object(O.a)([Object(N.a)("web-map","sublayers",["layers"])],ee.prototype,"readSublayers",null),Object(O.a)([Object(J.a)("web-map","sublayers")],ee.prototype,"writeSublayers",null),Object(O.a)([Object(k.b)({readOnly:!0})],ee.prototype,"textLayer",null),Object(O.a)([Object(k.b)()],ee.prototype,"title",void 0),Object(O.a)([Object(k.b)({readOnly:!0,json:{read:!1}})],ee.prototype,"type",void 0);var te=ee=Object(O.a)([Object(x.a)("esri.layers.MapNotesLayer")],ee);t.default=te}}]);
//# sourceMappingURL=141.710a729b.chunk.js.map