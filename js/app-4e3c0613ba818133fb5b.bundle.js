!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/2048/",i(i.s=5)}([function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function n(){}function r(e){return e()}function o(){return Object.create(null)}function s(e){e.forEach(r)}function l(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,i){const n=t.subscribe(i);e.$$.on_destroy.push(n.unsubscribe?()=>n.unsubscribe():n)}const c="undefined"!=typeof window;let d=c?()=>window.performance.now():()=>Date.now(),f=c?requestAnimationFrame:n;const h=new Set;let m=!1;function g(){h.forEach(e=>{e[0](d())||(h.delete(e),e[1]())}),(m=h.size>0)&&f(g)}function p(e){let t;return m||(m=!0,f(g)),{promise:new Promise(i=>{h.add(t=[e,i])}),abort(){h.delete(t)}}}function v(e,t){e.appendChild(t)}function $(e,t,i){e.insertBefore(t,i||null)}function _(e){e.parentNode.removeChild(e)}function y(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function b(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function x(){return P(" ")}function w(){return P("")}function S(e,t,i){e.style.setProperty(t,i)}let z;function M(e){z=e}function T(){if(!z)throw new Error("Function called outside component initialization");return z}const E=[],j=Promise.resolve();let A=!1;const k=[],N=[],C=[];function I(){A||(A=!0,j.then(F))}function O(e){N.push(e)}function F(){const e=new Set;do{for(;E.length;){const e=E.shift();M(e),B(e.$$)}for(;k.length;)k.shift()();for(;N.length;){const t=N.pop();e.has(t)||(t(),e.add(t))}}while(E.length);for(;C.length;)C.pop()();A=!1}function B(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(O))}let V;function q(){V={remaining:0,callbacks:[]}}function L(){V.remaining||s(V.callbacks)}function K(e){V.callbacks.push(e)}function R(e,t){K(()=>{!function(e,t){e.d(1),t.delete(e.key)}(e,t)}),e.o(1)}let X;function Y(e,t,i){const{fragment:n,on_mount:o,on_destroy:a,after_render:u}=e.$$;n.m(t,i),O(()=>{const t=o.map(r).filter(l);a?a.push(...t):s(t),e.$$.on_mount=[]}),u.forEach(O)}function D(e,t){e.$$&&(s(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function G(e,t,i,r,l,a){const u=z;M(e);const c=t.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:n,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:null};let f=!1;var h;d.ctx=i?i(e,c,(t,i)=>{d.ctx&&l(d.ctx[t],d.ctx[t]=i)&&(d.bound[t]&&d.bound[t](i),f&&function(e,t){e.$$.dirty||(E.push(e),I(),e.$$.dirty=o()),e.$$.dirty[t]=!0}(e,t))}):c,d.update(),f=!0,s(d.before_render),d.fragment=r(d.ctx),t.target&&(t.hydrate?d.fragment.l((h=t.target,Array.from(h.childNodes))):d.fragment.c(),t.intro&&e.$$.fragment.i&&e.$$.fragment.i(),Y(e,t.target,t.anchor),F()),M(u)}"undefined"!=typeof HTMLElement&&(X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,i){this[e]=i}$destroy(){D(this,!0),this.$destroy=n}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(){}});class U{$destroy(){D(this,!0),this.$destroy=n}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(){}}function H(e,t=n){let i;const r=[];function o(t){if(a(e,t)){if(e=t,!i)return;r.forEach(e=>e[1]()),r.forEach(t=>t[0](e))}}return{set:o,update:function(t){o(t(e))},subscribe:function(s,l=n){const a=[s,l];return r.push(a),1===r.length&&(i=t(o)||n),s(e),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&i()}}}}function J(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function Q(e){return function t(i){return 0===arguments.length||J(i)?t:e.apply(this,arguments)}}function W(e){return function t(i,n){switch(arguments.length){case 0:return t;case 1:return J(i)?t:Q(function(t){return e(i,t)});default:return J(i)&&J(n)?t:J(i)?Q(function(t){return e(t,n)}):J(n)?Q(function(t){return e(i,t)}):e(i,n)}}}var Z=W(function(e,t){var i,n=Number(t),r=0;if(n<0||isNaN(n))throw new RangeError("n must be a non-negative number");for(i=new Array(n);r<n;)i[r]=e(r),r+=1;return i});function ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class te{constructor(e,t){ee(this,"savePosition",()=>{this._prevPosition={...this._position},this._isMoved=!1}),this._isMoved=!1,this._position=e,this._prevPosition=null,this._value=t||te.DEFAULT_VALUE,this._mergedFrom=null}get tileInfo(){return{value:this._value,position:{...this._position},prevPosition:this._prevPosition?{...this._prevPosition}:null,mergedFrom:this._mergedFrom?this._mergedFrom.map(e=>e.tileInfo):null}}get value(){return this._value}get position(){return{...this._position}}get isMoved(){return this._isMoved}get isMerged(){return Boolean(this._mergedFrom)}setPosition(e){this._isEqualPosition(e)||(this._position={...e},this._isMoved=!0)}setMergedFrom(e,t){this._mergedFrom=[e,t]}clearMerged(){this._mergedFrom=null}_isEqualPosition(e){return this._position.x===e.x&&this._position.y===e.y}}ee(te,"DEFAULT_VALUE",2);var ie=te;var ne=class{constructor(e){this._size=e,this._grid=this.createGrid(e)}get items(){return this._grid.filter(e=>Boolean(e))}eachCell(e){this._grid.forEach(e)}createGrid(e){return Array(e*e).fill(null)}getItem(e){if(this.isPositionValid(e)){const t=this._indexByPosition(e);return this._grid[t]}return null}insertItem(e,t){this._grid[this._indexByPosition(t)]=e}removeItem(e){this._grid[this._indexByPosition(e)]=null}moveItem(e,t){if(this.isPositionValid(e)&&this.isPositionValid(t)){const i=this._indexByPosition(e),n=this._indexByPosition(t),r=this._grid[i];this._grid[i]=null,this._grid[n]=r}}getAvailableCells(){return this._grid.map((e,t)=>t).filter(e=>null===this._grid[e])}getRandomAvailableCell(){const e=this.getAvailableCells();if(e.length>0){const t=e[Math.floor(Math.random()*e.length)];return this._positionByIndex(t)}return null}isPositionValid(e){return e.x>=0&&e.x<this._size&&e.y>=0&&e.y<this._size}isCellAvailable(e){return!Boolean(this.getItem(e))}_indexByPosition(e){return e.y*this._size+e.x}_positionByIndex(e){return{x:e%this._size,y:Math.floor(e/this._size)}}};const re={up:{x:0,y:-1},right:{x:1,y:0},down:{x:0,y:1},left:{x:-1,y:0}};var oe=class{constructor(e=4){var t,i,n;n=e=>{const t=this.getVector(e),i=this.buildTraversals(t);this.prepareTiles();let n=!1;i.x.forEach(e=>{i.y.forEach(i=>{const r={x:e,y:i},o=this._grid.getItem(r);if(null!==o){const e=this.findAvailablePosition(r,t),i=this.getNextPosition(e,t),s=this._grid.getItem(i);if(null===s||s.value!==o.value||s.isMerged)this.moveTile(o,e);else{const e=s.value+o.value,t=new ie(i,e);t.setMergedFrom(o,s),this._grid.removeItem(r),this._grid.removeItem(i),this._grid.insertItem(t,i),o.setPosition(i)}!n&&o.isMoved&&(n=!0)}})}),n&&(this.addRandomTile(),this.updateStore())},(i="move")in(t=this)?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,this._size=e,this._grid=new ne(e),this._startTilesCount=2,this.buildStore(),this.startGame()}get tiles(){return{subscribe:this._store.subscribe}}startGame(){this.addStartTiles(),this.updateStore()}addStartTiles(){for(let e=0;e<this._startTilesCount;e++)this.addRandomTile()}addRandomTile(){const e=this._grid.getRandomAvailableCell();if(e){const t=Math.random()<.9?2:4,i=new ie(e,t);this._grid.insertItem(i,e)}}prepareTiles(){this._grid.eachCell(e=>{e&&(e.clearMerged(),e.savePosition())})}moveTile(e,t){this._grid.moveItem(e.position,t),e.setPosition(t)}buildStore(){const e=this._grid.items.map(e=>e.tileInfo);this._store=H(e)}updateStore(){const e=this._grid.items.map(e=>e.tileInfo);this._store.set(e)}getVector(e){return re[e]}buildTraversals(e){const t=this._size;return{x:Z(i=>1===e.x?t-1-i:i,t),y:Z(i=>1===e.y?t-1-i:i,t)}}findAvailablePosition(e,t){const i=this.getNextPosition(e,t),n=this._grid.isPositionValid(i),r=this._grid.isCellAvailable(i);return n&&r?this.findAvailablePosition(i,t):e}getNextPosition(e,t){return{x:e.x+t.x,y:e.y+t.y}}};function se(e){return"[object Date]"===Object.prototype.toString.call(e)}function le(e,t={}){const i=H(e),{stiffness:n=.15,damping:r=.8,precision:o=.01}=t;let s,l,a,u=e,c=e,f=1,h=0,m=!1;function g(t,n={}){c=t;const r=a={};if(n.hard||v.stiffness>=1&&v.damping>=1)return m=!0,s=d(),u=e,i.set(e=c),new Promise(e=>e());if(n.soft){const e=!0===n.soft?.5:+n.soft;h=1/(60*e),f=0}return l||(s=d(),m=!1,l=p(t=>{if(m)return m=!1,l=null,!1;const n={inv_mass:f=Math.min(f+h,1),opts:v,settled:!0,dt:60*(t-s)/1e3},r=function e(t,i,n,r){if("number"==typeof n||se(n)){const e=r-n,o=(n-i)/(t.dt||1/60),s=(o+(t.opts.stiffness*e-t.opts.damping*o)*t.inv_mass)*t.dt;return Math.abs(s)<t.opts.precision&&Math.abs(e)<t.opts.precision?r:(t.settled=!1,se(n)?new Date(n.getTime()+s):n+s)}if(Array.isArray(n))return n.map((o,s)=>e(t,i[s],n[s],r[s]));if("object"==typeof n){const o={};for(const s in n)o[s]=e(t,i[s],n[s],r[s]);return o}throw new Error(`Cannot spring ${typeof n} values`)}(n,u,e,c);return s=t,u=e,i.set(e=r),n.settled&&(l=null),!n.settled})),new Promise(e=>{l.promise.then(()=>{r===a&&e()})})}const v={set:g,update:(t,i)=>g(t(c,e),i),subscribe:i.subscribe,stiffness:n,damping:r,precision:o};return v}i(1);function ae(e){var t,i,r;return{c(){t=b("div"),i=P(e.value),S(t,"left",e.$moveX+"px"),S(t,"top",e.$moveY+"px"),t.className=r="tail tail_value_"+e.value+" "+(e.prevPosition||e.merged?"":"tail_new")+" "+(e.merged?"tail_merged":"")+" svelte-1dqdqhj"},m(e,n){$(e,t,n),v(t,i)},p(e,n){var o,s;e.value&&(o=i,s=""+(s=n.value),o.data!==s&&(o.data=s)),e.$moveX&&S(t,"left",n.$moveX+"px"),e.$moveY&&S(t,"top",n.$moveY+"px"),(e.value||e.prevPosition||e.merged)&&r!==(r="tail tail_value_"+n.value+" "+(n.prevPosition||n.merged?"":"tail_new")+" "+(n.merged?"tail_merged":"")+" svelte-1dqdqhj")&&(t.className=r)},i:n,o:n,d(e){e&&_(t)}}}const ue=112;function ce(e,t,i){let n,r,{value:o=2,position:s,prevPosition:l,merged:a=!1}=t;const c={stiffness:.55,damping:.8},d=s.x*ue,f=s.y*ue,h=l?l.x*ue:d,m=l?l.y*ue:f,g=le(h,c);u(e,g,e=>{i("$moveX",n=e)});const p=le(m,c);var v;return u(e,p,e=>{i("$moveY",r=e)}),v=()=>{g.set(d),p.set(f)},T().$$.on_mount.push(v),e.$set=e=>{"value"in e&&i("value",o=e.value),"position"in e&&i("position",s=e.position),"prevPosition"in e&&i("prevPosition",l=e.prevPosition),"merged"in e&&i("merged",a=e.merged)},{value:o,position:s,prevPosition:l,merged:a,moveX:g,moveY:p,$moveX:n,$moveY:r}}var de=class extends U{constructor(e){super(),G(this,e,ce,ae,a,["value","position","prevPosition","merged"])}};i(2);function fe(e,t,i){const n=Object.create(e);return n.cell=t[i],n}function he(e,t,i){const n=Object.create(e);return n.row=t[i],n}function me(e){var t;return{c(){(t=b("div")).className="grid__cell svelte-1dw8uo6"},m(e,i){$(e,t,i)},d(e){e&&_(t)}}}function ge(e){for(var t,i,n=e.row,r=[],o=0;o<n.length;o+=1)r[o]=me(fe(e,n,o));return{c(){t=b("div");for(var e=0;e<r.length;e+=1)r[e].c();i=x(),t.className="grid__row svelte-1dw8uo6"},m(e,n){$(e,t,n);for(var o=0;o<r.length;o+=1)r[o].m(t,null);v(t,i)},p(e,o){if(e.board){n=o.row;for(var s=r.length;s<n.length;s+=1){fe(o,n,s);r[s]=me(),r[s].c(),r[s].m(t,i)}for(s=n.length;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){e&&_(t),y(r,e)}}}function pe(e){for(var t,i=e.board,r=[],o=0;o<i.length;o+=1)r[o]=ge(he(e,i,o));return{c(){t=b("div");for(var e=0;e<r.length;e+=1)r[e].c();t.className="grid svelte-1dw8uo6"},m(e,i){$(e,t,i);for(var n=0;n<r.length;n+=1)r[n].m(t,null)},p(e,n){if(e.board){i=n.board;for(var o=0;o<i.length;o+=1){const s=he(n,i,o);r[o]?r[o].p(e,s):(r[o]=ge(s),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}},i:n,o:n,d(e){e&&_(t),y(r,e)}}}function ve(e,t,i){let{gridSize:n}=t;const r=Array(n).fill(null).map(()=>Array(n).fill(null));return e.$set=e=>{"gridSize"in e&&i("gridSize",n=e.gridSize)},{gridSize:n,board:r}}var $e=class extends U{constructor(e){super(),G(this,e,ve,pe,a,["gridSize"])}};i(3);function _e(e,t,i){const n=Object.create(e);return n.mergedTile=t[i],n}function ye(e,t,i){const n=Object.create(e);return n.tile=t[i],n}function be(e){var t,i=new de({props:{value:e.tile.value,position:e.tile.position,prevPosition:e.tile.prevPosition}});return{c(){i.$$.fragment.c()},m(e,n){Y(i,e,n),t=!0},p(e,t){var n={};e.$tiles&&(n.value=t.tile.value),e.$tiles&&(n.position=t.tile.position),e.$tiles&&(n.prevPosition=t.tile.prevPosition),i.$set(n)},i(e){t||(i.$$.fragment.i(e),t=!0)},o(e){i.$$.fragment.o(e),t=!1},d(e){i.$destroy(e)}}}function Pe(e){for(var t,i,n=e.tile.mergedFrom,r=[],o=0;o<n.length;o+=1)r[o]=xe(_e(e,n,o));function s(e,t,i){r[e]&&(t&&K(()=>{r[e].d(t),r[e]=null}),r[e].o(i))}var l=new de({props:{value:e.tile.value,position:e.tile.position,prevPosition:e.tile.prevPosition,merged:!0}});return{c(){for(var e=0;e<r.length;e+=1)r[e].c();t=x(),l.$$.fragment.c()},m(e,n){for(var o=0;o<r.length;o+=1)r[o].m(e,n);$(e,t,n),Y(l,e,n),i=!0},p(e,i){if(e.$tiles){n=i.tile.mergedFrom;for(var o=0;o<n.length;o+=1){const s=_e(i,n,o);r[o]?(r[o].p(e,s),r[o].i(1)):(r[o]=xe(s),r[o].c(),r[o].i(1),r[o].m(t.parentNode,t))}for(q();o<r.length;o+=1)s(o,1,1);L()}var a={};e.$tiles&&(a.value=i.tile.value),e.$tiles&&(a.position=i.tile.position),e.$tiles&&(a.prevPosition=i.tile.prevPosition),l.$set(a)},i(e){if(!i){for(var t=0;t<n.length;t+=1)r[t].i();l.$$.fragment.i(e),i=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)s(e,0);l.$$.fragment.o(e),i=!1},d(e){y(r,e),e&&_(t),l.$destroy(e)}}}function xe(e){var t,i=new de({props:{value:e.mergedTile.value,position:e.mergedTile.position,prevPosition:e.mergedTile.prevPosition}});return{c(){i.$$.fragment.c()},m(e,n){Y(i,e,n),t=!0},p(e,t){var n={};e.$tiles&&(n.value=t.mergedTile.value),e.$tiles&&(n.position=t.mergedTile.position),e.$tiles&&(n.prevPosition=t.mergedTile.prevPosition),i.$set(n)},i(e){t||(i.$$.fragment.i(e),t=!0)},o(e){i.$$.fragment.o(e),t=!1},d(e){i.$destroy(e)}}}function we(e,t){var i,n,r,o,s,l=[Pe,be],a=[];function u(e){return e.tile.mergedFrom?0:1}return n=u(t),r=a[n]=l[n](t),{key:e,first:null,c(){i=w(),r.c(),o=w(),this.first=i},m(e,t){$(e,i,t),a[n].m(e,t),$(e,o,t),s=!0},p(e,t){var i=n;(n=u(t))===i?a[n].p(e,t):(q(),K(()=>{a[i].d(1),a[i]=null}),r.o(1),L(),(r=a[n])||(r=a[n]=l[n](t)).c(),r.i(1),r.m(o.parentNode,o))},i(e){s||(r&&r.i(),s=!0)},o(e){r&&r.o(),s=!1},d(e){e&&_(i),a[n].d(e),e&&_(o)}}}function Se(e){var t,i,n,r,o=[],s=new Map,l=new $e({props:{gridSize:e.gridSize}}),a=e.$tiles;const u=e=>e.tile;for(var c=0;c<a.length;c+=1){let t=ye(e,a,c),i=u(t);s.set(i,o[c]=we(i,t))}return{c(){for(t=b("div"),l.$$.fragment.c(),i=x(),n=b("div"),c=0;c<o.length;c+=1)o[c].c();n.className="tails svelte-cxtray",t.className="board svelte-cxtray"},m(e,s){for($(e,t,s),Y(l,t,null),v(t,i),v(t,n),c=0;c<o.length;c+=1)o[c].m(n,null);r=!0},p(e,t){var i={};e.gridSize&&(i.gridSize=t.gridSize),l.$set(i);const r=t.$tiles;q(),o=function(e,t,i,n,r,o,s,l,a,u,c,d){let f=e.length,h=o.length,m=f;const g={};for(;m--;)g[e[m].key]=m;const p=[],v=new Map,$=new Map;for(m=h;m--;){const e=d(r,o,m),l=i(e);let a=s.get(l);a?n&&a.p(t,e):(a=u(l,e)).c(),v.set(l,p[m]=a),l in g&&$.set(l,Math.abs(m-g[l]))}const _=new Set,y=new Set;function b(e){e.i&&e.i(1),e.m(l,c),s.set(e.key,e),c=e.first,h--}for(;f&&h;){const t=p[h-1],i=e[f-1],n=t.key,r=i.key;t===i?(c=t.first,f--,h--):v.has(r)?!s.has(n)||_.has(n)?b(t):y.has(r)?f--:$.get(n)>$.get(r)?(y.add(n),b(t)):(_.add(r),f--):(a(i,s),f--)}for(;f--;){const t=e[f];v.has(t.key)||a(t,s)}for(;h;)b(p[h-1]);return p}(o,e,u,1,t,r,s,n,R,we,null,ye),L()},i(e){if(!r){l.$$.fragment.i(e);for(var t=0;t<a.length;t+=1)o[t].i();r=!0}},o(e){for(l.$$.fragment.o(e),c=0;c<o.length;c+=1)o[c].o();r=!1},d(e){for(e&&_(t),l.$destroy(),c=0;c<o.length;c+=1)o[c].d()}}}function ze(e,t,i){let n,{tiles:r,gridSize:o}=t;return u(e,r,e=>{i("$tiles",n=e)}),e.$set=e=>{"tiles"in e&&i("tiles",r=e.tiles),"gridSize"in e&&i("gridSize",o=e.gridSize)},{tiles:r,gridSize:o,$tiles:n}}var Me=class extends U{constructor(e){super(),G(this,e,ze,Se,a,["tiles","gridSize"])}};function Te(e){var t;return{c(){var i,n,r,o;i=window,n="keydown",r=e.handleKeydown,i.addEventListener(n,r,o),t=()=>i.removeEventListener(n,r,o)},m:n,p:n,i:n,o:n,d(e){t()}}}function Ee(e,t,i){let{move:n}=t;const r={37:"left",38:"up",39:"right",40:"down"};return e.$set=e=>{"move"in e&&i("move",n=e.move)},{move:n,handleKeydown:function(e){const t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,i=r[e.keyCode];!t&&i&&n(i)}}}var je=class extends U{constructor(e){super(),G(this,e,Ee,Te,a,["move"])}};i(4);function Ae(e){var t,i,n,r=new Me({props:{tiles:e.tiles,gridSize:ke}}),o=new je({props:{move:e.move}});return{c(){t=b("div"),r.$$.fragment.c(),i=x(),o.$$.fragment.c(),t.className="svelte-193ijib"},m(e,s){$(e,t,s),Y(r,t,null),$(e,i,s),Y(o,e,s),n=!0},p(e,t){var i={};e.tiles&&(i.tiles=t.tiles),e.gridSize&&(i.gridSize=ke),r.$set(i);var n={};e.move&&(n.move=t.move),o.$set(n)},i(e){n||(r.$$.fragment.i(e),o.$$.fragment.i(e),n=!0)},o(e){r.$$.fragment.o(e),o.$$.fragment.o(e),n=!1},d(e){e&&_(t),r.$destroy(),e&&_(i),o.$destroy(e)}}}const ke=4;function Ne(e){const t=new oe(ke),{tiles:i,move:n}=t;return{tiles:i,move:n}}new class extends U{constructor(e){super(),G(this,e,Ne,Ae,a,[])}}({target:document.body})}]);