(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{179:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(244),i=l.a.Meta;t.a=function(e){var t=e.title,n=e.imageUrl;return r.a.createElement(l.a,{hoverable:!0,cover:r.a.createElement("img",{alt:"example",src:n})},r.a.createElement(i,{title:t}))}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){return e.entries.filter((function(e){return e.releaseYear>=2010&&e.programType===t})).filter((function(e,t){return t<21}))}},183:function(e,t,n){"use strict";var a=n(51),r=n(0),l=n.n(r),i=n(243),c=i.a.Option;t.a=function(e){var t=e.handleChange,n=e.styles;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{defaultValue:"titleAToZ",style:Object(a.a)({width:180,marginBottom:10},n),onChange:t},l.a.createElement(c,{value:"titleAToZ"},"Title (A-Z)"),l.a.createElement(c,{value:"titleZtoA"},"Title (Z-A)"),l.a.createElement(c,{value:"releaseYearLowToHigh"},"Release year (Low-High)"),l.a.createElement(c,{value:"releaseYearHighToLow"},"Release year (High-Low)")))}},189:function(e,t,n){"use strict";t.a={titleAToZ:function(e,t){return e.title>t.title?1:-1},titleZtoA:function(e,t){return e.title>t.title?-1:1},releaseYearLowToHigh:function(e,t){return e.releaseYear-t.releaseYear},releaseYearHighToLow:function(e,t){return t.releaseYear-e.releaseYear}}},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1),i=n(4),c=n(245),u=n(10);function o(){var e=Object(l.a)(["\n      width:100%\n      "]);return o=function(){return e},e}function s(){var e=Object(l.a)(["\n      width:75%\n      "]);return s=function(){return e},e}function f(){var e=Object(l.a)(["\n  align-self: center;\n  width: 50%;\n  margin-bottom: 10px;\n\n  ","\n\n  ","\n"]);return f=function(){return e},e}var m=Object(i.b)(c.a)(f(),u.a.tablet(s()),u.a.mobile(o()));t.a=function(e){var t=e.handleChange;return r.a.createElement(m,{placeholder:"Search by Title",onChange:t})}},247:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n(0),l=n.n(r),i=n(240),c=n(241),u=n(49),o=n(182),s=n(47),f=n(179),m=n(50),h=n(183),g=n(190),b=n(189),v=n(1);function E(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return E=function(){return e},e}var d=n(4).b.div(E());t.default=function(){var e=Object(r.useState)("titleAToZ"),t=Object(a.a)(e,2),n=t[0],v=t[1],E=Object(r.useState)(""),p=Object(a.a)(E,2),O=p[0],j=p[1],w=Object(r.useContext)(u.a),y=w.state,T=w.fetchStreams;return Object(r.useEffect)((function(){0===Object.keys(y).length&&T()}),[T,y]),l.a.createElement(s.a,{title:"Popular Series"},0===Object.keys(y).length?l.a.createElement(m.a,{size:"large"}):l.a.createElement(d,null,l.a.createElement(g.a,{handleChange:function(e){j(e.target.value)}}),l.a.createElement(h.a,{handleChange:function(e){v(e)},styles:{alignSelf:"flex-end"}}),l.a.createElement(i.a,{gutter:[16,16]},Object(o.a)(y,"series").filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())})).sort((function(e,t){return b.a[n](e,t)})).map((function(e){var t=e.title,n=e.images;return l.a.createElement(c.a,{lg:4,md:6,sm:6,xs:12},l.a.createElement(f.a,{key:t,title:t,imageUrl:n["Poster Art"].url}))})))))}}}]);
//# sourceMappingURL=6.75cabb29.chunk.js.map