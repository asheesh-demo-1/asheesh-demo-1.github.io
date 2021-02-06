var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){function O(e,n,a,t){this.type=e,this.content=n,this.alias=a,this.length=0|(t||"").length}function r(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function C(e,n,a){var t=n.next,r={value:a,prev:n,next:t};return n.next=r,t.prev=r,e.length++,r}function T(e,n,a){for(var t=n.next,r=0;r<a&&t!==e.tail;r++)t=t.next;(n.next=t).prev=n,e.length-=r}function i(){N.manual||N.highlightAll()}var g=/\blang(?:uage)?-([\w-]+)\b/i,l=0,N={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function o(e){return e instanceof O?new O(e.type,o(e.content),e.alias):Array.isArray(e)?e.map(o):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function i(e,a){var t,n;switch(a=a||{},N.util.type(e)){case"Object":if(n=N.util.objId(e),a[n])return a[n];for(var r in t={},a[n]=t,e)e.hasOwnProperty(r)&&(t[r]=i(e[r],a));return t;case"Array":return n=N.util.objId(e),a[n]?a[n]:(t=[],a[n]=t,e.forEach(function(e,n){t[n]=i(e,a)}),t);default:return e}},getLanguage:function(e){for(;e&&!g.test(e.className);)e=e.parentElement;return e?(e.className.match(g)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==e)return n[a]}return null}},isActive:function(e,n,a){for(var t="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(t))return!1;e=e.parentElement}return!!a}},languages:{extend:function(e,n){var a=N.util.clone(N.languages[e]);for(var t in n)a[t]=n[t];return a},insertBefore:function(a,e,n,t){var r=(t=t||N.languages)[a],i={};for(var s in r)if(r.hasOwnProperty(s)){if(s==e)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(s)||(i[s]=r[s])}var o=t[a];return t[a]=i,N.languages.DFS(N.languages,function(e,n){n===o&&e!=a&&(this[e]=i)}),i},DFS:function o(e,n,a,t){t=t||{};var r=N.util.objId;for(var i in e)if(e.hasOwnProperty(i)){n.call(e,i,e[i],a||i);var s=e[i],l=N.util.type(s);"Object"!==l||t[r(s)]?"Array"!==l||t[r(s)]||(t[r(s)]=!0,o(s,n,i,t)):(t[r(s)]=!0,o(s,n,null,t))}}},plugins:{},highlightAll:function(e,n){N.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,a){var t={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};N.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),N.hooks.run("before-all-elements-highlight",t);for(var r,i=0;r=t.elements[i++];)N.highlightElement(r,!0===n,t.callback)},highlightElement:function(e,n,a){function t(e){l.highlightedCode=e,N.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,N.hooks.run("after-highlight",l),N.hooks.run("complete",l),a&&a.call(l.element)}var r=N.util.getLanguage(e),i=N.languages[r];e.className=e.className.replace(g,"").replace(/\s+/g," ")+" language-"+r;var s=e.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(g,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:i,code:e.textContent};if(N.hooks.run("before-sanity-check",l),!l.code)return N.hooks.run("complete",l),void(a&&a.call(l.element));if(N.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var o=new Worker(N.filename);o.onmessage=function(e){t(e.data)},o.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else t(N.highlight(l.code,l.grammar,l.language));else t(N.util.encode(l.code))},highlight:function(e,n,a){var t={code:e,grammar:n,language:a};return N.hooks.run("before-tokenize",t),t.tokens=N.tokenize(t.code,t.grammar),N.hooks.run("after-tokenize",t),O.stringify(N.util.encode(t.tokens),t.language)},tokenize:function(E,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var t=new r;return C(t,t.head,E),function E(e,n,a,t,r,i){for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var l=a[s];l=Array.isArray(l)?l:[l];for(var o=0;o<l.length;++o){if(i&&i.cause==s+","+o)return;var u=l[o],g=u.inside,c=!!u.lookbehind,d=!!u.greedy,p=0,m=u.alias;if(d&&!u.pattern.global){var f=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,f+"g")}for(var h=u.pattern||u,b=t.next,y=r;b!==n.tail&&!(i&&y>=i.reach);y+=b.value.length,b=b.next){var v=b.value;if(n.length>e.length)return;if(!(v instanceof O)){var k=1;if(d&&b!=n.tail.prev){if(h.lastIndex=y,!(P=h.exec(e)))break;var F=P.index+(c&&P[1]?P[1].length:0),x=P.index+P[0].length,w=y;for(w+=b.value.length;w<=F;)w+=(b=b.next).value.length;if(y=w-=b.value.length,b.value instanceof O)continue;for(var A=b;A!==n.tail&&(w<x||"string"==typeof A.value);A=A.next)k++,w+=A.value.length;k--,v=e.slice(y,w),P.index-=y}else{h.lastIndex=0;var P=h.exec(v)}if(P){c&&(p=P[1]?P[1].length:0);F=P.index+p;var $=P[0].slice(p),S=(x=F+$.length,v.slice(0,F)),_=v.slice(x),j=y+v.length;i&&j>i.reach&&(i.reach=j);var z=b.prev;S&&(z=C(n,z,S),y+=S.length),T(n,z,k),b=C(n,z,new O(s,g?N.tokenize($,g):$,m,$)),_&&C(n,b,_),1<k&&E(e,n,a,b.prev,y,{cause:s+","+o,reach:j})}}}}}}(E,t,e,t.head,0),function(e){for(var n=[],a=e.head.next;a!==e.tail;)n.push(a.value),a=a.next;return n}(t)},hooks:{all:{},add:function(e,n){var a=N.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=N.hooks.all[e];if(a&&a.length)for(var t,r=0;t=a[r++];)t(n)}},Token:O};if(u.Prism=N,O.stringify=function l(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(e){a+=l(e,n)}),a}var t={type:e.type,content:l(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},r=e.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(t.classes,r):t.classes.push(r)),N.hooks.run("wrap",t);var i="";for(var s in t.attributes)i+=" "+s+'="'+(t.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+i+">"+t.content+"</"+t.tag+">"},!u.document)return u.addEventListener&&(N.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,t=n.code,r=n.immediateClose;u.postMessage(N.highlight(t,N.languages[a],a)),r&&u.close()},!1)),N;var o=N.util.currentScript();if(o&&(N.filename=o.src,o.hasAttribute("data-manual")&&(N.manual=!0)),!N.manual){var e=document.readyState;"loading"===e||"interactive"===e&&o&&o.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return N}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};t["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var r={};r[e]={pattern:RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{"function":/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},a.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,"function":/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],"class-name":{pattern:/(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.languages.ruby}};delete e.languages.ruby["function"],e.languages.insertBefore("ruby","keyword",{regex:[{pattern:RegExp("%r(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}","\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}","<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|")+")"),greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{"function":/\w+$/,rest:e.languages.ruby}}}),e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:RegExp("%[qQiIwWxs]?(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^])*\\)","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]","<(?:[^<>\\\\]|\\\\[^])*>"].join("|")+")"),greedy:!0,inside:{interpolation:n}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:n}}],e.languages.rb=e.languages.ruby}(Prism),function(b){function y(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(b.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,r,e,i){if(t.language===r){var s=t.tokenStack=[];t.code=t.code.replace(e,function(e){if("function"==typeof i&&!i(e))return e;for(var n,a=s.length;-1!==t.code.indexOf(n=y(r,a));)++a;return s[a]=e,n}),t.grammar=b.languages.markup}}},tokenizePlaceholders:{value:function(d,p){if(d.language===p&&d.tokenStack){d.grammar=b.languages[p];var m=0,f=Object.keys(d.tokenStack);!function h(e){for(var n=0;n<e.length&&!(m>=f.length);n++){var a=e[n];if("string"==typeof a||a.content&&"string"==typeof a.content){var t=f[m],r=d.tokenStack[t],i="string"==typeof a?a:a.content,s=y(p,t),l=i.indexOf(s);if(-1<l){++m;var o=i.substring(0,l),u=new b.Token(p,b.tokenize(r,d.grammar),"language-"+p,r),g=i.substring(l+s.length),c=[];o&&c.push.apply(c,h([o])),c.push(u),g&&c.push.apply(c,h([g])),"string"==typeof a?e.splice.apply(e,[n,1].concat(c)):a.content=c}}else a.content&&h(a.content)}return e}(d.tokens)}}}})}(Prism),function(n){n.languages.erb=n.languages.extend("ruby",{}),n.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),n.hooks.add("before-tokenize",function(e){n.languages["markup-templating"].buildPlaceholders(e,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)}),n.hooks.add("after-tokenize",function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"erb")})}(Prism);