(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(146),l=a(156),d=a(150),c=a(152),u=a(147),f=a(164),A=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date," • ",Object(f.a)(e.timeToRead)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component);t.default=A;var p="2779161860"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(145),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(148),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),A=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var r=a(161),n=a.n(r),i=a(162),o=a.n(i);a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d}),o.a.googleFonts=[{name:"Montserrat",styles:["300","400","700","900"]},{name:"Merriweather",styles:["300","400","400i","700","700i","900","900i"]}],o.a.overrideThemeStyles=function(){return{a:{color:"#e62076"},"a:hover":{backgroundColor:"#e62076",color:"#ffffff"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"h1 a, h2 a":{color:"black"},"h1 a:hover, h2 a:hover":{backgroundColor:"#ffffff",color:"#e62076"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}};var s=new n.a(o.a);var l=s.rhythm,d=s.scale},148:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},149:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(151),o=a(0),s=a.n(o),l=a(146),d=a(147),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/portfolio/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.5),{marginBottom:Object(d.a)(1.5),marginTop:0})},s.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},r)):s.a.createElement("h2",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},r)),s.a.createElement(l.StaticQuery,{query:u,render:function(t){var a=t.site.siteMetadata.social;return s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),padding:Object(d.a)(1.5)+" "+Object(d.a)(.75)}},e,n,s.a.createElement("footer",null,"© ",(new Date).getFullYear()," |"," ",s.a.createElement("a",{href:"https://github.com/"+a.github+"/",target:"_blank"},"github")," ","|"," ",s.a.createElement("a",{href:"https://www.linkedin.com/in/"+a.linkedIn+"/",target:"_blank"},"linked in"),"|"," ",s.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook+"/",target:"_blank"},"facebook")))},data:i})},t}(s.a.Component);t.a=c;var u="4286588850"},151:function(e){e.exports={data:{site:{siteMetadata:{social:{linkedIn:"martin-boksa",github:"Bokos-",facebook:"boksamartin"}}}}}},152:function(e,t,a){"use strict";var r=a(153),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(163),d=a.n(l),c=a(146);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Martin Bokša"}}}}},156:function(e,t,a){"use strict";a(157);var r=a(159),n=a(0),i=a.n(n),o=a(146),s=a(160),l=a.n(s),d=a(147);var c="2237438429";t.a=function(){return i.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Personal blog by"," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/"+r.linkedIn+"/",target:"_blank"},a)," ","who is technology enthusiast, lives in Brno and work primary in React 🍻."))},data:r})}},157:function(e,t,a){"use strict";a(158)("fixed",function(e){return function(){return e(this,"tt","","")}})},158:function(e,t,a){var r=a(11),n=a(24),i=a(16),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},159:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQIG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHUoaNIq2mafLRlJ9gv/8QAHBABAAIBBQAAAAAAAAAAAAAAAgEDIgAEEBEx/9oACAEBAAEFAnGNeF3WmyIKNd3E+ncWiP/EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAwEBPwERP//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAECAQE/AaP/xAAdEAACAgEFAAAAAAAAAAAAAAABEQACMRAgIkFR/9oACAEBAAY/AsqAVJNT7pyKit3jYhcqf//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhYYH/2gAIAQEAAT8hy2tqQYJT6j3HqP1BFIaLkqb16u3O0vX2UDBP/9oADAMBAAIAAwAAABCo6P7/xAAWEQEBAQAAAAAAAAAAAAAAAAAQEQH/2gAIAQMBAT8QijD/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QNhFf/8QAHBABAQADAQADAAAAAAAAAAAAAREAITFhUXGR/9oACAEBAAE/EGUBqdYeYyuLcp1Evpl8M7gsRX6MWeogNO6/B3fuId4k1dlbK4aN0Cq2YD5gHc/c/9k=",width:50,height:50,src:"/portfolio/static/9aa580907d7d9e2f1df05e5a708fade3/d2d31/profile-boksa.jpeg",srcSet:"/portfolio/static/9aa580907d7d9e2f1df05e5a708fade3/d2d31/profile-boksa.jpeg 1x,\n/portfolio/static/9aa580907d7d9e2f1df05e5a708fade3/0b804/profile-boksa.jpeg 1.5x,\n/portfolio/static/9aa580907d7d9e2f1df05e5a708fade3/753c3/profile-boksa.jpeg 2x,\n/portfolio/static/9aa580907d7d9e2f1df05e5a708fade3/31ca8/profile-boksa.jpeg 3x"}}},site:{siteMetadata:{author:"Martin Bokša",social:{linkedIn:"martin-boksa"}}}}}},160:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(51)),s=r(a(154)),l=r(a(155)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:A(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:v,className:A};if(p){var k=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(m,(0,l.default)({src:k.base64},S)),k.tracedSVG&&d.default.createElement(m,(0,l.default)({src:k.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(m,{alt:a,title:t,src:k.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}if(h){var j=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete B.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=y;t.default=v},164:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(165);function r(e){var t=Math.round(e/5);return new Array(t||1).fill("☕️").join("")+" "+e+" min read"}},165:function(e,t,a){var r=a(11);r(r.P,"Array",{fill:a(166)}),a(34)("fill")},166:function(e,t,a){"use strict";var r=a(25),n=a(73),i=a(14);e.exports=function(e){for(var t=r(this),a=i(t.length),o=arguments.length,s=n(o>1?arguments[1]:void 0,a),l=o>2?arguments[2]:void 0,d=void 0===l?a:n(l,a);d>s;)t[s++]=e;return t}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ffcddb149dd29a8cf74e.js.map