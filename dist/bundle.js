!function(e){var r={};function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)n.d(t,u,function(r){return e[r]}.bind(null,u));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";function t(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.createRange=v,r.default=function(e){var r=e.devices,n=void 0===r?[]:r,o=e.rates,i=void 0===o?[]:o,c=e.maxPower,a=void 0===c?0:c;i.sort(function(e,r){return e.value-r.value}).forEach(function(e){for(var r=e.from,t=e.to,o=r;o!=t;)s(o,n,a),u[o].sort(),++o>23&&(o=0)});var f={};return f.schedule=u,f.consumedEnergy=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).map(function(e){var r=e.from,n=e.to,u=e.value;return[{value:u}].concat(t(v(r,n)))}),u={value:0};return u.devices=r.reduce(function(r,t){var o=t.id,i=t.power,c=Object.keys(e).filter(function(r){return e[r].includes(o)}).map(function(e){return n.find(function(r){return r.includes(+e)})[0].value}).map(function(e){return i/1e3*e}).reduce(function(e,r){return e+r},0);return u.value+=c,r[o]=p(c),r},{}),u.value=p(u.value),u}(u,n,i),f};var u=v(0,24).reduce(function(e,r,n){return Object.assign({},e,function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}({},n,[]))},{}),o=[7,21],i=[21,7],c=i[0],a=i[1],f=v(o[0],o[1]),l=v(c,a),d=[];function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r-e>=0)return[].concat(t(Array(r-e).keys())).map(function(r){return r+e});var n=[].concat(t(Array(24-e).keys())).map(function(r){return r+e}),u=[].concat(t(Array(r).keys()));return[].concat(t(n),t(u))}function s(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=r.filter(function(r){return!d.includes(r.id)&&function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;var n=r.mode;if(!n)return!0;if("day"==n)return f.includes(e);return l.includes(e)}(e,r)}).sort(function(e,r){return r.power-e.power}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=u[e];return n&&n.reduce(function(e,n){var t=r.find(function(e){return e.id==n})||{},u=t.power;return e+=u},0)}(e,r),i=0;i<t.length;i++){var c=t[i];if(!(o+c.power>n)){o+=c.power,d.push(c.id);for(var a=e,v=0;v<c.duration;v++)u[a].push(c.id),++a>23&&(a=0)}}}function p(){return+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(4)}}]);