(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[136],{574:function(n,r){var t,e,i=n.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(n){if(t===setTimeout)return setTimeout(n,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(r){try{return t.call(null,n,0)}catch(r){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(n){t=a}try{e="function"===typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var l,c=[],f=!1,s=-1;function d(){f&&l&&(f=!1,l.length?c=l.concat(c):s=-1,c.length&&y())}function y(){if(!f){var n=u(d);f=!0;for(var r=c.length;r;){for(l=c,c=[];++s<r;)l&&l[s].run();s=-1,r=c.length}l=null,f=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(r){try{return e.call(null,n)}catch(r){return e.call(this,n)}}}(n)}}function m(n,r){this.fun=n,this.array=r}function p(){}i.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new m(n,r)),1!==c.length||f||u(y)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},915:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"i",(function(){return l}));var e,i,a,o={exports:{}};e=o,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(r){var t,e=void 0!==(r=r||{})?r:{},a={};for(t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);var o,u,l="./this.program";o="object"==typeof window,u="function"==typeof importScripts,"object"==typeof n&&"object"==typeof n.versions&&n.versions.node;var c,f="";(o||u)&&(u?f=self.location.href:document.currentScript&&(f=document.currentScript.src),i&&(f=i),f=0!==f.indexOf("blob:")?f.substr(0,f.lastIndexOf("/")+1):"",u&&(c=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var s,d,y=e.print||console.log.bind(console),m=e.printErr||console.warn.bind(console);for(t in a)a.hasOwnProperty(t)&&(e[t]=a[t]);a=null,e.arguments&&e.arguments,e.thisProgram&&(l=e.thisProgram),e.quit&&e.quit,e.wasmBinary&&(s=e.wasmBinary),e.noExitRuntime&&e.noExitRuntime,"object"!=typeof WebAssembly&&m("no native wasm support detected");var p=new WebAssembly.Table({initial:904,maximum:904,element:"anyfunc"}),_=!1,v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function g(n,r,t){for(var e=r+t,i=r;n[i]&&!(i>=e);)++i;if(i-r>16&&n.subarray&&v)return v.decode(n.subarray(r,i));for(var a="";r<i;){var o=n[r++];if(128&o){var u=63&n[r++];if(192!=(224&o)){var l=63&n[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|l:(7&o)<<18|u<<12|l<<6|63&n[r++])<65536)a+=String.fromCharCode(o);else{var c=o-65536;a+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else a+=String.fromCharCode((31&o)<<6|u)}else a+=String.fromCharCode(o)}return a}function h(n,r){return n?g(M,n,r):""}function w(n,r,t,e){if(!(e>0))return 0;for(var i=t,a=t+e-1,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-i}function C(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}var b="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function T(n){for(var r=n,t=r>>1;P[t];)++t;if((r=t<<1)-n>32&&b)return b.decode(M.subarray(n,r));for(var e=0,i="";;){var a=P[n+2*e>>1];if(0==a)return i;++e,i+=String.fromCharCode(a)}}function A(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,i=(t-=2)<2*n.length?t/2:n.length,a=0;a<i;++a){var o=n.charCodeAt(a);P[r>>1]=o,r+=2}return P[r>>1]=0,r-e}function E(n){return 2*n.length}function F(n){for(var r=0,t="";;){var e=R[n+4*r>>2];if(0==e)return t;if(++r,e>=65536){var i=e-65536;t+=String.fromCharCode(55296|i>>10,56320|1023&i)}else t+=String.fromCharCode(e)}}function D(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,i=e+t-4,a=0;a<n.length;++a){var o=n.charCodeAt(a);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++a)),R[r>>2]=o,(r+=4)+4>i)break}return R[r>>2]=0,r-e}function S(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}var W,k,M,P,j,R,O,x,I;function U(n,r){return n%r>0&&(n+=r-n%r),n}function Y(n){W=n,e.HEAP8=k=new Int8Array(n),e.HEAP16=P=new Int16Array(n),e.HEAP32=R=new Int32Array(n),e.HEAPU8=M=new Uint8Array(n),e.HEAPU16=j=new Uint16Array(n),e.HEAPU32=O=new Uint32Array(n),e.HEAPF32=x=new Float32Array(n),e.HEAPF64=I=new Float64Array(n)}var H=e.INITIAL_MEMORY||16777216;function z(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?e.dynCall_v(t):e.dynCall_vi(t,r.arg):t(void 0===r.arg?null:r.arg)}else r(e)}}(d=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:H/65536,maximum:32768}))&&(W=d.buffer),H=W.byteLength,Y(W),R[12616]=5293504;var V=[],L=[],N=[],B=[];function J(n){V.unshift(n)}function q(n){B.unshift(n)}var G=Math.ceil,X=Math.floor,Z=0,$=null;function K(n){throw e.onAbort&&e.onAbort(n),y(n+=""),m(n),_=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}e.preloadedImages={},e.preloadedAudios={};function Q(n){return function(n,r){return String.prototype.startsWith?n.startsWith(r):0===n.indexOf(r)}(n,"data:application/octet-stream;base64,")}var nn="i3s.wasm";function rn(){try{if(s)return new Uint8Array(s);if(c)return c(nn);throw"both async and sync fetching of the wasm failed"}catch(m){K(m)}}function tn(n){return R[$n()>>2]=n,n}Q(nn)||(nn=function(n){return e.locateFile?e.locateFile(n,f):f+n}(nn)),L.push({func:function(){Gn()}});var en={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=en.buffers[n];0===r||10===r?((1===n?y:m)(g(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return en.varargs+=4,R[en.varargs-4>>2]},getStr:function(n){return h(n)},get64:function(n,r){return n}};var an={};function on(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function un(n){return this.fromWireType(O[n>>2])}var ln={},cn={},fn={};function sn(n,r){var t=function(n,r){return n=function(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}(n),function(){return r.apply(this,arguments)}}(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var dn=void 0;function yn(n){throw new dn(n)}function mn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&yn("Mismatched type converter count");for(var i=0;i<n.length;++i)wn(n[i],e[i])}n.forEach((function(n){fn[n]=r}));var i=new Array(r.length),a=[],o=0;r.forEach((function(n,r){cn.hasOwnProperty(n)?i[r]=cn[n]:(a.push(n),ln.hasOwnProperty(n)||(ln[n]=[]),ln[n].push((function(){i[r]=cn[n],++o===a.length&&e(i)})))})),0===a.length&&e(i)}function pn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var _n=void 0;function vn(n){for(var r="",t=n;M[t];)r+=_n[M[t++]];return r}var gn=void 0;function hn(n){throw new gn(n)}function wn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||hn('type "'+e+'" must have a positive integer typeid pointer'),cn.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;hn("Cannot register type '"+e+"' twice")}if(cn[n]=r,delete fn[n],ln.hasOwnProperty(n)){var i=ln[n];delete ln[n],i.forEach((function(n){n()}))}}var Cn=[],bn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Tn(n){n>4&&0==--bn[n].refcount&&(bn[n]=void 0,Cn.push(n))}function An(){for(var n=0,r=5;r<bn.length;++r)void 0!==bn[r]&&++n;return n}function En(){for(var n=5;n<bn.length;++n)if(void 0!==bn[n])return bn[n];return null}function Fn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Cn.length?Cn.pop():bn.length;return bn[r]={refcount:1,value:n},r}}function Dn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Sn(n,r){switch(r){case 2:return function(n){return this.fromWireType(x[n>>2])};case 3:return function(n){return this.fromWireType(I[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Wn(n,r,t){e.hasOwnProperty(n)?((void 0===t||void 0!==e[n].overloadTable&&void 0!==e[n].overloadTable[t])&&hn("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||hn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(e,n,n),e.hasOwnProperty(t)&&hn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),e[n].overloadTable[t]=r):(e[n]=r,void 0!==t&&(e[n].numArguments=t))}function kn(n,r,t){e.hasOwnProperty(n)||yn("Replacing nonexistant public symbol"),void 0!==e[n].overloadTable&&void 0!==t?e[n].overloadTable[t]=r:(e[n]=r,e[n].argCount=t)}function Mn(n,r){n=vn(n);var t=function(n){var t=[r];return function(){t.length=arguments.length+1;for(var r=0;r<arguments.length;r++)t[r+1]=arguments[r];return n.apply(null,t)}}(e["dynCall_"+n]);return"function"!=typeof t&&hn("unknown function pointer with signature "+n+": "+r),t}var Pn=void 0;function jn(n){var r=Qn(n),t=vn(r);return Zn(r),t}function Rn(n,r,t){switch(r){case 0:return t?function(n){return k[n]}:function(n){return M[n]};case 1:return t?function(n){return P[n>>1]}:function(n){return j[n>>1]};case 2:return t?function(n){return R[n>>2]}:function(n){return O[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var On={};function xn(n){try{return d.grow(n-W.byteLength+65535>>>16),Y(d.buffer),1}catch(i){}}var In={};function Un(){if(!Un.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:l||"./this.program"};for(var r in In)n[r]=In[r];var t=[];for(var r in n)t.push(r+"="+n[r]);Un.strings=t}return Un.strings}var Yn=52;function Hn(n){return n%4==0&&(n%100!=0||n%400==0)}function zn(n,r){for(var t=0,e=0;e<=r;t+=n[e++]);return t}var Vn=[31,29,31,30,31,30,31,31,30,31,30,31],Ln=[31,28,31,30,31,30,31,31,30,31,30,31];function Nn(n,r){for(var t=new Date(n.getTime());r>0;){var e=Hn(t.getFullYear()),i=t.getMonth(),a=(e?Vn:Ln)[i];if(!(r>a-t.getDate()))return t.setDate(t.getDate()+r),t;r-=a-t.getDate()+1,t.setDate(1),i<11?t.setMonth(i+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t}function Bn(n,r,t,e){var i=R[e+40>>2],a={tm_sec:R[e>>2],tm_min:R[e+4>>2],tm_hour:R[e+8>>2],tm_mday:R[e+12>>2],tm_mon:R[e+16>>2],tm_year:R[e+20>>2],tm_wday:R[e+24>>2],tm_yday:R[e+28>>2],tm_isdst:R[e+32>>2],tm_gmtoff:R[e+36>>2],tm_zone:i?h(i):""},o=h(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in u)o=o.replace(new RegExp(l,"g"),u[l]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(n,r,t){for(var e="number"==typeof n?n.toString():n||"";e.length<r;)e=t[0]+e;return e}function d(n,r){return s(n,r,"0")}function y(n,r){function t(n){return n<0?-1:n>0?1:0}var e;return 0===(e=t(n.getFullYear()-r.getFullYear()))&&0===(e=t(n.getMonth()-r.getMonth()))&&(e=t(n.getDate()-r.getDate())),e}function m(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function p(n){var r=Nn(new Date(n.tm_year+1900,0,1),n.tm_yday),t=new Date(r.getFullYear(),0,4),e=new Date(r.getFullYear()+1,0,4),i=m(t),a=m(e);return y(i,r)<=0?y(a,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var _={"%a":function(n){return c[n.tm_wday].substring(0,3)},"%A":function(n){return c[n.tm_wday]},"%b":function(n){return f[n.tm_mon].substring(0,3)},"%B":function(n){return f[n.tm_mon]},"%C":function(n){return d((n.tm_year+1900)/100|0,2)},"%d":function(n){return d(n.tm_mday,2)},"%e":function(n){return s(n.tm_mday,2," ")},"%g":function(n){return p(n).toString().substring(2)},"%G":function(n){return p(n)},"%H":function(n){return d(n.tm_hour,2)},"%I":function(n){var r=n.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":function(n){return d(n.tm_mday+zn(Hn(n.tm_year+1900)?Vn:Ln,n.tm_mon-1),3)},"%m":function(n){return d(n.tm_mon+1,2)},"%M":function(n){return d(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return d(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var r=new Date(n.tm_year+1900,0,1),t=0===r.getDay()?r:Nn(r,7-r.getDay()),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(y(t,e)<0){var i=zn(Hn(e.getFullYear())?Vn:Ln,e.getMonth()-1)-31,a=31-t.getDate()+i+e.getDate();return d(Math.ceil(a/7),2)}return 0===y(t,r)?"01":"00"},"%V":function(n){var r,t=new Date(n.tm_year+1900,0,4),e=new Date(n.tm_year+1901,0,4),i=m(t),a=m(e),o=Nn(new Date(n.tm_year+1900,0,1),n.tm_yday);return y(o,i)<0?"53":y(a,o)<=0?"01":(r=i.getFullYear()<n.tm_year+1900?n.tm_yday+32-i.getDate():n.tm_yday+1-i.getDate(),d(Math.ceil(r/7),2))},"%w":function(n){return n.tm_wday},"%W":function(n){var r=new Date(n.tm_year,0,1),t=1===r.getDay()?r:Nn(r,0===r.getDay()?1:7-r.getDay()+1),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(y(t,e)<0){var i=zn(Hn(e.getFullYear())?Vn:Ln,e.getMonth()-1)-31,a=31-t.getDate()+i+e.getDate();return d(Math.ceil(a/7),2)}return 0===y(t,r)?"01":"00"},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var r=n.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var l in _)o.indexOf(l)>=0&&(o=o.replace(new RegExp(l,"g"),_[l](a)));var v=function(n,r,t){var e=t>0?t:C(n)+1,i=new Array(e),a=w(n,i,0,i.length);return r&&(i.length=a),i}(o,!1);return v.length>r?0:(function(n,r){k.set(n,r)}(v,n),v.length-1)}dn=e.InternalError=sn(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);_n=n}(),gn=e.BindingError=sn(Error,"BindingError"),e.count_emval_handles=An,e.get_first_emval=En,Pn=e.UnboundTypeError=sn(Error,"UnboundTypeError");var Jn={__cxa_allocate_exception:function(n){return Xn(n)},__cxa_atexit:function(n,r){},__cxa_throw:function(n,r,t){throw n},__map_file:function(n,r){return tn(63),-1},__sys_munmap:function(n,r){return function(n,r){if(-1==(0|n)||0===r)return-28;var t=en.mappings[n];return t?(r===t.len&&(en.mappings[n]=null,t.allocated&&Zn(t.malloc)),0):0}(n,r)},_embind_finalize_value_object:function(n){var r=an[n];delete an[n];var t=r.rawConstructor,e=r.rawDestructor,i=r.fields;mn([n],i.map((function(n){return n.getterReturnType})).concat(i.map((function(n){return n.setterArgumentType}))),(function(n){var a={};return i.forEach((function(r,t){var e=r.fieldName,o=n[t],u=r.getter,l=r.getterContext,c=n[t+i.length],f=r.setter,s=r.setterContext;a[e]={read:function(n){return o.fromWireType(u(l,n))},write:function(n,r){var t=[];f(s,n,c.toWireType(t,r)),on(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in a)r[t]=a[t].read(n);return e(n),r},toWireType:function(n,r){for(var i in a)if(!(i in r))throw new TypeError("Missing field");var o=t();for(i in a)a[i].write(o,r[i]);return null!==n&&n.push(e,o),o},argPackAdvance:8,readValueFromPointer:un,destructorFunction:e}]}))},_embind_register_bool:function(n,r,t,e,i){var a=pn(t);wn(n,{name:r=vn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=k;else if(2===t)e=P;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=R}return this.fromWireType(e[n>>a])},destructorFunction:null})},_embind_register_emval:function(n,r){wn(n,{name:r=vn(r),fromWireType:function(n){var r=bn[n].value;return Tn(n),r},toWireType:function(n,r){return Fn(r)},argPackAdvance:8,readValueFromPointer:un,destructorFunction:null})},_embind_register_float:function(n,r,t){var e=pn(t);wn(n,{name:r=vn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Dn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Sn(r,e),destructorFunction:null})},_embind_register_function:function(n,r,t,e,i,a){var o=function(n,r){for(var t=[],e=0;e<n;e++)t.push(R[(r>>2)+e]);return t}(r,t);n=vn(n),i=Mn(e,i),Wn(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||cn[r]||(fn[r]?fn[r].forEach(n):(t.push(r),e[r]=!0))})),new Pn(n+": "+t.map(jn).join([", "]))}("Cannot call "+n+" due to unbound types",o)}),r-1),mn([],o,(function(t){var e=[t[0],null].concat(t.slice(1));return kn(n,function(n,r,t,e,i){var a=r.length;a<2&&hn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var o=null!==r[1]&&null!==t,u=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){u=!0;break}var c="void"!==r[0].name,f=a-2,s=new Array(f),d=[],y=[];return function(){var t;arguments.length!==f&&hn("function "+n+" called with "+arguments.length+" arguments, expected "+f+" args!"),y.length=0,d.length=o?2:1,d[0]=i,o&&(t=r[1].toWireType(y,this),d[1]=t);for(var a=0;a<f;++a)s[a]=r[a+2].toWireType(y,arguments[a]),d.push(s[a]);var l=e.apply(null,d);if(u)on(y);else for(a=o?1:2;a<r.length;a++){var m=1===a?t:s[a-2];null!==r[a].destructorFunction&&r[a].destructorFunction(m)}if(c)return r[0].fromWireType(l)}}(n,e,null,i,a),r-1),[]}))},_embind_register_integer:function(n,r,t,e,i){r=vn(r),-1===i&&(i=4294967295);var a=pn(t),o=function(n){return n};if(0===e){var u=32-8*t;o=function(n){return n<<u>>>u}}var l=-1!=r.indexOf("unsigned");wn(n,{name:r,fromWireType:o,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Dn(t)+'" to '+this.name);if(t<e||t>i)throw new TypeError('Passing a number "'+Dn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+i+"]!");return l?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Rn(r,a,0!==e),destructorFunction:null})},_embind_register_memory_view:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(n){var r=O,t=r[n>>=2],i=r[n+1];return new e(W,i,t)}wn(n,{name:t=vn(t),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var t="std::string"===(r=vn(r));wn(n,{name:r,fromWireType:function(n){var r,e=O[n>>2];if(t){var i=M[n+4+e],a=0;0!=i&&(a=i,M[n+4+e]=0);for(var o=n+4,u=0;u<=e;++u){var l=n+4+u;if(0==M[l]){var c=h(o);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),o=l+1}}0!=a&&(M[n+4+e]=a)}else{var f=new Array(e);for(u=0;u<e;++u)f[u]=String.fromCharCode(M[n+4+u]);r=f.join("")}return Zn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||hn("Cannot pass non-string to std::string");var i=(t&&e?function(){return C(r)}:function(){return r.length})(),a=Xn(4+i+1);if(O[a>>2]=i,t&&e)!function(n,r,t){w(n,M,r,t)}(r,a+4,i+1);else if(e)for(var o=0;o<i;++o){var u=r.charCodeAt(o);u>255&&(Zn(a),hn("String has UTF-16 code units that do not fit in 8 bits")),M[a+4+o]=u}else for(o=0;o<i;++o)M[a+4+o]=r[o];return null!==n&&n.push(Zn,a),a},argPackAdvance:8,readValueFromPointer:un,destructorFunction:function(n){Zn(n)}})},_embind_register_std_wstring:function(n,r,t){var e,i,a,o,u;t=vn(t),2===r?(e=T,i=A,o=E,a=function(){return j},u=1):4===r&&(e=F,i=D,o=S,a=function(){return O},u=2),wn(n,{name:t,fromWireType:function(n){var t,i=O[n>>2],o=a(),l=o[n+4+i*r>>u],c=0;0!=l&&(c=l,o[n+4+i*r>>u]=0);for(var f=n+4,s=0;s<=i;++s){var d=n+4+s*r;if(0==o[d>>u]){var y=e(f);void 0===t?t=y:(t+=String.fromCharCode(0),t+=y),f=d+r}}return 0!=c&&(o[n+4+i*r>>u]=c),Zn(n),t},toWireType:function(n,e){"string"!=typeof e&&hn("Cannot pass non-string to C++ string type "+t);var a=o(e),l=Xn(4+a+r);return O[l>>2]=a>>u,i(e,l+4,a+r),null!==n&&n.push(Zn,l),l},argPackAdvance:8,readValueFromPointer:un,destructorFunction:function(n){Zn(n)}})},_embind_register_value_object:function(n,r,t,e,i,a){an[n]={name:vn(r),rawConstructor:Mn(t,e),rawDestructor:Mn(i,a),fields:[]}},_embind_register_value_object_field:function(n,r,t,e,i,a,o,u,l,c){an[n].fields.push({fieldName:vn(r),getterReturnType:t,getter:Mn(e,i),getterContext:a,setterArgumentType:o,setter:Mn(u,l),setterContext:c})},_embind_register_void:function(n,r){wn(n,{isVoid:!0,name:r=vn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},_emval_decref:Tn,_emval_incref:function(n){n>4&&(bn[n].refcount+=1)},_emval_new_cstring:function(n){return Fn(function(n){var r=On[n];return void 0===r?vn(n):r}(n))},_emval_take_value:function(n,r){return Fn((n=function(n,r){var t=cn[n];return void 0===t&&hn(r+" has unknown type "+jn(n)),t}(n,"_emval_take_value")).readValueFromPointer(r))},abort:function(){K()},emscripten_get_sbrk_ptr:function(){return 50464},emscripten_memcpy_big:function(n,r,t){M.copyWithin(n,r,r+t)},emscripten_resize_heap:function(n){n>>>=0;var r=M.length,t=2147483648;if(n>t)return!1;for(var e=1;e<=4;e*=2){var i=r*(1+.2/e);if(i=Math.min(i,n+100663296),xn(Math.min(t,U(Math.max(16777216,n,i),65536))))return!0}return!1},environ_get:function(n,r){var t=0;return Un().forEach((function(e,i){var a=r+t;R[n+4*i>>2]=a,function(n,r,t){for(var e=0;e<n.length;++e)k[r++>>0]=n.charCodeAt(e);t||(k[r>>0]=0)}(e,a),t+=e.length+1})),0},environ_sizes_get:function(n,r){var t=Un();R[n>>2]=t.length;var e=0;return t.forEach((function(n){e+=n.length+1})),R[r>>2]=e,0},fd_close:function(n){return 0},fd_seek:function(n,r,t,e,i){},fd_write:function(n,r,t,e){for(var i=0,a=0;a<t;a++){for(var o=R[r+8*a>>2],u=R[r+(8*a+4)>>2],l=0;l<u;l++)en.printChar(n,M[o+l]);i+=u}return R[e>>2]=i,0},memory:d,raise:function(n){return tn(Yn),-1},round:function(n){return(n=+n)>=0?+X(n+.5):+G(n-.5)},roundf:function(n){return(n=+n)>=0?+X(n+.5):+G(n-.5)},setTempRet0:function(n){},strftime_l:function(n,r,t,e){return Bn(n,r,t,e)},table:p},qn=function(){var n={env:Jn,wasi_snapshot_preview1:Jn};function r(n,r){var t=n.exports;e.asm=t,function(n){if(Z--,e.monitorRunDependencies&&e.monitorRunDependencies(Z),0==Z&&$){var r=$;$=null,r()}}()}function t(n){r(n.instance)}function i(r){return(s||!o&&!u||"function"!=typeof fetch?new Promise((function(n,r){n(rn())})):fetch(nn,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+nn+"'";return n.arrayBuffer()})).catch((function(){return rn()}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){m("failed to asynchronously prepare wasm: "+n),K(n)}))}if(Z++,e.monitorRunDependencies&&e.monitorRunDependencies(Z),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(o){return m("Module.instantiateWasm callback failed with error: "+o),!1}return function(){if(s||"function"!=typeof WebAssembly.instantiateStreaming||Q(nn)||"function"!=typeof fetch)return i(t);fetch(nn,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){m("wasm streaming compile failed: "+n),m("falling back to ArrayBuffer instantiation"),i(t)}))}))}(),{}}();e.asm=qn;var Gn=e.___wasm_call_ctors=function(){return(Gn=e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)},Xn=e._malloc=function(){return(Xn=e._malloc=e.asm.malloc).apply(null,arguments)},Zn=e._free=function(){return(Zn=e._free=e.asm.free).apply(null,arguments)},$n=e.___errno_location=function(){return($n=e.___errno_location=e.asm.__errno_location).apply(null,arguments)};e._setThrew=function(){return(e._setThrew=e.asm.setThrew).apply(null,arguments)};var Kn,Qn=e.___getTypeName=function(){return(Qn=e.___getTypeName=e.asm.__getTypeName).apply(null,arguments)};function nr(n){function r(){Kn||(Kn=!0,e.calledRun=!0,_||(z(L),z(N),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)q(e.postRun.shift());z(B)}()))}Z>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)J(e.preRun.shift());z(V)}(),Z>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),r()}),1)):r()))}if(e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)},e.stackAlloc=function(){return(e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)},e.stackRestore=function(){return(e.stackRestore=e.asm.stackRestore).apply(null,arguments)},e.__growWasmMemory=function(){return(e.__growWasmMemory=e.asm.__growWasmMemory).apply(null,arguments)},e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.dynCall_ii).apply(null,arguments)},e.dynCall_i=function(){return(e.dynCall_i=e.asm.dynCall_i).apply(null,arguments)},e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.dynCall_vi).apply(null,arguments)},e.dynCall_dii=function(){return(e.dynCall_dii=e.asm.dynCall_dii).apply(null,arguments)},e.dynCall_viid=function(){return(e.dynCall_viid=e.asm.dynCall_viid).apply(null,arguments)},e.dynCall_fii=function(){return(e.dynCall_fii=e.asm.dynCall_fii).apply(null,arguments)},e.dynCall_viif=function(){return(e.dynCall_viif=e.asm.dynCall_viif).apply(null,arguments)},e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.dynCall_iii).apply(null,arguments)},e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.dynCall_viii).apply(null,arguments)},e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.dynCall_vii).apply(null,arguments)},e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.dynCall_viiiii).apply(null,arguments)},e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.dynCall_viiii).apply(null,arguments)},e.dynCall_iiiiiiiiidiii=function(){return(e.dynCall_iiiiiiiiidiii=e.asm.dynCall_iiiiiiiiidiii).apply(null,arguments)},e.dynCall_iiiiiiiidiii=function(){return(e.dynCall_iiiiiiiidiii=e.asm.dynCall_iiiiiiiidiii).apply(null,arguments)},e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.dynCall_iiii).apply(null,arguments)},e.dynCall_v=function(){return(e.dynCall_v=e.asm.dynCall_v).apply(null,arguments)},e.dynCall_vij=function(){return(e.dynCall_vij=e.asm.dynCall_vij).apply(null,arguments)},e.dynCall_iiiiiiii=function(){return(e.dynCall_iiiiiiii=e.asm.dynCall_iiiiiiii).apply(null,arguments)},e.dynCall_iiiii=function(){return(e.dynCall_iiiii=e.asm.dynCall_iiiii).apply(null,arguments)},e.dynCall_iif=function(){return(e.dynCall_iif=e.asm.dynCall_iif).apply(null,arguments)},e.dynCall_viijii=function(){return(e.dynCall_viijii=e.asm.dynCall_viijii).apply(null,arguments)},e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.dynCall_iiiiii).apply(null,arguments)},e.dynCall_viiiiiiddi=function(){return(e.dynCall_viiiiiiddi=e.asm.dynCall_viiiiiiddi).apply(null,arguments)},e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.dynCall_iiiiiii).apply(null,arguments)},e.dynCall_iidiiii=function(){return(e.dynCall_iidiiii=e.asm.dynCall_iidiiii).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)},e.dynCall_iiiiiiiii=function(){return(e.dynCall_iiiiiiiii=e.asm.dynCall_iiiiiiiii).apply(null,arguments)},e.dynCall_iiiiij=function(){return(e.dynCall_iiiiij=e.asm.dynCall_iiiiij).apply(null,arguments)},e.dynCall_iiiiid=function(){return(e.dynCall_iiiiid=e.asm.dynCall_iiiiid).apply(null,arguments)},e.dynCall_iiiiijj=function(){return(e.dynCall_iiiiijj=e.asm.dynCall_iiiiijj).apply(null,arguments)},e.dynCall_iiiiiijj=function(){return(e.dynCall_iiiiiijj=e.asm.dynCall_iiiiiijj).apply(null,arguments)},e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.dynCall_viiiiii).apply(null,arguments)},e.asm=qn,e.then=function(n){if(Kn)n(e);else{var r=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){r&&r(),n(e)}}return e},$=function n(){Kn||nr(),Kn||($=n)},e.run=nr,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return nr(),r},e.exports=a;var u=o.exports,l=Object.freeze(Object.assign(Object.create(null),o.exports,{default:u}))}.call(this,t(574))}}]);
//# sourceMappingURL=136.b2142e97.chunk.js.map