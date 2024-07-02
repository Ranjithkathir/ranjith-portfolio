import{A as K2,B as Q2,C as I,D as n1,E as J2,F as c3,G as V,H as $,I as P1,J as a3,K as f1,L as D,M as e3,N as i3,P as r3,Q as s3,R as T1,S as z1,T as n3,U as K,V as F1,W as B1,_ as f3,a as q2,aa as l3,b as U,ba as D1,c as Y,d as y1,da as f2,e as E2,f as b,g as X,h as O2,i as A1,j as U2,k as I2,l as W2,m as G2,n as j2,o as p,p as S,q as Z2,r as s1,s as _2,t as C,u as Y2,v as h,w as H,x as d,y as X2,z as $2}from"./chunk-AO4LNLT6.js";function o3(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?o3(Object(r),!0).forEach(function(e){N(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):o3(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function Y1(c){"@babel/helpers - typeof";return Y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Y1(c)}function D4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function t3(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function R4(c,a,r){return a&&t3(c.prototype,a),r&&t3(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function N(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function g2(c,a){return E4(c)||U4(c,a)||B3(c,a)||W4()}function N1(c){return q4(c)||O4(c)||B3(c)||I4()}function q4(c){if(Array.isArray(c))return z2(c)}function E4(c){if(Array.isArray(c))return c}function O4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function U4(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,f;try{for(r=r.call(c);!(i=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw f}}return e}}function B3(c,a){if(c){if(typeof c=="string")return z2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z2(c,a)}}function z2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function I4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m3=function(){},x2={},D3={},R3=null,q3={mark:m3,measure:m3};try{typeof window<"u"&&(x2=window),typeof document<"u"&&(D3=document),typeof MutationObserver<"u"&&(R3=MutationObserver),typeof performance<"u"&&(q3=performance)}catch{}var G4=x2.navigator||{},z3=G4.userAgent,v3=z3===void 0?"":z3,J=x2,g=D3,h3=R3,R1=q3,Q8=!!J.document,Z=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",E3=~v3.indexOf("MSIE")||~v3.indexOf("Trident/"),q1,E1,O1,U1,I1,W="___FONT_AWESOME___",v2=16,O3="fa",U3="svg-inline--fa",t1="data-fa-i2svg",h2="data-fa-pseudo-element",j4="data-fa-pseudo-element-pending",b2="data-prefix",N2="data-icon",H3="fontawesome-i2svg",Z4="async",_4=["HTML","HEAD","STYLE","SCRIPT"],I3=function(){try{return!0}catch{return!1}}(),L="classic",x="sharp",S2=[L,x];function S1(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[L]}})}var d1=S1((q1={},N(q1,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(q1,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),q1)),L1=S1((E1={},N(E1,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(E1,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),E1)),g1=S1((O1={},N(O1,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(O1,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),O1)),Y4=S1((U1={},N(U1,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(U1,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),U1)),X4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,W3="fa-layers-text",$4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,K4=S1((I1={},N(I1,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(I1,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),I1)),G3=[1,2,3,4,5,6,7,8,9,10],Q4=G3.concat([11,12,13,14,15,16,17,18,19,20]),J4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],l1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x1=new Set;Object.keys(L1[L]).map(x1.add.bind(x1));Object.keys(L1[x]).map(x1.add.bind(x1));var c6=[].concat(S2,N1(x1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l1.GROUP,l1.SWAP_OPACITY,l1.PRIMARY,l1.SECONDARY]).concat(G3.map(function(c){return"".concat(c,"x")})).concat(Q4.map(function(c){return"w-".concat(c)})),C1=J.FontAwesomeConfig||{};function a6(c){var a=g.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function e6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&(p3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],p3.forEach(function(c){var a=g2(c,2),r=a[0],e=a[1],i=e6(a6(r));i!=null&&(C1[e]=i)}));var p3,j3={styleDefault:"solid",familyDefault:"classic",cssPrefix:O3,replacementClass:U3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C1.familyPrefix&&(C1.cssPrefix=C1.familyPrefix);var p1=t(t({},j3),C1);p1.autoReplaceSvg||(p1.observeMutations=!1);var z={};Object.keys(j3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(r){p1[c]=r,u1.forEach(function(e){return e(z)})},get:function(){return p1[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){p1.cssPrefix=a,u1.forEach(function(r){return r(z)})},get:function(){return p1.cssPrefix}});J.FontAwesomeConfig=z;var u1=[];function i6(c){return u1.push(c),function(){u1.splice(u1.indexOf(c),1)}}var Q=v2,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function r6(c){if(!(!c||!Z)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=g.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return g.head.insertBefore(a,e),c}}var s6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b1(){for(var c=12,a="";c-- >0;)a+=s6[Math.random()*62|0];return a}function V1(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function k2(c){return c.classList?V1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Z3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n6(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(Z3(c[r]),'" ')},"").trim()}function K1(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function w2(c){return c.size!==O.size||c.x!==O.x||c.y!==O.y||c.rotate!==O.rotate||c.flipX||c.flipY}function f6(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:l,path:m}}function l6(c){var a=c.transform,r=c.width,e=r===void 0?v2:r,i=c.height,s=i===void 0?v2:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&E3?l+="translate(".concat(a.x/Q-e/2,"em, ").concat(a.y/Q-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/Q,"em), calc(-50% + ").concat(a.y/Q,"em)) "):l+="translate(".concat(a.x/Q,"em, ").concat(a.y/Q,"em) "),l+="scale(".concat(a.size/Q*(a.flipX?-1:1),", ").concat(a.size/Q*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var o6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _3(){var c=O3,a=U3,r=z.cssPrefix,e=z.replacementClass,i=o6;if(r!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return i}var V3=!1;function l2(){z.autoAddCss&&!V3&&(r6(_3()),V3=!0)}var t6={mixout:function(){return{dom:{css:_3,insertCss:l2}}},hooks:function(){return{beforeDOMElementCreation:function(){l2()},beforeI2svg:function(){l2()}}}},G=J||{};G[W]||(G[W]={});G[W].styles||(G[W].styles={});G[W].hooks||(G[W].hooks={});G[W].shims||(G[W].shims=[]);var R=G[W],Y3=[],m6=function c(){g.removeEventListener("DOMContentLoaded",c),X1=1,Y3.map(function(a){return a()})},X1=!1;Z&&(X1=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),X1||g.addEventListener("DOMContentLoaded",m6));function z6(c){Z&&(X1?setTimeout(c,0):Y3.push(c))}function k1(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?Z3(c):"<".concat(a," ").concat(n6(e),">").concat(s.map(k1).join(""),"</").concat(a,">")}function M3(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var v6=function(a,r){return function(e,i,s,n){return a.call(r,e,i,s,n)}},o2=function(a,r,e,i){var s=Object.keys(a),n=s.length,f=i!==void 0?v6(r,i):r,l,m,o;for(e===void 0?(l=1,o=a[s[0]]):(l=0,o=e);l<n;l++)m=s[l],o=f(o,a[m],m,a);return o};function h6(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=c.charCodeAt(r++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function H2(c){var a=h6(c);return a.length===1?a[0].toString(16):null}function H6(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function C3(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function p2(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=C3(a);typeof R.hooks.addPack=="function"&&!i?R.hooks.addPack(c,C3(a)):R.styles[c]=t(t({},R.styles[c]||{}),s),c==="fas"&&p2("fa",a)}var W1,G1,j1,v1=R.styles,p6=R.shims,V6=(W1={},N(W1,L,Object.values(g1[L])),N(W1,x,Object.values(g1[x])),W1),y2=null,X3={},$3={},K3={},Q3={},J3={},M6=(G1={},N(G1,L,Object.keys(d1[L])),N(G1,x,Object.keys(d1[x])),G1);function C6(c){return~c6.indexOf(c)}function u6(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!C6(i)?i:null}var c4=function(){var a=function(s){return o2(v1,function(n,f,l){return n[l]=o2(f,s,{}),n},{})};X3=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),$3=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),J3=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var r="far"in v1||z.autoFetchSvg,e=o2(p6,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});K3=e.names,Q3=e.unicodes,y2=Q1(z.styleDefault,{family:z.familyDefault})};i6(function(c){y2=Q1(c.styleDefault,{family:z.familyDefault})});c4();function A2(c,a){return(X3[c]||{})[a]}function d6(c,a){return($3[c]||{})[a]}function o1(c,a){return(J3[c]||{})[a]}function a4(c){return K3[c]||{prefix:null,iconName:null}}function L6(c){var a=Q3[c],r=A2("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function c1(){return y2}var P2=function(){return{prefix:null,iconName:null,rest:[]}};function Q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?L:r,i=d1[e][c],s=L1[e][c]||L1[e][i],n=c in R.styles?c:null;return s||n||null}var u3=(j1={},N(j1,L,Object.keys(g1[L])),N(j1,x,Object.keys(g1[x])),j1);function J1(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(a={},N(a,L,"".concat(z.cssPrefix,"-").concat(L)),N(a,x,"".concat(z.cssPrefix,"-").concat(x)),a),n=null,f=L;(c.includes(s[L])||c.some(function(m){return u3[L].includes(m)}))&&(f=L),(c.includes(s[x])||c.some(function(m){return u3[x].includes(m)}))&&(f=x);var l=c.reduce(function(m,o){var v=u6(z.cssPrefix,o);if(v1[o]?(o=V6[f].includes(o)?Y4[f][o]:o,n=o,m.prefix=o):M6[f].indexOf(o)>-1?(n=o,m.prefix=Q1(o,{family:f})):v?m.iconName=v:o!==z.replacementClass&&o!==s[L]&&o!==s[x]&&m.rest.push(o),!i&&m.prefix&&m.iconName){var M=n==="fa"?a4(m.iconName):{},u=o1(m.prefix,m.iconName);M.prefix&&(n=null),m.iconName=M.iconName||u||m.iconName,m.prefix=M.prefix||m.prefix,m.prefix==="far"&&!v1.far&&v1.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},P2());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===x&&(v1.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=o1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=c1()||"fas"),l}var g6=function(){function c(){D4(this,c),this.definitions={}}return R4(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=t(t({},r.definitions[f]||{}),n[f]),p2(f,n[f]);var l=g1[L][f];l&&p2(l,n[f]),c4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];r[f]||(r[f]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(r[f][v]=m)}),r[f][l]=m}),r}}]),c}(),d3=[],h1={},H1={},x6=Object.keys(H1);function b6(c,a){var r=a.mixoutsTo;return d3=c,h1={},Object.keys(H1).forEach(function(e){x6.indexOf(e)===-1&&delete H1[e]}),d3.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),Y1(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=i[n][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){h1[n]||(h1[n]=[]),h1[n].push(s[n])})}e.provides&&e.provides(H1)}),r}function V2(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=h1[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function m1(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=h1[c]||[];i.forEach(function(s){s.apply(null,r)})}function j(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return H1[c]?H1[c].apply(null,a):void 0}function M2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||c1();if(a)return a=o1(r,a)||a,M3(e4.definitions,r,a)||M3(R.styles,r,a)}var e4=new g6,N6=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,m1("noAuto")},S6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(m1("beforeI2svg",a),j("pseudoElements2svg",a),j("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,z6(function(){w6({autoReplaceSvgRoot:r}),m1("watch",a)})}},k6={icon:function(a){if(a===null)return null;if(Y1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:o1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Q1(a[0]);return{prefix:e,iconName:o1(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(X4))){var i=J1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||c1(),iconName:o1(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=c1();return{prefix:s,iconName:o1(s,a)||a}}}},T={noAuto:N6,config:z,dom:S6,parse:k6,library:e4,findIconDefinition:M2,toHtml:k1},w6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?g:r;(Object.keys(R.styles).length>0||z.autoFetchSvg)&&Z&&z.autoReplaceSvg&&T.dom.i2svg({node:e})};function c2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return k1(e)})}}),Object.defineProperty(c,"node",{get:function(){if(Z){var e=g.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function y6(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(w2(n)&&r.found&&!e.found){var f=r.width,l=r.height,m={x:f/l/2,y:.5};i.style=K1(t(t({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function A6(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},i),{},{id:n}),children:e}]}]}function T2(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,v=c.extra,M=c.watchable,u=M===void 0?!1:M,w=e.found?e:r,F=w.width,B=w.height,q=i==="fak",k=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(_){return v.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(v.classes).join(" "),y={children:[],attributes:t(t({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(B)})},E=q&&!~v.classes.indexOf("fa-fw")?{width:"".concat(F/B*16*.0625,"em")}:{};u&&(y.attributes[t1]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(o||b1())},children:[l]}),delete y.attributes.title);var P=t(t({},y),{},{prefix:i,iconName:s,main:r,mask:e,maskId:m,transform:n,symbol:f,styles:t(t({},E),v.styles)}),i1=e.found&&r.found?j("generateAbstractMask",P)||{children:[],attributes:{}}:j("generateAbstractIcon",P)||{children:[],attributes:{}},r1=i1.children,n2=i1.attributes;return P.children=r1,P.attributes=n2,f?A6(P):y6(P)}function L3(c){var a=c.content,r=c.width,e=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(m[t1]="");var o=t({},n.styles);w2(i)&&(o.transform=l6({transform:i,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var v=K1(o);v.length>0&&(m.style=v);var M=[];return M.push({tag:"span",attributes:m,children:[a]}),s&&M.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),M}function P6(c){var a=c.content,r=c.title,e=c.extra,i=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=K1(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var t2=R.styles;function C2(c){var a=c[0],r=c[1],e=c.slice(4),i=g2(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(l1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(l1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(l1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:r,icon:n}}var T6={found:!1,width:512,height:512};function F6(c,a){!I3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function u2(c,a){var r=a;return a==="fa"&&z.styleDefault!==null&&(a=c1()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:j("missingIconAbstract")||{}};if(r==="fa"){var n=a4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&t2[a]&&t2[a][c]){var f=t2[a][c];return e(C2(f))}F6(c,a),e(t(t({},T6),{},{icon:z.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var g3=function(){},d2=z.measurePerformance&&R1&&R1.mark&&R1.measure?R1:{mark:g3,measure:g3},M1='FA "6.5.2"',B6=function(a){return d2.mark("".concat(M1," ").concat(a," begins")),function(){return i4(a)}},i4=function(a){d2.mark("".concat(M1," ").concat(a," ends")),d2.measure("".concat(M1," ").concat(a),"".concat(M1," ").concat(a," begins"),"".concat(M1," ").concat(a," ends"))},F2={begin:B6,end:i4},Z1=function(){};function x3(c){var a=c.getAttribute?c.getAttribute(t1):null;return typeof a=="string"}function D6(c){var a=c.getAttribute?c.getAttribute(b2):null,r=c.getAttribute?c.getAttribute(N2):null;return a&&r}function R6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function q6(){if(z.autoReplaceSvg===!0)return _1.replace;var c=_1[z.autoReplaceSvg];return c||_1.replace}function E6(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function O6(c){return g.createElement(c)}function r4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?E6:O6:r;if(typeof c=="string")return g.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(r4(n,{ceFn:e}))}),i}function U6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var _1={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(r4(i),r)}),r.getAttribute(t1)===null&&z.keepOriginalSource){var e=g.createComment(U6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~k2(r).indexOf(z.replacementClass))return _1.replace(a);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===z.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(f){return k1(f)}).join(`
`);r.setAttribute(t1,""),r.innerHTML=n}};function b3(c){c()}function s4(c,a){var r=typeof a=="function"?a:Z1;if(c.length===0)r();else{var e=b3;z.mutateApproach===Z4&&(e=J.requestAnimationFrame||b3),e(function(){var i=q6(),s=F2.begin("mutate");c.map(i),s(),r()})}}var B2=!1;function n4(){B2=!0}function L2(){B2=!1}var $1=null;function N3(c){if(h3&&z.observeMutations){var a=c.treeCallback,r=a===void 0?Z1:a,e=c.nodeCallback,i=e===void 0?Z1:e,s=c.pseudoElementsCallback,n=s===void 0?Z1:s,f=c.observeMutationsRoot,l=f===void 0?g:f;$1=new h3(function(m){if(!B2){var o=c1();V1(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!x3(v.addedNodes[0])&&(z.searchPseudoElements&&n(v.target),r(v.target)),v.type==="attributes"&&v.target.parentNode&&z.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&x3(v.target)&&~J4.indexOf(v.attributeName))if(v.attributeName==="class"&&D6(v.target)){var M=J1(k2(v.target)),u=M.prefix,w=M.iconName;v.target.setAttribute(b2,u||o),w&&v.target.setAttribute(N2,w)}else R6(v.target)&&i(v.target)})}}),Z&&$1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function I6(){$1&&$1.disconnect()}function W6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function G6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=J1(k2(c));return i.prefix||(i.prefix=c1()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=d6(i.prefix,c.innerText)||A2(i.prefix,H2(c.innerText))),!i.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function j6(c){var a=V1(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return z.autoA11y&&(r?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||b1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Z6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=G6(c),e=r.iconName,i=r.prefix,s=r.rest,n=j6(c),f=V2("parseNodeAttributes",{},c),l=a.styleParser?W6(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var _6=R.styles;function f4(c){var a=z.autoReplaceSvg==="nest"?S3(c,{styleParser:!1}):S3(c);return~a.extra.classes.indexOf(W3)?j("generateLayersText",c,a):j("generateSvgReplacementMutation",c,a)}var a1=new Set;S2.map(function(c){a1.add("fa-".concat(c))});Object.keys(d1[L]).map(a1.add.bind(a1));Object.keys(d1[x]).map(a1.add.bind(a1));a1=N1(a1);function k3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var r=g.documentElement.classList,e=function(v){return r.add("".concat(H3,"-").concat(v))},i=function(v){return r.remove("".concat(H3,"-").concat(v))},s=z.autoFetchSvg?a1:S2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(_6));s.includes("fa")||s.push("fa");var n=[".".concat(W3,":not([").concat(t1,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(t1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=V1(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),i("complete");else return Promise.resolve();var l=F2.begin("onTree"),m=f.reduce(function(o,v){try{var M=f4(v);M&&o.push(M)}catch(u){I3||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,v){Promise.all(m).then(function(M){s4(M,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(M){l(),v(M)})})}function Y6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f4(c).then(function(r){r&&s4([r],a)})}function X6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:M2(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:M2(i||{})),c(e,t(t({},r),{},{mask:i}))}}var $6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?O:e,s=r.symbol,n=s===void 0?!1:s,f=r.mask,l=f===void 0?null:f,m=r.maskId,o=m===void 0?null:m,v=r.title,M=v===void 0?null:v,u=r.titleId,w=u===void 0?null:u,F=r.classes,B=F===void 0?[]:F,q=r.attributes,k=q===void 0?{}:q,y=r.styles,E=y===void 0?{}:y;if(a){var P=a.prefix,i1=a.iconName,r1=a.icon;return c2(t({type:"icon"},a),function(){return m1("beforeDOMElementCreation",{iconDefinition:a,params:r}),z.autoA11y&&(M?k["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(w||b1()):(k["aria-hidden"]="true",k.focusable="false")),T2({icons:{main:C2(r1),mask:l?C2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:i1,transform:t(t({},O),i),symbol:n,title:M,maskId:o,titleId:w,extra:{attributes:k,styles:E,classes:B}})})}},K6={mixout:function(){return{icon:X6($6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=k3,r.nodeCallback=Y6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?g:e,s=r.callback,n=s===void 0?function(){}:s;return k3(i,n)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,f=e.prefix,l=e.transform,m=e.symbol,o=e.mask,v=e.maskId,M=e.extra;return new Promise(function(u,w){Promise.all([u2(i,f),o.iconName?u2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var B=g2(F,2),q=B[0],k=B[1];u([r,T2({icons:{main:q,mask:k},prefix:f,iconName:i,transform:l,symbol:m,maskId:v,title:s,titleId:n,extra:M,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,f=r.styles,l=K1(f);l.length>0&&(i.style=l);var m;return w2(n)&&(m=j("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:i}}}},Q6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return c2({type:"layer"},function(){m1("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(N1(s)).join(" ")},children:n}]})}}}},J6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,f=n===void 0?[]:n,l=e.attributes,m=l===void 0?{}:l,o=e.styles,v=o===void 0?{}:o;return c2({type:"counter",content:r},function(){return m1("beforeDOMElementCreation",{content:r,params:e}),P6({content:r.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(N1(f))}})})}}}},c8={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?O:i,n=e.title,f=n===void 0?null:n,l=e.classes,m=l===void 0?[]:l,o=e.attributes,v=o===void 0?{}:o,M=e.styles,u=M===void 0?{}:M;return c2({type:"text",content:r},function(){return m1("beforeDOMElementCreation",{content:r,params:e}),L3({content:r,transform:t(t({},O),s),title:f,extra:{attributes:v,styles:u,classes:["".concat(z.cssPrefix,"-layers-text")].concat(N1(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,f=null,l=null;if(E3){var m=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();f=o.width/m,l=o.height/m}return z.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,L3({content:r.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},a8=new RegExp('"',"ug"),w3=[1105920,1112319];function e8(c){var a=c.replace(a8,""),r=H6(a,0),e=r>=w3[0]&&r<=w3[1],i=a.length===2?a[0]===a[1]:!1;return{value:H2(i?a[0]:a),isSecondary:e||i}}function y3(c,a){var r="".concat(j4).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var s=V1(c.children),n=s.filter(function(r1){return r1.getAttribute(h2)===a})[0],f=J.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match($4),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var v=f.getPropertyValue("content"),M=~["Sharp"].indexOf(l[2])?x:L,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?L1[M][l[2].toLowerCase()]:K4[M][m],w=e8(v),F=w.value,B=w.isSecondary,q=l[0].startsWith("FontAwesome"),k=A2(u,F),y=k;if(q){var E=L6(F);E.iconName&&E.prefix&&(k=E.iconName,u=E.prefix)}if(k&&!B&&(!n||n.getAttribute(b2)!==u||n.getAttribute(N2)!==y)){c.setAttribute(r,y),n&&c.removeChild(n);var P=Z6(),i1=P.extra;i1.attributes[h2]=a,u2(k,u).then(function(r1){var n2=T2(t(t({},P),{},{icons:{main:r1,mask:P2()},prefix:u,iconName:y,extra:i1,watchable:!0})),_=g.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(_,c.firstChild):c.appendChild(_),_.outerHTML=n2.map(function(B4){return k1(B4)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function i8(c){return Promise.all([y3(c,"::before"),y3(c,"::after")])}function r8(c){return c.parentNode!==document.head&&!~_4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(h2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function A3(c){if(Z)return new Promise(function(a,r){var e=V1(c.querySelectorAll("*")).filter(r8).map(i8),i=F2.begin("searchPseudoElements");n4(),Promise.all(e).then(function(){i(),L2(),a()}).catch(function(){i(),L2(),r()})})}var s8={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=A3,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?g:e;z.searchPseudoElements&&A3(i)}}},P3=!1,n8={mixout:function(){return{dom:{unwatch:function(){n4(),P3=!0}}}},hooks:function(){return{bootstrap:function(){N3(V2("mutationObserverCallbacks",{}))},noAuto:function(){I6()},watch:function(r){var e=r.observeMutationsRoot;P3?L2():N3(V2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},T3=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],f=s.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},r)},f8={mixout:function(){return{parse:{transform:function(r){return T3(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=T3(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(l," ").concat(m," ").concat(o)},M={transform:"translate(".concat(n/2*-1," -256)")},u={outer:f,inner:v,path:M};return{tag:"g",attributes:t({},u.outer),children:[{tag:"g",attributes:t({},u.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),u.path)}]}]}}}},m2={x:0,y:0,width:"100%",height:"100%"};function F3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function l8(c){return c.tag==="g"?c.children:[c]}var o8={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?J1(i.split(" ").map(function(n){return n.trim()})):P2();return s.prefix||(s.prefix=c1()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,f=r.maskId,l=r.transform,m=s.width,o=s.icon,v=n.width,M=n.icon,u=f6({transform:l,containerWidth:v,iconWidth:m}),w={tag:"rect",attributes:t(t({},m2),{},{fill:"white"})},F=o.children?{children:o.children.map(F3)}:{},B={tag:"g",attributes:t({},u.inner),children:[F3(t({tag:o.tag,attributes:t(t({},o.attributes),u.path)},F))]},q={tag:"g",attributes:t({},u.outer),children:[B]},k="mask-".concat(f||b1()),y="clip-".concat(f||b1()),E={tag:"mask",attributes:t(t({},m2),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,q]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:l8(M)},E]};return e.push(P,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(k,")")},m2)}),{children:e,attributes:i}}}},t8={provides:function(a){var r=!1;J.matchMedia&&(r=J.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||f.children.push({tag:"animate",attributes:t(t({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:t(t({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},m8={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},z8=[t6,K6,Q6,J6,c8,s8,n8,f8,o8,t8,m8];b6(z8,{mixoutsTo:T});var J8=T.noAuto,l4=T.config,c0=T.library,o4=T.dom,t4=T.parse,a0=T.findIconDefinition,e0=T.toHtml,m4=T.icon,i0=T.layer,v8=T.text,h8=T.counter;var H8=["*"],p8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},V8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},M8=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},D2=new WeakSet,z4="fa-auto-css";function C8(c,a){if(!a.autoAddCss||D2.has(c))return;if(c.getElementById(z4)!=null){a.autoAddCss=!1,D2.add(c);return}let r=c.createElement("style");r.setAttribute("type","text/css"),r.setAttribute("id",z4),r.innerHTML=o4.css();let e=c.head.childNodes,i=null;for(let s=e.length-1;s>-1;s--){let n=e[s],f=n.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(i=n)}c.head.insertBefore(r,i),a.autoAddCss=!1,D2.add(c)}var u8=c=>c.prefix!==void 0&&c.iconName!==void 0,d8=(c,a)=>u8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},L8=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){l4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),w1=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),g8=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=O2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[A1]});let c=a;return c})(),x8=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(S(Z2),S(W2))},a.\u0275cmp=b({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[A1,f1],ngContentSelectors:H8,decls:1,vars:0,template:function(i,s){i&1&&(J2(),c3(0))},encapsulation:2});let c=a;return c})(),e1=(()=>{let a=class a{constructor(e,i,s,n,f){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.document=E2(r3),f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){V8();return}if(e){let i=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(i!=null){let s=this.buildParams();C8(this.document,this.config);let n=m4(i,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=d8(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(p8(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?t4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:M8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};a.\u0275fac=function(i){return new(i||a)(S(f3),S(L8),S(w1),S(g8,8),S(x8,8))},a.\u0275cmp=b({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(Q2("innerHTML",s.renderedIconHTML,G2),_2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[A1,f1],decls:0,vars:0,template:function(i,s){},encapsulation:2});let c=a;return c})();var v4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=X({type:a}),a.\u0275inj=Y({});let c=a;return c})();function b8(c,a){if(c&1){let r=K2();h(0,"button",1),I("click",function(){U2(r);let i=n1();return I2(i.scrollToTop())}),V(1,` \u2191
`),H()}}var e2=(()=>{let a=class a{constructor(){this.isVisible=!1}onWindowScroll(){this.isVisible=window.scrollY>100}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-scroll-to-top"]],hostBindings:function(i,s){i&1&&I("scroll",function(){return s.onWindowScroll()},!1,j2)},standalone:!0,features:[f1],decls:1,vars:1,consts:[["class","scroll-to-top px-2 fixed text-white bg-black rounded-md cursor-pointer border-slate-400 border-2",3,"click",4,"ngIf"],[1,"scroll-to-top","px-2","fixed","text-white","bg-black","rounded-md","cursor-pointer","border-slate-400","border-2",3,"click"]],template:function(i,s){i&1&&s1(0,b8,2,0,"button",0),i&2&&C("ngIf",s.isVisible)},dependencies:[K,z1],styles:[".scroll-to-top[_ngcontent-%COMP%]{bottom:30px;right:20px;z-index:1000}"]});let c=a;return c})();var h4={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var S8={prefix:"fas",iconName:"cloud-arrow-down",icon:[640,512,[62337,"cloud-download","cloud-download-alt"],"f0ed","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"]},H4=S8;var p4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var V4={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};var M4={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]};var k8={prefix:"fas",iconName:"building-columns",icon:[512,512,["bank","institution","museum","university"],"f19c","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};var C4=k8;var w8=(c,a)=>({hidden:c,flex:a}),y8=()=>["/"],d4=(()=>{let a=class a{constructor(){this.showMenu=!1,this.faBars=h4}toggleNavbar(){this.showMenu=!this.showMenu}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-header"]],decls:20,vars:7,consts:[[1,"relative","flex","flex-wrap","items-center","justify-between","px-2","py-3","bg-gray-800"],[1,"container","px-4","mx-auto","flex","flex-wrap","items-center","justify-between"],[1,"w-full","relative","flex","justify-between","lg:w-auto","px-4","lg:static","lg:block","lg:justify-start"],["routerLink","/",1,"text-sm","font-bold","leading-relaxed","inline-block","mr-4","py-2","whitespace-nowrap","uppercase","text-white"],["type","button",1,"text-white","cursor-pointer","text-xl","leading-none","px-3","py-1","border","border-solid","border-transparent","rounded","bg-transparent","block","lg:hidden","outline-none","focus:outline-none",3,"click"],[3,"icon"],[1,"lg:flex","lg:flex-grow","items-center",3,"ngClass"],[1,"flex","flex-col","lg:flex-row","list-none","ml-auto"],[1,"nav-item"],[1,"px-3","py-2","flex","items-center","text-xs","uppercase","font-bold","leading-snug","text-white","hover:opacity-75",3,"routerLink"],[1,"fab","fa-facebook-square","text-lg","leading-lg","text-white","opacity-75"],[1,"ml-2"],["routerLink","/projects",1,"px-3","py-2","flex","items-center","text-xs","uppercase","font-bold","leading-snug","text-white","hover:opacity-75"],[1,"fab","fa-twitter","text-lg","leading-lg","text-white","opacity-75"]],template:function(i,s){i&1&&(h(0,"header")(1,"nav",0)(2,"div",1)(3,"div",2)(4,"a",3),V(5," Ranjith Kathirvel "),H(),h(6,"button",4),I("click",function(){return s.toggleNavbar()}),d(7,"fa-icon",5),H()(),h(8,"div",6)(9,"ul",7)(10,"li",8)(11,"a",9),d(12,"i",10),h(13,"span",11),V(14,"Home"),H()()(),h(15,"li",8)(16,"a",12),d(17,"i",13),h(18,"span",11),V(19,"Projects"),H()()()()()()()()),i&2&&(p(7),C("icon",s.faBars),p(),C("ngClass",i3(3,w8,!s.showMenu,s.showMenu)),p(3),C("routerLink",D(6,y8)))},dependencies:[s3,e1,D1]});let c=a;return c})();var L4={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var g4={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var P8=()=>["/"],T8=()=>["fas","envelope"],F8=()=>["fab","github"],B8=()=>["fas","link"],D8=()=>["fab","linkedin"],x4=(()=>{let a=class a{constructor(e){e.addIcons(g4,L4,V4,p4)}};a.\u0275fac=function(i){return new(i||a)(S(w1))},a.\u0275cmp=b({type:a,selectors:[["app-footer"]],decls:26,vars:10,consts:[[1,"relative","flex","flex-wrap","items-center","justify-between","px-2","py-3","bg-gray-800"],[1,"container","px-4","mx-auto","flex","flex-wrap","items-center","lg:justify-between","justify-center"],[1,"relative","flex","lg:justify-between","w-auto","px-4","justify-center"],[1,"text-sm","font-bold","leading-relaxed","inline-block","mr-4","py-2","whitespace-nowrap","text-white",3,"routerLink"],[1,"flex","flex-wrap","items-center"],[1,"flex","list-none","ml-auto"],[1,"nav-item"],[1,"px-3","py-2","flex","items-center","text-xs","font-bold","leading-snug","text-white"],["href","mailto:ranjithkathir97@gmail.com",1,"px-3","py-2","flex","items-center","text-xs","font-bold","leading-snug","text-white","hover:opacity-75"],[1,"fab","fa-facebook-square","text-lg","leading-lg","text-white","opacity-75"],[3,"icon"],["target","_blank","href","https://github.com/Ranjithkathir",1,"px-3","py-2","flex","items-center","text-xs","font-bold","leading-snug","text-white","hover:opacity-75"],["target","_blank","href","https://ranjithkathir.github.io",1,"px-3","py-2","flex","items-center","text-xs","font-bold","leading-snug","text-white","hover:opacity-75"],["target","_blank","href","https://linkedin.com/in/ranjithkathirvel",1,"px-3","py-2","flex","items-center","text-xs","font-bold","leading-snug","text-white","hover:opacity-75"]],template:function(i,s){i&1&&(h(0,"footer",0)(1,"div",1)(2,"div",2)(3,"small",3),V(4," \xA9 2024 Ranjith Kathirvel. All rights reserved. "),H()(),h(5,"div",4)(6,"ul",5)(7,"li",6)(8,"h4",7),V(9,"Follow me on:"),H()(),h(10,"li",6)(11,"a",8),d(12,"i",9)(13,"fa-icon",10),H()(),h(14,"li",6)(15,"a",11),d(16,"i",9)(17,"fa-icon",10),H()(),h(18,"li",6)(19,"a",12),d(20,"i",9)(21,"fa-icon",10),H()(),h(22,"li",6)(23,"a",13),d(24,"i",9)(25,"fa-icon",10),H()()()()()()),i&2&&(p(3),C("routerLink",D(5,P8)),p(10),C("icon",D(6,T8)),p(4),C("icon",D(7,F8)),p(4),C("icon",D(8,B8)),p(4),C("icon",D(9,D8)))},dependencies:[e1,D1]});let c=a;return c})();var b4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-layout"]],decls:5,vars:0,consts:[[1,"relative"],[1,"sm:hidden"]],template:function(i,s){i&1&&(d(0,"app-header"),h(1,"section",0),d(2,"router-outlet"),H(),d(3,"app-scroll-to-top",1)(4,"app-footer"))},dependencies:[l3,e2,d4,x4]});let c=a;return c})();var q8=()=>["fas","university"],E8=()=>["fas","calendar"],N4=(()=>{let a=class a{constructor(e){e.addIcons(M4,C4)}};a.\u0275fac=function(i){return new(i||a)(S(w1))},a.\u0275cmp=b({type:a,selectors:[["app-education"]],decls:23,vars:4,consts:[["id","education",1,"row"],[1,"mt-12","w-full","container","mx-auto","mb-3","px-4"],[1,"text-center","mt-3","mb-6","font-bold","italic","text-3xl","hover:underline","cursor-pointer"],[1,"row","container","w-full","mx-auto","px-4"],[1,"flex","w-full","resume-items","items-center","justify-center"],[1,"lg:w-1/5","w-full"],[1,"lg:w-1/2","w-full","resume-item"],[1,"lg:w-1/5","w-full","resume-place"],[3,"icon"]],template:function(i,s){i&1&&(h(0,"section",0)(1,"div",1)(2,"h3",2),V(3,"Education"),H()(),h(4,"div",3)(5,"div",4)(6,"div",5)(7,"h3"),V(8,"Education"),H()(),h(9,"div",6)(10,"b"),V(11,"Bachelor of Technology - Information Technology"),H(),h(12,"p"),V(13,"Hindusthan College Of Engineering and Technology"),H(),h(14,"p"),V(15,"CGPA: 7.3"),H()(),h(16,"div",7)(17,"h4"),d(18,"fa-icon",8),V(19," Anna University"),H(),h(20,"i"),d(21,"fa-icon",8),H(),V(22," 2014 - 2018 "),H()()()()),i&2&&(p(18),C("icon",D(2,q8)),p(3),C("icon",D(3,E8)))},dependencies:[e1],styles:[".resume-place[_ngcontent-%COMP%]{margin-bottom:20px}.resume-place[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .resume-place[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#000;font-size:14px;margin-right:5px}"]});let c=a;return c})();var i2={name:"dev",version:"1.0.0",baseUrl:"assets/mock"};var S4=(()=>{let a=class a{constructor(e){this.http=e}getSkills(){let e=new F1({"Content-Type":"application/json"});return this.http.get(`${i2.baseUrl}/skill.json`,{headers:e})}};a.\u0275fac=function(i){return new(i||a)(y1(B1))},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var r2=(()=>{let a=class a{constructor(){this.isLoading=new q2,this.isLoading$=this.isLoading.asObservable()}show(){this.isLoading.next(!0)}hide(){this.isLoading.next(!1)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();function W8(c,a){if(c&1&&(h(0,"div",4)(1,"div",5),V(2),H(),h(3,"div",6)(4,"div",7),V(5),H()()()),c&2){let r=n1().$implicit;p(2),$(r.name),p(2),Y2("width",r.rating,"%"),p(),P1("",r.rating,"%")}}function G8(c,a){if(c&1&&(X2(0),s1(1,W8,6,4,"div",3),$2()),c&2){let r=a.$implicit,e=n1();p(),C("ngIf",r.category===e.category)}}var w4=(()=>{let a=class a{constructor(){this.skills=[],this.category=""}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-skill-lists"]],inputs:{skills:"skills",category:"category"},decls:4,vars:2,consts:[[1,"skill-title"],[1,"skills"],[4,"ngFor","ngForOf"],["class","skill",4,"ngIf"],[1,"skill"],[1,"skill-name"],[1,"progress"],[1,"progress-bar"]],template:function(i,s){i&1&&(h(0,"h4",0),V(1),H(),h(2,"div",1),s1(3,G8,2,1,"ng-container",2),H()),i&2&&(p(),$(s.category),p(2),C("ngForOf",s.skills))},dependencies:[T1,z1],styles:[".skill-bar[_ngcontent-%COMP%]{background:#c4c4c4;display:table;height:4px;width:100%;margin:10px -2px 20px}.skill-bar[_ngcontent-%COMP%]   .skill-rate-on[_ngcontent-%COMP%]{background:#353535}.skill-bar[_ngcontent-%COMP%]   .skill-rate-on[_ngcontent-%COMP%], .skill-bar[_ngcontent-%COMP%]   .skill-rate-off[_ngcontent-%COMP%]{display:table-cell;border-left:2px solid #fff;border-right:2px solid #fff}.progress[_ngcontent-%COMP%]{background:#e5e5e5;margin-top:10px;margin-bottom:20px}.progress-bar[_ngcontent-%COMP%]{background-color:#00b5cb;color:#fff;text-align:center;line-height:10px}.skills[_ngcontent-%COMP%]{margin:20px auto;max-width:400px;padding:10px 20px}.skill[_ngcontent-%COMP%]{margin-bottom:10px}.skill-name[_ngcontent-%COMP%]{font-weight:700}.skill[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background-color:#cbcfcf;height:10px;border-radius:5px;overflow:hidden}.skill-title[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:center}"]});let c=a;return c})();var y4=(()=>{let a=class a{constructor(e,i){this.skillService=e,this.loaderService=i,this.skills=[],this.loaderService.isLoading$.subscribe(s=>this.isLoading=s)}ngOnInit(){this.getSkills()}getSkills(){this.loaderService.show(),this.skillService.getSkills().subscribe({next:e=>{this.skills=e,this.loaderService.hide()},error:e=>{console.log(e),this.loaderService.hide()},complete:()=>{}})}};a.\u0275fac=function(i){return new(i||a)(S(S4),S(r2))},a.\u0275cmp=b({type:a,selectors:[["app-skills"]],decls:15,vars:6,consts:[["id","skills",1,"row","w-full","container","mx-auto","mb-3","px-4"],[1,"mt-12"],[1,"text-center","mt-3","mb-6","font-bold","italic","text-3xl","hover:underline","cursor-pointer"],[1,"row","flex","flex-wrap"],[1,"lg:w-1/4","md:w-1/2","w-full"],["category","Programming Languages",3,"skills"],["category","Others",3,"skills"],["category","Frontend",3,"skills"],["category","Backend",3,"skills"],["category","Cloud / Deployment",3,"skills"],["category","Testing Framework/Libraries",3,"skills"]],template:function(i,s){i&1&&(h(0,"section",0)(1,"div",1)(2,"h3",2),V(3,"Skills"),H()(),h(4,"div",3)(5,"div",4),d(6,"app-skill-lists",5)(7,"app-skill-lists",6),H(),h(8,"div",4),d(9,"app-skill-lists",7),H(),h(10,"div",4),d(11,"app-skill-lists",8),H(),h(12,"div",4),d(13,"app-skill-lists",9)(14,"app-skill-lists",10),H()()()),i&2&&(p(6),C("skills",s.skills),p(),C("skills",s.skills),p(2),C("skills",s.skills),p(2),C("skills",s.skills),p(2),C("skills",s.skills),p(),C("skills",s.skills))},dependencies:[w4]});let c=a;return c})();var A4=(()=>{let a=class a{constructor(){this.faDownload=H4}download(){let e=document.createElement("a");e.setAttribute("target","_blank"),e.setAttribute("href","https://drive.google.com/uc?export=download&id=1bk8RUyFRwSWDbZSdtW26morii8Day-xl"),e.setAttribute("download","ranjith-cv.pdf"),document.body.appendChild(e),e.click(),e.remove()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=b({type:a,selectors:[["app-main"]],decls:24,vars:1,consts:[["id","intro",1,"py-40"],[1,"row","w-full","container","mx-auto","mb-3","px-4","flex","flex-wrap"],[1,"lg:w-1/2","md:w-1/2","w-full"],[1,"hello"],[1,"items-center","flex","justify-center"],["id","intro-image","src","/assets/images/photo.png","alt","profile",1,"w-48","rounded-full"],[1,"text-[36px]"],[1,"rotate"],[1,"my-6"],[1,"bg-turqoise-blue","border-turqoise-blue","rounded-full","cursor-pointer","text-white","p-3","decoration-none","hover:text-white","hover:bg-inherit","hover:border-2",3,"click"],[3,"icon"],["id","about-me"],[1,"text-justify","indent-8","pb-4"],[1,"text-justify","indent-8"]],template:function(i,s){i&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),d(5,"img",5),H(),h(6,"h1",6),V(7,"Hey there, I'm Ranjith Kathirvel"),H(),h(8,"h3")(9,"span",7),V(10,"Senior Software Engineer | Full Stack Developer"),H()(),h(11,"h4",8)(12,"button",9),I("click",function(){return s.download()}),h(13,"i"),d(14,"fa-icon",10),H(),V(15," Download CV"),H()()()(),h(16,"div",2)(17,"div",11)(18,"p",12),V(19," With over six years of expertise in designing and developing cutting-edge web applications, I possess a unique blend of frontend and backend proficiency, consistently delivering high-caliber solutions that surpass expectations and meet the most stringent standards. "),H(),h(20,"p",13),V(21," As a seasoned leader, I have established a reputation for excellence in team management, leveraging my expertise to empower team members through targeted guidance, mentorship, and collaborative growth strategies that promote individual and collective success. "),H()()()()(),d(22,"app-education")(23,"app-skills")),i&2&&(p(14),C("icon",s.faDownload))},dependencies:[e1,N4,y4],styles:["#intro[_ngcontent-%COMP%]{font-weight:500;text-align:center;color:#fff;background:linear-gradient(310deg,#000,#747272)}#about-me[_ngcontent-%COMP%]{background-color:#fff;color:#555;padding:40px;border-radius:10px;font-size:20px;box-shadow:1px 1px 1px #2c2c2c66}.ai-resume-link[_ngcontent-%COMP%]:hover{color:#fff;background-color:transparent;text-decoration:none}"]});let c=a;return c})();var s2=(()=>{let a=class a{constructor(e){this.http=e}getProjects(){let e=new F1({"Content-Type":"application/json"});return this.http.get(`${i2.baseUrl}/project.json`,{headers:e})}};a.\u0275fac=function(i){return new(i||a)(y1(B1))},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var P4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=X({type:a}),a.\u0275inj=Y({imports:[K]});let c=a;return c})();var Y8=c=>({"background-image":c});function X8(c,a){if(c&1&&(h(0,"div",7)(1,"div",8)(2,"h1",9),V(3),H()(),h(4,"div",10)(5,"h5",11),V(6),H(),h(7,"p",12),V(8),H(),h(9,"p")(10,"strong"),V(11,"Technologies:"),H(),V(12),H()()()),c&2){let r=a.$implicit;p(),C("ngStyle",e3(5,Y8,"url("+r.image+")")),p(2),$(r.title),p(3),$(r.title),p(2),$(r.description),p(4),P1(" ",r.technologies.join(", "),"")}}function $8(c,a){if(c&1&&(h(0,"div",13),V(1),H()),c&2){let r=n1();p(),$(r.errorMessage)}}var T4=(()=>{let a=class a{constructor(e,i){this.projectService=e,this.loaderService=i,this.projects=[],this.filteredProjects=[],this.technologies=new Set,this.errorMessage="",this.loaderService.isLoading$.subscribe(s=>this.isLoading=s)}ngOnInit(){this.getProjects()}getProjects(){this.loaderService.show(),this.projectService.getProjects().subscribe({next:e=>{this.projects=e,this.loaderService.hide()},error:e=>{console.log(e),this.loaderService.hide()},complete:()=>{}})}searchProjects(e){let s=e.target?.value;s.length>2?this.projects=this.projects.filter(n=>n.technologies.some(f=>f.toLowerCase().includes(s.toLowerCase()))):s===""||s.length===0?this.ngOnInit():this.ngOnInit()}};a.\u0275fac=function(i){return new(i||a)(S(s2),S(r2))},a.\u0275cmp=b({type:a,selectors:[["app-projects"]],standalone:!0,features:[a3([s2]),f1],decls:8,vars:2,consts:[["id","projects",1,"p-4"],[1,"text-center","mt-3","mb-6","font-bold","italic","text-3xl","hover:underline","cursor-pointer"],["id","search",1,"row","container","my-4","mx-auto","relative","text-gray-600"],["type","search","name","search","placeholder","Search by technology...","autocomplete","off",1,"border-2","border-gray-300","bg-white","h-10","px-5","rounded-lg","text-sm","focus:outline-none",3,"keyup","search"],[1,"row","container","mx-auto","grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-10","my-8"],["class","flip",4,"ngFor","ngForOf"],["class","text-red-500",4,"ngIf"],[1,"flip"],[1,"front",3,"ngStyle"],[1,"flex","items-center","justify-center","h-auto","font-bold","text-2xl"],[1,"back"],[1,"mb-2","text-lg","font-bold","tracking-tight","text-white-900","dark:text-white"],[1,"mb-3","font-normal","text-gray-700","dark:text-gray-400"],[1,"text-red-500"]],template:function(i,s){i&1&&(h(0,"div",0)(1,"h3",1),V(2,"Projects"),H(),h(3,"section",2)(4,"input",3),I("keyup",function(f){return s.searchProjects(f)})("search",function(f){return s.searchProjects(f)}),H()(),h(5,"div",4),s1(6,X8,13,7,"div",5)(7,$8,2,1,"div",6),H()()),i&2&&(p(6),C("ngForOf",s.projects),p(),C("ngIf",s.errorMessage))},dependencies:[K,T1,z1,n3,P4],styles:[".flip[_ngcontent-%COMP%]{position:relative}.flip[_ngcontent-%COMP%] > .front[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%] > .back[_ngcontent-%COMP%]{display:block;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-duration:.5s;transition-property:transform,opacity}.flip[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{height:-webkit-fill-available}.flip[_ngcontent-%COMP%] > .front[_ngcontent-%COMP%]{transform:rotateY(0)}.flip[_ngcontent-%COMP%] > .back[_ngcontent-%COMP%]{position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;transform:rotateY(-180deg)}.flip[_ngcontent-%COMP%]:hover > .front[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flip[_ngcontent-%COMP%]:hover > .back[_ngcontent-%COMP%]{opacity:1;transform:rotateY(0)}.flip.flip-vertical[_ngcontent-%COMP%] > .back[_ngcontent-%COMP%]{transform:rotateX(-180deg)}.flip.flip-vertical[_ngcontent-%COMP%]:hover > .front[_ngcontent-%COMP%]{transform:rotateX(180deg)}.flip.flip-vertical[_ngcontent-%COMP%]:hover > .back[_ngcontent-%COMP%]{transform:rotateX(0)}.flip[_ngcontent-%COMP%]{position:relative;display:inline-block;box-shadow:#00000059 0 5px 15px}.flip[_ngcontent-%COMP%] > .front[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%] > .back[_ngcontent-%COMP%]{display:block;color:#000;width:inherit;background-size:100% 100%!important;background-position:center!important;height:350px;padding:1em 2em;background:#dad5d5;border-radius:3px}.flip[_ngcontent-%COMP%] > .front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%] > .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9125rem;line-height:160%;color:#5e5c5c}"]});let c=a;return c})();var K8=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:b4,children:[{path:"",component:A4},{path:"projects",component:T4}]}],F4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=X({type:a}),a.\u0275inj=Y({imports:[f2.forChild(K8),f2]});let c=a;return c})();var t5=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=X({type:a}),a.\u0275inj=Y({imports:[K,v4,F4,e2]});let c=a;return c})();export{t5 as PortfolioModule};
