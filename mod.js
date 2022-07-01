// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,_=A;var m=function(r){return _.call(r)},d=Object.prototype.hasOwnProperty;var U=function(r,n){return null!=r&&d.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",s=U,j=h,g=A;var N=m,I=function(r){var n,t,e;if(null==r)return g.call(r);t=r[j],n=s(r,j);try{r[j]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[j]=t:delete r[j],e},O=w()?I:N,S=O,E="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null,H=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},T=F;var G=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),r=H(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var P="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},V=G()?P:L,W=O,M="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null,x=function(r){return M&&r instanceof Float64Array||"[object Float64Array]"===W(r)},Y=k;var C=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=x(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var q="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=C()?q:z,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ur=er;var ar=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,65536,65537]),r=or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ir,fr="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},lr={uint16:ar()?fr:cr,uint8:rr};(ir=new lr.uint16(1))[0]=4660;var yr=52===new lr.uint8(ir.buffer)[0],vr=V,pr=!0===yr?1:0,br=new B(1),wr=new vr(br.buffer);var Ar=function(r){return br[0]=r,wr[pr]},_r=V,mr=!0===yr?1:0,dr=new B(1),Ur=new _r(dr.buffer);var hr=function(r,n){return dr[0]=r,Ur[mr]=n>>>0,dr[0]},sr=hr,jr=Number.POSITIVE_INFINITY,gr=Number.NEGATIVE_INFINITY;var Nr=p,Ir=Ar,Or=sr,Sr=jr,Er=gr,Fr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Hr=.6931471803691238,Tr=1.9082149292705877e-10;var Gr=function(r){var n,t,e,o,u,a,i,f,c,l;if(r<-1||Nr(r))return NaN;if(-1===r)return Er;if(r===Sr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(u=(l=((t=Ir(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(l=((t=Ir(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=Or(c,1072693248|t):(l+=1,c=Or(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*Hr+(u+=l*Tr):l*Hr-((f=n*(1-.6666666666666666*o))-(l*Tr+u)-o):(f=(i=(a=o/(2+o))*a)*Fr(i),0===l?o-(n-a*(n+f)):l*Hr-(n-(a*(n+f)+(l*Tr+u))-o))},Pr=Math.floor,Lr=Math.ceil,Vr=Pr,Wr=Lr;var Mr=function(r){return r<0?Wr(r):Vr(r)},kr=jr,xr=gr;var Yr,Cr,qr=function(r){return r===kr||r===xr};!0===yr?(Yr=1,Cr=0):(Yr=0,Cr=1);var zr=V,Br={HIGH:Yr,LOW:Cr},Dr=new B(1),Jr=new zr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;var Rr=function(r,n){return Dr[0]=n,r[0]=Jr[Kr],r[1]=Jr[Qr],r};var Xr,Zr,$r=function(r,n){return 1===arguments.length?Rr([0,0],r):Rr(r,n)};!0===yr?(Xr=1,Zr=0):(Xr=0,Zr=1);var rn=V,nn={HIGH:Xr,LOW:Zr},tn=new B(1),en=new rn(tn.buffer),on=nn.HIGH,un=nn.LOW;var an=function(r,n){return en[on]=r,en[un]=n,tn[0]},fn=$r,cn=Ar,ln=an,yn=[0,0];var vn=qr,pn=p,bn=function(r){return Math.abs(r)};var wn=function(r,n){return pn(n)||vn(n)?(r[0]=n,r[1]=0,r):0!==n&&bn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var An=Ar;var _n=function(r){var n=An(r);return(n=(2146435072&n)>>>20)-1023|0},mn=jr,dn=gr,Un=p,hn=qr,sn=function(r,n){var t,e;return fn(yn,r),t=yn[0],t&=2147483647,e=cn(n),ln(t|=e&=2147483648,yn[1])},jn=function(r,n){return 1===arguments.length?wn([0,0],r):wn(r,n)},gn=_n,Nn=$r,In=an,On=[0,0],Sn=[0,0];var En=function(r,n){var t,e;return 0===n||0===r||Un(r)||hn(r)?r:(jn(On,r),n+=On[1],(n+=gn(r=On[0]))<-1074?sn(0,r):n>1023?r<0?dn:mn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nn(Sn,r),t=Sn[0],t&=2148532223,e*In(t|=n+1023<<20,Sn[1])))};var Fn=En,Hn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Tn=p,Gn=Mr,Pn=gr,Ln=jr,Vn=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*Hn(o),Fn(1-(n-e*u/(2-u)-r),t)};var Wn=function(r){var n;return Tn(r)||r===Ln?r:r===Pn?0:r>709.782712893384?Ln:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Gn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Vn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};function Mn(r,n){return p(n)||n<0||n===jr?NaN:r<0?gr:Gr(-Wn(-n*r))}var kn=function(r){return function(){return r}};function xn(r){return p(r)||r<0||r===jr?kn(NaN):function(n){if(n<0)return gr;return Gr(-Wn(-r*n))}}v(Mn,"factory",xn);export{Mn as default,xn as factory};
//# sourceMappingURL=mod.js.map
