(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(207),i=n(0),c=n.n(i),s=n(149),u=n(153),l=n(154),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=(e.data,e.pageContext.language);return c.a.createElement(s.StaticQuery,{query:p,render:function(e){return c.a.createElement(u.a,{location:t.props.location,title:e.site.siteMetadata.title,language:n},c.a.createElement(l.a,{title:"404: Not Found"}),c.a.createElement("h1",null,"Not Found"),c.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},data:o})},e}(c.a.Component);e.default=d;var p="1097489062"},149:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(148),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(151),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(t,e,n){"use strict";var a=n(163),r=n.n(a),o=n(164),i=n.n(o);n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u}),i.a.googleFonts=[{name:"Montserrat",styles:["300","400","700","900"]},{name:"Merriweather",styles:["300","400","400i","700","700i","900","900i"]}],i.a.overrideThemeStyles=function(){return{a:{color:"#e62076"},"a:hover":{backgroundColor:"#e62076",color:"#ffffff"},"a.gatsby-resp-image-link:hover":{backgroundColor:"inherit"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"h1 a, h2 a":{color:"black"},"h1 a:hover, h2 a:hover":{backgroundColor:"#ffffff",color:"#e62076"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}};var c=new r.a(i.a);var s=c.rhythm,u=c.scale},151:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},153:function(t,e,n){"use strict";n(32),n(73),n(74);var a=n(7),r=n.n(a),o=n(156),i=n(0),c=n.n(i),s=n(149),u=n(150),l=n(152),d=n(170),p=n.n(d),f=n(171),m=n.n(f),h=n(157),g=n(158);Object(l.c)([].concat(p.a,m.a));var y={sk:h,en:g},b=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children,i=e.language,d="en"===i?"/":"/"+i;return t=["/portfolio/","/portfolio/sk"].includes(n.pathname)?c.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},c.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none"},to:d},a)):c.a.createElement("h2",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},c.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none"},to:d},a)),c.a.createElement(s.StaticQuery,{query:k,render:function(e){var n=e.site.siteMetadata.social;return c.a.createElement(l.b,{locale:i,messages:y[i]},c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t,r,c.a.createElement("footer",null,"© ",(new Date).getFullYear()," |"," ",c.a.createElement("a",{href:"https://github.com/"+n.github+"/",target:"_blank"},"github")," ","|"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedIn+"/",target:"_blank"},"linked in"),c.a.createElement("span",{id:"footer-right-info"}," ",c.a.createElement(s.Link,{to:"/sk"},"sk")," | ",c.a.createElement(s.Link,{to:"/"},"en")," |"," ",c.a.createElement("a",{href:"/portfolio/rss.xml",target:"_blank"},"rss")))))},data:o})},e}(c.a.Component);e.a=b;var k="3720467871"},154:function(t,e,n){"use strict";var a=n(159),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(172),u=n.n(s),l=n(149);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},155:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(54),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},156:function(t){t.exports={data:{site:{siteMetadata:{social:{linkedIn:"martin-boksa",github:"martinboksa"}}}}}},157:function(t){t.exports={"about.me":"Osobný blog od {author}, som fanúšikom technológií, žijem v Brne a primárne pracujem v Reacte {emoji}.","discuss.twitter":"Diskutovať na Twitteri","edit.page":"Upraviť stránku","minutes.read":"minútové čítanie","not.found":"404: Stránka nenájdená"}},158:function(t){t.exports={}},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Martin Bokša"}}}}},165:function(t,e){},168:function(t,e){},169:function(t,e){},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-0e371c446872f582d913.js.map