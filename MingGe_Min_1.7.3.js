/*  MingGEjs类库1.7.3
 *  
 *  你会用JQUERY，那你也会用这个框架，语法都是一样的！
 *
 *  MingGe的运行绝对比JQUERY快，因为够精简，MingGejs是你的最佳选择，请多多支持，
 *
 *  作者：明哥先生 --QQ399195513 QQ群461550716 官网www.shearphoto.com
 */
!function(aj,ai,ah){var ag="1.7.3",af=document,ae=af.getElementsByClassName?!0:!1,ad=af.querySelectorAll?!0:!1,ac=Array.prototype.slice,ab=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=Object.prototype.toString,Z=function(d,c){return c.toUpperCase()},Y=/-([a-z])/gi,X={fast:200,slow:600,normal:400},W=/alpha\([^)]*\)/,V=/^\s*(matrix3d|translate3d|translateX|translateY|translateZ|scale3d|scaleX|scaleY|scaleZ|rotate3d|rotateX|rotateY|rotateZ|perspective|matrix|translate|translateX|translateY|scale|scaleX|scaleY|rotate|skew|skewX|skewY)\s*$/i,U=function(d){d=d.toLowerCase();var c=/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||!/compatible/.test(d)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(d)||[];return{browser:c[1]||"",version:c[2]||"0"}},S=function(e){var d=ab.exec(e),f=!1;return null===d?!1:f=d[1]?["getElementById","id",d[1],{Id:!0}]:d[2]?["getElementsByTagName","tagName",d[2],{Tag:!0}]:["getElementsByClassName","className",d[3],{Class:!0}]},Q=function(b){return L.each(["r","t","n","f","v"],function(a,d){d="\\"+d,b=b.replace(new RegExp(d,"g"),d)}),b.replace(/[\x01-\x12]/g,"")},O=function(b){return b.replace(/[\"\'\\\/]/g,function(c){return"\\"+c})},M={transform:!1,bindCallback:function(a,h,g){var f=this;return function(b){setTimeout(function(){"boolean"==typeof g&&g===!0&&L(f).unbind(h,a)},1),b||(b=aj.event),a.call(f,b)}},getFilter:function(d){var c;return(c=M.original("filter",M.oStyleValue(d)))?(c=/opacity\s*=\s*([0-9]+)/.exec(c),c=c?0.01*parseInt(c[1]):1):c=1,c},getDisplay:function(f){if(/^(div|ul|p|h1|h2|h3|h4|h5|h6|dd|dt|dl|ol|table|nav|form)$/i.test(f)){return"block"}if(/^(span|ul|b|a|em|strong|img)$/i.test(f)){return"inline"}if(/^li$/i.test(f)){return"list-item"}if(/^(input|button)$/i.test(f)){return"inline-block"}if("TD"==f){return"table-cell"}if("TR"==f){return"table-row"}var g,e=af.createElement(f),h=af.body;return e.style.visibility="hidden",h.appendChild(e),g=M.original("display",M.oStyleValue(e)),h.removeChild(e),g},seachIndex:function(d,c){return d[0] in c?d[0]:d[1] in c?d[1]:!1},isIndex:function(d,c){return d in c},jsonp:function(ak){var x,w,v,u,s,E=ak.url,D=ak.jsonp,C=ak.jsonpCallback,B=ak.success,A=ak.timeout,z=ak.error,y=ak.data,t=function(){if(aj[w]){if(aj[w].MingGeJSONCallBack){return A||(r>30&&s?(clearInterval(s),s=null):r++),void 0}x=aj[w]}s&&(clearInterval(s),s=null),aj[w]=function(b){u&&(clearTimeout(u),u=null),L.isFunction(B)&&B(M.JsonString.StringToJson(b)||b,"success"),a()},aj[w].MingGeJSONCallBack=1,v=L.createScript(E)},r=0,a=function(){if(v&&v[0].removeChild(v[1]),x){return aj[w]=x,void 0}try{delete aj[w]}catch(c){aj[w]=null}};E=E.replace(/\?+$/,"callback"),L.isTxt(y)&&(E=L.urlRevise(E,L.objToUrl(y))),D=J(D),C?w=J(C):(D="[&|\\?]+(?:"+(L.isTxt(D)?D:"jsoncallback|callback")+")",w=new RegExp(""+D+"\\s*=\\s*([^?]+?)(&|$)","i").exec(E),w=w?J(w[1]):"callback"),A&&(u=setTimeout(function(){s&&(clearInterval(s),s=null),L.isFunction(z)&&z(505),a()},A)),s=setInterval(t,200)},addElemEve:function(a,j,i){a===aj&&(a=L);var h=a.MingGeBind,g=L.isObject(h);g&&L.isArray(h[j])?h[j].push(i):(g||(a.MingGeBind=h={}),h[j]=[i])},eachDel:function(f,e,h,g){L.each(f,function(b,a){h?a.callback==h&&(M.delEvent(e,g,a),f[b]=null):(M.delEvent(e,g,a),f[b]=null)})},DelElemEve:function(a,j,i){var h,g=a===aj?(h=L).MingGeBind:(h=a).MingGeBind;g&&(j?g[j]&&this.eachDel(g[j],a,i,j):L.each(g,function(b,d){M.eachDel(d,a,i,b)}),L.each(g,function(e,d){if(L.each(d,function(b,k){k||(d.splice(b,1),d.length<1&&delete d[b])}),L.isEmptyObject(d)){delete g[e];try{L.isEmptyObject(g)&&delete h.MingGeBind}catch(f){h.MingGeBind=null}}}))},htmlVal:function(e,c){try{return L.isTxt(c)?(L.each.call(this.nodeList,function(){M.isIndex(e,this)&&(this[e]=c)}),this):this.nodeList[0]?this.nodeList[0][e]:null}catch(f){return null}},oStyleValue:function(a){var d=a.currentStyle?a.currentStyle:aj.getComputedStyle(a,null);return d.getPropertyValue?[d,"getPropertyValue"]:[d,"getAttribute"]},original:function(d,c){return c[0][c[1]](L.styleName(d))},find:function(g){var f,h,j=0,i=new L();if(h=H(g)){for(;f=this.nodeList[j++];){I.call(i,f,h)}i.nodeList=G(i.nodeList)}return i},filter:function(h){var g,j,i,l=0,k=new L();if(k.SelectorTxt=this.SelectorTxt,j=S(h),!j){return k}for(i=new RegExp("(^|\\s)"+j[2]+"(\\s|$)",j[3].Tag&&"i");g=this.nodeList[l++];){i.test(g[j[1]])&&k.nodeList.push(g),k.nodeList=G(k.nodeList)}return k},animate:function(r,q,p,o){o=J(o),o=L.isString(o)&&/^(linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier\s*\(.+\))$/.test(o)?o:"ease-out";var k,n=M.transition+"TimingFunction",m={},l=this,j=function(){k&&(clearInterval(k),k=null);for(var e,f,c=0;e=l.nodeList[c++];){e.isMingGeAnimate&&(f=e.style,f[M.transition]=f[n]=null,p.call(e))}};return m[M.transition]=q+"ms",m[n]=o,this.css(m),setTimeout(function(){l.css(r)},5),k=setInterval(M.timeCompute(new Date().getTime(),q-1,j),5),this},cmdFun:function(b){switch(b=L.trim(b)){case"\u5916\u524d":case"beforeBegin":b="beforeBegin";break;case"\u5916\u540e":case"afterEnd":b="afterEnd";break;case"\u5185\u524d":case"afterBegin":b="afterBegin";break;case"\u5185\u540e":case"beforeEnd":default:b="beforeEnd"}return b},insertHTML:function(d,c){return c=M.cmdFun(c),d=J(d),L.isTxt(d)&&this.each(function(){this.insertAdjacentHTML(c,d)}),this},createNode:function(v,u,t){var r,q,p,o,n,m,s=new L(),e={};return v=L.trim(v),L.isTxt(u)?e.html=L.trim(u):L.isObject(u)&&(e=u,e.value&&(e.html=e.value,delete e.value)),t=M.cmdFun(t),r=function(){try{p=af.createElement("div"),o=af.createElement(v),n="MingGeTemp"+Math.random().toString().match(/[^\.]+$/)[0],m,q=q||M.seachIndex(["value","innerHTML"],o),p.appendChild(o);for(m in e){"id"!=m&&L.isTxt(e[m])&&("html"==m||o.setAttribute(m,e[m]))}o.id=n,this.insertAdjacentHTML(t,p.innerHTML),o=af.getElementById(n),e.id?o.id=e.id:o.removeAttribute?o.removeAttribute("id"):o.id="",e.html&&q&&(o[q]=e.html)}catch(a){}o&&s.nodeList.push(o)},this.each(r),s.SelectorTxt=af.body,s.SelectorStr="000",s},delEvent:null,addEvent:null,initEvent:function(){(null==this.addEvent||null==this.addEvent)&&this.seachEvent()},seachEvent:function(){var e,f,d={add:[function(){e=arguments,e[0].addEventListener(e[1],e[2],!1)},function(){var b=arguments;b[0].removeEventListener(b[1],b[2],!1)}],att:[function(){e=arguments,e[0].attachEvent("on"+e[1],e[2])},function(){var b=arguments;b[0].detachEvent("on"+b[1],b[2])}],no:[function(){e=arguments,e[0]["on"+e[1]]=e[2]},function(){e=arguments,e[0]["on"+e[1]]=null}]};f=af.addEventListener?d.add:af.attachEvent?d.att:d.no,this.addEvent=f[0],this.delEvent=f[1]},timeCompute:function(f,e,h){var g;return function(){g=new Date().getTime()-f,(g>e||0>g)&&h()}},ajax:function(){this.serverdata=this.erromsg=this.timeout=this.stop=this.xmlhttp=!1,this.transit=!0},ajaxPrototype:{get:function(e,d,f){return this.simplify(e,"get",!0,d,f,20000,!0)},post:function(e,d,f){return this.simplify(e,"post",!0,d,f,20000,!1)},getJSON:function(e,d,f){return this.simplify(e,"get",!0,d,f,20000,!0,/[\?&]+.+\s*=\s*\?/i.test(e)?"jsonp":"json")},simplify:function(r,q,p,o,n,m,l,k){if(L.isFunction(o)){var j=n;n=o,o=j||null}return this.ajax({url:r,type:q,dataType:k,timeout:m,async:p,lock:!0,cache:l,complete:!1,data:o,success:n}),this},handle:function(e,d){if(4==e.readyState){if(this.stop===!0){return}if(this.transit=!0,this.removeUploadEve(),d.timeout&&d.async&&(clearTimeout(this.timeout),this.timeout=!1),200==e.status){var f=this.serverdata=J(e.responseText);L.isFunction(d.success)&&("json"==d.dataType&&(f=M.JsonString.StringToJson(f)||f),d.success(f,"success"))}else{this.erromsg=e.status,L.isFunction(d.error)&&d.error(e.status)}}else{if(0==e.readyState){if(this.stop===!0){return}this.removeUploadEve(),d.timeout&&d.async&&(clearTimeout(this.timeout),this.timeout=!1),this.erromsg=e.readyState,this.transit=!0,L.isFunction(d.error)&&d.error(e.readyState)}}},out:function(b){this.transit=!0,this.erromsg=504,this.stop=!0,this.removeUploadEve(),L.isFunction(b.error)&&b.error(504)},removeUploadEve:function(){},ajax:function(a){var l,k,j,i;if(a.timeout=/^\d+/.test(a.timeout)?parseFloat(a.timeout):20000,a=L.extend({type:"get",timeout:20000,async:!0},a),a.dataType&&(a.dataType=J(a.dataType),"jsonp"==a.dataType)){return M.jsonp(a),this}if(a.lock&&!this.transit){return !1}this.transit=!1,this.stop=this.erromsg=!1,l=aj.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"),a.type=a.type.toUpperCase(),k=function(){},a.data=L.objToUrl(a.data),L.isTxt(a.data)?(a.data=a.data&&J(a.data),k=function(){l.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}):"[object FormData]"!==aa.call(a.data)?(a.data="",k=function(){l.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}):(L.isFunction(a.progress)&&(l.upload.addEventListener("progress",a.progress,!1),this.removeUploadEve=function(){l.upload.removeEventListener("progress",a.progress,!1)}),a.type="POST"),j=""==a.data?null:a.data,i=this,L.isFunction(a.complete)&&a.complete(),a.timeout&&a.async&&(this.timeout=setTimeout(function(){i.out(a)},a.timeout)),a.async===!0&&(l.onreadystatechange=function(){i.handle(l,a)});try{switch(a.type){case"POST":l.open("POST",a.url,a.async),k();break;default:l.open("GET",L.urlRevise(a.url,j),a.async),a.cache===!0||l.setRequestHeader("If-Modified-Since","0")}}catch(h){return this.erromsg=505,this.removeUploadEve(),a.timeout&&a.async&&(clearTimeout(this.timeout),this.timeout=!1),this.transit=!0,L.isFunction(a.error)&&a.error(505),void 0}l.send(j),a.async===!1&&i.handle(l,a)}},JsonString:{_json_:null,JsonToString:function(e){try{this._json_=[],this._read_(e,!0);var d=this._json_.join("").replace(/,([\}\]])/g,function(g,c){return c});return this._json_=null,Q(d)}catch(f){return alert("Format does not match, conversion fails"),void 0}},StringToJson:function(a,h){if(L.isString(a)){try{if(null==h&&/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aj.JSON&&aj.JSON.parse?aj.JSON.parse(a):new Function("return ("+a+")")()}if(h){var g=new Function("return ("+a+")")();return type=this._type_(g),"[object Object]"!==type&&"[object Array]"!==type?!1:g}return !1}catch(f){return !1}}},_type_:function(b){return L.isNumber(b.nodeType)?"[object DOC]":aa.call(b)},_addjson_:function(f,d,h){var g={"[object Object]":d,"[object Array]":h};this._json_.push(g[f])},_addstring_:function(e){var f,d=typeof e;return"string"===d?'"'+O(e)+'"':"number"===d?e:(f=this._type_(e),"[object Object]"===f||"[object Array]"===f?!1:'""')},_read_:function(h,g){var k,j,i,l=this._type_(h);if(g&&"[object Object]"!==l&&"[object Array]"!==l){return alert("Your incoming is not an array or JSON"),this._json_=null}this._addjson_(l,"{","[",g),k=h.constructor.prototype;for(j in h){L.isUndefined(k[j])&&(i=this._addstring_(h[j]),"boolean"!=typeof i?this._addjson_(l,'"'+O(j)+'":'+i+",",i+","):(this._addjson_(l,'"'+O(j)+'":',""),this._read_(h[j],!1)))}g=g?"":",",this._addjson_(l,"}"+g,"]"+g)}},opacity:!1,transition:!1,style:function(r,q,p){var o,n,m,l,k,j;return p=L.isTxt(p)?J(p):"",V.test(q)?(n=new RegExp(""+q+"\\s?\\((.*)\\)","i"),m=r[M.transform],p?q+="("+p+")":q="",o=[M.transform,m?n.test(m)?m.replace(n,q):m+" "+q:q]):"opacity"==q?("opacity"==M.opacity?(j=parseFloat(p,10),o=["opacity",isNaN(j)?null:j]):(l=r.filter,k="NaN"==parseInt(p,10)+""?"":"alpha(opacity="+100*p+")",o=W.test(l)?["filter",l.replace(W,k)]:["filter",k]),o):[q,p]},ready:function(a){function f(){try{var h=function(){"complete"===af.readyState&&(M.addEvent(af,"readystatechange",h),a())},c=aj.frameElement}catch(b){return M.addEvent(af,"readystatechange",h),void 0}if(null!=c){return M.addEvent(af,"readystatechange",h),void 0}try{af.documentElement.doScroll("left")}catch(h){return setTimeout(f,13),void 0}a()}M.initEvent();var e;L.isFunction(a)&&(af.addEventListener?(e=function(){af.removeEventListener("DOMContentLoaded",e,!1),a()},af.addEventListener("DOMContentLoaded",e,!1)):f())}},K=function(f){var h,g;try{return ac.call(f)}catch(e){for(h=[],g=0;g<f.length;g++){h[g]=f[g]}return h}},J=function(d){try{return d.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}catch(c){return d}},I=function(j,e){var p,o,m,n,l,k;if(e[0]||e[1][3].Id&&af===j){return p=e[1][2],o=j[e[1][0]]("MingGeAllelem2015"===p?"*":p),o&&(o=e[1][3].Id?[o]:K(o),this.nodeList=this.nodeList.concat(o)),void 0}for(n=j.getElementsByTagName("*"),l=0,k=new RegExp("(^|\\s)"+e[1][2]+"(\\s|$)");m=n[l++];){k.test(m[e[1][1]])&&this.nodeList.push(m)}},H=function(d){var c=S(d);return c?[c[3].Tag||ae&&c[3].Class,c]:!1},G=function(i){var h,l,k,n=0,m=[],j=!1;if(i.item||L.isArray(i)){for(;h=i[n++];){for(l=0;k=m[l++];){if(h===k){j=!0;break}}j||m.push(h),j=!1}}return m},F=function(B,A,z){var v,t,r,q,w,u,s,p,o,y=B.match(/[^\,]+/g),x=A.match(/[^\,]+/g);if(y&&x){for(w="",u=" "==z,s=/^[\w-_]+/,p=0;p<y.length;p++){for(v=y[p]+z,q=u||(r=v.match(s)),o=0;o<x.length;o++){q?v==x[o]?w+=v+",":r?(t=x[o].match(s),t?t[0]==r[0]&&(w+=v+x[o].replace(s,"")+","):w+=v+x[o]+","):w+=v+x[o]+",":w+=x[o]+v+","}}return w.replace(/,+$/,"")}},T=function(t,s,r,q){var p,o,n,e,m;try{if(n=!1,r){if(s.SelectorTxt===af||s.SelectorTxt===aj){return q}if(s.SelectorTxt&&""!=t){if(r.filter){if(s.SelectorTxt.ownerDocument){return s.SelectorStr&&"000"!==s.SelectorStr?(o="#"+(s.SelectorTxt.id||(n=!0,s.SelectorTxt.id="tempMingGeId2015")),p=F(o,q.SelectorStr=F(s.SelectorStr,t,"")," "),q.nodeList=K(s.SelectorTxt.querySelectorAll(p)),q.SelectorTxt=s.SelectorTxt,n&&s.SelectorTxt.removeAttribute("id"),q):-1}p=F(s.SelectorTxt,t,"")}else{if("000"===s.SelectorStr){return -1}if(s.SelectorTxt.ownerDocument){return o="#"+(s.SelectorTxt.id||(n=!0,s.SelectorTxt.id="tempMingGeId2015")),p=s.SelectorStr?F(o,q.SelectorStr=F(s.SelectorStr,t," ")," "):F(o,q.SelectorStr=t," "),q.nodeList=K(s.SelectorTxt.querySelectorAll(p)),q.SelectorTxt=s.SelectorTxt,n&&s.SelectorTxt.removeAttribute("id"),q}p=F(s.SelectorTxt,t," ")}}q.nodeList=K(af.querySelectorAll(p)),q.SelectorTxt=p}else{m=/^#([\w-_]+)$/.exec(t),q.nodeList=m?(e=af.getElementById(m[1]))?[e]:[]:K(af.querySelectorAll(t)),q.SelectorTxt=t}}catch(a){}return q},R=function(r,q,p){var n,m,l,g,e,o=new L();if(L.isString(r)){if(r=J(r),ad&&-1!=(n=T(r,q,p,o))){return n}if(m=r.match(/[^\,]+/g),l=[],m){if(g=m.length,1===g){return P(m[0],q,p)}for(e=0;g>e;e++){l=l.concat(P(m[e],q,p).nodeList)}return o.nodeList=G(l),o}return o}return p?o:o.init(r||0,af)},P=function(h,g,l){var j,i,k=h.match(/[^\s]+/g);if(k){if(j=k.length,l&&l.filter&&j>2){return new L()}for(i=0;j>i;i++){g=N(k[i],i,g,l)}}return g},N=function(h,e,l,k){var i,j=h.match(/[\.#]?([\w-]+)/g);if(j){for(i=0;i<j.length;i++){l=0==e?0==i?k?k.find?M.find.call(l,j[0]):M.filter.call(l,j[0]):new L().init(j[0],af):M.filter.call(l,j[i]):0==i?M.find.call(l,j[0]):M.filter.call(l,j[i])}}return l},L=aj.MingGe=function(a){return this===aj||this.MingGe?R(a):(this.nodeList=[],void 0)};L.fn=L.prototype={version:"\u4f60\u4f7f\u7528\u7684\u7248\u672c\u662fMingGejs"+ag,init:function(a,f){var e;return L.isFunction(a)?(M.ready(a),this):(a===aj||a===af||a.ownerDocument?(this.SelectorTxt=a,this.nodeList=[a]):(e=H(a))&&I.call(this,f,e),this)},is:function(b){switch(b=J(b)){case":animate":return this.nodeList[0]?this.nodeList[0].isMingGeAnimate?!0:!1:!1}},append:function(b){return M.createNode.call(this,b,{},"beforeEnd")},createNode:function(){return M.createNode.apply(this,arguments)},load:function(f,e){if(L.isFunction(f)){return this.bind("load",f)}var g,h=this;return successFun=function(b){h.each(function(){g=M.seachIndex(["value","innerHTML"],this),g&&(this[g]=b)})},null==e?L.get(f,null,successFun):L.post(f,e,successFun),this},insertHTML:function(){return M.insertHTML.apply(this,arguments)},stop:function(){if(M.transition||(M.transition=L.html5Attribute("transition")),!M.transition){return this}var b;return this.each(function(){if(this.isMingGeAnimate){delete this.isMingGeAnimate,this.mingGeAnimateList&&delete this.mingGeAnimateList;var a=M.transition+"TimingFunction";b=this.style,b[M.transition]=b[a]=null}})},fadeToggle:function(e,d){var f;return this.each(function(){f=M.oStyleValue(this),"none"==M.original("display",f)?L(this).fadeIn(e,d):L(this).fadeOut(e,d)})},attr:function(f,e){var g,h=this.nodeList[0];if(h){if(L.isObject(f)){return L.each.call(this.nodeList,function(){g=this,g.setAttribute&&L.each(f,function(d,c){L.isString(d)&&L.isTxt(c)&&g.setAttribute(d,c)})}),this}if(L.isUndefined(e)){return h.getAttribute&&L.isString(f)?h.getAttribute(f):null}L.isString(f)&&L.isTxt(e)&&L.each.call(this.nodeList,function(){this.setAttribute&&this.setAttribute(f,e)})}return this},fadeOut:function(f,e){var h,g=new L();return M.transition||(M.transition=L.html5Attribute("transition")),this.each(function(){h=M.oStyleValue(this),"none"==M.original("display",h)||this.isMingGeAnimate||g.nodeList.push(this)}),M.transition?g.animate({opacity:0},f,function(){L(this).css({display:"none",opacity:null}),L.isFunction(e)&&e.call(this)},"ease"):g.css("display","none"),this},hide:function(){return this.css("display","none")},show:function(){return this.css("display",null),L.each.call(this.nodeList,function(){1==this.nodeType&&"none"==M.original("display",M.oStyleValue(this))&&(this.style.display=M.getDisplay(this.tagName))}),this},fadeIn:function(f,e){M.transition||(M.transition=L.html5Attribute("transition"));var h,g=new L();return this.each(function(){if(h=M.oStyleValue(this),"none"==M.original("display",h)){if(this.isMingGeAnimate){return}M.transition&&L(this).css("opacity",0),g.nodeList.push(this),"none"==this.style.display?(this.style.display="","none"==M.original("display",h)&&(this.style.display=M.getDisplay(this.tagName))):this.style.display=M.getDisplay(this.tagName)}}),M.transition&&setTimeout(function(){g.animate({opacity:1},f,function(){L(this).css("opacity",null),L.isFunction(e)&&e.call(this)},"ease")},5),this},animate:function(x,w,v,u){var s,t,r,q,m,p,o,n;if(M.transition||(M.transition=L.html5Attribute("transition")),!M.transition){return this.css(x),this}if(!L.isObject(x)){return this}for(t=typeof w,"number"!==t&&("string"===t?(X[w]&&(w=X[w]),isNaN(parseFloat(w))&&(w=500)):"function"===t?(v=w,w=500):w=500),L.isFunction(v)||(r=u,u=v,v=L.isFunction(r)?r:function(){}),s=function(){var f,c,e=this.mingGeAnimateList;L.isArray(e)&&e.length>0?(c=new L(),c.nodeList=[this],f=e[0],e.splice(0,1),M.animate.apply(c,f)):(delete this.mingGeAnimateList,delete this.isMingGeAnimate),v.call(this)},p=0,o=new L(),n=[x,w,s,u];q=this.nodeList[p++];){q.isMingGeAnimate?q.mingGeAnimateList?q.mingGeAnimateList.push(n):q.mingGeAnimateList=[n]:(q.isMingGeAnimate=1,o.nodeList.push(q),m||(m=!0))}return m&&M.animate.apply(o,n),this},empty:function(){var b;return this.each(function(){1==this.nodeType&&(b=M.seachIndex(["value","innerHTML"],this),b&&(this[b]=""))})},remove:function(){var b=[];return this.each(function(){try{this.parentNode.removeChild(this)}catch(a){b.push(this)}}),this.nodeList=b,this},bind:function(i,h,n){var m,k,l,j;if(M.initEvent(),l=0,L.isString(i)&&L.isFunction(h)){for(;m=this.nodeList[l++];){k=[m,i,M.bindCallback.call(m,h,i,n)],k[2].callback=h,M.addElemEve.apply(M,k),M.addEvent.apply(M,k)}}else{if(L.isObject(i)){for(;m=this.nodeList[l++];){for(j in i){L.isString(j)&&L.isFunction(i[j])&&(k=[m,j,M.bindCallback.call(m,i[j],j,n)],k[2].callback=i[j],M.addElemEve.apply(M,k),M.addEvent.apply(M,k))}}}}return this},unbind:function(h,c){var l,k,j,i;if(M.initEvent(),k=0,j=typeof h,"function"==j){c=h,h=ah}else{if(i=typeof c,"string"!=j&&"undefined"!=j||"function"!=i&&"undefined"!=i){return this}}for(;l=this.nodeList[k++];){M.DelElemEve(l,h,c)}return this},one:function(d,c){return this.bind(d,c,!0)},SelectorStr:!1,SelectorTxt:!1,nodeList:[],ready:function(b){return M.ready(b),this},removing:function(b){return G(b)},parent:function(g){for(var e,h,j=0,i=new L();e=this.nodeList[j++];){(h=e.parentNode)&&("BODY"==h.tagName||i.nodeList.push(h))}return i.nodeList=G(i.nodeList),i.SelectorTxt=af.body,i.SelectorStr="000",g?i.filter(g):i},addClass:function(d){if(L.isString(d)){d=J(d);var c;this.each(function(){1===this.nodeType&&(c=this.className,this.className=c?c+" "+d:d)})}return this},removeClass:function(e){e=J(e);var d,f;return L.isString(e)?this.each(function(){1===this.nodeType&&(d=this.className,d&&(f=RegExp("(^|\\s)"+e+"($|\\s)","ig")).test(d)&&(this.className=d=J(d.replace(f," ")),""==d&&(this.removeAttribute?this.removeAttribute("class"):this.className="")))}):L.isUndefined(e)?this.each(function(){1===this.nodeType&&this.className&&(this.removeAttribute?this.removeAttribute("class"):this.className="")}):this},children:function(b){return b?this.find(b):ad?this.find("*"):this.find("MingGeAllelem2015")},find:function(b){return R(b,this,{find:!0})},filter:function(d){var c=R(d,this,{filter:!0});return this.SelectorTxt.ownerDocument&&!this.SelectorStr&&c.nodeList[0]&&(c.SelectorTxt=c.nodeList[0],c.SelectorStr=!1),c},index:function(a){try{return a?L.inArray(a.nodeType||a==aj?a:a.nodeList[0],this.nodeList):L.inArray(this.nodeList[0],this.nodeList[0].parentNode.getElementsByTagName("*"))}catch(d){return -1}},eq:function(d){var c=new L();return c=null==d?this:(d=0>d?this.nodeList.length+d:d,this.nodeList[d]&&(c.nodeList=[c.SelectorTxt=this.nodeList[d]]),c)},size:function(){return this.nodeList.length},each:function(e){if(L.isFunction(e)){for(var d=this.nodeList.length,f=0;d>f;f++){e.call(this.nodeList[f],f,d)}}return this},val:function(b){return M.htmlVal.call(this,"value",b)},html:function(b){return M.htmlVal.call(this,"innerHTML",b)},text:function(b){return M.htmlVal.call(this,M.isIndex("textContent",af.body)?"textContent":"innerText",b)},css:function(t,s){var q,p,n,l,r=0,o={},m=typeof t;if(M.opacity||(M.opacity=L.html5Attribute("opacity")||"filter"),M.transform||(M.transform=L.html5Attribute("transform")),"string"===m){if(t=L.styleName(J(t)),L.isUndefined(s)){return(q=this.nodeList[0])&&q.ownerDocument?V.test(t)?(l=q.style[M.transform],l?(r=new RegExp(""+t+"\\s?\\((.*)\\)","i").exec(l),r&&r[1]):null):"filter"==M.opacity?M.getFilter(q):M.original(t,M.oStyleValue(q)):null}for(;q=this.nodeList[r++];){try{n=q.style,o=M.style(n,t,s),n[o[0]]=o[1]}catch(k){}}}else{if(L.isObject(t)){for(;q=this.nodeList[r++];){n=q.style;for(p in t){try{1==r&&(o[p]=M.style(n,L.styleName(p),t[p])),n[o[p][0]]=o[p][1]}catch(k){}}}}}return this},get:function(b){return null==b?this.nodeList:(b=0>b?this.nodeList.length+b:b,this.nodeList[b])}},L.fn.extend=L.extend=function(){var e,h,g,f=arguments.length;if(1===f&&"[object Object]"===aa.call(arguments[0])){for(e in arguments[0]){this[e]||(this[e]=arguments[0][e])}return !0}return f>1?(h=arguments[0],g=arguments[1],L.isObject(g)&&L.isObject(h)?(L.each(g,function(d,c){h[d]=c}),h):arguments[1]||arguments[0]):!1},M.ajax.prototype=M.ajaxPrototype,L.extend({parseJSON:function(d,c){return M.JsonString.StringToJson(d,c)},toJSON:function(b){return M.JsonString.JsonToString(b)},trim:function(b){return J(b)},setVar:function(b){try{delete aj[ai]}catch(a){aj[ai]=null}aj[b]=L},isObject:function(a){try{return"[object Object]"==aa.call(a)&&"number"!=typeof a.nodeType&&a!=aj}catch(d){return !1}},update:function(f){for(var e,h=0,g=[];e=f.nodeList[h++];){e.ownerDocument?e.parentNode&&g.push(e):g.push(e)}f.nodeList=g},isArray:function(b){return"[object Array]"===aa.call(b)},isFunction:function(b){return"[object Function]"===aa.call(b)},isEmptyObject:function(d){for(var c in d){if(d.hasOwnProperty(c)){return !1}}return !0},createScript:function(e){var f,d=af.getElementsByTagName("head").item(0);return d?(f=af.createElement("script"),d.appendChild(f),L.isString(e)&&(f.src=e),[d,f]):void 0},post:function(e,d,f){return new M.ajax().post(e,d,f)},get:function(e,d,f){return new M.ajax().get(e,d,f)},getJSON:function(e,d,f){return new M.ajax().getJSON(e,d,f)},ajax:function(d){var c=new M.ajax();return L.isObject(d)&&c.ajax(d),c},styleName:function(d){try{return d.replace(Y,Z)}catch(c){return d}},userAgent:U(navigator.userAgent),isIe:function(){return"msie"===this.userAgent.browser?this.userAgent.version.charAt(0):!1},isTxt:function(d){var c=typeof d;return"string"==c||"number"==c},isNumber:function(){return"number"==typeof str},isUndefined:function(b){return"undefined"==typeof b},isString:function(b){return"string"==typeof b},each:function(f,e){var h,g=0;if(L.isFunction(f)){for(;h=this[g++];){f.call(h)}}else{if((L.isObject(f)||L.isArray(f))&&L.isFunction(e)){for(g in f){f.hasOwnProperty&&f.hasOwnProperty(g)&&e(g,f[g])}return !0}}return !1},objToUrl:function(d){if(L.isObject(d)){var c="";return L.each(d,function(b,e){L.isTxt(e)&&(c+=b+"="+encodeURIComponent(e)+"&")}),c.replace(/&+$/,"")}return L.isString(d)?encodeURIComponent(d):d},inArray:function(f,e){if(e.indexOf){return e.indexOf(f)}for(var h=0,g=e.length;g>h;h++){if(e[h]===f){return h}}return -1},urlRevise:function(d,c){return""!=c&&L.isTxt(c)&&(d+=/\?/.test(d)?"&"+c:"?"+c),d},isHtml5:function(){return af.createElement("canvas").getContext?!0:!1},html5Attribute:function(i){var e,n,m,l,k;try{for(e=i?i.toLowerCase():"transform",i=e.replace(/^\w/,i.charAt(0).toUpperCase()),n=af.body.style,m=[e,"Ms"+i,"Moz"+i,"Webkit"+i,"O"+i],l=!1,k=0;k<m.length;k++){if(m[k] in n){l=m[k];break}}return l}catch(j){return !1}}}),L.each(["width","height","top","left"],function(d,c){L.fn[c]=function(f,e){return function(a){return null==a?this.nodeList[0]?this.nodeList[0]["offset"+e]:null:(/^[0-9]+$/.test(a)&&(a+="px"),this.css(f,a))}}(c,c.replace(/^\w/,c.charAt(0).toUpperCase()))}),L.fn.on=L.fn.bind,L.fn.off=L.fn.unbind,!function(e){for(var d,f=0;d=e[f++];){L.fn[d]=function(b){return function(a){return L.isUndefined(a)&&L.each.call(this.nodeList,function(){try{this[b]()}catch(c){}}),this.bind(b,a)}}(d)}}(["blur","focus","focusin","focusout","resize","scroll","unload","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","error","touchstart","touchmove","touchend"]),aj[ai]=L}(window,"$");