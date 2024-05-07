(()=>{"use strict";function t(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")}),0),t.addEventListener("click",r),document.addEventListener("keydown",r)}function e(t){t.classList.remove("popup_is-opened"),setTimeout((function(){t.classList.remove("popup_is-animated")}),700),t.removeEventListener("click",r),document.removeEventListener("keydown",r)}function n(t,e){e.submitter.textContent=t?"Сохранение...":"Сохранить"}function r(t){"Escape"===t.key&&e(document.querySelector(".popup_is-opened")),t.target===t.currentTarget&&e(document.querySelector(".popup_is-opened"))}var o=document.querySelector(".places__list"),i=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__title"),u=document.querySelector(".profile__description"),s=document.querySelector(".profile__image"),l=document.querySelector(".popup__image"),d=document.querySelector(".popup__caption"),p=document.querySelector(".popup_type_image"),f=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_edit-avatar"),v=document.querySelector(".popup_type_new-card"),h=document.querySelectorAll(".popup__close"),y=document.forms.edit_profile,b=document.forms.new_place,_=document.forms.avatar,S=document.querySelector(".popup_type_delete-card"),g={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"},E={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"4165abdf-9d84-4bb7-8232-d514d6fbef88","Content-Type":"application/json"}},k=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))};function L(t,e){return fetch("".concat(E.baseUrl,"/cards/likes/").concat(t),{method:"".concat(e),headers:E.headers}).then((function(t){return k(t)}))}var C=document.querySelector("#card-template").content;function q(n,r,o,i,a){var c=C.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__delete-button"),s=c.querySelector(".card__like-button"),l=c.querySelector(".card__image"),d=c.querySelector(".like-count");return c.id=n._id,c.querySelector(".card__title").textContent=n.name,Object.assign(l,{src:n.link,alt:n.name}),n.likes.forEach((function(t){t._id===a&&s.classList.add("card__like-button_is-active")})),a!==n.owner._id?u.style.display="none":u.addEventListener("click",(function(){t(S),S.dataset.cardId=n._id,S.addEventListener("submit",(function(t){var n,r,o;t.preventDefault(),r=S,(n=c).remove(),(o=n.id,fetch("".concat(E.baseUrl,"/cards/").concat(o),{headers:E.headers,method:"DELETE"}).then((function(t){return k(t)}))).then((function(){e(r),n.remove()})).catch((function(t){return console.log(t)}))}))})),s.addEventListener("click",(function(t){return o(c,t)})),l.addEventListener("click",(function(){return i(n)})),d.textContent=n.likes.length,c}function w(t,e){e.target.classList.toggle("card__like-button_is-active"),(e.target.classList.contains("card__like-button_is-active")?L(t.id,"PUT"):L(t.id,"DELETE")).then((function(e){t.querySelector(".like-count").textContent=e.likes.length})).catch((function(t){return console.log(t)}))}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var T=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formSelector=e.formSelector,this.inputSelector=e.inputSelector,this.submitButtonSelector=e.submitButtonSelector,this.btn=n.querySelector(this.submitButtonSelector),this.inactiveButtonClass=e.inactiveButtonClass,this.inputErrorClass=e.inputErrorClass,this.errorClass=e.errorClass,this.inputList=Array.from(n.querySelectorAll(this.inputSelector))},(e=[{key:"showInputError",value:function(t,e){var n=t.nextElementSibling;t.classList.add(this.inputErrorClass),n.classList.add(this.errorClass),n.textContent=e}},{key:"hideInputError",value:function(t){var e=t.nextElementSibling;t.classList.remove(this.inputErrorClass),e.classList.remove(this.errorClass),e.textContent=""}},{key:"checkInputValidity",value:function(t){var e=t.validity.patternMismatch?t.dataset.errorMessage:t.validationMessage;t.validity.valid?this.hideInputError(t):this.showInputError(t,e)}},{key:"setEventListeners",value:function(){var t=this;this.inputList.forEach((function(e){e.addEventListener("input",(function(){t.checkInputValidity(e),t.toggleButtonState(e)}))}))}},{key:"toggleButtonState",value:function(){this.hasInvalidInput(this.inputList)?(this.btn.classList.add(this.inactiveButtonClass),this.btn.disabled=!0):(this.btn.classList.remove(this.inactiveButtonClass),this.btn.disabled=!1)}},{key:"enableValidation",value:function(){this.setEventListeners()}},{key:"hasInvalidInput",value:function(){return this.inputList.some((function(t){return!t.validity.valid}))}},{key:"resetValidity",value:function(){var t=this;this.inputList.forEach((function(e){t.hideInputError(e)}))}}])&&I(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O=new T(g,b),A=new T(g,y),P=new T(g,_);function U(e){t(p),Object.assign(l,{src:e.link,alt:e.name}),d.textContent=e.name}O.enableValidation(),A.enableValidation(),P.enableValidation(),Promise.all([fetch("".concat(E.baseUrl,"/cards"),{headers:E.headers}).then((function(t){return k(t)})),fetch("".concat(E.baseUrl,"/users/me"),{headers:E.headers}).then((function(t){return k(t)}))]).then((function(t){var e,n,r,i=(r=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(n,r)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],l=i[1];s.style["background-image"]='url("'.concat(l.avatar,'")'),e=l,c.textContent=e.name,u.textContent=e.about,s.style["background-image"]='url("'.concat(e.avatar,'")'),y.name.value=e.name,y.description.value=e.about,a.forEach((function(t){return function(t,e,n,r,i){o.append(q(t,0,n,r,i))}(t,0,w,U,l._id)}))})).catch((function(t){return console.log(t)})),h.forEach((function(t){var n=t.closest(".popup");t.addEventListener("click",(function(){return e(n)}))})),y.addEventListener("submit",(function(t){t.preventDefault();var r,o,i={name:y.name.value,about:y.description.value};n(!0,t),(r=i.name,o=i.about,fetch("".concat(E.baseUrl,"/users/me"),{method:"PATCH",headers:E.headers,body:JSON.stringify({name:r,about:o})}).then((function(t){return k(t)}))).then((function(t){c.textContent=t.name,u.textContent=t.about})).catch((function(t){return console.log(t)})).finally((function(){n(!1,t),e(f)}))})),b.addEventListener("submit",(function(t){var r;t.preventDefault(),n(!0,t),(r={name:t.target.place.value,link:t.target.link.value,likes:[]},fetch("".concat(E.baseUrl,"/cards"),{headers:E.headers,method:"POST",body:JSON.stringify(r)}).then((function(t){return k(t)}))).then((function(t){return o.prepend(q(t,0,w,U,t.owner._id))})).finally((function(){n(!1,t),e(v),b.reset()}))})),_.addEventListener("submit",(function(t){var r;t.preventDefault(),n(!0,t),(r=_.link.value,fetch("".concat(E.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:E.headers,body:JSON.stringify({avatar:r})}).then((function(t){return k(t)}))).then((function(t){return s.style["background-image"]='url("'.concat(t.avatar,'")')})).catch((function(t){return console.log(t)})).finally((function(){n(!1,t),e(m),_.reset()}))})),s.addEventListener("click",(function(e){t(m)})),i.addEventListener("click",(function(){t(v),O.toggleButtonState()})),a.addEventListener("click",(function(){t(f),y.name.value=c.textContent,y.description.value=u.textContent,A.resetValidity()}))})();