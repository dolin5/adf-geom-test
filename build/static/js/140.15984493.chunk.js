(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[140],{578:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f}));var a=r(2),o=r(4),n=r(5),i=r(0),c=r(19),s=r(1),p=(r(10),r(13),r(9),r(29)),u=r(7),b=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number})],b.prototype,"nodesPerPage",void 0),Object(i.a)([Object(s.b)({type:Number})],b.prototype,"rootIndex",void 0),Object(i.a)([Object(s.b)({type:String})],b.prototype,"lodSelectionMetricType",void 0),b=Object(i.a)([Object(u.a)("esri.layer.support.I3SNodePageDefinition")],b);var l=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(i.a)([Object(s.b)({type:Number})],l.prototype,"factor",void 0),l=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialTexture")],l);var y=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:[Number]})],y.prototype,"baseColorFactor",void 0),Object(i.a)([Object(s.b)({type:l})],y.prototype,"baseColorTexture",void 0),Object(i.a)([Object(s.b)({type:l})],y.prototype,"metallicRoughnessTexture",void 0),Object(i.a)([Object(s.b)({type:Number})],y.prototype,"metallicFactor",void 0),Object(i.a)([Object(s.b)({type:Number})],y.prototype,"roughnessFactor",void 0),y=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var O=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return r}(c.a);Object(i.a)([Object(p.a)({opaque:"opaque",mask:"mask",blend:"blend"})],O.prototype,"alphaMode",void 0),Object(i.a)([Object(s.b)({type:Number})],O.prototype,"alphaCutoff",void 0),Object(i.a)([Object(s.b)({type:Boolean})],O.prototype,"doubleSided",void 0),Object(i.a)([Object(p.a)({none:"none",back:"back",front:"front"})],O.prototype,"cullFace",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"normalTexture",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"occlusionTexture",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"emissiveTexture",void 0),Object(i.a)([Object(s.b)({type:[Number]})],O.prototype,"emissiveFactor",void 0),Object(i.a)([Object(s.b)({type:y})],O.prototype,"pbrMetallicRoughness",void 0),O=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialDefinition")],O);var j=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(s.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],j.prototype,"name",void 0),Object(i.a)([Object(p.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],j.prototype,"format",void 0),j=Object(i.a)([Object(u.a)("esri.layer.support.I3STextureFormat")],j);var f=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:[j]})],f.prototype,"formats",void 0),Object(i.a)([Object(s.b)({type:Boolean})],f.prototype,"atlas",void 0),f=Object(i.a)([Object(u.a)("esri.layer.support.I3STextureSetDefinition")],f);var d=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],d.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:Number})],d.prototype,"component",void 0),d=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryAttribute")],d);var v=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({draco:"draco"})],v.prototype,"encoding",void 0),Object(i.a)([Object(s.b)({type:[String]})],v.prototype,"attributes",void 0),v=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryCompressedAttributes")],v);var h=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number})],h.prototype,"offset",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"position",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"normal",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"uv0",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"color",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"uvRegion",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"featureId",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"faceRange",void 0),Object(i.a)([Object(s.b)({type:v})],h.prototype,"compressedAttributes",void 0),h=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryBuffer")],h);var m=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({triangle:"triangle"})],m.prototype,"topology",void 0),Object(i.a)([Object(s.b)()],m.prototype,"geometryBuffers",void 0),m=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryDefinition")],m)},746:function(e,t,r){"use strict";r.r(t);var a=r(6),o=r.n(a),n=r(12),i=r(11),c=r(2),s=r(3),p=r(4),u=r(5),b=r(0),l=r(18),y=r(59),O=r(8),j=r(323),f=r(21),d=r(26),v=r(1),h=(r(10),r(13),r(9),r(25)),m=r(7),g=r(14),S=r(725),w=r(24),x=r(353),I=r(107),k=r(81);function T(e){return N[function(e){return e instanceof Blob?e.type:function(e){var t=Object(w.n)(e);return U[t]||R}(e.url)}(e)]||M}var N={},R="text/plain",M=N[R],U={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var _ in U)N[U[_]]=_;var F=r(67);function P(e){var t=Object(O.i)(e)&&e.origins?e.origins:[void 0];return function(r,a){var o,n=function(e,t,r){if(Object(O.i)(e)&&"resource"===e.type)return function(e,t,r){var a=Object(I.b)(t,r);return{type:String,read:function(e,t,r){var o=Object(F.d)(e,t,r);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer:function(t,o,n,c){if(!c||!c.resources)return"string"==typeof t?void(o[n]=Object(F.e)(t,c)):void(o[n]=t.write({},c));var s=function(e){return Object(O.h)(e)?null:"string"==typeof e?e:e.url}(t),p=s?Object(F.e)(s,Object(i.a)(Object(i.a)({},c),{},{verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,u=a.type!==String&&(!Object(S.a)(this)||c&&c.origin&&this.originIdOf(r)>Object(k.d)(c.origin));c&&c.portalItem&&Object(O.i)(p)&&!Object(w.s)(p)?u?function(e,t,r,a,o,n,i,c){var s=i.portalItem.resourceFromPath(a),p=D(r,a,i);T(p)===Object(w.n)(s.path)?(L(e,t,s,p,i.resources.toUpdate),o[n]=a):J(e,t,r,a,o,n,i,c)}(this,r,t,p,o,n,c,e):function(e,t,r,a){a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(e)}),t[r]=e}(p,o,n,c):c&&c.portalItem&&(Object(O.h)(p)||Object(O.i)(Object(F.b)(p))||Object(w.t)(p)||u)?J(this,r,t,p,o,n,c,e):o[n]=p}}}}(e,t,r);switch(Object(O.i)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:F.c.read,write:F.c.write}}}(e,r,a),c=Object(g.a)(t);try{for(c.s();!(o=c.n()).done;){var s=o.value,p=Object(v.c)(r,s,a);for(var u in n)p[u]=n[u]}}catch(b){c.e(b)}finally{c.f()}}}function J(e,t,r,a,o,n,i,c){var s=Object(x.a)(),p=D(r,a,i),u=Object(w.z)(Object(O.g)(c,"prefix"),s),b="".concat(u,".").concat(T(p)),l=i.portalItem.resourceFromPath(b);Object(w.t)(a)&&i.resources.pendingOperations.push(function(e){return A.apply(this,arguments)}(a).then((function(e){l.path="".concat(u,".").concat(T(e)),o[n]=l.itemRelativeUrl})).catch((function(){}))),L(e,t,l,p,i.resources.toAdd),o[n]=l.itemRelativeUrl}function L(e,t,r,a,o){o.push({resource:r,content:a,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function D(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function A(){return(A=Object(n.a)(o.a.mark((function e(t){var a,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,57));case 2:return a=e.sent.default,e.next=5,a(t,{responseType:"blob"});case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C,z=r(207),B=r(344),K=r(336),G=r(326),q=r(325),V=r(327),E=r(624),H=r(98),Q=r(578),W=r(57),X=r(30),Y=r(19),Z=(r(65),r(17)),$=r(100),ee=r(23),te=r(303),re=r(92),ae=C=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).geometry=null,a.type="clip",a}return Object(s.a)(r,[{key:"writeGeometry",value:function(e,t,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(te.a)(e.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new $.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var o=new re.a;Object(te.l)(e,o,a.layer.spatialReference),t[r]=o.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}},{key:"clone",value:function(){return new C({geometry:Object(Z.a)(this.geometry),type:this.type})}}]),r}(Y.a);Object(b.a)([Object(v.b)({type:re.a}),P()],ae.prototype,"geometry",void 0),Object(b.a)([Object(ee.a)(["web-scene","portal-item"],"geometry")],ae.prototype,"writeGeometry",null),Object(b.a)([Object(v.b)({type:["clip","mask","replace"],nonNullable:!0}),P()],ae.prototype,"type",void 0);var oe,ne=ae=C=Object(b.a)([Object(m.a)("esri.layers.support.SceneModification")],ae),ie=oe=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(s.a)(r,[{key:"toJSON",value:function(e){return this.toArray().map((function(t){return t.toJSON(e)})).filter((function(e){return!!e.geometry}))}},{key:"clone",value:function(){return new oe({url:this.url,items:this.items.map((function(e){return e.clone()}))})}},{key:"_readModifications",value:function(e,t){var r,a=Object(g.a)(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;this.add(ne.fromJSON(o,t))}}catch(n){a.e(n)}finally{a.f()}}}],[{key:"fromJSON",value:function(e,t){var r=new oe;return r._readModifications(e,t),r}},{key:"fromUrl",value:function(){var e=Object(n.a)(o.a.mark((function e(t,r,a){var n,c,s,p,u,b,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:Object(w.K)(t),origin:"service"},e.next=3,Object(W.default)(t,{responseType:"json",signal:Object(O.g)(a,"signal")});case 3:c=e.sent,s=r.toJSON(),p=[],u=Object(g.a)(c.data);try{for(u.s();!(b=u.n()).done;)l=b.value,p.push(ne.fromJSON(Object(i.a)(Object(i.a)({},l),{},{geometry:Object(i.a)(Object(i.a)({},l.geometry),{},{spatialReference:s})}),n))}catch(o){u.e(o)}finally{u.f()}return e.abrupt("return",new oe({url:t,items:p}));case 9:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()}]),r}(Object(Y.b)(X.a.ofType(ne)));Object(b.a)([Object(v.b)({type:String})],ie.prototype,"url",void 0);var ce=ie=oe=Object(b.a)([Object(m.a)("esri.layers.support.SceneModifications")],ie),se=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).handles=new y.a,e.geometryType="mesh",e.operationalLayerType="IntegratedMeshLayer",e.type="integrated-mesh",e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.profile="mesh-pyramids",e.modifications=null,e._modificationsSource=null,e.elevationInfo=null,e.path=null,e}return Object(s.a)(r,[{key:"destroy",value:function(){this.handles.destroy()}},{key:"initialize",value:function(){var e=this;this.handles.add(Object(d.b)(this,"modifications","after-changes",(function(){return e.modifications=e.modifications}),null,null,!0))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({url:e},t):e}},{key:"readModifications",value:function(e,t,r){this._modificationsSource={url:Object(F.a)(e,r),context:r}}},{key:"load",value:function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this._doLoad(t)),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_doLoad",value:function(){var e=Object(n.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(O.g)(t,"signal"),e.prev=1,e.next=4,this.loadFromPortal({supportedTypes:["Scene Service"]},t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Object(f.u)(e.t0);case 9:return e.next=11,this._fetchService(r);case 11:if(!Object(O.i)(this._modificationsSource)){e.next=16;break}return e.next=14,ce.fromUrl(this._modificationsSource.url,this.spatialReference,t);case 14:a=e.sent,this.setAtOrigin("modifications",a,this._modificationsSource.context.origin),this._modificationsSource=null;case 16:return e.next=18,this._fetchIndexAndUpdateExtent(this.nodePages,r);case 18:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"beforeSave",value:function(){if(!Object(O.h)(this._modificationsSource))return this.load().then((function(){}),(function(){}))}},{key:"saveAs",value:function(){var e=Object(n.a)(o.a.mark((function e(t,r){var a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(i.a)(Object(i.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(n.a)(o.a.mark((function e(){var t,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"integrated-mesh"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new l.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}},{key:"_getTypeKeywords",value:function(){return["IntegratedMeshLayer"]}}]),r}(Object(E.a)(Object(K.a)(Object(G.a)(Object(q.a)(Object(V.a)(Object(j.a)(Object(B.a)(z.a))))))));Object(b.a)([Object(v.b)({type:String,readOnly:!0})],se.prototype,"geometryType",void 0),Object(b.a)([Object(v.b)({type:["show","hide"]})],se.prototype,"listMode",void 0),Object(b.a)([Object(v.b)({type:["IntegratedMeshLayer"]})],se.prototype,"operationalLayerType",void 0),Object(b.a)([Object(v.b)({json:{read:!1},readOnly:!0})],se.prototype,"type",void 0),Object(b.a)([Object(v.b)({type:Q.c,readOnly:!0})],se.prototype,"nodePages",void 0),Object(b.a)([Object(v.b)({type:[Q.b],readOnly:!0})],se.prototype,"materialDefinitions",void 0),Object(b.a)([Object(v.b)({type:[Q.d],readOnly:!0})],se.prototype,"textureSetDefinitions",void 0),Object(b.a)([Object(v.b)({type:[Q.a],readOnly:!0})],se.prototype,"geometryDefinitions",void 0),Object(b.a)([Object(v.b)({readOnly:!0})],se.prototype,"serviceUpdateTimeStamp",void 0),Object(b.a)([Object(v.b)({type:ce}),P({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],se.prototype,"modifications",void 0),Object(b.a)([Object(h.a)(["web-scene","portal-item"],"modifications")],se.prototype,"readModifications",null),Object(b.a)([Object(v.b)(H.b)],se.prototype,"elevationInfo",void 0),Object(b.a)([Object(v.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],se.prototype,"path",void 0);var pe=se=Object(b.a)([Object(m.a)("esri.layers.IntegratedMeshLayer")],se);t.default=pe}}]);
//# sourceMappingURL=140.15984493.chunk.js.map