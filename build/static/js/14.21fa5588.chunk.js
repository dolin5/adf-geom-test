(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[14],{500:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return D})),r.d(t,"d",(function(){return Q})),r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return B})),r.d(t,"g",(function(){return T})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return E})),r.d(t,"j",(function(){return C})),r.d(t,"k",(function(){return Y})),r.d(t,"l",(function(){return M})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return k})),r.d(t,"o",(function(){return J})),r.d(t,"p",(function(){return K})),r.d(t,"q",(function(){return x})),r.d(t,"r",(function(){return N})),r.d(t,"s",(function(){return F})),r.d(t,"t",(function(){return L})),r.d(t,"u",(function(){return O})),r.d(t,"v",(function(){return A})),r.d(t,"w",(function(){return G})),r.d(t,"x",(function(){return W})),r.d(t,"y",(function(){return V})),r.d(t,"z",(function(){return P})),r.d(t,"A",(function(){return I})),r.d(t,"B",(function(){return w})),r.d(t,"C",(function(){return g})),r.d(t,"D",(function(){return S})),r.d(t,"E",(function(){return H})),r.d(t,"F",(function(){return X})),r.d(t,"G",(function(){return z})),r.d(t,"H",(function(){return R})),r.d(t,"I",(function(){return U})),r.d(t,"J",(function(){return _}));var n=r(2),f=r(3),u=r(4),i=r(5),a=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=9;var a=this.TypedArrayConstructor;void 0===u&&(u=9*a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}},{key:"setMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)this.typedBuffer[r++]=t[n]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"copyFrom",value:function(e,t,r){for(var n=this.typedBuffer,f=t.typedBuffer,u=e*this.typedBufferStride,i=r*t.typedBufferStride,a=0;a<9;++a)n[u++]=f[i++]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();a.ElementCount=9;var c=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=16;var a=this.TypedArrayConstructor;void 0===u&&(u=16*a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}},{key:"setMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)this.typedBuffer[r++]=t[n]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"copyFrom",value:function(e,t,r){for(var n=this.typedBuffer,f=t.typedBuffer,u=e*this.typedBufferStride,i=r*t.typedBufferStride,a=0;a<16;++a)n[u++]=f[i++]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();c.ElementCount=16;var y=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=1;var a=this.TypedArrayConstructor;void 0===u&&(u=a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"get",value:function(e){return this.typedBuffer[e*this.typedBufferStride]}},{key:"set",value:function(e,t){this.typedBuffer[e*this.typedBufferStride]=t}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();y.ElementCount=1;var o=r(40),s=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=2;var a=this.TypedArrayConstructor;void 0===u&&(u=2*a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,Object(o.m)(t,this.typedBuffer[e],this.typedBuffer[e+1])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,u=e*this.typedBufferStride,i=r*t.typedBufferStride;n[u++]=f[i++],n[u]=f[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();s.ElementCount=2;var l=r(49),h=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=3;var a=this.TypedArrayConstructor;void 0===u&&(u=3*a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,Object(l.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,u=e*this.typedBufferStride,i=r*t.typedBufferStride;n[u++]=f[i++],n[u++]=f[i++],n[u]=f[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();h.ElementCount=3;var d=r(528),v=function(){function e(t,r){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;Object(n.a)(this,e),this.TypedArrayConstructor=t,this.elementCount=4;var a=this.TypedArrayConstructor;void 0===u&&(u=4*a.BYTES_PER_ELEMENT);var c=0===r.byteLength?0:f;this.typedBuffer=null==i?new a(r,c):new a(r,c,(i-f)/a.BYTES_PER_ELEMENT),this.typedBufferStride=u/a.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return Object(f.a)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,Object(d.k)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r,n,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=f}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,u=e*this.typedBufferStride,i=r*t.typedBufferStride;n[u++]=f[i++],n[u++]=f[i++],n[u++]=f[i++],n[u]=f[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();v.ElementCount=4;var b=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,null,[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);b.ElementType="f32";var p=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);p.ElementType="f32";var O=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);O.ElementType="f32";var g=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);g.ElementType="f32";var B=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);B.ElementType="f32";var T=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);T.ElementType="f64";var j=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float32Array,e,u,i,a)).elementType="f32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);j.ElementType="f32";var E=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);E.ElementType="f64";var m=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);m.ElementType="f64";var k=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);k.ElementType="f64";var A=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);A.ElementType="f64";var S=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Float64Array,e,u,i,a)).elementType="f64",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);S.ElementType="f64";var M=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint8Array,e,u,i,a)).elementType="u8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);M.ElementType="u8";var L=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint8Array,e,u,i,a)).elementType="u8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);L.ElementType="u8";var w=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint8Array,e,u,i,a)).elementType="u8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);w.ElementType="u8";var _=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint8Array,e,u,i,a)).elementType="u8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);_.ElementType="u8";var C=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint16Array,e,u,i,a)).elementType="u16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);C.ElementType="u16";var N=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint16Array,e,u,i,a)).elementType="u16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);N.ElementType="u16";var P=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint16Array,e,u,i,a)).elementType="u16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);P.ElementType="u16";var R=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint16Array,e,u,i,a)).elementType="u16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);R.ElementType="u16";var Y=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint32Array,e,u,i,a)).elementType="u32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);Y.ElementType="u32";var F=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint32Array,e,u,i,a)).elementType="u32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);F.ElementType="u32";var I=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint32Array,e,u,i,a)).elementType="u32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);I.ElementType="u32";var U=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Uint32Array,e,u,i,a)).elementType="u32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);U.ElementType="u32";var q=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int8Array,e,u,i,a)).elementType="i8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);q.ElementType="i8";var x=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int8Array,e,u,i,a)).elementType="i8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);x.ElementType="i8";var V=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int8Array,e,u,i,a)).elementType="i8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);V.ElementType="i8";var z=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int8Array,e,u,i,a)).elementType="i8",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);z.ElementType="i8";var D=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int16Array,e,u,i,a)).elementType="i16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);D.ElementType="i16";var J=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int16Array,e,u,i,a)).elementType="i16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);J.ElementType="i16";var G=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int16Array,e,u,i,a)).elementType="i16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);G.ElementType="i16";var H=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int16Array,e,u,i,a)).elementType="i16",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);H.ElementType="i16";var Q=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int32Array,e,u,i,a)).elementType="i32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(y);Q.ElementType="i32";var K=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int32Array,e,u,i,a)).elementType="i32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);K.ElementType="i32";var W=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int32Array,e,u,i,a)).elementType="i32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);W.ElementType="i32";var X=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(e){var f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return Object(n.a)(this,r),(f=t.call(this,Int32Array,e,u,i,a)).elementType="i32",f}return Object(f.a)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(v);X.ElementType="i32"},528:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return B})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return v})),r.d(t,"k",(function(){return u})),r.d(t,"l",(function(){return O}));var n=r(43);function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function u(e,t,r,n,f){return e[0]=t,e[1]=r,e[2]=n,e[3]=f,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function a(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function c(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function y(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function o(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function s(e,t){var r=t[0]-e[0],n=t[1]-e[1],f=t[2]-e[2],u=t[3]-e[3];return Math.sqrt(r*r+n*n+f*f+u*u)}function l(e,t){var r=t[0]-e[0],n=t[1]-e[1],f=t[2]-e[2],u=t[3]-e[3];return r*r+n*n+f*f+u*u}function h(e){var t=e[0],r=e[1],n=e[2],f=e[3];return Math.sqrt(t*t+r*r+n*n+f*f)}function d(e){var t=e[0],r=e[1],n=e[2],f=e[3];return t*t+r*r+n*n+f*f}function v(e,t){var r=t[0],n=t[1],f=t[2],u=t[3],i=r*r+n*n+f*f+u*u;return i>0&&(i=1/Math.sqrt(i),e[0]=r*i,e[1]=n*i,e[2]=f*i,e[3]=u*i),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function p(e,t,r,n){var f=t[0],u=t[1],i=t[2],a=t[3];return e[0]=f+n*(r[0]-f),e[1]=u+n*(r[1]-u),e[2]=i+n*(r[2]-i),e[3]=a+n*(r[3]-a),e}function O(e,t,r){var n=t[0],f=t[1],u=t[2],i=t[3];return e[0]=r[0]*n+r[4]*f+r[8]*u+r[12]*i,e[1]=r[1]*n+r[5]*f+r[9]*u+r[13]*i,e[2]=r[2]*n+r[6]*f+r[10]*u+r[14]*i,e[3]=r[3]*n+r[7]*f+r[11]*u+r[15]*i,e}function g(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function B(e,t){var r=e[0],f=e[1],u=e[2],i=e[3],a=t[0],c=t[1],y=t[2],o=t[3];return Math.abs(r-a)<=n.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(f-c)<=n.a*Math.max(1,Math.abs(f),Math.abs(c))&&Math.abs(u-y)<=n.a*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(i-o)<=n.a*Math.max(1,Math.abs(i),Math.abs(o))}var T=a,j=c,E=y,m=s,k=l,A=h,S=d;Object.freeze({__proto__:null,copy:f,set:u,add:i,subtract:a,multiply:c,divide:y,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:o,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},distance:s,squaredDistance:l,length:h,squaredLength:d,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:v,dot:b,lerp:p,random:function(e,t){var r,f,u,i,a,c;t=t||1;do{a=(r=2*Object(n.b)()-1)*r+(f=2*Object(n.b)()-1)*f}while(a>=1);do{c=(u=2*Object(n.b)()-1)*u+(i=2*Object(n.b)()-1)*i}while(c>=1);var y=Math.sqrt((1-a)/c);return e[0]=t*r,e[1]=t*f,e[2]=t*u*y,e[3]=t*i*y,e},transformMat4:O,transformQuat:function(e,t,r){var n=t[0],f=t[1],u=t[2],i=r[0],a=r[1],c=r[2],y=r[3],o=y*n+a*u-c*f,s=y*f+c*n-i*u,l=y*u+i*f-a*n,h=-i*n-a*f-c*u;return e[0]=o*y+h*-i+s*-c-l*-a,e[1]=s*y+h*-a+l*-i-o*-c,e[2]=l*y+h*-c+o*-a-s*-i,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:g,equals:B,sub:T,mul:j,div:E,dist:m,sqrDist:k,len:A,sqrLen:S})}}]);
//# sourceMappingURL=14.21fa5588.chunk.js.map