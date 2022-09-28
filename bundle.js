(()=>{"use strict";var n={760:(n,r,e)=>{e.d(r,{Z:()=>l});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"body {\r\n   font-family: Inter, sans-serif;\r\n   background-color: #000;\r\n   color: #fff;\r\n   box-sizing: border-box;\r\n   display: flex;\r\n   flex-direction: column;\r\n   height: 100%;\r\n}\r\n\r\n.hidden {\r\n   overflow: hidden;\r\n}\r\n\r\n\r\n\r\n\r\nbutton {\r\n   background-color: #000;\r\n   border: none;\r\n}\r\n\r\n.container {\r\n   max-width: 880px;\r\n   margin: 0 auto;\r\n}\r\n\r\n.header__name {\r\n   font-size: 30px;\r\n   font-weight: 500;\r\n}\r\n\r\n.header__location {\r\n   font-size: 12px;\r\n   vertical-align: top;\r\n}\r\n\r\n.header {\r\n   max-width: 880px;\r\n   margin: 45px auto 80px;\r\n   position: relative;\r\n}\r\n\r\n\r\n.header::after {\r\n   content: '';\r\n   position: absolute;\r\n   width: 100%;\r\n   height: 1px;\r\n   background-color: #545454;\r\n   margin-top: 40px;\r\n}\r\n\r\n.profile__container {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   flex-wrap: wrap;\r\n}\r\n\r\n.profile__info {\r\n   display: flex;\r\n   align-items: center;\r\n}\r\n\r\n.infoText__name {\r\n   font-weight: 500;\r\n   font-size: 42px;\r\n   margin: 0 0 14px 0;\r\n   display: flex;\r\n   flex-direction: row;\r\n   align-items: center;\r\n   white-space: wrap;\r\n}\r\n\r\n.infoText__desc {\r\n   font-weight: 400;\r\n   font-size: 18px;\r\n}\r\n\r\n.info__change {\r\n   background-color: #000;\r\n   border: 1px solid #fff;\r\n   margin: 0;\r\n   padding: 0;\r\n   box-sizing: border-box;\r\n   min-width: 24px;\r\n   min-height: 24px;\r\n   margin-left: 18px;\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.profile__add {\r\n   border: 2px solid #fff;\r\n   width: 150px;\r\n   height: 50px;\r\n   cursor: pointer;\r\n   margin: 0 0 0 20px;\r\n}\r\n\r\n.profile__add:hover,\r\n.desc__favorite:hover,\r\n.info__change:hover,\r\n.close-modal:hover,\r\n.close-button:hover {\r\n   opacity: 0.5;\r\n   transition: 0.3s;\r\n}\r\n\r\n\r\n.photo {\r\n   width: 120px;\r\n   height: 120px;\r\n   border-radius: 100px;\r\n   margin: 0 30px 0 0;\r\n}\r\n\r\n.posts {\r\n   display: flex;\r\n   flex-direction: row;\r\n   flex-wrap: wrap;\r\n}\r\n\r\n.post__item {\r\n   color: #000;\r\n   background-color: #fff;\r\n   max-width: 282px;\r\n   border-radius: 10px;\r\n   overflow: hidden;\r\n   margin: 10px 5px;\r\n   position: relative;\r\n}\r\n\r\n.item__photo {\r\n   width: 282px;\r\n   height: 282px;\r\n   overflow: hidden;\r\n   align-items: center;\r\n   cursor: pointer;\r\n   border: none;\r\n}\r\n\r\n.item__photo-img {\r\n   height: 282px;\r\n   width: 282px;\r\n}\r\n\r\n.item__desc {\r\n   display: flex;\r\n   flex-direction: row;\r\n   align-items: center;\r\n   justify-content: space-between;\r\n   padding: 25px 15px;\r\n}\r\n\r\n.desc__favorite {\r\n   background-color: #fff;\r\n   cursor: pointer;\r\n}\r\n\r\n.cart-buttons {\r\n   background-color: #fff;\r\n}\r\n\r\n.close-button {\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.desc__name {\r\n   font-weight: 900;\r\n   font-size: 24px;\r\n}\r\n\r\n.profile {\r\n   margin: 0 0 45px 0;\r\n}\r\n\r\n\r\n\r\n\r\n.module {\r\n   max-width: 430px;\r\n   margin: 0 auto;\r\n   color: #000;\r\n   border-radius: 10px;\r\n   background-color: #fff;\r\n}\r\n\r\n.modal-fullImage {\r\n   display: none;\r\n}\r\n\r\n.module-profile {\r\n   position: absolute;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   left: 0;\r\n   right: 0;\r\n   margin-top: 150px;\r\n   display: none;\r\n}\r\n\r\n.module-post {\r\n   position: absolute;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   left: 0;\r\n   right: 0;\r\n   margin-top: 150px;\r\n   display: none;\r\n}\r\n\r\n\r\n.module__container {\r\n   display: flex;\r\n   flex-direction: column;\r\n   max-width: 358px;\r\n   margin: 0 auto;\r\n   position: relative;\r\n}\r\n\r\n.module__title {\r\n   font-weight: 900;\r\n   font-size: 24px;\r\n   margin: 34px 0 54px 0;\r\n   text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.wrapper__dark {\r\n   width: 100vw;\r\n   height: 100vh;\r\n   background-color: rgb(0, 0, 0, 0.8);\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   z-index: 99;\r\n   display: none;\r\n}\r\n\r\n.module__input {\r\n   text-decoration: none;\r\n   margin: 0 0 43px 0;\r\n   border: none;\r\n   border-bottom: 1px solid rgba(0, 0, 0, 0.3);\r\n   padding: 0 0 13px 0;\r\n   box-shadow: none\r\n}\r\n\r\ninput:focus {\r\n   outline: 0;\r\n   border-bottom: 1px solid rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.module__save {\r\n   background: #000;\r\n   color: #fff;\r\n   height: 50px;\r\n   width: 100%;\r\n   margin: 0 0 37px 0;\r\n   text-align: center;\r\n   cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n   display: none;\r\n}\r\n\r\n.close-icon {\r\n   position: absolute;\r\n   z-index: 50;\r\n   margin: 22px 15px;\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n.close-modal {\r\n   position: absolute;\r\n   top: -40px;\r\n   right: -70px;\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.modal-fullImage__container {\r\n   margin: 100px auto;\r\n   max-width: 80vw;\r\n   background-color: transparent;\r\n   z-index: 200;\r\n   position: relative;\r\n}\r\n\r\n.close-modalFullImage {\r\n   position: absolute;\r\n   top: -40px;\r\n   right: -40px;\r\n}\r\n\r\n.modal-image {\r\n   height: 80vh;\r\n   width: 80vw;\r\n   margin: 0;\r\n   padding: 0;\r\n}\r\n\r\nfooter {\r\n   flex: 0 0 auto;\r\n}\r\n\r\n.footer_container {\r\n   color: #545454;\r\n   padding-top: 60px;\r\n   padding-bottom: 60px;\r\n}\r\n\r\n@media (max-width:900px) {\r\n   .posts {\r\n      max-width: 620px;\r\n\r\n   }\r\n\r\n   .profile__button {\r\n      width: 282px;\r\n      display: flex;\r\n   }\r\n\r\n   .post__item {\r\n      margin: 10px 14px;\r\n   }\r\n\r\n   .profile__add {\r\n      width: 100%;\r\n      margin: 30px 0 0 0;\r\n   }\r\n\r\n\r\n\r\n   .profile__container {\r\n      align-items: center;\r\n      justify-content: center;\r\n      flex-wrap: wrap;\r\n   }\r\n\r\n   .container {\r\n      max-width: 620px;\r\n      margin: 0 auto;\r\n   }\r\n\r\n}\r\n\r\n\r\n@media (max-width:640px) {\r\n   .posts {\r\n      max-width: 420px;\r\n      display: flex;\r\n      justify-content: center;\r\n   }\r\n\r\n   .module {\r\n      max-width: 220px;\r\n   }\r\n\r\n   .module__input {\r\n      margin: 0 5px 43px 5px;\r\n      padding: 0 0 7px 0;\r\n      font-size: 12px;\r\n   }\r\n\r\n   .module__title {\r\n      font-size: 20px;\r\n   }\r\n\r\n   .profile__button {\r\n      width: 282px;\r\n      display: flex;\r\n   }\r\n\r\n\r\n   .profile__add {\r\n      width: 100%;\r\n      margin: 30px 0 0 0;\r\n   }\r\n\r\n\r\n   .post__item {\r\n      margin: 20px 0;\r\n   }\r\n\r\n   .profile__container {\r\n      align-items: center;\r\n      justify-content: center;\r\n      flex-wrap: wrap;\r\n   }\r\n\r\n   .container {\r\n      max-width: 420px;\r\n      margin: 0 auto;\r\n   }\r\n\r\n   .profile__info {\r\n      display: flex;\r\n      flex-direction: column;\r\n   }\r\n\r\n}",""]);const l=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],s=t.base?c[0]+t.base:c[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=l,r.splice(l,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=e(i[a]);r[l].references--}for(var c=t(n,o),s=0;s<i.length;s++){var d=e(i[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),l=e(565),c=e.n(l),s=e(216),d=e.n(s),p=e(589),u=e.n(p),f=e(760),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var g=function(){return g=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},g.apply(this,arguments)},x=document.querySelector(".wrapper__dark"),v=document.querySelector("html"),h=document.querySelector(".posts"),y=document.querySelector(".module__save-profile"),_=document.querySelector(".module__save-post"),w=document.querySelector(".info__change"),b=document.querySelector(".profile__add"),S=document.querySelector(".close-modalProfile"),k=document.querySelector(".close-modalPost"),L=document.querySelector(".close-modalFullImage"),C=document.querySelector(".inputName"),I=document.querySelector(".inputDesc"),E=document.querySelector(".inputImgUrl"),q=document.querySelector(".inputImage"),T=document.querySelector(".inputCity"),M=document.querySelector(".infoText__name-text"),O=document.querySelector(".infoText__desc-text"),N=document.querySelector(".photo"),z=document.querySelector(".module-profile"),J=document.querySelector(".module-post"),j=document.querySelector(".modal-fullImage"),Z=document.querySelector(".modal-image"),H=function(){var n=localStorage.getItem("profile");if(n){var r=JSON.parse(n);M.textContent=r.name,O.textContent=r.desc,N.src=r.image,C.value=r.name,I.value=r.desc,E.value=r.image}},P=function(){q&&T&&(q.value="",T.value="")},A=function(){var n=localStorage.getItem("posts");if(h&&n){h.innerHTML="";var r=JSON.parse(n);r?r.forEach((function(n){G(h,function(n,r,e,t){var o=document.createElement("div");o.classList.add("itemId".concat(e)),o.classList.add("post__item");var i=document.createElement("div");i.classList.add("item__photo"),o.append(i);var a=document.createElement("img");a.classList.add("item__photo-img"),a.src=r,a.alt="photo",i.append(a);var l=document.createElement("div");l.classList.add("item__desc"),o.append(l);var c=document.createElement("span");c.classList.add("desc__name"),c.textContent=n,l.append(c);var s=document.createElement("div");l.append(s);var d=document.createElement("button");d.classList.add("cart-buttons","close-button"),d.innerHTML='\n   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" focusable="false" viewBox="0 0 12 12">\n  <path class=\'close-icon\' fill="none" stroke="currentColor" stroke-linecap="round" d="M4.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M2 2.5h8m-5.5 7V5m3 4.5V5m-5-.5V11c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5V4.5"/>\n</svg>\n   ',s.append(d);var p=document.createElement("button");return p.classList.add("desc__favorite","cart-buttons"),p.innerHTML='\n   <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n   // <path class=\'like-icon\' fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>\n   // </svg>\n   ',s.append(p),o}(n.name,n.image,n.id,n.liked));var r=document.querySelector(".itemId".concat(n.id," .close-button"));r&&r.addEventListener("click",(function(){return V(n.id)}));var e=document.querySelector(".itemId".concat(n.id," .desc__favorite"));e&&(e.addEventListener("click",(function(){return B(n.id)})),n.liked?e.innerHTML='\n<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>\n</svg>\n':e.innerHTML='\n                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z" fill="black"/>\n</svg>\n');var t=document.querySelector(".itemId".concat(n.id," .item__photo"));t&&t.addEventListener("click",(function(){return D(n.id)}))})):h.innerHTML="Загрузите свою первую фотографию."}},V=function(n){var r=localStorage.getItem("posts");if(r){var e=JSON.parse(r).filter((function(r){return n!==r.id}));localStorage.setItem("posts",JSON.stringify(e)),A()}},B=function(n){var r=localStorage.getItem("posts");if(r){var e=JSON.parse(r).map((function(r){return n===r.id?g(g({},r),{liked:!r.liked}):r}));localStorage.setItem("posts",JSON.stringify(e)),A()}},D=function(n){var r=localStorage.getItem("posts");if(r&&Z){var e=JSON.parse(r);console.log(e),console.log(n),e.filter((function(r){r.id===n&&(Z.style.background="url(".concat(r.image,") no-repeat center"),Z.style.backgroundSize="contain",console.log(r.image))})),F()}},F=function(){j&&x&&(j.style.display="block",x.style.display="block",R("hidden"))},U=function(){z.style.display="none",J.style.display="none",j.style.display="none",x.style.display="none",R("scroll")},R=function(n){v.style.overflow=n},G=function(n,r){n.append(r)};b&&b.addEventListener("click",(function(){x&&(x.style.display="block",J&&(J.style.display="block"))})),_&&_.addEventListener("click",(function(){x&&(x.style.display="none",function(){if(C&&E){var n=localStorage.getItem("posts");if(n){var r=JSON.parse(n),e=(new Date).getTime();r.push({id:e,name:T.value,image:q.value,liked:!1}),localStorage.setItem("posts",JSON.stringify(r)),A()}else r=[],e=(new Date).getTime(),r.push({id:e,name:T.value,image:q.value,liked:!1}),localStorage.setItem("posts",JSON.stringify(r)),A()}}(),U(),P())})),y&&y.addEventListener("click",(function(){var n;x&&(x.style.display="none",U(),(n=function(){if(C&&I&&E||M&&O&&N){var n={name:C.value||M.textContent,desc:I.value||O.textContent,image:E.value||N.src};return C.value=M.textContent,I.value=O.textContent,E.value=N.src,n}}())&&(localStorage.setItem("profile",JSON.stringify(n)),H()),P())})),w&&w.addEventListener("click",(function(){x&&(x.style.display="block",z&&(z.style.display="block"))})),S&&S.addEventListener("click",U),k&&k.addEventListener("click",U),L&&L.addEventListener("click",U),S&&S.addEventListener("click",U),z&&x.addEventListener("mousedown",(function(n){n.target===x&&(z.style.display="none",J.style.display="none",j.style.display="none",x.style.display="none",R("scroll"))})),window.onload=function(){A(),H()}})()})();