!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var i in t)("object"==typeof exports?exports:e)[i]=t[i]}}(window,function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var r=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.nickname=void 0,this.gender=void 0,this.item=void 0,this.ability=void 0,this.level=void 0,this.shiny=void 0,this.happiness=void 0,this.evs=void 0,this.ivs=void 0,this.nature=void 0,this.moves=[]}return i(e,[{key:"toString",value:function(){return this.name}}]),e}();n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var r=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.format=t,this.pokemon=i}return i(e,[{key:"toString",value:function(){var e="=== ["+this.format+"] "+this.name+" ===\n\n";return(e+=this.pokemon.map(function(e){return e.toString()}).join("\n\n")).trim()}}]),e}();n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var r=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.teams=n}return i(e,[{key:"toString",value:function(){return this.teams.map(function(e){return e.toString()}).join("\n\n").trim()}}]),e}();n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(t(1)),r=a(t(0)),o=a(t(2));function a(e){return e&&e.__esModule?e:{default:e}}var u={team:/^=== \[(.*)\] (.*) ===$/,gender:/ \((F|M)\)/i,item:/ @ (.*)$/i,name:/^([^()@]{2,})/i,nickname_name:/^(.*) \(([^()]{2,})\) /i,ability:/^Ability: (.*)$/i,level:/^Level: ([0-9]{1,3})$/i,shiny:/^Shiny: (Yes|No)$/i,happiness:/^Happiness: ([0-9]{1,3})$/i,eivs:/^([EI]Vs): (.*)$/i,eivs_value:/^([0-9]+)\s{1,}(hp|atk|def|spa|spd|spe)$/i,nature:/^(.*) Nature$/,move:/^- (.*)$/i,is:function(e,n){return!!e.match(this[n])},get:function(e,n){return this[n].exec(e)}};n.default=function(e){var n=[],t=null,a=null,f={name:"untitled",format:"gen7"};function s(){t||(t=new i.default(f.name,f.format),n.push(t)),a&&(t.pokemon.push(a),a=null)}function c(e,n,t){u.is(n,t)&&(a[t]=u.get(n,t)[1].trim())}return e.trim().split("\n").map(function(e){return e.trim()}).forEach(function(e){if(u.is(e,"team")){var o=u.get(e,"team");return t=new i.default(o[2],o[1]),void n.push(t)}""!==e?(a||function(e,n){var t=void 0;u.is(n,"nickname_name")?(t=u.get(n,"nickname_name"),e.nickname=t[1].trim(),e.name=t[2].trim()):u.is(n,"name")&&(t=u.get(n,"name"),e.name=t[1].trim())}(a=new r.default,e),c(0,e,"gender"),c(0,e,"item"),c(0,e,"ability"),c(0,e,"level"),c(0,e,"shiny"),c(0,e,"happiness"),c(0,e,"nature"),function(e,n){u.is(n,"move")&&a.moves.push(u.get(n,"move")[1].trim())}(0,e),function(e,n){if(u.is(n,"eivs")){var t=u.get(n,"eivs"),i=t[1].toLowerCase();t[2].split("/").forEach(function(t){var r=u.get(t.trim().toLowerCase(),"eivs_value");if(!r)throw Error("Invalid syntax for "+i+": "+n);e[i]||(e[i]={}),e[i][r[2]]=r[1]})}}(a,e)):s()}),s(),new o.default(n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SmogonParser=void 0;var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),r=f(t(2)),o=f(t(1)),a=f(t(0)),u=f(t(3));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"parse",value:function(e){if("string"==typeof e||e instanceof String)return(0,u.default)(e);throw new Error("Invalid argument type for 'text'.")}},{key:"stringify",value:function(e){if(e instanceof r.default||e instanceof o.default||e instanceof a.default)return e.toString();throw new Error("Invalid argument type for 'data'.")}},{key:"isValid",value:function(e){try{return"string"==typeof e||e instanceof String?this.parse(e):this.stringify(e),!0}catch(e){return!1}}}]),e}();n.SmogonParser=s}])});