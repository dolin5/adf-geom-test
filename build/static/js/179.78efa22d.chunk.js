(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[179],{836:function(e,t,i){"use strict";i.r(t),i.d(t,"Colorize",(function(){return o}));var r=i(2),s=i(3),a=(i(413),i(411),i(10),i(408),i(410),i(414),i(407)),n=(i(412),i(521)),o=function(){function e(){Object(r.a)(this,e),this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}return Object(s.a)(e,[{key:"dispose",value:function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}},{key:"draw",value:function(e,t,i){var r=t.width,s=t.height;this._createOrResizeResources(e,r,s);var a=e.context,n=e.painter.materialManager,o=this._programDesc,u=this._quad,c=i.colorMatrix;u.bind();var h=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,s,0,0,h),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);var l=n.getProgram(e,o);a.useProgram(l),a.bindTexture(h,2),l.setUniformMatrix4fv("u_coefficients",c),l.setUniform1i("u_colorTexture",2),u.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),u.unbind()}},{key:"_createOrResizeResources",value:function(e,t,i){var r=e.context;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new a.a(r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:i}),this._quad||(this._quad=new n.a(r,[-1,-1,1,-1,-1,1,1,1])))}}]),e}()}}]);
//# sourceMappingURL=179.78efa22d.chunk.js.map