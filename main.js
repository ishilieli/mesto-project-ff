(()=>{"use strict";function t(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")}),0),t.addEventListener("click",r),document.addEventListener("keydown",r)}function e(t){t.classList.remove("popup_is-opened"),setTimeout((function(){t.classList.remove("popup_is-animated")}),700),t.removeEventListener("click",r),document.removeEventListener("keydown",r)}function n(t,e){e.submitter.textContent=t?"Сохранение...":"Сохранить"}function r(t){"Escape"===t.key&&e(document.querySelector(".popup_is-opened")),t.target===t.currentTarget&&e(document.querySelector(".popup_is-opened"))}var o,i,a=document.querySelector(".places__list"),u=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__title"),l=document.querySelector(".profile__description"),d=document.querySelector(".profile__image"),p=document.querySelector(".popup__image"),f=document.querySelector(".popup__caption"),y=document.querySelector(".popup_type_image"),m=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_edit-avatar"),h=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup__close"),_=document.forms.edit_profile,g=document.forms.new_place,S=document.forms.avatar,k=document.querySelector(".popup_type_delete-card"),E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"},L=document.querySelector("#card-template").content;function C(e,n,r,a,u){var c=L.querySelector(".places__item").cloneNode(!0),s=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),d=c.querySelector(".card__image"),p=c.querySelector(".like-count");return c.id=e._id,c.querySelector(".card__title").textContent=e.name,Object.assign(d,{src:e.link,alt:e.name}),e.likes.forEach((function(t){t._id===u&&l.classList.add("card__like-button_is-active")})),u!==e.owner._id?s.style.display="none":s.addEventListener("click",(function(n){o=e._id,i=n.target.closest(".card"),t(k)})),l.addEventListener("click",(function(t){return r(t,p,e._id)})),d.addEventListener("click",(function(){return a(e)})),p.textContent=e.likes.length,c}function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!=q(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==q(e)?e:e+""}var P=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formSelector=e.formSelector,this.inputSelector=e.inputSelector,this.submitButtonSelector=e.submitButtonSelector,this.btn=n.querySelector(this.submitButtonSelector),this.inactiveButtonClass=e.inactiveButtonClass,this.inputErrorClass=e.inputErrorClass,this.errorClass=e.errorClass,this.inputList=Array.from(n.querySelectorAll(this.inputSelector))},(e=[{key:"showInputError",value:function(t,e){var n=t.nextElementSibling;t.classList.add(this.inputErrorClass),n.classList.add(this.errorClass),n.textContent=e}},{key:"hideInputError",value:function(t){var e=t.nextElementSibling;t.classList.remove(this.inputErrorClass),e.classList.remove(this.errorClass),e.textContent=""}},{key:"checkInputValidity",value:function(t){var e=t.validity.patternMismatch?t.dataset.errorMessage:t.validationMessage;t.validity.valid?this.hideInputError(t):this.showInputError(t,e)}},{key:"setEventListeners",value:function(){var t=this;this.inputList.forEach((function(e){e.addEventListener("input",(function(){t.checkInputValidity(e),t.toggleButtonState(e)}))}))}},{key:"toggleButtonState",value:function(){this.hasInvalidInput(this.inputList)?(this.btn.classList.add(this.inactiveButtonClass),this.btn.disabled=!0):(this.btn.classList.remove(this.inactiveButtonClass),this.btn.disabled=!1)}},{key:"enableValidation",value:function(){this.setEventListeners()}},{key:"hasInvalidInput",value:function(){return this.inputList.some((function(t){return!t.validity.valid}))}},{key:"resetValidity",value:function(){var t=this;this.inputList.forEach((function(e){t.hideInputError(e)}))}}])&&w(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function T(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var I=function(){return t=function t(e,n){var r,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},(o=T(o="getResponseStatus"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this.link=e,this.headers=n},(e=[{key:"request",value:function(t,e){return fetch(t,e).then(this.getResponseStatus)}},{key:"setAvatar",value:function(t){return this.request("".concat(this.link,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})})}},{key:"getUserData",value:function(){return this.request("".concat(this.link,"/users/me"),{headers:this.headers})}},{key:"editProfile",value:function(t,e){return this.request("".concat(this.link,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:e})})}},{key:"getCardsData",value:function(){return this.request("".concat(this.link,"/cards"),{headers:this.headers})}},{key:"createUserCard",value:function(t){return this.request("".concat(this.link,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify(t)})}},{key:"deleteUserCard",value:function(t){return this.request("".concat(this.link,"/cards/").concat(t),{headers:this.headers,method:"DELETE"})}},{key:"toggleLike",value:function(t,e){return this.request("".concat(this.link,"/cards/likes/").concat(t),{method:"".concat(e),headers:this.headers})}}])&&O(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var B=new P(E,g),D=new P(E,_),U=new P(E,S),V=new I("https://nomoreparties.co/v1/wff-cohort-12",{authorization:"4165abdf-9d84-4bb7-8232-d514d6fbef88","Content-Type":"application/json"});function M(e){t(y),Object.assign(p,{src:e.link,alt:e.name}),f.textContent=e.name}function N(t,e,n){(t.target.classList.contains("card__like-button_is-active")?V.toggleLike(n,"DELETE"):V.toggleLike(n,"PUT")).then((function(n){t.target.classList.toggle("card__like-button_is-active"),e.textContent=n.likes.length})).catch((function(t){return console.log(t)}))}B.enableValidation(),D.enableValidation(),U.enableValidation(),Promise.all([V.getCardsData(),V.getUserData()]).then((function(t){var e,n,r,o=(r=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(n,r)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];d.style["background-image"]='url("'.concat(u.avatar,'")'),e=u,s.textContent=e.name,l.textContent=e.about,d.style["background-image"]='url("'.concat(e.avatar,'")'),_.name.value=e.name,_.description.value=e.about,i.forEach((function(t){return function(t,e,n,r,o){a.append(C(t,0,n,r,o))}(t,0,N,M,u._id)}))})).catch((function(t){return console.log(t)})),b.forEach((function(t){var n=t.closest(".popup");t.addEventListener("click",(function(){return e(n)}))})),_.addEventListener("submit",(function(t){t.preventDefault();var r={name:_.name.value,about:_.description.value};n(!0,t),V.editProfile(r.name,r.about).then((function(t){s.textContent=t.name,l.textContent=t.about,e(m)})).catch((function(t){return console.log(t)})).finally((function(){return n(!1,t)}))})),g.addEventListener("submit",(function(t){t.preventDefault(),n(!0,t);var r={name:t.target.place.value,link:t.target.link.value,likes:[]};V.createUserCard(r).then((function(t){a.prepend(C(t,0,N,M,t.owner._id)),e(h),g.reset()})).finally((function(){return n(!1,t)}))})),S.addEventListener("submit",(function(t){t.preventDefault(),n(!0,t),V.setAvatar(S.link.value).then((function(t){d.style["background-image"]='url("'.concat(t.avatar,'")'),e(v),S.reset()})).catch((function(t){return console.log(t)})).finally((function(){return n(!1,t)}))})),k.addEventListener("submit",(function(t){t.preventDefault(),V.deleteUserCard(o).then((function(){e(k),function(t){t.remove()}(i)})).catch((function(t){return console.log(t)}))})),d.addEventListener("click",(function(e){t(v),U.toggleButtonState()})),u.addEventListener("click",(function(){t(h),B.toggleButtonState()})),c.addEventListener("click",(function(){t(m),_.name.value=s.textContent,_.description.value=l.textContent,D.resetValidity()}))})();