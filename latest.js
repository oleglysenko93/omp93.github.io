/*!  */
!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t,i){"use strict";t.a={}},function(e,t,i){"use strict";function n(){var e=document.documentElement,t=document.getElementsByTagName("body")[0];return{width:window.innerWidth||e.clientWidth||t.clientWidth,height:window.innerHeight||e.clientHeight||t.clientHeight}}function o(e,t){for(var i=t.split("."),n=0,o=i.length;n<o;n++){var a=i[n];if(!(null!==e&&"object"===(void 0===e?"undefined":c(e))&&a in e))return!1;e=e[a]}return!0}function a(e,t){var i=n();i.width>=e?$(".mf-wrapper").css({width:e+"px"}):$(".mf-wrapper").css({width:"100%"}),i.height>=t?$(".mf-wrapper").css({height:t+"px"}):$(".mf-wrapper").css({height:"100%"})}function r(e){for(var t="",i=new Uint8Array(e),n=i.byteLength,o=0;o<n;o++)t+=String.fromCharCode(i[o]);return window.btoa(t)}function s(e,t){var i=document.createElement("script");i.src=e,i.type="text/javascript",i.async=!0,i.onload=t;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(i,n)}t.c=o,t.e=a,t.f=r,t.a=s,i.d(t,"b",function(){return p}),i.d(t,"d",function(){return l});var u=i(3),d=i(0),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p={PREFIX:"mf_",get:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+this.PREFIX+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"_"+d.a.project+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},set:function(e,t,i){i=i||{},void 0===i.path&&(i.path="/"),void 0===i.domain&&(void 0!==u.a.subscribe.cookie_domain?i.domain=u.a.subscribe.cookie_domain:i.domain=location.host);var n=i.expires;if("number"==typeof n&&n){var o=new Date;o.setTime(o.getTime()+n),n=i.expires=o.toUTCString()}else if(n&&n.toUTCString)i.expires=n.toUTCString();else{var a=new Date;a.setTime(a.getTime()+31536e6),n=i.expires=a.toUTCString()}t=encodeURIComponent(t);var r=this.PREFIX+e+"_"+d.a.project+"="+t;for(var s in i){r+="; "+s;var c=i[s];!0!==c&&(r+="="+c)}document.cookie=r}},l=function(){var e;d.a.debug&&(e=console).log.apply(e,arguments)}},function(e,t,i){"use strict";t.a={showDelay:1e4,registeredNextDelay:6048e5,showedNextDelay:6048e5,showedKey:"popup_showed_v1",resubShowedKey:"popup_resub_showed_v1",showedSecondKey:"popup_showed_second_v1",registeredKey:"user_registered_v1",webpushShowed:"webpush_showed_v1",webpushShowedTTL:1728e5,enteredEmail:"email",enteredEmailTTL:3e5}},function(e,t,i){"use strict";function n(e){if(i.i(a.c)(e,"data.action"))switch(e.data.action){case"close":o.a.popup.remove({action:"close"});break;case"mf-widget-loaded":console.log("mf-widget-loaded"),u.post({email:a.b.get(r.a.enteredEmail)})}i.i(a.c)(e,"data.email")&&(i.i(a.d)("msg.data.email",e.data.email),a.b.set(r.a.enteredEmail,e.data.email,{expires:r.a.enteredEmailTTL}))}i.d(t,"e",function(){return p}),i.d(t,"d",function(){return l}),i.d(t,"c",function(){return f}),i.d(t,"b",function(){return h});var o=i(0),a=i(1),r=i(2),s={subscribe:{},webpush:{},invalid:null},u=void 0;o.a.settingsLoading=!1,o.a.settingsLoaded=!1,o.a.settingsLoadedCb=function(){return!1};var d=function(){var e=a.b.get("reg_ts");if(!e)return null;var t=Date.now()-1e3*e;return Math.floor(t/6e4)>5},c=function(){var e=a.b.get(r.a.resubShowedKey);return e?+e:null},p=function(){if(s.invalid){var e=c();i.i(a.d)("resubShowed:",e);var t=d();if(i.i(a.d)("resubExpired:",t),e&&e>=2||t)return void i.i(a.d)("🚫 checkInvalid noop. Reason:","showed "+e+" time(s) || exp: "+t);i.i(a.d)("checkInvalid","userId: "+o.a.userId+"; 📪: "+a.b.get(r.a.enteredEmail)),o.a.userId&&$.get(o.a.apiRoot+"users/invalid/"+o.a.userId,function(e){i.i(a.d)("checkInvalid done","unsub =",e.data),e.data&&o.a.Actions.init.showPopup({popupSettings:Object.assign(s.invalid,{invalid:!0})})})}},l=function(e){return e&&setTimeout(p,1e3)},f=function(e){i.i(a.d)("getUserInfo"),a.b.get("guest_id")&&(o.a.guestId=a.b.get("guest_id"),i.i(a.d)("mf_guest_id",o.a.guestId)),$.ajax({url:o.a.apiRoot+"users/cookie",dataType:"jsonp",success:function(t){var n=t.reg_ts,r=t.user_id,s=t.guest_id;i.i(a.d)("Tried to obtain userId",r),(r||s||n)&&(n&&(a.b.set("reg_ts",n),i.i(a.d)("/users/cookie ->","⏱",n)),r&&(o.a.userId=r,a.b.set("user_id",r),i.i(a.d)("/users/cookie ->","👤",r)),s&&(o.a.guestId=s,a.b.set("guest_id",s),i.i(a.d)("/users/cookie ->","👽",s)),e&&e(o.a.userId))},error:function(){e&&e(null)}})},h=function(e){if(o.a.settingsLoading=!0,i.i(a.d)("settingsLoaded",o.a.settingsLoaded),o.a.settingsLoaded)return i.i(a.d)("Session.settingsLoaded"),o.a.settingsLoadedCb(!0),void(e&&e());$.get(o.a.apiRoot+"widget/settings/"+o.a.project,function(t){Object.keys(t.data).forEach(function(e){return s[e]=t.data[e]}),i.i(a.c)(s,"subscribe.version")?i.i(a.a)("https://n.mailfire.io/scripts/widgets/porthole.min.js",function(){u||(u=new Porthole.WindowProxy(s.subscribe.url,"guestFrame"),u.addEventListener(n),o.a.settingsLoading=!1,o.a.settingsLoaded=!0,o.a.settingsLoadedCb(!0),o.a.version=2,e&&e(),i.i(a.d)("settingsLoaded",o.a.settingsLoaded))}):e&&e()})};t.a=s},function(e,t,i){"use strict";var n=i(9),o=i(10),a=i(11),r={2:n.a,3:o.a,4:a.a};t.a=function(e){return r[e.appearence_id||2](e)}},function(e,t,i){"use strict";var n={checkForm:function(e){function t(){n.addClass("invalid"),o.addClass("invalid").focus()}function i(){var e=o.val();return e&&""!==e&&-1!==e.indexOf("@")&&-1!==e.indexOf(".")?($.post("https://api.mailfire.io/v1/email/check",{email:e},function(e){e.data.valid?n.submit():(t(),n.one("submit",i))}),!1):(t(),!1)}var n=$(e),o=n.find(".emailCheck");if(!o.length&&(o=n.find("input[type:email]"),!o.length))return!1;o=$(o[0]),n.one("submit",i)}};t.a=n},function(e,t,i){"use strict";var n=i(0),o=i(1),a=i(2),r=i(3),s=i(4),u={auto:function(){var e=this;n.a.settingsLoading||(i.i(r.b)(function(){return e.subscribe()}),i.i(r.c)(r.d))},custom:function(){n.a.settingsLoading||(i.i(r.b)(),i.i(r.c)(r.d))},watcher:function(){var e=!0;$(window).on("blur",function(){return e=!1}),$(window).on("focus",function(){return e=!0}),setInterval(function(){if(e){var t=new Image,i=["ts="+(new Date).getTime()];n.a.userId&&i.push("user_id="+n.a.userId),o.b.get("guest_id")&&i.push("guest_id="+o.b.get("guest_id")),t.src="https://n.mailfire.io/online/watch/"+n.a.project+"?"+i.join("&")}},35e3)},subscribe:function(){var e=this;if(!(n.a.userId||void 0!==o.b.get(a.a.registeredKey)||void 0!==o.b.get(a.a.showedKey)&&void 0!==o.b.get(a.a.showedSecondKey))){var t=void 0;void 0!==o.b.get(a.a.showedKey)?(t=1,o.b.set(a.a.showedSecondKey,1,{expires:a.a.showedNextDelay})):t=a.a.showDelay,setTimeout(function(){return e.showPopup({popupSettings:r.a.subscribe})},t)}},removePopup:function(){n.a.popup.remove()},showPopup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.popupSettings,u=e.showCallback,d=e.closeCallback;i.i(o.d)("showPopup");var c=o.b.get("user_id"),p=+o.b.get(a.a.showedKey)||0,l=+o.b.get(a.a.resubShowedKey)||0;if(!n.a.testPopup&&t&&!t.invalid&&(c||p))return void i.i(o.d)("🚫 showPopup noop. Reason:","userId "+c+" || showed "+p);if(t)n.a.popup=i.i(s.a)(t),d&&"function"==typeof d&&(n.a.popup.closeCallback=d),n.a.popup.reloadCallback=function(){i.i(o.d)("reloadCallback"),t.invalid?i.i(r.c)():(setTimeout(function(){return i.i(r.c)(r.e)},5e3),i.i(r.e)()),o.b.set(a.a.registeredKey,Date.now(),{expires:a.a.registeredNextDelay}),n.a.popup.remove()},n.a.popup.show(),i.i(o.d)("👁"),t.invalid||o.b.set(a.a.showedKey,1,{expires:a.a.showedNextDelay}),t.invalid&&o.b.set(a.a.resubShowedKey,l&&l+1||1),u&&"function"==typeof u&&u();else{var f=function(){return n.a.Actions.init.showPopup({popupSettings:r.a.subscribe,showCallback:u,closeCallback:d})};n.a.settingsLoaded?f():i.i(r.b)(),n.a.settingsLoadedCb=f}}};t.a=u},function(e,t,i){"use strict";function n(){if(!v){if(v=!0,!("serviceWorker"in navigator))return i.i(l.d)("Service workers aren't supported in this browser."),void(v=!1);i.i(p.b)(function(){v=!1,m()})}}function o(){if(n(),v){var e=l.b.get(h.a.webpushShowed);return i.i(l.d)("webpushShowed",e),e?void i.i(l.d)("bailing out..."):(i.i(l.d)("permission",Notification.permission),"denied"===Notification.permission?void i.i(l.d)("bailing out..."):void(m=function(){return setTimeout(function(){return a()},3e3)}))}}function a(){if(v)return void(m=a);var e=p.a.webpush,t=e.url,n=e.width,o=e.height,d=e.outside_click_close;t&&n&&o&&(c.a.popup=i.i(f.a)({url:t,width:n,height:o,outside_click_close:d}),l.b.set(h.a.webpushShowed,1,{expires:h.a.webpushShowedTTL}),i.i(l.d)(h.a.webpushShowed,1),r({popup_type:1}),c.a.popup.closeCallback=function(){s({popup_type:1})},c.a.popup.reloadCallback=function(){u(),c.a.popup.remove()},"serviceWorker"in navigator&&c.a.popup.show())}function r(e){var t=e.userId,n=e.popup_type;$.post("https://api.mailfire.io/v1/webpush/attempt/"+c.a.project,{user_id:t&&+t||null,popup_type:n},function(){i.i(l.d)("attempt ok;","popup_type",n)})}function s(e){var t=e.popup_type;$.post("https://api.mailfire.io/v1/webpush/deny/"+c.a.project,{popup_type:t},function(){i.i(l.d)("deny ok;","popup_type",t)})}function u(){if(v)return void(m=u);i.i(l.d)(">> Permission",Notification.permission),c.a.userId?("default"===Notification.permission&&r({userId:c.a.userId,popup_type:2}),d()):i.i(p.c)(function(e){"default"===Notification.permission&&r({userId:e,popup_type:2}),d()})}function d(){Notification.requestPermission().then(function(e){i.i(l.d)(">> Permission",e),navigator.serviceWorker.ready.then(function(e){i.i(l.d)("serviceWorker.ready"),e.pushManager.subscribe({userVisibleOnly:!0}).then(function(e){var t={meta:{url:e.endpoint,public_key:i.i(l.f)(e.getKey("p256dh")),auth_token:i.i(l.f)(e.getKey("auth"))}};c.a.userId?t.user_id=+c.a.userId:t.hash=c.a.guestId,$.post("https://api.mailfire.io/v1/webpush/project/"+c.a.project,t,function(e){var t=e.data,n=t.push_user_id;if(n){i.i(l.d)("push_user_id",n),l.b.set("push_user_id",n);var o=new Date;o.setDate(o.getDate()+365),$.ajax({dataType:"jsonp",url:"https://n.mailfire.io/users/setcookie",data:{push_user_id:{value:n,expire:o.toUTCString()}},jsonp:"callback",success:function(e){i.i(l.d)(e)}})}})}).catch(function(e){"denied"===Notification.permission?(i.i(l.d)("Permission denied.",e),s({popup_type:2})):i.i(l.d)("Unable to subscribe to push.",e)})})}).catch(function(){return i.i(l.d)("FAILED")})}var c=i(0),p=i(3),l=i(1),f=i(4),h=i(2);t.a={init:n,auto:o,showPopup:a,subscribe:u};var m=function(){return null},v=!1},function(e,t,i){"use strict";function n(){if(!w){if(w=!0,!("serviceWorker"in navigator))return i.i(m.d)("Service workers aren't supported in this browser."),void(w=!1);i.i(m.a)("https://www.gstatic.com/firebasejs/4.5.0/firebase-app.js",function(){i.i(m.a)("https://www.gstatic.com/firebasejs/4.5.0/firebase-messaging.js",function(){navigator.serviceWorker.register(f.a.sw).then(function(e){e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active"),firebase.initializeApp({messagingSenderId:f.a.msgSenderId}),f.a.messaging=firebase.messaging(),f.a.messaging.useServiceWorker(e),i.i(h.b)(function(){w=!1,b()})})})})}}function o(){if(n(),w){var e=m.b.get(g.a.webpushShowed);return i.i(m.d)("webpushShowed",e),e?void i.i(m.d)("bailing out..."):(i.i(m.d)("permission",Notification.permission),"denied"===Notification.permission?void i.i(m.d)("bailing out..."):void(b=function(){return setTimeout(function(){return u()},3e3)}))}}function a(){if(w)return void(b=a);var e=h.a.webpush,t=e.url,n=e.width,o=e.height,d=e.outside_click_close;t&&n&&o&&(f.a.popup=i.i(v.a)({url:t,width:n,height:o,outside_click_close:d}),m.b.set(g.a.webpushShowed,1,{expires:g.a.webpushShowedTTL}),i.i(m.d)(g.a.webpushShowed,1),r({popup_type:1}),f.a.popup.closeCallback=function(){s({popup_type:1})},f.a.popup.reloadCallback=function(){u(),f.a.popup.remove()},"serviceWorker"in navigator&&f.a.popup.show())}function r(e){var t=e.userId,n=e.popup_type;$.post("https://api.mailfire.io/v1/webpush/attempt/"+f.a.project,{user_id:t&&+t||null,popup_type:n},function(){i.i(m.d)("attempt ok;","popup_type",n)})}function s(e){var t=e.popup_type;$.post("https://api.mailfire.io/v1/webpush/deny/"+f.a.project,{popup_type:t},function(){i.i(m.d)("deny ok;","popup_type",t)})}function u(){if(w)return void(b=u);i.i(m.d)(">> Permission",Notification.permission),f.a.userId?("default"===Notification.permission&&r({userId:f.a.userId,popup_type:2}),d()):i.i(h.c)(function(e){"default"===Notification.permission&&r({userId:e,popup_type:2}),d()})}function d(){Notification.requestPermission().then(function(e){i.i(m.d)(">> Permission",e),navigator.serviceWorker.ready.then(function(e){i.i(m.d)("serviceWorker.ready"),f.a.messaging.requestPermission().then(function(){f.a.messaging.getToken().then(function(e){i.i(m.d)(e),e?l(e):(i.i(m.d)("No Instance ID token available. Request permission to generate one."),p(!1))}).catch(function(e){i.i(m.d)("An error occurred while retrieving token.",e),p(!1)})}).catch(function(e){"denied"===Notification.permission&&(i.i(m.d)("Permission denied.",e),s({popup_type:2}))})})}).catch(function(){return i.i(m.d)("FAILED")})}function c(e){return window.localStorage.getItem("sentFirebaseMessagingToken")===e}function p(e){window.localStorage.setItem("sentFirebaseMessagingToken",e||"")}function l(e){if(!c(e)){i.i(m.d)("Sending token to server...");var t={fcm_meta:{token:e}};f.a.userId?t.user_id=+f.a.userId:t.hash=f.a.guestId,$.post("https://api.mailfire.io/v1/webpush/project/"+f.a.project,t,function(e){var t=e.data,n=t.push_user_id;if(n){i.i(m.d)("push_user_id",n),m.b.set("push_user_id",n);var o=new Date;o.setDate(o.getDate()+365),$.ajax({dataType:"jsonp",url:"https://n.mailfire.io/users/setcookie",data:{push_user_id:{value:n,expire:o.toUTCString()}},jsonp:"callback",success:function(e){i.i(m.d)(e)}})}}),p(e)}}var f=i(0),h=i(3),m=i(1),v=i(4),g=i(2);t.a={init:n,auto:o,showPopup:a,subscribe:u};var b=function(){return null},w=!1},function(e,t,i){"use strict";var n=i(1),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,o=e.width,a=void 0===o?"100%":o,r=e.height,s=void 0===r?"245px":r,u=e.outside_click_close,d=document.body,c=document.createElement("style");c.textContent="\n    .mf-bg {\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: 99999999;\n      opacity: 0;\n      position: fixed;\n      background: rgba(0,0,0,0.7);\n      transition: opacity 1s ease;\n    }\n    .mf-wrapper {\n      width: "+(+a&&a+"px"||a)+";\n      height: "+(+s&&s+"px"||s)+";\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      position: absolute;\n      min-width: 320px;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ";var p=document.createElement("div");p.className="mf-bg";var l=document.createElement("div");l.className="mf-wrapper";var f=document.createElement("iframe");f.className="mf-iframe",f.src=t,f.scrolling="no",f.name="guestFrame",$(window).resize(function(){return i.i(n.e)(a,s)});var h={closeCallback:!1,show:function(){var e=this;d.appendChild(c),d.appendChild(p),p.appendChild(l),l.appendChild(f),f.addEventListener("load",function(){p.style.opacity=1,f.addEventListener("load",function(){e.reloadCallback&&e.reloadCallback()},!1)},!1),i.i(n.e)(a,s)},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action;this.closeCallback&&"close"===t&&this.closeCallback(),this.closeCallback=!1,p.style.opacity=0,setTimeout(function(){p.parentNode&&d.removeChild(p)},1e3)}};return u&&p.addEventListener("click",function(){return h.remove({action:"close"}),!1},!1),h};t.a=o},function(e,t,i){"use strict";var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,i=e.width,n=void 0===i?"100%":i,o=e.height,a=void 0===o?"245px":o,r=document.body,s=window.matchMedia("(max-width: 1400px)"),u=window.matchMedia("(max-width: 990px)"),d=window.matchMedia("(max-width: 735px)"),c=function(){return d.matches?"all 0.3s":"all 0.4s"},p=function(){return d.matches?"0px":u.matches?"-75px":s.matches?"-120px":"-182px"},l=document.createElement("style");l.textContent="\n    .mf-popup {\n      width: "+(+n&&n+"px"||n)+";\n      height: "+(+a&&a+"px"||a)+";\n      bottom: -250px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      z-index: 99999999;\n      position: fixed;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ";var f=document.createElement("div");f.className="mf-popup";var h=document.createElement("iframe");return h.className="mf-iframe",h.src=t,h.scrolling="no",h.name="guestFrame",window.addEventListener("resize",function(){f.style.bottom=p()},!1),{closeCallback:!1,show:function(){var e=this;r.appendChild(l),r.appendChild(f),f.appendChild(h),h.addEventListener("load",function(){f.style.bottom=p(),f.style.transition="all .5s cubic-bezier(0.06, 0.88, 0.26, 1.18)",h.addEventListener("load",function(){e.reloadCallback&&e.reloadCallback()},!1)},!1)},remove:function(){var e=this;f.style.bottom="-250px",f.style.transition=c(),setTimeout(function(){e.closeCallback&&e.closeCallback(),e.closeCallback=!1,f.parentNode&&r.removeChild(f),l.parentNode&&r.removeChild(l)},500)}}};t.a=n},function(e,t,i){"use strict";var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,i=e.width,n=void 0===i?"100%":i,o=e.height,a=void 0===o?"245px":o,r=document.body,s=window.matchMedia("(max-width: 1400px)"),u=window.matchMedia("(max-width: 990px)"),d=window.matchMedia("(max-width: 735px)"),c=window.matchMedia("(max-width: 360px)"),p=function(){return d.matches?"all 0.3s":"all 0.4s"},l=function(){return c.matches?"0px":d.matches?"-15px":u.matches?"-70px":s.matches?"-125px":"-170px"},f=document.createElement("style");f.textContent="\n    .mf-popup {\n      width: "+(+n&&n+"px"||n)+";\n      height: "+(+a&&a+"px"||a)+";\n      top: -305px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      z-index: 10;\n      position: fixed;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ";var h=document.createElement("div");h.className="mf-popup";var m=document.createElement("iframe");return m.className="mf-iframe",m.src=t,m.scrolling="no",m.name="guestFrame",window.addEventListener("resize",function(){h.style.top=l()},!1),{closeCallback:!1,show:function(){var e=this;r.appendChild(f),r.appendChild(h),h.appendChild(m),m.addEventListener("load",function(){h.style.top=l(),h.style.transition="all .5s cubic-bezier(0.06, 0.88, 0.26, 1.18)",m.addEventListener("load",function(){e.reloadCallback&&e.reloadCallback()},!1)},!1)},remove:function(){var e=this;h.style.top="-305px",h.style.transition=p(),setTimeout(function(){e.closeCallback&&e.closeCallback(),e.closeCallback=!1,h.parentNode&&r.removeChild(h),f.parentNode&&r.removeChild(f)},500)}}};t.a=n},function(e,t,i){"use strict";function n(e){"undefined"!=typeof Storage&&(o.a.debug="true"===localStorage.getItem("mf-debug"));var t=window[window._mf_object_name];o.a.Actions={init:r.a,webpush:s.a,webpushfcm:u.a,email:d.a},o.a.project=t.project,o.a.msgSenderId=t.msgSenderId,o.a.sw=t.sw,o.a.apiRoot=t.api||"https://n.mailfire.io/",o.a.testPopup=t.testPopup||!1,o.a.env=t.env||"prod",o.a.popupName=t.popupName,o.a.userId=a.b.get("user_id"),window.mf=function(e,t,i){o.a.Actions[e][t].call(this,i)};for(var i in t.q)if(t.q.hasOwnProperty(i)){var n=t.q[i][0],c=t.q[i][1],p=t.q[i][2];o.a.Actions[n][c](p)}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(0),a=i(1),r=i(6),s=i(7),u=i(8),d=i(5);void 0!==window.jQuery?jQuery(function(){return n(jQuery)}):i.i(a.a)("https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js",function(){return Zepto(function(){return n(Zepto)})})}]);