(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[214],{1037:function(e,t,n){"use strict";var a=n(410);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(411).a.h1(r());t.a=c},1042:function(e,t,n){"use strict";var a=n(410);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(411).a.div(r());t.a=c},1043:function(e,t,n){"use strict";var a=n(17),r=n(1084),c=(n(6),n(197));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1048:function(e,t,n){"use strict";var a=n(410);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(411).a.div(r());t.a=c},1063:function(e,t,n){"use strict";var a=n(17),r=n(1064);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1083:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(42),i=n.n(c),o=n(6),l=n(22),s=n.n(l),u=n(558),d=n.n(u),f=n(199),b=n(439),j=n(438),m=n(557),p=n(437),O=n(424),h=n(296),v=n(528),g=n(44),x=void 0,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=i()(n,2),c=a[0],l=a[1];o.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},d=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(x,t)},C=function(t){u(!1,t),e.onCancel&&e.onCancel.call(x,t)},w=o.useContext(h.b).getPrefixCls,E=e.prefixCls,k=e.placement,T=e.children,P=e.overlayClassName,S=y(e,["prefixCls","placement","children","overlayClassName"]),I=w("popover",E),B=w("popconfirm",E),M=s()(B,P),R=o.createElement(p.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,i=e.title,l=e.cancelText,s=e.okText,u=e.okType,f=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},f,o.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(i))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(j.a,r()({onClick:C,size:"small"},c),l||n.cancelText),o.createElement(j.a,r()({onClick:d},Object(m.a)(u),{size:"small"},a),s||n.okText)))}(I,t)}));return o.createElement(b.a,r()({},S,{prefixCls:I,placement:k,onVisibleChange:function(t){e.disabled||u(t)},visible:c,overlay:R,overlayClassName:M,ref:t}),Object(g.a)(T,{onKeyDown:function(e){var t,n;o.isValidElement(T)&&(null===(n=null===T||void 0===T?void 0:(t=T.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===f.a.ESC&&c&&u(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},t.a=C},1090:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1098))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1098:function(e,t,n){"use strict";var a=n(117),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(115)),i=a(n(6)),o=r(n(1099)),l=r(n(140)),s=function(e,t){return i.createElement(l.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};s.displayName="EyeOutlined";var u=i.forwardRef(s);t.default=u},1099:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"}},1123:function(e,t,n){"use strict";var a=n(1690);t.a=a.a},1124:function(e,t,n){"use strict";var a=n(1622);t.a=a.a},1193:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(410);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(411).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1208:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1521))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1214:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(423),r=n(1),c=n.n(r),i=n(3),o=n(14),l=n(15),s=n(1252),u=n.n(s),d=n(2),f=n(9),b=n(1483),j=n(8),m=n(585),p=n.n(m),O=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=h(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,r){var i,o,l,s=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t.file,n),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),t.onError(e.t0),r(e.t0),e.abrupt("return");case 9:i=h(t.file.name),o=Object(b.a)(),l="".concat(o,".").concat(i),this.fetchFileCredentials(l,n).then((function(e){var n=e.uploadCredentials,r=e.downloadUrl,c=e.privateUrl;return s.uploadToServer(t.file,n).then((function(){t.onSuccess(),a({id:o,name:t.file.name,sizeInBytes:t.file.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:c,downloadUrl:r,new:!0})}))})).catch((function(e){t.onError(e),r(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.get(),e.next=3,f.a.get("/tenant/".concat(a,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,l,s,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n.url,i=new FormData,n.fields)for(o=0,l=Object.entries(n.fields||{});o<l.length;o++)s=Object(a.a)(l[o],2),u=s[0],d=s[1],i.append(u,d);return i.append("file",t),e.abrupt("return",p.a.post(r,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function h(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},1251:function(e,t,n){"use strict";var a=n(56),r=n(423),c=n(17),i=n(6),o=n(438),l=n(1482),s=n(1487),u=n(1219),d=n(1214),f=n(5),b=n(2);t.a=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),j=n[0],m=n[1],p=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},O=function(){return p().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,type:e.type,size:e.size}}))},h=function(e){console.error(e),m(!1),f.a.showMessage(e)},v=e.max,g=e.readonly,x=Object(c.jsxs)(o.a,{children:[j?Object(c.jsx)(s.a,{}):Object(c.jsx)(u.a,{}),Object(b.c)("fileUploader.upload")]});return Object(c.jsx)(l.a,{accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.join(", ")}(),fileList:O(),disabled:g,customRequest:function(t){d.a.uploadFromRequest(t,{storage:e.storage,formats:e.formats},(function(t){!function(t){m(!1),e.onChange([].concat(Object(a.a)(p()),[t]))}(t)}),(function(e){h(e)}))},onChange:function(t){var n;t&&t.file&&t.file.status&&("removed"===t.file.status?(n=t.file.uid,e.onChange(p().filter((function(e){return e.id!==n})))):m(!0))},beforeUpload:function(t){try{return d.a.validate(t,{storage:e.storage,formats:e.formats}),!0}catch(n){return h(n),!1}},children:g||v&&O().length>=v?null:x})}},1338:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(13),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),c="aria-",i="data-";function o(e,t){return 0===e.indexOf(t)}function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:Object(a.a)({},n);var l={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||o(n,c))||t.data&&o(n,i)||t.attr&&r.includes(n))&&(l[n]=e[n])})),l}},1521:function(e,t,n){"use strict";var a=n(117),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(115)),i=a(n(6)),o=r(n(1522)),l=r(n(140)),s=function(e,t){return i.createElement(l.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};s.displayName="CheckOutlined";var u=i.forwardRef(s);t.default=u},1522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},1561:function(e,t,n){"use strict";var a=n(410),r=n(17),c=(n(6),n(1251));function i(){var e=Object(a.a)(["\n  .anticon-close {\n    display: none;\n  }\n"]);return i=function(){return e},e}var o=n(411).a.span(i());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(r.jsx)(o,{children:Object(r.jsx)(c.a,{readonly:!0,value:t()})}):null}},1621:function(e,t,n){"use strict";var a=n(17),r=n(1769),c=(n(6),n(2)),i=n(410);function o(){var e=Object(i.a)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]);return o=function(){return e},e}var l=n(411).a.div(o());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(a.jsx)(l,{children:Object(a.jsx)(r.a,{autoplay:!0,vertical:!0,effect:"fade",children:t().map((function(e){return Object(a.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):Object(a.jsx)("p",{children:Object(c.c)("imagesViewer.noImage")})}},1684:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.actualite.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1685:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.actualiteRead)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.actualiteEdit)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.actualiteCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.actualiteImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.actualiteDestroy)})),selectPermissionToImport:u};t.a=d},2208:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1123),c=n(1124),i=n(6),o=n(39),l=n(41),s=n(2),u=n(521),d=n(4),f=function(e){return e.actualite.view},b=Object(d.a)([f],(function(e){return e.record})),j={selectLoading:Object(d.a)([f],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:f},m=n(0),p=n(1063),O=n(1193),h=n(2091),v=n(1621),g=n(1561),x=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(p.a,{}):Object(a.jsx)(O.a,{children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:Object(s.c)("common.informations")}),Boolean(t.titleFR)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.titleFR"),children:t.titleFR})),Boolean(t.descriptionFR)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.descriptionFR"),children:t.descriptionFR})),Boolean(t.titleAR)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.titleAR"),children:t.titleAR})),Boolean(t.descriptionAR)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.descriptionAR"),children:t.descriptionAR})),Boolean(t.titleEN)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.titleEN"),children:t.titleEN})),Boolean(t.descriptionEN)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.descriptionEN"),children:t.descriptionEN})),Boolean(t.date)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.date"),children:t.date})),Boolean(t.link)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.link"),children:Object(a.jsx)("a",{href:t.link,children:t.link.substring(0,100)+"..."})})),Boolean(t.linkYoutube)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.linkYoutube"),children:Object(a.jsx)("a",{href:t.linkYoutube,children:t.linkYoutube.substring(0,100)+"..."})})),Boolean(t.statut)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.statut"),children:Object(s.c)("entities.actualite.enumerators.statut.".concat(t.statut))})),Boolean(t.attachements)&&Boolean(t.attachements.length)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.attachements"),children:Object(a.jsx)(g.a,{value:t.attachements})})),Boolean(t.image)&&Boolean(t.image.length)&&Object(a.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},O.b),{},{label:Object(s.c)("entities.actualite.fields.image"),children:Object(a.jsx)(v.a,{value:t.image})}))]})})},y=n(1028),C=n(439),w=n(438),E=n(1083),k=n(197),T=n(224),P=n(1685),S=n(400),I=n(1684),B=n(1048),M=function(e){var t=Object(o.d)(),n=Object(l.h)(),r=Object(o.e)(T.a.selectPermissionToRead),c=Object(o.e)(P.a.selectPermissionToEdit),i=Object(o.e)(P.a.selectPermissionToDestroy),u=Object(o.e)(I.a.selectLoading),d=n.params.id;return Object(a.jsxs)(B.a,{children:[c&&Object(a.jsx)(k.a,{to:"/actualite/".concat(d,"/edit"),children:Object(a.jsx)(C.a,{title:Object(s.c)("common.edit"),children:Object(a.jsx)(w.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(a.jsx)(E.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(S.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(a.jsx)(C.a,{title:Object(s.c)("common.destroy"),children:Object(a.jsx)(w.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(k.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(C.a,{title:Object(s.c)("auditLog.menu"),children:Object(a.jsx)(w.a,{icon:Object(a.jsx)(y.a,{})})})})]})},R=n(1042),U=n(1043),D=n(1037);t.default=function(e){var t=Object(o.d)(),n=Object(l.h)(),d=Object(o.e)(j.selectLoading),f=Object(o.e)(j.selectRecord);return Object(i.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.actualite.menu"),"/actualite"],[Object(s.c)("entities.actualite.view.title")]]}),Object(a.jsxs)(R.a,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.a,{span:16,children:Object(a.jsx)(D.a,{children:Object(s.c)("entities.actualite.view.title")})}),Object(a.jsx)(c.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(M,{match:n})})]}),Object(a.jsx)(x,{loading:d,record:f})]})]})}}}]);