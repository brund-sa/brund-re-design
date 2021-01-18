(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o(1),r=o(9);
/*!
 * VERSION: 0.16.5
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
n.j._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(){var e,t,o,i,a,l,s,c,d,f,p,u,h={css:{},data:"_draggable"},g={css:{},data:"_draggable"},x={css:{},data:"_draggable"},y={css:{}},v=n.j._gsDefine.globals,m={},w=function(){return!1},b={style:{},appendChild:w,removeChild:w},T=n.j.document||{createElement:function(){return b}},S=T.documentElement||{},k=function(e){return T.createElementNS?T.createElementNS("http://www.w3.org/1999/xhtml",e):T.createElement(e)},M=k("div"),L=[],C=180/Math.PI,N=999999999999999,X=Date.now||function(){return(new Date).getTime()},P=!(T.addEventListener||!T.all),Y=T.createElement("div"),D=[],E={},O=0,_=/^(?:a|input|textarea|button|select)$/i,B=0,R=n.j.navigator&&-1!==n.j.navigator.userAgent.toLowerCase().indexOf("android"),A=0,W={},F={},H=function(e,t){var o,n={};if(t)for(o in e)n[o]=e[o]*t;else for(o in e)n[o]=e[o];return n},I=function(){for(var e=D.length;--e>-1;)D[e]()},V=function(e){for(var t=D.length;--t>-1;)D[t]===e&&D.splice(t,1);n.k.to(G,0,{overwrite:"all",delay:15,onComplete:G,data:"_draggable"})},G=function(){D.length||n.k.ticker.removeEventListener("tick",I)},j=function(){return null!=window.pageYOffset?window.pageYOffset:null!=T.scrollTop?T.scrollTop:S.scrollTop||T.body.scrollTop||0},z=function(){return null!=window.pageXOffset?window.pageXOffset:null!=T.scrollLeft?T.scrollLeft:S.scrollLeft||T.body.scrollLeft||0},U=function(e,t){De(e,"scroll",t),$(e.parentNode)||U(e.parentNode,t)},K=function(e,t){Ee(e,"scroll",t),$(e.parentNode)||K(e.parentNode,t)},$=function(e){return!(e&&e!==S&&e!==T&&e!==T.body&&e!==window&&e.nodeType&&e.parentNode)},Z=function(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o,i=T.body;return Math.max(0,$(e)?Math.max(S[n],i[n])-(window["inner"+o]||S[r]||i[r]):e[n]-e[r])},q=function(e){var t=$(e),o=Z(e,"x"),n=Z(e,"y");t?e=F:q(e.parentNode),e._gsMaxScrollX=o,e._gsMaxScrollY=n,e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0},J=function(e,t){return e=e||window.event,m.pageX=e.clientX+T.body.scrollLeft+S.scrollLeft,m.pageY=e.clientY+T.body.scrollTop+S.scrollTop,t&&(e.returnValue=!1),m},Q=function(e){return e?("string"==typeof e&&(e=n.k.selector(e)),e.length&&e!==window&&e[0]&&e[0].style&&!e.nodeType&&(e=e[0]),e===window||e.nodeType&&e.style?e:null):e},ee=function(e,t){var o,n,r,i=e.style;if(void 0===i[t]){for(r=["O","Moz","ms","Ms","Webkit"],n=5,o=t.charAt(0).toUpperCase()+t.substr(1);--n>-1&&void 0===i[r[n]+o];);if(n<0)return"";t=(3===n?"ms":r[n])+o}return t},te=function(e,t,o){var n=e.style;n&&(void 0===n[t]&&(t=ee(e,t)),null==o?n.removeProperty?n.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):n.removeAttribute(t):void 0!==n[t]&&(n[t]=o))},oe=("undefined"!=typeof window?window:T.defaultView||{getComputedStyle:function(){}}).getComputedStyle,ne=function(e,t){return oe(e instanceof Element?e:e.host||(e.parentNode||{}).host||e,t)},re=/(?:Left|Right|Width)/i,ie=/(?:\d|\-|\+|=|#|\.)*/g,ae=function(e,t,o,n,r){if("px"===n||!n)return o;if("auto"===n||!o)return 0;var i,a=re.test(t),l=e,s=M.style,c=o<0;return c&&(o=-o),"%"===n&&-1!==t.indexOf("border")?i=o/100*(a?e.clientWidth:e.clientHeight):(s.cssText="border:0 solid red;position:"+le(e,"position",!0)+";line-height:0;","%"!==n&&l.appendChild?s[a?"borderLeftWidth":"borderTopWidth"]=o+n:(l=e.parentNode||T.body,s[a?"width":"height"]=o+n),l.appendChild(M),i=parseFloat(M[a?"offsetWidth":"offsetHeight"]),l.removeChild(M),0!==i||r||(i=ae(e,t,o,n,!0))),c?-i:i},le=function(e,t,o){var n,r=(e._gsTransform||{})[t];return r||0===r?r:(e.style&&e.style[t]?r=e.style[t]:(n=ne(e))?r=(r=n.getPropertyValue(t.replace(/([A-Z])/g,"-$1").toLowerCase()))||n.length?r:n[t]:e.currentStyle&&(r=e.currentStyle[t]),"auto"!==r||"top"!==t&&"left"!==t||(r=function(e,t){if("absolute"!==le(e,"position",!0))return 0;var o="left"===t?"Left":"Top",n=le(e,"margin"+o,!0);return e["offset"+o]-(ae(e,t,parseFloat(n),(n+"").replace(ie,""))||0)}(e,t)),o?r:parseFloat(r)||0)},se=function(e,t,o){var n=e.vars,r=n[o],i=e._listeners[t];"function"==typeof r&&r.apply(n[o+"Scope"]||n.callbackScope||e,n[o+"Params"]||[e.pointerEvent]),i&&e.dispatchEvent(t)},ce=function(e,t){var o,n,r,i=Q(e);return i?Ne(i,t):void 0!==e.left?(r=Se(t),{left:e.left-r.x,top:e.top-r.y,width:e.width,height:e.height}):{left:n=e.min||e.minX||e.minRotation||0,top:o=e.min||e.minY||0,width:(e.max||e.maxX||e.maxRotation||0)-n,height:(e.max||e.maxY||0)-o}},de=function(){if(!T.createElementNS)return o=0,void(i=!1);var e,t,n,r,c=k("div"),d=T.createElementNS("http://www.w3.org/2000/svg","svg"),f=k("div"),p=c.style,u=T.body||S,h="flex"===le(u,"display",!0);T.body&&ue&&(p.position="absolute",u.appendChild(f),f.appendChild(c),r=c.offsetParent,f.style[ue]="rotate(1deg)",s=c.offsetParent===r,f.style.position="absolute",p.height="10px",r=c.offsetTop,f.style.border="5px solid red",l=r!==c.offsetTop,u.removeChild(f)),p=d.style,d.setAttributeNS(null,"width","400px"),d.setAttributeNS(null,"height","400px"),d.setAttributeNS(null,"viewBox","0 0 400 400"),p.display="block",p.boxSizing="border-box",p.border="0px solid red",p.transform="none",c.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",u.appendChild(c),c.appendChild(d),t=(n=d.createSVGPoint().matrixTransform(d.getScreenCTM())).y,c.scrollTop=100,n.x=n.y=0,n=n.matrixTransform(d.getScreenCTM()),a=t-n.y<100.1?0:t-n.y-150,c.removeChild(d),u.removeChild(c),u.appendChild(d),h&&(u.style.display="block"),t=(e=d.getScreenCTM()).e,p.border="50px solid red",e=d.getScreenCTM(),0===t&&0===e.e&&0===e.f&&1===e.a?(o=1,i=!0):(o=t!==e.e?1:0,i=1!==e.a),h&&(u.style.display="flex"),u.removeChild(d)},fe=""!==ee(M,"perspective"),pe=ee(M,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ue=ee(M,"transform"),he=ue.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ge={},xe={},ye=n.j.SVGElement,ve=function(e){return!!(ye&&"function"==typeof e.getBBox&&e.getCTM&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM))},me=n.j.navigator&&(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(n.j.navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(n.j.navigator.userAgent))&&parseFloat(RegExp.$1)<11,we=[],be=[],Te=function(e){if(!e.getBoundingClientRect||!e.parentNode||!ue)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:S};if(!1!==He.cacheSVGData&&e._dCache&&e._dCache.lastUpdate===n.k.ticker.frame)return e._dCache;var t,r,l,s,c,d,f,p,u,h,g,x=e,y=ke(e);if(y.lastUpdate=n.k.ticker.frame,e.getBBox&&!y.isSVGRoot){for(x=e.parentNode,t=e.getBBox();x&&"svg"!==(x.nodeName+"").toLowerCase();)x=x.parentNode;return s=Te(x),y.offsetTop=t.y*s.scaleY,y.offsetLeft=t.x*s.scaleX,y.scaleX=s.scaleX,y.scaleY=s.scaleY,y.offsetParent=x||S,y}for((l=y.offsetParent)===T.body&&(l=S),be.length=we.length=0;x&&("matrix(1, 0, 0, 1, 0, 0)"!==(c=le(x,ue,!0))&&"none"!==c&&"translate3d(0px, 0px, 0px)"!==c&&(be.push(x),we.push(x.style[ue]),x.style[ue]="none"),x!==l);)x=x.parentNode;for(r=l.getBoundingClientRect(),c=e.getScreenCTM(),f=e.createSVGPoint().matrixTransform(c),y.scaleX=Math.sqrt(c.a*c.a+c.b*c.b),y.scaleY=Math.sqrt(c.d*c.d+c.c*c.c),void 0===o&&de(),y.borderBox&&!i&&e.getAttribute("width")&&(s=ne(e)||{},p=parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth)||0,u=parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth)||0,h=parseFloat(s.width)||0,g=parseFloat(s.height)||0,y.scaleX*=(h-p)/h,y.scaleY*=(g-u)/g),a?(t=e.getBoundingClientRect(),y.offsetLeft=t.left-r.left,y.offsetTop=t.top-r.top):(y.offsetLeft=f.x-r.left,y.offsetTop=f.y-r.top),y.offsetParent=l,d=be.length;--d>-1;)be[d].style[ue]=we[d];return y},Se=function(e,t){if(t=t||{},!e||e===S||!e.parentNode||e===window)return{x:0,y:0};var o=ne(e),r=pe&&o?o.getPropertyValue(pe):"50% 50%",i=r.split(" "),a=-1!==r.indexOf("left")?"0%":-1!==r.indexOf("right")?"100%":i[0],l=-1!==r.indexOf("top")?"0%":-1!==r.indexOf("bottom")?"100%":i[1];return"center"!==l&&null!=l||(l="50%"),("center"===a||isNaN(parseFloat(a)))&&(a="50%"),e.getBBox&&ve(e)?(e._gsTransform||(n.k.set(e,{x:"+=0",overwrite:!1}),void 0===e._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),r=e.getBBox(),t.x=e._gsTransform.xOrigin-r.x,t.y=e._gsTransform.yOrigin-r.y):(e.getBBox&&-1!==(a+l).indexOf("%")&&(e={offsetWidth:(e=e.getBBox()).width,offsetHeight:e.height}),t.x=-1!==a.indexOf("%")?e.offsetWidth*parseFloat(a)/100:parseFloat(a),t.y=-1!==l.indexOf("%")?e.offsetHeight*parseFloat(l)/100:parseFloat(l)),t},ke=function(e){if(!1!==He.cacheSVGData&&e._dCache&&e._dCache.lastUpdate===n.k.ticker.frame)return e._dCache;var t,o=e._dCache=e._dCache||{},r=ne(e),i=e.getBBox&&ve(e),a="svg"===(e.nodeName+"").toLowerCase();if(o.isSVG=i,o.isSVGRoot=a,o.borderBox="border-box"===r.boxSizing,o.computedStyle=r,a)(t=e.parentNode||S).insertBefore(M,e),o.offsetParent=M.offsetParent||S,t.removeChild(M);else if(i){for(t=e.parentNode;t&&"svg"!==(t.nodeName+"").toLowerCase();)t=t.parentNode;o.offsetParent=t}else o.offsetParent=e.offsetParent;return o},Me=function(e,t,n,r,i){if(e===window||!e||!e.style||!e.parentNode)return[1,0,0,1,0,0];var a,c,d,f,p,u,h,g,x,y,v,m,w,b,k=e._dCache||ke(e),M=e.parentNode,L=M._dCache||ke(M),C=k.computedStyle,N=k.isSVG?L.offsetParent:M.offsetParent;return a=k.isSVG&&-1!==(e.style[ue]+"").indexOf("matrix")?e.style[ue]:C?C.getPropertyValue(he):e.currentStyle?e.currentStyle[ue]:"1,0,0,1,0,0",e.getBBox&&-1!==(e.getAttribute("transform")+"").indexOf("matrix")&&(a=e.getAttribute("transform")),(a=(a+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0]).length>6&&(a=[a[0],a[1],a[4],a[5],a[12],a[13]]),r?a[4]=a[5]=0:k.isSVG&&(p=e._gsTransform)&&(p.xOrigin||p.yOrigin)&&(a[0]=parseFloat(a[0]),a[1]=parseFloat(a[1]),a[2]=parseFloat(a[2]),a[3]=parseFloat(a[3]),a[4]=parseFloat(a[4])-(p.xOrigin-(p.xOrigin*a[0]+p.yOrigin*a[2])),a[5]=parseFloat(a[5])-(p.yOrigin-(p.xOrigin*a[1]+p.yOrigin*a[3]))),t&&(void 0===o&&de(),d=k.isSVG||k.isSVGRoot?Te(e):e,k.isSVG?(f=e.getBBox(),y=L.isSVGRoot?{x:0,y:0}:M.getBBox(),d={offsetLeft:f.x-y.x,offsetTop:f.y-y.y,offsetParent:k.offsetParent}):k.isSVGRoot?(v=parseInt(C.borderTopWidth,10)||0,m=parseInt(C.borderLeftWidth,10)||0,w=(a[0]-o)*m+a[2]*v,b=a[1]*m+(a[3]-o)*v,u=t.x,h=t.y,g=u-(u*a[0]+h*a[2]),x=h-(u*a[1]+h*a[3]),a[4]=parseFloat(a[4])+g,a[5]=parseFloat(a[5])+x,t.x-=g,t.y-=x,u=d.scaleX,h=d.scaleY,i||(t.x*=u,t.y*=h),a[0]*=u,a[1]*=h,a[2]*=u,a[3]*=h,me||(t.x+=w,t.y+=b),N===T.body&&d.offsetParent===S&&(N=S)):!l&&e.offsetParent&&(t.x+=parseInt(le(e.offsetParent,"borderLeftWidth"),10)||0,t.y+=parseInt(le(e.offsetParent,"borderTopWidth"),10)||0),c=M===S||M===T.body,a[4]=Number(a[4])+t.x+(d.offsetLeft||0)-n.x-(c?0:M.scrollLeft||0),a[5]=Number(a[5])+t.y+(d.offsetTop||0)-n.y-(c?0:M.scrollTop||0),M&&"fixed"===le(e,"position",C)&&(a[4]+=z(),a[5]+=j()),!M||M===S||N!==d.offsetParent||L.isSVG||s&&"100100"!==Me(M).join("")||(d=L.isSVGRoot?Te(M):M,a[4]-=d.offsetLeft||0,a[5]-=d.offsetTop||0,l||!L.offsetParent||k.isSVG||k.isSVGRoot||(a[4]-=parseInt(le(L.offsetParent,"borderLeftWidth"),10)||0,a[5]-=parseInt(le(L.offsetParent,"borderTopWidth"),10)||0))),a},Le=function(e,t){if(!e||e===window||!e.parentNode)return[1,0,0,1,0,0];for(var o,n,r,i,a,l,s,c,d=Se(e,ge),f=Se(e.parentNode,xe),p=Me(e,d,f,!1,!t);(e=e.parentNode)&&e.parentNode&&e!==S;)d=f,f=Se(e.parentNode,d===ge?xe:ge),s=Me(e,d,f),o=p[0],n=p[1],r=p[2],i=p[3],a=p[4],l=p[5],p[0]=o*s[0]+n*s[2],p[1]=o*s[1]+n*s[3],p[2]=r*s[0]+i*s[2],p[3]=r*s[1]+i*s[3],p[4]=a*s[0]+l*s[2]+s[4],p[5]=a*s[1]+l*s[3]+s[5];return t&&(o=p[0],n=p[1],r=p[2],i=p[3],a=p[4],l=p[5],c=o*i-n*r,p[0]=i/c,p[1]=-n/c,p[2]=-r/c,p[3]=o/c,p[4]=(r*l-i*a)/c,p[5]=-(o*l-n*a)/c),p},Ce=function(e,t,o){var n=e.x*t[0]+e.y*t[2]+t[4],r=e.x*t[1]+e.y*t[3]+t[5];return e.x=n*o[0]+r*o[2]+o[4],e.y=n*o[1]+r*o[3]+o[5],e},Ne=function(e,t,o){if(!(e=Q(e)))return null;t=Q(t);var n,r,i,a,l,s,c,d,f,p,u,h,g,x,y,v,m,w,b,k,M,L,C=e.getBBox&&ve(e);if(e===window)a=j(),i=(r=z())+(S.clientWidth||e.innerWidth||T.body.clientWidth||0),l=a+((e.innerHeight||0)-20<S.clientHeight?S.clientHeight:e.innerHeight||T.body.clientHeight||0);else{if(void 0===t||t===window)return e.getBoundingClientRect();r=-(n=Se(e)).x,a=-n.y,C?(g=(h=e.getBBox()).width,x=h.height):"svg"!==(e.nodeName+"").toLowerCase()&&e.offsetWidth?(g=e.offsetWidth,x=e.offsetHeight):(M=ne(e),g=parseFloat(M.width),x=parseFloat(M.height)),i=r+g,l=a+x,"svg"!==e.nodeName.toLowerCase()||P||(L=(y=Te(e)).computedStyle||{},w=(e.getAttribute("viewBox")||"0 0").split(" "),b=parseFloat(w[0]),k=parseFloat(w[1]),v=parseFloat(L.borderLeftWidth)||0,m=parseFloat(L.borderTopWidth)||0,i-=g-(g-v)/y.scaleX-b,l-=x-(x-m)/y.scaleY-k,r-=v/y.scaleX-b,a-=m/y.scaleY-k,M&&(i+=(parseFloat(L.borderRightWidth)+v)/y.scaleX,l+=(m+parseFloat(L.borderBottomWidth))/y.scaleY))}return e===t?{left:r,top:a,width:i-r,height:l-a}:(s=Le(e),c=Le(t,!0),d=Ce({x:r,y:a},s,c),f=Ce({x:i,y:a},s,c),p=Ce({x:i,y:l},s,c),u=Ce({x:r,y:l},s,c),r=Math.min(d.x,f.x,p.x,u.x),a=Math.min(d.y,f.y,p.y,u.y),W.x=W.y=0,o&&Se(t,W),{left:r+W.x,top:a+W.y,width:Math.max(d.x,f.x,p.x,u.x)-r,height:Math.max(d.y,f.y,p.y,u.y)-a})},Xe=function(e){return!!(e&&e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},Pe="undefined"!=typeof window&&"ontouchstart"in S&&"orientation"in window,Ye=function(e){for(var t=e.split(","),o=(void 0!==M.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==M.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":e).split(","),n={},r=4;--r>-1;)n[t[r]]=o[r],n[o[r]]=t[r];return n}("touchstart,touchmove,touchend,touchcancel"),De=function(e,t,o,n){if(e.addEventListener){var r=Ye[t];n=n||{passive:!1},e.addEventListener(r||t,o,n),r&&t!==r&&e.addEventListener(t,o,n)}else e.attachEvent&&e.attachEvent("on"+t,o)},Ee=function(e,t,o){if(e.removeEventListener){var n=Ye[t];e.removeEventListener(n||t,o),n&&t!==n&&e.removeEventListener(t,o)}else e.detachEvent&&e.detachEvent("on"+t,o)},Oe=function(t){e=t.touches&&B<t.touches.length,Ee(t.target,"touchend",Oe)},_e=function(t){e=t.touches&&B<t.touches.length,De(t.target,"touchend",Oe)},Be=function(e,t,o,n,r,i){var a,l,s,c={};if(t)if(1!==r&&t instanceof Array){if(c.end=a=[],s=t.length,"object"==typeof t[0])for(l=0;l<s;l++)a[l]=H(t[l],r);else for(l=0;l<s;l++)a[l]=t[l]*r;o+=1.1,n-=1.1}else c.end="function"==typeof t?function(o){var n,i,a=t.call(e,o);if(1!==r)if("object"==typeof a){for(i in n={},a)n[i]=a[i]*r;a=n}else a*=r;return a}:t;return(o||0===o)&&(c.max=o),(n||0===n)&&(c.min=n),i&&(c.velocity=0),c},Re=function(e){var t;return!(!e||!e.getAttribute||"BODY"===e.nodeName)&&(!("true"!==(t=e.getAttribute("data-clickable"))&&("false"===t||!e.onclick&&!_.test(e.nodeName+"")&&"true"!==e.getAttribute("contentEditable")))||Re(e.parentNode))},Ae=function(e,t){for(var o,n=e.length;--n>-1;)(o=e[n]).ondragstart=o.onselectstart=t?null:w,te(o,"userSelect",t?"text":"none")},We=(d=T.createElement("div"),f=T.createElement("div"),p=f.style,u=T.body||M,p.display="inline-block",p.position="relative",d.style.cssText=f.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",d.appendChild(f),u.appendChild(d),c=f.offsetHeight+18>d.scrollHeight,u.removeChild(d),c),Fe=function(e,t){e=Q(e),t=t||{};var o,r,i,a,l,s,c=T.createElement("div"),d=c.style,f=e.firstChild,p=0,u=0,h=e.scrollTop,g=e.scrollLeft,x=e.scrollWidth,y=e.scrollHeight,v=0,m=0,w=0;fe&&!1!==t.force3D?(l="translate3d(",s="px,0px)"):ue&&(l="translate(",s="px)"),this.scrollTop=function(e,t){if(!arguments.length)return-this.top();this.top(-e,t)},this.scrollLeft=function(e,t){if(!arguments.length)return-this.left();this.left(-e,t)},this.left=function(o,r){if(!arguments.length)return-(e.scrollLeft+u);var i=e.scrollLeft-g,a=u;if((i>2||i<-2)&&!r)return g=e.scrollLeft,n.k.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-g),void(t.onKill&&t.onKill());(o=-o)<0?(u=o-.5|0,o=0):o>m?(u=o-m|0,o=m):u=0,(u||a)&&(l?this._suspendTransforms||(d[ue]=l+-u+"px,"+-p+s):d.left=-u+"px",u+v>=0&&(d.paddingRight=u+v+"px")),e.scrollLeft=0|o,g=e.scrollLeft},this.top=function(o,r){if(!arguments.length)return-(e.scrollTop+p);var i=e.scrollTop-h,a=p;if((i>2||i<-2)&&!r)return h=e.scrollTop,n.k.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-h),void(t.onKill&&t.onKill());(o=-o)<0?(p=o-.5|0,o=0):o>w?(p=o-w|0,o=w):p=0,(p||a)&&(l?this._suspendTransforms||(d[ue]=l+-u+"px,"+-p+s):d.top=-p+"px"),e.scrollTop=0|o,h=e.scrollTop},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return m},this.disable=function(){for(f=c.firstChild;f;)a=f.nextSibling,e.appendChild(f),f=a;e===c.parentNode&&e.removeChild(c)},this.enable=function(){if((f=e.firstChild)!==c){for(;f;)a=f.nextSibling,c.appendChild(f),f=a;e.appendChild(c),this.calibrate()}},this.calibrate=function(t){var n,a,l=e.clientWidth===o;h=e.scrollTop,g=e.scrollLeft,l&&e.clientHeight===r&&c.offsetHeight===i&&x===e.scrollWidth&&y===e.scrollHeight&&!t||((p||u)&&(n=this.left(),a=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),l&&!t||(d.display="block",d.width="auto",d.paddingRight="0px",(v=Math.max(0,e.scrollWidth-e.clientWidth))&&(v+=le(e,"paddingLeft")+(We?le(e,"paddingRight"):0))),d.display="inline-block",d.position="relative",d.overflow="visible",d.verticalAlign="top",d.width="100%",d.paddingRight=v+"px",We&&(d.paddingBottom=le(e,"paddingBottom",!0)),P&&(d.zoom="1"),o=e.clientWidth,r=e.clientHeight,x=e.scrollWidth,y=e.scrollHeight,m=e.scrollWidth-o,w=e.scrollHeight-r,i=c.offsetHeight,d.display="block",(n||a)&&(this.left(n),this.top(a)))},this.content=c,this.element=e,this._suspendTransforms=!1,this.enable()},He=function(o,i){n.c.call(this,o),o=Q(o),t||(t=v.com.greensock.plugins.ThrowPropsPlugin),this.vars=i=H(i||{}),this.target=o,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(i.dragResistance)||0,this.edgeResistance=isNaN(i.edgeResistance)?1:parseFloat(i.edgeResistance)||0,this.lockAxis=i.lockAxis,this.autoScroll=i.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!i.allowEventDefault;var a,l,s,c,d,f,p,u,m,w,b,k,M,_,G,j,z,Z,ee,oe,ne,re,ie,ae,de,fe,pe,ue,he,ge,xe,ye,me=(i.type||(P?"top,left":"x,y")).toLowerCase(),we=-1!==me.indexOf("x")||-1!==me.indexOf("y"),be=-1!==me.indexOf("rotation"),Te=be?"rotation":we?"x":"left",ke=we?"y":"top",Me=-1!==me.indexOf("x")||-1!==me.indexOf("left")||"scroll"===me,Ce=-1!==me.indexOf("y")||-1!==me.indexOf("top")||"scroll"===me,Ne=i.minimumMovement||2,Xe=this,Oe=function(e){if("string"==typeof e&&(e=n.k.selector(e)),!e||e.nodeType)return[e];var t,o=[],r=e.length;for(t=0;t!==r;o.push(e[t++]));return o}(i.trigger||i.handle||o),We={},Ie=0,Ve=!1,je=i.autoScrollMarginTop||40,ze=i.autoScrollMarginRight||40,Ue=i.autoScrollMarginBottom||40,Ke=i.autoScrollMarginLeft||40,$e=i.clickableTest||Re,Ze=0,qe=function(e){if(!(Xe.isPressed&&e.which<2))return e.preventDefault(),e.stopPropagation(),!1;Xe.endDrag()},Je=function(e){if(Xe.autoScroll&&Xe.isDragging&&(Ve||Z)){var t,n,r,i,a,s,c,d,f=o,p=15*Xe.autoScroll;for(Ve=!1,F.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=S.scrollTop?S.scrollTop:T.body.scrollTop,F.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=S.scrollLeft?S.scrollLeft:T.body.scrollLeft,i=Xe.pointerX-F.scrollLeft,a=Xe.pointerY-F.scrollTop;f&&!n;)t=(n=$(f.parentNode))?F:f.parentNode,r=n?{bottom:Math.max(S.clientHeight,window.innerHeight||0),right:Math.max(S.clientWidth,window.innerWidth||0),left:0,top:0}:t.getBoundingClientRect(),s=c=0,Ce&&((d=t._gsMaxScrollY-t.scrollTop)<0?c=d:a>r.bottom-Ue&&d?(Ve=!0,c=Math.min(d,p*(1-Math.max(0,r.bottom-a)/Ue)|0)):a<r.top+je&&t.scrollTop&&(Ve=!0,c=-Math.min(t.scrollTop,p*(1-Math.max(0,a-r.top)/je)|0)),c&&(t.scrollTop+=c)),Me&&((d=t._gsMaxScrollX-t.scrollLeft)<0?s=d:i>r.right-ze&&d?(Ve=!0,s=Math.min(d,p*(1-Math.max(0,r.right-i)/ze)|0)):i<r.left+Ke&&t.scrollLeft&&(Ve=!0,s=-Math.min(t.scrollLeft,p*(1-Math.max(0,i-r.left)/Ke)|0)),s&&(t.scrollLeft+=s)),n&&(s||c)&&(window.scrollTo(t.scrollLeft,t.scrollTop),pt(Xe.pointerX+s,Xe.pointerY+c)),f=t}if(Z){var h=Xe.x,g=Xe.y;h<1e-6&&h>-1e-6&&(h=0),g<1e-6&&g>-1e-6&&(g=0),be?(Xe.deltaX=h-pe.data.rotation,pe.data.rotation=Xe.rotation=h,pe.setRatio(1)):l?(Ce&&(Xe.deltaY=g-l.top(),l.top(g)),Me&&(Xe.deltaX=h-l.left(),l.left(h))):we?(Ce&&(Xe.deltaY=g-pe.data.y,pe.data.y=g),Me&&(Xe.deltaX=h-pe.data.x,pe.data.x=h),pe.setRatio(1)):(Ce&&(Xe.deltaY=g-parseFloat(o.style.top||0),o.style.top=g+"px"),Me&&(Xe.deltaY=h-parseFloat(o.style.left||0),o.style.left=h+"px")),!u||e||ge||(ge=!0,se(Xe,"drag","onDrag"),ge=!1)}Z=!1},Qe=function(e,t){var r,i=Xe.x,a=Xe.y;o._gsTransform||!we&&!be||n.k.set(o,{x:"+=0",overwrite:!1,data:"_draggable"}),we?(Xe.y=o._gsTransform.y,Xe.x=o._gsTransform.x):be?Xe.x=Xe.rotation=o._gsTransform.rotation:l?(Xe.y=l.top(),Xe.x=l.left()):(Xe.y=parseInt(o.style.top,10)||0,Xe.x=parseInt(o.style.left,10)||0),(oe||ne||re)&&!t&&(Xe.isDragging||Xe.isThrowing)&&(re&&(W.x=Xe.x,W.y=Xe.y,(r=re(W)).x!==Xe.x&&(Xe.x=r.x,Z=!0),r.y!==Xe.y&&(Xe.y=r.y,Z=!0)),oe&&(r=oe(Xe.x))!==Xe.x&&(Xe.x=r,be&&(Xe.rotation=r),Z=!0),ne&&((r=ne(Xe.y))!==Xe.y&&(Xe.y=r),Z=!0)),Z&&Je(!0),e||(Xe.deltaX=Xe.x-i,Xe.deltaY=Xe.y-a,se(Xe,"throwupdate","onThrowUpdate"))},et=function(){var e,t,n,r;p=!1,l?(l.calibrate(),Xe.minX=w=-l.maxScrollLeft(),Xe.minY=k=-l.maxScrollTop(),Xe.maxX=m=Xe.maxY=b=0,p=!0):i.bounds&&(e=ce(i.bounds,o.parentNode),be?(Xe.minX=w=e.left,Xe.maxX=m=e.left+e.width,Xe.minY=k=Xe.maxY=b=0):void 0!==i.bounds.maxX||void 0!==i.bounds.maxY?(e=i.bounds,Xe.minX=w=e.minX,Xe.minY=k=e.minY,Xe.maxX=m=e.maxX,Xe.maxY=b=e.maxY):(t=ce(o,o.parentNode),Xe.minX=w=le(o,Te)+e.left-t.left,Xe.minY=k=le(o,ke)+e.top-t.top,Xe.maxX=m=w+(e.width-t.width),Xe.maxY=b=k+(e.height-t.height)),w>m&&(Xe.minX=m,Xe.maxX=m=w,w=Xe.minX),k>b&&(Xe.minY=b,Xe.maxY=b=k,k=Xe.minY),be&&(Xe.minRotation=w,Xe.maxRotation=m),p=!0),i.liveSnap&&(r=(n=!0===i.liveSnap?i.snap||{}:i.liveSnap)instanceof Array||"function"==typeof n,be?(oe=st(r?n:n.rotation,w,m,1),ne=null):n.points?re=ct(r?n:n.points,w,m,k,b,n.radius,l?-1:1):(Me&&(oe=st(r?n:n.x||n.left||n.scrollLeft,w,m,l?-1:1)),Ce&&(ne=st(r?n:n.y||n.top||n.scrollTop,k,b,l?-1:1))))},tt=function(){Xe.isThrowing=!1,se(Xe,"throwcomplete","onThrowComplete")},ot=function(){Xe.isThrowing=!1},nt=function(e,n){var r,a,s,c;e&&t?(!0===e&&(a=(r=i.snap||i.liveSnap||{})instanceof Array||"function"==typeof r,e={resistance:(i.throwResistance||i.resistance||1e3)/(be?10:1)},be?e.rotation=Be(Xe,a?r:r.rotation,m,w,1,n):(Me&&(e[Te]=Be(Xe,a?r:r.points||r.x||r.left||r.scrollLeft,m,w,l?-1:1,n||"x"===Xe.lockedAxis)),Ce&&(e[ke]=Be(Xe,a?r:r.points||r.y||r.top||r.scrollTop,b,k,l?-1:1,n||"y"===Xe.lockedAxis)),(r.points||r instanceof Array&&"object"==typeof r[0])&&(e.linkedProps=Te+","+ke,e.radius=r.radius))),Xe.isThrowing=!0,c=isNaN(i.overshootTolerance)?1===i.edgeResistance?0:1-Xe.edgeResistance+.2:i.overshootTolerance,Xe.tween=s=t.to(l||o,{throwProps:e,data:"_draggable",ease:i.ease||v.Power3.easeOut,onComplete:tt,onOverwrite:ot,onUpdate:i.fastMode?se:Qe,onUpdateParams:i.fastMode?[Xe,"onthrowupdate","onThrowUpdate"]:r&&r.radius?[!1,!0]:L},Math.max(i.minDuration||0,i.maxDuration||0)||2,isNaN(i.minDuration)?0===c||"object"==typeof e&&e.resistance>1e3?0:.5:i.minDuration,c),i.fastMode||(l&&(l._suspendTransforms=!0),s.render(s.duration(),!0,!0),Qe(!0,!0),Xe.endX=Xe.x,Xe.endY=Xe.y,be&&(Xe.endRotation=Xe.x),s.play(0),Qe(!0,!0),l&&(l._suspendTransforms=!1))):p&&Xe.applyBounds()},rt=function(e){var t,n,r,i,a,l,d,f,p,u=de||[1,0,0,1,0,0];de=Le(o.parentNode,!0),e&&Xe.isPressed&&u.join(",")!==de.join(",")&&(t=u[0],n=u[1],r=u[2],i=u[3],a=u[4],l=u[5],p=s*(-n/(d=t*i-n*r))+c*(t/d)+-(t*l-n*a)/d,c=(f=s*(i/d)+c*(-r/d)+(r*l-i*a)/d)*de[1]+p*de[3]+de[5],s=f*de[0]+p*de[2]+de[4]),de[1]||de[2]||1!=de[0]||1!=de[3]||0!=de[4]||0!=de[5]||(de=null)},it=function(){var e=1-Xe.edgeResistance;rt(!1),de&&(s=Xe.pointerX*de[0]+Xe.pointerY*de[2]+de[4],c=Xe.pointerX*de[1]+Xe.pointerY*de[3]+de[5]),Z&&(pt(Xe.pointerX,Xe.pointerY),Je(!0)),l?(et(),f=l.top(),d=l.left()):(at()?(Qe(!0,!0),et()):Xe.applyBounds(),be?(z=Xe.rotationOrigin=function(e,t,o,n,r){e=Q(e);var i=Le(e,!1),a=t.x,l=t.y;return o&&(Se(e,t),a-=t.x,l-=t.y),(n=!0===n?t:n||{}).x=a*i[0]+l*i[2]+i[4],n.y=a*i[1]+l*i[3]+i[5],n}(o,{x:0,y:0}),Qe(!0,!0),d=Xe.x,f=Xe.y=Math.atan2(z.y-Xe.pointerY,Xe.pointerX-z.x)*C):(o.parentNode&&o.parentNode.scrollTop||0,o.parentNode&&o.parentNode.scrollLeft||0,f=le(o,ke),d=le(o,Te))),p&&e&&(d>m?d=m+(d-m)/e:d<w&&(d=w-(w-d)/e),be||(f>b?f=b+(f-b)/e:f<k&&(f=k-(k-f)/e))),Xe.startX=d,Xe.startY=f},at=function(){return Xe.tween&&Xe.tween.isActive()},lt=function(){!Y.parentNode||at()||Xe.isDragging||Y.parentNode.removeChild(Y)},st=function(e,t,o,n){return"function"==typeof e?function(r){var i=Xe.isPressed?1-Xe.edgeResistance:1;return e.call(Xe,r>o?o+(r-o)*i:r<t?t+(r-t)*i:r)*n}:e instanceof Array?function(n){for(var r,i,a=e.length,l=0,s=N;--a>-1;)(i=(r=e[a])-n)<0&&(i=-i),i<s&&r>=t&&r<=o&&(l=a,s=i);return e[l]}:isNaN(e)?function(e){return e}:function(){return e*n}},ct=function(e,t,o,n,r,i,a){return i=i&&i<N?i*i:N,"function"==typeof e?function(l){var s,c,d,f=Xe.isPressed?1-Xe.edgeResistance:1,p=l.x,u=l.y;return l.x=p=p>o?o+(p-o)*f:p<t?t+(p-t)*f:p,l.y=u=u>r?r+(u-r)*f:u<n?n+(u-n)*f:u,(s=e.call(Xe,l))!==l&&(l.x=s.x,l.y=s.y),1!==a&&(l.x*=a,l.y*=a),i<N&&(c=l.x-p)*c+(d=l.y-u)*d>i&&(l.x=p,l.y=u),l}:e instanceof Array?function(t){for(var o,n,r,a,l=e.length,s=0,c=N;--l>-1;)(a=(o=(r=e[l]).x-t.x)*o+(n=r.y-t.y)*n)<c&&(s=l,c=a);return c<=i?e[s]:t}:function(e){return e}},dt=function(e,t){var r;if(a&&!Xe.isPressed&&e&&("mousedown"!==e.type&&"pointerdown"!==e.type||t||!(X()-Ze<30)||!Ye[Xe.pointerEvent.type])){if(fe=at(),Xe.pointerEvent=e,Ye[e.type]?(ae=-1!==e.type.indexOf("touch")?e.currentTarget||e.target:T,De(ae,"touchend",ut),De(ae,"touchmove",ft),De(ae,"touchcancel",ut),De(T,"touchstart",_e)):(ae=null,De(T,"mousemove",ft)),he=null,De(T,"mouseup",ut),e&&e.target&&De(e.target,"mouseup",ut),ie=$e.call(Xe,e.target)&&!i.dragClickables&&!t)return De(e.target,"change",ut),se(Xe,"pressInit","onPressInit"),se(Xe,"press","onPress"),void Ae(Oe,!0);if(ue=!(!ae||Me===Ce||!1===Xe.vars.allowNativeTouchScrolling||Xe.vars.allowContextMenu&&e&&(e.ctrlKey||e.which>2))&&(Me?"y":"x"),P?e=J(e,!0):ue||Xe.allowEventDefault||(e.preventDefault(),e.preventManipulation&&e.preventManipulation()),e.changedTouches?(e=G=e.changedTouches[0],j=e.identifier):e.pointerId?j=e.pointerId:G=j=null,B++,function(e){D.push(e),1===D.length&&n.k.ticker.addEventListener("tick",I,this,!1,1)}(Je),c=Xe.pointerY=e.pageY,s=Xe.pointerX=e.pageX,se(Xe,"pressInit","onPressInit"),(ue||Xe.autoScroll)&&q(o.parentNode),!o.parentNode||!Xe.autoScroll||l||be||!o.parentNode._gsMaxScrollX||Y.parentNode||o.getBBox||(Y.style.width=o.parentNode.scrollWidth+"px",o.parentNode.appendChild(Y)),it(),Xe.tween&&Xe.tween.kill(),Xe.isThrowing=!1,n.k.killTweensOf(l||o,!0,We),l&&n.k.killTweensOf(o,!0,{scrollTo:1}),Xe.tween=Xe.lockedAxis=null,(i.zIndexBoost||!be&&!l&&!1!==i.zIndexBoost)&&(o.style.zIndex=He.zIndex++),Xe.isPressed=!0,u=!(!i.onDrag&&!Xe._listeners.drag),!be)for(r=Oe.length;--r>-1;)te(Oe[r],"cursor",i.cursor||"move");se(Xe,"press","onPress")}},ft=function(t){var o,n,r,i,l,d,f=t;if(a&&!e&&Xe.isPressed&&t){if(Xe.pointerEvent=t,o=t.changedTouches){if((t=o[0])!==G&&t.identifier!==j){for(i=o.length;--i>-1&&(t=o[i]).identifier!==j;);if(i<0)return}}else if(t.pointerId&&j&&t.pointerId!==j)return;if(P)t=J(t,!0);else{if(ae&&ue&&!he&&(n=t.pageX,r=t.pageY,de&&(i=n*de[0]+r*de[2]+de[4],r=n*de[1]+r*de[3]+de[5],n=i),((l=Math.abs(n-s))!==(d=Math.abs(r-c))&&(l>Ne||d>Ne)||R&&ue===he)&&(he=l>d&&Me?"x":"y",!1!==Xe.vars.lockAxisOnTouchScroll&&(Xe.lockedAxis="x"===he?"y":"x","function"==typeof Xe.vars.onLockAxis&&Xe.vars.onLockAxis.call(Xe,f)),R&&ue===he)))return void ut(f);Xe.allowEventDefault||ue&&(!he||ue===he)||!1===f.cancelable||(f.preventDefault(),f.preventManipulation&&f.preventManipulation())}Xe.autoScroll&&(Ve=!0),pt(t.pageX,t.pageY)}},pt=function(e,t){var o,n,r,i,a,l,u=1-Xe.dragResistance,h=1-Xe.edgeResistance;Xe.pointerX=e,Xe.pointerY=t,be?(i=Math.atan2(z.y-t,e-z.x)*C,(a=Xe.y-i)>180?(f-=360,Xe.y=i):a<-180&&(f+=360,Xe.y=i),Xe.x!==d||Math.abs(f-i)>Ne?(Xe.y=i,r=d+(f-i)*u):r=d):(de&&(l=e*de[0]+t*de[2]+de[4],t=e*de[1]+t*de[3]+de[5],e=l),(n=t-c)<Ne&&n>-Ne&&(n=0),(o=e-s)<Ne&&o>-Ne&&(o=0),(Xe.lockAxis||Xe.lockedAxis)&&(o||n)&&((l=Xe.lockedAxis)||(Xe.lockedAxis=l=Me&&Math.abs(o)>Math.abs(n)?"y":Ce?"x":null,l&&"function"==typeof Xe.vars.onLockAxis&&Xe.vars.onLockAxis.call(Xe,Xe.pointerEvent)),"y"===l?n=0:"x"===l&&(o=0)),r=d+o*u,i=f+n*u),(oe||ne||re)&&(Xe.x!==r||Xe.y!==i&&!be)?(re&&(W.x=r,W.y=i,r=(l=re(W)).x,i=l.y),oe&&(r=oe(r)),ne&&(i=ne(i))):p&&(r>m?r=m+(r-m)*h:r<w&&(r=w+(r-w)*h),be||(i>b?i=b+(i-b)*h:i<k&&(i=k+(i-k)*h))),be||de||(r=Math.round(r),i=Math.round(i)),(Xe.x!==r||Xe.y!==i&&!be)&&(be?(Xe.endRotation=Xe.x=Xe.endX=r,Z=!0):(Ce&&(Xe.y=Xe.endY=i,Z=!0),Me&&(Xe.x=Xe.endX=r,Z=!0)),!Xe.isDragging&&Xe.isPressed&&(Xe.isDragging=!0,se(Xe,"dragstart","onDragStart")))},ut=function(e,t){if(a&&Xe.isPressed&&(!e||null==j||t||!(e.pointerId&&e.pointerId!==j||e.changedTouches&&!function(e,t){for(var o=e.length;--o>-1;)if(e[o].identifier===t)return!0;return!1}(e.changedTouches,j)))){Xe.isPressed=!1;var r,l,s,c,d,f=e,p=Xe.isDragging,u=Xe.vars.allowContextMenu&&e&&(e.ctrlKey||e.which>2),h=n.k.delayedCall(.001,lt);if(ae?(Ee(ae,"touchend",ut),Ee(ae,"touchmove",ft),Ee(ae,"touchcancel",ut),Ee(T,"touchstart",_e)):Ee(T,"mousemove",ft),Ee(T,"mouseup",ut),e&&e.target&&Ee(e.target,"mouseup",ut),Z=!1,ie&&!u)return e&&(Ee(e.target,"change",ut),Xe.pointerEvent=f),Ae(Oe,!1),se(Xe,"release","onRelease"),se(Xe,"click","onClick"),void(ie=!1);if(V(Je),!be)for(l=Oe.length;--l>-1;)te(Oe[l],"cursor",i.cursor||"move");if(p&&(Ie=A=X(),Xe.isDragging=!1),B--,e){if(P&&(e=J(e,!1)),(r=e.changedTouches)&&(e=r[0])!==G&&e.identifier!==j){for(l=r.length;--l>-1&&(e=r[l]).identifier!==j;);if(l<0)return}Xe.pointerEvent=f,Xe.pointerX=e.pageX,Xe.pointerY=e.pageY}return u&&f?(f.preventDefault(),f.preventManipulation&&f.preventManipulation(),se(Xe,"release","onRelease")):f&&!p?(fe&&(i.snap||i.bounds)&&nt(i.throwProps),se(Xe,"release","onRelease"),R&&"touchmove"===f.type||-1!==f.type.indexOf("cancel")||(se(Xe,"click","onClick"),X()-Ze<300&&se(Xe,"doubleclick","onDoubleClick"),c=f.target||f.srcElement||o,Ze=X(),d=function(){Ze!==xe&&Xe.enabled()&&!Xe.isPressed&&(c.click?c.click():T.createEvent&&((s=T.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,window,1,Xe.pointerEvent.screenX,Xe.pointerEvent.screenY,Xe.pointerX,Xe.pointerY,!1,!1,!1,!1,0,null),c.dispatchEvent(s)))},R||f.defaultPrevented||n.k.delayedCall(1e-5,d))):(nt(i.throwProps),P||Xe.allowEventDefault||!f||!i.dragClickables&&$e.call(Xe,f.target)||!p||ue&&(!he||ue!==he)||!1===f.cancelable||(f.preventDefault(),f.preventManipulation&&f.preventManipulation()),se(Xe,"release","onRelease")),at()&&h.duration(Xe.tween.duration()),p&&se(Xe,"dragend","onDragEnd"),!0}},ht=function(e){if(e&&Xe.isDragging&&!l){var t=e.target||e.srcElement||o.parentNode,n=t.scrollLeft-t._gsScrollX,r=t.scrollTop-t._gsScrollY;(n||r)&&(de?(s-=n*de[0]+r*de[2],c-=r*de[3]+n*de[1]):(s-=n,c-=r),t._gsScrollX+=n,t._gsScrollY+=r,pt(Xe.pointerX,Xe.pointerY))}},gt=function(e){var t=X(),o=t-Ze<40,n=t-Ie<40,r=o&&xe===Ze,i=!!e.preventDefault,a=Xe.pointerEvent&&Xe.pointerEvent.defaultPrevented,l=o&&ye===Ze,s=e.isTrusted||null==e.isTrusted&&o&&r;if(i&&(r||n&&!1!==Xe.vars.suppressClickOnDrag)&&e.stopImmediatePropagation(),o&&(!Xe.pointerEvent||!Xe.pointerEvent.defaultPrevented)&&(!r||s!==l))return s&&r&&(ye=Ze),void(xe=Ze);(Xe.isPressed||n||o)&&(i?s&&e.detail&&o&&!a||(e.preventDefault(),e.preventManipulation&&e.preventManipulation()):e.returnValue=!1)},xt=function(e){return de?{x:e.x*de[0]+e.y*de[2]+de[4],y:e.x*de[1]+e.y*de[3]+de[5]}:{x:e.x,y:e.y}};(ee=He.get(this.target))&&ee.kill(),this.startDrag=function(e,t){var n,r,i,a;dt(e||Xe.pointerEvent,!0),t&&!Xe.hitTest(e||Xe.pointerEvent)&&(n=Ge(e||Xe.pointerEvent),r=Ge(o),i=xt({x:n.left+n.width/2,y:n.top+n.height/2}),a=xt({x:r.left+r.width/2,y:r.top+r.height/2}),s-=i.x-a.x,c-=i.y-a.y),Xe.isDragging||(Xe.isDragging=!0,se(Xe,"dragstart","onDragStart"))},this.drag=ft,this.endDrag=function(e){ut(e||Xe.pointerEvent,!0)},this.timeSinceDrag=function(){return Xe.isDragging?0:(X()-Ie)/1e3},this.timeSinceClick=function(){return(X()-Ze)/1e3},this.hitTest=function(e,t){return He.hitTest(Xe.target,e,t)},this.getDirection=function(e,o){var n,r,i,a,l,s,c="velocity"===e&&t?e:"object"!=typeof e||be?"start":"element";return"element"===c&&(l=Ge(Xe.target),s=Ge(e)),n="start"===c?Xe.x-d:"velocity"===c?t.getVelocity(this.target,Te):l.left+l.width/2-(s.left+s.width/2),be?n<0?"counter-clockwise":"clockwise":(o=o||2,r="start"===c?Xe.y-f:"velocity"===c?t.getVelocity(this.target,ke):l.top+l.height/2-(s.top+s.height/2),a=(i=Math.abs(n/r))<1/o?"":n<0?"left":"right",i<o&&(""!==a&&(a+="-"),a+=r<0?"up":"down"),a)},this.applyBounds=function(e){var t,n,r,a,l,s;if(e&&i.bounds!==e)return i.bounds=e,Xe.update(!0);if(Qe(!0),et(),p){if(t=Xe.x,n=Xe.y,t>m?t=m:t<w&&(t=w),n>b?n=b:n<k&&(n=k),(Xe.x!==t||Xe.y!==n)&&(r=!0,Xe.x=Xe.endX=t,be?Xe.endRotation=t:Xe.y=Xe.endY=n,Z=!0,Je(!0),Xe.autoScroll&&!Xe.isDragging))for(q(o.parentNode),a=o,F.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=S.scrollTop?S.scrollTop:T.body.scrollTop,F.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=S.scrollLeft?S.scrollLeft:T.body.scrollLeft;a&&!s;)l=(s=$(a.parentNode))?F:a.parentNode,Ce&&l.scrollTop>l._gsMaxScrollY&&(l.scrollTop=l._gsMaxScrollY),Me&&l.scrollLeft>l._gsMaxScrollX&&(l.scrollLeft=l._gsMaxScrollX),a=l;Xe.isThrowing&&(r||Xe.endX>m||Xe.endX<w||Xe.endY>b||Xe.endY<k)&&nt(i.throwProps,r)}return Xe},this.update=function(e,t,n){var r=Xe.x,i=Xe.y;return rt(!t),e?Xe.applyBounds():(Z&&n&&Je(!0),Qe(!0)),t&&(pt(Xe.pointerX,Xe.pointerY),Z&&Je(!0)),Xe.isPressed&&!t&&(Me&&Math.abs(r-Xe.x)>.01||Ce&&Math.abs(i-Xe.y)>.01&&!be)&&it(),Xe.autoScroll&&(q(o.parentNode),Ve=Xe.isDragging,Je(!0)),Xe.autoScroll&&(K(o,ht),U(o,ht)),Xe},this.enable=function(e){var s,c,d;if("soft"!==e){for(c=Oe.length;--c>-1;)d=Oe[c],De(d,"mousedown",dt),De(d,"touchstart",dt),De(d,"click",gt,!0),be||te(d,"cursor",i.cursor||"move"),te(d,"touchCallout","none"),te(d,"touchAction",Me===Ce?"none":Me?"pan-y":"pan-x"),ve(d)&&te(d.ownerSVGElement||d,"touchAction",Me===Ce?"none":Me?"pan-y":"pan-x"),this.vars.allowContextMenu||De(d,"contextmenu",qe);Ae(Oe,!1)}return U(o,ht),a=!0,t&&"soft"!==e&&t.track(l||o,we?"x,y":be?"rotation":"top,left"),l&&l.enable(),o._gsDragID=s="d"+O++,E[s]=this,l&&(l.element._gsDragID=s),n.k.set(o,{x:"+=0",overwrite:!1,data:"_draggable"}),pe={t:o,data:P?_:o._gsTransform,tween:{},setRatio:P?function(){n.k.set(o,M)}:r.a._internals.setTransformRatio||r.a._internals.set3DTransformRatio},it(),Xe.update(!0),Xe},this.disable=function(e){var n,r,i=Xe.isDragging;if(!be)for(n=Oe.length;--n>-1;)te(Oe[n],"cursor",null);if("soft"!==e){for(n=Oe.length;--n>-1;)r=Oe[n],te(r,"touchCallout",null),te(r,"touchAction",null),Ee(r,"mousedown",dt),Ee(r,"touchstart",dt),Ee(r,"click",gt),Ee(r,"contextmenu",qe);Ae(Oe,!0),ae&&(Ee(ae,"touchcancel",ut),Ee(ae,"touchend",ut),Ee(ae,"touchmove",ft)),Ee(T,"mouseup",ut),Ee(T,"mousemove",ft)}return K(o,ht),a=!1,t&&"soft"!==e&&t.untrack(l||o,we?"x,y":be?"rotation":"top,left"),l&&l.disable(),V(Je),Xe.isDragging=Xe.isPressed=ie=!1,i&&se(Xe,"dragend","onDragEnd"),Xe},this.enabled=function(e,t){return arguments.length?e?Xe.enable(t):Xe.disable(t):a},this.kill=function(){return Xe.isThrowing=!1,n.k.killTweensOf(l||o,!0,We),Xe.disable(),n.k.set(Oe,{clearProps:"userSelect"}),delete E[o._gsDragID],Xe},-1!==me.indexOf("scroll")&&(l=this.scrollProxy=new Fe(o,function(e,t){var o;for(o in t)void 0===e[o]&&(e[o]=t[o]);return e}({onKill:function(){Xe.isPressed&&ut(null)}},i)),o.style.overflowY=Ce&&!Pe?"auto":"hidden",o.style.overflowX=Me&&!Pe?"auto":"hidden",o=l.content),!1!==i.force3D&&n.k.set(o,{force3D:!0}),be?We.rotation=1:(Me&&(We[Te]=1),Ce&&(We[ke]=1)),be?(_=(M=y).css,M.overwrite=!1):we&&(_=(M=Me&&Ce?h:Me?g:x).css,M.overwrite=!1),this.enable()},Ie=He.prototype=new n.c;Ie.constructor=He,Ie.pointerX=Ie.pointerY=Ie.startX=Ie.startY=Ie.deltaX=Ie.deltaY=0,Ie.isDragging=Ie.isPressed=!1,He.version="0.16.5",He.zIndex=1e3,De(T,"touchcancel",function(){}),De(T,"contextmenu",function(e){var t;for(t in E)E[t].isPressed&&E[t].endDrag()}),He.create=function(e,t){"string"==typeof e&&(e=n.k.selector(e));for(var o=e&&0!==e.length?Xe(e)?function(e){var t,o,n,r=[],i=e.length;for(t=0;t<i;t++)if(o=e[t],Xe(o))for(n=o.length,n=0;n<o.length;n++)r.push(o[n]);else o&&0!==o.length&&r.push(o);return r}(e):[e]:[],r=o.length;--r>-1;)o[r]=new He(o[r],t);return o},He.get=function(e){return E[(Q(e)||{})._gsDragID]},He.timeSinceDrag=function(){return(X()-A)/1e3};var Ve={},Ge=function(e,t){if(e===window)return Ve.left=Ve.top=0,Ve.width=Ve.right=S.clientWidth||e.innerWidth||T.body.clientWidth||0,Ve.height=Ve.bottom=(e.innerHeight||0)-20<S.clientHeight?S.clientHeight:e.innerHeight||T.body.clientHeight||0,Ve;var o=e.pageX!==t?{left:e.pageX-z(),top:e.pageY-j(),right:e.pageX-z()+1,bottom:e.pageY-j()+1}:e.nodeType||e.left===t||e.top===t?P?function(e){var t,o,n=0,r=0;for(t=(e=Q(e)).offsetWidth,o=e.offsetHeight;e;)n+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent;return{top:n,left:r,width:t,height:o}}(e):Q(e).getBoundingClientRect():e;return o.right===t&&o.width!==t?(o.right=o.left+o.width,o.bottom=o.top+o.height):o.width===t&&(o={width:o.right-o.left,height:o.bottom-o.top,right:o.right,left:o.left,bottom:o.bottom,top:o.top}),o};return He.hitTest=function(e,t,o){if(e===t)return!1;var n,r,i,a=Ge(e),l=Ge(t),s=l.left>a.right||l.right<a.left||l.top>a.bottom||l.bottom<a.top;return s||!o?!s:(i=-1!==(o+"").indexOf("%"),o=parseFloat(o)||0,(n={left:Math.max(a.left,l.left),top:Math.max(a.top,l.top)}).width=Math.min(a.right,l.right)-n.left,n.height=Math.min(a.bottom,l.bottom)-n.top,!(n.width<0||n.height<0)&&(i?(o*=.01,(r=n.width*n.height)>=a.width*a.height*o||r>=l.width*l.height*o):n.width>o&&n.height>o))},Y.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",He},!0);var i=n.l.Draggable}}]);