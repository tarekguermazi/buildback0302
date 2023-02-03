(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[253],{1037:function(e,t,n){"use strict";var c=n(410);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(411).a.h1(a());t.a=r},1042:function(e,t,n){"use strict";var c=n(410);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(411).a.div(a());t.a=r},1043:function(e,t,n){"use strict";var c=n(17),a=n(1084),r=(n(6),n(197));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1048:function(e,t,n){"use strict";var c=n(410);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(411).a.div(a());t.a=r},1063:function(e,t,n){"use strict";var c=n(17),a=n(1064);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1193:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(410);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(411).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1369:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonSuicideRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonSuicideEdit)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonSuicideCreate)})),d=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonSuicideImport)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:j,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonSuicideDestroy)})),selectPermissionToImport:d};t.a=l},1658:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.raisonSuicide.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},1717:function(e,t,n){"use strict";var c=n(17),a=(n(6),n(197)),r=n(39),i=n(1369);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{to:"/raison-suicide/".concat(n.id),children:n.nameAR})},n.id):Object(c.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},2172:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(6),r=n(39),i=n(41),s=n(2),o=n(496),j=n(4),d=function(e){return e.raisonSuicide.view},l=Object(j.a)([d],(function(e){return e.record})),u={selectLoading:Object(j.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:d},b=n(0),O=n(1063),m=n(1193),f=n(1232),x=n(2091),h=n(1717),p=f.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(O.a,{}):Object(c.jsx)(m.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(p,{tab:Object(s.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.raisonAction.fields.nameAR"),children:t.nameAR})),Boolean(t.parent)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.raisonSuicide.fields.parent"),children:Object(c.jsx)(h.a,{value:t.parent})}))]})},"1"),Object(c.jsx)(p,{tab:Object(s.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.raisonAction.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(p,{tab:Object(s.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.raisonAction.fields.nameEN"),children:t.nameEN}))})},"3")]})})},g=n(1028),y=n(439),T=n(438),C=n(1083),R=n(197),w=n(224),A=n(1369),S=n(377),I=n(1658),P=n(1048),E=function(e){var t=Object(r.d)(),n=Object(i.h)(),a=Object(r.e)(w.a.selectPermissionToRead),o=Object(r.e)(A.a.selectPermissionToEdit),j=Object(r.e)(A.a.selectPermissionToDestroy),d=Object(r.e)(I.a.selectLoading),l=n.params.id;return Object(c.jsxs)(P.a,{children:[o&&Object(c.jsx)(R.a,{to:"/raison-suicide/".concat(l,"/edit"),children:Object(c.jsx)(y.a,{title:Object(s.c)("common.edit"),children:Object(c.jsx)(T.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),j&&Object(c.jsx)(C.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(S.a.doDestroy(l))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(c.jsx)(y.a,{title:Object(s.c)("common.destroy"),children:Object(c.jsx)(T.a,{type:"primary",disabled:d,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(R.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsx)(y.a,{title:Object(s.c)("auditLog.menu"),children:Object(c.jsx)(T.a,{icon:Object(c.jsx)(g.a,{})})})})]})},B=n(1042),F=n(1043),N=n(1037),U=n(1123),L=n(1124);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),j=Object(r.e)(u.selectLoading),d=Object(r.e)(u.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.raisonSuicide.menu"),"/raison-suicide"],[Object(s.c)("entities.raisonSuicide.view.title")]]}),Object(c.jsxs)(B.a,{children:[Object(c.jsxs)(U.a,{children:[Object(c.jsx)(L.a,{span:16,children:Object(c.jsx)(N.a,{children:Object(s.c)("entities.raisonSuicide.view.title")})}),Object(c.jsx)(L.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(E,{match:n})})]}),Object(c.jsx)(v,{loading:j,record:d})]})]})}}}]);