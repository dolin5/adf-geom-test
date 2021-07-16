(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[30],{439:function(e,t,i){"use strict";var n=i(2),a=i(3),r=i(4),o=i(5),s=i(0),c=i(27),u=i(87),l=i(109),h=i(254),d=i(9),p=i(141),b=i(1),y=(i(10),i(13),i(7)),v=function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).layer=null,a.parent=null,a}return Object(a.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw d.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(l.b)(Object(h.a)(Object(p.b)(u.a.EventedMixin(c.a)))));Object(s.a)([Object(b.b)()],v.prototype,"fullOpacity",null),Object(s.a)([Object(b.b)()],v.prototype,"layer",void 0),Object(s.a)([Object(b.b)()],v.prototype,"parent",void 0),Object(s.a)([Object(b.b)({readOnly:!0})],v.prototype,"suspended",null),Object(s.a)([Object(b.b)({readOnly:!0})],v.prototype,"suspendInfo",null),Object(s.a)([Object(b.b)({readOnly:!0})],v.prototype,"legendEnabled",null),Object(s.a)([Object(b.b)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),Object(s.a)([Object(b.b)({readOnly:!0})],v.prototype,"updatingProgress",null),Object(s.a)([Object(b.b)()],v.prototype,"visible",null);var f=v=Object(s.a)([Object(y.a)("esri.views.layers.LayerView")],v);t.a=f},440:function(e,t,i){"use strict";i.d(t,"a",(function(){return I}));var n,a=i(2),r=i(3),o=i(39),s=i(36),c=i(4),u=i(5),l=i(0),h=i(30),d=i(105),p=i(26),b=i(1),y=(i(10),i(13),i(9),i(7)),v=i(480),f=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return i}(i(19).a),O=f=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipArea")],f),j=n=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(r.a)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"left",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"right",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"top",void 0),Object(l.a)([Object(b.b)({type:[Number,String],json:{write:!0}})],j.prototype,"bottom",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],j.prototype,"version",null);var g,m=j=n=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipRect")],j),x=(i(65),i(82)),w=i(56),k=i(48),_=i(92),R={base:x.a,key:"type",typeMap:{extent:k.a,polygon:_.a}},M=g=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new g({geometry:this.geometry.clone()})}}]),i}(O);Object(l.a)([Object(b.b)({types:R,json:{read:w.a,write:!0}})],M.prototype,"geometry",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],M.prototype,"version",null);var S=M=g=Object(l.a)([Object(y.a)("esri.views.layers.support.Geometry")],M),P=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(b.b)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],P.prototype,"version",null);var q=P=Object(l.a)([Object(y.a)("esri.views.layers.support.Path")],P),B=h.a.ofType({key:"type",base:O,typeMap:{rect:m,path:q,geometry:S}}),I=function(e){var t=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).clips=new B,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(r.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(p.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(p.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(p.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(p.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,n=i.minScale,a=i.maxScale;if(null!=n&&null!=a){var r=!n,o=!a;!r&&e<=n&&(r=!0),!o&&e>=a&&(o=!0),t=r&&o}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(o.a)(Object(s.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(l.a)([Object(b.b)({type:B,set:function(e){var t=Object(d.b)(e,this._get("clips"),B);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(l.a)([Object(b.b)()],t.prototype,"moving",void 0),Object(l.a)([Object(b.b)()],t.prototype,"attached",void 0),Object(l.a)([Object(b.b)()],t.prototype,"container",void 0),Object(l.a)([Object(b.b)()],t.prototype,"suspended",void 0),Object(l.a)([Object(b.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(l.a)([Object(b.b)()],t.prototype,"updateRequested",void 0),Object(l.a)([Object(b.b)()],t.prototype,"updating",null),Object(l.a)([Object(b.b)()],t.prototype,"view",void 0),t=Object(l.a)([Object(y.a)("esri.views.2d.layers.LayerView2D")],t)}},505:function(e,t,i){"use strict";var n=i(2),a=i(3),r=function(){function e(t,i,a){Object(n.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=a}return Object(a.a)(e,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(t){var i=this.filter({pixelBlock:t}),n=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(n),e.putImageData(a,0,0)}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}();t.a=r},509:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(22),a=i(2),r=i(3),o=i(15),s=i(39),c=i(36),u=i(4),l=i(5),h=i(189),d=i(255),p=i(302),b=(i(413),i(411),i(10),i(408),i(410),i(414),i(407)),y=(i(412),i(456)),v=i(505);function f(e,t,i){var n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(n.width=t,n.height=i),new b.a(e,n)}var O=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(a.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=s,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.transforms={dvs:Object(d.b)()},e.blendFunction=r,e.source=n,e.requestRender=e.requestRender.bind(Object(o.a)(e)),e}return Object(r.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(s.a)(Object(c.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"setTransform",value:function(e){var t=Object(h.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],this.x,this.y),a=Object(n.a)(i,2),r=a[0],o=a[1],s=this.resolution/this.pixelRatio/e.resolution,c=s*this.width,u=s*this.height,l=Math.PI*this.rotation/180;Object(h.c)(t,t,Object(p.b)(r,o)),Object(h.c)(t,t,Object(p.b)(c/2,u/2)),Object(h.j)(t,t,-l),Object(h.c)(t,t,Object(p.b)(-c/2,-u/2)),Object(h.g)(t,t,Object(p.b)(c,u)),Object(h.h)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=f(e,this.sourceWidth,this.sourceHeight):this._texture=f(e));var i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof v.a){var n=i.getRenderedRasterPixels();this._texture.setData(n.renderedRasterPixels)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(y.a)},532:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(28),a=i(2),r=i(3),o=i(39),s=i(36),c=i(4),u=i(5),l=i(518),h=i(400),d=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,a=e.registerRenderPass({name:"bitmap",brushes:[l.a.bitmap],target:function(){return t.children},drawPhase:h.c.MAP});return[].concat(Object(n.a)(Object(o.a)(Object(s.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[a])}}]),i}(i(477).a)},559:function(e,t,i){"use strict";var n=i(6),a=i.n(n),r=i(14),o=i(12),s=i(2),c=i(3),u=i(4),l=i(5),h=i(0),d=i(27),p=i(21),b=i(1),y=(i(10),i(13),i(9),i(7)),v=i(48),f=i(233),O=i(35),j=i(324),g=i(22),m=Math.PI/180;function x(e,t){var i=t.rotation*m,n=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),r=Object(g.a)(t.size,2),o=r[0],s=r[1];return e[0]=Math.round(s*a+o*n),e[1]=Math.round(s*n+o*a),e}function w(e,t,i,n){var a=Object(g.a)(t,2),r=a[0],o=a[1],s=Object(g.a)(n,2),c=s[0],u=s[1],l=.5*i;return e[0]=r-l*c,e[1]=o-l*u,e[2]=r+l*c,e[3]=o+l*u,e}var k=i(509),_=i(332),R=i(188),M=Object(f.f)(),S=[0,0],P=new R.a(0,0,0,0),q=2048,B=2048,I=!1,E=!1,T=!1,z=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e))._imagePromise=null,n.bitmaps=[],n.hidpi=T,n.imageMaxWidth=q,n.imageMaxHeight=B,n.imageRotationSupported=I,n.imageNormalizationSupported=E,n.update=Object(p.i)(function(){var e=Object(o.a)(a.a.mark((function e(t,i){var s,c,u,l,h,d,p,b,y,v,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!n.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return s=t.state,c=Object(O.d)(s.spatialReference),u=n.hidpi?t.pixelRatio:1,(l=n.imageNormalizationSupported&&s.worldScreenWidth&&s.worldScreenWidth<s.size[0])?(S[0]=s.worldScreenWidth,S[1]=s.size[1]):n.imageRotationSupported?(S[0]=s.size[0],S[1]=s.size[1]):x(S,s),h=Math.floor(S[0]*u)>n.imageMaxWidth||Math.floor(S[1]*u)>n.imageMaxHeight,d=c&&(s.extent.xmin<c.valid[0]||s.extent.xmax>c.valid[1]),p=!n.imageNormalizationSupported&&d,b=!h&&!p,y=n.imageRotationSupported?s.rotation:0,b?(v=l?s.paddedViewState.center:s.center,n._imagePromise=n._singleExport(s,S,v,s.resolution,y,u,i)):(f=Math.min(n.imageMaxWidth,n.imageMaxHeight),p&&(f=Math.min(s.worldScreenWidth,f)),n._imagePromise=n._tiledExport(s,f,y,u,i)),e.abrupt("return",n._imagePromise.then(function(){var e=Object(o.a)(a.a.mark((function e(t){var i,o,s,c,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._imagePromise=null,!n.destroyed){n.bitmaps=null!=t?t:[],i=Object(r.a)(n.container.children);try{for(s=function(){var e=o.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},i.s();!(o=i.n()).done;)s()}catch(a){i.e(a)}finally{i.f()}c=Object(r.a)(t);try{for(c.s();!(u=c.n()).done;)l=u.value,n.container.addChild(l),l.fadeIn()}catch(a){c.e(a)}finally{c.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw n._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),5e3),n}return Object(c.a)(i,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,i=Object(r.a)(this.container.children);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(!n.visible||!n.stage)return;e(n),n.invalidateTexture(),n.requestRender()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_export",value:function(){var e=Object(o.a)(a.a.mark((function e(t,i,n,r,o,s){var c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(i*o),Math.floor(n*o),{rotation:r,pixelRatio:o,signal:s});case 2:return c=e.sent,u=new k.a(c,"additive"),e.abrupt("return",(u.x=t.xmin,u.y=t.ymax,u.resolution=t.width/i,u.rotation=r,u.pixelRatio=o,u));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i,n,a,r,o){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=Object(o.a)(a.a.mark((function e(t,i,n,r,o,s,c){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(M,n,r,i),u=new v.a(M[0],M[1],M[2],M[3],t.spatialReference),e.next=4,this._export(u,i[0],i[1],o,s,c);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,i,n,a,r,o,s){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,i,n,a){var r=this,o=j.a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),s=new _.a(o),c=s.getTileCoverage(e);if(!c)return null;var u=[];return c.forEach((function(o,c,l,h){P.set(o,c,l,h),s.getTileBounds(M,P);var d=new v.a(M[0],M[1],M[2],M[3],e.spatialReference);u.push(r._export(d,t,t,i,n,a))})),Promise.all(u)}}]),i}(d.a);Object(h.a)([Object(b.b)()],z.prototype,"_imagePromise",void 0),Object(h.a)([Object(b.b)()],z.prototype,"bitmaps",void 0),Object(h.a)([Object(b.b)()],z.prototype,"container",void 0),Object(h.a)([Object(b.b)()],z.prototype,"fetchSource",void 0),Object(h.a)([Object(b.b)()],z.prototype,"hidpi",void 0),Object(h.a)([Object(b.b)()],z.prototype,"imageMaxWidth",void 0),Object(h.a)([Object(b.b)()],z.prototype,"imageMaxHeight",void 0),Object(h.a)([Object(b.b)()],z.prototype,"imageRotationSupported",void 0),Object(h.a)([Object(b.b)()],z.prototype,"imageNormalizationSupported",void 0),Object(h.a)([Object(b.b)()],z.prototype,"requestUpdate",void 0),Object(h.a)([Object(b.b)()],z.prototype,"updating",null);var H=z=Object(h.a)([Object(y.a)("esri.views.2d.layers.support.ExportStrategy")],z);t.a=H}}]);
//# sourceMappingURL=30.2a8e1ccc.chunk.js.map