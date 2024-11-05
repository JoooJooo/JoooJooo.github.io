"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([["296"],{93381:function(e,t,n){n.d(t,{ju:function(){return p},y:function(){return h}});var r=n(8932);function i(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){n(e);return}c.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)})}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var l=r.z.object({loginScopes:r.z.preprocess(function(e){return"string"==typeof e?e.split(","):e},r.z.array(r.z.string()).min(1)),redirectStartPage:r.z.string().url()}),s=function(){var e,t,n;function r(e){var t=e.application,n=e.loginHintProvider,i=e.config,o=e.logger;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),c(this,"logger",void 0),c(this,"loginHintProvider",void 0),c(this,"client",void 0),c(this,"config",void 0),this.client=t,this.loginHintProvider=n,this.logger=o,this.config=i}return e=r,t=[{key:"login",value:function(e){var t=this;return o(function(){var n,r,i,o;return u(this,function(a){switch(a.label){case 0:if("unauthenticated"!=(n=t.readUserContext()).type)return t.logger.trace("User already logged in"),[2,n];return[4,t.client.handleRedirectPromise()];case 1:return(i=(null!==(r=a.sent())&&void 0!==r?r:{}).account)&&(t.logger.trace("login complete"),t.client.setActiveAccount(i)),[4,t.loginHintProvider()];case 2:if(o=a.sent(),"unauthenticated"!==(n=t.readUserContext()).type)return t.logger.trace("User logged in via silent login"),[2,n];if(e)return t.logger.warn("Silent login requested and user is currently unauthenticated"),[2,n];return[4,t.client.acquireTokenRedirect({scopes:t.config.loginScopes,loginHint:o,redirectStartPage:t.config.redirectStartPage})];case 3:throw a.sent(),Error("Impossible to reach statement")}})})()}},{key:"readUserContext",value:function(){var e,t=this.client.getActiveAccount();if(!t)return{type:"unauthenticated"};var n=t.idTokenClaims;if(!n)return this.logger.trace("No token claims on current user"),{type:"unauthenticated"};var r=t.name,i=n.oid,o=null==n?void 0:n.preferred_username,a=null!==(e=null==n?void 0:n.wids)&&void 0!==e?e:[];return r&&i&&o?{type:"72f988bf-86f1-41af-91ab-2d7cd011db47"===t.tenantId?"internal":"authenticated",aadId:i,isTenantAdmin:a.some(function(e){return"69091246-20e8-4a56-aa4d-066075b2a7a8"===e||"62e90394-69f5-4237-9190-012177145e10"===e}),name:r,userName:t.username,preferredUserName:o,tenantId:t.tenantId}:(this.logger.trace("Missing claims for current user %o",{aadId:!!i,preferred_username:!!o,name:!!r}),{type:"unauthenticated"})}},{key:"getToken",value:function(e){var t=this;return o(function(){return u(this,function(n){switch(n.label){case 0:return[4,t.client.acquireTokenSilent({scopes:e})];case 1:return[2,{type:"success",token:n.sent().accessToken}]}})})()}}],a(e.prototype,t),r}(),f=r.z.object({auth:r.z.object({clientId:r.z.string(),authority:r.z.optional(r.z.string()),redirectUri:r.z.string()}),cache:r.z.optional(r.z.object({}))}),p=r.z.object({msal:f,client:l});function h(e){return g.apply(this,arguments)}function g(){return(g=o(function(e){var t,r;return u(this,function(i){switch(i.label){case 0:return[4,n.e("193").then(n.bind(n,1536))];case 1:return[4,(t=new(i.sent()).PublicClientApplication(e.config.msal)).initialize()];case 2:var o,a;return i.sent(),r=new s((o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},e),a=(a={application:t,config:e.config.client},a),Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))}),o)),[2,{msal:t,authClient:r}]}})})).apply(this,arguments)}},47266:function(e,t,n){n.r(t),n.d(t,{createHost:function(){return r.L}});var r=n(8414)},24625:function(e,t,n){n.d(t,{uB:function(){return c}});var r=n(11827);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o="preferred_theme",a=function e(t){var n=this,a=t.logger;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),i(this,"logger",void 0),i(this,"getHostTheme",function(){var e;return null!==(e=localStorage.getItem(o))&&void 0!==e?e:n.setTheme(r.b.Default)}),i(this,"updateTheme",function(e){return n.setTheme(e)}),i(this,"setTheme",function(e){return n.logger.log("Setting ".concat(e," theme")),localStorage.setItem(o,r.b.Default),e}),this.logger=a};function c(e){return{themeClientService:new a({logger:e})}}},8414:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(93381),i=n(24625);function o(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){n(e);return}c.done?t(u):Promise.resolve(u).then(r,i)}function a(e){return c.apply(this,arguments)}function c(){var e;return e=function(e){var t,n,o,a,c;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,function(u){switch(u.label){case 0:return t=e.config,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++){if(n=o[r],!(t.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}}return i}(e,["config"]),o=r.ju.parse(t.auth),[4,(0,r.y)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i,o;r=e,i=t,o=n[t],i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o})}return e}({config:o},n))];case 1:return a=u.sent().authClient,[4,(0,i.uB)(n.logger)];case 2:return c=u.sent().themeClientService,[2,{auth:a,themeService:c}]}})},(c=function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)})}).apply(this,arguments)}}}]);
//# sourceMappingURL=296.chunk.js.map