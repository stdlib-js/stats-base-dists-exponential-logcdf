// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return b.call(t);r=t[s],i=s,n=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[s]=r:delete t[s],e}:function(t){return b.call(t)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,n,r;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(w&&r instanceof Uint32Array||"[object Uint32Array]"===d(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?_:function(){throw new Error("not implemented")};var m,h=y,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var t,n,r;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,NaN]),r=n,t=(U&&r instanceof Float64Array||"[object Float64Array]"===d(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var N,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),r=n,t=(O&&r instanceof Uint8Array||"[object Uint8Array]"===d(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var F,T=N,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var t,n,r;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),r=n,t=(H&&r instanceof Uint16Array||"[object Uint16Array]"===d(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?P:function(){throw new Error("not implemented")};var L,V={uint16:F,uint8:T};(L=new V.uint16(1))[0]=4660;var W=52===new V.uint8(L.buffer)[0],x=!0===W?1:0,M=new I(1),k=new h(M.buffer);function Y(t){return M[0]=t,k[x]}var C=!0===W?1:0,q=new I(1),z=new h(q.buffer);function B(t,n){return q[0]=t,z[C]=n>>>0,q[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10;function X(t){var n,r,e,o,i,u,a,f,c,y;if(t<-1||l(t))return NaN;if(-1===t)return J;if(t===D)return t;if(0===t)return t;if(y=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(y=0,o=t,r=1)}return 0!==y&&(e<9007199254740992?(i=(y=((r=Y(c=1+t))>>20)-K)>0?1-(c-t):t-(c-1),i/=c):(y=((r=Y(c=t))>>20)-K,i=0),(r&=1048575)<434334?c=B(c,1072693248|r):(y+=1,c=B(c,1071644672|r),r=1048576-r>>2),o=c-1),n=.5*o*o,0===r?0===o?y*Q+(i+=y*R):y*Q-((f=n*(1-.6666666666666666*o))-(y*R+i)-o):(f=(a=(u=o/(2+o))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===y?o-(n-u*(n+f)):y*Q-(n-(u*(n+f)+(y*R+i))-o))}var Z,$,tt=Math.floor,nt=Math.ceil;function rt(t){return t<0?nt(t):tt(t)}function et(t){return t===D||t===J}!0===W?(Z=1,$=0):(Z=0,$=1);var ot,it,ut={HIGH:Z,LOW:$},at=new I(1),ft=new h(at.buffer),ct=ut.HIGH,lt=ut.LOW;function yt(t,n,r,e){return at[0]=t,n[e]=ft[ct],n[e+r]=ft[lt],n}function pt(t){return yt(t,[0,0],1,0)}c(pt,"assign",yt),!0===W?(ot=1,it=0):(ot=0,it=1);var bt={HIGH:ot,LOW:it},vt=new I(1),st=new h(vt.buffer),dt=bt.HIGH,wt=bt.LOW;function At(t,n){return st[dt]=t,st[wt]=n,vt[0]}var _t=[0,0];function mt(t,n,r,e){return l(t)||et(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return mt(t,[0,0],1,0)}),"assign",mt);var ht=[0,0],Ut=[0,0];function gt(t,n){var r,e,o,i,u,a;return 0===n||0===t||l(t)||et(t)?t:(mt(t,ht,1,0),n+=ht[1],n+=function(t){var n=Y(t);return(n=(2146435072&n)>>>20)-K|0}(t=ht[0]),n<-1074?(o=0,i=t,pt.assign(o,_t,1,0),u=_t[0],u&=2147483647,a=Y(i),At(u|=a&=2147483648,_t[1])):n>1023?t<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pt.assign(t,Ut,1,0),r=Ut[0],r&=2148532223,e*At(r|=n+K<<20,Ut[1])))}var jt=1.4426950408889634,Nt=1/(1<<28);function It(t){var n;return l(t)||t===D?t:t===J?0:t>709.782712893384?D:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Nt?1+t:function(t,n,r){var e,o,i,u;return gt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=rt(t<0?jt*t-.5:jt*t+.5)),1.9082149292705877e-10*n,n)}function Ot(t,n){return l(n)||n<0||n===D?NaN:t<0?J:X(-It(-n*t))}return c(Ot,"factory",(function(t){return l(t)||t<0||t===D?(n=NaN,function(){return n}):function(n){return n<0?J:X(-It(-t*n))};var n})),Ot},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).logcdf=n();
//# sourceMappingURL=index.js.map
