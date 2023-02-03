(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[211],{1039:function(e,r,n){"use strict";var t=n(0),a=n(17),o=n(2091),i=n(2094),u=n(1035),c=n(6),l=n(1040),s=function(e){var r=e.label,n=e.name,s=e.hint,f=e.layout,d=e.size,m=e.type,p=e.placeholder,b=e.autoFocus,v=e.autoComplete,y=e.prefix,h=e.externalErrorMessage,g=e.required,j=e.addonAfter,x=Object(u.d)(),O=x.setValue,w=x.watch,S=x.register,q=x.errors,E=x.formState,k=E.touched,R=E.isSubmitted;Object(c.useEffect)((function(){S({name:n})}),[S,n]);var C=l.a.errorMessage(n,q,k,R,h);return Object(a.jsx)(o.a.Item,Object(t.a)(Object(t.a)({},f),{},{label:r,required:g,validateStatus:C?"error":"success",help:C||s,children:Object(a.jsx)(i.a,{id:n,name:n,type:m,value:w(n),onChange:function(r){O(n,r.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},size:d||void 0,placeholder:p||void 0,autoFocus:b||!1,autoComplete:v||void 0,prefix:y||void 0,addonAfter:j||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},r.a=s},1040:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n(14),a=n(15),o=function(){function e(){Object(t.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,r,n,t){var a,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!t&&!n[e])return null;var i=r[e];return(null===i||void 0===i||null===(a=i[0])||void 0===a?void 0:a.message)||(null===i||void 0===i?void 0:i.message)||i||null}}]),e}()},1041:function(e,r,n){"use strict";var t=n(56),a=n(48),o=n(2),i=n(33),u=n.n(i),c={generic:function(e){return a.c().label(e)},string:function(e,r){r=r||{};var n=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),r.matches&&(n=n.matches(r.matches)),n},boolean:function(e,r){return a.b().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var n=a.c().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(n=n.required()),n},stringArray:function(e,r){r=r||{};var n=a.a().compact().ensure().of(a.h().transform((function(e,r){return""===r?null:e})).trim()).label(e);return r.required&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},relationToMany:function(e,r){r=r||{};var n=a.a().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return r.required&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},integer:function(e,r){r=r||{};var n=a.d().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),n},images:function(e,r){r=r||{};var n=a.a().nullable(!0).label(e);return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},files:function(e,r){r=r||{};var n=a.a().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},enumerator:function(e,r){r=r||{};var n=a.h().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(r.options||[])));return r.required&&(n=n.required(Object(o.c)("validation.string.selected"))),n},email:function(e,r){r=r||{};var n=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),r.matches&&(n=n.matches(r.matches)),n},decimal:function(e,r){r=r||{};var n=a.d().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),n},datetime:function(e,r){r=r||{};var n=a.c().nullable(!0).label(e).transform((function(e,r){return e?u()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(n=n.required()),n},date:function(e,r){r=r||{};var n=a.c().nullable(!0).label(e).test("is-date",Object(o.c)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return r.required&&(n=n.required()),n}};r.a=c},1049:function(e,r,n){"use strict";n.d(r,"a",(function(){return f}));var t=n(25),a=n(6);function o(e){var r=a.useRef();return r.current=e,a.useCallback((function(){for(var e,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return null===(e=r.current)||void 0===e?void 0:e.call.apply(e,[r].concat(t))}),[])}var i,u=n(291),c=Object(u.a)()?a.useLayoutEffect:a.useEffect,l=c;function s(e){return void 0!==e}function f(e,r){var n=r||{},u=n.defaultValue,f=n.value,d=n.onChange,m=n.postState,p=function(e){var r=a.useRef(!1),n=a.useState(e),o=Object(t.a)(n,2),i=o[0],u=o[1];return a.useEffect((function(){return r.current=!1,function(){r.current=!0}}),[]),[i,function(e,n){n&&r.current||u(e)}]}((function(){var r,n=void 0;return s(f)?(n=f,r=i.PROP):s(u)?(n="function"===typeof u?u():u,r=i.PROP):(n="function"===typeof e?e():e,r=i.INNER),[n,r,n]})),b=Object(t.a)(p,2),v=b[0],y=b[1],h=s(f)?f:v[0],g=m?m(h):h;!function(e,r){var n=a.useRef(!0);c((function(){if(!n.current)return e()}),r),c((function(){return n.current=!1,function(){n.current=!0}}),[])}((function(){y((function(e){var r=Object(t.a)(e,1)[0];return[f,i.PROP,r]}))}),[f]);var j=a.useRef(),x=o((function(e,r){y((function(r){var n=Object(t.a)(r,3),a=n[0],o=n[1],u=n[2],c="function"===typeof e?e(a):e;if(c===a)return r;var l=o===i.INNER&&j.current!==u?u:a;return[c,i.INNER,l]}),r)})),O=o(d);return l((function(){var e=Object(t.a)(v,3),r=e[0],n=e[1],a=e[2];r!==a&&n===i.INNER&&(O(r,a),j.current=a)}),[v]),[g,x]}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(i||(i={}))},1258:function(e,r,n){"use strict";var t=n(117),a=n(53);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(n(115)),i=t(n(6)),u=a(n(1259)),c=a(n(140)),l=function(e,r){return i.createElement(c.default,(0,o.default)((0,o.default)({},e),{},{ref:r,icon:u.default}))};l.displayName="SearchOutlined";var s=i.forwardRef(l);r.default=s},1259:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},1361:function(e,r,n){"use strict";var t;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=(t=n(1258))&&t.__esModule?t:{default:t};r.default=a,e.exports=a},1384:function(e,r,n){var t=n(1509);e.exports=function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}},1509:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}},1513:function(e,r,n){"use strict";var t=n(410);function a(){var e=Object(t.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return a=function(){return e},e}var o=n(411).a.div(a());r.a=o},1514:function(e,r,n){"use strict";var t=n(410);function a(){var e=Object(t.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return a=function(){return e},e}var o=n(411).a.div(a());r.a=o},1515:function(e,r,n){"use strict";var t=n(410);function a(){var e=Object(t.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return a=function(){return e},e}var o=n(411).a.div(a());r.a=o},1531:function(e,r,n){var t=n(1555),a=n(1556),o=n(1384),i=n(1557);e.exports=function(e){return t(e)||a(e)||o(e)||i()}},1540:function(e,r,n){"use strict";var t=n(410);function a(){var e=Object(t.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return a=function(){return e},e}var o=n(411).a.div(a());r.a=o},1544:function(e,r,n){var t=n(1551),a=n(1552),o=n(1384),i=n(1553);e.exports=function(e,r){return t(e)||a(e,r)||o(e,r)||i()}},1550:function(e,r,n){"use strict";var t=n(1544),a=n(1554),o=n(1531),i=n(1558),u=n(1559),c=n(1560);function l(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,r){return r.encode?r.strict?i(e):encodeURIComponent(e):e}function f(e,r){return r.decode?u(e):e}function d(e){return Array.isArray(e)?e.sort():"object"===typeof e?d(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function m(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function p(e){var r=(e=m(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function b(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,r){l((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var n=function(e){var r;switch(e.arrayFormat){case"index":return function(e,n,t){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===t[e]&&(t[e]={}),t[e][r[1]]=n):t[e]=n};case"bracket":return function(e,n,t){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=[n]:t[e]=n};case"comma":case"separator":return function(r,n,t){var a="string"===typeof n&&n.includes(e.arrayFormatSeparator),o="string"===typeof n&&!a&&f(n,e).includes(e.arrayFormatSeparator);n=o?f(n,e):n;var i=a||o?n.split(e.arrayFormatSeparator).map((function(r){return f(r,e)})):null===n?n:f(n,e);t[r]=i};default:return function(e,r,n){void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=r}}}(r),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var i,u=a(e.split("&"));try{for(u.s();!(i=u.n()).done;){var s=i.value,m=c(r.decode?s.replace(/\+/g," "):s,"="),p=t(m,2),v=p[0],y=p[1];y=void 0===y?null:["comma","separator"].includes(r.arrayFormat)?y:f(y,r),n(f(v,r),y,o)}}catch(q){u.e(q)}finally{u.f()}for(var h=0,g=Object.keys(o);h<g.length;h++){var j=g[h],x=o[j];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var S=w[O];x[S]=b(x[S],r)}else o[j]=b(x,r)}return!1===r.sort?o:(!0===r.sort?Object.keys(o).sort():Object.keys(o).sort(r.sort)).reduce((function(e,r){var n=o[r];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[r]=d(n):e[r]=n,e}),Object.create(null))}r.extract=p,r.parse=v,r.stringify=function(e,r){if(!e)return"";l((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var n=function(n){return r.skipNull&&(null===(t=e[n])||void 0===t)||r.skipEmptyString&&""===e[n];var t},t=function(e){switch(e.arrayFormat){case"index":return function(r){return function(n,t){var a=n.length;return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(o(n),null===t?[[s(r,e),"[",a,"]"].join("")]:[[s(r,e),"[",s(a,e),"]=",s(t,e)].join("")])}};case"bracket":return function(r){return function(n,t){return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(o(n),null===t?[[s(r,e),"[]"].join("")]:[[s(r,e),"[]=",s(t,e)].join("")])}};case"comma":case"separator":return function(r){return function(n,t){return null===t||void 0===t||0===t.length?n:0===n.length?[[s(r,e),"=",s(t,e)].join("")]:[[n,s(t,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(n,t){return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(o(n),null===t?[s(r,e)]:[[s(r,e),"=",s(t,e)].join("")])}}}}(r),a={},i=0,u=Object.keys(e);i<u.length;i++){var c=u[i];n(c)||(a[c]=e[c])}var f=Object.keys(a);return!1!==r.sort&&f.sort(r.sort),f.map((function(n){var a=e[n];return void 0===a?"":null===a?s(n,r):Array.isArray(a)?a.reduce(t(n),[]).join("&"):s(n,r)+"="+s(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var n=c(e,"#"),a=t(n,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:v(p(e),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,r)}:{})},r.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var t=m(e.url).split("?")[0]||"",a=r.extract(e.url),o=r.parse(a,{sort:!1}),i=Object.assign(o,e.query),u=r.stringify(i,n);u&&(u="?".concat(u));var c=function(e){var r="",n=e.indexOf("#");return-1!==n&&(r=e.slice(n)),r}(e.url);return e.fragmentIdentifier&&(c="#".concat(s(e.fragmentIdentifier,n))),"".concat(t).concat(u).concat(c)}},1551:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},1552:function(e,r){e.exports=function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==u.return||u.return()}finally{if(a)throw o}}return n}}},1553:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1554:function(e,r,n){var t=n(1384);e.exports=function(e,r){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}},1555:function(e,r,n){var t=n(1509);e.exports=function(e){if(Array.isArray(e))return t(e)}},1556:function(e,r){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},1557:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1558:function(e,r,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},1559:function(e,r,n){"use strict";var t="%[a-f0-9]{2}",a=new RegExp(t,"gi"),o=new RegExp("("+t+")+","gi");function i(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var n=e.slice(0,r),t=e.slice(r);return Array.prototype.concat.call([],i(n),i(t))}function u(e){try{return decodeURIComponent(e)}catch(t){for(var r=e.match(a),n=1;n<r.length;n++)r=(e=i(r,n).join("")).match(a);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},t=o.exec(e);t;){try{n[t[0]]=decodeURIComponent(t[0])}catch(r){var a=u(t[0]);a!==t[0]&&(n[t[0]]=a)}t=o.exec(e)}n["%C2"]="\ufffd";for(var i=Object.keys(n),c=0;c<i.length;c++){var l=i[c];e=e.replace(new RegExp(l,"g"),n[l])}return e}(e)}}},1560:function(e,r,n){"use strict";e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var n=e.indexOf(r);return-1===n?[e]:[e.slice(0,n),e.slice(n+r.length)]}},2085:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n(423),o=n(17),i=n(438),u=n(1035),c=n(27),l=n(29),s=n(2),f=n(1550),d=n.n(f),m=n(6),p=n(39),b=n(197),v=n(1513),y=n(1514),h=n(1540),g=n(1039),j=n(1515),x=n(41),O=n(1041),w=n(48),S=n(1044),q=w.e().shape({password:O.a.string(Object(s.c)("user.fields.password"),{required:!0})});r.default=function(e){var r=Object(p.d)(),n=Object(x.g)(),f=Object(p.e)(l.a.selectBackgroundImageUrl),O=Object(p.e)(l.a.selectLogoUrl),w=Object(p.e)(l.a.selectLoadingPasswordReset),E=Object(p.e)(l.a.selectErrorMessage),k=function(){r(c.a.doClearErrorMessage())};Object(m.useEffect)((function(){k()}),[]);var R=Object(m.useState)({password:""}),C=Object(a.a)(R,1)[0],I=Object(u.c)({resolver:Object(S.yupResolver)(q),mode:"onSubmit",defaultValues:C}),N=d.a.parse(n.search).token;return Object(o.jsx)(j.a,{style:{backgroundImage:"url(".concat(f||"/images/forgotPassword.jpg",")")},children:Object(o.jsxs)(v.a,{children:[Object(o.jsx)(y.a,{children:O?Object(o.jsx)("img",{src:O,width:"240px",alt:Object(s.c)("app.title")}):Object(o.jsx)("h1",{children:Object(s.c)("app.title")})}),Object(o.jsx)(u.a,Object(t.a)(Object(t.a)({},I),{},{children:Object(o.jsxs)("form",{onSubmit:I.handleSubmit((function(e){var n=e.password;r(c.a.doResetPassword(N,n))})),children:[Object(o.jsx)(g.a,{name:"password",placeholder:Object(s.c)("user.fields.password"),autoComplete:"password",type:"password",size:"large",layout:null,onChange:function(){E&&k()},externalErrorMessage:E}),Object(o.jsx)(i.a,{type:"primary",size:"large",block:!0,htmlType:"submit",loading:w,children:Object(s.c)("auth.passwordReset.message")}),Object(o.jsx)(h.a,{children:Object(o.jsx)(b.a,{to:"/auth/signin",children:Object(s.c)("common.cancel")})})]})}))]})})}}}]);