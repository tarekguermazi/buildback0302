(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[249],{1037:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var a=n(411).a.h1(i());t.a=a},1042:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var a=n(411).a.div(i());t.a=a},1043:function(e,t,n){"use strict";var c=n(17),i=n(1084),a=(n(6),n(197));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(i.a,{children:e.items.map((function(e){return Object(c.jsx)(i.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1048:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return i=function(){return e},e}var a=n(411).a.div(i());t.a=a},1063:function(e,t,n){"use strict";var c=n(17),i=n(1064);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(i.a,{})})}},1193:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(410);function i(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return i=function(){return e},e}var a=n(411).a.div(i()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},1530:function(e,t,n){"use strict";var c=n(4),i=n(29),a=n(50),r=n(142),s=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.cibleSuicideRead)})),o=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.cibleSuicideEdit)})),b=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.cibleSuicideCreate)})),l=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.cibleSuicideImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:b,selectPermissionToDestroy:Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.cibleSuicideDestroy)})),selectPermissionToImport:l};t.a=j},1659:function(e,t,n){"use strict";var c=n(4),i={selectLoading:Object(c.a)([function(e){return e.cibleSuicide.destroy}],(function(e){return Boolean(e.loading)}))};t.a=i},1718:function(e,t,n){"use strict";var c=n(17),i=(n(6),n(197)),a=n(39),r=n(1530);t.a=function(e){var t=Object(a.e)(r.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(i.a,{to:"/cible-suicide/".concat(n.id),children:n.nameAR})},n.id):Object(c.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},2173:function(e,t,n){"use strict";n.r(t);var c=n(17),i=n(1123),a=n(1124),r=n(6),s=n(39),o=n(41),b=n(2),l=n(497),j=n(4),d=function(e){return e.cibleSuicide.view},u=Object(j.a)([d],(function(e){return e.record})),O={selectLoading:Object(j.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},m=n(0),f=n(1063),x=n(1193),h=n(1232),p=n(2091),v=n(1718),g=h.a.TabPane,R=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(f.a,{}):Object(c.jsx)(x.a,{children:Object(c.jsxs)(h.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(b.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.nameAR"),children:t.nameAR})),Boolean(t.abbrevAR)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.abbrevAR"),children:t.abbrevAR})),Boolean(t.parent)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.parent"),children:Object(c.jsx)(v.a,{value:t.parent})}))]})},"1"),Object(c.jsx)(g,{tab:Object(b.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameFR)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.nameFR"),children:t.nameFR})),Boolean(t.abbrevFR)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.abbrevFR"),children:t.abbrevFR}))]})},"2"),Object(c.jsx)(g,{tab:Object(b.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameEN)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.nameEN"),children:t.nameEN})),Boolean(t.abbrevEN)&&Object(c.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},x.b),{},{label:Object(b.c)("entities.cibleSuicide.fields.abbrevEN"),children:t.abbrevEN}))]})},"3")]})})},y=n(1028),T=n(439),C=n(438),S=n(1083),w=n(197),A=n(224),I=n(1530),E=n(378),B=n(1659),F=n(1048),P=function(e){var t=Object(s.d)(),n=Object(o.h)(),i=Object(s.e)(A.a.selectPermissionToRead),a=Object(s.e)(I.a.selectPermissionToEdit),r=Object(s.e)(I.a.selectPermissionToDestroy),l=Object(s.e)(B.a.selectLoading),j=n.params.id;return Object(c.jsxs)(F.a,{children:[a&&Object(c.jsx)(w.a,{to:"/cible-suicide/".concat(j,"/edit"),children:Object(c.jsx)(T.a,{title:Object(b.c)("common.edit"),children:Object(c.jsx)(C.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),r&&Object(c.jsx)(S.a,{title:Object(b.c)("common.areYouSure"),onConfirm:function(){t(E.a.doDestroy(j))},okText:Object(b.c)("common.yes"),cancelText:Object(b.c)("common.no"),children:Object(c.jsx)(T.a,{title:Object(b.c)("common.destroy"),children:Object(c.jsx)(C.a,{type:"primary",disabled:l,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),i&&Object(c.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(c.jsx)(T.a,{title:Object(b.c)("auditLog.menu"),children:Object(c.jsx)(C.a,{icon:Object(c.jsx)(y.a,{})})})})]})},N=n(1042),U=n(1043),L=n(1037);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),j=Object(s.e)(O.selectLoading),d=Object(s.e)(O.selectRecord);return Object(r.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{items:[[Object(b.c)("dashboard.menu"),"/"],[Object(b.c)("entities.cibleSuicide.menu"),"/cible-suicide"],[Object(b.c)("entities.cibleSuicide.view.title")]]}),Object(c.jsxs)(N.a,{children:[Object(c.jsxs)(i.a,{children:[Object(c.jsx)(a.a,{span:16,children:Object(c.jsx)(L.a,{children:Object(b.c)("entities.cibleSuicide.view.title")})}),Object(c.jsx)(a.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(P,{match:n})})]}),Object(c.jsx)(R,{loading:j,record:d})]})]})}}}]);