"use strict";(self.webpackChunkapp_movies=self.webpackChunkapp_movies||[]).push([[778],{2282:function(e,a,t){t(2791);a.Z=t.p+"static/media/placeholderImg.5afa0166442fb6a712db3f2341b81a2c.svg"},1919:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(4165),i=t(5861),n=t(9439),s=t(2791),d={btnAdd:"ButtonBookmark_btnAdd__MKjhL"},l=t(9206),o=t(2481),c=t(184);function m(e){var a=e.el,t=(0,l.Z)(),m=t.user,u=t.db,_=(0,s.useState)(localStorage.getItem(a.id+"AddedFilms"+m._id)||"false"),f=(0,n.Z)(_,2),p=f[0],g=f[1],h=(0,s.useState)(JSON.parse(localStorage.getItem(a.id+"DisabledFilms"+m._id)||!1)),v=(0,n.Z)(h,2),x=v[0],b=v[1],F=(0,s.useState)(localStorage.getItem(a.id+"dataTitle"+m._id)||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),Z=(0,n.Z)(F,2),S=Z[0],j=Z[1],k=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,t,i,n,s){var d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.ET)((0,o.hJ)(u,"films"+m._id),{name:a,id:t,poster:i,description:n,year:s});case 3:d=e.sent,console.log("Document written with ID: ",d.id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error adding document: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t,r,i,n){return e.apply(this,arguments)}}();function C(){return C=(0,i.Z)((0,r.Z)().mark((function e(){var t,i,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(a.id+"dataTitle"+m._id,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),t=localStorage.getItem(a.id+"dataTitle"+m._id)||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",j(t),localStorage.setItem(a.id+"DisabledFilms"+m._id,JSON.stringify(!0)),i=JSON.parse(localStorage.getItem(a.id+"DisabledFilms"+m._id)||!1),b(i),localStorage.setItem(a.id+"AddedFilms"+m._id,"true"),n=localStorage.getItem(a.id+"AddedFilms"+m._id)||"false",g(n);case 9:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}return(0,c.jsx)("button",{className:d.btnAdd,disabled:x,"data-title":S,onClick:function(){!function(){C.apply(this,arguments)}(),k(a.name,a.id,a.poster.url,a.description,a.year)},children:"false"===p?(0,c.jsx)("i",{className:"bx bx-bookmarks"}):(0,c.jsx)("i",{className:"bx bxs-bookmarks"})})}},6778:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});t(2791);var r=t(2282),i=t(4438),n=t(1919),s=t(1087),d="CardForFilms_filmCard__Clc51",l="CardForFilms_filmCard__img__iIvpZ",o="CardForFilms_filmCard__rating__Ownkr",c="CardForFilms_filmCard__name__NPoAS",m="CardForFilms_filmCard__length__PQM4r",u="CardForFilms_filmCard__info__8Zzg6",_=t(9206),f=t(184);var p=function(e){var a=e.el,t=e.index,p=(0,i.Z)(),g=p.isLoaded,h=p.handleOnLoad,v=(0,_.Z)().user;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("span",{className:o,children:a.rating.kp.toFixed(1)}),(0,f.jsx)("div",{className:l,children:(0,f.jsx)(s.rU,{to:"/movie/"+a.id,children:!1===g?(0,f.jsx)("img",{onLoad:h,loading:"lazy",src:a.poster?a.poster.previewUrl:"",alt:a.name}):(0,f.jsx)("img",{src:r.Z,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})})}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsxs)(s.rU,{to:"/movie/"+a.id,children:[(0,f.jsx)("h2",{className:c,children:a.name}),(0,f.jsx)("div",{className:m,children:a.movieLength?"".concat(a.year,", ").concat(a.movieLength,"\u043c\u0438\u043d"):a.year})]}),v&&(0,f.jsx)(n.Z,{el:a})]})]},t)})}},4438:function(e,a,t){var r=t(9439),i=t(2791);a.Z=function(){var e=(0,i.useState)(!0),a=(0,r.Z)(e,2),t=a[0],n=a[1],s=function(){n(!1)};return(0,i.useEffect)((function(){s()}),[]),{isLoaded:t,handleOnLoad:s}}}}]);
//# sourceMappingURL=778.be9f28a7.chunk.js.map