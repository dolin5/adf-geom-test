(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[74],{523:function(e,t,r){"use strict";var o,n=r(2),a=r(3),i=r(4),l=r(5),s=r(0),c=r(31),u=r(19),p=r(17),b=r(1),d=(r(13),r(10),r(9),r(7)),j=o=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return Object(a.a)(r,[{key:"clone",value:function(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),r}(u.a);Object(s.a)([Object(b.b)({type:String,json:{write:!0}})],j.prototype,"field",void 0),Object(s.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],j.prototype,"minValue",void 0),Object(s.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],j.prototype,"maxValue",void 0);var y=j=o=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorModulation")],j),O=new c.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),f=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(s.a)([Object(b.b)({type:O.apiValues,readOnly:!0,nonNullable:!0,json:{type:O.jsonValues,read:!1,write:O.write}})],f.prototype,"type",void 0);var v,h=f=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f),m=r(29),w=v=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return Object(a.a)(r,[{key:"clone",value:function(){return new v({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),r}(h);Object(s.a)([Object(m.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),Object(s.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),Object(s.a)([Object(b.b)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0);var g,T=w=v=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w),C=g=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return Object(a.a)(r,[{key:"clone",value:function(){return new g({scaleFactor:this.scaleFactor})}}]),r}(h);Object(s.a)([Object(m.a)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),Object(s.a)([Object(b.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0);var S={key:"type",base:h,typeMap:{"fixed-size":T,splat:C=g=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C)}},k=Object(c.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),I=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var o;return Object(n.a)(this,r),(o=t.call(this,e)).type=void 0,o.pointSizeAlgorithm=null,o.colorModulation=null,o.pointsPerInch=10,o}return Object(a.a)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:Object(p.a)(this.pointSizeAlgorithm),colorModulation:Object(p.a)(this.colorModulation),pointsPerInch:Object(p.a)(this.pointsPerInch)}}}]),r}(u.a);Object(s.a)([Object(b.b)({type:k.apiValues,readOnly:!0,nonNullable:!0,json:{type:k.jsonValues,read:!1,write:k.write}})],I.prototype,"type",void 0),Object(s.a)([Object(b.b)({types:S,json:{write:!0}})],I.prototype,"pointSizeAlgorithm",void 0),Object(s.a)([Object(b.b)({type:y,json:{write:!0}})],I.prototype,"colorModulation",void 0),Object(s.a)([Object(b.b)({json:{write:!0},nonNullable:!0,type:Number})],I.prototype,"pointsPerInch",void 0),I=Object(s.a)([Object(d.a)("esri.renderers.PointCloudRenderer")],I),(I||(I={})).fieldTransformTypeKebabDict=new c.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var x=I;t.a=x},653:function(e,t,r){"use strict";var o,n=r(11),a=r(2),i=r(3),l=r(4),s=r(5),c=r(0),u=r(17),p=r(1),b=(r(13),r(10),r(9),r(29)),d=r(7),j=r(523),y=r(213),O=r(359),f=o=function(e){Object(l.a)(r,e);var t=Object(s.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-stretch",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.stops=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new o(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:Object(u.a)(this.field),fieldTransformType:Object(u.a)(this.fieldTransformType),stops:Object(u.a)(this.stops),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(j.a);Object(c.a)([Object(b.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],f.prototype,"type",void 0),Object(c.a)([Object(p.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(c.a)([Object(p.b)({type:y.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),Object(c.a)([Object(p.b)({type:j.a.fieldTransformTypeKebabDict.apiValues,json:{type:j.a.fieldTransformTypeKebabDict.jsonValues,read:j.a.fieldTransformTypeKebabDict.read,write:j.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(c.a)([Object(p.b)({type:[O.a],json:{write:!0}})],f.prototype,"stops",void 0);var v=f=o=Object(c.a)([Object(d.a)("esri.renderers.PointCloudStretchRenderer")],f);t.a=v},693:function(e,t,r){"use strict";var o,n=r(11),a=r(2),i=r(3),l=r(4),s=r(5),c=r(0),u=r(17),p=r(1),b=r(13),d=(r(10),r(9),r(29)),j=r(7),y=r(523),O=r(213),f=r(33),v=r(19),h=o=function(e){Object(l.a)(r,e);var t=Object(s.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(u.a)(this.color)})}}]),r}(v.a);Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(c.a)([Object(p.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),Object(c.a)([Object(p.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),Object(c.a)([Object(p.b)({type:f.a,json:{type:[b.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=o=Object(c.a)([Object(j.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h),g=m=function(e){Object(l.a)(r,e);var t=Object(s.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-class-breaks",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new m(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(u.a)(this.colorClassBreakInfos),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(y.a);Object(c.a)([Object(d.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),Object(c.a)([Object(p.b)({json:{write:!0},type:String})],g.prototype,"field",void 0),Object(c.a)([Object(p.b)({type:O.a,json:{write:!0}})],g.prototype,"legendOptions",void 0),Object(c.a)([Object(p.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),Object(c.a)([Object(p.b)({type:[w],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0);var T=g=m=Object(c.a)([Object(j.a)("esri.renderers.PointCloudClassBreaksRenderer")],g);t.a=T},694:function(e,t,r){"use strict";var o,n=r(11),a=r(2),i=r(3),l=r(4),s=r(5),c=r(0),u=r(17),p=r(1),b=r(13),d=(r(10),r(9),r(29)),j=r(7),y=r(523),O=r(213),f=r(33),v=r(19),h=o=function(e){Object(l.a)(r,e);var t=Object(s.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new o({description:this.description,label:this.label,values:Object(u.a)(this.values),color:Object(u.a)(this.color)})}}]),r}(v.a);Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(c.a)([Object(p.b)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),Object(c.a)([Object(p.b)({type:f.a,json:{type:[b.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=o=Object(c.a)([Object(j.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h),g=m=function(e){Object(l.a)(r,e);var t=Object(s.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-unique-value",o.field=null,o.fieldTransformType=null,o.colorUniqueValueInfos=null,o.legendOptions=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new m(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:Object(u.a)(this.field),fieldTransformType:Object(u.a)(this.fieldTransformType),colorUniqueValueInfos:Object(u.a)(this.colorUniqueValueInfos),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(y.a);Object(c.a)([Object(d.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),Object(c.a)([Object(p.b)({json:{write:!0},type:String})],g.prototype,"field",void 0),Object(c.a)([Object(p.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),Object(c.a)([Object(p.b)({type:[w],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),Object(c.a)([Object(p.b)({type:O.a,json:{write:!0}})],g.prototype,"legendOptions",void 0);var T=g=m=Object(c.a)([Object(j.a)("esri.renderers.PointCloudUniqueValueRenderer")],g);t.a=T},743:function(e,t,r){"use strict";r.r(t);var o=r(6),n=r.n(o),a=r(14),i=r(12),l=r(27),s=r(11),c=r(2),u=r(3),p=r(4),b=r(5),d=r(0),j=r(171),y=r(57),O=r(18),f=r(17),v=r(9),h=r(8),m=r(323),w=r(54),g=r(21),T=r(24),C=r(1),S=r(13),k=(r(10),r(25)),I=r(7),x=r(23),V=r(207),P=r(344),R=r(336),F=r(326),q=r(325),B=r(327),N=r(624),z=r(29),A=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(e){var o;return Object(c.a)(this,r),(o=t.call(this,e)).field=null,o.type=null,o}return Object(u.a)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}}]),r}(r(19).a);Object(d.a)([Object(C.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"field",void 0),Object(d.a)([Object(C.b)({readOnly:!0,nonNullable:!0,json:{read:!1}})],A.prototype,"type",void 0);var D,K=A=Object(d.a)([Object(I.a)("esri.layers.pointCloudFilters.PointCloudFilter")],A),M=D=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(e){var o;return Object(c.a)(this,r),(o=t.call(this,e)).requiredClearBits=null,o.requiredSetBits=null,o.type="bitfield",o}return Object(u.a)(r,[{key:"clone",value:function(){return new D({field:this.field,requiredClearBits:Object(f.a)(this.requiredClearBits),requiredSetBits:Object(f.a)(this.requiredSetBits)})}}]),r}(K);Object(d.a)([Object(C.b)({type:[S.a],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],M.prototype,"requiredClearBits",void 0),Object(d.a)([Object(C.b)({type:[S.a],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],M.prototype,"requiredSetBits",void 0),Object(d.a)([Object(z.a)({pointCloudBitfieldFilter:"bitfield"})],M.prototype,"type",void 0);var E,L=M=D=Object(d.a)([Object(I.a)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],M),U=E=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(e){var o;return Object(c.a)(this,r),(o=t.call(this,e)).includedReturns=[],o.type="return",o}return Object(u.a)(r,[{key:"clone",value:function(){return new E({field:this.field,includedReturns:Object(f.a)(this.includedReturns)})}}]),r}(K);Object(d.a)([Object(C.b)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"includedReturns",void 0),Object(d.a)([Object(z.a)({pointCloudReturnFilter:"return"})],U.prototype,"type",void 0);var _,G=U=E=Object(d.a)([Object(I.a)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],U),W=_=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(e){var o;return Object(c.a)(this,r),(o=t.call(this,e)).mode="exclude",o.type="value",o.values=[],o}return Object(u.a)(r,[{key:"clone",value:function(){return new _({field:this.field,mode:this.mode,values:Object(f.a)(this.values)})}}]),r}(K);Object(d.a)([Object(C.b)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"mode",void 0),Object(d.a)([Object(z.a)({pointCloudValueFilter:"value"})],W.prototype,"type",void 0),Object(d.a)([Object(C.b)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"values",void 0);var J,$={key:"type",base:K,typeMap:{value:W=_=Object(d.a)([Object(I.a)("esri.layers.pointCloudFilters.PointCloudValueFilter")],W),bitfield:L,return:G}},H=r(98),Q=r(208),X=r(348),Y=r(267),Z=r(693),ee=r(523),te=J=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(e){var o;return Object(c.a)(this,r),(o=t.call(this,e)).type="point-cloud-rgb",o.field=null,o}return Object(u.a)(r,[{key:"clone",value:function(){return new J(Object(s.a)(Object(s.a)({},this.cloneProperties()),{},{field:Object(f.a)(this.field)}))}}]),r}(ee.a);Object(d.a)([Object(z.a)({pointCloudRGBRenderer:"point-cloud-rgb"})],te.prototype,"type",void 0),Object(d.a)([Object(C.b)({type:String,json:{write:!0}})],te.prototype,"field",void 0);var re=te=J=Object(d.a)([Object(I.a)("esri.renderers.PointCloudRGBRenderer")],te),oe=r(653),ne=r(694),ae={key:"type",base:ee.a,typeMap:{"point-cloud-class-breaks":Z.a,"point-cloud-rgb":re,"point-cloud-stretch":oe.a,"point-cloud-unique-value":ne.a},errorContext:"renderer"},ie=r(342),le=v.a.getLogger("esri.layers.PointCloudLayer"),se=Object(X.a)(),ce=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(c.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).operationalLayerType="PointCloudLayer",e.popupEnabled=!0,e.popupTemplate=null,e.opacity=1,e.filters=[],e.fields=null,e.fieldsIndex=null,e.outFields=null,e.path=null,e.legendEnabled=!0,e.renderer=null,e.type="point-cloud",e}return Object(u.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"getFieldDomain",value:function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}},{key:"readServiceFields",value:function(e,t,r){return Array.isArray(e)?e.map((function(e){var t=new Q.a;return"FieldTypeInteger"===e.type&&((e=Object(f.a)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((function(e){return new Q.a({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})})):null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"writeRenderer",value:function(e,t,r,o){Object(w.c)("layerDefinition.drawingInfo.renderer",e.write(null,o),t)}},{key:"load",value:function(e){var t=this,r=Object(h.i)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(g.u).then((function(){return t._fetchService(r)}));return this.addResolvingPromise(o),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){var t=Object(ie.a)(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}},{key:"formatPopupTemplateReturnsField",value:function(e){var t=this.fieldsIndex.get("RETURNS");if(t){var r=e.fieldInfos.find((function(e){return e.fieldName===t.name}));if(r){var o=new Y.a({name:"pcl-returns-decoded",title:t.alias||t.name,expression:"\n        var returnValue = $feature.".concat(t.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[].concat(Object(l.a)(e.expressionInfos||[]),[o]),r.fieldName="expression/pcl-returns-decoded"}}}},{key:"formatPopupTemplateRGBField",value:function(e){var t=this.fieldsIndex.get("RGB");if(t){var r=e.fieldInfos.find((function(e){return e.fieldName===t.name}));if(r){var o=new Y.a({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:"\n        var rgb = $feature.".concat(t.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[].concat(Object(l.a)(e.expressionInfos||[]),[o]),r.fieldName="expression/pcl-rgb-decoded"}}}},{key:"queryCachedStatistics",value:function(){var e=Object(i.a)(n.a.mark((function e(t,r){var o,i,l,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.attributeStorageInfo){e.next=4;break}throw new O.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(o=this.fieldsIndex.get(t)){e.next=7;break}throw new O.a("pointcloudlayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:i=Object(a.a)(this.attributeStorageInfo),e.prev=8,i.s();case 10:if((l=i.n()).done){e.next=17;break}if((s=l.value).name!==o.name){e.next=15;break}return c=Object(T.z)(this.parsedUrl.path,"./statistics/".concat(s.key)),e.abrupt("return",Object(y.default)(c,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),i.e(e.t0);case 22:return e.prev=22,i.f(),e.finish(22);case 25:throw new O.a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=Object(i.a)(n.a.mark((function e(t,r){var o=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(s.a)(Object(s.a)({},r),{},{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"point-cloud"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t,r=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"point-cloud"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new O.a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new O.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new O.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}},{key:"hasCachedStatistics",value:function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((function(t){return t.name===e}))}},{key:"_getTypeKeywords",value:function(){return["PointCloud"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&le.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&le.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}}]),r}(Object(N.a)(Object(R.a)(Object(F.a)(Object(q.a)(Object(B.a)(Object(m.a)(Object(P.a)(V.a))))))));Object(d.a)([Object(C.b)({type:["PointCloudLayer"]})],ce.prototype,"operationalLayerType",void 0),Object(d.a)([Object(C.b)(H.j)],ce.prototype,"popupEnabled",void 0),Object(d.a)([Object(C.b)({type:j.a,json:{name:"popupInfo",write:!0}})],ce.prototype,"popupTemplate",void 0),Object(d.a)([Object(C.b)({readOnly:!0,json:{read:!1}})],ce.prototype,"defaultPopupTemplate",null),Object(d.a)([Object(C.b)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ce.prototype,"opacity",void 0),Object(d.a)([Object(C.b)({type:["show","hide"]})],ce.prototype,"listMode",void 0),Object(d.a)([Object(C.b)({types:[$],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ce.prototype,"filters",void 0),Object(d.a)([Object(C.b)({type:[Q.a]})],ce.prototype,"fields",void 0),Object(d.a)([Object(C.b)(se.fieldsIndex)],ce.prototype,"fieldsIndex",void 0),Object(d.a)([Object(k.a)("service","fields",["fields","attributeStorageInfo"])],ce.prototype,"readServiceFields",null),Object(d.a)([Object(C.b)(se.outFields)],ce.prototype,"outFields",void 0),Object(d.a)([Object(C.b)({readOnly:!0})],ce.prototype,"attributeStorageInfo",void 0),Object(d.a)([Object(C.b)(H.b)],ce.prototype,"elevationInfo",null),Object(d.a)([Object(C.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ce.prototype,"path",void 0),Object(d.a)([Object(C.b)(H.e)],ce.prototype,"legendEnabled",void 0),Object(d.a)([Object(C.b)({types:ae,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:ae},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ce.prototype,"renderer",void 0),Object(d.a)([Object(x.a)("renderer")],ce.prototype,"writeRenderer",null),Object(d.a)([Object(C.b)({json:{read:!1},readOnly:!0})],ce.prototype,"type",void 0);var ue=ce=Object(d.a)([Object(I.a)("esri.layers.PointCloudLayer")],ce);t.default=ue}}]);
//# sourceMappingURL=74.ce396e3b.chunk.js.map