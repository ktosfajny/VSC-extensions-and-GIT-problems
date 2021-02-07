(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var e=document,g=window;function h(b,a,c){b.addEventListener&&b.addEventListener(a,c,!1)};function k(b,a,c){if(Array.isArray(a))for(var d=0;d<a.length;d++)k(b,String(a[d]),c);else null!=a&&c.push(b+(""===a?"":"="+encodeURIComponent(String(a))))};function l(b,a=null){m(b,a)}function m(b,a){g.google_image_requests||(g.google_image_requests=[]);const c=g.document.createElement("img");if(a){const d=f=>{a&&a(f);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};h(c,"load",d);h(c,"error",d)}c.src=b;g.google_image_requests.push(c)};function n(b){h(e,b.f,()=>{if(e[b.a])b.b&&(b.b=!1,b.c=Date.now(),p(b,0));else{if(-1!=b.c){const a=Date.now()-b.c;0<a&&(b.c=-1,p(b,1,a))}p(b,3)}})}function q(b){h(g,"click",a=>b.handleClick(a))}function p(b,a,c){const d={gqid:b.h,qqid:b.i};0==a&&(d["return"]=0);1==a&&(d["return"]=1,d.timeDelta=c);2==a&&(d.bgload=1);3==a&&(d.fg=1);a=[];for(var f in d)k(f,d[f],a);l(b.g+"&label=window_focus&"+a.join("&"),void 0)} 
class r{constructor(b,a,c){"undefined"!==typeof e.hidden?(this.a="hidden",this.f="visibilitychange"):"undefined"!==typeof e.mozHidden?(this.a="mozHidden",this.f="mozvisibilitychange"):"undefined"!==typeof e.msHidden?(this.a="msHidden",this.f="msvisibilitychange"):"undefined"!==typeof e.webkitHidden&&(this.a="webkitHidden",this.f="webkitvisibilitychange");this.g=b;this.b=!1;this.c=-1;this.h=a;this.i=c;e[this.a]&&p(this,2);n(this);q(this)}handleClick(){this.b=!0;g.setTimeout(()=>{this.b=!1},5E3)}};{const b=((a,c=null)=>c&&c.getAttribute("data-jc")==a?c:e.querySelector('script[data-jc="'+a+'"]'))(22,document.currentScript);if(null==b)throw Error("JSC not found 22");var t;{const a={},c=b.attributes;for(let d=c.length-1;0<=d;d--){const f=c[d].name;0===f.indexOf("data-jcp-")&&(a[f.substring(9)]=c[d].value)}t=a}window.window_focus_for_click=new r(t.url,t["gws-id"],t["qem-id"])};}).call(this);
