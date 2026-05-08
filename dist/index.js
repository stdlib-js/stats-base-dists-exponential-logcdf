"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(k,t){
var c=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist'),a=require('@stdlib/math-base-special-exp/dist'),f=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/constants-float64-pinf/dist');function p(e,r){return c(r)||r<0||r===N?NaN:e<0?f:s(-a(-r*e))}t.exports=p
});var q=u(function(w,o){
var F=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-log1p/dist'),I=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/constants-float64-ninf/dist'),P=require('@stdlib/constants-float64-pinf/dist');function O(e){if(g(e)||e<0||e===P)return F(NaN);return r;function r(i){return i<0?x:y(-I(-e*i))}}o.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=n(),h=q();R(v,"factory",h);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
