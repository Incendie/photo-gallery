(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{12:function(e,t,a){e.exports=a(37)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),c=a.n(l),r=(a(17),a(18),a(19),function(){return o.a.createElement("header",null,o.a.createElement("h2",{className:"title"},"Infinite Photo Gallery"),o.a.createElement("p",{className:"caption"},"Powered by Unsplash"))}),i=a(5),s=a(1),m=a(2),u=a.n(m),p=function(e){if(e)return e.charAt(0).toUpperCase()+e.slice(1)},d=(a(34),a(39)),h=(a(35),function(e){e.photoId;var t=e.setShowEnlarged,a=e.photos,l=e.position,c=e.setPosition,r=new u.a({accessKey:"V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik"}),i=Object(n.useState)(),h=Object(s.a)(i,2),f=h[0],v=h[1],E=Object(n.useState)([]),b=Object(s.a)(E,2),g=b[0],w=b[1];Object(n.useEffect)((function(){r.photos.getPhoto(a[l].id).then(m.toJson).then((function(e){var t=[{name:"Caption",value:p(e.alt_description)},{name:"Uploaded",value:Object(d.a)(new Date(e.created_at),"PPpp")},{name:"Likes",value:e.likes},{name:"Photographer",value:e.user.name},{name:"Username",value:e.user.username},{name:"Twitter",value:e.user.twitter_username},{name:"Portfolio Link",value:e.user.portfolio_url},{name:"Bio",value:e.user.bio},{name:"Photographer Origin",value:e.user.location},{name:"EXIF",value:e.exif},{name:"Location",value:e.location.title},{name:"Views",value:e.views}];v(e),w(t)})).catch((function(e){return console.error("Error fetching photo:",e)}))}),[l]);var j=function(e){e.target.className.includes("prev")?c(O()):e.target.className.includes("next")&&c(N())},O=function(){return l>0?l-1:a.length-1},N=function(){return l<a.length-1?l+1:0};return o.a.createElement("div",null,f&&o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-prev",onClick:j},o.a.createElement("div",{className:"modal-prev-img"},o.a.createElement("img",{src:a[O()].urls.thumb,alt:a[O()].alt_description||"Unsplash Photo"})),o.a.createElement("div",{className:"modal-prev-icon"},"<")),o.a.createElement("div",{className:"modal-next",onClick:j},o.a.createElement("div",{className:"modal-next-img"},o.a.createElement("img",{src:a[N()].urls.thumb,alt:a[N()].alt_description||"Unsplash Photo"})),o.a.createElement("div",{className:"modal-next-icon"},">")),o.a.createElement("div",{className:"details wrapper"},o.a.createElement("div",{className:"details-close",onClick:function(){t(!1)}},"X"),o.a.createElement("div",{className:"details-photo "},o.a.createElement("img",{src:f.urls.full,alt:f.alt_description||"Unsplash photo"})),o.a.createElement("ul",{className:"details-info"},g.map((function(e,t){if("EXIF"!==e.name&&e.value)return o.a.createElement("li",{key:t,className:"details-info-".concat(e.name)},o.a.createElement("span",null,"Caption"!==e.name&&"".concat(e.name)),o.a.createElement("span",null," - "),o.a.createElement("span",null,"Portfolio Link"===e.name||"Twitter"===e.name?o.a.createElement("a",{href:"Twitter"===e.name?"https://twitter.com/".concat(e.value):e.value},e.value):e.value))}))))))}),f=function(){var e=new u.a({accessKey:"V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik"}),t=Object(n.useState)(1),a=Object(s.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(9),d=Object(s.a)(r,2),f=d[0],v=(d[1],Object(n.useState)([])),E=Object(s.a)(v,2),b=E[0],g=E[1],w=Object(n.useState)(0),j=Object(s.a)(w,2),O=j[0],N=j[1],k=Object(n.useState)(!1),y=Object(s.a)(k,2),S=y[0],P=y[1],_=Object(n.useState)(""),x=Object(s.a)(_,2),C=x[0],I=x[1];Object(n.useEffect)((function(){e.photos.listPhotos(l,f,"latest").then(m.toJson).then((function(e){if(Object.keys(b).length){var t=Object(i.a)(b);t.push.apply(t,Object(i.a)(e)),g(t)}else g(e)})).catch((function(e){return console.error("Error fetching photos:",e)}))}),[l]);var U=function(e){var t=e.target.nextSibling;if("IMG"===t.nodeName&&(P(!0),I(t.id),t.dataset&&t.dataset.position)){var a=parseInt(t.dataset.position,10);N(a)}};return o.a.createElement("main",{className:"wrapper"},o.a.createElement("ul",{className:"photo-grid"},b.map((function(e,t){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"overlay",onClick:U},p(e.alt_description)),o.a.createElement("img",{src:e.urls.thumb,alt:e.alt_description||"Unsplash photo",id:e.id,"data-position":t}))}))),S&&o.a.createElement(h,{photoId:C,setShowEnlarged:P,photos:b,position:O,setPosition:N}),o.a.createElement("button",{onClick:function(){c(l+1)}},"Load More"))},v=(a(36),function(){return o.a.createElement("footer",null,"Project created by ",o.a.createElement("a",{href:"https://ansonli.io"},"Anson Li"))}),E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(f,null),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);