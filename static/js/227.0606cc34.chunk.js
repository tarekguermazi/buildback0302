(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[227],{1037:function(e,a,n){"use strict";var t=n(410);function r(){var e=Object(t.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var i=n(411).a.h1(r());a.a=i},1038:function(e,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return l}));var t=n(410);function r(){var e=Object(t.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return r=function(){return e},e}var i=n(411).a.div(r()),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},l={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};a.a=i},1039:function(e,a,n){"use strict";var t=n(0),r=n(17),i=n(2091),o=n(2094),l=n(1035),u=n(6),c=n(1040),s=function(e){var a=e.label,n=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,p=e.autoFocus,h=e.autoComplete,j=e.prefix,v=e.externalErrorMessage,O=e.required,g=e.addonAfter,x=Object(l.d)(),y=x.setValue,_=x.watch,C=x.register,S=x.errors,q=x.formState,E=q.touched,w=q.isSubmitted;Object(u.useEffect)((function(){C({name:n})}),[C,n]);var M=c.a.errorMessage(n,S,E,w,v);return Object(r.jsx)(i.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:a,required:O,validateStatus:M?"error":"success",help:M||s,children:Object(r.jsx)(o.a,{id:n,name:n,type:b,value:_(n),onChange:function(a){y(n,a.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},size:m||void 0,placeholder:f||void 0,autoFocus:p||!1,autoComplete:h||void 0,prefix:j||void 0,addonAfter:g||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},a.a=s},1040:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(14),r=n(15),i=function(){function e(){Object(t.a)(this,e)}return Object(r.a)(e,null,[{key:"errorMessage",value:function(e,a,n,t){var r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!n[e])return null;var o=a[e];return(null===o||void 0===o||null===(r=o[0])||void 0===r?void 0:r.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},1041:function(e,a,n){"use strict";var t=n(56),r=n(48),i=n(2),o=n(33),l=n.n(o),u={generic:function(e){return r.c().label(e)},string:function(e,a){a=a||{};var n=r.h().transform((function(e,a){return""===a?null:e})).nullable(!0).trim().label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),a.matches&&(n=n.matches(a.matches)),n},boolean:function(e,a){return r.b().default(!1).label(e)},relationToOne:function(e,a){a=a||{};var n=r.c().nullable(!0).label(e).transform((function(e,a){return a?a.id:null}));return a.required&&(n=n.required()),n},stringArray:function(e,a){a=a||{};var n=r.a().compact().ensure().of(r.h().transform((function(e,a){return""===a?null:e})).trim()).label(e);return a.required&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},relationToMany:function(e,a){a=a||{};var n=r.a().nullable(!0).label(e).transform((function(e,a){return a&&a.length?a.map((function(e){return e.id})):[]}));return a.required&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},integer:function(e,a){a=a||{};var n=r.d().transform((function(e,a){return""===a?null:e})).integer().nullable(!0).label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),n},images:function(e,a){a=a||{};var n=r.a().nullable(!0).label(e);return(a.required||a.min)&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},files:function(e,a){a=a||{};var n=r.a().compact().ensure().nullable(!0).label(e);return(a.required||a.min)&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},enumerator:function(e,a){a=a||{};var n=r.h().transform((function(e,a){return""===a?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(a.options||[])));return a.required&&(n=n.required(Object(i.c)("validation.string.selected"))),n},email:function(e,a){a=a||{};var n=r.h().transform((function(e,a){return""===a?null:e})).nullable(!0).trim().label(e).email();return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),a.matches&&(n=n.matches(a.matches)),n},decimal:function(e,a){a=a||{};var n=r.d().transform((function(e,a){return""===a?null:e})).nullable(!0).label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),n},datetime:function(e,a){a=a||{};var n=r.c().nullable(!0).label(e).transform((function(e,a){return e?l()(a,"YYYY-MM-DD HH:mm").toISOString():null}));return a.required&&(n=n.required()),n},date:function(e,a){a=a||{};var n=r.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return a.required&&(n=n.required()),n}};a.a=u},1042:function(e,a,n){"use strict";var t=n(410);function r(){var e=Object(t.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var i=n(411).a.div(r());a.a=i},1043:function(e,a,n){"use strict";var t=n(17),r=n(1084),i=(n(6),n(197));a.a=function(e){var a=function(e){return e.length>1};return Object(t.jsx)(r.a,{children:e.items.map((function(e){return Object(t.jsx)(r.a.Item,{children:a(e)?Object(t.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1084:function(e,a,n){"use strict";var t=n(21),r=n.n(t),i=n(23),o=n.n(i),l=n(555),u=n.n(l),c=n(6),s=n(22),d=n.n(s),m=n(144),b=n(1054),f=n.n(b),p=n(566),h=n(296),j=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},v=function(e){var a,n,t=e.prefixCls,i=e.separator,o=void 0===i?"/":i,l=e.children,u=e.overlay,s=e.dropdownProps,d=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,c.useContext(h.b).getPrefixCls)("breadcrumb",t);return a="href"in d?c.createElement("a",r()({className:"".concat(m,"-link")},d),l):c.createElement("span",r()({className:"".concat(m,"-link")},d),l),n=a,a=u?c.createElement(p.a,r()({overlay:u,placement:"bottomCenter"},s),c.createElement("span",{className:"".concat(m,"-overlay-link")},n,c.createElement(f.a,null))):n,l?c.createElement("span",null,a,o&&""!==o&&c.createElement("span",{className:"".concat(m,"-separator")},o)):null};v.__ANT_BREADCRUMB_ITEM=!0;var O=v,g=function(e){var a=e.children,n=(0,c.useContext(h.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(n,"-separator")},a||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var x=g,y=n(1011),_=n(141),C=n(44),S=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n};function q(e,a,n,t){var r=n.indexOf(e)===n.length-1,i=function(e,a){if(!e.breadcrumbName)return null;var n=Object.keys(a).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return a[n]||e}))}(e,a);return r?c.createElement("span",null,i):c.createElement("a",{href:"#/".concat(t.join("/"))},i)}var E=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach((function(n){e=e.replace(":".concat(n),a[n])})),e},w=function(e){var a,n=e.prefixCls,t=e.separator,i=void 0===t?"/":t,l=e.style,s=e.className,b=e.routes,f=e.children,p=e.itemRender,j=void 0===p?q:p,v=e.params,g=void 0===v?{}:v,x=S(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),w=c.useContext(h.b),M=w.getPrefixCls,B=w.direction,A=M("breadcrumb",n);if(b&&b.length>0){var k=[];a=b.map((function(e){var a,n=E(e.path,g);return n&&k.push(n),e.children&&e.children.length&&(a=c.createElement(y.a,null,e.children.map((function(e){return c.createElement(y.a.Item,{key:e.path||e.breadcrumbName},j(e,g,b,function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,t=u()(e),r=E(a,n);return r&&t.push(r),t}(k,e.path,g)))})))),c.createElement(O,{overlay:a,separator:i,key:n||e.breadcrumbName},j(e,g,b,k))}))}else f&&(a=Object(m.a)(f).map((function(e,a){return e?(Object(_.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(C.a)(e,{separator:i,key:a})):e})));var N=d()(A,o()({},"".concat(A,"-rtl"),"rtl"===B),s);return c.createElement("div",r()({className:N,style:l},x),a)};w.Item=O,w.Separator=x;var M=w;a.a=M},1091:function(e,a,n){"use strict";var t=n(13),r=n(6),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},o=n(47),l=function(e,a){return r.createElement(o.a,Object(t.a)(Object(t.a)({},e),{},{ref:a,icon:i}))};l.displayName="SaveOutlined";a.a=r.forwardRef(l)},1123:function(e,a,n){"use strict";var t=n(1690);a.a=t.a},1124:function(e,a,n){"use strict";var t=n(1622);a.a=t.a},1171:function(e,a,n){"use strict";var t=n(0),r=n(17),i=n(2091),o=n(1101),l=n(6),u=n(1040),c=n(1035),s=function(e){var a=e.label,n=e.name,s=e.hint,d=e.layout,m=e.size,b=e.placeholder,f=e.options,p=e.mode,h=e.autoFocus,j=e.required,v=e.externalErrorMessage,O=e.optionFilterProp,g=Object(c.d)(),x=g.register,y=g.errors,_=g.formState,C=_.touched,S=_.isSubmitted,q=g.setValue,E=g.watch,w=u.a.errorMessage(n,y,C,S,v),M=E(n);return Object(l.useEffect)((function(){x({name:n})}),[x,n]),Object(r.jsx)(i.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:a,validateStatus:w?"error":"success",required:j,help:w||s,children:Object(r.jsx)(o.a,{id:n,onChange:function(a){q(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},onBlur:function(a){e.onBlur&&e.onBlur(a)},value:M,size:m||void 0,placeholder:b||void 0,autoFocus:h||!1,mode:p||void 0,optionFilterProp:O||"children",allowClear:!0,style:{width:"100%"},children:f.map((function(e){return Object(r.jsx)(o.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},a.a=s},1172:function(e,a,n){"use strict";var t=n(13),r=n(6),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},o=n(47),l=function(e,a){return r.createElement(o.a,Object(t.a)(Object(t.a)({},e),{},{ref:a,icon:i}))};l.displayName="UndoOutlined";a.a=r.forwardRef(l)},1209:function(e,a,n){"use strict";var t=n(13),r=n(6),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},o=n(47),l=function(e,a){return r.createElement(o.a,Object(t.a)(Object(t.a)({},e),{},{ref:a,icon:i}))};l.displayName="CloseOutlined";a.a=r.forwardRef(l)},1595:function(e,a,n){"use strict";var t=n(588),r={status:["active","invited","empty-permissions"],roles:Object.keys(t.a.values),occupation:["Etudiant","Universitaire","Journalist","Societe_Civile","ONG_International","Secteur_Public","Organisme_Recherche","Mouvement_Social","Mouvement_Artistique","Entreprenariat_Social","Secteur_Prive","Activiste_Independant","Avocat","Parti_Politique","Autre"],regionTunisie:["tunis","ariana","beja","ben_arouss","bizerte","gabes","gafsa","jendouba","kairouan","kasserine","kebili","kef","mahdia","manouba","medenine","monastir","nabeul","sfax","sidi_bouzid","siliana","sousse","tataouine","tozeur","zaghouan"],pays:["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The_Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cabo_Verde","Cambodia","Cameroon","Canada","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Congo,_Democratic_Republic_of_the","Congo,_Republic_of_the","Costa_Rica","C\xf4te_d\u2019Ivoire","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor_(Timor-Leste)","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","The_Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea,_North","Korea,_South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar_(Burma)","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","Sudan,_South","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]};a.a=r},1625:function(e,a,n){"use strict";var t=n(4),r=function(e){return e.user.form},i=Object(t.a)([r],(function(e){return e.user})),o={selectInitLoading:Object(t.a)([r],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(t.a)([r],(function(e){return Boolean(e.saveLoading)})),selectUser:i,selectRaw:r};a.a=o},1694:function(e,a,n){"use strict";var t=n(0),r=n(17),i=n(2091),o=n(1101),l=n(1035),u=n(6),c=n(1040),s=function(e){var a=e.label,n=e.name,s=e.hint,d=e.layout,m=e.placeholder,b=e.autoFocus,f=e.notFoundContent,p=e.externalErrorMessage,h=e.required,j=Object(l.d)(),v=j.register,O=j.errors,g=j.formState,x=g.touched,y=g.isSubmitted,_=j.setValue,C=j.watch,S=c.a.errorMessage(n,O,x,y,p);Object(u.useEffect)((function(){v({name:n})}),[v,n]);var q=C(n);return Object(r.jsx)(i.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:a,validateStatus:S?"error":"success",required:h,help:S||s,children:Object(r.jsx)(o.a,{mode:"tags",style:{width:"100%"},value:q,onChange:function(a){_(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},onBlur:function(a){e.onBlur&&e.onBlur(a)},notFoundContent:f,placeholder:m||void 0,autoFocus:b||!1})}))};s.defaultProps={layout:null,tokenSeparators:[","],required:!1},a.a=s},2225:function(e,a,n){"use strict";n.r(a);var t=n(17),r=n(6),i=n(39),o=n(2),l=n(7),u=n(227),c=n(1625),s=n(1042),d=n(1043),m=n(0),b=n(423),f=n(1091),p=n(1172),h=n(1209),j=n(1123),v=n(1124),O=n(2091),g=n(439),x=n(438),y=n(1035),_=n(1039),C=n(1171),S=n(1694),q=n(1038),E=n(48),w=n(1041),M=n(1595),B=n(1044),A=n(1037),k=E.e().shape({email:w.a.email(Object(o.c)("user.fields.email")),roles:w.a.stringArray(Object(o.c)("user.fields.roles"),{required:!0,min:1}),membership:w.a.string(Object(o.c)("user.fields.roles"))}),N=E.e().shape({emails:E.a().label(Object(o.c)("user.fields.emails")).of(E.h().transform((function(e,a){return""===a?null:e})).email(Object(o.c)("user.validations.email")).label(Object(o.c)("user.fields.email")).max(255).required()).required().min(1),roles:w.a.stringArray(Object(o.c)("user.fields.roles"),{required:!0,min:1}),membership:w.a.string(Object(o.c)("user.fields.roles"))}),P=function(e){var a=e.single?k:N,n=Object(r.useState)((function(){return{emails:[],email:"",roles:[],membership:"ftdes_member"}})),i=Object(b.a)(n,1)[0],l=Object(y.c)({resolver:Object(B.yupResolver)(a),mode:"all",defaultValues:i}),u=function(a){var n=Object.assign({},a);n.email&&(n.emails=[n.email],delete n.email),e.onSubmit(null,n)},c=e.single,s=e.saveLoading;return Object(t.jsx)(q.a,{children:Object(t.jsx)(y.a,Object(m.a)(Object(m.a)({},l),{},{children:Object(t.jsxs)("form",{onSubmit:l.handleSubmit(u),children:[Object(t.jsxs)(j.a,{gutter:24,children:[Object(t.jsx)(v.a,{span:16,children:Object(t.jsx)(A.a,{children:Object(o.c)("user.new.title")})}),Object(t.jsx)(v.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(t.jsxs)(O.a.Item,Object(m.a)(Object(m.a)({className:"form-buttons"},q.c),{},{children:[Object(t.jsx)(g.a,{title:Object(o.c)("common.save"),children:Object(t.jsx)(x.a,{loading:s,type:"primary",onClick:l.handleSubmit(u),icon:Object(t.jsx)(f.a,{})})}),Object(t.jsx)(g.a,{title:Object(o.c)("common.reset"),children:Object(t.jsx)(x.a,{disabled:s,onClick:function(){Object.keys(i).forEach((function(e){l.setValue(e,i[e])}))},icon:Object(t.jsx)(p.a,{})})}),e.onCancel&&Object(t.jsx)(g.a,{title:Object(o.c)("common.cancel"),children:Object(t.jsx)(x.a,{disabled:s,onClick:function(){return e.onCancel()},icon:Object(t.jsx)(h.a,{})})})]}))})]}),Object(t.jsx)(j.a,{gutter:24,children:Object(t.jsx)(v.a,{span:24,children:Object(t.jsxs)("fieldset",{children:[Object(t.jsx)("legend",{children:Object(o.c)("common.informations")}),c?Object(t.jsx)(_.a,{name:"email",label:Object(o.c)("user.fields.email"),required:!0,layout:q.b}):Object(t.jsx)(S.a,{name:"emails",label:Object(o.c)("user.fields.emails"),notFoundContent:Object(o.c)("user.new.emailsHint"),required:!0,layout:q.b}),Object(t.jsx)(C.a,{name:"roles",label:Object(o.c)("user.fields.roles"),required:!0,options:M.a.roles.map((function(e){return{value:e,label:Object(o.c)("roles.".concat(e,".label"))}})),mode:"multiple",layout:q.b}),Object(t.jsx)("div",{style:{display:"none"},children:Object(t.jsx)(_.a,{name:"membership",label:Object(o.c)("user.fields.email"),required:!1,layout:q.b})})]})})})]})}))})};a.default=function(e){var a=Object(i.d)(),n=Object(i.e)(c.a.selectSaveLoading);Object(r.useEffect)((function(){a(u.a.doInit())}),[]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(d.a,{header:!0,items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("user.menu"),"/user"],[Object(o.c)("user.new.title")]]}),Object(t.jsx)(s.a,{children:Object(t.jsx)(P,{saveLoading:n,onSubmit:function(e,n){n.membership="ftdes_member",n.status="invited",a(u.a.doAdd(n))},onCancel:function(){return Object(l.b)().push("/user")}})})]})}}}]);