var a;

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=4)}([function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return c(e)}function o(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t="",r=1;r<=e;r+=1)t+=-1!==n.indexOf(r)?"1":"0";return f(t,Math.max(0,e-t.length))}function i(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,t=Math.max.apply(Math,[0].concat(r(e.map(function(e){return e.id})),r(c(n)))),o="",i=1;i<=t;i+=1)o+=-1!==n.indexOf(i)?"1":"0";return o}function a(e,n){var t=[],o=e.map(function(e){return e.id});return e.reduce(function(i,a,u){var s=a.id;if(-1!==n.indexOf(s)&&t.push(s),(-1===n.indexOf(s)||u===e.length-1||-1===o.indexOf(s+1))&&t.length){var c=t.shift(),l=t.pop();return t=[],[].concat(r(i),[{isRange:"number"==typeof l,startVendorId:c,endVendorId:l}])}return i},[])}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,r=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},o=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":u(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},i=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},a=function(e){var n=e.next();return!Boolean(n.done)&&n};return function(n){var t,u=this,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!e(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(t=arguments[2])}var c,l,d=i(n,o(n));if(void 0!==d){c=e(u)?Object(new u):[];var f=d.call(n);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");l=0;for(var p,m;;){if(!(p=a(f)))return c.length=l,c;m=p.value,c[l]=s?s.call(t,m,l):m,l++}}else{var y=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var v=r(y.length);c=e(u)?Object(new u(v)):new Array(v),l=0;for(var h;l<v;)h=y[l],c[l]=s?s.call(t,h,l):h,l++;c.length=v}return c}}(),l=t(1),d=l.encodeToBase64,f=l.padRight;e.exports={convertVendorsToRanges:a,encodeConsentString:function(e){var n=e.maxVendorId,t=e.vendorList,r=void 0===t?{}:t,u=e.allowedPurposeIds,c=e.allowedVendorIds,l=r.vendors,f=void 0===l?[]:l,p=r.purposes,m=void 0===p?[]:p;n||(n=0,f.forEach(function(e){e.id>n&&(n=e.id)}));var y=d(s({},e,{maxVendorId:n,purposeIdBitString:i(m,u),isRange:!1,vendorIdBitString:o(n,c)})),v=a(f,c),h=d(s({},e,{maxVendorId:n,purposeIdBitString:i(m,u),isRange:!0,defaultConsent:!1,numEntries:v.length,vendorRangeList:v}));return y.length<h.length?y:h}}},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return C(e)}function o(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t="",r=0;r<e;r+=1)t+=n;return t}function i(e,n){return o(Math.max(0,n))+e}function a(e,n){return e+o(Math.max(0,n))}function u(e,n){var t="";return"number"!=typeof e||isNaN(e)||(t=parseInt(e,10).toString(2)),n>=t.length&&(t=i(t,n-t.length)),t.length>n&&(t=t.substring(0,n)),t}function s(e){return u(!0===e?1:0,1)}function c(e,n){return e instanceof Date?u(e.getTime()/100,n):u(e,n)}function l(e,n){return u(e.toUpperCase().charCodeAt(0)-65,n)}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return l(e.slice(0,1),n/2)+l(e.slice(1),n/2)}function f(e,n,t){return parseInt(e.substr(n,t),2)}function p(e,n,t){return new Date(100*f(e,n,t))}function m(e,n){return 1===parseInt(e.substr(n,1),2)}function y(e){var n=f(e);return String.fromCharCode(n+65).toLowerCase()}function v(e,n,t){var r=e.substr(n,t);return y(r.slice(0,t/2))+y(r.slice(t/2))}function h(e){var n=e.input,t=e.field,r=t.name,o=t.type,i=t.numBits,l=t.encoder,f=t.validator;if("function"==typeof f&&!f(n))return"";if("function"==typeof l)return l(n);var p="function"==typeof i?i(n):i,m=n[r],y=null===m||void 0===m?"":m;switch(o){case"int":return u(y,p);case"bool":return s(y);case"date":return c(y,p);case"bits":return a(y,p-y.length).substring(0,p);case"list":return y.reduce(function(e,n){return e+g({input:n,fields:t.fields})},"");case"language":return d(y,p);default:throw new Error("ConsentString - Unknown field type "+o+" for encoding")}}function g(e){var n=e.input;return e.fields.reduce(function(e,t){return e+=h({input:n,field:t})},"")}function b(e){var n=e.input,t=e.output,o=e.startPosition,i=e.field,a=i.type,u=i.numBits,s=i.decoder,c=i.validator,l=i.listCount;if("function"==typeof c&&!c(t))return{newPosition:o};if("function"==typeof s)return s(n,t,o);var d="function"==typeof u?u(t):u,y=0;switch("function"==typeof l?y=l(t):"number"==typeof l&&(y=l),a){case"int":return{fieldValue:f(n,o,d)};case"bool":return{fieldValue:m(n,o)};case"date":return{fieldValue:p(n,o,d)};case"bits":return{fieldValue:n.substr(o,d)};case"list":return new Array(y).fill().reduce(function(e){var t=w({input:n,fields:i.fields,startPosition:e.newPosition}),o=t.decodedObject,a=t.newPosition;return{fieldValue:[].concat(r(e.fieldValue),[o]),newPosition:a}},{fieldValue:[],newPosition:o});case"language":return{fieldValue:v(n,o,d)};default:throw new Error("ConsentString - Unknown field type "+a+" for decoding")}}function w(e){var n=e.input,t=e.fields,r=e.startPosition,o=void 0===r?0:r;return{decodedObject:t.reduce(function(e,t){var r=t.name,i=t.numBits,a=b({input:n,output:e,startPosition:o,field:t}),u=a.fieldValue,s=a.newPosition;return void 0!==u&&(e[r]=u),void 0!==s?o=s:"number"==typeof i&&(o+=i),e},{}),newPosition:o}}function S(e,n){var t=e.version;if("number"!=typeof t)throw new Error("ConsentString - No version field to encode");if(n[t])return g({input:e,fields:n[t].fields});throw new Error("ConsentString - No definition for version "+t)}function V(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,t=f(e,0,A);if("number"!=typeof t)throw new Error("ConsentString - Unknown version number in the string to decode");if(!L[t])throw new Error("ConsentString - Unsupported version "+t+" in the string to decode");return w({input:e,fields:n[t].fields}).decodedObject}var I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C=Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,r=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},o=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":I(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},i=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},a=function(e){var n=e.next();return!Boolean(n.done)&&n};return function(n){var t,u=this,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!e(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(t=arguments[2])}var c,l,d=i(n,o(n));if(void 0!==d){c=e(u)?Object(new u):[];var f=d.call(n);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");l=0;for(var p,m;;){if(!(p=a(f)))return c.length=l,c;m=p.value,c[l]=s?s.call(t,m,l):m,l++}}else{var y=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var v=r(y.length);c=e(u)?Object(new u(v)):new Array(v),l=0;for(var h;l<v;)h=y[l],c[l]=s?s.call(t,h,l):h,l++;c.length=v}return c}}(),x=t(7),B=t(2),A=B.versionNumBits,L=B.vendorVersionMap;e.exports={padRight:a,padLeft:i,encodeField:h,encodeDataToBits:S,encodeIntToBits:u,encodeBoolToBits:s,encodeDateToBits:c,encodeLanguageToBits:d,encodeLetterToBits:l,encodeToBase64:function(e){var n=S(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:L);if(n){for(var t=a(n,7-(n.length+7)%8),r="",o=0;o<t.length;o+=8)r+=String.fromCharCode(parseInt(t.substr(o,8),2));return x.encode(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return null},decodeBitsToIds:function(e){return e.split("").reduce(function(e,n,t){return"1"===n&&-1===e.indexOf(t+1)&&e.push(t+1),e},[])},decodeBitsToInt:f,decodeBitsToDate:p,decodeBitsToBool:m,decodeBitsToLanguage:v,decodeBitsToLetter:y,decodeFromBase64:function(e,n){for(var t=e;t.length%4!=0;)t+="=";t=t.replace(/-/g,"+").replace(/_/g,"/");for(var r=x.decode(t),o="",a=0;a<r.length;a+=1){var u=r.charCodeAt(a).toString(2);o+=i(u,8-u.length)}return V(o,n)}}},function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,o=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},i=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":r(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},a=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},u=function(e){var n=e.next();return!Boolean(n.done)&&n}}(),{1:{version:1,metadataFields:["version","created","lastUpdated","cmpId","cmpVersion","consentScreen","vendorListVersion"],fields:[{name:"version",type:"int",numBits:6},{name:"created",type:"date",numBits:36},{name:"lastUpdated",type:"date",numBits:36},{name:"cmpId",type:"int",numBits:12},{name:"cmpVersion",type:"int",numBits:12},{name:"consentScreen",type:"int",numBits:6},{name:"consentLanguage",type:"language",numBits:12},{name:"vendorListVersion",type:"int",numBits:12},{name:"purposeIdBitString",type:"bits",numBits:24},{name:"maxVendorId",type:"int",numBits:16},{name:"isRange",type:"bool",numBits:1},{name:"vendorIdBitString",type:"bits",numBits:function(e){return e.maxVendorId},validator:function(e){return!e.isRange}},{name:"defaultConsent",type:"bool",numBits:1,validator:function(e){return e.isRange}},{name:"numEntries",numBits:12,type:"int",validator:function(e){return e.isRange}},{name:"vendorRangeList",type:"list",listCount:function(e){return e.numEntries},validator:function(e){return e.isRange},fields:[{name:"isRange",type:"bool",numBits:1},{name:"startVendorId",type:"int",numBits:16},{name:"endVendorId",type:"int",numBits:16,validator:function(e){return e.isRange}}]}]}});e.exports={versionNumBits:6,vendorVersionMap:o}},function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,o=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},i=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":r(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},a=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},u=function(e){var n=e.next();return!Boolean(n.done)&&n}}(),t(1)),i=o.decodeBitsToIds,a=o.decodeFromBase64;e.exports={decodeConsentString:function(e){var n=a(e),t=n.version,r=n.cmpId,o=n.vendorListVersion,u=n.purposeIdBitString,s=n.maxVendorId,c=n.created,l=n.lastUpdated,d=n.isRange,f=n.defaultConsent,p=n.vendorIdBitString,m=n.vendorRangeList,y=n.cmpVersion,v=n.consentScreen,h=n.consentLanguage,g={version:t,cmpId:r,vendorListVersion:o,allowedPurposeIds:i(u),maxVendorId:s,created:c,lastUpdated:l,cmpVersion:y,consentScreen:v,consentLanguage:h};if(d){var b=m.reduce(function(e,n){for(var t=n.isRange,r=n.startVendorId,o=n.endVendorId,i=t?o:r,a=r;a<=i;a+=1)e[a]=!0;return e},{});g.allowedVendorIds=[];for(var w=0;w<=s;w+=1)(f&&!b[w]||!f&&b[w])&&-1===g.allowedVendorIds.indexOf(w)&&g.allowedVendorIds.push(w)}else g.allowedVendorIds=i(p);return g}}},function(e,n,t){"use strict";window.consentString=t(5)},function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,o=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},i=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":r(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},a=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},u=function(e){var n=e.next();return!Boolean(n.done)&&n}}(),t(6).ConsentString),i=t(3).decodeConsentString,a=t(0).encodeConsentString;e.exports={ConsentString:o,decodeConsentString:i,encodeConsentString:a}},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=(Array.from||function(){var e=function(e){return"function"==typeof e},n=function(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,r=function(e){var r=n(e);return Math.min(Math.max(r,0),t)},i=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(void 0===e?"undefined":o(e))>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},a=function(n,t){if(null!=n&&null!=t){var r=n[t];if(null==r)return;if(!e(r))throw new TypeError(r+" is not a function");return r}},u=function(e){var n=e.next();return!Boolean(n.done)&&n}}(),t(0).encodeConsentString),u=t(3).decodeConsentString,s=t(2).vendorVersionMap,c=/^[a-z]{2}$/,l=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,e),this.created=new Date,this.lastUpdated=new Date,this.version=1,this.vendorList=null,this.vendorListVersion=null,this.cmpId=null,this.cmpVersion=null,this.consentScreen=null,this.consentLanguage=null,this.allowedPurposeIds=[],this.allowedVendorIds=[],n&&Object.assign(this,u(n))}return i(e,[{key:"getConsentString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.vendorList)throw new Error("ConsentString - A vendor list is required to encode a consent string");return!0===e&&(this.lastUpdated=new Date),a({version:this.getVersion(),vendorList:this.vendorList,allowedPurposeIds:this.allowedPurposeIds,allowedVendorIds:this.allowedVendorIds,created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,consentLanguage:this.consentLanguage,vendorListVersion:this.vendorListVersion})}},{key:"getMetadataString",value:function(){return a({version:this.getVersion(),created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,vendorListVersion:this.vendorListVersion})}},{key:"getVersion",value:function(){return this.version}},{key:"getVendorListVersion",value:function(){return this.vendorListVersion}},{key:"setGlobalVendorList",value:function(e){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("ConsentString - You must provide an object when setting the global vendor list");if(!e.vendorListVersion||!Array.isArray(e.purposes)||!Array.isArray(e.vendors))throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework");this.vendorList={vendorListVersion:e.vendorListVersion,lastUpdated:e.lastUpdated,purposes:e.purposes,features:e.features,vendors:e.vendors.slice(0).sort(function(e,n){return e.id<n.id?-1:1})},this.vendorListVersion=e.vendorListVersion}},{key:"setCmpId",value:function(e){this.cmpId=e}},{key:"getCmpId",value:function(){return this.cmpId}},{key:"setCmpVersion",value:function(e){this.cmpVersion=e}},{key:"getCmpVersion",value:function(){return this.cmpVersion}},{key:"setConsentScreen",value:function(e){this.consentScreen=e}},{key:"getConsentScreen",value:function(){return this.consentScreen}},{key:"setConsentLanguage",value:function(e){if(!1===c.test(e))throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");this.consentLanguage=e}},{key:"getConsentLanguage",value:function(){return this.consentLanguage}},{key:"setPurposesAllowed",value:function(e){this.allowedPurposeIds=e}},{key:"getPurposesAllowed",value:function(){return this.allowedPurposeIds}},{key:"setPurposeAllowed",value:function(e,n){var t=this.allowedPurposeIds.indexOf(e);!0===n?-1===t&&this.allowedPurposeIds.push(e):!1===n&&-1!==t&&this.allowedPurposeIds.splice(t,1)}},{key:"isPurposeAllowed",value:function(e){return-1!==this.allowedPurposeIds.indexOf(e)}},{key:"setVendorsAllowed",value:function(e){this.allowedVendorIds=e}},{key:"getVendorsAllowed",value:function(){return this.allowedVendorIds}},{key:"setVendorAllowed",value:function(e,n){var t=this.allowedVendorIds.indexOf(e);!0===n?-1===t&&this.allowedVendorIds.push(e):!1===n&&-1!==t&&this.allowedVendorIds.splice(t,1)}},{key:"isVendorAllowed",value:function(e){return-1!==this.allowedVendorIds.indexOf(e)}}],[{key:"decodeMetadataString",value:function(e){var n=u(e),t={};return s[n.version].metadataFields.forEach(function(e){t[e]=n[e]}),t}}]),e}();e.exports={ConsentString:l}},function(e,n,t){(function(e,r){var o;!function(i){var a="object"==typeof n&&n,u=("object"==typeof e&&e&&e.exports,"object"==typeof r&&r);var s=function(e){this.message=e};(s.prototype=new Error).name="InvalidCharacterError";var c=function(e){throw new s(e)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=/[\t\n\f\r ]/g,f={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&c("The string to be encoded contains characters outside of the Latin1 range.");for(var n,t=e.length%3,r="",o=-1,i=e.length-t;++o<i;)n=(e.charCodeAt(o)<<16)+(e.charCodeAt(++o)<<8)+e.charCodeAt(++o),r+=l.charAt(n>>18&63)+l.charAt(n>>12&63)+l.charAt(n>>6&63)+l.charAt(63&n);return 2==t?(n=(e.charCodeAt(o)<<8)+e.charCodeAt(++o),r+=l.charAt(n>>10)+l.charAt(n>>4&63)+l.charAt(n<<2&63)+"="):1==t&&(n=e.charCodeAt(o),r+=l.charAt(n>>2)+l.charAt(n<<4&63)+"=="),r},decode:function(e){var n=(e=String(e).replace(d,"")).length;n%4==0&&(n=(e=e.replace(/==?$/,"")).length),(n%4==1||/[^+a-zA-Z0-9/]/.test(e))&&c("Invalid character: the string to be decoded is not correctly encoded.");for(var t,r,o=0,i="",a=-1;++a<n;)r=l.indexOf(e.charAt(a)),t=o%4?64*t+r:r,o++%4&&(i+=String.fromCharCode(255&t>>(-2*o&6)));return i},version:"0.1.0"};void 0!==(o=function(){return f}.call(n,t,n,e))&&(e.exports=o)}()}).call(n,t(8)(e),t(9))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]),"undefined"==typeof __cmp&&(__cmp={}),function(e){e.__cmp=function(){function n(){if(!e.frames.__cmpLocator)if(document.body){var t=document.body,r=document.createElement("iframe");r.style="display:none",r.name="__cmpLocator",t.appendChild(r)}else setTimeout(n,5)}var t=[];!function(){if(__cmp.a)for(var e=0;e<__cmp.a.length;e++){var n={},r=__cmp.a[e];n.commandmethod=r[0],n.parameter=r[1],n.callback=r[2],t.push(n)}}(),n(),(e.attachEvent||e.addEventListener)("message",function(n){e.__cmp.receiveMessage(n)},!1);var r=function(e,n,t){if(t)switch(e){case"ping":Optanon.getPingRequest(t);break;case"getVendorConsents":Optanon.getVendorConsentsRequest(t);break;case"getConsentData":Optanon.getConsentDataRequest(t)}};return r.receiveMessage=function(e){var n=e.data,t=e.origin,o=e.source;if(n&&n.__cmpCall){var i=n.__cmpCall.callId,a=n.__cmpCall.command;n.__cmpCall.parameter;r(a,0,function(e,n){o.postMessage({__cmpReturn:{returnValue:e,success:n,callId:i,command:a}},t)})}else n&&n.OnetrustIABCookies&&Optanon.updateConsentFromCookies(n.OnetrustIABCookies)},r.proccessQueue=function(){if(t)for(var e=0;e<t.length;e++)r(t[e].commandmethod,t[e].parameter,t[e].callback)},r}()}(window);

var c;
if (typeof Optanon == 'undefined') {
    Optanon = OneTrust = {};
}

