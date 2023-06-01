// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return v.call(r);n=r[b],a=b,t=null!=(o=r)&&p.call(o,a);try{r[b]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[b]=n:delete r[b],e}:function(r){return v.call(r)},A="function"==typeof Uint32Array;var _="function"==typeof Uint32Array?Uint32Array:null;var s,m="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,t,n;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(A&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=s,U="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var g,j="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),n=t,r=(U&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N=g,I="function"==typeof Uint8Array;var O="function"==typeof Uint8Array?Uint8Array:null;var S,E="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,256,257]),n=t,r=(I&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,P="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,65536,65537]),n=t,r=(H&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,V={uint16:G,uint8:F};(L=new V.uint16(1))[0]=4660;var W=52===new V.uint8(L.buffer)[0],M=!0===W?1:0,k=new N(1),x=new d(k.buffer);function Y(r){return k[0]=r,x[M]}var C=!0===W?1:0,q=new N(1),z=new d(q.buffer);function B(r,t){return q[0]=r,z[C]=t>>>0,q[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;var K=.6931471803691238,Q=1.9082149292705877e-10;function R(r){var t,n,e,o,a,i,u,f,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,o=r,n=1)}return 0!==y&&(e<9007199254740992?(a=(y=((n=Y(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(y=((n=Y(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=B(c,1072693248|n):(y+=1,c=B(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?y*K+(a+=y*Q):y*K-((f=t*(1-.6666666666666666*o))-(y*Q+a)-o):(f=(u=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===y?o-(t-i*(t+f)):y*K-(t-(i*(t+f)+(y*Q+a))-o))}var X=Math.floor,Z=Math.ceil;function $(r){return r<0?Z(r):X(r)}function rr(r){return r===D||r===J}var tr,nr;!0===W?(tr=1,nr=0):(tr=0,nr=1);var er,or,ar={HIGH:tr,LOW:nr},ir=new N(1),ur=new d(ir.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,t,n,e){return ir[0]=r,t[e]=ur[fr],t[e+n]=ur[cr],t}function yr(r){return lr(r,[0,0],1,0)}c(yr,"assign",lr),!0===W?(er=1,or=0):(er=0,or=1);var vr={HIGH:er,LOW:or},pr=new N(1),br=new d(pr.buffer),wr=vr.HIGH,Ar=vr.LOW;function _r(r,t){return br[wr]=r,br[Ar]=t,pr[0]}var sr=[0,0];function mr(r,t,n,e){return l(r)||rr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var dr=[0,0],Ur=[0,0];function hr(r,t){var n,e,o,a,i,u;return 0===t||0===r||l(r)||rr(r)?r:(mr(r,dr,1,0),t+=dr[1],t+=function(r){var t=Y(r);return(t=(2146435072&t)>>>20)-1023|0}(r=dr[0]),t<-1074?(o=0,a=r,yr.assign(o,sr,1,0),i=sr[0],i&=2147483647,u=Y(a),_r(i|=u&=2147483648,sr[1])):t>1023?r<0?J:D:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,yr.assign(r,Ur,1,0),n=Ur[0],n&=2148532223,e*_r(n|=t+1023<<20,Ur[1])))}function gr(r){var t;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return hr(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=$(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function jr(r,t){return l(t)||t<0||t===D?NaN:r<0?J:R(-gr(-t*r))}function Nr(r){return l(r)||r<0||r===D?(t=NaN,function(){return t}):function(t){if(t<0)return J;return R(-gr(-r*t))};var t}c(jr,"factory",Nr);export{jr as default,Nr as factory};
//# sourceMappingURL=mod.js.map
