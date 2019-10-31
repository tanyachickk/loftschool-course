(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{493:function(e,t,r){},494:function(e,t,r){},495:function(e,t,r){},496:function(e,t,r){},520:function(e,t,r){"use strict";var i=r(493);r.n(i).a},521:function(e,t,r){"use strict";var i=r(494);r.n(i).a},522:function(e,t,r){"use strict";var i=r(495);r.n(i).a},523:function(e,t,r){"use strict";var i=r(496);r.n(i).a},526:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews-page"},[r("div",{staticClass:"reviews-page__title"},[r("page-title")],1),e.isShowForm?r("div",{ref:"form",staticClass:"reviews-page__form"},[r("review-form",{attrs:{"current-review":e.currentReview},on:{reset:e.cancelReviewChanges,create:e.createNewReview,update:e.updateCurrentReview}})],1):e._e(),r("div",{staticClass:"reviews-page__grid"},[r("card-gradient-button",{staticClass:"reviews-page__item",attrs:{"is-disabled":e.isShowForm&&!e.currentReview},on:{click:e.addReview}},[e._v("Добавить "),r("br"),e._v(" отзыв")]),e._l(e.reviews,function(t){return r("review-item",{key:t.id,staticClass:"reviews-page__item",attrs:{review:t,"is-active":t===e.currentReview},on:{edit:function(r){return e.editReview(t)},delete:function(r){return e.deleteReview(t.id)}}})})],2)])};i._withStripped=!0;var a=r(67),n=r(468),s=r(498),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("card",{staticClass:"new-review"},[r("div",{staticClass:"new-review__header",attrs:{slot:"title"},slot:"title"},[e._v("Новый отзыв")]),r("template",{slot:"content"},[r("form",{staticClass:"new-review__form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"new-review__photo"},[r("avatar-upload",{attrs:{"error-message":e.validation.firstError("reviewData.photo")},model:{value:e.reviewData.photo,callback:function(t){e.$set(e.reviewData,"photo",t)},expression:"reviewData.photo"}})],1),r("div",{staticClass:"new-review__name"},[r("simple-input",{attrs:{label:"Имя автора","error-message":e.validation.firstError("reviewData.author")},model:{value:e.reviewData.author,callback:function(t){e.$set(e.reviewData,"author",t)},expression:"reviewData.author"}})],1),r("div",{staticClass:"new-review__position"},[r("simple-input",{attrs:{label:"Титул автора","error-message":e.validation.firstError("reviewData.occ")},model:{value:e.reviewData.occ,callback:function(t){e.$set(e.reviewData,"occ",t)},expression:"reviewData.occ"}})],1),r("div",{staticClass:"new-review__text"},[r("simple-textarea",{attrs:{label:"Отзыв","error-message":e.validation.firstError("reviewData.text")},model:{value:e.reviewData.text,callback:function(t){e.$set(e.reviewData,"text",t)},expression:"reviewData.text"}})],1),r("div",{staticClass:"new-review__controls"},[r("basic-button",{staticClass:"new-review__button",attrs:{size:"small",display:"flat"},on:{click:function(t){return e.$emit("reset")}}},[e._v("Отмена")]),r("basic-button",{staticClass:"new-review__button new-review__button_save",attrs:{type:"submit",size:"small",bordered:!0}},[e._v("Сохранить")])],1)])])],2)};o._withStripped=!0;var c=r(70),u=r.n(c),v=r(467),l=r(466),w=r(499),p=r(140),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar-upload"},[r("label",{staticClass:"avatar-upload__control",attrs:{for:"file-input"}},[e.renderedPhoto?r("img",{staticClass:"avatar-upload__image",attrs:{src:e.renderedPhoto}}):e._e()]),r("input",{ref:"file-input",staticClass:"avatar-upload__file",attrs:{id:"file-input",type:"file",accept:"image/jpeg,image/png"},on:{change:e.handlePhotoUpload}}),r("basic-button",{staticClass:"avatar-upload__button",attrs:{size:"small",display:"flat"},on:{click:e.uploadFile}},[e._v(e._s(e.value?"Изменить фото":"Добавить фото"))]),r("transition",{attrs:{name:"slide-up"}},[e.errorMessage?r("div",{staticClass:"avatar-upload__error"},[r("error-tooltip",[e._v(e._s(e.errorMessage))])],1):e._e()])],1)};d._withStripped=!0;var f=r(141),m=r(497),_={components:{ErrorTooltip:f.a,BasicButton:p.a},mixins:[m.a]},h=(r(520),r(17)),b=Object(h.a)(_,d,[],!1,null,"18e1ac2c",null);b.options.__file="src/admin/components/AvatarUpload.vue";var g=b.exports;function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){x(e,t,r[t])})}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C={author:"",occ:"",text:"",photo:null},y={components:{Card:v.a,SimpleInput:l.a,SimpleTextarea:w.a,BasicButton:p.a,AvatarUpload:g},props:{currentReview:{type:Object,default:null}},watch:{currentReview:function(){this.updateReviewData(),this.validation.reset()}},mixins:[u.a.mixin],data:function(){return{reviewData:C}},validators:{"reviewData.author":function(e){return c.Validator.value(e).required("Введите автора")},"reviewData.occ":function(e){return c.Validator.value(e).required("Введите титул")},"reviewData.text":function(e){return c.Validator.value(e).required("Введите текст отзыва")},"reviewData.photo":function(e){return c.Validator.value(e).required("Загрузите фото")}},computed:{title:function(){return this.currentReview?"Редактирование отзыва":"Новый отзыв"}},methods:{updateReviewData:function(){this.reviewData=this.currentReview?R({},this.currentReview):R({},C)},onSubmit:function(){var e=this;this.$validate().then(function(t){if(t){var r=e.currentReview?"update":"create";e.$emit(r,e.reviewData),e.validation.reset()}})}},created:function(){this.updateReviewData()}},D=(r(521),Object(h.a)(y,o,[],!1,null,"3cb3d328",null));D.options.__file="src/admin/components/ReviewForm.vue";var O=D.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("card",{staticClass:"review-item",class:{"review-item_active":e.isActive}},[r("div",{staticClass:"review-item__header",attrs:{slot:"title"},slot:"title"},[r("img",{staticClass:"review-item__user-avatar",attrs:{src:e.imageSrc}}),r("div",{staticClass:"review-item__user-info"},[r("div",{staticClass:"review-item__user-name"},[e._v(e._s(e.review.author))]),r("div",{staticClass:"review-item__user-position"},[e._v(e._s(e.review.occ))])])]),r("div",{staticClass:"review-item__content",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"review-item__text"},[e._v(e._s(e.review.text))]),r("div",{staticClass:"review-item__controls"},[r("button",{staticClass:"review-item__button review-item__button_edit",on:{click:function(t){return e.$emit("edit")}}},[r("div",{staticClass:"review-item__button-text"},[e._v("Править")]),r("icon",{staticClass:"review-item__button-icon_edit",attrs:{name:"pencil"}})],1),r("button",{staticClass:"review-item__button review-item__button_delete",on:{click:function(t){return e.$emit("delete")}}},[r("div",{staticClass:"review-item__button-text"},[e._v("Удалить")]),r("icon",{staticClass:"review-item__button-icon_delete",attrs:{name:"cross"}})],1)])])])};k._withStripped=!0;var j=r(487),S=r(54),$={components:{Card:v.a,Icon:S.a},props:{review:{type:Object,default:{}},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{imageSrc:function(){return Object(j.a)(this.review.photo)}}},F=(r(522),Object(h.a)($,k,[],!1,null,"0b99c53b",null));F.options.__file="src/admin/components/ReviewItem.vue";var P=F.exports;function T(e,t,r,i,a,n,s){try{var o=e[n](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(i,a)}function E(e){return function(){var t=this,r=arguments;return new Promise(function(i,a){var n=e.apply(t,r);function s(e){T(n,i,a,s,o,"next",e)}function o(e){T(n,i,a,s,o,"throw",e)}s(void 0)})}}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){q(e,t,r[t])})}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A={components:{PageTitle:n.a,CardGradientButton:s.a,ReviewForm:O,ReviewItem:P},data:function(){return{currentReview:null,isShowForm:!1}},computed:B({},Object(a.c)("reviews",{reviews:function(e){return e.reviews}})),methods:B({},Object(a.b)("reviews",["fetchReviews","createReview","updateReview","removeReview"]),Object(a.b)("tooltips",["showTooltip"]),{createNewReview:function(){var e=E(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.createReview(t);case 3:this.showTooltip({type:"success",text:"Отзыв успешно создан",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:this.hideForm();case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),updateCurrentReview:function(){var e=E(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.updateReview(t);case 3:this.showTooltip({type:"success",text:"Отзыв успешно обновлен",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:this.hideForm();case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),deleteReview:function(){var e=E(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.removeReview(t);case 3:this.showTooltip({type:"success",text:"Отзыв успешно удален",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),showForm:function(){var e=this;this.isShowForm=!0,this.$nextTick(function(){e.$scrollTo(e.$refs.form,500,{container:".inner-page__content",offset:-50})})},hideForm:function(){this.isShowForm=!1,this.currentReview=null},addReview:function(){this.currentReview=null,this.showForm()},cancelReviewChanges:function(){this.currentReview=null,this.hideForm()},editReview:function(e){this.currentReview=e,this.showForm()}}),created:function(){var e=E(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchReviews();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.showTooltip({type:"error",text:"Произошла ошибка при загрузке отзывов",duration:3e3});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},I=(r(523),Object(h.a)(A,i,[],!1,null,"2043995e",null));I.options.__file="src/admin/views/Reviews.vue";t.default=I.exports}}]);