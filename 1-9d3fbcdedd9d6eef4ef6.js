(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(150),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(154),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),A=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){"use strict";var n=a(165),r=a.n(n),i=a(166),o=a.n(i);a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d}),o.a.googleFonts=[{name:"Montserrat",styles:["300","400","700","900"]},{name:"Merriweather",styles:["300","400","400i","700","700i","900","900i"]}],o.a.overrideThemeStyles=function(){return{a:{color:"#e62076"},"a:hover":{backgroundColor:"#e62076",color:"#ffffff"},"a.gatsby-resp-image-link:hover":{backgroundColor:"inherit"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"h1 a, h2 a":{color:"black"},"h1 a:hover, h2 a:hover":{backgroundColor:"#ffffff",color:"#e62076"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}};var s=new r.a(o.a);var l=s.rhythm,d=s.scale},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";a(32),a(73),a(74);var n=a(7),r=a.n(n),i=a(158),o=a(0),s=a.n(o),l=a(151),d=a(153),c=a(152),u=a(172),f=a.n(u),A=a(173),p=a.n(A),h=a(159),g=a(160);Object(c.c)([].concat(f.a,p.a));var m={sk:h,en:g},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children,o=t.language,u="en"===o?"/":"/"+o;return e=["/","/sk"].includes(a.pathname)?s.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.5),{marginBottom:Object(d.a)(1.5),marginTop:0})},s.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none"},to:u},n)):s.a.createElement("h2",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none"},to:u},n)),s.a.createElement(l.StaticQuery,{query:b,render:function(t){var a=t.site.siteMetadata.social;return s.a.createElement(c.b,{locale:o,messages:m[o]},s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),padding:Object(d.a)(1.5)+" "+Object(d.a)(.75)}},e,r,s.a.createElement("footer",null,"© ",(new Date).getFullYear()," |"," ",s.a.createElement("a",{href:"https://github.com/"+a.github+"/",target:"_blank"},"github")," ","|"," ",s.a.createElement("a",{href:"https://www.linkedin.com/in/"+a.linkedIn+"/",target:"_blank"},"linked in"),s.a.createElement("span",{id:"footer-right-info"}," ",s.a.createElement(l.Link,{to:"/sk"},"sk")," | ",s.a.createElement(l.Link,{to:"/"},"en")," |"," ",s.a.createElement("a",{href:"/rss.xml",target:"_blank"},"rss")))))},data:i})},t}(s.a.Component);t.a=y;var b="3720467871"},156:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(174),d=a.n(l),c=a(151);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=e.image;return i.a.createElement(c.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description,c=l?siteMetadata.siteUrl+"/"+l:null;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s||siteMetadata.title},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s||siteMetadata.title},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(c?[{property:"og:image",content:c},{name:"twitter:image",content:c}]:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="2229664651"},157:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},158:function(e){e.exports={data:{site:{siteMetadata:{social:{linkedIn:"martin-boksa",github:"martinboksa"}}}}}},159:function(e){e.exports={"about.me":"Osobný blog od {author}, som fanúšikom technológií, žijem v Brne a primárne pracujem v Reacte {emoji}.","discuss.twitter":"Diskutovať na Twitteri","edit.page":"Upraviť stránku","minutes.read":"minútové čítanie","not.found":"404: Stránka nenájdená","read.in":"Čítaj v"}},160:function(e){e.exports={}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog",description:"Personal blog by Martin Bokša who is technology enthusiast, lives in Brno and work primary in React 🍻.",author:"Martin Bokša",siteUrl:"http://martinboksa.eu"}}}}},164:function(e,t,a){"use strict";a(177);var n=a(179),r=a(0),i=a.n(r),o=a(151),s=a(180),l=a.n(s),d=a(153),c=a(152);var u="2237438429";t.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,i.a.createElement(c.a,{id:"about.me",defaultMessage:"Personal blog by {author} who is technology enthusiast, lives in Brno and work primary in React {emoji}.",values:{author:i.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedIn+"/",target:"_blank"},a),emoji:"🍻"}})))},data:n})}},167:function(e,t){},170:function(e,t){},171:function(e,t){},176:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(207);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(152);function l(e){var t=e.minutes,a=Math.round(t/5);return r.a.createElement(r.a.Fragment,null,new Array(a||1).fill("☕️").join("")+" "+t+" ",r.a.createElement(s.a,{id:"minutes.read",defaultMessage:"{minutes, plural, one {minute} other {minutes} } read",values:{minutes:t}}))}l.propTypes={minutes:o.a.number},l.defaultProps={minutes:0}},177:function(e,t,a){"use strict";a(178)("fixed",function(e){return function(){return e(this,"tt","","")}})},178:function(e,t,a){var n=a(11),r=a(24),i=a(16),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},179:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQIG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHUoaNIq2mafLRlJ9gv/8QAHBABAAIBBQAAAAAAAAAAAAAAAgEDIgAEEBEx/9oACAEBAAEFAnGNeF3WmyIKNd3E+ncWiP/EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAwEBPwERP//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAECAQE/AaP/xAAdEAACAgEFAAAAAAAAAAAAAAABEQACMRAgIkFR/9oACAEBAAY/AsqAVJNT7pyKit3jYhcqf//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhYYH/2gAIAQEAAT8hy2tqQYJT6j3HqP1BFIaLkqb16u3O0vX2UDBP/9oADAMBAAIAAwAAABCo6P7/xAAWEQEBAQAAAAAAAAAAAAAAAAAQEQH/2gAIAQMBAT8QijD/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QNhFf/8QAHBABAQADAQADAAAAAAAAAAAAAREAITFhUXGR/9oACAEBAAE/EGUBqdYeYyuLcp1Evpl8M7gsRX6MWeogNO6/B3fuId4k1dlbK4aN0Cq2YD5gHc/c/9k=",width:50,height:50,src:"/static/9aa580907d7d9e2f1df05e5a708fade3/d2d31/profile-boksa.jpeg",srcSet:"/static/9aa580907d7d9e2f1df05e5a708fade3/d2d31/profile-boksa.jpeg 1x,\n/static/9aa580907d7d9e2f1df05e5a708fade3/0b804/profile-boksa.jpeg 1.5x,\n/static/9aa580907d7d9e2f1df05e5a708fade3/753c3/profile-boksa.jpeg 2x,\n/static/9aa580907d7d9e2f1df05e5a708fade3/31ca8/profile-boksa.jpeg 3x"}}},site:{siteMetadata:{author:"Martin Bokša",social:{linkedIn:"martin-boksa"}}}}}},180:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(51)),s=n(a(162)),l=n(a(163)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:A(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:v,className:A};if(p){var k=p;return d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(m,(0,l.default)({src:k.base64},S)),k.tracedSVG&&d.default.createElement(m,(0,l.default)({src:k.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(m,{alt:a,title:t,src:k.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}if(h){var j=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete B.display,d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=y;t.default=v},207:function(e,t,a){var n=a(11);n(n.P,"Array",{fill:a(208)}),a(34)("fill")},208:function(e,t,a){"use strict";var n=a(25),r=a(76),i=a(14);e.exports=function(e){for(var t=n(this),a=i(t.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,a),l=o>2?arguments[2]:void 0,d=void 0===l?a:r(l,a);d>s;)t[s++]=e;return t}}}]);
//# sourceMappingURL=1-9d3fbcdedd9d6eef4ef6.js.map