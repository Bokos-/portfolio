(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(150),s=n(152),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},146:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(148),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(t,e,n){"use strict";var a=n(161),r=n.n(a),o=n(162),i=n.n(o);n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u}),i.a.googleFonts=[{name:"Montserrat",styles:["300","400","700","900"]},{name:"Merriweather",styles:["300","400","400i","700","700i","900","900i"]}],i.a.overrideThemeStyles=function(){return{a:{color:"#e62076"},"a:hover":{backgroundColor:"#e62076",color:"#ffffff"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"h1 a, h2 a":{color:"black"},"h1 a:hover, h2 a:hover":{backgroundColor:"#ffffff",color:"#e62076"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}};var c=new r.a(i.a);var s=c.rhythm,u=c.scale},148:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},149:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},150:function(t,e,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(151),i=n(0),c=n.n(i),s=n(146),u=n(147),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/portfolio/"===n.pathname?c.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},c.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},a)):c.a.createElement("h2",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},c.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},a)),c.a.createElement(s.StaticQuery,{query:d,render:function(e){var n=e.site.siteMetadata.social;return c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t,r,c.a.createElement("footer",null,"© ",(new Date).getFullYear()," |"," ",c.a.createElement("a",{href:"https://github.com/"+n.github+"/",target:"_blank"},"github")," ","|"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedIn+"/",target:"_blank"},"linked in"),"|"," ",c.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook+"/",target:"_blank"},"facebook")))},data:o})},e}(c.a.Component);e.a=l;var d="4286588850"},151:function(t){t.exports={data:{site:{siteMetadata:{social:{linkedIn:"martin-boksa",github:"Bokos-",facebook:"boksamartin"}}}}}},152:function(t,e,n){"use strict";var a=n(153),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(163),u=n.n(s),l=n(146);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},153:function(t){t.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Martin Bokša"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ce206563b4e52855ffdf.js.map