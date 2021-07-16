(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[29],{407:function(e,t,r){"use strict";var a=r(11),i=r(2),n=r(3),o=r(69),s=r(8),p=r(408),u=r(493),c=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(i.a)(this,e),this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(p.b.Texture,this),this._descriptor=Object(a.a)({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},r),this.setData(n)}return Object(n.a)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(p.b.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,this.setData(null))}},{key:"setData",value:function(t){if(this._context&&this._context.gl){var r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);var a=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES),i=this._descriptor;e._validateTexture(this._context,i),r.pixelStorei(r.UNPACK_ALIGNMENT,i.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,i.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.preMultiplyAlpha?1:0);var n=i.pixelFormat,o=i.internalFormat?i.internalFormat:n;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){var p=t.width,u=t.height;t instanceof HTMLVideoElement&&(p=t.videoWidth,u=t.videoHeight),i.width&&i.height,r.texImage2D(r.TEXTURE_2D,0,o,n,i.dataType,t),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=p),void 0===i.height&&(i.height=u)}else{null!=i.width&&null!=i.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&o===r.DEPTH_STENCIL&&(o=r.DEPTH24_STENCIL8);var c=i.width,h=i.height;if(function(e){return Object(s.i)(e)&&"type"in e&&"compressed"===e.type}(t)){var l=Math.round(Math.log(Math.max(c,h))/Math.LN2)+1;i.hasMipmap=i.hasMipmap&&l===t.levels.length;for(var d=0;;++d){var _=t.levels[Math.min(d,t.levels.length-1)];if(r.compressedTexImage2D(r.TEXTURE_2D,d,o,c,h,0,_),1===c&&1===h||!i.hasMipmap)break;c=Math.max(1,c>>1),h=Math.max(1,h>>1)}}else if(Object(s.i)(t))r.texImage2D(r.TEXTURE_2D,0,o,c,h,0,n,i.dataType,t),i.hasMipmap&&this.generateMipmap();else for(var m=0;r.texImage2D(r.TEXTURE_2D,m,o,c,h,0,n,i.dataType,null),(1!==c||1!==h)&&i.hasMipmap;++m)c=Math.max(1,c>>1),h=Math.max(1,h>>1)}e._applySamplingMode(r,this._descriptor),e._applyWrapMode(r,this._descriptor),e._applyAnisotropicFilteringParameters(this._context,this._descriptor),this._context.bindTexture(a,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,r,a,i,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var s=this._context.gl,p=this._descriptor,u=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);(r<0||a<0||i>p.width||n>p.height||r+i>p.width||a+n>p.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,p.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?s.texSubImage2D(s.TEXTURE_2D,t,r,a,p.pixelFormat,p.dataType,o):s.texSubImage2D(s.TEXTURE_2D,t,r,a,i,n,p.pixelFormat,p.dataType,o),this._context.bindTexture(u,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,e._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var r=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES),a=this._context.gl;a.generateMipmap(a.TEXTURE_2D),this._context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,e._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var t=this._context.gl,r=this._descriptor;this._samplingModeDirty&&(e._applySamplingMode(t,r),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,r),this._wrapModeDirty=!1)}}],[{key:"_validateTexture",value:function(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");var r=Object(o.h)(t.width)&&Object(o.h)(t.height);Object(u.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(e,t){var r=t.samplingMode,a=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(a=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(a=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a)}},{key:"_applyWrapMode",value:function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(e,t){var r,a=e.capabilities.textureFilterAnisotropic;if(a){var i=e.gl;i.texParameterf(i.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}}]),e}();c.TEXTURE_UNIT_FOR_UPDATES=0,t.a=c},408:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));var a,i=33984;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(a||(a={}))},490:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var a=r(519);function i(e){var t="";for(var r in e){var a=e[r];if("boolean"==typeof a)a&&(t+="#define ".concat(r,"\n"));else if("number"==typeof a)t+="#define ".concat(r," ").concat(a.toFixed(),"\n");else if("object"==typeof a){var i=a.options,n=0;for(var o in i)t+="#define ".concat(i[o]," ").concat((n++).toFixed(),"\n");t+="#define ".concat(r," ").concat(i[a.value],"\n")}}return t}function n(e,t,r,i){r=r||{},i=i||"";var n="function"==typeof t.shaders?t.shaders(r):t.shaders;return new a.a(e,i+n.vertexShader,i+n.fragmentShader,t.attributes)}},493:function(e,t,r){"use strict";t.a=function(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}},561:function(e,t,r){"use strict";var a=r(2),i=r(3),n=r(490),o=function(){function e(t){Object(a.a)(this,e),this._programCacheByTemplate=new Map,this._rctx=t}return Object(i.a)(e,[{key:"dispose",value:function(){this._programCacheByTemplate.forEach((function(e){return e.programs.forEach((function(e){return e.dispose()}))})),this._programCacheByTemplate=null}},{key:"getProgram",value:function(e,t){var r=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(function(t){return Object(n.a)(r._rctx,e,t)})),this.getProgramTemplateInstance(e,t)}},{key:"addProgramTemplate",value:function(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}},{key:"getProgramTemplateInstance",value:function(e,t){var r=this._programCacheByTemplate.get(e);if(r){var a=t?JSON.stringify(t):"default";if(!r.programs.has(a)){var i=r.constructor(t);r.programs.set(a,i)}return r.programs.get(a)}return null}}]),e}();t.a=o},562:function(e,t,r){"use strict";var a=r(2),i=r(3),n=function(){function e(t){Object(a.a)(this,e),this.readFile=t}return Object(i.a)(e,[{key:"resolveIncludes",value:function(e){return this.resolve(e)}},{key:"resolve",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(r.has(e))return r.get(e);var a=this.read(e);if(!a)throw new Error("cannot find shader file ".concat(e));for(var i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,n=i.exec(a),o=[];null!=n;)o.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(a);var s=0,p="";return o.forEach((function(e){p+=a.slice(s,e.start),p+=r.has(e.path)?"":t.resolve(e.path,r),s=e.start+e.length})),p+=a.slice(s),r.set(e,p),p}},{key:"read",value:function(e){return this.readFile(e)}}]),e}();t.a=n},768:function(e,t,r){"use strict";r.r(t);var a=r(413);r.d(t,"BufferObject",(function(){return a.a}));var i=r(411);r.d(t,"FramebufferObject",(function(){return i.a}));var n=r(519);r.d(t,"Program",(function(){return n.a}));var o=r(561);r.d(t,"ProgramCache",(function(){return o.a}));var s=r(587);r.d(t,"Renderbuffer",(function(){return s.a}));var p=r(410);r.d(t,"RenderingContext",(function(){return p.a}));var u=r(562);r.d(t,"ShaderCompiler",(function(){return u.a}));var c=r(407);r.d(t,"Texture",(function(){return c.a}));var h=r(412);r.d(t,"VertexArrayObject",(function(){return h.a}));var l=r(490);r.d(t,"createProgram",(function(){return l.a})),r.d(t,"glslifyDefineMap",(function(){return l.b}));var d=r(264);r.d(t,"createContextOrErrorHTML",(function(){return d.b}))}}]);
//# sourceMappingURL=29.7810379f.chunk.js.map