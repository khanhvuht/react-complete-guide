webpackJsonp([1],{161:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"BurgerBuilder",function(){return m});var i=t(0),A=t.n(i),s=t(9),l=t(19),c=t(178),d=t(186),u=t(169),C=t(192),p=t(165),b=t(174),f=t(20),B=t(47),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=function(e){function n(){var e,t,a,i;r(this,n);for(var A=arguments.length,s=Array(A),l=0;l<A;l++)s[l]=arguments[l];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),a.state={purchasing:!1},a.purchaseHandler=function(){a.props.isAuthenticated?a.setState({purchasing:!0}):(a.props.osSetAuthRedirectPath("/checkout"),a.props.history.push("/auth"))},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){a.props.onInitPurchase(),a.props.history.push("/checkout")},i=t,o(a,i)}return a(n,e),g(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(n){return e[n]}).reduce(function(e,n){return e+n},0)>0}},{key:"render",value:function(){var e=Object.assign({},this.props.ings);for(var n in e)e[n]=e[n]<=0;var t=null,r=this.props.error?A.a.createElement("p",null,"Ingredients can't be loaded!"):A.a.createElement(p.a,null);return this.props.ings&&(r=A.a.createElement(l.a,null,A.a.createElement(c.a,{ingredients:this.props.ings}),A.a.createElement(d.a,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price}),"isAuth=",this.props.isAuthenticated),t=A.a.createElement(C.a,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),A.a.createElement(l.a,null,A.a.createElement(u.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},t),r)}}]),n}(i.Component),h=function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},_=function(e){return{onIngredientAdded:function(n){return e(B.a(n))},onIngredientRemoved:function(n){return e(B.i(n))},onInitIngredients:function(){return e(B.e())},onInitPurchase:function(){return e(B.h())},osSetAuthRedirectPath:function(n){return e(B.j(n))}}};n.default=Object(s.b)(h,_)(Object(b.a)(m,f.a))},165:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(166),i=t.n(a),A=function(){return o.a.createElement("div",{className:i.a.Loader},"Loading...")};n.a=A},166:function(e,n,t){var r=t(167);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},167:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,'.Spinner__Loader__3dgUo,.Spinner__Loader__3dgUo:after,.Spinner__Loader__3dgUo:before{border-radius:50%}.Spinner__Loader__3dgUo{color:#521751;font-size:11px;text-indent:-99999em;margin:55px auto;position:relative;width:10em;height:10em;-webkit-box-shadow:inset 0 0 0 1em;box-shadow:inset 0 0 0 1em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.Spinner__Loader__3dgUo:after,.Spinner__Loader__3dgUo:before{position:absolute;content:""}.Spinner__Loader__3dgUo:before{width:5.2em;height:10.2em;background:#fff;border-radius:10.2em 0 0 10.2em;top:-.1em;left:-.1em;-webkit-transform-origin:5.2em 5.1em;-ms-transform-origin:5.2em 5.1em;transform-origin:5.2em 5.1em;-webkit-animation:Spinner__load2__1sg5x 2s infinite ease 1.5s;animation:Spinner__load2__1sg5x 2s infinite ease 1.5s}.Spinner__Loader__3dgUo:after{width:5.2em;height:10.2em;background:#fff;border-radius:0 10.2em 10.2em 0;top:-.1em;left:5.1em;-webkit-transform-origin:0 5.1em;-ms-transform-origin:0 5.1em;transform-origin:0 5.1em;-webkit-animation:Spinner__load2__1sg5x 2s infinite ease;animation:Spinner__load2__1sg5x 2s infinite ease}@-webkit-keyframes Spinner__load2__1sg5x{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Spinner__load2__1sg5x{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',"",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/UI/Spinner/Spinner.css"],names:[],mappings:"AAAA,qFAGE,iBAAmB,CACpB,AACD,wBACE,cAAe,AACf,eAAgB,AAChB,qBAAsB,AACtB,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mCAAoC,AAC5B,2BAA4B,AACpC,gCAAiC,AACjC,4BAA6B,AAC7B,uBAAyB,CAC1B,AACD,6DAEE,kBAAmB,AACnB,UAAY,CACb,AACD,+BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAa,AACb,qCAAsC,AACtC,iCAAkC,AAC9B,6BAA8B,AAClC,8DAA+C,AAC/C,qDAAuC,CACxC,AACD,8BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAY,AACZ,iCAAoC,AACpC,6BAAgC,AAC5B,yBAA4B,AAChC,yDAA0C,AAC1C,gDAAkC,CACnC,AACD,yCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF,AACD,iCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF",file:"Spinner.css",sourcesContent:[".Loader,\n.Loader:before,\n.Loader:after {\n  border-radius: 50%;\n}\n.Loader {\n  color: #521751;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  -webkit-box-shadow: inset 0 0 0 1em;\n          box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.Loader:before,\n.Loader:after {\n  position: absolute;\n  content: '';\n}\n.Loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n  -ms-transform-origin: 5.2em 5.1em;\n      transform-origin: 5.2em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n.Loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0px 5.1em;\n  -ms-transform-origin: 0px 5.1em;\n      transform-origin: 0px 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}"],sourceRoot:""}]),n.locals={Loader:"Spinner__Loader__3dgUo",load2:"Spinner__load2__1sg5x"}},168:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(170),i=t.n(a),A=function(e){return o.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)};n.a=A},169:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),A=t.n(i),s=t(172),l=t.n(s),c=t(19),d=t(48),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),C=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),u(n,[{key:"shouldComponentUpdate",value:function(e,n){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return A.a.createElement(c.a,null,A.a.createElement(d.a,{show:this.props.show,clicked:this.props.modalClosed}),A.a.createElement("div",{className:l.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(i.Component);n.a=C},170:function(e,n,t){var r=t(171);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},171:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,".Button__Button__ajevi{background-color:transparent;border:none;color:#fff;outline:none;cursor:pointer;font:inherit;padding:10px;margin:10px;font-weight:700}.Button__Button__ajevi:first-of-type{margin-left:0;padding-left:0}.Button__Button__ajevi:disabled{color:#ccc;cursor:not-allowed}.Button__Success__1DMln{color:#5c9210}.Button__Danger__18hYt{color:#944317}","",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/UI/Button/Button.css"],names:[],mappings:"AAAA,uBACI,6BAA8B,AAC9B,YAAa,AACb,WAAa,AACb,aAAc,AACd,eAAgB,AAChB,aAAc,AACd,aAAc,AACd,YAAa,AACb,eAAkB,CACrB,AAED,qCACI,cAAe,AACf,cAAgB,CACnB,AAED,gCACI,WAAY,AACZ,kBAAoB,CACvB,AAED,wBACI,aAAe,CAClB,AAED,uBACI,aAAe,CAClB",file:"Button.css",sourcesContent:[".Button {\n    background-color: transparent;\n    border: none;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    padding: 10px;\n    margin: 10px;\n    font-weight: bold;\n}\n\n.Button:first-of-type {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.Button:disabled {\n    color: #ccc;\n    cursor: not-allowed;\n}\n\n.Success {\n    color: #5C9210;\n}\n\n.Danger {\n    color: #944317;\n}"],sourceRoot:""}]),n.locals={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},172:function(e,n,t){var r=t(173);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},173:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,".Modal__Modal__cd320{position:fixed;z-index:500;background-color:#fff;width:70%;border:1px solid #ccc;-webkit-box-shadow:1px 1px 1px #000;box-shadow:1px 1px 1px #000;padding:16px;left:15%;top:30%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}@media (min-width:600px){.Modal__Modal__cd320{width:500px;left:calc(50% - 250px)}}","",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/UI/Modal/Modal.css"],names:[],mappings:"AAAA,qBACI,eAAgB,AAChB,YAAa,AACb,sBAAwB,AACxB,UAAW,AACX,sBAAuB,AACvB,oCAAsC,AAC9B,4BAA8B,AACtC,aAAc,AACd,SAAU,AACV,QAAS,AACT,8BAA+B,AACvB,sBAAuB,AAC/B,oCAAsC,AACtC,+BAAiC,AACjC,2BAA8B,CACjC,AAED,yBACI,qBACI,YAAa,AACb,sBAAwB,CAC3B,CACJ",file:"Modal.css",sourcesContent:[".Modal {\n    position: fixed;\n    z-index: 500;\n    background-color: white;\n    width: 70%;\n    border: 1px solid #ccc;\n    -webkit-box-shadow: 1px 1px 1px black;\n            box-shadow: 1px 1px 1px black;\n    padding: 16px;\n    left: 15%;\n    top: 30%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n}\n\n@media (min-width: 600px) {\n    .Modal {\n        width: 500px;\n        left: calc(50% - 250px);\n    }\n}"],sourceRoot:""}]),n.locals={Modal:"Modal__Modal__cd320"}},174:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),A=t.n(i),s=t(169),l=t(19),c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=function(e,n){return function(t){function i(){var e,n,t,a;r(this,i);for(var A=arguments.length,s=Array(A),l=0;l<A;l++)s[l]=arguments[l];return n=t=o(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(s))),t.state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},a=n,o(t,a)}return a(i,t),c(i,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=n.interceptors.request.use(function(n){return e.setState({error:null}),n}),this.resInterceptor=n.interceptors.response.use(function(e){return e},function(n){e.setState({error:n})})}},{key:"componentWillUnmount",value:function(){n.interceptors.request.eject(this.reqInterceptor),n.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return A.a.createElement(l.a,null,A.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),A.a.createElement(e,this.props))}}]),i}(i.Component)};n.a=d},178:function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var o=t(0),a=t.n(o),i=t(179),A=t.n(i),s=t(181),l=function(e){var n=Object.keys(e.ingredients).map(function(n){return[].concat(r(Array(e.ingredients[n]))).map(function(e,t){return a.a.createElement(s.a,{key:n+t,type:n})})}).reduce(function(e,n){return e.concat(n)},[]);return 0===n.length&&(n=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:A.a.Burger},a.a.createElement(s.a,{type:"bread-top"}),n,a.a.createElement(s.a,{type:"bread-bottom"}))};n.a=l},179:function(e,n,t){var r=t(180);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},180:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,".Burger__Burger__2h2kL{width:100%;margin:auto;height:250px;overflow:scroll;text-align:center;font-weight:700;font-size:1.2rem}@media (min-width:500px) and (min-height:400px){.Burger__Burger__2h2kL{width:350px;height:300px}}@media (min-width:500px) and (min-height:401px){.Burger__Burger__2h2kL{width:450px;height:400px}}@media (min-width:1000px) and (min-height:700px){.Burger__Burger__2h2kL{width:700px;height:600px}}","",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/Burger/Burger.css"],names:[],mappings:"AAAA,uBACI,WAAY,AACZ,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,AAClB,gBAAkB,CACrB,AAED,gDACI,uBACI,YAAa,AACb,YAAc,CACjB,CACJ,AAED,gDACI,uBACI,YAAa,AACb,YAAc,CACjB,CACJ,AAED,iDACI,uBACI,YAAa,AACb,YAAc,CACjB,CACJ",file:"Burger.css",sourcesContent:[".Burger {\n    width: 100%;\n    margin: auto;\n    height: 250px;\n    overflow: scroll;\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n@media (min-width: 500px) and (min-height: 400px) {\n    .Burger {\n        width: 350px;\n        height: 300px;\n    }\n}\n\n@media (min-width: 500px) and (min-height: 401px) {\n    .Burger {\n        width: 450px;\n        height: 400px;\n    }\n}\n\n@media (min-width: 1000px) and (min-height: 700px) {\n    .Burger {\n        width: 700px;\n        height: 600px;\n    }\n}"],sourceRoot:""}]),n.locals={Burger:"Burger__Burger__2h2kL"}},181:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),A=t.n(i),s=t(1),l=t.n(s),c=t(182),d=t.n(c),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),C=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),u(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=A.a.createElement("div",{className:d.a.BreadBottom});break;case"bread-top":e=A.a.createElement("div",{className:d.a.BreadTop},A.a.createElement("div",{className:d.a.Seeds1}),A.a.createElement("div",{className:d.a.Seeds2}));break;case"meat":e=A.a.createElement("div",{className:d.a.Meat});break;case"cheese":e=A.a.createElement("div",{className:d.a.Cheese});break;case"bacon":e=A.a.createElement("div",{className:d.a.Bacon});break;case"salad":e=A.a.createElement("div",{className:d.a.Salad});break;default:e=null}return e}}]),n}(i.Component);C.propTypes={type:l.a.string.isRequired},n.a=C},182:function(e,n,t){var r=t(183);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},183:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,'.BurgerIngredient__BreadBottom__2z9NQ{height:13%;background:-webkit-gradient(linear,left top,left bottom,from(#f08e4a),to(#e27b36));background:-webkit-linear-gradient(#f08e4a,#e27b36);background:-o-linear-gradient(#f08e4a,#e27b36);background:linear-gradient(#f08e4a,#e27b36);border-radius:0 0 30px 30px}.BurgerIngredient__BreadBottom__2z9NQ,.BurgerIngredient__BreadTop__2Pkwe{width:80%;-webkit-box-shadow:inset -15px 0 #c15711;box-shadow:inset -15px 0 #c15711;margin:2% auto}.BurgerIngredient__BreadTop__2Pkwe{height:20%;background:-webkit-gradient(linear,left top,left bottom,from(#bc581e),to(#e27b36));background:-webkit-linear-gradient(#bc581e,#e27b36);background:-o-linear-gradient(#bc581e,#e27b36);background:linear-gradient(#bc581e,#e27b36);border-radius:50% 50% 0 0;position:relative}.BurgerIngredient__Seeds1__2k2x7{width:10%;height:15%;position:absolute;background-color:#fff;left:30%;top:50%;border-radius:40%;-webkit-transform:rotate(-20deg);-ms-transform:rotate(-20deg);transform:rotate(-20deg);-webkit-box-shadow:inset -2px -3px #c9c9c9;box-shadow:inset -2px -3px #c9c9c9}.BurgerIngredient__Seeds1__2k2x7:after{left:-170%;top:-260%;-webkit-box-shadow:inset -1px 2px #c9c9c9;box-shadow:inset -1px 2px #c9c9c9}.BurgerIngredient__Seeds1__2k2x7:after,.BurgerIngredient__Seeds1__2k2x7:before{content:"";width:100%;height:100%;position:absolute;background-color:#fff;border-radius:40%;-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.BurgerIngredient__Seeds1__2k2x7:before{left:180%;top:-50%;-webkit-box-shadow:inset -1px -3px #c9c9c9;box-shadow:inset -1px -3px #c9c9c9}.BurgerIngredient__Seeds2__9Mret{width:10%;height:15%;position:absolute;background-color:#fff;left:64%;top:50%;border-radius:40%;-webkit-transform:rotate(10deg);-ms-transform:rotate(10deg);transform:rotate(10deg);-webkit-box-shadow:inset -3px 0 #c9c9c9;box-shadow:inset -3px 0 #c9c9c9}.BurgerIngredient__Seeds2__9Mret:before{content:"";width:100%;height:100%;position:absolute;background-color:#fff;left:150%;top:-130%;border-radius:40%;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-box-shadow:inset 1px 3px #c9c9c9;box-shadow:inset 1px 3px #c9c9c9}.BurgerIngredient__Meat__1LdrR{width:80%;height:8%;background:-webkit-gradient(linear,left top,left bottom,from(#7f3608),to(#702e05));background:-webkit-linear-gradient(#7f3608,#702e05);background:-o-linear-gradient(#7f3608,#702e05);background:linear-gradient(#7f3608,#702e05);margin:2% auto;border-radius:15px}.BurgerIngredient__Cheese__1eqwP{width:90%;height:4.5%;margin:2% auto;background:-webkit-gradient(linear,left top,left bottom,from(#f4d004),to(#d6bb22));background:-webkit-linear-gradient(#f4d004,#d6bb22);background:-o-linear-gradient(#f4d004,#d6bb22);background:linear-gradient(#f4d004,#d6bb22);border-radius:20px}.BurgerIngredient__Salad__2WBlr{width:85%;height:7%;margin:2% auto;background:-webkit-gradient(linear,left top,left bottom,from(#228c1d),to(#91ce50));background:-webkit-linear-gradient(#228c1d,#91ce50);background:-o-linear-gradient(#228c1d,#91ce50);background:linear-gradient(#228c1d,#91ce50);border-radius:20px}.BurgerIngredient__Bacon__2RZZH{width:80%;height:3%;background:-webkit-gradient(linear,left top,left bottom,from(#bf3813),to(#c45e38));background:-webkit-linear-gradient(#bf3813,#c45e38);background:-o-linear-gradient(#bf3813,#c45e38);background:linear-gradient(#bf3813,#c45e38);margin:2% auto}',"",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/Burger/BurgerIngredient/BurgerIngredient.css"],names:[],mappings:"AAAA,sCACI,WAAY,AAEZ,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,2BAA6B,CAIhC,AAED,yEAXI,UAAW,AAMX,yCAA0C,AAClC,iCAAkC,AAC1C,cAAgB,CAenB,AAZD,mCACI,WAAY,AAEZ,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,0BAA2B,AAI3B,iBAAmB,CACtB,AAED,iCACI,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,sBAAwB,AACxB,SAAU,AACV,QAAS,AACT,kBAAmB,AACnB,iCAAkC,AAC9B,6BAA8B,AAC1B,yBAA0B,AAClC,2CAA4C,AACpC,kCAAoC,CAC/C,AAED,uCAMI,WAAY,AACZ,UAAW,AAKX,0CAA2C,AACnC,iCAAmC,CAC5C,AAEH,+EAfI,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,sBAAwB,AAGxB,kBAAmB,AACnB,gCAAiC,AAC7B,4BAA6B,AACzB,uBAAyB,CAmBlC,AAdH,wCAMI,UAAW,AACX,SAAU,AAKV,2CAA4C,AACpC,kCAAoC,CAC7C,AAED,iCACE,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,sBAAwB,AACxB,SAAU,AACV,QAAS,AACT,kBAAmB,AACnB,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,wCAAyC,AACjC,+BAAiC,CAC1C,AAED,wCACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,sBAAwB,AACxB,UAAW,AACX,UAAW,AACX,kBAAmB,AACnB,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,yCAA0C,AAClC,gCAAkC,CAC3C,AAGH,+BACI,UAAW,AACX,UAAW,AACX,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,eAAgB,AAChB,kBAAoB,CACvB,AAED,iCACI,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,kBAAoB,CACvB,AAED,gCACI,UAAW,AACX,UAAW,AACX,eAAgB,AAChB,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,kBAAoB,CACvB,AAED,gCACI,UAAW,AACX,UAAW,AACX,mFAAwF,AACxF,oDAAsD,AACtD,+CAAiD,AACjD,4CAA8C,AAC9C,cAAgB,CACnB",file:"BurgerIngredient.css",sourcesContent:['.BreadBottom {\n    height: 13%;\n    width: 80%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#F08E4A), to(#e27b36));\n    background: -webkit-linear-gradient(#F08E4A, #e27b36);\n    background: -o-linear-gradient(#F08E4A, #e27b36);\n    background: linear-gradient(#F08E4A, #e27b36);\n    border-radius: 0 0 30px 30px;\n    -webkit-box-shadow: inset -15px 0 #c15711;\n            box-shadow: inset -15px 0 #c15711;\n    margin: 2% auto;\n}\n\n.BreadTop {\n    height: 20%;\n    width: 80%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#bc581e), to(#e27b36));\n    background: -webkit-linear-gradient(#bc581e, #e27b36);\n    background: -o-linear-gradient(#bc581e, #e27b36);\n    background: linear-gradient(#bc581e, #e27b36);\n    border-radius: 50% 50% 0 0;\n    -webkit-box-shadow: inset -15px 0 #c15711;\n            box-shadow: inset -15px 0 #c15711;\n    margin: 2% auto;\n    position: relative;\n}\n\n.Seeds1 {\n    width: 10%;\n    height: 15%;\n    position: absolute;\n    background-color: white;\n    left: 30%;\n    top: 50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(-20deg);\n        -ms-transform: rotate(-20deg);\n            transform: rotate(-20deg);\n    -webkit-box-shadow: inset -2px -3px #c9c9c9;\n            box-shadow: inset -2px -3px #c9c9c9;\n}\n\n.Seeds1:after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg);\n    -webkit-box-shadow: inset -1px 2px #c9c9c9;\n            box-shadow: inset -1px 2px #c9c9c9;\n  }\n  \n.Seeds1:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 180%;\n    top: -50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg);\n    -webkit-box-shadow: inset -1px -3px #c9c9c9;\n            box-shadow: inset -1px -3px #c9c9c9;\n  }\n\n  .Seeds2 {\n    width: 10%;\n    height: 15%;\n    position: absolute;\n    background-color: white;\n    left: 64%;\n    top: 50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(10deg);\n        -ms-transform: rotate(10deg);\n            transform: rotate(10deg);\n    -webkit-box-shadow: inset -3px 0 #c9c9c9;\n            box-shadow: inset -3px 0 #c9c9c9;\n  }\n  \n  .Seeds2:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 150%;\n    top: -130%;\n    border-radius: 40%;\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-box-shadow: inset 1px 3px #c9c9c9;\n            box-shadow: inset 1px 3px #c9c9c9;\n  }\n  \n\n.Meat {\n    width: 80%;\n    height: 8%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#7f3608), to(#702e05));\n    background: -webkit-linear-gradient(#7f3608, #702e05);\n    background: -o-linear-gradient(#7f3608, #702e05);\n    background: linear-gradient(#7f3608, #702e05);\n    margin: 2% auto;\n    border-radius: 15px;\n}\n\n.Cheese {\n    width: 90%;\n    height: 4.5%;\n    margin: 2% auto;\n    background: -webkit-gradient(linear, left top, left bottom, from(#f4d004), to(#d6bb22));\n    background: -webkit-linear-gradient(#f4d004, #d6bb22);\n    background: -o-linear-gradient(#f4d004, #d6bb22);\n    background: linear-gradient(#f4d004, #d6bb22);\n    border-radius: 20px;\n}\n\n.Salad {\n    width: 85%;\n    height: 7%;\n    margin: 2% auto;\n    background: -webkit-gradient(linear, left top, left bottom, from(#228c1d), to(#91ce50));\n    background: -webkit-linear-gradient(#228c1d, #91ce50);\n    background: -o-linear-gradient(#228c1d, #91ce50);\n    background: linear-gradient(#228c1d, #91ce50);\n    border-radius: 20px;\n}\n\n.Bacon {\n    width: 80%;\n    height: 3%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#bf3813), to(#c45e38));\n    background: -webkit-linear-gradient(#bf3813, #c45e38);\n    background: -o-linear-gradient(#bf3813, #c45e38);\n    background: linear-gradient(#bf3813, #c45e38);\n    margin: 2% auto;\n}\n'],sourceRoot:""}]),n.locals={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},186:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(187),i=t.n(a),A=t(189),s=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],l=function(e){return o.a.createElement("div",{className:i.a.BuildControls},o.a.createElement("p",null,"Current Price: ",o.a.createElement("strong",null,e.price.toFixed(2))),s.map(function(n){return o.a.createElement(A.a,{key:n.label,label:n.label,added:function(){return e.ingredientAdded(n.type)},removed:function(){return e.ingredientRemoved(n.type)},disabled:e.disabled[n.type]})}),o.a.createElement("button",{className:i.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"Sign UP TO ORDER"))};n.a=l},187:function(e,n,t){var r=t(188);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},188:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,".BuildControls__BuildControls__220uz{width:100%;background-color:#cf8f2e;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 1px #ccc;box-shadow:0 2px 1px #ccc;margin:auto;padding:10px 0}.BuildControls__OrderButton__1ScSk{background-color:#dad735;outline:none;cursor:pointer;border:1px solid #966909;color:#966909;font-family:inherit;font-size:1.2em;padding:15px 30px;-webkit-box-shadow:2px 2px 2px #966909;box-shadow:2px 2px 2px #966909}.BuildControls__OrderButton__1ScSk:active,.BuildControls__OrderButton__1ScSk:hover{background-color:#a0db41;border:1px solid #966909;color:#966909}.BuildControls__OrderButton__1ScSk:disabled{background-color:#c7c6c6;cursor:not-allowed;border:1px solid #ccc;color:#888}.BuildControls__OrderButton__1ScSk:not(:disabled){-webkit-animation:BuildControls__enable__3XAWA .3s linear;animation:BuildControls__enable__3XAWA .3s linear}@-webkit-keyframes BuildControls__enable__3XAWA{0%{-webkit-transform:scale(1);transform:scale(1)}60%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes BuildControls__enable__3XAWA{0%{-webkit-transform:scale(1);transform:scale(1)}60%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}","",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/Burger/BuildControls/BuildControls.css"],names:[],mappings:"AAAA,qCACI,WAAY,AACZ,yBAA0B,AAC1B,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,iBAAkB,AACtB,sBAAuB,AACnB,mBAAoB,AACxB,kCAAmC,AAC3B,0BAA2B,AACnC,YAAa,AACb,cAAgB,CACnB,AAED,mCACI,yBAA0B,AAC1B,aAAc,AACd,eAAgB,AAChB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,gBAAiB,AACjB,kBAAmB,AACnB,uCAAwC,AAChC,8BAAgC,CAC3C,AAED,mFACI,yBAA0B,AAC1B,yBAA0B,AAC1B,aAAe,CAClB,AAED,4CACI,yBAA0B,AAC1B,mBAAoB,AACpB,sBAAuB,AACvB,UAAe,CAClB,AAED,kDACI,0DAAsC,AAC9B,iDAA8B,CACzC,AAED,gDACI,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,IACI,6BAA8B,AACtB,oBAAsB,CACjC,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACJ,AAED,wCACI,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,IACI,6BAA8B,AACtB,oBAAsB,CACjC,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACJ",file:"BuildControls.css",sourcesContent:[".BuildControls {\n    width: 100%;\n    background-color: #CF8F2E;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -webkit-box-shadow: 0 2px 1px #ccc;\n            box-shadow: 0 2px 1px #ccc;\n    margin: auto;\n    padding: 10px 0;\n}\n\n.OrderButton {\n    background-color: #DAD735;\n    outline: none;\n    cursor: pointer;\n    border: 1px solid #966909;\n    color: #966909;\n    font-family: inherit;\n    font-size: 1.2em;\n    padding: 15px 30px;\n    -webkit-box-shadow: 2px 2px 2px #966909;\n            box-shadow: 2px 2px 2px #966909;\n}\n\n.OrderButton:hover, .OrderButton:active {\n    background-color: #A0DB41;\n    border: 1px solid #966909;\n    color: #966909;\n}\n\n.OrderButton:disabled {\n    background-color: #C7C6C6;\n    cursor: not-allowed;\n    border: 1px solid #ccc;\n    color: #888888;\n}\n\n.OrderButton:not(:disabled) {\n    -webkit-animation: enable 0.3s linear;\n            animation: enable 0.3s linear;\n}\n\n@-webkit-keyframes enable {\n    0% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    60% {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n\n@keyframes enable {\n    0% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    60% {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}"],sourceRoot:""}]),n.locals={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},189:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(190),i=t.n(a),A=function(e){return o.a.createElement("div",{className:i.a.BuildControl},o.a.createElement("div",{className:i.a.Label},e.label),o.a.createElement("button",{className:i.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),o.a.createElement("button",{className:i.a.More,onClick:e.added},"More"))};n.a=A},190:function(e,n,t){var r=t(191);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(159)(r,o);r.locals&&(e.exports=r.locals)},191:function(e,n,t){n=e.exports=t(158)(!0),n.push([e.i,".BuildControl__BuildControl__ibcUQ{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:5px 0}.BuildControl__BuildControl__ibcUQ button{display:block;font:inherit;padding:5px;margin:0 5px;width:80px;border:1px solid #aa6817;cursor:pointer;outline:none}.BuildControl__BuildControl__ibcUQ button:disabled{background-color:#ac9980;border:1px solid #7e7365;color:#ccc;cursor:default}.BuildControl__BuildControl__ibcUQ button:hover:disabled{background-color:#ac9980;color:#ccc;cursor:not-allowed}.BuildControl__Label__2VLnR{padding:10px;font-weight:700;width:80px}.BuildControl__BuildControl__ibcUQ .BuildControl__Less__3X6hg{background-color:#d39952;color:#fff}.BuildControl__BuildControl__ibcUQ .BuildControl__More__2eQpV{background-color:#8f5e1e;color:#fff}.BuildControl__BuildControl__ibcUQ .BuildControl__Less__3X6hg:active,.BuildControl__BuildControl__ibcUQ .BuildControl__Less__3X6hg:hover{background-color:#daa972;color:#fff}.BuildControl__BuildControl__ibcUQ .BuildControl__More__2eQpV:active,.BuildControl__BuildControl__ibcUQ .BuildControl__More__2eQpV:hover{background-color:#99703f;color:#fff}","",{version:3,sources:["C:/Users/Tajib/Documents/Programming/burger-builder/src/components/Burger/BuildControls/BuildControl/BuildControl.css"],names:[],mappings:"AAAA,mCACI,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,mBAAoB,AACxB,YAAc,CACjB,AAED,0CACI,cAAe,AACf,aAAc,AACd,YAAa,AACb,aAAc,AACd,WAAY,AACZ,yBAA0B,AAC1B,eAAgB,AAChB,YAAc,CACjB,AAGD,mDACI,yBAA0B,AAC1B,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACnB,AAED,yDACI,yBAA0B,AAC1B,WAAY,AACZ,kBAAoB,CACvB,AAED,4BACI,aAAc,AACd,gBAAkB,AAClB,UAAY,CACf,AAED,8DACI,yBAA0B,AAC1B,UAAa,CAChB,AAED,8DACI,yBAA0B,AAC1B,UAAa,CAChB,AAED,yIACI,yBAA0B,AAC1B,UAAa,CAChB,AAED,yIACI,yBAA0B,AAC1B,UAAa,CAChB",file:"BuildControl.css",sourcesContent:[".BuildControl {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    margin: 5px 0;\n}\n\n.BuildControl button {\n    display: block;\n    font: inherit;\n    padding: 5px;\n    margin: 0 5px;\n    width: 80px;\n    border: 1px solid #AA6817;\n    cursor: pointer;\n    outline: none;\n}\n\n\n.BuildControl button:disabled {\n    background-color: #AC9980;\n    border: 1px solid #7E7365;\n    color: #ccc;\n    cursor: default;\n}\n\n.BuildControl button:hover:disabled {\n    background-color: #AC9980;\n    color: #ccc;\n    cursor: not-allowed;\n}\n\n.Label {\n    padding: 10px;\n    font-weight: bold;\n    width: 80px;\n}\n\n.BuildControl .Less {  \n    background-color: #D39952;\n    color: white;\n}\n\n.BuildControl .More {\n    background-color: #8F5E1E;\n    color: white;\n}\n\n.BuildControl .Less:hover, .BuildControl .Less:active {  \n    background-color: #DAA972;\n    color: white;\n}\n\n.BuildControl .More:hover,.BuildControl .More:active {\n    background-color: #99703F;\n    color: white;\n}"],sourceRoot:""}]),n.locals={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},192:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),A=t.n(i),s=t(19),l=t(168),c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),c(n,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,n=Object.keys(this.props.ingredients).map(function(n){return A.a.createElement("li",{key:n},A.a.createElement("span",{style:{textTransform:"capitalize"}},n),": ",e.props.ingredients[n])});return A.a.createElement(s.a,null,A.a.createElement("h3",null,"Your Order"),A.a.createElement("p",null,"A delicious burger with the following ingredients:"),A.a.createElement("ul",null,n),A.a.createElement("p",null,A.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),A.a.createElement("p",null,"Continue to Checkout?"),A.a.createElement(l.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),A.a.createElement(l.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),n}(i.Component);n.a=d}});
//# sourceMappingURL=1.b6e2757d.chunk.js.map