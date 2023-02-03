(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[245],{1039:function(e,n,t){"use strict";var r=t(0),a=t(17),i=t(2091),o=t(2094),l=t(1035),c=t(6),u=t(1040),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,h=e.autoComplete,v=e.prefix,p=e.externalErrorMessage,g=e.required,O=e.addonAfter,x=Object(l.d)(),y=x.setValue,q=x.watch,w=x.register,S=x.errors,k=x.formState,T=k.touched,z=k.isSubmitted;Object(c.useEffect)((function(){w({name:t})}),[w,t]);var C=u.a.errorMessage(t,S,T,z,p);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:g,validateStatus:C?"error":"success",help:C||s,children:Object(a.jsx)(o.a,{id:t,name:t,type:b,value:q(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:h||void 0,prefix:v||void 0,addonAfter:O||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},1040:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},1041:function(e,n,t){"use strict";var r=t(56),a=t(48),i=t(2),o=t(33),l=t.n(o),c={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=c},1089:function(e,n,t){"use strict";var r=t(410);function a(){var e=Object(r.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"]);return a=function(){return e},e}var i=t(411).a.button(a());n.a=i},1171:function(e,n,t){"use strict";var r=t(0),a=t(17),i=t(2091),o=t(1101),l=t(6),c=t(1040),u=t(1035),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.placeholder,f=e.options,j=e.mode,h=e.autoFocus,v=e.required,p=e.externalErrorMessage,g=e.optionFilterProp,O=Object(u.d)(),x=O.register,y=O.errors,q=O.formState,w=q.touched,S=q.isSubmitted,k=O.setValue,T=O.watch,z=c.a.errorMessage(t,y,w,S,p),C=T(t);return Object(l.useEffect)((function(){x({name:t})}),[x,t]),Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,validateStatus:z?"error":"success",required:v,help:z||s,children:Object(a.jsx)(o.a,{id:t,onChange:function(n){k(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:C,size:m||void 0,placeholder:b||void 0,autoFocus:h||!1,mode:j||void 0,optionFilterProp:g||"children",allowClear:!0,style:{width:"100%"},children:f.map((function(e){return Object(a.jsx)(o.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},n.a=s},1513:function(e,n,t){"use strict";var r=t(410);function a(){var e=Object(r.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return a=function(){return e},e}var i=t(411).a.div(a());n.a=i},1514:function(e,n,t){"use strict";var r=t(410);function a(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return a=function(){return e},e}var i=t(411).a.div(a());n.a=i},1515:function(e,n,t){"use strict";var r=t(410);function a(){var e=Object(r.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return a=function(){return e},e}var i=t(411).a.div(a());n.a=i},1540:function(e,n,t){"use strict";var r=t(410);function a(){var e=Object(r.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return a=function(){return e},e}var i=t(411).a.div(a());n.a=i},1692:function(e,n,t){"use strict";var r=t(4),a=function(e){return e.tenant.form},i=Object(r.a)([a],(function(e){return e.record})),o={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectRecord:i,selectRaw:a};n.a=o},2214:function(e,n,t){"use strict";t.r(n);var r=t(423),a=t(17),i=t(6),o=t(39),l=t(2),c=t(27),u=t(29),s=t(1513),d=t(1514),m=t(1540),b=t(1515),f=t(0),j=t(229),h=t(1692),v=t(1039),p=t(1035),g=t(438),O=t(1041),x=t(48),y=t(51);var q=t(38),w=t(1044),S=x.e().shape({name:O.a.string(Object(l.c)("tenant.fields.tenantName"),{required:!0,max:50}),url:O.a.string(Object(l.c)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,Object(l.c)("tenant.validation.url"))}),k=x.e().shape({name:O.a.string(Object(l.c)("tenant.fields.tenantName"),{required:!0,max:50})}),T=q.a.isEnabled?S:k;var z=function(e){var n=Object(o.d)(),t=Object(i.useState)({name:""}),c=Object(r.a)(t,1)[0],s=Object(p.c)({resolver:Object(w.yupResolver)(T),mode:"onSubmit",defaultValues:c}),d=Object(o.e)(h.a.selectSaveLoading),m=Object(o.e)(u.a.selectInvitedTenants);return Object(a.jsx)(p.a,Object(f.a)(Object(f.a)({},s),{},{children:Object(a.jsxs)("form",{onSubmit:s.handleSubmit((function(e){n(j.a.doCreate(e))})),children:[Object(a.jsx)(v.a,{name:"name",placeholder:Object(l.c)("tenant.fields.tenantName"),autoComplete:"name",size:"large",layout:null,onChange:function(e){return s.setValue("url",e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"))},autoFocus:!0}),q.a.isEnabled&&Object(a.jsx)(v.a,{name:"url",placeholder:Object(l.c)("tenant.fields.tenantUrl"),size:"large",layout:null,addonAfter:Object(a.jsxs)("span",{style:{fontWeight:"bold"},children:[".",y.a.frontendUrl.host]})}),Object(a.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:d,children:Object(l.c)("tenant.create.button")}),Boolean(m.length)&&Object(a.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(l.c)("tenant.invitation.view")})]})}))},C=t(206),M=t(592),V=t(1171),Y=x.e().shape({id:O.a.string(Object(l.c)("tenant.fields.tenantId"))});var I=function(e){var n=Object(o.d)(),t=Object(o.e)(M.a.selectLoading),c=Object(o.e)(u.a.selectInvitedTenants),s=Object(o.e)(u.a.selectCurrentUser),d=Object(i.useState)({id:c[0].id}),m=Object(r.a)(d,1)[0],b=Object(p.c)({resolver:Object(w.yupResolver)(Y),mode:"onSubmit",defaultValues:m});return Object(a.jsx)(p.a,Object(f.a)(Object(f.a)({},b),{},{children:Object(a.jsxs)("form",{onSubmit:b.handleSubmit((function(e){var t=e.id,r=s.tenants.find((function(e){return e.tenant.id===t}));n(C.a.doAccept(r.invitationToken))})),children:[Object(a.jsx)(V.a,{name:"id",placeholder:Object(l.c)("tenant.fields.tenantId"),size:"large",options:c.map((function(e){return{value:e.id,label:e.name}})),layout:null}),Object(a.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:t,children:Object(l.c)("tenant.invitation.accept")}),Object(a.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(l.c)("tenant.new.title")})]})}))},B=t(1089);n.default=function(){var e=Object(i.useState)("form"),n=Object(r.a)(e,2),t=n[0],f=n[1],j=Object(o.d)(),h=Object(o.e)(u.a.selectInvitedTenants),v=Object(o.e)(u.a.selectBackgroundImageUrl),p=Object(o.e)(u.a.selectLogoUrl);Object(i.useEffect)((function(){f(h.length?"select":"form")}),[h]);var g=function(){f((function(e){return"form"===e?"select":"form"}))};return Object(a.jsx)(b.a,{style:{backgroundImage:"url(".concat(v||"/images/tenant.jpg",")")},children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(d.a,{children:p?Object(a.jsx)("img",{src:p,width:"240px",alt:Object(l.c)("app.title")}):Object(a.jsx)("h1",{children:Object(l.c)("app.title")})}),"form"===t?Object(a.jsx)(z,{onViewToggle:g}):Object(a.jsx)(I,{onViewToggle:g}),Object(a.jsx)(m.a,{children:Object(a.jsx)(B.a,{onClick:function(){j(c.a.doSignout())},children:Object(l.c)("auth.signout")})})]})})}}}]);