(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(245),i=a(247),c=l.a.Meta;t.a=function(e){var t=e.title,a=e.imageUrl,n=e.releaseYear,u=e.description,o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{margin:0,padding:0,color:"white",fontWeight:600,fontSize:"14px"}},t),r.a.createElement("p",{style:{margin:0,padding:0,fontSize:"12px",fontWeight:300}},u),r.a.createElement("small",{style:{margin:0,padding:0}},"Release year - ".concat(n)))};return r.a.createElement(i.a,{title:n?r.a.createElement(o,null):t,placement:"bottom"},r.a.createElement(l.a,{hoverable:!0,cover:r.a.createElement("img",{alt:"example",src:a})},r.a.createElement(c,{title:t})))}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){return e.entries.filter((function(e){return e.releaseYear>=2010&&e.programType===t})).filter((function(e,t){return t<21}))}},188:function(e,t,a){"use strict";var n=a(51),r=a(0),l=a.n(r),i=a(244),c=i.a.Option;t.a=function(e){var t=e.handleChange,a=e.styles;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{defaultValue:"titleAToZ",style:Object(n.a)({width:180,marginBottom:10},a),onChange:t},l.a.createElement(c,{value:"titleAToZ"},"Title (A-Z)"),l.a.createElement(c,{value:"titleZtoA"},"Title (Z-A)"),l.a.createElement(c,{value:"releaseYearLowToHigh"},"Release year (Oldest)"),l.a.createElement(c,{value:"releaseYearHighToLow"},"Release year (Latest)")))}},190:function(e,t,a){"use strict";t.a={titleAToZ:function(e,t){return e.title>t.title?1:-1},titleZtoA:function(e,t){return e.title>t.title?-1:1},releaseYearLowToHigh:function(e,t){return e.releaseYear-t.releaseYear},releaseYearHighToLow:function(e,t){return t.releaseYear-e.releaseYear}}},191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),i=a(2),c=a(246),u=a(6);function o(){var e=Object(l.a)(["\n      width:100%\n      "]);return o=function(){return e},e}function s(){var e=Object(l.a)(["\n      width:75%\n      "]);return s=function(){return e},e}function f(){var e=Object(l.a)(["\n  align-self: center;\n  width: 50%;\n  margin-bottom: 10px;\n\n  ","\n\n  ","\n"]);return f=function(){return e},e}var m=Object(i.b)(c.a)(f(),u.a.tablet(s()),u.a.mobile(o()));t.a=function(e){var t=e.handleChange;return r.a.createElement(m,{placeholder:"Search by Title",onChange:t})}},249:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(0),l=a.n(r),i=a(241),c=a(242),u=a(49),o=a(187),s=a(47),f=a(180),m=a(50),g=a(188),h=a(191),d=a(190),p=a(1);function b(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return e},e}var E=a(2).b.div(b());t.default=function(){var e=Object(r.useState)("titleAToZ"),t=Object(n.a)(e,2),a=t[0],p=t[1],b=Object(r.useState)(""),v=Object(n.a)(b,2),y=v[0],O=v[1],j=Object(r.useContext)(u.a),w=j.state,T=j.fetchStreams;return Object(r.useEffect)((function(){0===Object.keys(w).length&&T()}),[T,w]),l.a.createElement(s.a,{title:"Popular Series"},0===Object.keys(w).length?l.a.createElement(m.a,{size:"large"}):l.a.createElement(E,null,l.a.createElement(h.a,{handleChange:function(e){O(e.target.value)}}),l.a.createElement(g.a,{handleChange:function(e){p(e)},styles:{alignSelf:"flex-end"}}),l.a.createElement(i.a,{gutter:[16,16]},Object(o.a)(w,"series").filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())})).sort((function(e,t){return d.a[a](e,t)})).map((function(e){var t=e.title,a=e.images,n=e.releaseYear,r=e.description;return l.a.createElement(c.a,{lg:4,md:6,sm:6,xs:12},l.a.createElement(f.a,{key:t,title:t,releaseYear:n,description:r,imageUrl:a["Poster Art"].url}))})))))}}}]);
//# sourceMappingURL=6.4c85a444.chunk.js.map