(function () {
    "use strict";

    // Polyfill Helpers For IE 11
    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }

    var optanonVersion = '4.4.0',
        optanonCookieName = 'OptanonConsent',
        optanonCookieDomain = 'onetrust.com',
        optanonAlertBoxClosedCookieName = 'OptanonAlertBoxClosed',
        optanonPreview = true,
        optanonGeolocationExecuteAllScripts = false,
        optanonDoNotTrackEnabled = navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1',
        doNotTrackText = 'do not track',
        optanonIsOptInMode = getIsOptInMode(),
        optanonIsSoftOptInMode = getIsSoftOptInMode(),
        optanonEnsureCookieDataCompatibilityComplete = false,
        optanonHtmlGroupData = void 0,
        //Stores pending html Optanon Group Id changes before writing to cookie
    optanonWrapperScriptExecutedGroups = [],
        //Stores Optanon Group Ids for which wrapper InsertScript has already been executed for
    optanonWrapperHtmlExecutedGroups = [],
        //Stores Optanon Group Ids for which wrapper InsertHtml has already been executed for
    optanonWrapperScriptExecutedGroupsTemp = [],
        optanonWrapperHtmlExecutedGroupsTemp = [],
        optanonGroupIdPerformanceCookies = 2,
        optanonGroupIdFunctionalityCookies = 3,
        optanonGroupIdTargetingCookies = 4,
        optanonGroupIdSocialCookies = 8,
        optanonAboutCookiesGroupName = optanonData().AboutCookiesText,
        optanonNotLandingPageName = 'NotLandingPage',
        optanonAwaitingReconsentName = 'AwaitingReconsent',
        optanonShowSubGroupCookies = true,
        optanonShowSubGroupDescription = true,
        onetrustClientScriptUrl = null,
        isWebsiteContainFixedHeader = false,
        isRTL = false,
        isClassic = false,
        isCenterTile = false,
        geolookupCookieParamName = "EU",


    oneTrustIABConsent = {
        purpose: [],
        vendors: [],
        vendorList: null
    },
        oneTrustIABCookieName = 'eupubconsent',
        oneTrustIAB3rdPartyCookie = 'euconsent',
        oneTrustIABgdprAppliesGlobally = true,
        IAB3rdPartyCookieValue = "",
        IABCookieValue = "",


    firstTimebannerLoad = true,
        optanonJsonData = void 0,
        isInEU = false,
        useGeoLocationService = true,
        optanonHtmlGroupDataTemp = void 0,
        impliedConsentDirty = false,
        pagePushedDown = false,
        cssPath = 'https://cookiesdevstorage.blob.core.windows.net/skins/4.4.0/default_flat_top_two_button_white/v2/css/optanon.css',
        constant = {
        KEEPCENTERTILEBANNEROPEN: "keepBannerOpen",
        FIRSTPAGEVIEW: 'firstPageView',
        IMPLIEDCONSENT: 'implied consent'
    };

    var OT = function OT(el, type) {
        return new OneTrust(el, type);
    };

    function insertViewPortTag() {
        var viewport = document.querySelector('meta[name="viewport"]'),
            meta = document.createElement('meta');

        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1';

        if (cssPath.includes('flat_bottom') && navigator.userAgent.includes('Android') && !viewport || viewport && !viewport.content.includes('width=device-width') || viewport && !viewport.content.includes('initial-scale=1')) {
            document.head.appendChild(meta);
        }
    }

    function updateGtmMacros(allowAll) {
        var gtmOptanonActiveGroups = [],
            i = void 0,
            json = optanonData();

        if (json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT && !impliedConsentDirty && !allowAll) {
            for (i = 0; i < optanonHtmlGroupDataTemp.length; i++) {
                if (endsWith(optanonHtmlGroupDataTemp[i], ':1') && canSoftOptInInsertForGroup(optanonHtmlGroupDataTemp[i].replace(':1', ''))) {
                    gtmOptanonActiveGroups.push(optanonHtmlGroupDataTemp[i].replace(':1', ''));
                }
            }
        } else {
            for (i = 0; i < optanonHtmlGroupData.length; i++) {
                if (endsWith(optanonHtmlGroupData[i], ':1') && canSoftOptInInsertForGroup(optanonHtmlGroupData[i].replace(':1', ''))) {
                    gtmOptanonActiveGroups.push(optanonHtmlGroupData[i].replace(':1', ''));
                }
            }
        }

        // Setting "optanon-active-groups" global variable for Google Tag Manager macro
        var serializeArrayString = ',' + serialiseArrayToString(gtmOptanonActiveGroups) + ',';
        window.OnetrustActiveGroups = serializeArrayString;
        window.OptanonActiveGroups = serializeArrayString;

        // Setting "optanon-active-groups" data layer field for Google Tag Manager macro
        if (typeof dataLayer != 'undefined') {
            if (dataLayer.constructor === Array) {
                dataLayer.push({ 'OnetrustActiveGroups': serializeArrayString });
                dataLayer.push({ 'OptanonActiveGroups': serializeArrayString });
            }
        } else {
            window.dataLayer = [{ 'event': 'OptanonLoaded', 'OnetrustActiveGroups': serializeArrayString }];
            window.dataLayer = [{ 'event': 'OptanonLoaded', 'OptanonActiveGroups': serializeArrayString }];
        }

        // Trigger consent changed event
        setTimeout(function () {
            var event = new CustomEvent('consent.onetrust', { detail: gtmOptanonActiveGroups });
            window.dispatchEvent(event);
        });
    }

    function initialiseCssReferences() {
        insertCssReference(updateCorrectUrl(cssPath));

        var links = document.querySelectorAll('link');

        for (var i = 0; i < links.length; i++) {
            if (links[i].href.includes('onetrust-rtl.css')) {
                isRTL = true;
            }
            if (links[i].href.includes('default_responsive')) {
                isClassic = true;
            }
        }

        // Figure out foreground colour for buttons
        var color = hexToRgb("#31CC39"),
            textColor = color ? color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186 ? "#000000" : "#ffffff" : "";

        // Insert custom skin css
        var style = document.createElement("style");
        style.innerHTML = "#optanon ul#optanon-menu li { background-color:  !important }" + "#optanon ul#optanon-menu li.menu-item-selected { background-color:  !important }" + "#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #31CC39 !important }" + ".optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #31CC39 !important; border-color: #31CC39 !important; }" + "#optanon #optanon-popup-wrapper .optanon-white-button-middle button { color: " + textColor + " !important }" + ".optanon-alert-box-wrapper .optanon-alert-box-button-middle button { color: " + textColor + " !important }" + "#optanon #optanon-popup-bottom { background-color:  !important }" + "#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color:  !important }" + ".optanon-alert-box-wrapper { background-color: !important }" + ".optanon-alert-box-wrapper .optanon-alert-box-bg p { color: !important }" + "";

        if (isCenterTile) {
            style.innerHTML += ".optanon-alert-box-button-container .optanon-alert-box-accept-button { background-color: #31CC39 !important }" + ".optanon-alert-box-wrapper .optanon-alert-box-notice, .optanon-banner-title, .optanon-alert-box-footer, #optanon-popup-bottom-content { color: !important }";
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function initialiseLandingPath() {
        var existingPath = readCookieParam(optanonCookieName, 'landingPath');

        // landing page viewed - ensure the parameter is updated but don't hide the alert box
        if (!existingPath || existingPath === location.href) {
            setLandingPathParam(location.href);
            return;
        }

        var awaitingReconsent = readCookieParam(optanonCookieName, optanonAwaitingReconsentName) === 'true',
            json = optanonData(),
            cookie = getCookie(optanonAlertBoxClosedCookieName),
            reconsentDate = json.LastReconsentDate,
            needsReconsent = cookie && reconsentDate && new Date(reconsentDate) > new Date(cookie);
        if (needsReconsent && !awaitingReconsent) {
            // we need the reconsent so we're updating the landing page parameter and setting the reconsent flag
            setLandingPathParam(location.href);
            writeCookieParam(optanonCookieName, optanonAwaitingReconsentName, true);
            return;
        }

        // make sure the initial landing page isn't treated as such after navigating away
        setLandingPathParam(optanonNotLandingPageName);
        writeCookieParam(optanonCookieName, optanonAwaitingReconsentName, false);

        if (optanonIsSoftOptInMode) {
            Optanon.SetAlertBoxClosed(true);
        }
    }

    function setLandingPathParam(value) {
        writeCookieParam(optanonCookieName, 'landingPath', value);
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function insertCssReference(url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.href = url;
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    function injectConsentNotice() {
        var json = optanonData();


        var IabDataJson = IABData();
        if (json.IsIABEnabled) {
            if (!oneTrustIABConsent.vendorList) {
                var vendorlistUrl = "https://vendorlist.consensu.org/vendorlist.json";
                if (IabDataJson.vendorListVersion && IabDataJson.vendorListVersion > 0) {
                    vendorlistUrl = "https://vendorlist.consensu.org/v-" + IabDataJson.vendorListVersion + "/vendorlist.json";
                }
                OneTrust.getJSON(vendorlistUrl, function (response) {
                    oneTrustIABConsent.vendorList = response;
                });
            }

            if (!json.euOnly) {
                window.jsonFeed = function (data) {
                    if (!readCookieParam(optanonCookieName, geolookupCookieParamName)) {
                        writeCookieParam(optanonCookieName, geolookupCookieParamName, data.displayPopup);
                    }
                    assignIABGlobalScope(data.displayPopup);
                };
            }
        }


        //Set up default banner trigger
        OT(window).on('load', Optanon.LoadBanner);

        if (optanonPreview) {
            Optanon.loadDefaultBannerGroup();
        }

        window.jsonFeed = function (data) {
            if (!readCookieParam(optanonCookieName, geolookupCookieParamName)) {
                writeCookieParam(optanonCookieName, geolookupCookieParamName, data.displayPopup);
            }

            assignIABGlobalScope(data.displayPopup);

            if (data.displayPopup == true || data.displayPopup == 'true' || isInEU == 'true' || isInEU == true) {

                Optanon.loadDefaultBannerGroup(data);
            } else {

                if (!json.euOnly) {
                    Optanon.loadDefaultBannerGroup();
                } else {
                    if (!optanonPreview && readCookieParam(optanonCookieName, geolookupCookieParamName)) {
                        updateCookieParam(optanonCookieName, geolookupCookieParamName, isInEU);
                    }

                    optanonGeolocationExecuteAllScripts = true;

                    if (!getCookie(optanonAlertBoxClosedCookieName)) {
                        OT(window).one('otloadbanner', function () {
                            var showCookieSettingsLink = false;

                            substitutePlainTextScriptTags();

                            if (OT('.optanon-show-settings').length > 0) {
                                if (OT('.optanon-show-settings').attr('data-ignore-geolocation')) {
                                    if (OT('.optanon-show-settings').attr('data-ignore-geolocation').toLowerCase() === "true") {
                                        showCookieSettingsLink = true;
                                    }
                                }
                            }

                            if (!readCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW)) {
                                writeCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW, true);
                            } else {
                                if (!performance.navigation.type == 1) {
                                    updateCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW, false);
                                    if (json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT) {
                                        closeBannerHandler(true, true);
                                    }
                                }
                            }

                            if (showCookieSettingsLink) {
                                //Insert Optanon main consent notice component
                                if (!checkIscenterTile()) {
                                    insertConsentNoticeHtml();
                                } else {
                                    insertCenterTileConsentNoticeHtml();
                                }

                                //common
                                initialiseConsentNoticeHandlers();

                                //Insert Optanon Show Settings component
                                insertShowSettingsButtonsHtml();
                                initialiseShowSettingsButtonsHandlers();

                                if (json.IsIABEnabled) {
                                    InitializeVendorList();
                                }


                                if (!firstTimebannerLoad) {
                                    Optanon.AllowAll(true);
                                }
                            } else {
                                //Remove Optanon Show Settings component
                                if (OT('.optanon-show-settings').length > 0) {
                                    OT('.optanon-show-settings').remove();
                                }

                                //When cookie groups are disabled(opt-in) set all groups to enable as banner not available.
                                Optanon.AllowAll(true);
                            }

                            //Insert Optanon Cookie Policy component
                            if (OT('#optanon-cookie-policy').length > 0) {
                                insertCookiePolicyHtml();
                            }
                        });
                    } else {
                        OT(window).one('otloadbanner', function () {
                            //Insert Optanon Show Settings component
                            if (OT('.optanon-show-settings').length > 0) {
                                insertShowSettingsButtonsHtml();
                            }

                            //Insert Optanon Cookie Policy component
                            if (OT('#optanon-cookie-policy').length > 0) {
                                insertCookiePolicyHtml();
                            }
                        });
                    }
                }
            }
        };
    }

    this.loadDefaultBannerGroup = function (data) {
        var json = optanonData();

        if (!optanonPreview && readCookieParam(optanonCookieName, geolookupCookieParamName)) {
            updateCookieParam(optanonCookieName, geolookupCookieParamName, data && data.displayPopup ? data.displayPopup : isInEU);
        }

        if (!readCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW)) {
            writeCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW, true);
        } else {
            if (!performance.navigation.type == 1) {
                updateCookieParam(optanonCookieName, constant.FIRSTPAGEVIEW, false);
                if (!getCookie(optanonAlertBoxClosedCookieName) && json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT) {
                    closeBannerHandler(true, true);
                }
            }
        }

        if (!getCookie(optanonAlertBoxClosedCookieName)) {
            OT(window).one('otloadbanner', function () {

                substitutePlainTextScriptTags();

                //Insert Optanon main consent notice component
                if (!checkIscenterTile()) {
                    insertConsentNoticeHtml();
                } else {
                    insertCenterTileConsentNoticeHtml();
                }

                initialiseConsentNoticeHandlers();

                //Insert Optanon alert component

                if (!checkIscenterTile()) {
                    insertAlertHtml();
                    initialiseAlertHandlers();
                }


                //Insert Optanon Center Tilealert component


                if (!IAB3rdPartyCookieValue) {
                    setIAB3rdPartyCookie(oneTrustIAB3rdPartyCookie, "", 0, true);
                }

                if (json.IsIABEnabled) {
                    InitializeVendorList();
                }



                //Insert Optanon Show Settings component
                if (OT('.optanon-show-settings').length > 0) {
                    insertShowSettingsButtonsHtml();
                }

                //Insert Optanon Cookie Policy component
                if (OT('#optanon-cookie-policy').length > 0) {
                    insertCookiePolicyHtml();
                }

                executeOptanonWrapper();

                //Always set cookie if not set yet
                if (!readCookieParam(optanonCookieName, 'groups')) {
                    writeCookieGroupsParam(optanonCookieName);
                }

                // Setting focus on the appropriate button
                if (OT('.banner-policy-link').length > 0) {
                    OT('.banner-policy-link').focus();
                } else {
                    setButtonFocus();
                }

                var firstItem = void 0,
                    lastItem = void 0,
                    focusable = void 0,
                    buttonPolicyLink = OT('.banner-policy-link'),
                    buttonGroup = !isCenterTile ? OT('.banner-close-button, .optanon-alert-box-button-container button:not([class="optanon-alert-box-close"]').el : OT('.optanon-alert-box-button-container button:not([class="optanon-alert-box-close"]').el;

                focusable = OT('.optanon-alert-box-wrapper [href], .optanon-alert-box-wrapper input, .optanon-alert-box-wrapper select, .optanon-alert-box-wrapper textarea, .optanon-alert-box-wrapper button:not([class="optanon-alert-box-close"]').el;

                var buttonPolicyLinkExist = buttonPolicyLink.length > 0;

                if (buttonPolicyLinkExist) {
                    firstItem = OT(buttonPolicyLink.el[0]);
                } else {
                    firstItem = OT(focusable[focusable.length - 1]);
                }

                lastItem = OT(focusable[0]);

                if (firstItem) {
                    firstItem.on('keydown', function (e) {
                        return resetFocus(e, buttonPolicyLinkExist);
                    });
                }

                if (lastItem) {
                    lastItem.on('keydown', function (e) {
                        return resetFocusReverse(e, buttonPolicyLinkExist);
                    });
                }

                if (buttonGroup.length > 0) {
                    if (isCenterTile) {
                        OT(buttonGroup[0]).on('keydown', resetFocusReverseToLink);
                    } else {
                        OT(buttonGroup[buttonGroup.length - 1]).on('keydown', resetFocusReverseToLink);
                    }
                }
            });
        } else {
            OT(window).one('otloadbanner', function () {
                //Insert Optanon Show Settings component
                if (OT('.optanon-show-settings').length > 0) {
                    insertShowSettingsButtonsHtml();
                }

                //Insert Optanon Cookie Policy component
                if (OT('#optanon-cookie-policy').length > 0) {
                    insertCookiePolicyHtml();
                }
            });
        }
    };

    function resetFocus(e, bannerPolicyExist) {
        if (bannerPolicyExist) {
            if (e.keyCode === 9 && !e.shiftKey) {
                e.preventDefault();
                setButtonFocus();
            }
        } else {
            if (e.keyCode === 9 && e.shiftKey) {
                e.preventDefault();
                setButtonFocusReverse();
            }
            if (isCenterTile) {
                if (e.keyCode === 9 && !e.shiftKey) {
                    e.preventDefault();
                    setButtonFocus();
                }
            }
        }
    }

    function resetFocusReverse(e, bannerPolicyExist) {
        if (!bannerPolicyExist) {
            if (e.keyCode === 9 && !e.shiftKey) {
                e.preventDefault();
                setButtonFocus();
            }
        }
    }

    function resetFocusReverseToLink(e) {
        if (e.keyCode === 9 && e.shiftKey) {
            e.preventDefault();
            setButtonFocusReverse();
        }
    }

    function setButtonFocus() {
        var setttinsBtn = OT('.optanon-alert-box-button-container .cookie-settings-button'),
            acceptCookiesBtn = OT('.optanon-alert-box-button-container .accept-cookies-button'),
            closeBannerBtn = OT('.banner-close-button'),
            bannerPolicyLink = OT('.banner-policy-link');

        if (isCenterTile) {
            if (acceptCookiesBtn.el[0] === document.activeElement) {
                if (setttinsBtn.length > 0) {
                    setttinsBtn.focus();
                } else if (closeBannerBtn.length > 0) {
                    closeBannerBtn.focus();
                }
            } else if (closeBannerBtn.el[0] === document.activeElement) {
                if (acceptCookiesBtn.length > 0) {
                    acceptCookiesBtn.focus();
                } else if (setttinsBtn.length > 0) {
                    setttinsBtn.focus();
                }
            } else {
                if (bannerPolicyLink.length > 0) {
                    if (acceptCookiesBtn.length > 0) {
                        acceptCookiesBtn.focus();
                    } else if (setttinsBtn.length > 0) {
                        setttinsBtn.focus();
                    } else if (closeBannerBtn.length > 0) {
                        closeBannerBtn.focus();
                    }
                } else {
                    if (closeBannerBtn.length > 0) {
                        closeBannerBtn.focus();
                    } else if (bannerPolicyLink.length > 0) {
                        bannerPolicyLink.focus();
                    } else if (acceptCookiesBtn.length > 0) {
                        acceptCookiesBtn.focus();
                    } else if (setttinsBtn.length > 0) {
                        setttinsBtn.focus();
                    } else if (closeBannerBtn.length > 0) {
                        closeBannerBtn.focus();
                    }
                }
            }
        } else {
            if (setttinsBtn.length > 0) {
                setttinsBtn.focus();
            } else if (acceptCookiesBtn.length > 0) {
                acceptCookiesBtn.focus();
            } else if (closeBannerBtn.length > 0) {
                closeBannerBtn.focus();
            }
        }
    }

    function setButtonFocusReverse() {
        var setttinsBtn = OT('.optanon-alert-box-button-container .cookie-settings-button'),
            acceptCookiesBtn = OT('.optanon-alert-box-button-container .accept-cookies-button'),
            closeBannerBtn = OT('.banner-close-button'),
            bannerPolicyLink = OT('.banner-policy-link');

        if (isCenterTile) {
            if (acceptCookiesBtn.el[0] === document.activeElement) {
                if (bannerPolicyLink.length > 0) {
                    bannerPolicyLink.focus();
                } else if (closeBannerBtn.length > 0) {
                    closeBannerBtn.focus();
                } else if (setttinsBtn.length > 0) {
                    setttinsBtn.focus();
                }
            } else {
                if (bannerPolicyLink.length > 0) {
                    bannerPolicyLink.focus();
                } else if (acceptCookiesBtn.length > 0) {
                    acceptCookiesBtn.focus();
                } else if (bannerPolicyLink.length > 0) {
                    bannerPolicyLink.focus();
                } else if (closeBannerBtn.length > 0) {
                    closeBannerBtn.focus();
                }
            }
        } else {
            if (bannerPolicyLink.length > 0) {
                bannerPolicyLink.focus();
            } else if (closeBannerBtn.length > 0) {
                closeBannerBtn.focus();
            } else if (acceptCookiesBtn.length > 0) {
                acceptCookiesBtn.focus();
            } else if (setttinsBtn.length > 0) {
                setttinsBtn.focus();
            }
        }
    }

    //Substitute text/plain script type attributes with text/javascript
    function substitutePlainTextScriptTags() {
        OT('script').filter(function (element, idx) {
            return element.type && element.type.toLowerCase() == 'text/plain' && element.classList[0] && element.classList[0].toLowerCase().match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/);
        }).each(function (element) {
            var groupIds = element.classList[0].toLowerCase().split('optanon-category-')[1].split('-'),
                isInsertGroup = true;
            if (groupIds && groupIds.length > 0) {
                for (var i = 0; i < groupIds.length; i++) {
                    if (!canInsertForGroup(groupIds[i], optanonGeolocationExecuteAllScripts)) {
                        isInsertGroup = false;
                        break;
                    }
                }
                if (isInsertGroup) {
                    OT(element).attr('type', 'text/javascript');
                }
            }
        });
    }

    function insertConsentNoticeHtml() {
        var group = void 0,
            json = optanonData(),
            groupIsAboutCookies = void 0,
            groupIsActive = void 0,
            menuItem = void 0,
            moreInfo = void 0,
            i = void 0;

        jsonAddAboutCookies(json);

        OT('body').prepend('<div id="optanon" class="modern"></div>');

        var preferenceCenterDataHTML = '<div id="optanon-popup-bg"></div>' + '<div id="optanon-popup-wrapper" role="dialog" aria-modal="true" tabindex="-1">' + '<div id="optanon-popup-top">';

        if (json.ShowPreferenceCenterCloseButton) {
            if (!json.CloseText) {
                json.CloseText = "Close";
            }
            preferenceCenterDataHTML = preferenceCenterDataHTML + '<button onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" ' + 'aria-label="' + json.CloseText + '" class="optanon-close-link optanon-close optanon-close-ui" title="' + json.CloseText + '">' + '<div id="optanon-close" ' + 'style="background: url(' + updateCorrectUrl('https://cookiesdevstorage.blob.core.windows.net/skins/4.4.0/default_flat_top_two_button_white/v2/images/optanon-pop-up-close.png') + ');width:34px;height:34px;">' + '</div></button>';
        }

        var logoUrl = "'" + updateCorrectUrl('https://cookiesdevstorage.blob.core.windows.net/skins/4.4.0/default_flat_top_two_button_white/v2/images/cookie-collective-top-logo.svg') + "'";
        preferenceCenterDataHTML = preferenceCenterDataHTML + '</div>' + '<div id="optanon-popup-body">' + '<div id="optanon-popup-body-left">' + '<div id="optanon-popup-body-left-shading"></div>' + '<div id="optanon-branding-top-logo" style="background-image: url(' + logoUrl + ') !important;"></div>' + '<ul id="optanon-menu" aria-label="Navigation Menu" role="tablist"></ul></div></div></div>';

        OT('#optanon').html(preferenceCenterDataHTML);

        if (json.Language && json.Language.culture) {
            OT("#optanon-popup-wrapper").attr("lang", json.Language.culture);
        }

        for (i = 0; i < json.Groups.length; i++) {
            group = json.Groups[i];
            if (safeGroupName(group) == optanonAboutCookiesGroupName || isTopLevelGroup(group) && isValidConsentNoticeGroup(group)) {
                groupIsAboutCookies = safeGroupName(group) == optanonAboutCookiesGroupName;
                groupIsActive = OneTrust.inArray(getGroupIdForCookie(group) + ':1', optanonHtmlGroupData) != -1;

                menuItem = OT('<li class="menu-item-necessary ' + (groupIsAboutCookies || groupIsActive ? 'menu-item-on' : 'menu-item-off') + '" title="' + safeGroupName(group) + '">' + '<p class="preference-menu-item"><button role="tab" aria-selected="' + (i === 0 ? "true" : "false") + '" aria-controls="tab-' + i + '" id="' + safeGroupName(group).split(' ')[0] + '-' + safeGroupName(group).split(' ')[1] + '">' + safeGroupName(group) + '</button></p>' + '</li>', 'ce');

                menuItem = menuItem.el;

                if (safeGroupName(group) == optanonAboutCookiesGroupName) {
                    OT(menuItem).removeClass('menu-item-necessary').addClass('menu-item-about');
                }

                switch (group.OptanonGroupId) {
                    case optanonGroupIdPerformanceCookies:
                        //Performance Cookies
                        OT(menuItem).removeClass('menu-item-necessary').addClass('menu-item-performance');
                        break;
                    case optanonGroupIdFunctionalityCookies:
                        //Functionality Cookies
                        OT(menuItem).removeClass('menu-item-necessary').addClass('menu-item-functional');
                        break;
                    case optanonGroupIdTargetingCookies:
                        //Targeting Cookies
                        OT(menuItem).removeClass('menu-item-necessary').addClass('menu-item-advertising');
                        break;
                    case optanonGroupIdSocialCookies:
                        //Social Cookies
                        OT(menuItem).removeClass('menu-item-necessary').addClass('menu-item-social');
                        break;
                    default:
                        break;
                }

                OT(menuItem).data('group', group);
                OT(menuItem).data('optanonGroupId', getGroupIdForCookie(group));
                OT(menuItem).on('click', consentNoticeMenuItemClick);

                OT('#optanon #optanon-menu').append(menuItem);
            }
        }

        moreInfo = OT('<li class="menu-item-moreinfo menu-item-off" title="' + json.AboutText + '">' + '<p class="preference-menu-item"><a target="_blank" aria-label="' + json.AboutText + '" href="' + json.AboutLink + '"' + ' onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Cookie Policy\');">' + json.AboutText + '</a></p>' + '</li>', 'ce');

        moreInfo = moreInfo.el;

        OT('#optanon #optanon-menu').append(moreInfo);

        OT('#optanon #optanon-popup-body').append(['<div id="optanon-popup-body-right">' + '<p role="heading" aria-level="2" class="legacy-preference-banner-title h2" aria-label="' + json.MainText + '">' + json.MainText + '</p>' + '<div class="vendor-header-container">' + '<p class="header-3" role="heading" aria-level="3"></p>' + '<div id="optanon-popup-more-info-bar">' + '<div class="optanon-status">' + getGroupToggle(json, "chkMain") + getGroupAlwaysActive(json) + '</div>' + '</div>' + '</div>' + '<div class="optanon-main-info-text" role="tabpanel"></div>' + (json.IsIABEnabled && json.VendorLevelOptOut ? '<div id="optanon-vendor-consent-text">' + '<button class="vendor-consent-link" aria-label="View Vendor Consent">View Vendor Consent</button></div>' : '') + '</div>', '<div class="optanon-bottom-spacer"></div>']);

        OT('#optanon #optanon-popup-wrapper').append('<div id="optanon-popup-bottom"> <a href="https://onetrust.com/poweredbyonetrust" target="_blank">' + '<div id="optanon-popup-bottom-logo" style="background: url(' + updateCorrectUrl('https://cookiesdevstorage.blob.core.windows.net/skins/4.4.0/default_flat_top_two_button_white/v2/images/cookie-collective-top-bottom.png') + ');width:155px;height:35px;" title="powered by OneTrust"></div></a>' + '<div class="optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent">' + '<div class="optanon-white-button-left"></div>' + '<div class="optanon-white-button-middle">' + '<button title="' + json.AllowAllText + '" aria-label="' + json.AllowAllText + '" onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Save Settings\');">' + json.AllowAllText + '</button>' + '</div><div class="optanon-white-button-right"></div></div>' + '<div class="optanon-button-wrapper optanon-allow-all-button optanon-allow-all">' + '<div class="optanon-white-button-left"></div><div class="optanon-white-button-middle">' + '<button title="' + json.ConfirmText + '" aria-label="' + json.ConfirmText + '" onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Allow All\');">' + json.ConfirmText + '</button></div><div class="optanon-white-button-right"></div></div>' + '</div>');

        setAllowAllButton();
    }

    function getGroupToggle(json, toggleId) {
        var p = isRTL ? '<p class="togglerChk mainToggle">' : isClassic && !json.ShowPreferenceCenterCloseButton ? '<p class="no-closeBtn">' : '<p>',
            span = isRTL ? '<span class="toggleChk"></span>' : '';

        return '<div class="optanon-status-editable">' + '<form>' + '<span class="fieldset">' + p + span + '<input type="checkbox" value="check" id="' + toggleId + '" checked class="legacy-group-status optanon-status-checkbox" />' + '<label for="' + toggleId + '">' + (isRTL ? '' : json.ActiveText) + '</label>' + '</p>' + '</span>' + '</form>' + '</div>';
    }

    function getSubgroupToggle(json, group) {

        var p = isRTL ? '<p class="togglerChk subToggle"><span class="toggleChk"></span>' : '<p>',
            toggleId = 'chk' + getGroupIdForCookie(group),
            toggle = OT('<span class="optanon-subgroup-fieldset fieldset">' + p + '</span><input type="checkbox" value="check" id="' + toggleId + '" checked="" class="optanon-subgroup-checkbox optanon-status-checkbox" aria-label="' + safeGroupName(group) + '">' + '<label for="' + toggleId + '">' + (isRTL ? '' : json.ActiveText) + '</label></p></span>', 'ce');

        toggle = toggle.el;

        Array.prototype.forEach.call(toggle.querySelectorAll('input'), function (element, idx) {
            element.setAttribute('data-group', JSON.stringify(group));
            element.setAttribute('optanonGroupId', getGroupIdForCookie(group));
        });
        return toggle;

    }

    function getGroupAlwaysActive(json) {
        var p = isClassic && !json.ShowPreferenceCenterCloseButton ? '<p class="no-closeBtn">' : '<p>';
        return '<div class="optanon-status-always-active optanon-status-on">' + p + json.AlwaysActiveText + '</p>' + '</div>';
    }

    function consentNoticeMenuItemClick() {
        var json = optanonData(),
            group = OT(this).data('group'),
            subGroups = getGroupSubGroups(group),
            groupCookiesHtml = void 0,
            ariaLabel = this.childNodes[0].children[0].id,
            id = ariaLabel.split('-')[0] + '-description';

        jsonAddAboutCookies(json);
        var groupName = safeGroupName(group);
        OT("#optanon #optanon-menu li").removeClass('menu-item-selected');
        OT(this).addClass('menu-item-selected');

        OT('#optanon p.header-3').text(groupName);

        document.querySelector("#optanon-popup-body-right").children[2].setAttribute('id', id);
        document.querySelector("#optanon-popup-body-right").children[2].setAttribute('aria-labelledby', ariaLabel);
        document.querySelector('#optanon #' + id).innerHTML = safeFormattedGroupDescription(group);

        var menuItem = document.querySelectorAll('.preference-menu-item button');

        for (var i = 0; i < menuItem.length; i++) {
            if (menuItem[i].attributes[1].value === 'true') {
                menuItem[i].setAttribute('aria-selected', false);
            }
            if (menuItem[i].parentElement.parentElement.classList.contains('menu-item-selected')) {
                menuItem[i].setAttribute('aria-selected', true);
            }
        }

        //Show cookie data table
        if (group && !json.HideToolbarCookieList) {
            groupCookiesHtml = getGroupCookiesHtml(group);
            OT('#optanon .optanon-main-info-text').append(groupCookiesHtml);
        }

        setGroupStatus(group, json);

        if (subGroups && subGroups.length > 0) {
            for (var j = 0; j < subGroups.length; j += 1) {
                setGroupStatus(subGroups[j], json);
            }
        }

        var headerCheckbox = document.querySelector('#optanon .optanon-status-checkbox'),
            subgroupCheckbox = document.querySelectorAll('#optanon .optanon-subgroup-checkbox'),
            headerSpan = document.createElement('span');
        headerSpan.classList.add('sr-only');
        headerSpan.innerText = groupName;
        headerCheckbox.nextSibling.insertBefore(headerSpan, headerCheckbox.firstChild);

        if (subgroupCheckbox.length > 0) {
            subGroups.forEach(function (subgroup, idx) {
                var subgroupSpan = document.createElement('span');
                subgroupSpan.classList.add('sr-only');
                subgroupSpan.innerText = safeGroupName(subgroup);
                subgroupCheckbox[idx].nextSibling.insertBefore(subgroupSpan, subgroupCheckbox.firstChild);
            });
        }

        if (groupName == optanonAboutCookiesGroupName) {
            OT('#optanon #optanon-popup-more-info-bar').hide();
        } else {
            OT('#optanon #optanon-popup-more-info-bar').show();
        }

        if (json.IsIABEnabled && json.VendorLevelOptOut) {
            getVendorText();
        }
        return false;
    }

    function setGroupStatus(group, json) {
        if (safeGroupDefaultStatus(group).toLowerCase() == 'always active' || safeGroupDefaultStatus(group.Parent).toLowerCase() == 'always active') {
            OT('#optanon .optanon-status-always-active').show();
            OT('#optanon .optanon-status-editable').hide();
        } else {
            OT('#optanon .optanon-status-editable').show();
            OT('#optanon .optanon-status-always-active').hide();
            // Updating group toggle id to unique value
            OT('#optanon .optanon-status-editable .optanon-status-checkbox').prop('id', 'chk' + group.GroupId);
            OT('#optanon .optanon-status-editable label').attr('for', 'chk' + group.GroupId);

            var isGroupActive = OneTrust.inArray(getGroupIdForCookie(group) + ':1', optanonHtmlGroupData) != -1,
                groupCheckbox = OT(isTopLevelGroup(group) ? "#chk" + group.GroupId : '#optanon #chk' + getGroupIdForCookie(group)),
                option = isRTL ? OT(groupCheckbox.selector).prev('.toggleChk') : OT(groupCheckbox.selector).next('label');

            if (groupCheckbox.el.length > 0) {
                if (isGroupActive) {
                    groupCheckbox.prop('checked', true);
                    groupCheckbox.parent().addClass('optanon-status-on');
                    option.text(json.ActiveText);
                } else {
                    groupCheckbox.prop('checked', false);
                    groupCheckbox.parent().removeClass('optanon-status-on');
                    if (json.InactiveText) option.text(json.InactiveText);
                }
            }
        }
    }

    function InitializeVendorList() {
        var json = optanonData(),
            vendors = IABData(),
            i = void 0;
        vendors = vendors ? vendors.activeVendors : null;

        if (checkIscenterTile()) {
            OT('#optanon-popup-body').append('<div id="optanon-vendor-consent-back"><button class="vendor-consent-back-link" aria-label="Back">Back</button></div>');
            OT('#optanon-popup-body').append('<div class="optanon-vendor-center-tile">' + '<div id="optanon-vendor-consent-list">' + '<div></div>');
        } else {
            OT('#optanon-popup-body-left').append('<div id="optanon-vendor-consent-back"><button class="vendor-consent-back-link" aria-label="Back">Back</button></div>');
            OT('#optanon-popup-body-right').append('<div id="optanon-vendor-consent-list"></div>');
        }

        if (vendors && vendors.length > 0) {
            for (i = 0; i < vendors.length; i++) {
                vendors[i].policyUrl = getValidUrl(vendors[i].policyUrl);
                OT("#optanon-vendor-consent-list").append('<div class="vendor-item">' + '<div class="vendor-detail">' + '<div class="vendor-name">' + vendors[i].vendorName + '</div>' + '<a class="vendor-privacy-policy" rel="nofollow" target="_blank" href="' + vendors[i].policyUrl + '" onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Cookie Policy\');">' + vendors[i].policyUrl + '</a>' + '</div>' + '<div class="vendor-toggle-content">' + getVendorToggle(json, vendors[i].vendorId) + '</div>' + '</div>');
            }
        }

        if (checkIscenterTile()) {
            OT('#optanon-popup-body .optanon-vendor-center-tile').prepend('<div class="vendor-list-title"><div class="vendor-consent-title">Vendor Consent </div>' + '<div class="optanon-vendor-list-allow-all">' + getVenderListAllowAllToggle() + '</div></div>');
            OT('#optanon-popup-body .optanon-vendor-center-tile').hide();
            OT('#optanon-popup-body #optanon-vendor-consent-back').hide();
        } else {
            OT('#optanon #optanon-popup-body-right .vendor-header-container').append('<div class="optanon-vendor-list-allow-all">' + getVenderListAllowAllToggle() + '</div>');
            OT('#optanon-popup-body-right #optanon-vendor-consent-list').hide();
            OT('#optanon-popup-body-left #optanon-vendor-consent-back').hide();
            OT('#optanon-popup-body-right .optanon-vendor-list-allow-all').hide();
        }
        setVendorStatus();
    }

    function getValidUrl(url) {
        if (!url) return;
        var urlWithHttpRegex = /^(http)s?:\/\//i,
            // http(s)://domain.com
        protocolRelativeUrlRegex = /^:\/\//; // ://domain.com
        if (url.match(protocolRelativeUrlRegex)) {
            return "http" + url;
        } else if (!url.match(urlWithHttpRegex)) {
            return "http://" + url;
        } else {
            return url;
        }
    }

    function DisplayVendorList() {
        if (checkIscenterTile()) {
            OT("#optanon-popup-body .optanon-popup-body-content").hide();
            OT("#optanon-popup-body #optanon-vendor-consent-text").hide();
            OT('#optanon-popup-body #optanon-vendor-consent-back').show();
            OT('#optanon-popup-body .optanon-vendor-center-tile').show();
        } else {
            OT("#optanon-popup-body-left #optanon-menu").hide();
            OT("#optanon-popup-body-right .optanon-main-info-text").hide();
            OT("#optanon-popup-body-right #optanon-vendor-consent-text").hide();
            OT('#optanon-popup-body-left #optanon-vendor-consent-back').show();
            OT('#optanon-popup-body-right #optanon-vendor-consent-list').show();
            OT('#optanon-popup-body-right .optanon-vendor-list-allow-all').show();
        }
    }

    function setVendorStatus() {
        var json = optanonData(),
            vendorCheckBoxList = OT(".optanon-vendor-status-editable .optanon-vendor-status");
        vendorCheckBoxList = vendorCheckBoxList.el;

        if (oneTrustIABConsent.vendors && vendorCheckBoxList && vendorCheckBoxList.length > 0) {
            for (var i = 0; i < vendorCheckBoxList.length; i++) {
                var isVendorActive = OneTrust.inArray(vendorCheckBoxList[i].id + ':true', oneTrustIABConsent.vendors) != -1;

                if (isVendorActive) {
                    vendorCheckBoxList[i].checked = true;
                } else {
                    vendorCheckBoxList[i].checked = false;
                }
            }
        }
        var totalVendor = OT(".optanon-vendor-status-editable .optanon-vendor-status"),
            selectedVendor = OT(".optanon-vendor-status-editable .optanon-vendor-status:checked");
        if (totalVendor && selectedVendor) {
            if (selectedVendor.length >= totalVendor.length / 2) {
                OT("#chkVendorListAllowAll").prop("checked", true);
            } else {
                OT("#chkVendorListAllowAll").prop("checked", false);
            }
        }

    }

    function saveVendorStatus() {
        var enableVendors = [],
            vendorCheckBoxList = OT(".optanon-vendor-status-editable .optanon-vendor-status:checked");
        vendorCheckBoxList = vendorCheckBoxList.el;
        if (vendorCheckBoxList) {
            for (var i = 0; i < vendorCheckBoxList.length; i++) {
                enableVendors.push(vendorCheckBoxList[i].id + ':true');
            }
        }
        oneTrustIABConsent.vendors = enableVendors;
    }

    function getVenderListAllowAllToggle() {
        return '<div class="optanon-vendor-allow-all-editable">' + '<form>' + '<span class="fieldset">' + '<input type="checkbox" aria-checked="false" value="check" id="chkVendorListAllowAll" checked class="optanon-vendor-status" />' + '<label for="chkVendorListAllowAll"><span class="vendor-allow-all-text">Allow All</span></label>' + '</span>' + '</form>' + '</div>';
    }

    function getVendorText() {
        var json = optanonData();
        if (OT('.menu-item-about').hasClass('menu-item-selected') && json.IsIABEnabled && json.VendorLevelOptOut) {
            if (OT("#optanon-vendor-consent-list").css('display') === 'none') {
                OT('#optanon-vendor-consent-text').show();
            } else {
                DisplayVendorList();
                OT('#optanon-vendor-consent-text').hide();
            }
        } else {
            OT('#optanon-vendor-consent-text').hide();
        }
    }

    function getVendorToggle(json, vendorId) {
        var venodrToggleLabelId = "lblVendorToggle_" + vendorId,
            span = isRTL ? '<span class="toggleChk">' + json.ActiveText + '</span>' : '';
        return '<div class="optanon-vendor-status-editable">' + '<form>' + span + '<span class="fieldset">' + '<input type="checkbox" aria-checked="false" value="check" id="' + vendorId + '" checked class="optanon-vendor-status vendor-group-status" />' + '<label class="vendor-status-label" for="' + vendorId + '" id="' + venodrToggleLabelId + '">' + (isRTL ? '' : json.ActiveText) + '</label>' + '</span>' + '</form>' + '</div>';
    }


    function initialiseConsentNoticeHandlers() {
        var json = optanonData();

        //adding click events to page elements
        //.optanon-close-consent: set cookie and close consent notice
        //.optanon-close-ui: only hide consent notice
        //.optanon-toggle-display: show/close consent notice (set cookie if close)
        //.optanon-allow-all: activate all groups, set cookie and close consent notice
        //.optanon-status: toggle for center tile layout
        //.optanon-banner-tile: close and go back to banner tile

        OT(document).on('click', '.optanon-close-consent', function () {
            Optanon.Close();
            closeOptanonAlertBox(true, true);
            return false;
        });

        OT(document).on('click', '.optanon-close-ui', function () {
            hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            return false;
        });

        OT(document).on('click', '.optanon-toggle-display', function () {
            Optanon.ToggleInfoDisplay();
            return false;
        });

        OT(document).on('click', '.optanon-allow-all', function () {
            Optanon.AllowAll();
            closeOptanonAlertBox(true, true);
            return false;
        });

        OT(document).on('keydown', '#optanon', function (e) {
            if (e.keyCode == 27) {
                hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            }
        });


        OT(document).on('click', '#optanon-vendor-consent-text', function () {
            DisplayVendorList(json);
            return false;
        });
        OT(document).on('change', '.vendor-group-status', function () {
            if (OT(this).is(':checked')) {
                if (isRTL) {
                    if (this.classList.contains('optanon-vendor-status')) {
                        this.parentNode.previousSibling.innerText = json.ActiveText;
                    } else {
                        this.previousSibling.innerText = json.ActiveText;
                    }
                } else {
                    this.nextSibling.innerText = json.ActiveText;
                }
            } else {
                if (isRTL) {
                    if (this.classList.contains('optanon-vendor-status')) {
                        this.parentNode.previousSibling.innerText = json.InactiveText;
                    } else {
                        this.previousSibling.innerText = json.InactiveText;
                    }
                } else {
                    this.nextSibling.innerText = json.InactiveText;
                }
            }
        });
        OT(document).on('change', '.optanon-vendor-allow-all-editable #chkVendorListAllowAll', function () {
            if (OT(this).is(':checked')) {
                OT(".optanon-vendor-status-editable .optanon-vendor-status").prop('checked', true);
                OT(".optanon-vendor-status-editable " + (isRTL ? '.toggleChk' : '.vendor-status-label')).text(json.ActiveText);
            } else {
                OT(".optanon-vendor-status-editable .optanon-vendor-status:checked").prop('checked', false);
                OT(".optanon-vendor-status-editable " + (isRTL ? '.toggleChk' : '.vendor-status-label')).text(json.InactiveText);
            }
        });
        OT(document).on('click', '#optanon-vendor-consent-back', function () {
            OT("#optanon-popup-body-left #optanon-menu").show();
            OT("#optanon-popup-body-right .optanon-main-info-text").show();
            OT("#optanon-popup-body-right #optanon-vendor-consent-text").show();
            OT("#optanon-popup-body-right #optanon-popup-more-info-bar").hide();
            OT('#optanon-popup-body-right #optanon-vendor-consent-list').hide();
            OT('#optanon-popup-body-left #optanon-vendor-consent-back').hide();
            OT('#optanon-popup-body-right .optanon-vendor-list-allow-all').hide();

            if (checkIscenterTile()) {
                OT("#optanon-popup-body .optanon-popup-body-content").show();
                OT("#optanon-popup-body #optanon-vendor-consent-text").show();
                OT('#optanon-popup-body #optanon-vendor-consent-back').hide();
                OT('#optanon-popup-body .optanon-vendor-center-tile').hide();
            }
            return false;
        });

        OT('#optanon').on('change', ".optanon-status-checkbox", function () {
            var group = OT(this).data('group') || OT(OT('#optanon #optanon-menu li.menu-item-selected').el[0]).data('group');

            if (OT(this).is(':checked')) {
                toggleGroupStatusOn(json, group, this);

                if (isTopLevelGroup(group)) {
                    toggleAllSubGroupStatusOn(json);
                }

            } else {
                toggleGroupStatusOff(json, group, this);

                if (isTopLevelGroup(group)) {
                    toggleAllSubGroupStatusOff(json);
                }

            }

            setAllowAllButton();
        });
    }


    function toggleAllSubGroupStatusOn(json) {
        OT(".optanon-status-checkbox").each(function (element, idx) {
            if (!OT(element).is(':checked')) {
                OT(element).prop('checked', true);
                var subGroup = OT(element).data('group');
                toggleGroupStatusOn(json, subGroup, element);
            }
        });
    }

    function toggleAllSubGroupStatusOff(json) {
        OT(".optanon-status-checkbox").each(function (element, idx) {
            if (OT(element).is(':checked')) {
                OT(element).prop('checked', false);
                var subGroup = OT(element).data('group');
                toggleGroupStatusOff(json, subGroup, element);
            }
        });
    }


    function getGroupIdForCookie(group) {
        if (group.CustomGroupId) {
            return group.CustomGroupId;
        } else if (group.OptanonGroupId == 0) {
            return '0_' + group.GroupId;
        } else {
            return group.OptanonGroupId;
        }
    }

    function toggleGroupStatusOn(json, group, checkbox) {
        var groupName = safeGroupName(group);

        //Google Analytics event tracking
        Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Toggle On', groupName);

        //updating selected menu item icon colour
        OT('#optanon #optanon-menu li.menu-item-selected').removeClass('menu-item-off');
        OT('#optanon #optanon-menu li.menu-item-selected').addClass('menu-item-on');
        //updating checkbox label colour
        OT(checkbox).parent().addClass('optanon-status-on');
        //updating optanonHtmlGroupData with new group status
        var index = indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) + ':0');
        if (index != -1) {
            optanonHtmlGroupData[index] = getGroupIdForCookie(group) + ':1';

            if (json.IsIABEnabled) {
                setIABConsent(group, "true", true);
            }

        }
        var option = isRTL ? OT(checkbox).prev('.toggleChk') : OT(checkbox).next('label');
        OT(option.el[0]).text(json.ActiveText);

    }

    function toggleGroupStatusOff(json, group, checkbox) {
        var groupName = safeGroupName(group);
        //Google Analytics event tracking
        Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Toggle Off', groupName);

        //updating selected menu item icon colour
        OT('#optanon #optanon-menu li.menu-item-selected ').removeClass('menu-item-on');
        OT('#optanon #optanon-menu li.menu-item-selected').addClass('menu-item-off');
        //updating checkbox label colour
        OT(checkbox).parent().removeClass('optanon-status-on');
        //updating optanonHtmlGroupData with new group status
        var index = indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) + ':1');
        if (index != -1) {
            optanonHtmlGroupData[index] = getGroupIdForCookie(group) + ':0';

            if (json.IsIABEnabled) {
                setIABConsent(group, "false", true);
            }

        }
        var option = isRTL ? OT(checkbox).prev('.toggleChk') : OT(checkbox).next('label');
        if (json.InactiveText) OT(option.el[0]).text(json.InactiveText);

    }

    /**** Center Tile Start */
    function checkIscenterTile() {
        return isCenterTile;
    }


    function insertShowSettingsButtonsHtml() {
        OT('.optanon-show-settings').wrap('<div class="optanon-show-settings-popup-wrapper">').wrap('<div class="optanon-show-settings-button">').wrap('<div class="optanon-show-settings-middle">');
        OT('.optanon-show-settings-middle').before('<div class="optanon-show-settings-left"></div>');
        OT('.optanon-show-settings-middle').after('<div class="optanon-show-settings-right"></div>');
        OT('.optanon-show-settings').addClass('optanon-toggle-display');
    }

    function initialiseShowSettingsButtonsHandlers() {
        OT('.optanon-show-settings-button').on('click', function () {
            Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Privacy Settings Click');
        });
    }


    function insertAlertHtml() {
        var json = optanonData(),
            bannerHtml = '<div class="optanon-alert-box-wrapper  " role="alertdialog" ' + 'aria-labelledby="alert-box-title" aria-describedby="alert-box-message" style="display:none">' + '<div class="optanon-alert-box-bottom-top">';
        if (json.showBannerCloseButton) {
            if (!json.BannerCloseButtonText) {
                json.BannerCloseButtonText = "Close";
            }
            bannerHtml = bannerHtml + '<div class="optanon-alert-box-corner-close">' + '<button class="optanon-alert-box-close banner-close-button" aria-label="' + json.BannerCloseButtonText + '" title="' + json.BannerCloseButtonText + '" ' + 'onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"></button></div>';
        }
        bannerHtml = bannerHtml + '</div>' + '<div class="optanon-alert-box-bg">' + '<div class="optanon-alert-box-logo"> </div>' + '<div class="optanon-alert-box-body">';

        bannerHtml = bannerHtml + '<p class="optanon-alert-box-title legacy-banner-title' + (json.BannerTitle ? '' : ' sr-only') + '" id="alert-box-title" role="heading" aria-level="2">' + (json.BannerTitle ? json.BannerTitle : 'Cookie Notice') + '</p>';

        bannerHtml = bannerHtml + '<p class="banner-content" id="alert-box-message">' + json.AlertNoticeText + '</p>' + '</div><div class="optanon-clearfix"></div>' + '<div class="optanon-alert-box-button-container">' + '<div class="optanon-alert-box-button optanon-button-close"><div class="optanon-alert-box-button-middle">' + '<button class="optanon-alert-box-close" aria-label="' + json.AlertCloseText + '">' + json.AlertCloseText + '</button></div></div>';
        // Accept all cookies button
        if (bannerHtml.indexOf("hide-accept-button") <= 0) {
            bannerHtml = bannerHtml + '<div class="optanon-alert-box-button optanon-button-allow"><div class="optanon-alert-box-button-middle accept-cookie-container">' + '<button class="optanon-allow-all accept-cookies-button" title="' + json.AlertAllowCookiesText + '" aria-label="' + json.AlertAllowCookiesText + '" ' + 'onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Accept Cookies\');">' + json.AlertAllowCookiesText + '</button></div></div>';
        }
        // Cookie setting button
        if (bannerHtml.indexOf("hide-cookie-setting-button") <= 0) {
            bannerHtml = bannerHtml + '<div class="optanon-alert-box-button optanon-button-more"><div class="optanon-alert-box-button-middle">' + '<button class="optanon-toggle-display cookie-settings-button" title="' + json.AlertMoreInfoText + '" aria-label="' + json.AlertMoreInfoText + '" ' + 'onClick="Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');">' + json.AlertMoreInfoText + '</button></div></div>';
        }
        bannerHtml = bannerHtml + '</div><div class="optanon-clearfix optanon-alert-box-bottom-padding"></div></div></div>';
        OT('#optanon').before(bannerHtml);
        setBannerTabIndex();
    }

    function setBannerPosition() {
        OT('.optanon-alert-box-wrapper').show().animate({ 'top': '0px' }, 1000);
        return;
    }



    function closeBannerHandler(impliedClose, closeOnLoad) {
        var json = optanonData();

        if (json.CloseShouldAcceptAllCookies == true) {
            Optanon.AllowAll();
        }

        if (json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT) {
            if (impliedClose && closeOnLoad) {
                Optanon.Close(true);
            } else {
                Optanon.Close(false);
                OT('.optanon-alert-box-wrapper').fadeOut(200);
                OT("#optanon-popup-bg").hide();
            }
        } else {
            OT('.optanon-alert-box-wrapper').fadeOut(200);
            OT("#optanon-popup-bg").hide();
        }
        Optanon.SetAlertBoxClosed(true);
        return false;
    }

    function initialiseAlertHandlers() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var json = optanonData();

            if (checkIscenterTile()) {
                setBannerPositionForCenterTile();
            } else {
                setBannerPosition();
            }

            if (json.ForceConsent) {
                if (!isCookiePolicyPage(json.AlertNoticeText)) {
                    OT("#optanon-popup-bg").css('z-index:7000').show();
                }
            }

            //Click handler for close buttons
            if (OT('.optanon-alert-box-close').length > 0) {
                OT('.optanon-alert-box-close').on('click', function () {
                    closeBannerHandler();
                });
            }


            // On Click Accepts All
            if (json.OnClickAcceptAllCookies && !isCenterTile) {
                var body = document.querySelector('body').children;

                for (var i = 0; i < body.length; i++) {
                    // Listen for clicks anywhere on the DOM execept Cookie banner && Optanon Id
                    if (!body[i].classList.contains('optanon-alert-box-wrapper') && body[i].id !== 'optanon' && !body[i].classList.contains('optanon-show-settings')) {
                        body[i].addEventListener('click', clickAcceptsAllEvent);
                    }
                }

                document.querySelector('.optanon-alert-box-close').addEventListener('click', bannerClosed);
                document.querySelector('.optanon-allow-all-button').addEventListener('click', bannerClosed);
                document.querySelector('.optanon-save-settings-button').addEventListener('click', bannerClosed);
                document.querySelector('.optanon-button-allow').addEventListener('click', bannerClosed);
            } // On Click Accepts All END

            // On Scroll Accepts All
            if (json.ScrollAcceptsAllCookiesAndClosesBanner && !isCenterTile) {
                window.addEventListener('scroll', scrollAcceptsAllEvent);

                document.querySelector('.optanon-alert-box-close').addEventListener('click', rmScrollEventListener);
                document.querySelector('.optanon-allow-all-button').addEventListener('click', rmScrollEventListener);
                document.querySelector('.optanon-save-settings-button').addEventListener('click', rmScrollEventListener);
                document.querySelector('.optanon-button-allow').addEventListener('click', rmScrollEventListener);
            } // On Scroll Accepts All END
        }
    }


    function clickAcceptsAllEvent(e) {
        var body = document.querySelector('body').children;
        Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Auto Close');
        Optanon.AllowAll();
        OT('.optanon-alert-box-wrapper').fadeOut(400);
        Optanon.SetAlertBoxClosed(true);
        for (var y = 0; y < body.length; y++) {
            rmClickEventListener(body[y]);
        }
        e.stopPropagation();
    }

    function scrollAcceptsAllEvent() {
        var scroll = this.pageYOffset,
            alertBox = document.getElementById('optanon-popup-wrapper'),
            alertBoxOpen = !!(alertBox.offsetWidth && alertBox.offsetHeight);

        if (scroll > 200 && !alertBoxOpen) {
            Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Auto Close');
            Optanon.AllowAll();
            OT('.optanon-alert-box-wrapper').fadeOut(400);
            Optanon.SetAlertBoxClosed(true);
            rmScrollEventListener();
        }
    }

    function rmScrollEventListener() {
        window.removeEventListener('scroll', scrollAcceptsAllEvent);
    }

    // User Closed Banner, Click Accepts All
    function bannerClosed() {
        var body = document.querySelector('body').children;
        for (var y = 0; y < body.length; y++) {
            rmClickEventListener(body[y]);
        }
        rmScrollEventListener();
    }

    // Remove Event Listener
    function rmClickEventListener(el) {
        el.removeEventListener('click', clickAcceptsAllEvent);
    }

    function insertCookiePolicyHtml() {
        var group = void 0,
            cookie = void 0,
            i = void 0,
            j = void 0,
            k = void 0,
            l = void 0,
            subGroupCookie = void 0,
            json = optanonData(),
            groupHtml = void 0,
            subGroups = void 0,
            subgroupTableHtml = void 0,
            subgroupHtml = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            group = json.Groups[i];
            if (isTopLevelGroup(group) && isValidConsentNoticeGroup(group)) {
                //Insert group html
                groupHtml = OT('<div class="optanon-cookie-policy-group">' + '<h2 class="optanon-cookie-policy-group-name">' + safeGroupName(group) + '</h2>' + '<p class="optanon-cookie-policy-group-description">' + safeFormattedGroupDescription(group) + '</p>' + '</div>', 'ce').el;

                if (group.Cookies.length > 0) {
                    //Insert group cookies html
                    var domEl1 = void 0,
                        domEl2 = void 0,
                        browerType = OneTrust.browser().type.toLowerCase(),
                        browerVersion = OneTrust.browser().version;

                    if (browerVersion < 10 && browerType === 'safari' || browerType === 'chrome' && browerVersion <= 44 || browerVersion <= 40 && browerType === 'firefox') {
                        var tmp = document.implementation.createHTMLDocument(),
                            tmp2 = document.implementation.createHTMLDocument();

                        tmp.body.innerHTML = '<p class="optanon-cookie-policy-cookies-used">' + json.CookiesUsedText + '</p>';
                        domEl1 = tmp.body.children[0];

                        tmp2.body.innerHTML = '<ul class="optanon-cookie-policy-group-cookies-list"></ul>';
                        domEl2 = tmp.body.children[0];
                    } else {
                        var documentFragment1 = document.createRange().createContextualFragment('<p class="optanon-cookie-policy-cookies-used">' + json.CookiesUsedText + '</p>'),
                            documentFragment2 = document.createRange().createContextualFragment('<ul class="optanon-cookie-policy-group-cookies-list"></ul>');
                        domEl1 = documentFragment1.firstChild;
                        domEl2 = documentFragment2.firstChild;
                    }

                    OT(groupHtml).append(domEl1);
                    OT(groupHtml).append(domEl2);

                    for (k = 0; k < group.Cookies.length; k += 1) {
                        cookie = group.Cookies[k];
                        var cookiepediaLabel = getCookieLabel(cookie);
                        OT(groupHtml).find('.optanon-cookie-policy-group-cookies-list').append((isRTL ? '<li class="keep-ltr">' : '<li>') + '<div>' + cookiepediaLabel + '</div></li>');
                    }
                }

                subGroups = getGroupSubGroups(group);
                if (subGroups.length > 0) {
                    if (!json.CookiesText) {
                        json.CookiesText = "Cookies";
                    }
                    if (!json.CategoriesText) {
                        json.CategoriesText = "Categories";
                    }
                    if (!json.LifespanText) {
                        json.LifespanText = "Lifespan";
                    }
                    if (!json.LifespanTypeText) {
                        json.LifespanTypeText = "Session";
                    }
                    if (!json.LifespanDurationText) {
                        json.LifespanDurationText = "days";
                    }

                    //Insert sub group html
                    subgroupTableHtml = OT('<table class="optanon-cookie-policy-subgroup-table"></table>', 'ce').el;
                    var domEl3 = document.createElement('tr');

                    OT(subgroupTableHtml).append(domEl3);

                    var lifespanHtml = '';
                    if (json.IsLifespanEnabled) {
                        lifespanHtml = '&nbsp;(' + json.LifespanText + ')';
                    }

                    OT(subgroupTableHtml).find('tr').append('<th class="optanon-cookie-policy-left"><p class="optanon-cookie-policy-subgroup-table-column-header">' + json.CategoriesText + '</p></th>');
                    OT(subgroupTableHtml).find('tr').append('<th class="optanon-cookie-policy-right"><p class="optanon-cookie-policy-subgroup-table-column-header">' + json.CookiesText + lifespanHtml + '</p></th>');

                    for (j = 0; j < subGroups.length; j += 1) {
                        var groupLabel = getSubGroupLabel(subGroups[j]);

                        subgroupHtml = document.createElement('tr');
                        subgroupHtml.classList.add('optanon-cookie-policy-subgroup');

                        var domEl4 = document.createElement('td');
                        domEl4.classList.add('optanon-cookie-policy-left');
                        domEl4.innerHTML = '<p class="optanon-cookie-policy-subgroup-name">' + groupLabel + '</p>' + '<p class="optanon-cookie-policy-subgroup-description">' + safeFormattedGroupDescription(subGroups[j]) + '</p>';

                        var domEl5 = document.createElement('td');
                        domEl5.classList.add('optanon-cookie-policy-right');

                        if (json.IsLifespanEnabled) {
                            for (l = 0; l < subGroups[j].Cookies.length; l += 1) {
                                subGroupCookie = subGroups[j].Cookies[l];
                                var lifespan = '';
                                if (subGroupCookie.IsSession) {
                                    lifespan = json.LifespanTypeText;
                                } else if (subGroupCookie.Length === 0) {
                                    lifespan = '< 1 ' + json.LifespanDurationText;
                                } else {
                                    lifespan = subGroupCookie.Length + ' ' + json.LifespanDurationText;
                                }
                                //Insert sub group cookies html
                                domEl5.innerHTML = '<ul class="optanon-cookie-policy-subgroup-cookies-list">' + (isRTL ? '<li class="keep-ltr">' : '<li>') + subGroupCookie.Name + '&nbsp;(' + lifespan + ')</li>' + '</ul>';
                            }
                        } else {
                            for (l = 0; l < subGroups[j].Cookies.length; l += 1) {
                                subGroupCookie = subGroups[j].Cookies[l];
                                //Insert sub group cookies html
                                domEl5.innerHTML = '<ul class="optanon-cookie-policy-subgroup-cookies-list">' + (isRTL ? '<li class="keep-ltr">' : '<li>') + subGroupCookie.Name + '</li>' + '</ul>';
                            }
                        }
                        OT(subgroupHtml).append(domEl4);
                        OT(subgroupHtml).append(domEl5);

                        OT(subgroupTableHtml).append(subgroupHtml);
                    }

                    OT(groupHtml).append(subgroupTableHtml);
                }

                OT('#optanon-cookie-policy').append(groupHtml);

                //Setting subgroup columns to be same height for vertical border to extend all the way down
                setCookiePolicyHtmlSubGroupHeights();
            }
        }

        //Resetting cookie policy subgroup columns to be the same height on window resize
        OT(window).on('resize', function () {
            setCookiePolicyHtmlSubGroupHeights();
        });
    }

    function getGroupCookiesHtml(group) {
        var json = optanonData(),
            groupHtml = OT('<div class="optanon-cookie-list"></div>', 'ce').el,
            j = void 0,
            k = void 0,
            l = void 0,
            subGroups = getGroupSubGroups(group),
            cookie = void 0,
            subGroupCookie = void 0,
            $group = void 0,
            $subgroup = void 0;

        if (group.Cookies && group.Cookies.length > 0 || subGroups && subGroups.length > 0) {
            OT(groupHtml).append('<h4 class="optanon-cookies-used">' + json.CookiesUsedText + '</h4>');
        }

        if (group.Cookies && group.Cookies.length > 0) {
            //Insert group cookies html
            $group = OT('<p class="optanon-group-cookies-list"></p>', 'ce').el;

            for (var _k = 0; _k < group.Cookies.length; _k++) {
                cookie = group.Cookies[_k];
                var cookiepediaLabel = getCookieLabel(cookie);
                OT($group).append(cookiepediaLabel);
                OT($group).append(_k < group.Cookies.length - 1 ? ', ' : '');
            }
            OT(groupHtml).append($group);
        }

        if (subGroups && subGroups.length > 0) {
            for (j = 0; j < subGroups.length; j += 1) {
                $subgroup = OT('<p class="optanon-subgroup-cookies-list ' + (!optanonShowSubGroupCookies ? 'subgroup-cookies-list' : '') + '"></p>', 'ce').el;

                var groupLabel = getSubGroupLabel(subGroups[j]),
                    description = safeFormattedGroupDescription(subGroups[j]),
                    headerSeparator = optanonShowSubGroupCookies || optanonShowSubGroupDescription && description ? ":" : "";

                OT($subgroup).append('<span class="optanon-subgroup-header">' + groupLabel + headerSeparator + ' </span>');

                if (safeGroupDefaultStatus(subGroups[j].Parent).toLowerCase() != 'always active') {
                    var subgroupToggle = getSubgroupToggle(json, subGroups[j]);
                    OT($subgroup).append(subgroupToggle);
                }

                var $subgroupCookies = OT('<div class="optanon-subgroup-cookies"></div>', 'ce').el;
                if (optanonShowSubGroupCookies) {
                    for (var _l = 0; _l < subGroups[j].Cookies.length; _l++) {
                        subGroupCookie = subGroups[j].Cookies[_l];
                        OT($subgroupCookies).append(subGroupCookie.Name + (_l < subGroups[j].Cookies.length - 1 ? ', ' : ''));
                    }
                }
                OT($subgroup).append($subgroupCookies);

                if (optanonShowSubGroupDescription && description) {
                    OT($subgroup).append('<div class="optanon-subgroup-description">' + description + '</div>');
                }

                OT(groupHtml).append($subgroup);
            }
        }
        return groupHtml;
    }

    function safeFormattedGroupDescription(group) {
        if (!group || !group.GroupLanguagePropertiesSets || !group.GroupLanguagePropertiesSets[0] || !group.GroupLanguagePropertiesSets[0].GroupDescription || !group.GroupLanguagePropertiesSets[0].GroupDescription.Text) {
            return "";
        }
        return group.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, '<br>');
    }

    function safeGroupName(group) {
        var hasName = group && group.GroupLanguagePropertiesSets && group.GroupLanguagePropertiesSets[0] && group.GroupLanguagePropertiesSets[0].GroupName;
        if (!hasName) {
            return "";
        }
        return group.GroupLanguagePropertiesSets[0].GroupName.Text;
    }

    function safeGroupDefaultStatus(group) {
        var json = optanonData(),
            hasDefaultStatus = group && group.GroupLanguagePropertiesSets && group.GroupLanguagePropertiesSets[0] && group.GroupLanguagePropertiesSets[0].DefaultStatus;
        if (!hasDefaultStatus) {
            return "";
        }
        if (optanonDoNotTrackEnabled && json.IsDntEnabled && group.GroupLanguagePropertiesSets[0].IsDntEnabled) {
            return doNotTrackText;
        }
        return group.GroupLanguagePropertiesSets[0].DefaultStatus.Text;
    }

    function getSubGroupLabel(group) {
        if (!group) return "";
        var groupLabel = safeGroupName(group);


        var cookie = group.Cookies[0];
        if (!cookie) return groupLabel;

        // third party cookie linked by host of the first cookie
        groupLabel = '<a href="http://cookiepedia.co.uk/host/' + cookie.Host + '" target="_blank" style="text-decoration: underline;">' + groupLabel + '</a>';


        return groupLabel;
    }

    function getCookieLabel(cookie) {
        if (!cookie) return "";

        var cookieLabel = cookie.Name;

        // first party cookie linked by name
        cookieLabel = '<a href="http://cookiepedia.co.uk/cookies/' + cookie.Name + '" target="_blank" style="text-decoration: underline;">' + cookie.Name + '</a>';

        return cookieLabel;
    }

    //Setting cookie policy subgroup columns to be the same height
    function setCookiePolicyHtmlSubGroupHeights() {
        OT('#optanon-cookie-policy .optanon-cookie-policy-subgroup').each(function (element) {
            OT(element.querySelector('.optanon-cookie-policy-left')).height('auto');
            OT(element.querySelector('.optanon-cookie-policy-right')).height('auto');

            if (OT(element.querySelector('.optanon-cookie-policy-left')).height() >= OT(element.querySelector('.optanon-cookie-policy-right')).height()) {
                OT(element.querySelector('.optanon-cookie-policy-right')).height(OT(element.querySelector('.optanon-cookie-policy-left')).height());
            } else {
                OT(element.querySelector('.optanon-cookie-policy-left')).height(OT(element.querySelector('.optanon-cookie-policy-right')).height());
            }
        });
    }

    function showConsentNotice() {
        if (checkIscenterTile()) {
            // hiding banner modal
            OT('.optanon-alert-box-wrapper').hide();
        }
        if (OT("#optanon #optanon-menu li").length >= 1) {
            OT("#optanon #optanon-menu li").removeClass('menu-item-selected');
        }
        OT("#optanon #optanon-menu li").each(function (element) {
            if (OT(element).text() == optanonAboutCookiesGroupName) {
                OT(element).trigger('click');
            }
        });

        setAllowAllButton();

        // Center consent notice on screen
        var $notice = OT('#optanon-popup-wrapper').el,
            width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        OT($notice).css("margin-top: 10px");

        if (width < 720) {
            OT($notice).css("top: 10px");
        } else if (OT($notice).outerHeight() > height) {
            OT($notice).css("top:" + Math.max(0, (height - OT($notice).outerHeight()) / 2 + OT(window).scrollTop()) + "px");
        } else {
            OT($notice).css("top:" + Math.max(0, (height - OT($notice).outerHeight()) / 2) + "px");
        }

        // Select pop up elements and attach animation class
        var bg = document.querySelector('#optanon #optanon-popup-bg');
        var wrapper = document.querySelector('#optanon #optanon-popup-wrapper');
        bg.classList.add('fade-in');
        wrapper.classList.add('fade-in');

        // Toggle element display attribute to replace jQuery.hide()
        bg.style.display = 'block';
        wrapper.style.display = 'block';

        $notice[0].focus();
    }

    function hideConsentNotice(caller) {
        if (checkIscenterTile()) {
            // showing banner modal
            OT('.optanon-alert-box-wrapper').show();
            if (caller === constant.KEEPCENTERTILEBANNEROPEN) {
                OT('#optanon #optanon-popup-wrapper').fadeOut(400);
            } else {
                OT('#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper').fadeOut(400);
            }
        } else {
            OT('#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper').fadeOut(400);
        }
    }

    function checkIsActiveByDefault(group) {
        if (!safeGroupDefaultStatus(group)) {
            return true;
        } else {
            var groupStatus = safeGroupDefaultStatus(group).toLowerCase();
            if (group.Parent) {
                groupStatus = safeGroupDefaultStatus(group.Parent).toLowerCase();
            }
            return groupStatus == 'always active' || groupStatus == 'active' || groupStatus == doNotTrackText && !optanonDoNotTrackEnabled;
        }
    }

    function ensureHtmlGroupDataInitialised() {
        var group = void 0,
            json = optanonData(),
            i = void 0;

        if (!readCookieParam(optanonCookieName, 'groups')) {
            //Populate optanonHtmlGroupData from json
            optanonHtmlGroupData = [];
            optanonHtmlGroupDataTemp = [];
            for (i = 0; i < json.Groups.length; i += 1) {
                group = json.Groups[i];
                if (isValidConsentNoticeGroup(group)) {
                    //Group should show in popup
                    if (checkIsActiveByDefault(group) || json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT) {
                        //Group is active
                        optanonHtmlGroupData.push(getGroupIdForCookie(group) + ':1');

                        if (json.IsIABEnabled && checkIsActiveByDefault(group)) {
                            setIABConsent(group, "true");
                        } else {
                            setIABConsent(group, "false");
                        }

                    } else {
                        //Group is inactive
                        optanonHtmlGroupData.push(getGroupIdForCookie(group) + ':0');

                        if (json.IsIABEnabled) {
                            setIABConsent(group, "false");
                        }

                    }

                    if (checkIsActiveByDefault(group)) {
                        //Group is active
                        optanonHtmlGroupDataTemp.push(getGroupIdForCookie(group) + ':1');
                    } else {
                        //Group is inactive
                        optanonHtmlGroupDataTemp.push(getGroupIdForCookie(group) + ':0');
                    }
                }
            }

            optanonEnsureCookieDataCompatibilityComplete = true;
        } else {
            firstTimebannerLoad = false;
            //Populate optanonHtmlGroupData from cookie
            ensureCookieDataCompatibility();
            synchroniseCookieGroupData();
            optanonHtmlGroupData = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups'));
            optanonHtmlGroupDataTemp = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups'));

            if (optanonHtmlGroupData && json.IsIABEnabled) {
                assignIABConsentFromHtmlGroupData(optanonHtmlGroupData, true);
            }

        }

        initializeIABData();

    }



    function getGroupById(groupId) {
        var json = optanonData(),
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            if (getGroupIdForCookie(json.Groups[i]) == groupId) {
                return json.Groups[i];
            }
        }
    }


    function assignIABConsentFromHtmlGroupData(optanonHtmlGroupData, init) {
        var group = {};
        for (var index = 0; index < optanonHtmlGroupData.length; index++) {
            if (optanonHtmlGroupData[index].indexOf('_') === -1) {
                var groupData = optanonHtmlGroupData[index].split(':');
                group = getGroupById(groupData[0]);
                if (groupData[1] == "1") {
                    setIABConsent(group, "true");
                } else {
                    setIABConsent(group, "false");
                }
            }
        }
    }

    function setIABConsent(group, isActive, replace) {
        if (isTopLevelGroup(group)) {
            if (group.Purposes && group.Purposes.length > 0) {
                for (var index = 0; index < group.Purposes.length; index++) {
                    if (replace) {
                        var isExist = indexOf(oneTrustIABConsent.purpose, group.Purposes[index].purposes.purposeId + ":" + !(isActive == "true"));
                        if (isExist != -1) {
                            oneTrustIABConsent.purpose[isExist] = group.Purposes[index].purposes.purposeId + ":" + isActive;
                        }
                    } else {
                        var _isExist = indexOf(oneTrustIABConsent.purpose, group.Purposes[index].purposes.purposeId + ":" + isActive);
                        if (_isExist == -1) {
                            oneTrustIABConsent.purpose.push(group.Purposes[index].purposes.purposeId + ":" + isActive);
                        }
                    }
                }
            }
        }
    }

    function setIABVendor() {
        var i = void 0,
            jsonIABData = IABData();
        if (jsonIABData && jsonIABData.activeVendors && jsonIABData.activeVendors.length > 0) {
            for (i = 0; i < jsonIABData.activeVendors.length; i++) {
                oneTrustIABConsent.vendors.push(jsonIABData.activeVendors[i].vendorId.toString() + ":true");
            }
        }
    }


    //If cookie exists, ensures to add any new groups and remove any redundant groups to data
    function synchroniseCookieGroupData() {
        var toUpdateCookie = false,
            cookieGroupData = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups')),
            cookieGroupDataStripped = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups').replace(/:0/g, '').replace(/:1/g, '')),
            json = optanonData(),
            group = void 0,
            i = void 0,
            j = void 0,
            index = void 0,
            foundMatchingJsonGroup = void 0;

        if (readCookieParam(optanonCookieName, 'groups')) {
            //Adding missing groups to cookie
            for (i = 0; i < json.Groups.length; i += 1) {
                group = json.Groups[i];
                if (isValidConsentNoticeGroup(group)) {
                    //Group should show in popup
                    index = indexOf(cookieGroupDataStripped, getGroupIdForCookie(group));
                    if (index == -1) {
                        //Json group does not exist in cookie
                        toUpdateCookie = true;

                        if (checkIsActiveByDefault(group)) {
                            //Group is active
                            cookieGroupData.push(getGroupIdForCookie(group) + ':1');
                        } else {
                            //Group is inactive
                            cookieGroupData.push(getGroupIdForCookie(group) + ':0');
                        }
                    }
                }
            }

            //Removing redundant groups from cookie
            for (i = cookieGroupData.length - 1; i >= 0; i -= 1) {
                foundMatchingJsonGroup = false;
                for (j = 0; j < json.Groups.length; j += 1) {
                    group = json.Groups[j];
                    if (isValidConsentNoticeGroup(group)) {
                        if (getGroupIdForCookie(group) == cookieGroupData[i].replace(/:0/g, '').replace(/:1/g, '')) {
                            foundMatchingJsonGroup = true;
                            break;
                        }
                    }
                }

                if (!foundMatchingJsonGroup) {
                    //Cookie group does not exist in json
                    toUpdateCookie = true;
                    cookieGroupData.splice(i, 1);
                }
            }

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }
        }
    }

    // Returns true if all json default group statuses are set to inactive (excluding 'always active' groups)
    function getIsOptInMode() {
        var isOptIn = true,
            group = void 0,
            json = optanonData(),
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            group = json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                //TODO: confirm if should consider DNT here
                if (!safeGroupDefaultStatus(group) || safeGroupDefaultStatus(group) && (safeGroupDefaultStatus(group).toLowerCase() == 'active' || safeGroupDefaultStatus(group).toLowerCase() == 'inactive landingpage' || safeGroupDefaultStatus(group).toLowerCase() == doNotTrackText)) {
                    isOptIn = false;
                    break;
                }
            }
        }

        return isOptIn;
    }

    // Returns true if all json default group statuses are set to inactive landingpage (excluding 'always active' groups)
    function getIsSoftOptInMode() {
        var isSoftOptIn = true,
            group = void 0,
            json = optanonData(),
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            group = json.Groups[i];
            if (!isValidConsentNoticeGroup(group)) continue;

            var statusText = safeGroupDefaultStatus(group).toLowerCase();
            if (statusText !== 'inactive landingpage' && statusText !== 'always active') {
                isSoftOptIn = false;
                break;
            }
        }

        return isSoftOptIn;
    }

    // Ensure cookie data is compatible with latest version
    function ensureCookieDataCompatibility() {
        var toUpdateCookie = false;

        if (readCookieParam(optanonCookieName, 'groups') && !optanonEnsureCookieDataCompatibilityComplete) {

            //Add functionality here to update cookie data

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }

            optanonEnsureCookieDataCompatibilityComplete = true;
        }
    }

    function writeCookieGroupsParam(cookieName, groupData) {
        if (groupData) {
            writeCookieParam(cookieName, 'groups', serialiseArrayToString(groupData));
        } else {
            writeCookieParam(cookieName, 'groups', serialiseArrayToString(optanonHtmlGroupData));
        }
    }

    function updateCookieParam(cookieName, paramName, paramValue) {
        var data = {},
            cookie = getCookie(cookieName),
            i = void 0,
            values = void 0,
            pair = void 0,
            value = void 0,
            updatedValues = void 0,
            updatedCookie = void 0,
            needToUpdateCookie = false;

        values = cookie.split('&');
        values.forEach(function (param) {
            // Update Selected Param
            if (param.includes(paramName)) {
                if (param.split('=')[1] !== paramValue.toString()) {
                    needToUpdateCookie = true;
                    updatedCookie = cookie.replace(param, paramName + '=' + paramValue);
                }
            }
        });

        if (needToUpdateCookie) {
            updatedValues = updatedCookie.split('&');

            if (updatedCookie) {
                for (i = 0; i < updatedValues.length; i += 1) {
                    pair = updatedValues[i].split('=');
                    data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
                }
            }
            data.datestamp = new Date().toString();
            data.version = optanonVersion;
            value = param(data);
            setCookie(cookieName, value, 365);
        }
    }

    function writeCookieParam(cookieName, paramName, paramValue) {
        var data = {},
            cookie = getCookie(cookieName),
            i = void 0,
            values = void 0,
            pair = void 0,
            value = void 0,
            json = optanonData();

        if (cookie) {
            values = cookie.split('&');
            for (i = 0; i < values.length; i += 1) {
                pair = values[i].split('=');
                data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
            }
        }
        data[paramName] = paramValue;
        data.datestamp = new Date().toString();
        data.version = optanonVersion;
        value = param(data);
        setCookie(cookieName, value, 365);

        if (cookieName === optanonCookieName && json.IsIABEnabled) {
            if (oneTrustIABConsent && oneTrustIABConsent.purpose && oneTrustIABConsent.vendors) {
                IABCookieValue = getIABConsentData();
                setCookie(oneTrustIABCookieName, IABCookieValue, 30);
                if (json.IsIabThirdPartyCookieEnabled && IAB3rdPartyCookieValue) {
                    setIAB3rdPartyCookie(oneTrustIAB3rdPartyCookie, IABCookieValue, 30, false);
                }
            }
        }

    }

    function readCookieParam(cookieName, paramName) {
        var cookie = getCookie(cookieName),
            i = void 0,
            data = void 0,
            values = void 0,
            pair = void 0;

        if (cookie) {
            data = {};
            values = cookie.split('&');
            for (i = 0; i < values.length; i += 1) {
                pair = values[i].split('=');
                data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
            }
            if (paramName && data[paramName]) {
                //Found cookie value for valid param
                return data[paramName];
            }
            if (paramName && !data[paramName]) {
                //Found no cookie value for valid param
                return "";
            }
            //Invalid param, returns entire cookie
            return data;
        }
        return "";
    }

    function setCookie(name, value, days) {
        var expires = void 0,
            date = void 0;

        if (!optanonPreview) {
            if (days) {
                date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toGMTString();
            } else {
                expires = '';
            }

            var domainAndPath = optanonCookieDomain.split('/');
            if (domainAndPath.length <= 1) {
                domainAndPath[1] = '';
            }

            document.cookie = name + '=' + value + expires + '; path=/' + domainAndPath[1] + '; domain=.' + domainAndPath[0];
        }
    }

    function getCookie(name) {
        var nameEq = name + '=',
            ca = document.cookie.split(';'),
            i = void 0,
            c = void 0;

        if (!optanonPreview) {
            for (i = 0; i < ca.length; i += 1) {
                c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEq) == 0) {
                    return c.substring(nameEq.length, c.length);
                }
            }
        }
        return null;
    }

    function setIAB3rdPartyCookie(name, value, days, isFirstRequest) {
        var IABUrl = "cookies-dev.onetrust.mgr.consensu.org",
            thirdPartyCookie = void 0,
            firstPartyCookie = void 0,
            allPurposes = void 0,
            allVendors = void 0;

        if (IABUrl && document.body) {

            if (!isFirstRequest && !isInitIABCookieData()) {
                var IABDataValue = IABData();
                thirdPartyCookie = new consentString.ConsentString(IAB3rdPartyCookieValue);
                firstPartyCookie = new consentString.ConsentString(value);
                allPurposes = getIdArray(oneTrustIABConsent.purpose);
                allVendors = IABDataValue.activeVendors.map(function (vendor) {
                    return vendor.vendorId;
                });
                thirdPartyCookie.allowedPurposeIds = thirdPartyCookie.allowedPurposeIds.filter(function (el) {
                    return allPurposes.indexOf(el) < 0;
                });
                thirdPartyCookie.allowedVendorIds = thirdPartyCookie.allowedVendorIds.filter(function (el) {
                    return allVendors.indexOf(el) < 0;
                });

                allPurposes = thirdPartyCookie.allowedPurposeIds.concat(firstPartyCookie.allowedPurposeIds);
                allVendors = thirdPartyCookie.allowedVendorIds.concat(firstPartyCookie.allowedVendorIds);
                IAB3rdPartyCookieValue = value = getIABConsentData(allPurposes, allVendors);
            }
            var url = window.location.protocol + "//" + IABUrl + "/?name=" + name + "&value=" + value + "&expire=" + days + "&isFirstRequest=" + isFirstRequest;
            if (document.getElementById('onetrustIabCookie')) {
                document.getElementById('onetrustIabCookie').contentWindow.location.replace(url);
            } else {
                var i = document.createElement('iframe');
                i.style.display = 'none';
                i.id = "onetrustIabCookie";
                i.src = url;
                document.body.appendChild(i);
            }
        }
    }

    function canInsertForGroup(groupId, ignoreGroupCheck) {
        var validGroup = groupId != null && typeof groupId != 'undefined',
            isExistingActiveGroup = void 0,
            isNonExistingGroup = void 0;

        if (!optanonPreview) {
            if (!ignoreGroupCheck) {
                ensureHtmlGroupDataInitialised();
                isExistingActiveGroup = contains(optanonHtmlGroupData, groupId + ':1');
                isNonExistingGroup = !doesGroupExist(groupId);
                if (validGroup && (isExistingActiveGroup && canSoftOptInInsertForGroup(groupId) || isNonExistingGroup)) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return true;
    }

    // Returns true if group is not soft opt-in or if group is soft opt-in and landing page was left (i.e. after user interaction)
    function canSoftOptInInsertForGroup(groupId) {
        var group = getGroupById(groupId),
            isSoftOptInGroup = void 0;

        isSoftOptInGroup = safeGroupDefaultStatus(group).toLowerCase() == 'inactive landingpage';
        if (!isSoftOptInGroup) {
            return true;
        }
        var landingPath = readCookieParam(optanonCookieName, 'landingPath');
        if (!landingPath || landingPath === location.href) {
            return false;
        }
        return true;
    }

    // Returns true if group id exist in json
    function doesGroupExist(groupId) {
        var json = optanonData(),
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            if (json.Groups[i].CustomGroupId) {
                if (json.Groups[i].CustomGroupId == groupId) {
                    return true;
                }
            } else if (json.Groups[i].OptanonGroupId == groupId) {
                return true;
            }
        }
        return false;
    }

    //Returns comma delimited string from array
    function serialiseArrayToString(cookieGroupsArray) {
        return cookieGroupsArray.toString().toLowerCase();
    }

    //Returns array from comma delimited string
    function deserialiseStringToArray(cookieGroupsString) {
        if (!cookieGroupsString) return [];
        return cookieGroupsString.toLowerCase().split(',');
    }

    function executeCustomScript() {
        var json = optanonData();
        if (json.CustomJs) {
            new Function(json.CustomJs)();
        }
    }

    function executeOptanonWrapper() {
        var i = void 0;
        executeCustomScript();
        if (typeof OptanonWrapper == 'function') {
            if (OptanonWrapper != 'undefined') {
                OptanonWrapper();

                //Adding Optanon Group Id to optanonWrapperScriptExecutedGroups
                for (i = 0; i < optanonWrapperScriptExecutedGroupsTemp.length; i += 1) {
                    if (!contains(optanonWrapperScriptExecutedGroups, optanonWrapperScriptExecutedGroupsTemp[i])) {
                        optanonWrapperScriptExecutedGroups.push(optanonWrapperScriptExecutedGroupsTemp[i]);
                    }
                }
                optanonWrapperScriptExecutedGroupsTemp = [];

                //Adding Optanon Group Id to optanonWrapperHtmlExecutedGroups
                for (i = 0; i < optanonWrapperHtmlExecutedGroupsTemp.length; i += 1) {
                    if (!contains(optanonWrapperHtmlExecutedGroups, optanonWrapperHtmlExecutedGroupsTemp[i])) {
                        optanonWrapperHtmlExecutedGroups.push(optanonWrapperHtmlExecutedGroupsTemp[i]);
                    }
                }
                optanonWrapperHtmlExecutedGroupsTemp = [];
            }
        }
    }

    function jsonAddAboutCookies(json) {
        json.Groups.unshift({ 'GroupLanguagePropertiesSets': [{ 'GroupName': { 'Text': optanonAboutCookiesGroupName }, 'GroupDescription': { 'Text': json.MainInfoText } }] });
    }

    /* JS Helper functions start*/
    function empty(id) {
        var elem = document.getElementById(id);

        if (elem) {
            while (elem.hasChildNodes()) {
                elem.removeChild(elem.lastChild);
            }
        }
    }

    function show(id) {
        var elem = document.getElementById(id);

        if (elem) {
            elem.style.display = 'block';
        }
    }

    function remove(id) {
        var elem = document.getElementById(id);

        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    }

    function appendTo(id, element) {
        var elem = document.getElementById(id),
            div = void 0;

        if (elem) {
            div = document.createElement('div');
            div.innerHTML = element;
            elem.appendChild(div);
        }
    }

    function contains(array, item) {
        var i = void 0;

        for (i = 0; i < array.length; i += 1) {
            if (array[i].toString().toLowerCase() == item.toString().toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function indexOf(array, item) {
        var i = void 0;

        for (i = 0; i < array.length; i += 1) {
            if (array[i] == item) {
                return i;
            }
        }
        return -1;
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) != -1;
    }

    function param(obj) {
        var str = '',
            key = void 0;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (str != '') {
                    str += '&';
                }
                str += key + '=' + encodeURIComponent(obj[key]).replace(/%20/g, '+');
            }
        }
        return str;
    }

    function generateUUID() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
    }

    function convertIABVendorPurposeArrayToObject(IabData) {
        var result = {};
        IabData.map(function (item) {
            var data = item.split(':');
            result[parseInt(data[0])] = data[1] === "true";
        });
        return result;
    }

    function getActiveIdArray(arrayData) {
        return arrayData.filter(function (item) {
            return item.split(':')[1] === "true";
        }).map(function (item1) {
            return parseInt(item1.split(":")[0]);
        });
    }

    function distinctArray(arrayData) {
        var result = [];
        arrayData.forEach(function (item) {
            if (result.indexOf(item) < 0) {
                result.push(item);
            }
        });
        return result;
    }

    function getIdArray(keyValueArray) {
        return keyValueArray.map(function (item) {
            return parseInt(item.split(":")[0]);
        });
    }

    /* JS Helper functions end*/

    function setAllowAllButton() {

        var deactiveCount = 0,
            group = void 0,
            json = optanonData(),
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            group = json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                if (contains(optanonHtmlGroupData, getGroupIdForCookie(group) + ':0')) {
                    deactiveCount += 1;
                    if (deactiveCount >= 1) {
                        OT('#optanon .optanon-allow-all-button').show();
                        return true;
                    }
                }
            }
        }

        OT('#optanon .optanon-allow-all-button').hide();
        return false;
    }

    //Closing Optanon alert box with predefined class = optanon-alert-box-wrapper
    function closeOptanonAlertBox(setOptanonAlertBoxCookie, isOptanonAlertBoxCookiePersistent) {
        OT('.optanon-alert-box-wrapper').fadeOut(400);
        if (setOptanonAlertBoxCookie && (optanonIsOptInMode || !optanonIsOptInMode && !Optanon.IsAlertBoxClosedAndValid())) {
            Optanon.SetAlertBoxClosed(isOptanonAlertBoxCookiePersistent);
        }
    }

    function isValidConsentNoticeGroup(group) {
        //does current group have visible sub groups with cookies or is a subgroup with cookies
        var group2 = void 0,
            json = optanonData(),
            hasValidSubGroupsWithCookies = false,
            isIABData = false,
            i = void 0,
            isMainGroupCookieNotEmpty = group.Cookies != null && group.Cookies.length > 0;

        if (isTopLevelGroup(group)) {
            isIABData = group.Purposes && group.Purposes.length > 0 && json.IsIABEnabled;
            for (i = 0; i < json.Groups.length; i += 1) {
                group2 = json.Groups[i];
                var isSubGroupCookieNotEmpty = group2.Cookies != null && group2.Cookies.length > 0;
                if (group2.Parent != null && safeGroupName(group) && safeGroupName(group2.Parent) == safeGroupName(group) && group2.ShowInPopup && isSubGroupCookieNotEmpty) {
                    hasValidSubGroupsWithCookies = true;
                    break;
                }
            }
            return group.ShowInPopup && (isMainGroupCookieNotEmpty || hasValidSubGroupsWithCookies || isIABData);
        }
        return group.ShowInPopup && isMainGroupCookieNotEmpty;
    }

    function isTopLevelGroup(group) {
        return group && group.Parent == null;
    }

    function getGroupSubGroups(group) {
        var group2 = void 0,
            json = optanonData(),
            subGroups = [],
            i = void 0;

        for (i = 0; i < json.Groups.length; i += 1) {
            group2 = json.Groups[i];
            var isSubGroupCookieNotEmpty = group2.Cookies != null && group2.Cookies.length > 0;
            if (group2.Parent != null && safeGroupName(group2.Parent) == safeGroupName(group) && group2.ShowInPopup && isSubGroupCookieNotEmpty) {
                subGroups.push(group2);
            }
        }

        return subGroups;
    }

    function optanonData() {
        if (!optanonJsonData) {
            var json = {"cctId":"bb909841-e5c6-4c82-ad92-c87c11069544","euOnly":false,"MainText":"Privacy Preference Centre","MainInfoText":"When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\n\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.","AboutText":"More Information","AboutCookiesText":"Your Privacy","ConfirmText":"Allow All","AllowAllText":"Save Settings","CookiesUsedText":"Cookies used","ShowAlertNotice":true,"AboutLink":"https://cookiepedia.co.uk/giving-consent-to-cookies","HideToolbarCookieList":false,"ActiveText":"Active","AlwaysActiveText":"Always Active","AlertNoticeText":"We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.           <a href='https://www.google.com'>Link</a>","AlertCloseText":"Close","AlertMoreInfoText":"Cookie Settings","AlertAllowCookiesText":"Accept Cookies","CloseShouldAcceptAllCookies":false,"LastReconsentDate":null,"BannerTitle":"Cookie Banner","ForceConsent":false,"InactiveText":"Inactive","CookiesText":"Cookies","CategoriesText":"Categories","HasScriptArchive":true,"IsLifespanEnabled":true,"LifespanText":"Lifespan","IsIABEnabled":true,"VendorLevelOptOut":true,"Groups":[{"ShowInPopup":true,"Order":0,"OptanonGroupId":1,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Always Active"},"GroupDescription":{"Text":"These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."},"GroupName":{"Text":"Strictly Necessary Cookies"},"IsDntEnabled":false}],"Cookies":[{"Name":"OptanonConsent","Host":"onetrust.com","IsSession":false,"Length":365},{"Name":"OptanonAlertBoxClosed","Host":"onetrust.com","IsSession":false,"Length":365},{"Name":"_dc_gtm_UA-85738809-1","Host":".onetrust.com","IsSession":false,"Length":0},{"Name":"__cfduid","Host":".support.onetrust.com","IsSession":false,"Length":363},{"Name":"__cfruid","Host":".support.onetrust.com","IsSession":true,"Length":0},{"Name":"ARRAffinity","Host":"captcha.onetrust.com","IsSession":true,"Length":0},{"Name":"JSESSIONID","Host":"captcha.onetrust.com","IsSession":true,"Length":0}],"Purposes":[{"purposes":{"purposeId":1,"purposeName":"Information storage and access","description":"The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."}}],"CustomGroupId":null,"GroupId":167},{"ShowInPopup":true,"Order":1,"OptanonGroupId":2,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."},"GroupName":{"Text":"Performance Cookies"},"IsDntEnabled":false}],"Cookies":[{"Name":"__utma","Host":".onetrust.com","IsSession":false,"Length":728},{"Name":"__utmv","Host":".onetrust.com","IsSession":false,"Length":0},{"Name":"ai_user","Host":"app.onetrust.com","IsSession":false,"Length":363},{"Name":"__utmz","Host":".onetrust.com","IsSession":false,"Length":181},{"Name":"_gid","Host":".onetrust.com","IsSession":false,"Length":0},{"Name":"_ga","Host":".onetrust.com","IsSession":false,"Length":728},{"Name":"__utmb","Host":".onetrust.com","IsSession":false,"Length":0},{"Name":"__utmc","Host":".onetrust.com","IsSession":true,"Length":0},{"Name":"ai_session","Host":"app.onetrust.com","IsSession":false,"Length":0}],"Purposes":[{"purposes":{"purposeId":2,"purposeName":"Personalisation","description":"The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."}}],"CustomGroupId":null,"GroupId":163},{"ShowInPopup":true,"Order":2,"OptanonGroupId":3,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."},"GroupName":{"Text":"Functional Cookies"},"IsDntEnabled":false}],"Cookies":[{"Name":"__distillery","Host":"www.onetrust.com","IsSession":false,"Length":363},{"Name":"_zendesk_shared_session","Host":"support.onetrust.com","IsSession":true,"Length":0},{"Name":"_help_center_session","Host":"support.onetrust.com","IsSession":true,"Length":0},{"Name":"_zendesk_authenticated","Host":"support.onetrust.com","IsSession":false,"Length":2915010}],"Purposes":[{"purposes":{"purposeId":3,"purposeName":"Ad selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":164},{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"google.co.uk"},"IsDntEnabled":false}],"Cookies":[{"Name":"PREF","Host":".google.co.uk","IsSession":false,"Length":309}],"Purposes":[],"CustomGroupId":null,"GroupId":177},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"syndication.twitter.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"lang","Host":"syndication.twitter.com","IsSession":true,"Length":0}],"Purposes":[],"CustomGroupId":null,"GroupId":176},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"bat.bing.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"MUIDB","Host":"bat.bing.com","IsSession":false,"Length":388}],"Purposes":[],"CustomGroupId":null,"GroupId":175},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"cdn.syndication.twimg.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"lang","Host":"cdn.syndication.twimg.com","IsSession":true,"Length":0}],"Purposes":[],"CustomGroupId":null,"GroupId":174},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":2,"OptanonGroupId":3,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."},"GroupName":{"Text":"Functional Cookies"},"IsDntEnabled":false}],"Cookies":[{"Name":"__distillery","Host":"www.onetrust.com","IsSession":false,"Length":363},{"Name":"_zendesk_shared_session","Host":"support.onetrust.com","IsSession":true,"Length":0},{"Name":"_help_center_session","Host":"support.onetrust.com","IsSession":true,"Length":0},{"Name":"_zendesk_authenticated","Host":"support.onetrust.com","IsSession":false,"Length":2915010}],"Purposes":[{"purposes":{"purposeId":3,"purposeName":"Ad selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":164},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"accounts.google.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"__utma","Host":".accounts.google.com","IsSession":false,"Length":309}],"Purposes":[],"CustomGroupId":null,"GroupId":173},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"youtube.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"VISITOR_INFO1_LIVE","Host":".youtube.com","IsSession":false,"Length":178},{"Name":"PREF","Host":".youtube.com","IsSession":false,"Length":728},{"Name":"GPS","Host":".youtube.com","IsSession":false,"Length":0},{"Name":"YSC","Host":".youtube.com","IsSession":true,"Length":0}],"Purposes":[],"CustomGroupId":null,"GroupId":172},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"google.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"APISID","Host":".google.com","IsSession":false,"Length":309},{"Name":"SSID","Host":".google.com","IsSession":false,"Length":309},{"Name":"1P_JAR","Host":".google.com","IsSession":false,"Length":28},{"Name":"NID","Host":".google.com","IsSession":false,"Length":181},{"Name":"SID","Host":".google.com","IsSession":false,"Length":309},{"Name":"SAPISID","Host":".google.com","IsSession":false,"Length":309},{"Name":"HSID","Host":".google.com","IsSession":false,"Length":309}],"Purposes":[],"CustomGroupId":null,"GroupId":171},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"twitter.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"auth_token","Host":".twitter.com","IsSession":false,"Length":5294},{"Name":"twll","Host":".twitter.com","IsSession":false,"Length":1642},{"Name":"secure_session","Host":".twitter.com","IsSession":false,"Length":5294},{"Name":"guest_id","Host":".twitter.com","IsSession":false,"Length":309},{"Name":"remember_checked","Host":".twitter.com","IsSession":false,"Length":1642},{"Name":"remember_checked_on","Host":".twitter.com","IsSession":false,"Length":1642}],"Purposes":[],"CustomGroupId":null,"GroupId":170},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"linkedin.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"lidc","Host":".linkedin.com","IsSession":false,"Length":0},{"Name":"bcookie","Host":".linkedin.com","IsSession":false,"Length":310},{"Name":"__qca","Host":".linkedin.com","IsSession":false,"Length":127},{"Name":"UserMatchHistory","Host":".linkedin.com","IsSession":false,"Length":28}],"Purposes":[],"CustomGroupId":null,"GroupId":169},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"ads.linkedin.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"BizoID","Host":".ads.linkedin.com","IsSession":false,"Length":28},{"Name":"lang","Host":".ads.linkedin.com","IsSession":true,"Length":0}],"Purposes":[],"CustomGroupId":null,"GroupId":168},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"pinterest.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"__utmv","Host":".pinterest.com","IsSession":false,"Length":309}],"Purposes":[],"CustomGroupId":null,"GroupId":180},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"doubleclick.net"},"IsDntEnabled":false}],"Cookies":[{"Name":"IDE","Host":".doubleclick.net","IsSession":false,"Length":2915010},{"Name":"id","Host":".doubleclick.net","IsSession":false,"Length":309}],"Purposes":[],"CustomGroupId":null,"GroupId":179},{"ShowInPopup":true,"Order":100,"OptanonGroupId":0,"Parent":{"ShowInPopup":true,"Order":3,"OptanonGroupId":4,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},"GroupName":{"Text":"Targeting Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":4,"purposeName":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":165},"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":""},"GroupName":{"Text":"bing.com"},"IsDntEnabled":false}],"Cookies":[{"Name":"MUID","Host":".bing.com","IsSession":false,"Length":388}],"Purposes":[],"CustomGroupId":null,"GroupId":178},{"ShowInPopup":true,"Order":100,"OptanonGroupId":8,"Parent":null,"GroupLanguagePropertiesSets":[{"DefaultStatus":{"Text":"Active"},"GroupDescription":{"Text":"These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit.\n\nIf you do not allow these cookies you may not be able to use or see these sharing tools."},"GroupName":{"Text":"Social Media Cookies"},"IsDntEnabled":false}],"Cookies":[],"Purposes":[{"purposes":{"purposeId":5,"purposeName":"Measurement","description":"The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."}}],"CustomGroupId":null,"GroupId":166}],"ConsentModel":{"Name":"Opt-out"},"Language":{"culture":"en-GB"},"showBannerCloseButton":true,"ShowPreferenceCenterCloseButton":true,"FooterDescriptionText":"","IsDntEnabled":false,"CustomJs":null,"LifespanTypeText":"Session","LifespanDurationText":"Days","IsConsentLoggingEnabled":false,"IsIabThirdPartyCookieEnabled":false,"CloseText":"Close","BannerCloseButtonText":"Close","OnClickAcceptAllCookies":false,"ScrollAcceptsAllCookiesAndClosesBanner":false};
            optanonJsonData = json;
            return optanonJsonData;
        } else {
            return optanonJsonData;
        }
    }



    function IABData() {
        var json = {"cookieVersion":"1","createdTime":"2019-01-09T18:48:09.418","updatedTime":"2019-01-09T18:48:09.418","cmpId":"28","cmpVersion":"1","consentScreen":"1","consentLanguage":"en","vendorListVersion":128,"maxVendorId":560,"encodingType":"0","vendorLevelOptOut":true,"activeVendors":[{"vendorId":141,"vendorName":"1020, Inc. dba Placecast and Ericsson Emodo","policyUrl":"https://www.ericsson-emodo.com/privacy-policy/","deleted":false,"new":false,"id":141},{"vendorId":58,"vendorName":"33Across","policyUrl":"http://www.33across.com/privacy-policy","deleted":false,"new":false,"id":58},{"vendorId":272,"vendorName":"A.Mob","policyUrl":"https://www.we-are-adot.com/privacy-policy/","deleted":false,"new":false,"id":272},{"vendorId":518,"vendorName":"Accelerize Inc.","policyUrl":"https://getcake.com/privacy-policy/","deleted":false,"new":false,"id":518},{"vendorId":318,"vendorName":"Accorp Sp. z o.o.","policyUrl":"http://www.instytut-pollster.pl/privacy-policy/","deleted":false,"new":false,"id":318},{"vendorId":231,"vendorName":"Acuityads Inc.","policyUrl":"https://www.acuityads.com/privacy-policy/","deleted":false,"new":false,"id":231},{"vendorId":331,"vendorName":"ad6media","policyUrl":"https://www.ad6media.fr/privacy","deleted":false,"new":false,"id":331},{"vendorId":57,"vendorName":"ADARA MEDIA UNLIMITED","policyUrl":"https://adara.com/privacy-promise/","deleted":false,"new":false,"id":57},{"vendorId":377,"vendorName":"AddApptr GmbH","policyUrl":"https://www.addapptr.com/data-privacy","deleted":false,"new":false,"id":377},{"vendorId":196,"vendorName":"AdElement Media Solutions Pvt Ltd","policyUrl":"http://adelement.com/privacy-policy.html","deleted":false,"new":false,"id":196},{"vendorId":320,"vendorName":"Adelphic LLC","policyUrl":"https://adelphic.com/platform/privacy/","deleted":false,"new":false,"id":320},{"vendorId":50,"vendorName":"Adform A/S","policyUrl":"https://site.adform.com/privacy-policy-opt-out/","deleted":false,"new":false,"id":50},{"vendorId":553,"vendorName":"Adhese","policyUrl":"https://adhese.com/privacy-and-cookie-policy","deleted":false,"new":false,"id":553},{"vendorId":556,"vendorName":"adhood.com","policyUrl":"http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang=en","deleted":false,"new":false,"id":556},{"vendorId":15,"vendorName":"Adikteev","policyUrl":"https://www.adikteev.com/eu/privacy/","deleted":false,"new":false,"id":15},{"vendorId":454,"vendorName":"Adimo","policyUrl":"https://adimo.co/privacy-policy/","deleted":false,"new":false,"id":454},{"vendorId":39,"vendorName":"ADITION technologies AG","policyUrl":"https://www.adition.com/datenschutz","deleted":false,"new":false,"id":39},{"vendorId":14,"vendorName":"Adkernel LLC","policyUrl":"http://adkernel.com/privacy-policy/","deleted":false,"new":false,"id":14},{"vendorId":47,"vendorName":"ADMAN - Phaistos Networks, S.A.","policyUrl":"http://www.adman.gr/privacy","deleted":false,"new":false,"id":47},{"vendorId":149,"vendorName":"ADman Interactive SL","policyUrl":"http://admanmedia.com/politica","deleted":false,"new":false,"id":149},{"vendorId":9,"vendorName":"AdMaxim Inc.","policyUrl":"http://www.admaxim.com/privacy/","deleted":false,"new":false,"id":9},{"vendorId":22,"vendorName":"admetrics GmbH","policyUrl":"https://admetrics.io/en/privacy_policy/","deleted":false,"new":false,"id":22},{"vendorId":511,"vendorName":"Admixer EU GmbH","policyUrl":"https://admixer.net/privacy","deleted":false,"new":false,"id":511},{"vendorId":74,"vendorName":"Admotion SRL","policyUrl":"http://www.admotion.com/policy/","deleted":false,"new":false,"id":74},{"vendorId":264,"vendorName":"Adobe Advertising Cloud","policyUrl":"https://www.adobe.com/nz/privacy/marketing-cloud.html","deleted":false,"new":false,"id":264},{"vendorId":130,"vendorName":"AdRoll Inc","policyUrl":"https://www.adrollgroup.com/privacy","deleted":false,"new":false,"id":130},{"vendorId":224,"vendorName":"adrule mobile GmbH","policyUrl":"https://www.adrule.net/de/datenschutz/","deleted":false,"new":false,"id":224},{"vendorId":6,"vendorName":"AdSpirit GmbH","policyUrl":"http://www.adspirit.de/privacy","deleted":false,"new":false,"id":6},{"vendorId":66,"vendorName":"adsquare GmbH","policyUrl":"https://www.adsquare.com/privacy","deleted":false,"new":false,"id":66},{"vendorId":410,"vendorName":"Adtelligent Inc.","policyUrl":"https://adtelligent.com/privacy-policy/","deleted":false,"new":false,"id":410},{"vendorId":211,"vendorName":"AdTheorent, Inc","policyUrl":"http://adtheorent.com/privacy-policy","deleted":false,"new":false,"id":211},{"vendorId":326,"vendorName":"AdTiming Technology Company Limited","policyUrl":"http://www.adtiming.com/en/privacypolicy.html","deleted":false,"new":false,"id":326},{"vendorId":199,"vendorName":"ADUX","policyUrl":"http://www.adux.com/donnees-personelles/","deleted":false,"new":false,"id":199},{"vendorId":27,"vendorName":"ADventori SAS","policyUrl":"https://www.adventori.com/with-us/legal-notice/","deleted":false,"new":false,"id":27},{"vendorId":41,"vendorName":"Adverline","policyUrl":"https://www.adverline.com/privacy/","deleted":false,"new":false,"id":41},{"vendorId":259,"vendorName":"ADYOULIKE SA","policyUrl":"https://www.adyoulike.com/privacy_policy.php","deleted":false,"new":false,"id":259},{"vendorId":359,"vendorName":"Aerserv LLC","policyUrl":"https://www.aerserv.com/privacy-policy/","deleted":false,"new":false,"id":359},{"vendorId":3,"vendorName":"affilinet","policyUrl":"https://www.affili.net/de/footeritem/datenschutz","deleted":false,"new":false,"id":3},{"vendorId":501,"vendorName":"Alliance Gravity Data Media","policyUrl":"https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles","deleted":false,"new":false,"id":501},{"vendorId":23,"vendorName":"Amobee, Inc. ","policyUrl":"https://www.amobee.com/trust/privacy-guidelines","deleted":false,"new":false,"id":23},{"vendorId":155,"vendorName":"AntVoice","policyUrl":"https://www.antvoice.com/en/privacypolicy/","deleted":false,"new":false,"id":155},{"vendorId":354,"vendorName":"Apester Ltd","policyUrl":"https://apester.com/privacy-policy/","deleted":false,"new":false,"id":354},{"vendorId":528,"vendorName":"AppLift GmbH","policyUrl":"https://www.applift.com/privacy-notice","deleted":false,"new":false,"id":528},{"vendorId":32,"vendorName":"AppNexus Inc.","policyUrl":"https://www.appnexus.com/en/company/platform-privacy-policy","deleted":false,"new":false,"id":32},{"vendorId":495,"vendorName":"Arcspire Limited","policyUrl":"https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf","deleted":false,"new":false,"id":495},{"vendorId":215,"vendorName":"ARMIS SAS","policyUrl":"https://armis.tech/en/armis-personal-data-privacy-policy/","deleted":false,"new":false,"id":215},{"vendorId":509,"vendorName":"ATG Ad Tech Group GmbH","policyUrl":"http://advandeo.com/privacy-policy/","deleted":false,"new":false,"id":509},{"vendorId":394,"vendorName":"AudienceProject Aps","policyUrl":"https://privacy.audienceproject.com","deleted":false,"new":false,"id":394},{"vendorId":167,"vendorName":"Audiens S.r.l.","policyUrl":"http://www.audiens.com/privacy","deleted":false,"new":false,"id":167},{"vendorId":496,"vendorName":"Automattic Inc.","policyUrl":"https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/","deleted":false,"new":false,"id":496},{"vendorId":122,"vendorName":"Avid Media Ltd","policyUrl":"http://www.avidglobalmedia.eu/privacy-policy.html","deleted":false,"new":false,"id":122},{"vendorId":461,"vendorName":"B2B Media Group EMEA GmbH","policyUrl":"https://www.selfcampaign.com/static/privacy","deleted":false,"new":false,"id":461},{"vendorId":38,"vendorName":"Beemray Oy","policyUrl":"https://www.beemray.com/privacy-policy/","deleted":false,"new":false,"id":38},{"vendorId":12,"vendorName":"BeeswaxIO Corporation","policyUrl":"https://www.beeswax.com/privacy.html","deleted":false,"new":false,"id":12},{"vendorId":389,"vendorName":"Bidmanagement GmbH","policyUrl":"https://www.adspert.net/en/privacy/","deleted":false,"new":false,"id":389},{"vendorId":462,"vendorName":"bidstack ltd","policyUrl":"https://bidstack.com/policy/","deleted":false,"new":false,"id":462},{"vendorId":128,"vendorName":"BIDSWITCH GmbH","policyUrl":"http://www.bidswitch.com/privacy-policy/","deleted":false,"new":false,"id":128},{"vendorId":185,"vendorName":"Bidtellect, Inc","policyUrl":"https://www.bidtellect.com/privacy-policy/","deleted":false,"new":false,"id":185},{"vendorId":30,"vendorName":"BidTheatre AB","policyUrl":"https://www.bidtheatre.com/privacy-policy","deleted":false,"new":false,"id":30},{"vendorId":439,"vendorName":"Bit Q Holdings Limited","policyUrl":"https://bitqueen.com/privacy","deleted":false,"new":false,"id":439},{"vendorId":94,"vendorName":"Blis Media Limited","policyUrl":"http://www.blis.com/privacy/","deleted":false,"new":false,"id":94},{"vendorId":374,"vendorName":"Bmind a Sales Maker Company, S.L.","policyUrl":"http://www.bmind.es/legal-notice/","deleted":false,"new":false,"id":374},{"vendorId":163,"vendorName":"Bombora Inc.","policyUrl":"https://bombora.com/privacy","deleted":false,"new":false,"id":163},{"vendorId":256,"vendorName":"Bounce Exchange, Inc","policyUrl":"https://www.bouncex.com/privacy/","deleted":false,"new":false,"id":256},{"vendorId":422,"vendorName":"Brand Metrics Sweden AB","policyUrl":"https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf","deleted":false,"new":false,"id":422},{"vendorId":235,"vendorName":"Bucksense Inc","policyUrl":"http://www.bucksense.com/platform-privacy-policy/","deleted":false,"new":false,"id":235},{"vendorId":494,"vendorName":"Cablato Limited","policyUrl":"https://cablato.com/privacy","deleted":false,"new":false,"id":494},{"vendorId":2,"vendorName":"Captify Technologies Limited","policyUrl":"http://www.captify.co.uk/privacy-policy/","deleted":false,"new":false,"id":2},{"vendorId":315,"vendorName":"Celtra, Inc.","policyUrl":"https://www.celtra.com/privacy-policy/","deleted":false,"new":false,"id":315},{"vendorId":156,"vendorName":"Centro, Inc.","policyUrl":"https://www.centro.net/privacy-policy/","deleted":false,"new":false,"id":156},{"vendorId":520,"vendorName":"ChannelSight ","policyUrl":"https://www.channelsight.com/privacypolicy/","deleted":false,"new":false,"id":520},{"vendorId":519,"vendorName":"Chargeads","policyUrl":"https://www.chargeplatform.com/privacy","deleted":false,"new":false,"id":519},{"vendorId":493,"vendorName":"Clicksco Digital Limited","policyUrl":"https://carbondmp.com/privacy.html","deleted":false,"new":false,"id":493},{"vendorId":319,"vendorName":"Clipcentric, Inc.","policyUrl":"https://clipcentric.com/privacy.bhtml","deleted":false,"new":false,"id":319},{"vendorId":243,"vendorName":"Cloud Technologies S.A.","policyUrl":"http://onaudience.com/privacy-policy","deleted":false,"new":false,"id":243},{"vendorId":277,"vendorName":"Codewise Sp. z o.o. Sp. k","policyUrl":"https://voluumdsp.com/end-user-privacy-policy/","deleted":false,"new":false,"id":277},{"vendorId":179,"vendorName":"Collective Europe Ltd.","policyUrl":"https://www.timeincuk.com/privacy/","deleted":false,"new":false,"id":179},{"vendorId":182,"vendorName":"Collective, Inc. dba Visto","policyUrl":"https://www.vistohub.com/privacy-policy/","deleted":false,"new":false,"id":182},{"vendorId":285,"vendorName":"Comcast International France SAS","policyUrl":"http://freewheel.tv/privacy-policy","deleted":false,"new":false,"id":285},{"vendorId":416,"vendorName":"Commanders Act","policyUrl":"https://www.commandersact.com/en/privacy/","deleted":false,"new":false,"id":416},{"vendorId":77,"vendorName":"comScore, Inc.","policyUrl":"https://www.comscore.com/About-comScore/Privacy-Policy","deleted":false,"new":false,"id":77},{"vendorId":56,"vendorName":"Confiant Inc.","policyUrl":"https://www.confiant.com/privacy","deleted":false,"new":false,"id":56},{"vendorId":143,"vendorName":"Connatix Native Exchange Inc.","policyUrl":"https://connatix.com/privacy-policy/","deleted":false,"new":false,"id":143},{"vendorId":138,"vendorName":"ConnectAd Realtime GmbH","policyUrl":"http://connectadrealtime.com/privacy/","deleted":false,"new":false,"id":138},{"vendorId":248,"vendorName":"Converge-Digital","policyUrl":"https://converge-digital.com/privacy-policy/","deleted":false,"new":false,"id":248},{"vendorId":24,"vendorName":"Conversant Europe Ltd.","policyUrl":"https://www.conversantmedia.eu/legal/privacy-policy","deleted":false,"new":false,"id":24},{"vendorId":85,"vendorName":"Crimtan Holdings Limited","policyUrl":"https://crimtan.com/privacy/","deleted":false,"new":false,"id":85},{"vendorId":91,"vendorName":"Criteo SA","policyUrl":"https://www.criteo.com/privacy/","deleted":false,"new":false,"id":91},{"vendorId":298,"vendorName":"Cuebiq Inc.","policyUrl":"https://www.cuebiq.com/privacypolicy/","deleted":false,"new":false,"id":298},{"vendorId":346,"vendorName":"Cybba, Inc.","policyUrl":"http://cybba.com/about/legal/data-processing-agreement/","deleted":false,"new":false,"id":346},{"vendorId":71,"vendorName":"Dataxu, Inc. ","policyUrl":"https://www.dataxu.com/about-us/privacy/data-collection-platform/","deleted":false,"new":false,"id":71},{"vendorId":440,"vendorName":"DEFINE MEDIA GMBH","policyUrl":"http://www.definemedia.de/datenschutz-conative/","deleted":false,"new":false,"id":440},{"vendorId":209,"vendorName":"Delta Projects AB","policyUrl":"http://www.deltaprojects.com/data-collection-policy/","deleted":false,"new":false,"id":209},{"vendorId":397,"vendorName":"Demandbase, Inc. ","policyUrl":"https://www.demandbase.com/privacy-policy/","deleted":false,"new":false,"id":397},{"vendorId":266,"vendorName":"Digilant Spain, SLU","policyUrl":"https://www.digilant.com/es/politica-privacidad/","deleted":false,"new":false,"id":266},{"vendorId":214,"vendorName":"Digital Control GmbH &amp; Co. KG","policyUrl":"http://advolution.de/privacy.php","deleted":false,"new":false,"id":214},{"vendorId":133,"vendorName":"digitalAudience","policyUrl":"https://digitalaudience.io/legal/privacy-cookies/","deleted":false,"new":false,"id":133},{"vendorId":343,"vendorName":"DIGITEKA Technologies","policyUrl":"https://www.ultimedia.com/POLICY.html","deleted":false,"new":false,"id":343},{"vendorId":229,"vendorName":"Digitize New Media Ltd","policyUrl":"http://www.digitize.ie/online-privacy","deleted":false,"new":false,"id":229},{"vendorId":64,"vendorName":"DigiTrust / IAB Tech Lab","policyUrl":"http://www.digitru.st/privacy-policy/","deleted":false,"new":false,"id":64},{"vendorId":144,"vendorName":"district m inc.","policyUrl":"https://districtm.net/en/page/platforms-data-and-privacy-policy/","deleted":false,"new":false,"id":144},{"vendorId":126,"vendorName":"DoubleVerify Inc.​","policyUrl":"https://www.doubleverify.com/privacy/","deleted":false,"new":false,"id":126},{"vendorId":381,"vendorName":"DTS (Filiale de Solocal Group)","policyUrl":"https://client.adhslx.com/privacy.html ","deleted":false,"new":false,"id":381},{"vendorId":434,"vendorName":"DynAdmic","policyUrl":"http://eu.dynadmic.com/privacy-policy/","deleted":false,"new":false,"id":434},{"vendorId":168,"vendorName":"EASYmedia GmbH","policyUrl":"https://login.rtbmarket.com/gdpr","deleted":false,"new":false,"id":168},{"vendorId":402,"vendorName":"Effiliation","policyUrl":"https://inter.effiliation.com/politique-confidentialite.html","deleted":false,"new":false,"id":402},{"vendorId":8,"vendorName":"Emerse Sverige AB","policyUrl":"https://www.emerse.com/privacy-policy/","deleted":false,"new":false,"id":8},{"vendorId":183,"vendorName":"EMX Digital LLC","policyUrl":"https://emxdigital.com/privacy/","deleted":false,"new":false,"id":183},{"vendorId":29,"vendorName":"Etarget SE","policyUrl":"https://www.etarget.sk/privacy.php","deleted":false,"new":false,"id":29},{"vendorId":413,"vendorName":"Eulerian Technologies","policyUrl":"https://www.eulerian.com/en/privacy/","deleted":false,"new":false,"id":413},{"vendorId":312,"vendorName":"Exactag GmbH","policyUrl":"https://www.exactag.com/en/data-privacy/","deleted":false,"new":false,"id":312},{"vendorId":1,"vendorName":"Exponential Interactive, Inc","policyUrl":"http://exponential.com/privacy","deleted":false,"new":false,"id":1},{"vendorId":120,"vendorName":"Eyeota Ptd Ltd","policyUrl":"https://www.eyeota.com/privacy-policy/","deleted":false,"new":false,"id":120},{"vendorId":347,"vendorName":"Ezoic Inc.","policyUrl":"https://www.ezoic.com/terms/","deleted":false,"new":false,"id":347},{"vendorId":529,"vendorName":"Fidzup","policyUrl":"https://www.fidzup.com/en/privacy/","deleted":false,"new":false,"id":529},{"vendorId":100,"vendorName":"Fifty Technology Limited","policyUrl":"https://fifty.io/privacy-policy.php","deleted":false,"new":false,"id":100},{"vendorId":78,"vendorName":"Flashtalking, Inc.","policyUrl":"http://www.flashtalking.com/privacypolicy/","deleted":false,"new":false,"id":78},{"vendorId":471,"vendorName":"FlexOffers.com, LLC","policyUrl":"https://www.flexoffers.com/privacy-policy/","deleted":false,"new":false,"id":471},{"vendorId":408,"vendorName":"FM Labs LLC","policyUrl":"https://fidelity-media.com/privacy-policy/","deleted":false,"new":false,"id":408},{"vendorId":175,"vendorName":"FORTVISION","policyUrl":"http://fortvision.com/POC/index.html","deleted":false,"new":false,"id":175},{"vendorId":350,"vendorName":"Free Stream Media Corp. dba Samba TV","policyUrl":"https://samba.tv/legal/privacy-policy-2-28-2018/","deleted":false,"new":false,"id":350},{"vendorId":262,"vendorName":"Fyber ","policyUrl":"https://www.fyber.com/legal/privacy-policy/","deleted":false,"new":false,"id":262},{"vendorId":316,"vendorName":"Gamned","policyUrl":"https://www.gamned.com/privacy-policy/","deleted":false,"new":false,"id":316},{"vendorId":455,"vendorName":"GDMServices, Inc. d/b/a FiksuDSP","policyUrl":"https://fiksu.com/privacy-policy/","deleted":false,"new":false,"id":455},{"vendorId":328,"vendorName":"Gemius SA","policyUrl":"https://www.gemius.com/cookie-policy.html","deleted":false,"new":false,"id":328},{"vendorId":87,"vendorName":"Genius Sports Media Limited","policyUrl":"http://www.geniussports.com/privacy-policy/","deleted":false,"new":false,"id":87},{"vendorId":369,"vendorName":"Getintent USA, inc.","policyUrl":"https://getintent.com/privacy/","deleted":false,"new":false,"id":369},{"vendorId":536,"vendorName":"GlobalWebIndex","policyUrl":"http://legal.trendstream.net/non-panellist_privacy_policy","deleted":false,"new":false,"id":536},{"vendorId":274,"vendorName":"Golden Bees","policyUrl":"http://goldenbees.fr/notre-politique-de-confidentialite/","deleted":false,"new":false,"id":274},{"vendorId":17,"vendorName":"Greenhouse Group BV (with its trademark LemonPI)","policyUrl":"https://www.lemonpi.io/privacy-policy/","deleted":false,"new":false,"id":17},{"vendorId":98,"vendorName":"GroupM","policyUrl":"https://www.groupm.com/privacy-policy","deleted":false,"new":false,"id":98},{"vendorId":61,"vendorName":"GumGum, Inc.","policyUrl":"https://gumgum.com/privacy-policy","deleted":false,"new":false,"id":61},{"vendorId":467,"vendorName":"Haensel AMS GmbH","policyUrl":"https://haensel-ams.com/data-privacy/","deleted":false,"new":false,"id":467},{"vendorId":550,"vendorName":"Happydemics","policyUrl":"https://www.iubenda.com/privacy-policy/69056167/full-legal","deleted":false,"new":false,"id":550},{"vendorId":110,"vendorName":"Hottraffic BV (DMA Institute)","policyUrl":"https://www.dma-institute.com/privacy-compliancy/","deleted":false,"new":false,"id":110},{"vendorId":206,"vendorName":"Hybrid Adtech GmbH","policyUrl":"https://hybrid.ai/data_protection_policy","deleted":false,"new":false,"id":206},{"vendorId":131,"vendorName":"ID5 Technology SAS","policyUrl":"https://www.id5.io/privacy","deleted":false,"new":false,"id":131},{"vendorId":551,"vendorName":"Illuma Technology Limited","policyUrl":"https://www.weareilluma.com/endddd","deleted":false,"new":false,"id":551},{"vendorId":105,"vendorName":"Impression Desk Technologies Limited","policyUrl":"https://impressiondesk.com/privacy-policy/","deleted":false,"new":false,"id":105},{"vendorId":253,"vendorName":"Improve Digital International BV","policyUrl":"https://www.improvedigital.com/platform-privacy-policy","deleted":false,"new":false,"id":253},{"vendorId":10,"vendorName":"Index Exchange, Inc. ","policyUrl":"https://www.indexexchange.com/privacy","deleted":false,"new":false,"id":10},{"vendorId":479,"vendorName":"INFINIA MOBILE S.L.","policyUrl":"http://www.infiniamobile.com/privacy_policy","deleted":false,"new":false,"id":479},{"vendorId":333,"vendorName":"InMobi Pte Ltd","policyUrl":"https://www.inmobi.com/privacy-policy-for-eea","deleted":false,"new":false,"id":333},{"vendorId":535,"vendorName":"INNITY","policyUrl":"https://www.innity.com/privacy-policy.php","deleted":false,"new":false,"id":535},{"vendorId":452,"vendorName":"Innovid Inc.","policyUrl":"http://www.innovid.com/privacy-policy","deleted":false,"new":false,"id":452},{"vendorId":150,"vendorName":"Inskin Media LTD","policyUrl":"http://www.inskinmedia.com/privacy-policy.html","deleted":false,"new":false,"id":150},{"vendorId":265,"vendorName":"Instinctive, Inc.","policyUrl":"https://instinctive.io/privacy","deleted":false,"new":false,"id":265},{"vendorId":19,"vendorName":"Intent Media, Inc.","policyUrl":"https://intentmedia.com/privacy-policy/","deleted":false,"new":false,"id":19},{"vendorId":189,"vendorName":"Intowow Innovation Ltd.","policyUrl":"http://www.intowow.com/privacy/","deleted":false,"new":false,"id":189},{"vendorId":436,"vendorName":"INVIBES GROUP","policyUrl":"http://www.invibes.com/terms","deleted":false,"new":false,"id":436},{"vendorId":113,"vendorName":"iotec global Ltd.","policyUrl":"https://www.iotecglobal.com/privacy-policy/","deleted":false,"new":false,"id":113},{"vendorId":129,"vendorName":"IPONWEB GmbH","policyUrl":"https://www.iponweb.com/privacy-policy/","deleted":false,"new":false,"id":129},{"vendorId":527,"vendorName":"Jampp LTD","policyUrl":"https://jampp.com/privacy-policy/","deleted":false,"new":false,"id":527},{"vendorId":62,"vendorName":"Justpremium BV","policyUrl":"http://justpremium.com/privacy-policy/","deleted":false,"new":false,"id":62},{"vendorId":314,"vendorName":"Keymantics","policyUrl":"https://www.keymantics.com/assets/privacy-policy.pdf","deleted":false,"new":false,"id":314},{"vendorId":244,"vendorName":"Leadplace - Temelio","policyUrl":"https://temelio.com/vie-privee","deleted":false,"new":false,"id":244},{"vendorId":560,"vendorName":"Leiki Ltd.","policyUrl":"http://www.leiki.com/privacy","deleted":false,"new":false,"id":560},{"vendorId":221,"vendorName":"LEMO MEDIA GROUP LIMITED","policyUrl":"http://www.lemomedia.com/terms.pdf","deleted":false,"new":false,"id":221},{"vendorId":67,"vendorName":"LifeStreet Corporation","policyUrl":"http://www.lifestreet.com/privacy/","deleted":false,"new":false,"id":67},{"vendorId":330,"vendorName":"Linicom","policyUrl":"https://www.linicom.com/privacy/","deleted":false,"new":false,"id":330},{"vendorId":497,"vendorName":"Little Big Data sp.z.o.o.","policyUrl":"http://dtxngr.com/legal/","deleted":false,"new":false,"id":497},{"vendorId":148,"vendorName":"Liveintent Inc.","policyUrl":"https://liveintent.com/services-privacy-policy/","deleted":false,"new":false,"id":148},{"vendorId":97,"vendorName":"LiveRamp, Inc.","policyUrl":"https://www.liveramp.com/service-privacy-policy/","deleted":false,"new":false,"id":97},{"vendorId":65,"vendorName":"Location Sciences AI Ltd","policyUrl":"https://www.locationsciences.ai/privacy-policy/","deleted":false,"new":false,"id":65},{"vendorId":109,"vendorName":"LoopMe Ltd","policyUrl":"https://loopme.com/privacy/","deleted":false,"new":false,"id":109},{"vendorId":95,"vendorName":"Lotame Solutions, Inc.","policyUrl":"https://www.lotame.com/about-lotame/privacy/","deleted":false,"new":false,"id":95},{"vendorId":508,"vendorName":"Lucid Holdings, LLC","policyUrl":"https://luc.id/gdpr","deleted":false,"new":false,"id":508},{"vendorId":75,"vendorName":"M32 Media Inc","policyUrl":"https://m32.media/privacy-cookie-policy/","deleted":false,"new":false,"id":75},{"vendorId":153,"vendorName":"MADVERTISE MEDIA","policyUrl":"http://madvertise.com/en/gdpr/","deleted":false,"new":false,"id":153},{"vendorId":317,"vendorName":"mainADV Srl","policyUrl":"http://www.mainad.com/privacy-policy/","deleted":false,"new":false,"id":317},{"vendorId":270,"vendorName":"Marfeel Solutions S.L","policyUrl":"https://www.marfeel.com/privacy-policy/","deleted":false,"new":false,"id":270},{"vendorId":112,"vendorName":"Maytrics GmbH","policyUrl":"https://maytrics.com/node/2","deleted":false,"new":false,"id":112},{"vendorId":142,"vendorName":"Media.net Advertising FZ-LLC","policyUrl":"https://www.media.net/en/privacy-policy","deleted":false,"new":false,"id":142},{"vendorId":79,"vendorName":"MediaMath, Inc.","policyUrl":"http://www.mediamath.com/privacy-policy/","deleted":false,"new":false,"id":79},{"vendorId":184,"vendorName":"mediarithmics SAS","policyUrl":"http://www.mediarithmics.com/en/data-privacy.html","deleted":false,"new":false,"id":184},{"vendorId":193,"vendorName":"Mediasmart Mobile S.L.","policyUrl":"http://mediasmart.io/privacy/","deleted":false,"new":false,"id":193},{"vendorId":358,"vendorName":"MGID Inc.","policyUrl":"https://www.mgid.com/privacy-policy","deleted":false,"new":false,"id":358},{"vendorId":101,"vendorName":"MiQ","policyUrl":"http://wearemiq.com/privacy-policy/","deleted":false,"new":false,"id":101},{"vendorId":279,"vendorName":"Mirando GmbH &amp; Co KG","policyUrl":"https://wwwmirando.de/datenschutz/","deleted":false,"new":false,"id":279},{"vendorId":289,"vendorName":"mobalo GmbH","policyUrl":"https://www.mobalo.com/datenschutz/","deleted":false,"new":false,"id":289},{"vendorId":311,"vendorName":"Mobfox US LLC","policyUrl":"https://www.mobfox.com/privacy-policy/","deleted":false,"new":false,"id":311},{"vendorId":302,"vendorName":"Mobile Professionals BV","policyUrl":"https://mobpro.com/privacy.html","deleted":false,"new":false,"id":302},{"vendorId":403,"vendorName":"Mobusi Mobile Advertising S.L.","policyUrl":"https://www.mobusi.com/privacy.en.html","deleted":false,"new":false,"id":403},{"vendorId":344,"vendorName":"My6sense Inc.","policyUrl":"https://my6sense.com/privacy-policy/","deleted":false,"new":false,"id":344},{"vendorId":362,"vendorName":"Myntelligence Limited","policyUrl":"http://www.myntelligence.com/privacy-page/","deleted":false,"new":false,"id":362},{"vendorId":530,"vendorName":"Near Pte Ltd","policyUrl":"https://near.co/privacy","deleted":false,"new":false,"id":530},{"vendorId":450,"vendorName":"Neodata Group srl","policyUrl":"https://www.neodatagroup.com/en/security-policy","deleted":false,"new":false,"id":450},{"vendorId":34,"vendorName":"NEORY GmbH","policyUrl":"https://www.neory.com/privacy.html","deleted":false,"new":false,"id":34},{"vendorId":160,"vendorName":"Netsprint SA","policyUrl":"http://spoldzielnia.nsaudience.pl/opt-out/","deleted":false,"new":false,"id":160},{"vendorId":48,"vendorName":"NetSuccess, s.r.o.","policyUrl":"https://www.inres.sk/pp/","deleted":false,"new":false,"id":48},{"vendorId":521,"vendorName":"netzeffekt GmbH","policyUrl":"https://www.netzeffekt.de/en/imprint","deleted":false,"new":false,"id":521},{"vendorId":37,"vendorName":"NEURAL.ONE","policyUrl":"https://web.neural.one/privacy-policy/","deleted":false,"new":false,"id":37},{"vendorId":468,"vendorName":"Neustar, Inc.","policyUrl":"https://www.home.neustar/privacy","deleted":false,"new":false,"id":468},{"vendorId":502,"vendorName":"NEXD","policyUrl":"https://nexd.com/privacy-policy","deleted":false,"new":false,"id":502},{"vendorId":373,"vendorName":"Nielsen Marketing Cloud","policyUrl":"http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html","deleted":false,"new":false,"id":373},{"vendorId":25,"vendorName":"Oath (EMEA) Limited","policyUrl":"https://policies.oath.com/ie/en/oath/privacy/index.html","deleted":false,"new":false,"id":25},{"vendorId":31,"vendorName":"Ogury Ltd.","policyUrl":"https://www.ogury.com/privacy/","deleted":false,"new":false,"id":31},{"vendorId":304,"vendorName":"On Device Research Limited","policyUrl":"https://s.on-device.com/privacyPolicy","deleted":false,"new":false,"id":304},{"vendorId":147,"vendorName":"One Person Health, Inc. (DBA Adacado)","policyUrl":"https://www.adacado.com/privacy-policy-april-25-2018/","deleted":false,"new":false,"id":147},{"vendorId":241,"vendorName":"OneTag Ltd","policyUrl":"https://www.onetag.net/privacy/","deleted":false,"new":false,"id":241},{"vendorId":255,"vendorName":"Onnetwork Sp. z o.o.","policyUrl":"https://www.onnetwork.tv/pp_services.php","deleted":false,"new":false,"id":255},{"vendorId":438,"vendorName":"Ooyala Inc","policyUrl":"https://ooyala.com/privacy","deleted":false,"new":false,"id":438},{"vendorId":69,"vendorName":"OpenX","policyUrl":"https://www.openx.com/legal/privacy-policy/","deleted":false,"new":false,"id":69},{"vendorId":349,"vendorName":"Optomaton UG","policyUrl":"http://optomaton.com/privacy.html","deleted":false,"new":false,"id":349},{"vendorId":385,"vendorName":"Oracle","policyUrl":"https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html","deleted":false,"new":false,"id":385},{"vendorId":464,"vendorName":"Oracle AddThis","policyUrl":"http://www.addthis.com/privacy/privacy-policy/","deleted":false,"new":false,"id":464},{"vendorId":303,"vendorName":"Orion Semantics","policyUrl":"http://static.orion-semantics.com/privacy.html","deleted":false,"new":false,"id":303},{"vendorId":227,"vendorName":"ORTEC B.V.","policyUrl":"https://www.ortecadscience.com/privacy-policy/","deleted":false,"new":false,"id":227},{"vendorId":164,"vendorName":"Outbrain UK Ltd","policyUrl":"https://www.outbrain.com/legal/","deleted":false,"new":false,"id":164},{"vendorId":543,"vendorName":"PaperG, Inc. dba Thunder Industries","policyUrl":"https://www.makethunder.com/privacy","deleted":false,"new":false,"id":543},{"vendorId":390,"vendorName":"Parsec Media Inc.","policyUrl":"http://www.parsec.media/privacy-policy","deleted":false,"new":false,"id":390},{"vendorId":323,"vendorName":"Perform Media Services Ltd","policyUrl":"http://www.performgroup.com/media-privacy-notice","deleted":false,"new":false,"id":323},{"vendorId":139,"vendorName":"Permodo GmbH","policyUrl":"https://permodo.com/de/privacy.html","deleted":false,"new":false,"id":139},{"vendorId":516,"vendorName":"Pexi B.V.","policyUrl":"https://pexi.nl/privacy-policy/","deleted":false,"new":false,"id":516},{"vendorId":480,"vendorName":"pilotx.tv","policyUrl":"https://pilotx.tv/privacy/","deleted":false,"new":false,"id":480},{"vendorId":127,"vendorName":"PIXIMEDIA SAS","policyUrl":"https://piximedia.com/privacy/","deleted":false,"new":false,"id":127},{"vendorId":140,"vendorName":"Platform161","policyUrl":"https://platform161.com/cookie-and-privacy-policy/","deleted":false,"new":false,"id":140},{"vendorId":444,"vendorName":"Playbuzz Ltd. ","policyUrl":"https://www.playbuzz.com/PrivacyPolicy","deleted":false,"new":false,"id":444},{"vendorId":490,"vendorName":"PLAYGROUND XYZ EMEA LTD","policyUrl":"https://playground.xyz/privacy/privacy-policy.pdf","deleted":false,"new":false,"id":490},{"vendorId":177,"vendorName":"plista GmbH","policyUrl":"https://www.plista.com/about/privacy/","deleted":false,"new":false,"id":177},{"vendorId":376,"vendorName":"Pocketmath Pte Ltd","policyUrl":"https://www.pocketmath.com/privacy-policy","deleted":false,"new":false,"id":376},{"vendorId":297,"vendorName":"Polar Mobile Group Inc.","policyUrl":"https://privacy.polar.me","deleted":false,"new":false,"id":297},{"vendorId":236,"vendorName":"PowerLinks Media Limited","policyUrl":"https://www.powerlinks.com/privacy-policy/","deleted":false,"new":false,"id":236},{"vendorId":427,"vendorName":"Proxi.cloud Sp. z o.o.","policyUrl":"https://proxi.cloud/info/privacy-policy/","deleted":false,"new":false,"id":427},{"vendorId":418,"vendorName":"PROXISTORE","policyUrl":"https://www.proxistore.com/common/en/cgv","deleted":false,"new":false,"id":418},{"vendorId":525,"vendorName":"PUB OCEAN LIMITED","policyUrl":"https://rta.pubocean.com/privacy-policy/","deleted":false,"new":false,"id":525},{"vendorId":226,"vendorName":"Publicis Media GmbH","policyUrl":"https://www.publicismedia.de/datenschutz/","deleted":false,"new":false,"id":226},{"vendorId":407,"vendorName":"Publishers Internationale Pty Ltd","policyUrl":"https://www.pi-rate.com.au/privacy.html","deleted":false,"new":false,"id":407},{"vendorId":76,"vendorName":"PubMatic, Inc.","policyUrl":"https://pubmatic.com/privacy-policy/","deleted":false,"new":false,"id":76},{"vendorId":512,"vendorName":"PubNative GmbH","policyUrl":"https://pubnative.net/privacy-notice/","deleted":false,"new":false,"id":512},{"vendorId":81,"vendorName":"PulsePoint, Inc.","policyUrl":"https://www.pulsepoint.com/privacy-policy","deleted":false,"new":false,"id":81},{"vendorId":35,"vendorName":"Purch Group, Inc.","policyUrl":"http://www.purch.com/privacy-policy/","deleted":false,"new":false,"id":35},{"vendorId":499,"vendorName":"PurposeLab, LLC","policyUrl":"https://purposelab.com/privacy/","deleted":false,"new":false,"id":499},{"vendorId":250,"vendorName":"Qriously","policyUrl":"https://www.qriously.com/privacy","deleted":false,"new":false,"id":250},{"vendorId":11,"vendorName":"Quantcast International Limited","policyUrl":"https://www.quantcast.com/privacy/","deleted":false,"new":false,"id":11},{"vendorId":291,"vendorName":"Qwertize","policyUrl":"https://www.qwertize.com/en/privacy","deleted":false,"new":false,"id":291},{"vendorId":442,"vendorName":"R-Advertising","policyUrl":"http://www.tradedoubler.com/en/privacy-policy/","deleted":false,"new":false,"id":442},{"vendorId":60,"vendorName":"Rakuten Marketing LLC","policyUrl":"https://rakutenmarketing.com/legal-notices/services-privacy-policy","deleted":false,"new":false,"id":60},{"vendorId":290,"vendorName":"Readpeak Oy","policyUrl":"http://readpeak.com/privacy-policy/","deleted":false,"new":false,"id":290},{"vendorId":191,"vendorName":"realzeit GmbH","policyUrl":"https://realzeitmedia.com/privacy.html","deleted":false,"new":false,"id":191},{"vendorId":545,"vendorName":"ReigNN Platform Ltd.","policyUrl":"https://www.reignn.com/user-privacy-policy/","deleted":false,"new":false,"id":545},{"vendorId":192,"vendorName":"remerge GmbH","policyUrl":"https://remerge.io/privacy-policy.html","deleted":false,"new":false,"id":192},{"vendorId":125,"vendorName":"Research Now Group, Inc","policyUrl":"https://www.valuedopinions.co.uk/privacy","deleted":false,"new":false,"id":125},{"vendorId":158,"vendorName":"Reveal Mobile, Inc","policyUrl":"https://revealmobile.com/privacy","deleted":false,"new":false,"id":158},{"vendorId":478,"vendorName":"RevLifter Ltd","policyUrl":"https://www.revlifter.com/privacy-policy","deleted":false,"new":false,"id":478},{"vendorId":375,"vendorName":"RevX Inc.","policyUrl":"https://www.revx.io/privacy-policy","deleted":false,"new":false,"id":375},{"vendorId":194,"vendorName":"Rezonence Limited","policyUrl":"https://rezonence.com/privacy-policy/","deleted":false,"new":false,"id":194},{"vendorId":36,"vendorName":"RhythmOne, LLC","policyUrl":"https://www.rhythmone.com/privacy-policy","deleted":false,"new":false,"id":36},{"vendorId":108,"vendorName":"Rich Audience","policyUrl":"https://richaudience.com/privacy/","deleted":false,"new":false,"id":108},{"vendorId":308,"vendorName":"Rockabox Media Ltd","policyUrl":"http://scoota.com/privacy-policy","deleted":false,"new":false,"id":308},{"vendorId":260,"vendorName":"RockYou, Inc.","policyUrl":"https://rockyou.com/privacy-policy/","deleted":false,"new":false,"id":260},{"vendorId":4,"vendorName":"Roq.ad GmbH","policyUrl":"https://www.roq.ad/privacy-policy","deleted":false,"new":false,"id":4},{"vendorId":257,"vendorName":"R-TARGET","policyUrl":"http://www.r-target.com/privacy","deleted":false,"new":false,"id":257},{"vendorId":16,"vendorName":"RTB House S.A.","policyUrl":"https://www.rtbhouse.com/privacy/","deleted":false,"new":false,"id":16},{"vendorId":169,"vendorName":"RTK.IO, Inc","policyUrl":"http://www.rtk.io/privacy.html","deleted":false,"new":false,"id":169},{"vendorId":119,"vendorName":"S4M","policyUrl":"http://www.s4m.io/privacy-policy/","deleted":false,"new":false,"id":119},{"vendorId":506,"vendorName":"salesforce.com, inc.","policyUrl":"https://www.salesforce.com/company/privacy/","deleted":false,"new":false,"id":506},{"vendorId":351,"vendorName":"Samba TV UK Limited","policyUrl":"https://samba.tv/legal/privacy-policy-2-28-2018/","deleted":false,"new":false,"id":351},{"vendorId":269,"vendorName":"Sanoma Media Finland","policyUrl":"https://sanoma.fi/tietoa-meista/tietosuoja/","deleted":false,"new":false,"id":269},{"vendorId":86,"vendorName":"Scene Stealer Limited","policyUrl":"http://scenestealer.tv/privacy-policy/","deleted":false,"new":false,"id":86},{"vendorId":465,"vendorName":"Schibsted Product and Tech UK","policyUrl":"https://www.schibsted.com/","deleted":false,"new":false,"id":465},{"vendorId":157,"vendorName":"Seedtag Advertising S.L","policyUrl":"https://www.seedtag.com/en/privacy-policy/","deleted":false,"new":false,"id":157},{"vendorId":33,"vendorName":"ShareThis, Inc.","policyUrl":"http://www.sharethis.com/privacy/","deleted":false,"new":false,"id":33},{"vendorId":80,"vendorName":"Sharethrough, Inc","policyUrl":"https://platform-cdn.sharethrough.com/privacy-policy","deleted":false,"new":false,"id":80},{"vendorId":337,"vendorName":"SheMedia, LLC","policyUrl":"http://corporate.shemedia.com/faq/ad-services-privacy-policy","deleted":false,"new":false,"id":337},{"vendorId":505,"vendorName":"Shopalyst Inc","policyUrl":"https://www.shortlyst.com/eu/privacy_terms.html","deleted":false,"new":false,"id":505},{"vendorId":513,"vendorName":"Shopstyle","policyUrl":"https://www.shopstyle.co.uk/privacy","deleted":false,"new":false,"id":513},{"vendorId":59,"vendorName":"Sift Media, Inc","policyUrl":"https://www.sift.co/privacy","deleted":false,"new":false,"id":59},{"vendorId":261,"vendorName":"Signal Digital Inc.","policyUrl":"https://www.signal.co/privacy-policy/","deleted":false,"new":false,"id":261},{"vendorId":429,"vendorName":"Signals","policyUrl":"https://signalsdata.com/platform-cookie-policy/","deleted":false,"new":false,"id":429},{"vendorId":73,"vendorName":"Simplifi Holdings Inc.","policyUrl":"https://www.simpli.fi/site-privacy-policy2/","deleted":false,"new":false,"id":73},{"vendorId":435,"vendorName":"SINGLESPOT SAS ","policyUrl":"https://www.singlespot.com/privacy_policy?locale=fr","deleted":false,"new":false,"id":435},{"vendorId":53,"vendorName":"Sirdata","policyUrl":"https://www.sirdata.com/privacy/","deleted":false,"new":false,"id":53},{"vendorId":68,"vendorName":"Sizmek Technologies, Inc. ","policyUrl":"https://www.sizmek.com/privacy-policy/","deleted":false,"new":false,"id":68},{"vendorId":46,"vendorName":"Skimbit Ltd","policyUrl":"https://skimlinks.com/pages/privacy-policy","deleted":false,"new":false,"id":46},{"vendorId":102,"vendorName":"SlimCut Media SAS","policyUrl":"http://www.slimcutmedia.com/privacy-policy/","deleted":false,"new":false,"id":102},{"vendorId":82,"vendorName":"Smaato, Inc.","policyUrl":"https://www.smaato.com/privacy/","deleted":false,"new":false,"id":82},{"vendorId":161,"vendorName":"Smadex SL","policyUrl":"http://smadex.com/end-user-privacy-policy/","deleted":false,"new":false,"id":161},{"vendorId":45,"vendorName":"Smart Adserver","policyUrl":"http://smartadserver.com/company/privacy-policy/","deleted":false,"new":false,"id":45},{"vendorId":546,"vendorName":"Smart Traffik","policyUrl":"https://smart-traffik.io/politique-de-confidentialite","deleted":false,"new":false,"id":546},{"vendorId":531,"vendorName":"Smartclip Hispania SL","policyUrl":"http://rgpd-smartclip.com/","deleted":false,"new":false,"id":531},{"vendorId":115,"vendorName":"smartclip Holding AG","policyUrl":"http://privacy-portal.smartclip.net/","deleted":false,"new":false,"id":115},{"vendorId":134,"vendorName":"SMARTSTREAM.TV GmbH","policyUrl":"https://www.smartstream.tv/en/privacy","deleted":false,"new":false,"id":134},{"vendorId":534,"vendorName":"SmartyAds Inc.","policyUrl":"https://smartyads.com/privacy-policy","deleted":false,"new":false,"id":534},{"vendorId":145,"vendorName":"Snapsort Inc., operating as Sortable","policyUrl":"https://sortable.com/privacy","deleted":false,"new":false,"id":145},{"vendorId":268,"vendorName":"Social Tokens Ltd. ","policyUrl":"http://woobi.com/privacy/","deleted":false,"new":false,"id":268},{"vendorId":295,"vendorName":"Sojern, Inc.","policyUrl":"https://www.sojern.com/privacy/product-privacy-policy/","deleted":false,"new":false,"id":295},{"vendorId":341,"vendorName":"Somo Audience Corp","policyUrl":"https://somoaudience.com/legal/","deleted":false,"new":false,"id":341},{"vendorId":104,"vendorName":"Sonobi, Inc","policyUrl":"http://sonobi.com/privacy-policy/","deleted":false,"new":false,"id":104},{"vendorId":13,"vendorName":"Sovrn Holdings Inc","policyUrl":"https://www.sovrn.com/sovrn-privacy/","deleted":false,"new":false,"id":13},{"vendorId":249,"vendorName":"Spolecznosci Sp. z o.o. Sp. k.","policyUrl":"https://www.spolecznosci.pl/polityka-prywatnosci","deleted":false,"new":false,"id":249},{"vendorId":208,"vendorName":"Spotad","policyUrl":"http://www.spotad.co/privacy-policy/","deleted":false,"new":false,"id":208},{"vendorId":165,"vendorName":"SpotX","policyUrl":"https://www.spotx.tv/privacy-policy/","deleted":false,"new":false,"id":165},{"vendorId":230,"vendorName":"Steel House, Inc.","policyUrl":"https://steelhouse.com/privacy-policy/","deleted":false,"new":false,"id":230},{"vendorId":392,"vendorName":"Ströer Mobile Performance GmbH","policyUrl":"https://stroeermobileperformance.com/?dl=privacy","deleted":false,"new":false,"id":392},{"vendorId":473,"vendorName":"Sub2 Technologies Ltd","policyUrl":"http://www.sub2tech.com/privacy-policy/","deleted":false,"new":false,"id":473},{"vendorId":114,"vendorName":"Sublime Skinz","policyUrl":"http://ayads.co/privacy.php","deleted":false,"new":false,"id":114},{"vendorId":517,"vendorName":"SunMedia ","policyUrl":"https://www.sunmedia.tv/en/cookies","deleted":false,"new":false,"id":517},{"vendorId":197,"vendorName":"Switch Concepts Limited","policyUrl":"https://www.switchconcepts.com/privacy-policy","deleted":false,"new":false,"id":197},{"vendorId":198,"vendorName":"SYNC","policyUrl":"https://redirect.sync.tv/privacy/","deleted":false,"new":false,"id":198},{"vendorId":275,"vendorName":"TabMo SAS","policyUrl":"http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html","deleted":false,"new":false,"id":275},{"vendorId":42,"vendorName":"Taboola Europe Limited","policyUrl":"https://www.taboola.com/privacy-policy","deleted":false,"new":false,"id":42},{"vendorId":466,"vendorName":"TACTIC™ Real-Time Marketing AS","policyUrl":"https://tacticrealtime.com/privacy/","deleted":false,"new":false,"id":466},{"vendorId":89,"vendorName":"Tapad, Inc. ","policyUrl":"https://www.tapad.com/privacy","deleted":false,"new":false,"id":89},{"vendorId":475,"vendorName":"TAPTAP Networks SL","policyUrl":"http://www.taptapnetworks.com/privacy_policy/","deleted":false,"new":false,"id":475},{"vendorId":132,"vendorName":"Teads ","policyUrl":"https://teads.tv/privacy-policy/","deleted":false,"new":false,"id":132},{"vendorId":522,"vendorName":"Tealium Inc","policyUrl":"https://tealium.com/privacy/","deleted":false,"new":false,"id":522},{"vendorId":124,"vendorName":"Teemo SA","policyUrl":"https://teemo.co/fr/confidentialite/","deleted":false,"new":false,"id":124},{"vendorId":202,"vendorName":"Telaria, Inc","policyUrl":"https://telaria.com/privacy-policy/","deleted":false,"new":false,"id":202},{"vendorId":90,"vendorName":"Teroa S.A.","policyUrl":"https://www.e-planning.net/en/privacy.html","deleted":false,"new":false,"id":90},{"vendorId":44,"vendorName":"The ADEX GmbH","policyUrl":"https://www.theadex.com/privacy-opt-out/","deleted":false,"new":false,"id":44},{"vendorId":345,"vendorName":"The Kantar Group Limited","policyUrl":"http://www.kantar.com/cookies-policies","deleted":false,"new":false,"id":345},{"vendorId":524,"vendorName":"The Ozone Project Limited","policyUrl":"https://ozoneproject.com/privacy-policy","deleted":false,"new":false,"id":524},{"vendorId":382,"vendorName":"The Reach Group GmbH","policyUrl":"https://www.reachgroup.com/en/privacy-statement/","deleted":false,"new":false,"id":382},{"vendorId":52,"vendorName":"The Rubicon Project, Limited","policyUrl":"http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/","deleted":false,"new":false,"id":52},{"vendorId":21,"vendorName":"The Trade Desk","policyUrl":"https://www.thetradedesk.com/general/privacy-policy","deleted":false,"new":false,"id":21},{"vendorId":180,"vendorName":"Thirdpresence Oy","policyUrl":"http://www.thirdpresence.com/privacy","deleted":false,"new":false,"id":180},{"vendorId":357,"vendorName":"Totaljobs Group Ltd ","policyUrl":"https://www.totaljobs.com/privacy-policy","deleted":false,"new":false,"id":357},{"vendorId":49,"vendorName":"Tradelab, SAS","policyUrl":"http://tradelab.com/en/privacy/","deleted":false,"new":false,"id":49},{"vendorId":423,"vendorName":"travel audience GmbH","policyUrl":"https://travelaudience.com/product-privacy-policy/","deleted":false,"new":false,"id":423},{"vendorId":88,"vendorName":"TreSensa, Inc.","policyUrl":"https://www.tresensa.com/eu-privacy","deleted":false,"new":false,"id":88},{"vendorId":387,"vendorName":"Triapodi Ltd.","policyUrl":"https://appreciate.mobi/page.html#/end-user-privacy-policy","deleted":false,"new":false,"id":387},{"vendorId":491,"vendorName":"Triboo Data Analytics","policyUrl":"https://www.shinystat.com/it/informativa_sito.html","deleted":false,"new":false,"id":491},{"vendorId":28,"vendorName":"TripleLift, Inc.","policyUrl":"https://triplelift.com/privacy/","deleted":false,"new":false,"id":28},{"vendorId":540,"vendorName":"Tunnl BV","policyUrl":"https://tunnl.com/privacy.html","deleted":false,"new":false,"id":540},{"vendorId":500,"vendorName":"Turbo","policyUrl":"http://www.turboadv.com/white-rabbit-privacy-policy/","deleted":false,"new":false,"id":500},{"vendorId":482,"vendorName":"UberMedia, Inc.","policyUrl":"http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE","deleted":false,"new":false,"id":482},{"vendorId":159,"vendorName":"Underdog Media LLC ","policyUrl":"https://underdogmedia.com/privacy-policy/","deleted":false,"new":false,"id":159},{"vendorId":162,"vendorName":"Unruly Group Ltd","policyUrl":"https://unruly.co/privacy/","deleted":false,"new":false,"id":162},{"vendorId":514,"vendorName":"Uprival LLC","policyUrl":"https://uprival.com/privacy-policy/","deleted":false,"new":false,"id":514},{"vendorId":43,"vendorName":"Vdopia DBA Chocolate Platform","policyUrl":"https://chocolateplatform.com/privacy-policy/","deleted":false,"new":false,"id":43},{"vendorId":368,"vendorName":"VECTAURY","policyUrl":"https://www.vectaury.io/en/personal-data","deleted":false,"new":false,"id":368},{"vendorId":26,"vendorName":"Venatus Media Limited","policyUrl":"https://www.venatusmedia.com/privacy/","deleted":false,"new":false,"id":26},{"vendorId":7,"vendorName":"Vibrant Media Limited","policyUrl":"https://www.vibrantmedia.com/en/privacy-policy/","deleted":false,"new":false,"id":7},{"vendorId":190,"vendorName":"video intelligence AG","policyUrl":"https://www.vi.ai/privacy-policy/","deleted":false,"new":false,"id":190},{"vendorId":288,"vendorName":"Video Media Groep B.V.","policyUrl":"http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf","deleted":false,"new":false,"id":288},{"vendorId":547,"vendorName":"Video Reach","policyUrl":"https://www.videoreach.de/about/privacy-policy/","deleted":false,"new":false,"id":547},{"vendorId":380,"vendorName":"Vidoomy Media SL","policyUrl":"http://vidoomy.com/privacy-policy.html","deleted":false,"new":false,"id":380},{"vendorId":276,"vendorName":"Viralize SRL","policyUrl":"https://viralize.com/privacy-policy","deleted":false,"new":false,"id":276},{"vendorId":83,"vendorName":"Visarity Technologies GmbH","policyUrl":"http://primo.design/docs/PrivacyPolicyPrimo.html","deleted":false,"new":false,"id":83},{"vendorId":339,"vendorName":"Vuble","policyUrl":"https://www.vuble.tv/us/privacy","deleted":false,"new":false,"id":339},{"vendorId":171,"vendorName":"Webedia","policyUrl":"http://www.webedia-group.com/site/privacy-policy","deleted":false,"new":false,"id":171},{"vendorId":400,"vendorName":"Whenever Media Ltd","policyUrl":"https://www.whenevermedia.com/privacy-policy","deleted":false,"new":false,"id":400},{"vendorId":18,"vendorName":"Widespace AB","policyUrl":"https://www.widespace.com/legal/privacy-policy-notice/","deleted":false,"new":false,"id":18},{"vendorId":51,"vendorName":"xAd, Inc. dba GroundTruth","policyUrl":"https://www.groundtruth.com/privacy-policy/","deleted":false,"new":false,"id":51},{"vendorId":523,"vendorName":"X-Mode Social, Inc.","policyUrl":"http://xmode.io/privacy-policy.html","deleted":false,"new":false,"id":523},{"vendorId":489,"vendorName":"YellowHammer Media Group","policyUrl":"http://www.yhmg.com/privacy-policy/","deleted":false,"new":false,"id":489},{"vendorId":173,"vendorName":"Yieldmo, Inc.","policyUrl":"https://www.yieldmo.com/privacy/","deleted":false,"new":false,"id":173},{"vendorId":340,"vendorName":"Yieldr UK","policyUrl":"https://www.yieldr.com/privacy","deleted":false,"new":false,"id":340},{"vendorId":154,"vendorName":"YOC AG","policyUrl":"https://yoc.com/privacy/","deleted":false,"new":false,"id":154},{"vendorId":398,"vendorName":"Yormedia Solutions Ltd","policyUrl":"http://www.yormedia.com/privacy-and-cookies-notice/","deleted":false,"new":false,"id":398},{"vendorId":234,"vendorName":"Zebestof","policyUrl":"http://www.zebestof.com/en/about-us-2/privacy-en/","deleted":false,"new":false,"id":234},{"vendorId":210,"vendorName":"Zemanta, Inc.","policyUrl":"http://www.zemanta.com/legal/privacy","deleted":false,"new":false,"id":210},{"vendorId":321,"vendorName":"Ziff Davis LLC","policyUrl":"http://www.ziffdavis.com/privacy-policy","deleted":false,"new":false,"id":321},{"vendorId":515,"vendorName":"ZighZag","policyUrl":"https://zighzag.com/privacy","deleted":false,"new":false,"id":515}],"iabVendorJson":"{\"lastUpdated\":\"2019-01-03T16:00:17Z\",\"vendorListVersion\":128,\"purposes\":[{\"id\":1,\"name\":\"Information storage and access\",\"description\":\"The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies.\"},{\"id\":2,\"name\":\"Personalisation\",\"description\":\"The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content.\"},{\"id\":3,\"name\":\"Ad selection, delivery, reporting\",\"description\":\"The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time.\"},{\"id\":4,\"name\":\"Content selection, delivery, reporting\",\"description\":\"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time.\"},{\"id\":5,\"name\":\"Measurement\",\"description\":\"The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time.\"}],\"features\":[{\"id\":1,\"name\":\"Matching Data to Offline Sources\",\"description\":\"Combining data from offline sources that were initially collected in other contexts.\"},{\"id\":2,\"name\":\"Linking Devices\",\"description\":\"Allow processing of a user's data to connect such user across multiple devices.\"},{\"id\":3,\"name\":\"Precise Geographic Location Data\",\"description\":\"Allow processing of a user's precise geographic location data in support of a purpose for which that certain third party has consent.\"}],\"vendors\":[{\"policyUrl\":\"https://www.emerse.com/privacy-policy/\",\"purposeIds\":[1,2,4],\"featureIds\":[1,2],\"legIntPurposeIds\":[3,5],\"id\":8,\"name\":\"Emerse Sverige AB\"},{\"policyUrl\":\"https://www.beeswax.com/privacy.html\",\"purposeIds\":[1,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":12,\"name\":\"BeeswaxIO Corporation\"},{\"policyUrl\":\"https://triplelift.com/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":28,\"name\":\"TripleLift, Inc.\"},{\"policyUrl\":\"http://www.admaxim.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":9,\"name\":\"AdMaxim Inc.\"},{\"policyUrl\":\"https://www.adventori.com/with-us/legal-notice/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":27,\"name\":\"ADventori SAS\"},{\"policyUrl\":\"https://policies.oath.com/ie/en/oath/privacy/index.html\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3,5],\"id\":25,\"name\":\"Oath (EMEA) Limited\"},{\"policyUrl\":\"https://www.venatusmedia.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":26,\"name\":\"Venatus Media Limited\"},{\"policyUrl\":\"http://exponential.com/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":1,\"name\":\"Exponential Interactive, Inc\"},{\"policyUrl\":\"http://www.adspirit.de/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":6,\"name\":\"AdSpirit GmbH\"},{\"policyUrl\":\"https://www.bidtheatre.com/privacy-policy\",\"purposeIds\":[2],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,3],\"id\":30,\"name\":\"BidTheatre AB\"},{\"policyUrl\":\"https://www.conversantmedia.eu/legal/privacy-policy\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":24,\"name\":\"Conversant Europe Ltd.\"},{\"policyUrl\":\"https://www.etarget.sk/privacy.php\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":29,\"name\":\"Etarget SE\"},{\"policyUrl\":\"https://www.adition.com/datenschutz\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":39,\"name\":\"ADITION technologies AG\"},{\"policyUrl\":\"https://www.quantcast.com/privacy/\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,3,4,5],\"id\":11,\"name\":\"Quantcast International Limited\"},{\"policyUrl\":\"https://www.adikteev.com/eu/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":15,\"name\":\"Adikteev\"},{\"policyUrl\":\"https://www.roq.ad/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":4,\"name\":\"Roq.ad GmbH\"},{\"policyUrl\":\"https://www.vibrantmedia.com/en/privacy-policy/\",\"purposeIds\":[2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":7,\"name\":\"Vibrant Media Limited\"},{\"policyUrl\":\"http://www.captify.co.uk/privacy-policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":2,\"name\":\"Captify Technologies Limited\"},{\"policyUrl\":\"https://web.neural.one/privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":37,\"name\":\"NEURAL.ONE\"},{\"policyUrl\":\"https://www.sovrn.com/sovrn-privacy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":13,\"name\":\"Sovrn Holdings Inc\"},{\"policyUrl\":\"https://www.neory.com/privacy.html\",\"purposeIds\":[1,2,4,5],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":34,\"name\":\"NEORY GmbH\"},{\"policyUrl\":\"https://www.appnexus.com/en/company/platform-privacy-policy\",\"purposeIds\":[1],\"featureIds\":[2,3],\"legIntPurposeIds\":[3],\"id\":32,\"name\":\"AppNexus Inc.\"},{\"policyUrl\":\"https://www.indexexchange.com/privacy\",\"purposeIds\":[1],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":10,\"name\":\"Index Exchange, Inc. \"},{\"policyUrl\":\"https://adara.com/privacy-promise/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":57,\"name\":\"ADARA MEDIA UNLIMITED\"},{\"policyUrl\":\"http://www.avocet.io/privacy-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3],\"id\":63,\"name\":\"Avocet Systems Limited\"},{\"policyUrl\":\"https://www.groundtruth.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":51,\"name\":\"xAd, Inc. dba GroundTruth\"},{\"policyUrl\":\"http://tradelab.com/en/privacy/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[5],\"id\":49,\"name\":\"Tradelab, SAS\"},{\"policyUrl\":\"http://smartadserver.com/company/privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":45,\"name\":\"Smart Adserver\"},{\"policyUrl\":\"http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[2,3,4,5],\"id\":52,\"name\":\"The Rubicon Project, Limited\"},{\"policyUrl\":\"http://www.purch.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[3,5],\"id\":35,\"name\":\"Purch Group, Inc.\"},{\"policyUrl\":\"https://www.dataxu.com/about-us/privacy/data-collection-platform/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":71,\"name\":\"Dataxu, Inc. \"},{\"policyUrl\":\"http://www.mediamath.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":79,\"name\":\"MediaMath, Inc.\"},{\"policyUrl\":\"https://www.criteo.com/privacy/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":91,\"name\":\"Criteo SA\"},{\"policyUrl\":\"https://crimtan.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":85,\"name\":\"Crimtan Holdings Limited\"},{\"policyUrl\":\"https://www.rtbhouse.com/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":16,\"name\":\"RTB House S.A.\"},{\"policyUrl\":\"http://scenestealer.tv/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":86,\"name\":\"Scene Stealer Limited\"},{\"policyUrl\":\"http://www.blis.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":94,\"name\":\"Blis Media Limited\"},{\"policyUrl\":\"https://www.simpli.fi/site-privacy-policy2/\",\"purposeIds\":[2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[1],\"id\":73,\"name\":\"Simplifi Holdings Inc.\"},{\"policyUrl\":\"http://www.lifestreet.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":67,\"name\":\"LifeStreet Corporation\"},{\"policyUrl\":\"http://www.sharethis.com/privacy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":33,\"name\":\"ShareThis, Inc.\"},{\"policyUrl\":\"https://n.rich/privacy-notice\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":20,\"name\":\"N Technologies Inc.\"},{\"policyUrl\":\"https://www.madisonlogic.com/privacy/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":55,\"name\":\"Madison Logic, Inc.\"},{\"policyUrl\":\"https://www.sirdata.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":53,\"name\":\"Sirdata\"},{\"policyUrl\":\"https://www.openx.com/legal/privacy-policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":69,\"name\":\"OpenX\"},{\"policyUrl\":\"https://www.groupm.com/privacy-policy\",\"purposeIds\":[1,2,3,4],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[5],\"id\":98,\"name\":\"GroupM\"},{\"policyUrl\":\"http://justpremium.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":62,\"name\":\"Justpremium BV\"},{\"policyUrl\":\"https://intentmedia.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[2],\"legIntPurposeIds\":[2,3,4,5],\"id\":19,\"name\":\"Intent Media, Inc.\"},{\"policyUrl\":\"https://chocolateplatform.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":43,\"name\":\"Vdopia DBA Chocolate Platform\"},{\"policyUrl\":\"https://www.rhythmone.com/privacy-policy\",\"purposeIds\":[5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4],\"id\":36,\"name\":\"RhythmOne, LLC\"},{\"policyUrl\":\"https://platform-cdn.sharethrough.com/privacy-policy\",\"purposeIds\":[3,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":80,\"name\":\"Sharethrough, Inc\"},{\"policyUrl\":\"https://www.pulsepoint.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":81,\"name\":\"PulsePoint, Inc.\"},{\"policyUrl\":\"https://www.amobee.com/trust/privacy-guidelines\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":23,\"name\":\"Amobee, Inc. \"},{\"policyUrl\":\"https://m32.media/privacy-cookie-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":75,\"name\":\"M32 Media Inc\"},{\"policyUrl\":\"https://www.lemonpi.io/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":17,\"name\":\"Greenhouse Group BV (with its trademark LemonPI)\"},{\"policyUrl\":\"https://gumgum.com/privacy-policy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":61,\"name\":\"GumGum, Inc.\"},{\"policyUrl\":\"http://www.active-agent.com/de/unternehmen/datenschutzerklaerung/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":40,\"name\":\"Active Agent AG\"},{\"policyUrl\":\"https://pubmatic.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[2,3,4,5],\"id\":76,\"name\":\"PubMatic, Inc.\"},{\"policyUrl\":\"https://www.tapad.com/privacy\",\"purposeIds\":[1],\"featureIds\":[2],\"legIntPurposeIds\":[2,3,5],\"id\":89,\"name\":\"Tapad, Inc. \"},{\"policyUrl\":\"https://skimlinks.com/pages/privacy-policy\",\"purposeIds\":[1,2,3],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":46,\"name\":\"Skimbit Ltd\"},{\"policyUrl\":\"https://www.adsquare.com/privacy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":66,\"name\":\"adsquare GmbH\"},{\"policyUrl\":\"https://impressiondesk.com/privacy-policy/\",\"purposeIds\":[1,3,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":105,\"name\":\"Impression Desk Technologies Limited\"},{\"policyUrl\":\"https://www.adverline.com/privacy/\",\"purposeIds\":[2],\"featureIds\":[],\"legIntPurposeIds\":[1,3],\"id\":41,\"name\":\"Adverline\"},{\"policyUrl\":\"https://www.affili.net/de/footeritem/datenschutz\",\"purposeIds\":[2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":3,\"name\":\"affilinet\"},{\"policyUrl\":\"https://www.smaato.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":82,\"name\":\"Smaato, Inc.\"},{\"policyUrl\":\"https://rakutenmarketing.com/legal-notices/services-privacy-policy\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":60,\"name\":\"Rakuten Marketing LLC\"},{\"policyUrl\":\"http://www.yieldlab.de/meta-navigation/datenschutz/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,3],\"id\":70,\"name\":\"Yieldlab AG\"},{\"policyUrl\":\"https://site.adform.com/privacy-policy-opt-out/\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,3,4,5],\"id\":50,\"name\":\"Adform A/S\"},{\"policyUrl\":\"https://www.inres.sk/pp/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":48,\"name\":\"NetSuccess, s.r.o.\"},{\"policyUrl\":\"https://fifty.io/privacy-policy.php\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":100,\"name\":\"Fifty Technology Limited\"},{\"policyUrl\":\"https://www.thetradedesk.com/general/privacy-policy\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3,5],\"id\":21,\"name\":\"The Trade Desk\"},{\"policyUrl\":\"https://www.dma-institute.com/privacy-compliancy/\",\"purposeIds\":[1,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":110,\"name\":\"Hottraffic BV (DMA Institute)\"},{\"policyUrl\":\"https://www.taboola.com/privacy-policy\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,3,4,5],\"id\":42,\"name\":\"Taboola Europe Limited\"},{\"policyUrl\":\"https://maytrics.com/node/2\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":112,\"name\":\"Maytrics GmbH\"},{\"policyUrl\":\"https://www.comscore.com/About-comScore/Privacy-Policy\",\"purposeIds\":[1,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":77,\"name\":\"comScore, Inc.\"},{\"policyUrl\":\"https://loopme.com/privacy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":109,\"name\":\"LoopMe Ltd\"},{\"policyUrl\":\"https://www.eyeota.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":120,\"name\":\"Eyeota Ptd Ltd\"},{\"policyUrl\":\"http://adloox.com/disclaimer\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":93,\"name\":\"Adloox SA\"},{\"policyUrl\":\"https://teads.tv/privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[1,2],\"legIntPurposeIds\":[3,4,5],\"id\":132,\"name\":\"Teads \"},{\"policyUrl\":\"https://admetrics.io/en/privacy_policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":22,\"name\":\"admetrics GmbH\"},{\"policyUrl\":\"http://www.slimcutmedia.com/privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":102,\"name\":\"SlimCut Media SAS\"},{\"policyUrl\":\"https://richaudience.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":108,\"name\":\"Rich Audience\"},{\"policyUrl\":\"https://www.widespace.com/legal/privacy-policy-notice/\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":18,\"name\":\"Widespace AB\"},{\"policyUrl\":\"https://www.sizmek.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[2],\"legIntPurposeIds\":[2,3,4,5],\"id\":68,\"name\":\"Sizmek Technologies, Inc. \"},{\"policyUrl\":\"http://www.avidglobalmedia.eu/privacy-policy.html\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":122,\"name\":\"Avid Media Ltd\"},{\"policyUrl\":\"https://www.liveramp.com/service-privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":97,\"name\":\"LiveRamp, Inc.\"},{\"policyUrl\":\"http://www.admotion.com/policy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":74,\"name\":\"Admotion SRL\"},{\"policyUrl\":\"http://connectadrealtime.com/privacy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":138,\"name\":\"ConnectAd Realtime GmbH\"},{\"policyUrl\":\"https://www.lotame.com/about-lotame/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":95,\"name\":\"Lotame Solutions, Inc.\"},{\"policyUrl\":\"http://www.nanointeractive.com/privacy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,5],\"id\":72,\"name\":\"Nano Interactive GmbH\"},{\"policyUrl\":\"https://piximedia.com/privacy/\",\"purposeIds\":[1,2,4],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":127,\"name\":\"PIXIMEDIA SAS\"},{\"policyUrl\":\"https://www.stroeer.de/fileadmin/user_upload/Datenschutz.pdf\",\"purposeIds\":[],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,2,3,5],\"id\":136,\"name\":\"Ströer SSP GmbH\"},{\"policyUrl\":\"http://showheroes.com/privacy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[5],\"id\":111,\"name\":\"ShowHeroes GmbH\"},{\"policyUrl\":\"https://www.confiant.com/privacy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":56,\"name\":\"Confiant Inc.\"},{\"policyUrl\":\"https://teemo.co/fr/confidentialite/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":124,\"name\":\"Teemo SA\"},{\"policyUrl\":\"https://yoc.com/privacy/\",\"purposeIds\":[1,2],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":154,\"name\":\"YOC AG\"},{\"policyUrl\":\"https://www.beemray.com/privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":38,\"name\":\"Beemray Oy\"},{\"policyUrl\":\"http://wearemiq.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":101,\"name\":\"MiQ\"},{\"policyUrl\":\"http://admanmedia.com/politica\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":149,\"name\":\"ADman Interactive SL\"},{\"policyUrl\":\"https://www.admedo.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3],\"id\":151,\"name\":\"Admedo Ltd\"},{\"policyUrl\":\"http://madvertise.com/en/gdpr/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":153,\"name\":\"MADVERTISE MEDIA\"},{\"policyUrl\":\"https://underdogmedia.com/privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":159,\"name\":\"Underdog Media LLC \"},{\"policyUrl\":\"https://www.seedtag.com/en/privacy-policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":157,\"name\":\"Seedtag Advertising S.L\"},{\"policyUrl\":\"https://sortable.com/privacy\",\"purposeIds\":[1,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":145,\"name\":\"Snapsort Inc., operating as Sortable\"},{\"policyUrl\":\"https://www.id5.io/privacy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":131,\"name\":\"ID5 Technology SAS\"},{\"policyUrl\":\"https://revealmobile.com/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":158,\"name\":\"Reveal Mobile, Inc\"},{\"policyUrl\":\"https://www.adacado.com/privacy-policy-april-25-2018/\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":147,\"name\":\"One Person Health, Inc. (DBA Adacado)\"},{\"policyUrl\":\"https://www.adrollgroup.com/privacy\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,3],\"id\":130,\"name\":\"AdRoll Inc\"},{\"policyUrl\":\"https://www.iponweb.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":129,\"name\":\"IPONWEB GmbH\"},{\"policyUrl\":\"http://www.bidswitch.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":128,\"name\":\"BIDSWITCH GmbH\"},{\"policyUrl\":\"https://login.rtbmarket.com/gdpr\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":168,\"name\":\"EASYmedia GmbH\"},{\"policyUrl\":\"https://www.outbrain.com/legal/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[1],\"legIntPurposeIds\":[4],\"id\":164,\"name\":\"Outbrain UK Ltd\"},{\"policyUrl\":\"https://districtm.net/en/page/platforms-data-and-privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":144,\"name\":\"district m inc.\"},{\"policyUrl\":\"https://bombora.com/privacy\",\"purposeIds\":[1,2],\"featureIds\":[1,2],\"legIntPurposeIds\":[3,4,5],\"id\":163,\"name\":\"Bombora Inc.\"},{\"policyUrl\":\"https://www.yieldmo.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":173,\"name\":\"Yieldmo, Inc.\"},{\"policyUrl\":\"https://www.tresensa.com/eu-privacy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[2,3],\"id\":88,\"name\":\"TreSensa, Inc.\"},{\"policyUrl\":\"http://www.flashtalking.com/privacypolicy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":78,\"name\":\"Flashtalking, Inc.\"},{\"policyUrl\":\"https://www.sift.co/privacy\",\"purposeIds\":[1,2,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":59,\"name\":\"Sift Media, Inc\"},{\"policyUrl\":\"http://ayads.co/privacy.php\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":114,\"name\":\"Sublime Skinz\"},{\"policyUrl\":\"http://fortvision.com/POC/index.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":175,\"name\":\"FORTVISION\"},{\"policyUrl\":\"https://digitalaudience.io/legal/privacy-cookies/\",\"purposeIds\":[1,3,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":133,\"name\":\"digitalAudience\"},{\"policyUrl\":\"http://adkernel.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":14,\"name\":\"Adkernel LLC\"},{\"policyUrl\":\"http://www.thirdpresence.com/privacy\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[3],\"id\":180,\"name\":\"Thirdpresence Oy\"},{\"policyUrl\":\"https://emxdigital.com/privacy/\",\"purposeIds\":[1,2],\"featureIds\":[2,3],\"legIntPurposeIds\":[3,4,5],\"id\":183,\"name\":\"EMX Digital LLC\"},{\"policyUrl\":\"http://www.33across.com/privacy-policy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":58,\"name\":\"33Across\"},{\"policyUrl\":\"https://platform161.com/cookie-and-privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":140,\"name\":\"Platform161\"},{\"policyUrl\":\"https://www.e-planning.net/en/privacy.html\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[2,3,4,5],\"id\":90,\"name\":\"Teroa S.A.\"},{\"policyUrl\":\"https://www.ericsson-emodo.com/privacy-policy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[3],\"legIntPurposeIds\":[5],\"id\":141,\"name\":\"1020, Inc. dba Placecast and Ericsson Emodo\"},{\"policyUrl\":\"https://www.media.net/en/privacy-policy\",\"purposeIds\":[1,2],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":142,\"name\":\"Media.net Advertising FZ-LLC\"},{\"policyUrl\":\"http://www.deltaprojects.com/data-collection-policy/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[2,3,5],\"id\":209,\"name\":\"Delta Projects AB\"},{\"policyUrl\":\"http://www.advanced-store.com/de/datenschutz/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3],\"id\":195,\"name\":\"advanced store GmbH\"},{\"policyUrl\":\"https://www.switchconcepts.com/privacy-policy\",\"purposeIds\":[1,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":197,\"name\":\"Switch Concepts Limited\"},{\"policyUrl\":\"https://www.vi.ai/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":190,\"name\":\"video intelligence AG\"},{\"policyUrl\":\"http://www.semasio.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,4,5],\"id\":84,\"name\":\"Semasio GmbH\"},{\"policyUrl\":\"https://www.locationsciences.ai/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":65,\"name\":\"Location Sciences AI Ltd\"},{\"policyUrl\":\"http://www.zemanta.com/legal/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":210,\"name\":\"Zemanta, Inc.\"},{\"policyUrl\":\"https://www.tapjoy.com/legal/#privacy-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":200,\"name\":\"Tapjoy, Inc.\"},{\"policyUrl\":\"https://retargeter.com/service-privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":188,\"name\":\"Sellpoints Inc.\"},{\"policyUrl\":\"https://www.ipromote.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3],\"id\":217,\"name\":\"2KDirect, Inc. (dba iPromote)\"},{\"policyUrl\":\"https://www.centro.net/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[1],\"legIntPurposeIds\":[2,3,4,5],\"id\":156,\"name\":\"Centro, Inc.\"},{\"policyUrl\":\"https://rezonence.com/privacy-policy/\",\"purposeIds\":[3,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":194,\"name\":\"Rezonence Limited\"},{\"policyUrl\":\"https://www.publicismedia.de/datenschutz/\",\"purposeIds\":[1],\"featureIds\":[1],\"legIntPurposeIds\":[2,3,4,5],\"id\":226,\"name\":\"Publicis Media GmbH\"},{\"policyUrl\":\"https://redirect.sync.tv/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":198,\"name\":\"SYNC\"},{\"policyUrl\":\"https://www.ortecadscience.com/privacy-policy/\",\"purposeIds\":[2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,3,4,5],\"id\":227,\"name\":\"ORTEC B.V.\"},{\"policyUrl\":\"https://www.ligatus.com/en/privacy-policy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,5],\"id\":225,\"name\":\"Ligatus GmbH\"},{\"policyUrl\":\"http://adssets.com/policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[3,5],\"id\":205,\"name\":\"Adssets AB\"},{\"policyUrl\":\"https://www.timeincuk.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":179,\"name\":\"Collective Europe Ltd.\"},{\"policyUrl\":\"https://www.ogury.com/privacy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":31,\"name\":\"Ogury Ltd.\"},{\"policyUrl\":\"https://www.1plusx.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":92,\"name\":\"1plusX AG\"},{\"policyUrl\":\"https://www.antvoice.com/en/privacypolicy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":155,\"name\":\"AntVoice\"},{\"policyUrl\":\"http://privacy-portal.smartclip.net/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,5],\"id\":115,\"name\":\"smartclip Holding AG\"},{\"policyUrl\":\"https://www.doubleverify.com/privacy/\",\"purposeIds\":[5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":126,\"name\":\"DoubleVerify Inc.​\"},{\"policyUrl\":\"http://mediasmart.io/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":193,\"name\":\"Mediasmart Mobile S.L.\"},{\"policyUrl\":\"https://www.ignitionone.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":245,\"name\":\"IgnitionOne\"},{\"policyUrl\":\"https://www.emetriq.com/datenschutz/\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,2,3,5],\"id\":213,\"name\":\"emetriq GmbH\"},{\"policyUrl\":\"https://temelio.com/vie-privee\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":244,\"name\":\"Leadplace - Temelio\"},{\"policyUrl\":\"https://www.adrule.net/de/datenschutz/\",\"purposeIds\":[2,4],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,5],\"id\":224,\"name\":\"adrule mobile GmbH\"},{\"policyUrl\":\"https://www.amillionads.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":174,\"name\":\"A Million Ads Limited\"},{\"policyUrl\":\"https://remerge.io/privacy-policy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":192,\"name\":\"remerge GmbH\"},{\"policyUrl\":\"http://rockerbox.com/privacy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,5],\"id\":232,\"name\":\"Rockerbox, Inc\"},{\"policyUrl\":\"https://www.bouncex.com/privacy/\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,4,5],\"id\":256,\"name\":\"Bounce Exchange, Inc\"},{\"policyUrl\":\"http://www.zebestof.com/en/about-us-2/privacy-en/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2],\"legIntPurposeIds\":[5],\"id\":234,\"name\":\"Zebestof\"},{\"policyUrl\":\"https://www.smartology.net/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":246,\"name\":\"Smartology Limited\"},{\"policyUrl\":\"https://www.onetag.net/privacy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[5],\"id\":241,\"name\":\"OneTag Ltd\"},{\"policyUrl\":\"https://liquidm.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,5],\"id\":254,\"name\":\"LiquidM Technology GmbH\"},{\"policyUrl\":\"https://armis.tech/en/armis-personal-data-privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3],\"id\":215,\"name\":\"ARMIS SAS\"},{\"policyUrl\":\"http://www.audiens.com/privacy\",\"purposeIds\":[1,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":167,\"name\":\"Audiens S.r.l.\"},{\"policyUrl\":\"https://zergnet.com/privacy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,4,5],\"id\":240,\"name\":\"7Hops.com Inc. (ZergNet)\"},{\"policyUrl\":\"http://www.bucksense.com/platform-privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":235,\"name\":\"Bucksense Inc\"},{\"policyUrl\":\"https://www.bidtellect.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":185,\"name\":\"Bidtellect, Inc\"},{\"policyUrl\":\"https://www.adello.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,5],\"id\":258,\"name\":\"Adello Group AG\"},{\"policyUrl\":\"http://www.rtk.io/privacy.html\",\"purposeIds\":[1,4],\"featureIds\":[1,3],\"legIntPurposeIds\":[2,3,5],\"id\":169,\"name\":\"RTK.IO, Inc\"},{\"policyUrl\":\"http://www.spotad.co/privacy-policy/\",\"purposeIds\":[2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":208,\"name\":\"Spotad\"},{\"policyUrl\":\"http://adtheorent.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":211,\"name\":\"AdTheorent, Inc\"},{\"policyUrl\":\"http://www.digitize.ie/online-privacy\",\"purposeIds\":[2,4],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":229,\"name\":\"Digitize New Media Ltd\"},{\"policyUrl\":\"https://www.bannerflow.com/privacy \",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":273,\"name\":\"Bannerflow AB\"},{\"policyUrl\":\"http://sonobi.com/privacy-policy/\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3],\"id\":104,\"name\":\"Sonobi, Inc\"},{\"policyUrl\":\"https://unruly.co/privacy/\",\"purposeIds\":[2],\"featureIds\":[1],\"legIntPurposeIds\":[1,3,5],\"id\":162,\"name\":\"Unruly Group Ltd\"},{\"policyUrl\":\"https://www.spolecznosci.pl/polityka-prywatnosci\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":249,\"name\":\"Spolecznosci Sp. z o.o. Sp. k.\"},{\"policyUrl\":\"https://www.iotecglobal.com/privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":113,\"name\":\"iotec global Ltd.\"},{\"policyUrl\":\"https://www.valuedopinions.co.uk/privacy\",\"purposeIds\":[1,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":125,\"name\":\"Research Now Group, Inc\"},{\"policyUrl\":\"https://goodwaygroup.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":170,\"name\":\"Goodway Group, Inc.\"},{\"policyUrl\":\"http://spoldzielnia.nsaudience.pl/opt-out/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":160,\"name\":\"Netsprint SA\"},{\"policyUrl\":\"http://www.intowow.com/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":189,\"name\":\"Intowow Innovation Ltd.\"},{\"policyUrl\":\"https://wwwmirando.de/datenschutz/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":279,\"name\":\"Mirando GmbH &amp; Co KG\"},{\"policyUrl\":\"https://sanoma.fi/tietoa-meista/tietosuoja/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":269,\"name\":\"Sanoma Media Finland\"},{\"policyUrl\":\"https://viralize.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":276,\"name\":\"Viralize SRL\"},{\"policyUrl\":\"http://www.geniussports.com/privacy-policy/\",\"purposeIds\":[2,4],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,3,5],\"id\":87,\"name\":\"Genius Sports Media Limited\"},{\"policyUrl\":\"https://www.vistohub.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":182,\"name\":\"Collective, Inc. dba Visto\"},{\"policyUrl\":\"https://www.onnetwork.tv/pp_services.php\",\"purposeIds\":[2,3,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":255,\"name\":\"Onnetwork Sp. z o.o.\"},{\"policyUrl\":\"https://faq.revcontent.com/customer/en/portal/articles/2703838-revcontent-s-privacy-and-cookie-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":203,\"name\":\"Revcontent, LLC\"},{\"policyUrl\":\"https://rockyou.com/privacy-policy/\",\"purposeIds\":[3],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,5],\"id\":260,\"name\":\"RockYou, Inc.\"},{\"policyUrl\":\"http://www.lkqd.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":237,\"name\":\"LKQD, a division of Nexstar Digital, LLC.\"},{\"policyUrl\":\"http://goldenbees.fr/notre-politique-de-confidentialite/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":274,\"name\":\"Golden Bees\"},{\"policyUrl\":\"http://spot.im/privacy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":280,\"name\":\"Spot.IM Ltd.\"},{\"policyUrl\":\"https://www.tritondigital.com/privacy-policies\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":239,\"name\":\"Triton Digital Canada Inc.\"},{\"policyUrl\":\"https://www.plista.com/about/privacy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":177,\"name\":\"plista GmbH\"},{\"policyUrl\":\"https://privacy.timeonegroup.com/en/\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":201,\"name\":\"TimeOne\"},{\"policyUrl\":\"http://www.inskinmedia.com/privacy-policy.html\",\"purposeIds\":[3],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":150,\"name\":\"Inskin Media LTD\"},{\"policyUrl\":\"https://www.jadudamobile.com/datenschutzerklaerung/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":252,\"name\":\"Jaduda GmbH\"},{\"policyUrl\":\"https://converge-digital.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[3,4,5],\"id\":248,\"name\":\"Converge-Digital\"},{\"policyUrl\":\"http://smadex.com/end-user-privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":161,\"name\":\"Smadex SL\"},{\"policyUrl\":\"http://freewheel.tv/privacy-policy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":285,\"name\":\"Comcast International France SAS\"},{\"policyUrl\":\"https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":228,\"name\":\"McCann Discipline LTD\"},{\"policyUrl\":\"https://www.adclear.de/datenschutzerklaerung/\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":299,\"name\":\"AdClear GmbH\"},{\"policyUrl\":\"https://voluumdsp.com/end-user-privacy-policy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[1,2],\"legIntPurposeIds\":[5],\"id\":277,\"name\":\"Codewise Sp. z o.o. Sp. k\"},{\"policyUrl\":\"https://www.adyoulike.com/privacy_policy.php\",\"purposeIds\":[2,4],\"featureIds\":[],\"legIntPurposeIds\":[1,3,5],\"id\":259,\"name\":\"ADYOULIKE SA\"},{\"policyUrl\":\"https://www.mobalo.com/datenschutz/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":289,\"name\":\"mobalo GmbH\"},{\"policyUrl\":\"https://www.we-are-adot.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":272,\"name\":\"A.Mob\"},{\"policyUrl\":\"https://steelhouse.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":230,\"name\":\"Steel House, Inc.\"},{\"policyUrl\":\"https://www.improvedigital.com/platform-privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":253,\"name\":\"Improve Digital International BV\"},{\"policyUrl\":\"https://s.on-device.com/privacyPolicy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":304,\"name\":\"On Device Research Limited\"},{\"policyUrl\":\"https://www.keymantics.com/assets/privacy-policy.pdf\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":314,\"name\":\"Keymantics\"},{\"policyUrl\":\"http://www.r-target.com/privacy\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":257,\"name\":\"R-TARGET\"},{\"policyUrl\":\"http://www.mainad.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":317,\"name\":\"mainADV Srl\"},{\"policyUrl\":\"https://integralads.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":278,\"name\":\"Integral Ad Science, Inc.\"},{\"policyUrl\":\"https://www.qwertize.com/en/privacy\",\"purposeIds\":[1,2,4],\"featureIds\":[],\"legIntPurposeIds\":[3,5],\"id\":291,\"name\":\"Qwertize\"},{\"policyUrl\":\"https://www.sojern.com/privacy/product-privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":295,\"name\":\"Sojern, Inc.\"},{\"policyUrl\":\"https://www.celtra.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":315,\"name\":\"Celtra, Inc.\"},{\"policyUrl\":\"https://www.spotx.tv/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":165,\"name\":\"SpotX\"},{\"policyUrl\":\"http://www.adman.gr/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":47,\"name\":\"ADMAN - Phaistos Networks, S.A.\"},{\"policyUrl\":\"https://www.smartstream.tv/en/privacy\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":134,\"name\":\"SMARTSTREAM.TV GmbH\"},{\"policyUrl\":\"https://www.knorex.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":325,\"name\":\"Knorex Pte Ltd\"},{\"policyUrl\":\"https://www.gamned.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":316,\"name\":\"Gamned\"},{\"policyUrl\":\"http://www.instytut-pollster.pl/privacy-policy/\",\"purposeIds\":[2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":318,\"name\":\"Accorp Sp. z o.o.\"},{\"policyUrl\":\"http://www.adux.com/donnees-personelles/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":199,\"name\":\"ADUX\"},{\"policyUrl\":\"https://www.powerlinks.com/privacy-policy/\",\"purposeIds\":[1,2,5],\"featureIds\":[3],\"legIntPurposeIds\":[3,4],\"id\":236,\"name\":\"PowerLinks Media Limited\"},{\"policyUrl\":\"https://www.jivox.com/privacy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":294,\"name\":\"Jivox Corporation\"},{\"policyUrl\":\"https://connatix.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":143,\"name\":\"Connatix Native Exchange Inc.\"},{\"policyUrl\":\"https://privacy.polar.me\",\"purposeIds\":[2],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":297,\"name\":\"Polar Mobile Group Inc.\"},{\"policyUrl\":\"https://clipcentric.com/privacy.bhtml\",\"purposeIds\":[1,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":319,\"name\":\"Clipcentric, Inc.\"},{\"policyUrl\":\"http://readpeak.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":290,\"name\":\"Readpeak Oy\"},{\"policyUrl\":\"http://www.performgroup.com/media-privacy-notice\",\"purposeIds\":[2],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,3,4,5],\"id\":323,\"name\":\"Perform Media Services Ltd\"},{\"policyUrl\":\"http://www.s4m.io/privacy-policy/\",\"purposeIds\":[2],\"featureIds\":[1,3],\"legIntPurposeIds\":[1,3],\"id\":119,\"name\":\"S4M\"},{\"policyUrl\":\"https://mobpro.com/privacy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":302,\"name\":\"Mobile Professionals BV\"},{\"policyUrl\":\"http://www.usemax.de/?l=privacy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":212,\"name\":\"usemax advertisement (Emego GmbH)\"},{\"policyUrl\":\"https://www.adobe.com/nz/privacy/marketing-cloud.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":264,\"name\":\"Adobe Advertising Cloud\"},{\"policyUrl\":\"https://videologygroup.com/en/privacy-policy\",\"purposeIds\":[],\"featureIds\":[1],\"legIntPurposeIds\":[1,2,3,5],\"id\":309,\"name\":\"Videology Ltd.\"},{\"policyUrl\":\"https://www.theadex.com/privacy-opt-out/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":44,\"name\":\"The ADEX GmbH\"},{\"policyUrl\":\"https://www.welect.de/datenschutz\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":282,\"name\":\"Welect GmbH\"},{\"policyUrl\":\"https://www.stackadapt.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":238,\"name\":\"StackAdapt\"},{\"policyUrl\":\"https://weborama.com/privacy_en/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":284,\"name\":\"WEBORAMA\"},{\"policyUrl\":\"https://liveintent.com/services-privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":148,\"name\":\"Liveintent Inc.\"},{\"policyUrl\":\"http://www.digitru.st/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":64,\"name\":\"DigiTrust / IAB Tech Lab\"},{\"policyUrl\":\"https://www.zeotap.com/privacy_policy/\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":301,\"name\":\"zeotap GmbH\"},{\"policyUrl\":\"http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html\",\"purposeIds\":[1,2,3],\"featureIds\":[1,3],\"legIntPurposeIds\":[],\"id\":275,\"name\":\"TabMo SAS\"},{\"policyUrl\":\"https://www.vibbo.com/privacidad.htm?ca=0_s\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[4],\"id\":310,\"name\":\"Schibsted Classified Media Spain, S.L.\"},{\"policyUrl\":\"https://permodo.com/de/privacy.html\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":139,\"name\":\"Permodo GmbH\"},{\"policyUrl\":\"http://www.adtiming.com/en/privacypolicy.html\",\"purposeIds\":[3,5],\"featureIds\":[],\"legIntPurposeIds\":[1,2,4],\"id\":326,\"name\":\"AdTiming Technology Company Limited\"},{\"policyUrl\":\"https://www.fyber.com/legal/privacy-policy/\",\"purposeIds\":[3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":262,\"name\":\"Fyber \"},{\"policyUrl\":\"https://www.ad6media.fr/privacy\",\"purposeIds\":[1,2,4],\"featureIds\":[2,3],\"legIntPurposeIds\":[3,5],\"id\":331,\"name\":\"ad6media\"},{\"policyUrl\":\"http://www.kantar.com/cookies-policies\",\"purposeIds\":[1,3,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":345,\"name\":\"The Kantar Group Limited\"},{\"policyUrl\":\"http://scoota.com/privacy-policy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[2,3],\"id\":308,\"name\":\"Rockabox Media Ltd\"},{\"policyUrl\":\"https://www.marfeel.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":270,\"name\":\"Marfeel Solutions S.L\"},{\"policyUrl\":\"https://www.inmobi.com/privacy-policy-for-eea\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":333,\"name\":\"InMobi Pte Ltd\"},{\"policyUrl\":\"https://telaria.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":202,\"name\":\"Telaria, Inc\"},{\"policyUrl\":\"https://www.gemius.com/cookie-policy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":328,\"name\":\"Gemius SA\"},{\"policyUrl\":\"https://www.wizaly.com/terms-of-use#privacy-policy\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,5],\"id\":281,\"name\":\"Wizaly\"},{\"policyUrl\":\"https://apester.com/privacy-policy/\",\"purposeIds\":[2],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":354,\"name\":\"Apester Ltd\"},{\"policyUrl\":\"https://adelphic.com/platform/privacy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":320,\"name\":\"Adelphic LLC\"},{\"policyUrl\":\"https://www.aerserv.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":359,\"name\":\"Aerserv LLC\"},{\"policyUrl\":\"https://instinctive.io/privacy\",\"purposeIds\":[2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":265,\"name\":\"Instinctive, Inc.\"},{\"policyUrl\":\"http://optomaton.com/privacy.html\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":349,\"name\":\"Optomaton UG\"},{\"policyUrl\":\"http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf\",\"purposeIds\":[2],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":288,\"name\":\"Video Media Groep B.V.\"},{\"policyUrl\":\"https://www.digilant.com/es/politica-privacidad/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":266,\"name\":\"Digilant Spain, SLU\"},{\"policyUrl\":\"https://www.vuble.tv/us/privacy\",\"purposeIds\":[2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":339,\"name\":\"Vuble\"},{\"policyUrl\":\"http://static.orion-semantics.com/privacy.html\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":303,\"name\":\"Orion Semantics\"},{\"policyUrl\":\"https://www.signal.co/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":261,\"name\":\"Signal Digital Inc.\"},{\"policyUrl\":\"http://primo.design/docs/PrivacyPolicyPrimo.html\",\"purposeIds\":[5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":83,\"name\":\"Visarity Technologies GmbH\"},{\"policyUrl\":\"https://www.ultimedia.com/POLICY.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":343,\"name\":\"DIGITEKA Technologies\"},{\"policyUrl\":\"https://www.linicom.com/privacy/\",\"purposeIds\":[2],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":330,\"name\":\"Linicom\"},{\"policyUrl\":\"https://www.acuityads.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":231,\"name\":\"Acuityads Inc.\"},{\"policyUrl\":\"http://mindlytix.com/privacy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":216,\"name\":\"Mindlytix SAS\"},{\"policyUrl\":\"https://permutive.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1],\"id\":360,\"name\":\"Permutive, Inc.\"},{\"policyUrl\":\"https://permutive.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1],\"id\":361,\"name\":\"Onlysix Limited\"},{\"policyUrl\":\"https://www.mobfox.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":311,\"name\":\"Mobfox US LLC\"},{\"policyUrl\":\"https://www.mgid.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":358,\"name\":\"MGID Inc.\"},{\"policyUrl\":\"https://www.meetrics.com/en/data-privacy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":152,\"name\":\"Meetrics GmbH\"},{\"policyUrl\":\"http://www.yieldlove.com/cookie-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":251,\"name\":\"Yieldlove GmbH\"},{\"policyUrl\":\"http://seeding-alliance.de/datenschutz\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":371,\"name\":\"Seeding Alliance GmbH\"},{\"policyUrl\":\"https://my6sense.com/privacy-policy/\",\"purposeIds\":[1,3,5],\"featureIds\":[],\"legIntPurposeIds\":[2,4],\"id\":344,\"name\":\"My6sense Inc.\"},{\"policyUrl\":\"https://www.ezoic.com/terms/\",\"purposeIds\":[2,4,5],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":347,\"name\":\"Ezoic Inc.\"},{\"policyUrl\":\"http://www.bigabid.com/data-protection/gdpr\",\"purposeIds\":[],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":218,\"name\":\"Bigabid Media Ltd\"},{\"policyUrl\":\"https://samba.tv/legal/privacy-policy-2-28-2018/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":350,\"name\":\"Free Stream Media Corp. dba Samba TV\"},{\"policyUrl\":\"https://samba.tv/legal/privacy-policy-2-28-2018/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":351,\"name\":\"Samba TV UK Limited\"},{\"policyUrl\":\"https://somoaudience.com/legal/\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3],\"id\":341,\"name\":\"Somo Audience Corp\"},{\"policyUrl\":\"https://realzeitmedia.com/privacy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":191,\"name\":\"realzeit GmbH\"},{\"policyUrl\":\"http://vidoomy.com/privacy-policy.html\",\"purposeIds\":[1,2],\"featureIds\":[2,3],\"legIntPurposeIds\":[3,4,5],\"id\":380,\"name\":\"Vidoomy Media SL\"},{\"policyUrl\":\"https://www.communicationads.net/aboutus/privacy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":378,\"name\":\"communicationAds GmbH &amp; Co. KG\"},{\"policyUrl\":\"https://getintent.com/privacy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":369,\"name\":\"Getintent USA, inc.\"},{\"policyUrl\":\"http://www.mediarithmics.com/en/data-privacy.html\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":184,\"name\":\"mediarithmics SAS\"},{\"policyUrl\":\"https://www.vectaury.io/en/personal-data\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":368,\"name\":\"VECTAURY\"},{\"policyUrl\":\"http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html\",\"purposeIds\":[1,2],\"featureIds\":[1,2],\"legIntPurposeIds\":[5],\"id\":373,\"name\":\"Nielsen Marketing Cloud\"},{\"policyUrl\":\"http://advolution.de/privacy.php\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":214,\"name\":\"Digital Control GmbH &amp; Co. KG\"},{\"policyUrl\":\"http://ads.1000mercis.com/fr.html\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":388,\"name\":\"1000mercis\"},{\"policyUrl\":\"https://www.qriously.com/privacy\",\"purposeIds\":[2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":250,\"name\":\"Qriously\"},{\"policyUrl\":\"https://atp.io/privacy-policy\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,5],\"id\":223,\"name\":\"Audience Trading Platform Ltd.\"},{\"policyUrl\":\"http://pixalate.com/privacypolicy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":384,\"name\":\"Pixalate, Inc.\"},{\"policyUrl\":\"https://appreciate.mobi/page.html#/end-user-privacy-policy\",\"purposeIds\":[1,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":387,\"name\":\"Triapodi Ltd.\"},{\"policyUrl\":\"https://www.exactag.com/en/data-privacy/\",\"purposeIds\":[1,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":312,\"name\":\"Exactag GmbH\"},{\"policyUrl\":\"https://affectv.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":178,\"name\":\"Affectv Ltd\"},{\"policyUrl\":\"https://www.addapptr.com/data-privacy\",\"purposeIds\":[1,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":377,\"name\":\"AddApptr GmbH\"},{\"policyUrl\":\"https://www.reachgroup.com/en/privacy-statement/\",\"purposeIds\":[1,2,4,5],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":382,\"name\":\"The Reach Group GmbH\"},{\"policyUrl\":\"https://hybrid.ai/data_protection_policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":206,\"name\":\"Hybrid Adtech GmbH\"},{\"policyUrl\":\"https://www.mobusi.com/privacy.en.html\",\"purposeIds\":[1,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":403,\"name\":\"Mobusi Mobile Advertising S.L.\"},{\"policyUrl\":\"https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":385,\"name\":\"Oracle\"},{\"policyUrl\":\"https://www.easy-ads.com/privacypolicy.htm\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":404,\"name\":\"Duplo Media AS\"},{\"policyUrl\":\"https://www.twiago.com/datenschutz/\",\"purposeIds\":[],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":242,\"name\":\"twiago GmbH\"},{\"policyUrl\":\"https://www.pocketmath.com/privacy-policy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":376,\"name\":\"Pocketmath Pte Ltd\"},{\"policyUrl\":\"https://inter.effiliation.com/politique-confidentialite.html\",\"purposeIds\":[2,3,4,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":402,\"name\":\"Effiliation\"},{\"policyUrl\":\"https://www.eulerian.com/en/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":413,\"name\":\"Eulerian Technologies\"},{\"policyUrl\":\"http://seenergy.com/privacy.html\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,5],\"id\":391,\"name\":\"Seenergy Netherlands B.V.\"},{\"policyUrl\":\"https://www.whenevermedia.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":400,\"name\":\"Whenever Media Ltd\"},{\"policyUrl\":\"http://www.webedia-group.com/site/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":171,\"name\":\"Webedia\"},{\"policyUrl\":\"http://www.yormedia.com/privacy-and-cookies-notice/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":398,\"name\":\"Yormedia Solutions Ltd\"},{\"policyUrl\":\"https://seenthis.co/privacy-notice-2018-04-18.pdf\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1],\"id\":415,\"name\":\"Seenthis AB\"},{\"policyUrl\":\"https://www.nativo.com/interest-based-ads\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":263,\"name\":\"Nativo, Inc.\"},{\"policyUrl\":\"http://gobrowsi.com/browsi-privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":329,\"name\":\"Browsi Mobile Ltd\"},{\"policyUrl\":\"http://www.parsec.media/privacy-policy\",\"purposeIds\":[1,3],\"featureIds\":[1,3],\"legIntPurposeIds\":[5],\"id\":390,\"name\":\"Parsec Media Inc.\"},{\"policyUrl\":\"https://www.adspert.net/en/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":389,\"name\":\"Bidmanagement GmbH\"},{\"policyUrl\":\"http://corporate.shemedia.com/faq/ad-services-privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":337,\"name\":\"SheMedia, LLC\"},{\"policyUrl\":\"https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":422,\"name\":\"Brand Metrics Sweden AB\"},{\"policyUrl\":\"https://liqwid.solutions/privacy-policy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":421,\"name\":\"LeftsnRight, Inc. dba LIQWID\"},{\"policyUrl\":\"https://tradetracker.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,3,5],\"id\":426,\"name\":\"TradeTracker\"},{\"policyUrl\":\"https://privacy.audienceproject.com\",\"purposeIds\":[1,2],\"featureIds\":[1,2],\"legIntPurposeIds\":[3,4,5],\"id\":394,\"name\":\"AudienceProject Aps\"},{\"policyUrl\":\"http://avazuinc.com/opt-out/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,4],\"id\":287,\"name\":\"Avazu Inc.\"},{\"policyUrl\":\"http://onaudience.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":243,\"name\":\"Cloud Technologies S.A.\"},{\"policyUrl\":\"https://www.sociomantic.com/privacy/en/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":338,\"name\":\"dunnhumby Germany GmbH\"},{\"policyUrl\":\"https://www.isitelab.io/default.aspx\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,3,4,5],\"id\":405,\"name\":\"IgnitionAi Ltd\"},{\"policyUrl\":\"https://www.commandersact.com/en/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":416,\"name\":\"Commanders Act\"},{\"policyUrl\":\"http://eu.dynadmic.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[1,3],\"legIntPurposeIds\":[2,4],\"id\":434,\"name\":\"DynAdmic\"},{\"policyUrl\":\"https://www.singlespot.com/privacy_policy?locale=fr\",\"purposeIds\":[1,2,3],\"featureIds\":[1,3],\"legIntPurposeIds\":[],\"id\":435,\"name\":\"SINGLESPOT SAS \"},{\"policyUrl\":\"https://www.arrivalist.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,3,5],\"id\":409,\"name\":\"Arrivalist Co.\"},{\"policyUrl\":\"http://www.ziffdavis.com/privacy-policy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":321,\"name\":\"Ziff Davis LLC\"},{\"policyUrl\":\"http://www.invibes.com/terms\",\"purposeIds\":[2,3,4],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,5],\"id\":436,\"name\":\"INVIBES GROUP\"},{\"policyUrl\":\"http://www.tradedoubler.com/en/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":442,\"name\":\"R-Advertising\"},{\"policyUrl\":\"http://www.myntelligence.com/privacy-page/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":362,\"name\":\"Myntelligence Limited\"},{\"policyUrl\":\"https://www.proxistore.com/common/en/cgv\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[3],\"id\":418,\"name\":\"PROXISTORE\"},{\"policyUrl\":\"https://mobilejourney.com/Privacy-Policy\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,5],\"id\":449,\"name\":\"Mobile Journey B.V.\"},{\"policyUrl\":\"https://www.tradedoubler.com/en/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[2],\"legIntPurposeIds\":[1,5],\"id\":443,\"name\":\"Tradedoubler AB\"},{\"policyUrl\":\"https://signalsdata.com/platform-cookie-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":429,\"name\":\"Signals\"},{\"policyUrl\":\"http://beachfront.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":335,\"name\":\"Beachfront Media LLC\"},{\"policyUrl\":\"https://www.pi-rate.com.au/privacy.html\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3,4,5],\"id\":407,\"name\":\"Publishers Internationale Pty Ltd\"},{\"policyUrl\":\"https://proxi.cloud/info/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":427,\"name\":\"Proxi.cloud Sp. z o.o.\"},{\"policyUrl\":\"http://www.bmind.es/legal-notice/\",\"purposeIds\":[1,2,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":374,\"name\":\"Bmind a Sales Maker Company, S.L.\"},{\"policyUrl\":\"https://ooyala.com/privacy\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":438,\"name\":\"Ooyala Inc\"},{\"policyUrl\":\"https://www.neodatagroup.com/en/security-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,3],\"legIntPurposeIds\":[],\"id\":450,\"name\":\"Neodata Group srl\"},{\"policyUrl\":\"http://www.innovid.com/privacy-policy\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":452,\"name\":\"Innovid Inc.\"},{\"policyUrl\":\"https://www.playbuzz.com/PrivacyPolicy\",\"purposeIds\":[2],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,4,5],\"id\":444,\"name\":\"Playbuzz Ltd. \"},{\"policyUrl\":\"https://www.cxense.com/about-us/privacy-policy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,4,5],\"id\":412,\"name\":\"Cxense ASA\"},{\"policyUrl\":\"https://adimo.co/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[5],\"id\":454,\"name\":\"Adimo\"},{\"policyUrl\":\"https://springserve.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3],\"id\":293,\"name\":\"SpringServe, LLC\"},{\"policyUrl\":\"https://fiksu.com/privacy-policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":455,\"name\":\"GDMServices, Inc. d/b/a FiksuDSP\"},{\"policyUrl\":\"https://www.cuebiq.com/privacypolicy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":298,\"name\":\"Cuebiq Inc.\"},{\"policyUrl\":\"https://travelaudience.com/product-privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":423,\"name\":\"travel audience GmbH\"},{\"policyUrl\":\"https://www.demandbase.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[2,3,4,5],\"id\":397,\"name\":\"Demandbase, Inc. \"},{\"policyUrl\":\"https://client.adhslx.com/privacy.html \",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":381,\"name\":\"DTS (Filiale de Solocal Group)\"},{\"policyUrl\":\"http://www.adrino.pl/ciasteczkowa-polityka/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":425,\"name\":\"ADRINO Sp. z o.o.\"},{\"policyUrl\":\"https://impact.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":365,\"name\":\"Forensiq LLC\"},{\"policyUrl\":\"https://adludio.com/privacypolicy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":447,\"name\":\"Adludio Ltd\"},{\"policyUrl\":\"https://adtelligent.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":410,\"name\":\"Adtelligent Inc.\"},{\"policyUrl\":\"https://privacy.mbr-targeting.com/?optedIn=true\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3],\"id\":137,\"name\":\"mbr targeting GmbH\"},{\"policyUrl\":\"http://www.programmatic-exchange.com/privacy\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,5],\"id\":395,\"name\":\"PREX Programmatic Exchange GmbH&amp;Co KG\"},{\"policyUrl\":\"https://bidstack.com/policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":462,\"name\":\"bidstack ltd\"},{\"policyUrl\":\"https://tacticrealtime.com/privacy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":466,\"name\":\"TACTIC™ Real-Time Marketing AS\"},{\"policyUrl\":\"https://www.yieldr.com/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,3],\"legIntPurposeIds\":[],\"id\":340,\"name\":\"Yieldr UK\"},{\"policyUrl\":\"https://www.whiteops.com/privacy\",\"purposeIds\":[],\"featureIds\":[1,3],\"legIntPurposeIds\":[1,5],\"id\":431,\"name\":\"White Ops, Inc.\"},{\"policyUrl\":\"https://netzwerk.uppr.de/privacy-policy.do\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3,5],\"id\":459,\"name\":\"uppr GmbH\"},{\"policyUrl\":\"http://www.telecoming.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4],\"id\":336,\"name\":\"Telecoming S.A.\"},{\"policyUrl\":\"http://www.adunity.com/privacy-policy.html\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":430,\"name\":\"Ad Unity Ltd\"},{\"policyUrl\":\"http://cybba.com/about/legal/data-processing-agreement/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":346,\"name\":\"Cybba, Inc.\"},{\"policyUrl\":\"https://zetaglobal.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":469,\"name\":\"Zeta Global\"},{\"policyUrl\":\"http://www.definemedia.de/datenschutz-conative/\",\"purposeIds\":[2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":440,\"name\":\"DEFINE MEDIA GMBH\"},{\"policyUrl\":\"https://www.revx.io/privacy-policy\",\"purposeIds\":[1,2,3],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":375,\"name\":\"RevX Inc.\"},{\"policyUrl\":\"http://adelement.com/privacy-policy.html\",\"purposeIds\":[1,2,4],\"featureIds\":[3],\"legIntPurposeIds\":[3,5],\"id\":196,\"name\":\"AdElement Media Solutions Pvt Ltd\"},{\"policyUrl\":\"http://woobi.com/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":268,\"name\":\"Social Tokens Ltd. \"},{\"policyUrl\":\"http://www.taptapnetworks.com/privacy_policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[4,5],\"id\":475,\"name\":\"TAPTAP Networks SL\"},{\"policyUrl\":\"http://www.hbfstech.com/fr/privacy.html\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2],\"id\":474,\"name\":\"hbfsTech\"},{\"policyUrl\":\"http://marketing.targetspot.com/Targetspot/Legal/TargetSpot%20Privacy%20Policy%20-%20June%202018.pdf\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":448,\"name\":\"TARGETSPOT BELGIUM SPRL\"},{\"policyUrl\":\"http://www.ibillboard.com/en/privacy-information/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,3,4,5],\"id\":428,\"name\":\"Internet BillBoard a.s.\"},{\"policyUrl\":\"https://www.selfcampaign.com/static/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":461,\"name\":\"B2B Media Group EMEA GmbH\"},{\"policyUrl\":\"http://hiro-media.com/privacy.php\",\"purposeIds\":[],\"featureIds\":[1],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":476,\"name\":\"HIRO Media Ltd\"},{\"policyUrl\":\"https://pilotx.tv/privacy/\",\"purposeIds\":[2,3],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,4,5],\"id\":480,\"name\":\"pilotx.tv\"},{\"policyUrl\":\"https://www.cerebroad.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":366,\"name\":\"CerebroAd.com s.r.o.\"},{\"policyUrl\":\"https://stroeermobileperformance.com/?dl=privacy\",\"purposeIds\":[2,3,4],\"featureIds\":[3],\"legIntPurposeIds\":[1,5],\"id\":392,\"name\":\"Ströer Mobile Performance GmbH\"},{\"policyUrl\":\"http://www.lemomedia.com/terms.pdf\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":221,\"name\":\"LEMO MEDIA GROUP LIMITED\"},{\"policyUrl\":\"https://www.totaljobs.com/privacy-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":357,\"name\":\"Totaljobs Group Ltd \"},{\"policyUrl\":\"https://delivered-by-madington.com/dat-privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":486,\"name\":\"Madington\"},{\"policyUrl\":\"https://www.home.neustar/privacy\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[2,3,4,5],\"id\":468,\"name\":\"Neustar, Inc.\"},{\"policyUrl\":\"http://www.adcolony.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[1],\"legIntPurposeIds\":[1,2,3,5],\"id\":458,\"name\":\"AdColony, Inc.\"},{\"policyUrl\":\"https://www.revlifter.com/privacy-policy\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[2],\"id\":478,\"name\":\"RevLifter Ltd\"},{\"policyUrl\":\"http://www.yhmg.com/privacy-policy/\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":489,\"name\":\"YellowHammer Media Group\"},{\"policyUrl\":\"https://adledge.com/data-privacy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":484,\"name\":\"Adledge\"},{\"policyUrl\":\"https://carbondmp.com/privacy.html\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":493,\"name\":\"Clicksco Digital Limited\"},{\"policyUrl\":\"https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":495,\"name\":\"Arcspire Limited\"},{\"policyUrl\":\"https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":496,\"name\":\"Automattic Inc.\"},{\"policyUrl\":\"https://www.kupona.de/dsgvo/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[3,5],\"id\":424,\"name\":\"KUPONA GmbH\"},{\"policyUrl\":\"https://fidelity-media.com/privacy-policy/\",\"purposeIds\":[2],\"featureIds\":[3],\"legIntPurposeIds\":[1,3,4,5],\"id\":408,\"name\":\"FM Labs LLC\"},{\"policyUrl\":\"http://www.sub2tech.com/privacy-policy/\",\"purposeIds\":[3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[1,2],\"id\":473,\"name\":\"Sub2 Technologies Ltd\"},{\"policyUrl\":\"https://haensel-ams.com/data-privacy/\",\"purposeIds\":[3,5],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":467,\"name\":\"Haensel AMS GmbH\"},{\"policyUrl\":\"https://opinary.com/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":488,\"name\":\"Opinary GmbH\"},{\"policyUrl\":\"https://playground.xyz/privacy/privacy-policy.pdf\",\"purposeIds\":[1,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":490,\"name\":\"PLAYGROUND XYZ EMEA LTD\"},{\"policyUrl\":\"http://www.addthis.com/privacy/privacy-policy/\",\"purposeIds\":[1,2,3,4],\"featureIds\":[2],\"legIntPurposeIds\":[5],\"id\":464,\"name\":\"Oracle AddThis\"},{\"policyUrl\":\"https://www.shinystat.com/it/informativa_sito.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":491,\"name\":\"Triboo Data Analytics\"},{\"policyUrl\":\"https://purposelab.com/privacy/\",\"purposeIds\":[5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":499,\"name\":\"PurposeLab, LLC\"},{\"policyUrl\":\"http://www.turboadv.com/white-rabbit-privacy-policy/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":500,\"name\":\"Turbo\"},{\"policyUrl\":\"https://nexd.com/privacy-policy\",\"purposeIds\":[3,5],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,4],\"id\":502,\"name\":\"NEXD\"},{\"policyUrl\":\"https://www.schibsted.com/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1],\"legIntPurposeIds\":[],\"id\":465,\"name\":\"Schibsted Product and Tech UK\"},{\"policyUrl\":\"http://dtxngr.com/legal/\",\"purposeIds\":[1,2,4],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":497,\"name\":\"Little Big Data sp.z.o.o.\"},{\"policyUrl\":\"https://lotadata.com/privacy_policy\",\"purposeIds\":[],\"featureIds\":[1],\"legIntPurposeIds\":[1,5],\"id\":492,\"name\":\"LotaData, Inc.\"},{\"policyUrl\":\"https://luc.id/gdpr\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":508,\"name\":\"Lucid Holdings, LLC\"},{\"policyUrl\":\"https://pubnative.net/privacy-notice/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":512,\"name\":\"PubNative GmbH\"},{\"policyUrl\":\"https://www.flexoffers.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":471,\"name\":\"FlexOffers.com, LLC\"},{\"policyUrl\":\"https://cablato.com/privacy\",\"purposeIds\":[1,2,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":494,\"name\":\"Cablato Limited\"},{\"policyUrl\":\"https://pexi.nl/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":516,\"name\":\"Pexi B.V.\"},{\"policyUrl\":\"https://www.adswizz.com/our-privacy-policy/\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,5],\"id\":507,\"name\":\"AdsWizz Inc.\"},{\"policyUrl\":\"http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":482,\"name\":\"UberMedia, Inc.\"},{\"policyUrl\":\"https://www.shortlyst.com/eu/privacy_terms.html\",\"purposeIds\":[1,2],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":505,\"name\":\"Shopalyst Inc\"},{\"policyUrl\":\"https://www.sunmedia.tv/en/cookies\",\"purposeIds\":[1,2],\"featureIds\":[2],\"legIntPurposeIds\":[3],\"id\":517,\"name\":\"SunMedia \"},{\"policyUrl\":\"https://getcake.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[2,3],\"legIntPurposeIds\":[5],\"id\":518,\"name\":\"Accelerize Inc.\"},{\"policyUrl\":\"https://admixer.net/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":511,\"name\":\"Admixer EU GmbH\"},{\"policyUrl\":\"http://www.infiniamobile.com/privacy_policy\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":479,\"name\":\"INFINIA MOBILE S.L.\"},{\"policyUrl\":\"https://www.shopstyle.co.uk/privacy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":513,\"name\":\"Shopstyle\"},{\"policyUrl\":\"http://advandeo.com/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":509,\"name\":\"ATG Ad Tech Group GmbH\"},{\"policyUrl\":\"https://www.netzeffekt.de/en/imprint\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[3,5],\"id\":521,\"name\":\"netzeffekt GmbH\"},{\"policyUrl\":\"https://www.nugg.ad/en/privacy/general-information.html\",\"purposeIds\":[],\"featureIds\":[1],\"legIntPurposeIds\":[1,2,3,5],\"id\":487,\"name\":\"nugg.ad GmbH\"},{\"policyUrl\":\"https://zighzag.com/privacy\",\"purposeIds\":[1,3],\"featureIds\":[1,2],\"legIntPurposeIds\":[5],\"id\":515,\"name\":\"ZighZag\"},{\"policyUrl\":\"https://www.channelsight.com/privacypolicy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[5],\"id\":520,\"name\":\"ChannelSight \"},{\"policyUrl\":\"https://ozoneproject.com/privacy-policy\",\"purposeIds\":[1,2,3],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":524,\"name\":\"The Ozone Project Limited\"},{\"policyUrl\":\"https://www.fidzup.com/en/privacy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":529,\"name\":\"Fidzup\"},{\"policyUrl\":\"https://www.applift.com/privacy-notice\",\"purposeIds\":[1,2,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":528,\"name\":\"AppLift GmbH\"},{\"policyUrl\":\"https://jampp.com/privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":527,\"name\":\"Jampp LTD\"},{\"policyUrl\":\"https://www.salesforce.com/company/privacy/\",\"purposeIds\":[1,2,3],\"featureIds\":[2],\"legIntPurposeIds\":[],\"id\":506,\"name\":\"salesforce.com, inc.\"},{\"policyUrl\":\"https://smartyads.com/privacy-policy\",\"purposeIds\":[1,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":534,\"name\":\"SmartyAds Inc.\"},{\"policyUrl\":\"https://www.innity.com/privacy-policy.php\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":535,\"name\":\"INNITY\"},{\"policyUrl\":\"https://uprival.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":514,\"name\":\"Uprival LLC\"},{\"policyUrl\":\"https://tealium.com/privacy/\",\"purposeIds\":[2,3,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":522,\"name\":\"Tealium Inc\"},{\"policyUrl\":\"https://near.co/privacy\",\"purposeIds\":[1,2,3,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":530,\"name\":\"Near Pte Ltd\"},{\"policyUrl\":\"https://www.addefend.com/en/privacy-policy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":539,\"name\":\"AdDefend GmbH\"},{\"policyUrl\":\"https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2],\"legIntPurposeIds\":[],\"id\":501,\"name\":\"Alliance Gravity Data Media\"},{\"policyUrl\":\"https://www.chargeplatform.com/privacy\",\"purposeIds\":[1,2],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[3,4,5],\"id\":519,\"name\":\"Chargeads\"},{\"policyUrl\":\"http://xmode.io/privacy-policy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":523,\"name\":\"X-Mode Social, Inc.\"},{\"policyUrl\":\"http://www.runads.com/privacy-policy\",\"purposeIds\":[],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":537,\"name\":\"RUN, Inc.\"},{\"policyUrl\":\"http://rgpd-smartclip.com/\",\"purposeIds\":[1,2,3,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":531,\"name\":\"Smartclip Hispania SL\"},{\"policyUrl\":\"http://legal.trendstream.net/non-panellist_privacy_policy\",\"purposeIds\":[1],\"featureIds\":[1,2],\"legIntPurposeIds\":[3,5],\"id\":536,\"name\":\"GlobalWebIndex\"},{\"policyUrl\":\"https://densou.dk/Policy.html\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":542,\"name\":\"Densou Trading Desk ApS\"},{\"policyUrl\":\"https://rta.pubocean.com/privacy-policy/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[5],\"id\":525,\"name\":\"PUB OCEAN LIMITED\"},{\"policyUrl\":\"https://www.kochava.com/support-privacy/\",\"purposeIds\":[],\"featureIds\":[],\"legIntPurposeIds\":[1,5],\"id\":544,\"name\":\"Kochava Inc.\"},{\"policyUrl\":\"https://www.makethunder.com/privacy\",\"purposeIds\":[1,2],\"featureIds\":[],\"legIntPurposeIds\":[3,4,5],\"id\":543,\"name\":\"PaperG, Inc. dba Thunder Industries\"},{\"policyUrl\":\"http://www.videmob.com/privacy.html\",\"purposeIds\":[],\"featureIds\":[2,3],\"legIntPurposeIds\":[1,2,3,4],\"id\":334,\"name\":\"Cydersoft\"},{\"policyUrl\":\"https://www.weareilluma.com/endddd\",\"purposeIds\":[1],\"featureIds\":[],\"legIntPurposeIds\":[3],\"id\":551,\"name\":\"Illuma Technology Limited\"},{\"policyUrl\":\"https://tunnl.com/privacy.html\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":540,\"name\":\"Tunnl BV\"},{\"policyUrl\":\"https://www.videoreach.de/about/privacy-policy/\",\"purposeIds\":[1,3],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":547,\"name\":\"Video Reach\"},{\"policyUrl\":\"https://smart-traffik.io/politique-de-confidentialite\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[3,4,5],\"id\":546,\"name\":\"Smart Traffik\"},{\"policyUrl\":\"https://www.deepintent.com/platform-privacy-policy/\",\"purposeIds\":[],\"featureIds\":[3],\"legIntPurposeIds\":[1,2,3,4,5],\"id\":541,\"name\":\"DeepIntent, Inc.\"},{\"policyUrl\":\"https://www.reignn.com/user-privacy-policy/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[],\"legIntPurposeIds\":[],\"id\":545,\"name\":\"ReigNN Platform Ltd.\"},{\"policyUrl\":\"https://bitqueen.com/privacy\",\"purposeIds\":[1,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":439,\"name\":\"Bit Q Holdings Limited\"},{\"policyUrl\":\"https://adhese.com/privacy-and-cookie-policy\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[2,3],\"legIntPurposeIds\":[],\"id\":553,\"name\":\"Adhese\"},{\"policyUrl\":\"http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang=en\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[3],\"legIntPurposeIds\":[],\"id\":556,\"name\":\"adhood.com\"},{\"policyUrl\":\"https://www.iubenda.com/privacy-policy/69056167/full-legal\",\"purposeIds\":[5],\"featureIds\":[1,3],\"legIntPurposeIds\":[],\"id\":550,\"name\":\"Happydemics\"},{\"policyUrl\":\"http://www.leiki.com/privacy\",\"purposeIds\":[1,2,3],\"featureIds\":[],\"legIntPurposeIds\":[4],\"id\":560,\"name\":\"Leiki Ltd.\"},{\"policyUrl\":\"https://www.rms.de/datenschutz/\",\"purposeIds\":[1,2,3,4,5],\"featureIds\":[1,2,3],\"legIntPurposeIds\":[],\"id\":554,\"name\":\"RMSi Radio Marketing Service interactive GmbH\"},{\"policyUrl\":\"https://drbanner.com/privacypolicy_en/\",\"purposeIds\":[1],\"featureIds\":[3],\"legIntPurposeIds\":[3],\"id\":498,\"name\":\"Dr. Banner\"}]}"};
        if (json.iabVendorJson && !oneTrustIABConsent.vendorList) {
            oneTrustIABConsent.vendorList = JSON.parse(json.iabVendorJson);
        }
        return json;
    }


    this.useGeoLocationService = useGeoLocationService;

    this.LoadBanner = function () {
        OT(window).trigger("otloadbanner");
    };

    this.Init = function () {

        initObjectAssignPolyfill();

        initArrayFillPolyfill();

        updateScriptAndCssUrl();

        insertViewPortTag();

        //Populates optanonHtmlGroupData from cookie or default statuses
        ensureHtmlGroupDataInitialised();

        // CustomEvent polyfill
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
        (function () {
            if (typeof window.CustomEvent === "function") return false; //If CustomEvent supported return
            function CustomEvent(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();

        //Populates Google Tag Manager macro global Optanon variable
        updateGtmMacros(false);

        //Inserts reguired css references
        initialiseCssReferences();

        //Save landing page url
        initialiseLandingPath();

        if (Optanon.useGeoLocationService && !optanonPreview) {
            getGeoLocation();
        }

        //Inserts UI components and behaviours
        injectConsentNotice();
    };

    function updateScriptAndCssUrl() {
        var json = optanonData(),
            scripts = document.getElementsByTagName('script');

        for (var i = 0; i < scripts.length; ++i) {
            if (isOptanonFile(scripts[i], json.cctId)) {
                var OptanonScript = scripts[i].src;
                onetrustClientScriptUrl = getURL(OptanonScript);
                break;
            }
        }
    }

    function updateCorrectUrl(sourceUrl) {
        var sourceUrI = getURL(sourceUrl);
        if (onetrustClientScriptUrl && sourceUrI && onetrustClientScriptUrl.hostname !== sourceUrI.hostname) {
            sourceUrl = sourceUrl.replace(sourceUrI.hostname, onetrustClientScriptUrl.hostname);
        }
        return sourceUrl;
    }

    function isOptanonFile(scriptElem, filePathPart) {
        if (scriptElem.getAttribute('src')) {
            return scriptElem.getAttribute('src').indexOf(filePathPart) !== -1;
        }
        return false;
    }

    function getURL(href) {
        var l = document.createElement("a");
        l.href = href;
        return l;
    };

    // Inserts a script tag into page at specified location //
    // url: script tag reference url
    // selector: container element of script tag (possible values: 'head', 'body', '<element id>')
    // callback: callback method after script tag has been inserted
    // options: contains behaviors once the script is inserted
    //      options.deleteSelectorContent (boolean): set to true to delete all selector content before inserting script
    //      options.makeSelectorVisible (boolean): set to true to show selector after inserting script
    //      options.makeElementsVisible (array[string]): set the id's of arbitrary elements to show after inserting script
    //      options.deleteElements (array[string]): set the id's of arbitrary elements to delete after inserting script
    // groupId: if implied consent, the Optanon Group Id for which the script tag should be inserted
    this.InsertScript = function (url, selector, callback, options, groupId, async) {
        var validOptions = options != null && typeof options != 'undefined',
            ignoreGroupCheck = validOptions && typeof options.ignoreGroupCheck != 'undefined' && options.ignoreGroupCheck == true || optanonGeolocationExecuteAllScripts,
            i = void 0,
            j = void 0,
            script = void 0,
            done = void 0;

        if (canInsertForGroup(groupId, ignoreGroupCheck) && !contains(optanonWrapperScriptExecutedGroups, groupId)) {
            //Delay adding group to optanonWrapperScriptExecutedGroups
            optanonWrapperScriptExecutedGroupsTemp.push(groupId);

            if (validOptions && typeof options.deleteSelectorContent != 'undefined' && options.deleteSelectorContent == true) {
                empty(selector);
            }

            script = document.createElement('script');

            if (callback != null && typeof callback != 'undefined') {
                done = false;
                script.onload = script.onreadystatechange = function () {
                    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                        done = true;
                        callback();
                    }
                };
            }

            script.type = 'text/javascript';
            script.src = url;

            if (async) {
                script.async = async;
            }

            switch (selector) {
                case 'head':
                    document.getElementsByTagName('head')[0].appendChild(script);
                    break;
                case 'body':
                    document.getElementsByTagName('body')[0].appendChild(script);
                    break;
                default:
                    if (document.getElementById(selector)) {
                        document.getElementById(selector).appendChild(script);
                        if (validOptions && typeof options.makeSelectorVisible != 'undefined' && options.makeSelectorVisible == true) {
                            show(selector);
                        }
                    }
                    break;
            }

            if (validOptions && typeof options.makeElementsVisible != 'undefined') {
                for (i = 0; i < options.makeElementsVisible.length; i += 1) {
                    show(options.makeElementsVisible[i]);
                }
            }

            if (validOptions && typeof options.deleteElements != 'undefined') {
                for (j = 0; j < options.deleteElements.length; j += 1) {
                    remove(options.deleteElements[j]);
                }
            }
        }
    };

    // Inserts an arbitrary html tag into page at specified location //
    // element: html element
    // selector: container element of html element (possible values: '<element id>')
    // callback: callback method after html element has been inserted
    // options: contains behaviors once the html is inserted
    //      options.deleteSelectorContent (boolean): set to true to delete all selector content before inserting html
    //      options.makeSelectorVisible (boolean): set to true to show selector after inserting html
    //      options.makeElementsVisible (array[string]): set the id's of arbitrary elements to show after inserting html
    //      options.deleteElements (array[string]): set the id's of arbitrary elements to delete after inserting html
    // groupId: if implied consent, the Optanon Group Id for which the html element should be inserted
    this.InsertHtml = function (element, selector, callback, options, groupId) {
        var validOptions = options != null && typeof options != 'undefined',
            ignoreGroupCheck = validOptions && typeof options.ignoreGroupCheck != 'undefined' && options.ignoreGroupCheck == true || optanonGeolocationExecuteAllScripts,
            i = void 0,
            j = void 0;

        if (canInsertForGroup(groupId, ignoreGroupCheck) && !contains(optanonWrapperHtmlExecutedGroups, groupId)) {
            //Delay adding group to optanonWrapperHtmlExecutedGroups
            optanonWrapperHtmlExecutedGroupsTemp.push(groupId);

            if (validOptions && typeof options.deleteSelectorContent != 'undefined' && options.deleteSelectorContent == true) {
                empty(selector);
            }

            appendTo(selector, element);

            if (validOptions && typeof options.makeSelectorVisible != 'undefined' && options.makeSelectorVisible == true) {
                show(selector);
            }

            if (validOptions && typeof options.makeElementsVisible != 'undefined') {
                for (i = 0; i < options.makeElementsVisible.length; i += 1) {
                    show(options.makeElementsVisible[i]);
                }
            }

            if (validOptions && typeof options.deleteElements != 'undefined') {
                for (j = 0; j < options.deleteElements.length; j += 1) {
                    remove(options.deleteElements[j]);
                }
            }

            if (callback != null && typeof callback != 'undefined') {
                callback();
            }
        }
    };

    // Close consent notice and writes cookie
    this.Close = function (closeFromCookie) {
        var json = optanonData();

        // Implied Consent
        if (!closeFromCookie && json.ConsentModel && json.ConsentModel.Name.toLowerCase() === constant.IMPLIEDCONSENT) {
            impliedConsentDirty = true;
            if (isCenterTile) {
                Array.prototype.forEach.call(document.querySelectorAll('.optanon-popup-body-content'), function (domEl, idx) {
                    var group = OT(domEl).data('group'),
                        input = domEl.querySelector('input');

                    if (group && input) {
                        var groupName = safeGroupName(group);

                        if (input.checked) {

                            //Google Analytics event tracking
                            Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Toggle On', groupName);

                            //updating optanonHtmlGroupData with new group status
                            var index = indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) + ':0');
                            if (index != -1) {
                                optanonHtmlGroupData[index] = getGroupIdForCookie(group) + ':1';

                                if (json.IsIABEnabled) {
                                    setIABConsent(group, "true", true);
                                }
                            }
                        } else {

                            //Google Analytics event tracking
                            Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Toggle Off', groupName);

                            //updating optanonHtmlGroupData with new group status
                            var _index = indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) + ':1');
                            if (_index != -1) {
                                optanonHtmlGroupData[_index] = getGroupIdForCookie(group) + ':0';

                                if (json.IsIABEnabled) {
                                    setIABConsent(group, "false", false);
                                }
                            }
                        }
                    }
                });
            } else {
                Array.prototype.forEach.call(document.querySelector('#optanon-menu').children, function (el, idx) {
                    if (el.title !== 'More Information') {

                        OT(el).trigger('click');

                        Array.prototype.forEach.call(document.querySelectorAll('.optanon-status-checkbox'), function (domEl, idx) {
                            var group = OT(domEl).data('group');
                            if (group) {
                                if (domEl.checked) {
                                    toggleGroupStatusOn(json, group, domEl);
                                }
                            }
                        });
                    }
                });
            }
        }

        hideConsentNotice();
        updateConsentData();
        executeOptanonWrapper();
    };

    function updateConsentData() {

        saveVendorStatus();

        setLandingPathParam(optanonNotLandingPageName);
        writeCookieGroupsParam(optanonCookieName);
        substitutePlainTextScriptTags();
        updateGtmMacros(false);
    }

    // Close consent notice, writes cookies and executes wrapper function
    this.AllowAll = function (consentIgnoreForGeoLookup) {
        var group = void 0,
            json = optanonData(),
            i = void 0;

        optanonHtmlGroupData = [];
        for (i = 0; i < json.Groups.length; i += 1) {
            group = json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                optanonHtmlGroupData.push(getGroupIdForCookie(group) + ':1');
            }
        }

        if (optanonHtmlGroupData && json.IsIABEnabled) {
            oneTrustIABConsent.purpose = [];
            assignIABConsentFromHtmlGroupData(optanonHtmlGroupData);
        }



        if (OT('#optanon #optanon-menu li').length > 0) {
            OT('#optanon #optanon-menu li').removeClass('menu-item-off');
            OT('#optanon #optanon-menu li').addClass('menu-item-on');
        }

        hideConsentNotice();
        setLandingPathParam(optanonNotLandingPageName);
        writeCookieGroupsParam(optanonCookieName);
        substitutePlainTextScriptTags();
        updateGtmMacros(true);
        executeOptanonWrapper();
    };

    // Toggles consent notice visible state
    this.ToggleInfoDisplay = function () {
        var bgIsHidden = window.getComputedStyle(OT('#optanon #optanon-popup-bg').el[0], null).getPropertyValue('display') === 'none',
            wrapperIsHidden = window.getComputedStyle(OT('#optanon #optanon-popup-wrapper').el[0], null).getPropertyValue('display') === 'none';

        TogglePreferenceCenter(bgIsHidden, wrapperIsHidden);

        if (!bgIsHidden) {
            OT('#optanon #optanon-popup-wrapper').el[0].style.display = 'block';
            setTimeout(function () {
                TogglePreferenceCenter(true, wrapperIsHidden);
            }, 400);
        }
    };

    function TogglePreferenceCenter(bgIsHidden, wrapperIsHidden) {
        var json = optanonData();

        if (bgIsHidden && wrapperIsHidden) {

            if (pagePushedDown) {
                OT('#optanon-popup-bg').css('top: -100px; height: 100vw;');
            }

            showConsentNotice();

            if (!isCenterTile) {
                var venderConsentLink = document.querySelector('#optanon-vendor-consent-text'),
                    popUpHeader = document.querySelector('#optanon-popup-top').children,
                    popUpBottom = document.querySelector('#optanon-popup-bottom').children,
                    sideNav = document.querySelector('#optanon-menu').children,
                    closeLink = document.querySelector('.optanon-close-ui'),
                    optanon = document.querySelector('#optanon'),
                    headerItems = [],
                    footerItems = [];

                for (var i = 0; i < popUpHeader.length; i++) {
                    if (popUpHeader[i].style.display !== 'none') {
                        headerItems.push(popUpHeader[i]);
                    }
                }
                for (var _i = 0; _i < popUpBottom.length; _i++) {
                    if (popUpBottom[_i].style.display !== 'none') {
                        footerItems.push(popUpBottom[_i]);
                    }
                }

                if (headerItems.length > 0) {
                    popUpHeader[0].addEventListener('keydown', popUpHeaderHandler);
                } else {
                    sideNav[0].addEventListener('keydown', popUpHeaderHandler);
                }
                if (footerItems.length > 0) {
                    var allowAllBtn = document.querySelector('.optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all');
                    if (allowAllBtn.style.display === 'block') {
                        footerItems[footerItems.length - 1].addEventListener('keydown', footerItemsHandler);
                    } else {
                        footerItems[footerItems.length - 2].addEventListener('keydown', footerItemsHandler);
                    }
                }

                sideNav[sideNav.length - 1].addEventListener('keydown', sideNavHandler);
                optanon.addEventListener('keyup', optanonHandler);
                if (venderConsentLink) venderConsentLink.addEventListener('keyup', venderConsentHandler);

                if (closeLink) {
                    closeLink.addEventListener('keydown', closeLinkHandler);
                }
            }
        } else {
            hideConsentNotice();
            writeCookieGroupsParam(optanonCookieName);
            substitutePlainTextScriptTags();
            updateGtmMacros(false);
            executeOptanonWrapper();
        }
    }

    function venderConsentHandler(event) {
        var popUpWrapper = document.querySelector('#optanon-popup-wrapper');
        if (event.keyCode === 13) {
            popUpWrapper.focus();
        }
    }

    function optanonHandler(event) {
        var cookieSettingsBtn = document.querySelector('.optanon-toggle-display.cookie-settings-button');
        if (event.keyCode === 27) {
            cookieSettingsBtn.focus();
            closeLinkHandler(event);
        }
    }

    function closeLinkHandler(event) {
        var closeLink = document.querySelector('.optanon-close-ui'),
            popUpHeader = document.querySelector('#optanon-popup-top').children[0],
            popUpBottom = document.querySelector('#optanon-popup-bottom').children,
            sideNav = document.querySelector('#optanon-menu').children,
            venderConsentLink = document.querySelector('#optanon-vendor-consent-text'),
            optanon = document.querySelector('#optanon');

        if (event.keyCode === 13 || event.keyCode === 27) {
            hideConsentNotice();
            document.querySelector('.optanon-toggle-display.cookie-settings-button').focus();

            if (popUpHeader) {
                popUpHeader.removeEventListener('keydown', popUpHeaderHandler);
            } else {
                sideNav[0].removeEventListener('keydown', popUpHeaderHandler);
            }
            if (popUpBottom.length > 0) {
                var allowAllBtn = document.querySelector('.optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all');
                if (allowAllBtn.style.display === 'block') {
                    popUpBottom[popUpBottom.length - 1].removeEventListener('keydown', footerItemsHandler);
                } else {
                    popUpBottom[popUpBottom.length - 2].removeEventListener('keydown', footerItemsHandler);
                }
            }

            sideNav[sideNav.length - 1].removeEventListener('keydown', sideNavHandler);
            optanon.removeEventListener('keyup', venderConsentHandler);

            if (venderConsentLink) {
                venderConsentLink.removeEventListener('keyup', venderConsentHandler);
            }

            if (closeLink) {
                closeLink.removeEventListener('keydown', closeLinkHandler);
            }
        }
    }

    function sideNavHandler(event) {
        if (event.keyCode === 9 && !event.shiftKey) {
            document.querySelector('.optanon-white-button-middle > button').removeAttribute('tabindex');
            document.querySelector('.optanon-allow-all > .optanon-white-button-middle > button').removeAttribute('tabindex');
        }
    }

    function footerItemsHandler(event) {
        var popUpWrapper = document.querySelector('#optanon-popup-wrapper'),
            allowAllBtn = allowAllBtn = document.querySelector('.optanon-allow-all > .optanon-white-button-middle > button');
        if (event.keyCode === 9) {
            popUpWrapper.focus();
        }
        if (event.keyCode === 9 && !event.shiftKey) {
            document.querySelector('.optanon-white-button-middle > button').removeAttribute('tabindex');
            allowAllBtn.removeAttribute('tabindex');
        }
        if (event.keyCode === 9 && event.shiftKey) {
            document.querySelector('#optanon-popup-bottom > a').focus();
        }
    }

    function popUpHeaderHandler(event) {
        var allowAllBtn = document.querySelector('.optanon-allow-all > .optanon-white-button-middle > button'),
            saveSettingsBtn = document.querySelector('.optanon-white-button-middle > button');

        if (event.keyCode === 9 && event.shiftKey) {
            saveSettingsBtn.setAttribute('tabindex', 5);
            allowAllBtn.setAttribute('tabindex', 4);
        }
        if (event.keyCode === 9 && !event.shiftKey) {
            saveSettingsBtn.removeAttribute('tabindex');
            allowAllBtn.removeAttribute('tabindex');
        }
    }

    // Selectively blocks Google Analytics tracking functionality when consent has not been given
    this.BlockGoogleAnalytics = function (gaId, groupId) {
        window['ga-disable-' + gaId] = !canInsertForGroup(groupId);
    };

    // Optanon UI Google Analytics event tracking
    this.TriggerGoogleAnalyticsEvent = function (category, action, label, value) {
        //Google Analytics (w/o Google Tag Manager)
        if (typeof _gaq != 'undefined') {
            _gaq.push(['_trackEvent', category, action, label, value]);
        }
        //Universal Analytics (w/o Google Tag Manager)
        if (typeof ga != 'undefined') {
            ga('send', 'event', category, action, label, value);
        }
        //Google Tag Manager
        if (typeof dataLayer != 'undefined' && dataLayer.constructor === Array) {
            dataLayer.push({ 'event': 'trackOptanonEvent', 'optanonCategory': category, 'optanonAction': action, 'optanonLabel': label, 'optanonValue': value });
        }
    };

    // Returns if alert box has been closed by checking if setOptanonAlertBoxCookie exists
    this.IsAlertBoxClosedAndValid = function () {
        var json = optanonData(),
            cookie = getCookie(optanonAlertBoxClosedCookieName),
            reconsentDate = json.LastReconsentDate;

        if (cookie === null) return false;
        if (!reconsentDate) return true;

        var needsReconsent = new Date(reconsentDate) > new Date(cookie);
        if (needsReconsent) {
            Optanon.ReconsentGroups();
        }

        return !needsReconsent;
    };

    // Alias for old function name
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid;

    // if Re-consent is needed, update groups according to their default status
    this.ReconsentGroups = function () {
        var toUpdateCookie = false,
            cookieGroupData = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups')),
            cookieGroupDataStripped = deserialiseStringToArray(readCookieParam(optanonCookieName, 'groups').replace(/:0/g, '').replace(/:1/g, '')),
            json = optanonData();

        if (readCookieParam(optanonCookieName, 'groups')) {
            for (var i = 0; i < json.Groups.length; i += 1) {
                var group = json.Groups[i];
                if (!isValidConsentNoticeGroup(group)) continue;
                //Group should show in popup
                var index = indexOf(cookieGroupDataStripped, getGroupIdForCookie(group));
                if (index == -1) continue;

                var statusText = safeGroupDefaultStatus(group).toLowerCase(),
                    reconsentStatuses = ["inactive", "inactive landingpage", "do not track"];
                if (reconsentStatuses.indexOf(statusText) > -1) {
                    toUpdateCookie = true;
                    var groupValue = statusText === "inactive landingpage" ? ':1' : ':0';
                    cookieGroupData[index] = getGroupIdForCookie(group) + groupValue;
                }
            }

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }
        }
    };

    // Sets setOptanonAlertBoxCookie cookie indicating alert box has been closed
    this.SetAlertBoxClosed = function (isOptanonAlertBoxCookiePersistent) {
        var consentDate = new Date().toISOString();
        if (isOptanonAlertBoxCookiePersistent) {
            setCookie(optanonAlertBoxClosedCookieName, consentDate, 365);
        } else {
            setCookie(optanonAlertBoxClosedCookieName, consentDate);
        }
    };

    // Client facing wrapper around optanonData, returns groups, cookies and other domain data
    this.GetDomainData = function () {
        var domainData = optanonData();
        return domainData;
    };

    // Add listener to be called when consent is available
    this.OnConsentChanged = function (f) {
        window.addEventListener("consent.onetrust", f);
    };


    this.getPingRequest = function (callback) {
        if (callback) {
            var domainJson = optanonData();
            if (domainJson.IsIABEnabled) {
                var pingData = {
                    gdprAppliesGlobally: oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: oneTrustIABConsent.vendorList && !(oneTrustIABgdprAppliesGlobally == null)
                };
                callback(pingData, true);
            } else {
                callback({}, false);
            }
        }
    };

    this.getVendorConsentsRequest = function (callback) {
        if (callback) {
            var domainJson = optanonData();
            if (domainJson.IsIABEnabled) {
                var IABJsonData = IABData();
                if (IABJsonData) {
                    var venderConsentData = {
                        metadata: IABCookieValue ? IABCookieValue : getIABConsentData(),
                        gdprApplies: oneTrustIABgdprAppliesGlobally,
                        hasGlobalScope: domainJson.IsIabThirdPartyCookieEnabled,
                        cookieVersion: IABJsonData.cookieVersion,
                        created: IABJsonData.createdTime,
                        lastUpdated: IABJsonData.updatedTime,
                        cmpId: IABJsonData.cmpId,
                        cmpVersion: IABJsonData.cmpVersion,
                        consentLanguage: IABJsonData.consentLanguage,
                        consentScreen: IABJsonData.consentScreen,
                        vendorListVersion: IABJsonData.vendorListVersion,
                        maxVendorId: IABJsonData.maxVendorId,
                        purposeConsents: convertIABVendorPurposeArrayToObject(oneTrustIABConsent.purpose),
                        vendorConsents: convertIABVendorPurposeArrayToObject(distinctArray(oneTrustIABConsent.vendors))
                    };

                    callback(venderConsentData, true);
                } else {
                    callback({}, false);
                }
            } else {
                callback({}, false);
            }
        }
    };

    this.getConsentDataRequest = function (callback) {
        if (callback) {
            var domainJson = optanonData();
            if (domainJson.IsIABEnabled) {
                var consentData = {
                    gdprApplies: oneTrustIABgdprAppliesGlobally,
                    hasGlobalScope: domainJson.IsIabThirdPartyCookieEnabled,
                    consentData: IABCookieValue ? IABCookieValue : getIABConsentData()
                };

                callback(consentData, true);
            } else {
                callback({}, false);
            }
        }
    };

    function getIABConsentData(allowedPurposes, allowedVendors) {
        var domainJson = optanonData();
        if (domainJson.IsIABEnabled) {
            var IABJsonData = IABData();
            if (IABJsonData) {
                var consentData = new consentString.ConsentString();
                consentData.setGlobalVendorList(oneTrustIABConsent.vendorList ? oneTrustIABConsent.vendorList : {});
                consentData.setCmpId(parseInt(IABJsonData.cmpId));
                consentData.setCmpVersion(parseInt(IABJsonData.cmpVersion));
                consentData.setConsentLanguage(IABJsonData.consentLanguage.toLocaleLowerCase());
                consentData.setConsentScreen(parseInt(IABJsonData.consentScreen));
                consentData.setPurposesAllowed(allowedPurposes ? allowedPurposes : getActiveIdArray(oneTrustIABConsent.purpose));
                consentData.setVendorsAllowed(allowedVendors ? allowedVendors : getActiveIdArray(distinctArray(oneTrustIABConsent.vendors)));
                return consentData.getConsentString();
            }
        } else {
            return null;
        }
    }

    function initializeIABData() {
        var IABCookie = getCookie(oneTrustIABCookieName);
        if (IABCookie) {
            var consentData = new consentString.ConsentString(IABCookie),
                vendors = consentData.getVendorsAllowed();
            if (consentData && vendors) {
                for (var index = 0; index < vendors.length; index++) {
                    oneTrustIABConsent.vendors.push(vendors[index].toString() + ":true");
                }
            }
        } else {
            setIABVendor();
        }
    }

    function assignIABGlobalScope(displayPopup) {
        if (displayPopup == true || displayPopup == 'true') {
            oneTrustIABgdprAppliesGlobally = true;
        } else {
            oneTrustIABgdprAppliesGlobally = false;
        }
    }




    function isCookiePolicyPage(bannerText) {
        var isMatching = false,
            currentURL = removeURLPrefixes(window.location.href),
            el = OT('<div></div>', 'ce').el;
        OT(el).html(bannerText);
        var hrefElements = el.querySelectorAll('a');
        for (var i = 0; i < hrefElements.length; i++) {
            if (removeURLPrefixes(hrefElements[i].href) == currentURL) {
                isMatching = true;
                break;
            }
        }
        return isMatching;
    }

    function removeURLPrefixes(url) {
        return url.toLowerCase().replace(/(^\w+:|^)\/\//, '').replace('www.', '');
    }

    function initObjectAssignPolyfill() {
        if (typeof Object.assign != 'function') {
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, "assign", {
                value: function assign(target, varArgs) {
                    // .length of function is 2
                    'use strict';

                    if (target == null) {
                        // TypeError if undefined or null
                        throw new TypeError('Cannot convert undefined or null to object');
                    }

                    var to = Object(target);

                    for (var index = 1; index < arguments.length; index++) {
                        var nextSource = arguments[index];

                        if (nextSource != null) {
                            // Skip over if undefined or null
                            for (var nextKey in nextSource) {
                                // Avoid bugs when hasOwnProperty is shadowed
                                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                    to[nextKey] = nextSource[nextKey];
                                }
                            }
                        }
                    }
                    return to;
                },
                writable: true,
                configurable: true
            });
        }
    }

    function initArrayFillPolyfill() {
        if (!Array.prototype.fill) {
            Object.defineProperty(Array.prototype, 'fill', {
                value: function value(_value) {

                    // Steps 1-2.
                    if (this == null) {
                        throw new TypeError('this is null or not defined');
                    }

                    var O = Object(this);

                    // Steps 3-5.
                    var len = O.length >>> 0;

                    // Steps 6-7.
                    var start = arguments[1];
                    var relativeStart = start >> 0;

                    // Step 8.
                    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

                    // Steps 9-10.
                    var end = arguments[2];
                    var relativeEnd = end === undefined ? len : end >> 0;

                    // Step 11.
                    var finalVal = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

                    // Step 12.
                    while (k < finalVal) {
                        O[k] = _value;
                        k++;
                    }

                    // Step 13.
                    return O;
                }
            });
        }
    }

    function setBannerTabIndex() {
        var bannerTabIndex = 0;
        // policy link

        if (OT('.banner-content a').length) {
            OT('.banner-content a').each(function (element) {
                OT(element).addClass('banner-policy-link');
                OT(element).attr('aria-label', OT(element).text());
            });
        }
        if (checkIscenterTile()) {
            if (OT(".accept-cookies-button").length) {
                OT(".accept-cookies-button").attr('tabindex', ++bannerTabIndex);
            }
            if (OT(".cookie-settings-button").length) {
                OT(".cookie-settings-button").attr('tabindex', ++bannerTabIndex);
            }
        } else {
            if (OT(".cookie-settings-button").length) {
                OT(".cookie-settings-button").attr('tabindex', ++bannerTabIndex);
            }
            if (OT(".accept-cookies-button").length) {
                OT(".accept-cookies-button").attr('tabindex', ++bannerTabIndex);
            }
        }
        if (OT(".banner-close-button").length) {
            OT(".banner-close-button").attr('tabindex', ++bannerTabIndex);
        }
    }


    this.updateConsentFromCookies = function (OnetrustIABCookies) {
        var allowedGroup = [],
            isExist = void 0;
        IAB3rdPartyCookieValue = OnetrustIABCookies;
        if (OnetrustIABCookies && !isInitIABCookieData()) {
            var globalConsentData = new consentString.ConsentString(OnetrustIABCookies);
            if (oneTrustIABConsent && oneTrustIABConsent.purpose) {
                for (var i = 0; i < oneTrustIABConsent.purpose.length; i++) {
                    var purpose = oneTrustIABConsent.purpose[i].split(':'),
                        _isExist2 = indexOf(globalConsentData.allowedPurposeIds, purpose[0]);
                    if (_isExist2 != -1) {
                        oneTrustIABConsent.purpose[i] = purpose[0] + ":true";
                        var group = getGroupByPurposeId(purpose[0]);
                        if (group && group.GroupId) {
                            allowedGroup.push(group);
                        }
                    }
                }
                for (var index = 0; index < allowedGroup.length; index++) {
                    var element = allowedGroup[index];
                    isExist = indexOf(optanonHtmlGroupData, getGroupIdForCookie(element) + ':0');
                    if (isExist != -1) {
                        optanonHtmlGroupData[index] = getGroupIdForCookie(element) + ':1';
                    }
                }
            }

            if (oneTrustIABConsent && oneTrustIABConsent.vendors) {
                for (var j = 0; j < oneTrustIABConsent.vendors.length; j++) {
                    var vendor = oneTrustIABConsent.vendors[j].split(':');
                    isExist = indexOf(globalConsentData.allowedVendorIds, vendor[0]);
                    if (isExist != -1) {
                        oneTrustIABConsent.vendors[j] = vendor[0] + ":true";
                    }
                }
            }

            updateConsentData();
        }
    };

    function isInitIABCookieData() {
        return IAB3rdPartyCookieValue === "init" ? true : false;
    }

    function getGroupByPurposeId(purposeId) {
        var json = optanonData(),
            group = void 0;
        if (json && json.Groups) {
            for (var i = 0; i < json.Groups.length; i++) {
                group = json.Groups[i];
                if (isTopLevelGroup(group) && group.Purposes && group.Purposes.length > 0) {
                    for (var index = 0; index < group.Purposes.length; index++) {
                        if (group.Purposes[index].purposes.purposeId == purposeId) {
                            return group;
                        }
                    }
                }
            }
        }
    }


    this.setGeoLocation = function (response) {
        isInEU = response;
    };

    function getGeoLocation() {
        var script = document.createElement('script');
        script.src = 'https://geolocation-dev.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback=?';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}).call(Optanon);

if (typeof window.jsonFeed !== 'function') {
    var jsonFeed = function jsonFeed(options) {
        Optanon.setGeoLocation(options.displayPopup);
    };
}
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OneTrust = function () {
    function OneTrust(el) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _classCallCheck(this, OneTrust);

        switch (type) {
            case 'ce':
                var browerType = OneTrust.browser().type.toLowerCase(),
                    browerVersion = OneTrust.browser().version;
                if (browerVersion < 10 && browerType === 'safari' || browerType === 'chrome' && browerVersion <= 44 || browerVersion <= 40 && browerType === 'firefox') {
                    var tmp = document.implementation.createHTMLDocument();
                    tmp.body.innerHTML = el;
                    this.el = tmp.body.children[0];
                } else {
                    var documentFragment = document.createRange().createContextualFragment(el);
                    this.el = documentFragment.firstChild;
                }
                this.length = 1;
                break;
            case '':
                this.el = el === document || el === window ? document.documentElement : typeof el !== 'string' ? el : document.querySelectorAll(el);
                this.length = el === document || el === window || typeof el !== 'string' ? 1 : this.el.length;
                break;
            default:
                this.length = 0;
        }
        this.selector = el;
        this.useEl = false;
    }

    _createClass(OneTrust, [{
        key: 'fadeOut',
        value: function fadeOut() {
            var _this = this;

            var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style.visibility = 'hidden';
                    this.el[i].style.opacity = '0';
                    this.el[i].style.transition = 'visibility 0s ' + duration + 'ms, opacity ' + duration + 'ms linear';
                }
            }
            var timer = setInterval(function () {
                if (_this.el.length >= 1) {
                    for (var _i = 0; _i < _this.el.length; _i++) {
                        if (_this.el[_i].style.opacity <= 0) {
                            _this.el[_i].style.display = "none";
                            clearInterval(timer);
                            // Reset inline styles added to popup background
                            if (_this.el[_i].id === 'optanon-popup-bg') {
                                _this.el[_i].setAttribute('style', '');
                            }
                        }
                    }
                }
            }, duration);

            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style.display = 'none';
                }
            } else {
                if (!OneTrust.isNodeList(this.el)) {
                    this.el.style.display = 'none';
                }
            }
            return this;
        }
    }, {
        key: 'show',
        value: function show() {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style.display = 'block';
                }
            } else {
                if (!OneTrust.isNodeList(this.el)) {
                    this.el.style.display = 'block';
                }
            }
            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].parentNode.removeChild(this.el[i]);
                }
            } else {
                this.el.parentNode.removeChild(this.el);
            }
            return this;
        }
    }, {
        key: 'css',
        value: function css(val) {
            if (val) {
                if (this.el.length >= 1) {
                    if (val.includes(':')) {
                        for (var i = 0; i < this.el.length; i++) {
                            this.el[i].setAttribute('style', val);
                        }
                    } else {
                        for (var _i2 = 0; _i2 < this.el.length; _i2++) {
                            return this.el[_i2].style[val];
                        }
                    }
                } else {
                    if (val.includes(':')) {
                        this.el.setAttribute('style', val);
                    } else {
                        return this.el.style[val];
                    }
                }
            }
            return this;
        }
    }, {
        key: 'offset',
        value: function offset() {
            if (this.el.length >= 1) {
                return this.el[0].getBoundingClientRect();
            } else {
                return this.el.getBoundingClientRect();
            }
        }
    }, {
        key: 'prop',
        value: function prop(_prop, value) {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i][_prop] = value;
                }
            } else {
                this.el[_prop] = value;
            }
            return this;
        }
    }, {
        key: 'removeClass',
        value: function removeClass(className) {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    if (this.el[i].classList) this.el[i].classList.remove(className);else this.el[i].className = this.el[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            } else {
                if (this.el.classList) this.el.classList.remove(className);else this.el.className = this.el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
            return this;
        }
    }, {
        key: 'addClass',
        value: function addClass(className) {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    if (this.el[i].classList) this.el[i].classList.add(className);else this.el[i].className += ' ' + className;
                }
            } else {
                if (this.el.classList) this.el.classList.add(className);else this.el.className += ' ' + className;
            }
            return this;
        }
    }, {
        key: 'on',
        value: function on(eventName, option1, option2) {
            var _this2 = this;

            if (typeof option1 !== 'string') {
                if (this.el.nodeName === 'HTML' && eventName === 'load' || eventName === 'resize' || eventName === 'scroll') {
                    switch (eventName) {
                        case 'load':
                            window.onload = option1;
                            break;
                        case 'resize':
                            window.onresize = option1;
                            break;
                        case 'scroll':
                            window.onscroll = option1;
                            break;
                    }
                } else {
                    if (this.el.length >= 1) {
                        for (var i = 0; i < this.el.length; i++) {
                            this.el[i].addEventListener(eventName, option1);
                        }
                    } else {
                        this.el.addEventListener(eventName, option1);
                    }
                }
            } else {

                if (this.el.nodeName === 'HTML' && eventName === 'load' || eventName === 'resize' || eventName === 'scroll') {
                    switch (eventName) {
                        case 'load':
                            window.onload = option2;
                            break;
                        case 'resize':
                            window.onresize = option2;
                            break;
                        case 'scroll':
                            window.onscroll = option2;
                            break;
                    }
                } else {
                    var parentEvent = function parentEvent(e) {
                        var element = e.target;
                        _this2.el.eventExecuted = true;

                        Array.prototype.forEach.call(document.querySelectorAll(option1), function (el, idx) {
                            var event = 'on' + eventName;
                            el[event] = option2;

                            if (el === element && el[event]) {
                                el[event]();
                            }
                        });
                        if (_this2.el[0]) {
                            _this2.el[0].removeEventListener(eventName, parentEvent);
                        } else {
                            _this2.el.removeEventListener(eventName, parentEvent);
                        }
                    };

                    if (this.el.length >= 1) {
                        for (var _i3 = 0; _i3 < this.el.length; _i3++) {
                            this.el[_i3].eventExecuted = false;

                            if (!this.el[_i3].eventExecuted) {
                                this.el[_i3].addEventListener(eventName, parentEvent);
                            }
                        }
                    } else {
                        this.el.eventExecuted = false;

                        if (!this.el.eventExecuted) {
                            this.el.addEventListener(eventName, parentEvent);
                        }
                    }
                }
            }
            return this;
        }
    }, {
        key: 'off',
        value: function off(eventName, eventHandler) {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].removeEventListener(eventName, eventHandler);
                }
            } else {
                this.el.removeEventListener(eventName, eventHandler);
            }
            return this;
        }
    }, {
        key: 'one',
        value: function one(eventName, eventHandler) {
            if (this.el.length >= 1) {
                for (var i = 0; i < this.el.length; i++) {
                    this.el[i].addEventListener(eventName, function (e) {
                        e.stopPropagation();
                        if (e.currentTarget.dataset.triggered) return;
                        eventHandler();
                        e.currentTarget.dataset.triggered = true;
                    });
                }
            } else {
                this.el.addEventListener(eventName, function (e) {
                    e.stopPropagation();
                    if (e.currentTarget.dataset.triggered) return;
                    eventHandler();
                    e.currentTarget.dataset.triggered = true;
                });
            }
            return this;
        }
    }, {
        key: 'trigger',
        value: function trigger(customEvent) {
            var event = new CustomEvent(customEvent, { customEvent: 'yes' });
            // document.createEvent('customEvent');
            this.el.dispatchEvent(event);
            return this;
        }
    }, {
        key: 'focus',
        value: function focus() {
            if (this.el.length >= 1) {
                this.el[0].focus();
            } else {
                this.el.focus();
            }
            return this;
        }
    }, {
        key: 'attr',
        value: function attr(attribute, value) {
            if (this.el.length >= 1) {
                if (value) {
                    if (attribute === 'class') {
                        this.addClass(value);
                    } else {
                        this.el[0].setAttribute(attribute, value);
                    }
                    return this;
                } else {
                    return this.el[0].getAttribute(attribute);
                }
            } else {
                if (value) {
                    if (attribute === 'class') {
                        this.addClass(value);
                    } else {
                        this.el.setAttribute(attribute, value);
                    }
                    return this;
                } else {
                    return this.el.getAttribute(attribute);
                }
            }
        }
    }, {
        key: 'html',
        value: function html(element) {
            if (element === undefined || element === null) {
                if (this.el.length >= 1) {
                    for (var i = 0; i < this.el.length; i++) {
                        return this.el[i].innerHTML;
                    }
                } else {
                    return this.el.innerHTML;
                }
            } else {
                if (this.el.length >= 1) {
                    for (var i = 0; i < this.el.length; i++) {
                        this.el[i].innerHTML = element;
                    }
                } else {
                    this.el.innerHTML = element;
                }
            }
            return this;
        }
    }, {
        key: 'append',
        value: function append(element) {
            if (typeof element === 'string' && !element.includes('<') && !element.includes('>')) {
                this.el.insertAdjacentText('beforeend', element);
            } else {
                if (Array.isArray(element)) {
                    var self = this;
                    Array.prototype.forEach.call(element, function (domEl, idx) {
                        document.querySelector(self.selector).appendChild(new OneTrust(domEl, 'ce').el);
                    });
                } else if (typeof element !== 'string' && !Array.isArray(element)) {
                    if (typeof this.selector === 'string') {
                        document.querySelector(this.selector).appendChild(element);
                    } else {
                        if (element.length >= 1) {
                            for (var i = 0; i < element.length; i++) {
                                this.selector.appendChild(element[i]);
                            }
                        } else {
                            this.selector.appendChild(element);
                        }
                    }
                } else {
                    if (typeof this.selector === 'string') {
                        document.querySelector(this.selector).appendChild(new OneTrust(element, 'ce').el);
                    } else {
                        if (this.useEl) {

                            var frag = document.createDocumentFragment();
                            var isTableEl = element.includes('<th') || element.includes('<td') ? true : false;

                            if (isTableEl) {
                                var el = element.split(' ')[0].split('<')[1];
                                frag.appendChild(document.createElement(el));
                                frag.firstChild.innerHTML = element;
                            }

                            Array.prototype.forEach.call(this.el, function (domEl, idx) {
                                if (isTableEl) {
                                    domEl.appendChild(frag.firstChild);
                                } else {
                                    domEl.appendChild(new OneTrust(element, 'ce').el);
                                }
                            });
                        } else {
                            this.selector.appendChild(new OneTrust(element, 'ce').el);
                        }
                    }
                }
            }
            return this;
        }
    }, {
        key: 'text',
        value: function text(string) {
            if (this.el.length >= 1) {
                if (!string) {
                    return this.el[0].textContent;
                } else {
                    Array.prototype.forEach.call(this.el, function (element, idx) {
                        element.textContent = string;
                    });
                }
            } else {
                if (!string) {
                    return this.el.textContent;
                } else {
                    this.el.textContent = string;
                }
            }
            return this;
        }
    }, {
        key: 'data',
        value: function data(key, value) {
            if (this.el.length < 1) {
                return this;
            } else {
                if (this.el.length >= 1) {
                    Array.prototype.forEach.call(this.el, function (element, idx) {
                        executeData(element, value);
                    });
                } else {
                    return executeData(this.el, value);
                }
            }
            function executeData(element, value) {
                if (!value) {
                    return JSON.parse(element.getAttribute('data-' + key));
                } else {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        element.setAttribute('data-' + key, JSON.stringify(value));
                    } else {
                        element.setAttribute('data-' + key, value);
                    }
                }
            }
            return this;
        }
    }, {
        key: 'height',
        value: function height(value) {
            var pt = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('padding-top').split('px')[0]),
                pb = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('padding-bottom').split('px')[0]),
                mt = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('margin-top').split('px')[0]),
                mb = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('margin-bottom').split('px')[0]),
                height = parseInt(window.getComputedStyle(this.el, null).getPropertyValue('height').split('px')[0]),
                arr = [pt, pb, mt, mb];
            var totalHeight = 0;

            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    totalHeight += arr[i];
                }
            }

            if (value) {
                var unit = value.toString().split(parseInt(value))[1] ? value.toString().split(parseInt(value))[1] : 'px',
                    extractedValue = typeof value === 'number' ? value : parseInt(value.toString().split(unit)[0]);

                if (unit && unit === 'px' || unit === '%' || unit === 'em' || unit === 'rem') {
                    if (extractedValue > 0) {
                        this.el.style.height = totalHeight + extractedValue + unit;
                    } else {
                        if (value === 'auto') {
                            this.el.style.height = value;
                        }
                    }
                }
            } else {
                if (this.selector === document) {
                    return height;
                } else {
                    return this.el.clientHeight - totalHeight;
                }
            }
            return this;
        }
    }, {
        key: 'find',
        value: function find(selector) {
            var list = [];
            if (selector) {
                // Id, Class, Tag, DOM Element
                if (typeof selector === 'string') {
                    var isClass = selector.split('')[0] === '.',
                        isId = selector.split('')[0] === '#',
                        isTag = false;

                    if (!isClass && !isId) {
                        isTag = true;
                        Array.prototype.forEach.call(this.el.childNodes, function (element, idx) {
                            if (element.tagName.toLowerCase() === selector) {
                                list.push(element);
                            }
                        });
                    } else {
                        var identifier = isClass ? 'classList' : 'id';

                        Array.prototype.forEach.call(this.el.childNodes, function (element, idx) {
                            if (typeof element[identifier].includes === 'function' && element[identifier].includes(selector.split(selector.split('')[0])[1])) {
                                list.push(element);
                            } else {
                                if (element[identifier] && element[identifier].contains(selector.split(selector.split('')[0])[1])) {
                                    list.push(element);
                                }
                            }
                        });
                    }
                } else {
                    // Handle DOM Element here

                }
                this.el = list;
                this.useEl = true;
            }
            return this;
        }
    }, {
        key: 'each',
        value: function each(callback) {
            var convertBack = false;
            if (this.el.length == undefined) {
                this.el = [this.el];
                convertBack = true;
            }
            Array.prototype.forEach.call(this.el, callback);
            if (convertBack) {
                this.el = this.el[0];
            }
            return this;
        }
    }, {
        key: 'parent',
        value: function parent(selector) {
            var list = [],
                isList = Object.prototype.toString.call(this.el).includes('NodeList');

            if (isList) {
                Array.prototype.forEach.call(this.el, function (element, idx) {
                    list.push(element.parentNode);
                });
            } else {
                list.push(this.el.parentNode);
            }

            list = list.filter(function (x, i, a) {
                return a.indexOf(x) == i;
            });

            if (selector) {
                var filteredList = [];
                list.forEach(function (item) {
                    if (selector.includes('.')) {
                        if (item.classList.value.includes(selector.split('.')[1])) {
                            filteredList.push(item);
                        }
                    } else {
                        if (item.id === selector.split('#')[1]) {
                            filteredList.push(item);
                        }
                    }
                });
                list = filteredList;
            }
            this.el = list;
            return this;
        }
    }, {
        key: 'is',
        value: function is(selector) {
            if (this.el.length) {
                return (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], selector);
            } else {
                return (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, selector);
            }
        }
    }, {
        key: 'hasClass',
        value: function hasClass(className) {
            if (this.el.length == undefined) {
                return this.el.classList.contains(className);
            } else {
                return this.el[0].classList.contains(className);
            }
        }
    }, {
        key: 'filter',
        value: function filter(filterFn) {
            this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), filterFn);
            return this;
        }
    }, {
        key: 'replaceWith',
        value: function replaceWith(string) {
            if (typeof this.selector !== 'string') {
                this.el.outerHTML = string;
            } else {
                Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (element, idx) {
                    element.outerHTML = string;
                });
            }
            return this;
        }
    }, {
        key: 'prepend',
        value: function prepend(el) {
            Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (parent, idx) {
                parent.insertBefore(new OneTrust(el, 'ce').el, parent.firstChild);
            });
            return this;
        }
    }, {
        key: 'prev',
        value: function prev(modifier) {
            this.el = OneTrust.prevNextHelper('previousElementSibling', this.selector, modifier);
            return this;
        }
    }, {
        key: 'next',
        value: function next(modifier) {
            this.el = OneTrust.prevNextHelper('nextElementSibling', this.selector, modifier);
            return this;
        }
    }, {
        key: 'before',
        value: function before(htmlString) {
            Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (element, idx) {
                element.insertAdjacentHTML('beforebegin', htmlString);
            });
            return this;
        }
    }, {
        key: 'after',
        value: function after(htmlString) {
            Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (element, idx) {
                element.insertAdjacentHTML('afterend', htmlString);
            });
            return this;
        }
    }, {
        key: 'siblings',
        value: function siblings() {
            var _this3 = this;

            return Array.prototype.filter.call(this.el[0].parentNode.children, function (child) {
                return child !== _this3.el[0];
            });
        }
    }, {
        key: 'outerHeight',
        value: function outerHeight() {
            if (typeof this.selector !== 'string') {
                Array.prototype.forEach.call(this.selector, function (element, idx) {
                    return element.offsetHeight;
                });
            } else {
                return document.querySelector(this.selector).offsetHeight;
            }
        }
    }, {
        key: 'animate',
        value: function animate(properties, duration) {
            var _this4 = this;

            this.el = document.querySelector(this.selector);

            var _loop = function _loop(prop) {
                var style = document.createElement('style');
                style.type = 'text/css';

                var animate = function animate() {
                    var value = parseInt(properties[prop]),
                        unit = properties[prop].split(parseInt(properties[prop]))[1] ? properties[prop].split(parseInt(properties[prop]))[1] : 'px',
                        keyFrames = '\n                        @keyframes slide-' + (prop === 'top' ? 'up' : 'down') + '-custom {\n                            0% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (prop === 'top' ? _this4.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                            }\n                            100% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (value + unit) + ';\n                            }\n                        }\n                        @-webkit-keyframes slide-' + (prop === 'top' ? 'up' : 'down') + '-custom {\n                            0% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (prop === 'top' ? _this4.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                            }\n                            100% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (value + unit) + ';\n                            }\n                        }\n                        @-moz-keyframes slide-' + (prop === 'top' ? 'up' : 'down') + '-custom {\n                            0% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (prop === 'top' ? _this4.el.getBoundingClientRect().top : window.innerHeight) + 'px !important;\n                            }\n                            100% {\n                                ' + (prop === 'top' ? 'top' : 'bottom') + ': ' + (value + unit) + ';\n                            }\n                        }\n                        ';

                    style.innerHTML = keyFrames;
                    document.getElementsByTagName('head')[0].appendChild(style);

                    if (OneTrust.browser().type = 'Safari' && OneTrust.browser().version <= 8) {
                        var animation = prop === 'top' ? '-webkit-animation: slide-up-custom ' : '-webkit-animation: slide-down-custom ' + duration + 'ms' + ' ease-out forwards;';
                        _this4.el.setAttribute('style', animation);
                    } else {
                        _this4.el.style.animationName = prop === 'top' ? 'slide-up-custom' : 'slide-down-custom';
                        _this4.el.style.animationDuration = duration + 'ms';
                        _this4.el.style.animationFillMode = 'forwards';
                        _this4.el.style.animationTimingFunction = 'ease-out';
                    }
                };
                animate();
            };

            for (var prop in properties) {
                _loop(prop);
            }
            return this;
        }
    }, {
        key: 'wrap',
        value: function wrap(wrappingElement) {
            Array.prototype.forEach.call(document.querySelectorAll(this.selector), function (element, idx) {
                var wrapper = void 0,
                    browerType = OneTrust.browser().type.toLowerCase(),
                    browerVersion = OneTrust.browser().version;

                if (browerVersion < 10 && browerType === 'safari' || browerType === 'chrome' && browerVersion <= 44 || browerVersion <= 40 && browerType === 'firefox') {
                    var tmp = document.implementation.createHTMLDocument();
                    tmp.body.innerHTML = wrappingElement;
                    wrapper = tmp.body.children[0];
                } else {
                    wrapper = document.createRange().createContextualFragment(wrappingElement).firstChild;
                }
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
            });
            return this;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            return this.el.scrollTop;
        }
    }], [{
        key: 'inArray',
        value: function inArray(value, arr) {
            return arr.indexOf(value);
        }
    }, {
        key: 'ajax',
        value: function ajax(options) {
            var type = void 0,
                url = void 0,
                dataType = void 0,
                contentType = void 0,
                data = void 0,
                success = void 0,
                error = null,
                request = new XMLHttpRequest();

            type = options.type;
            url = options.url;
            dataType = options.dataType;
            contentType = options.contentType;
            data = options.data;
            success = options.success;
            error = options.error;


            request.open(type, url, true);
            request.setRequestHeader('Content-Type', contentType);

            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    var response = JSON.parse(this.response);
                    success(response);
                } else {
                    // We reached our target server, but it returned an error
                    error({ message: 'Error Loading Data', statusCode: this.status });
                }
            };

            request.onerror = function (err) {
                // There was a connection error of some sort
                error(err);
            };

            type.toLowerCase() === 'post' || type.toLowerCase() === 'put' ? request.send(data) : request.send();
        }
    }, {
        key: 'getJSON',
        value: function getJSON(url, callback, error) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    var data = JSON.parse(this.response);
                    callback(data);
                } else {
                    // We reached our target server, but it returned an error
                    error({ message: 'Error Loading Data', statusCode: this.status });
                }
            };

            request.onerror = function (err) {
                // There was a connection error of some sort
                error(err);
            };
            request.send();
        }
    }, {
        key: 'prevNextHelper',
        value: function prevNextHelper(property, item, modifier) {
            var domEl = [];
            typeof item === 'string' ? Array.prototype.forEach.call(document.querySelectorAll(item), function (element, idx) {
                executePrevNextHelper(property, element, modifier);
            }) : executePrevNextHelper(property, item, modifier);

            function executePrevNextHelper(property, element, modifier) {
                if (element[property] && modifier) {
                    if (modifier.includes('.')) {
                        if (element[property].classList[0] || element[property].classList.value && element[property].classList.value.includes(modifier.split('.')[1])) {
                            domEl.push(element[property]);
                        }
                    } else if (modifier.includes('#')) {
                        if (element[property].id === modifier.split('#')[1]) {
                            domEl.push(element[property]);
                        }
                    } else {
                        if (element[property].tagName === document.createElement(modifier.trim()).tagName) {
                            domEl.push(element[property]);
                        }
                    }
                } else {
                    if (element[property]) {
                        domEl.push(element[property]);
                    }
                }
            }
            return domEl;
        }
    }, {
        key: 'browser',
        value: function browser() {
            navigator.sayswho = function () {
                var ua = navigator.userAgent,
                    tem = void 0,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(M[1])) {
                    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE ' + (tem[1] || '');
                }
                if (M[1] === 'Chrome') {
                    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
                }
                M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
                return M.join(' ');
            }();

            var version = parseInt(navigator.sayswho.split(' ')[1]),
                type = navigator.sayswho.split(' ')[0],
                specs = {
                version: version,
                type: type,
                userAgent: navigator.userAgent
            };
            return specs;
        }
    }, {
        key: 'isNodeList',
        value: function isNodeList(obj) {
            if (Object.prototype.toString.call(obj) === '[object NodeList]') {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return OneTrust;
}();

Optanon.Init();

window.__cmp.proccessQueue();

