(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/abC":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("3d/0"),i=n("Y+p1"),a=n.n(i),u=n("67Y/"),c=n("VnD/"),s=n("mrSG"),l=n("FFOo");function f(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}f.prototype=Object.create(Error.prototype);var p=f,d=n("G5J1");function h(e){return function(t){return 0===e?Object(d.a)():t.lift(new m(e))}}var m=function(){function e(e){if(this.total=e,this.total<0)throw new p}return e.prototype.call=function(e,t){return t.subscribe(new v(e,this.total))},e}(),v=function(e){function t(t,n){var r=e.call(this,t)||this;return r.total=n,r.count=0,r}return s.a(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(l.a),b=n("xJnW"),y=n("bOvX"),k=n("6zE4");function w(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=e.appContext,n=t.apollo,r=t.monitor,o=e.query,i=e.variables,a=e.notifyOnNetworkStatusChange,u=void 0!==a&&a,c=e.fetchPolicy;return{apollo:n,monitor:r,query:o,variables:i,fetchPolicy:void 0===c?"cache-and-network":c,notifyOnNetworkStatusChange:u}}var q=function(e){function t(e){var n;return O(this,t),(n=E(this,N(t).call(this,e))).mutableResult$=Object(b.b)(P(e)),n}return j(t,r["Component"]),S(t,[{key:"componentWillReceiveProps",value:function(e){this.props.appContext.apollo===e.appContext.apollo&&this.props.appContext.monitor===e.appContext.monitor&&this.props.query===e.query&&this.props.notifyOnNetworkStatusChange===e.notifyOnNetworkStatusChange&&a()(this.props.variables,e.variables)||(this.mutableResult$=Object(b.b)(P(e)))}},{key:"render",value:function(){return r.createElement(y.a,{props$:this.mutableResult$},this.props.children)}}]),t}();function R(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}n.d(t,"Home",function(){return D});var _=Object(o.c)(o.b).withConfig({displayName:"Home__ErrorBox",componentId:"sc-119h7vf-0"})(["background-color:red;color:black;width:00;"]),F=function(e){var t=e.query,n=e.fetchNextData;return function(e){function o(){return O(this,o),E(this,N(o).apply(this,arguments))}return j(o,r.Component),S(o,[{key:"render",value:function(){var e=this;return r.createElement(k.b,null,function(n){return r.createElement(q,Object.assign({},e.props,{query:t,appContext:n}),e.props.children)})}}],[{key:"fetchData",value:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){w(i,r,o,a,u,"next",e)}function u(e){w(i,r,o,a,u,"throw",e)}a(void 0)})}}(regeneratorRuntime.mark(function e(r,o){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(P({appContext:r,query:t,variables:o,fetchPolicy:"cache-first"})).pipe(Object(u.a)(function(e){if(void 0!==e.error)throw e.error;return e}),Object(c.a)(b.a),h(1)).toPromise();case 2:if(i=e.sent,void 0===n){e.next=6;break}return e.next=6,n(r,i);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),o}()}({query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"HomeQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"first"},name:{kind:"Name",value:"block"},arguments:[{kind:"Argument",name:{kind:"Name",value:"index"},value:{kind:"IntValue",value:"0"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hash"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"second"},name:{kind:"Name",value:"block"},arguments:[{kind:"Argument",name:{kind:"Name",value:"index"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hash"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:158,source:{body:"\n    query HomeQuery {\n      first: block(index: 0) {\n        id\n        hash\n      }\n      second: block(index: 1) {\n        id\n        hash\n      }\n    }\n  ",name:"GraphQL request",locationOffset:{line:1,column:1}}},id:"b2b8fb6dc0e2e2d49ad676ed625451496d5aa5d606e26a72ee046c40bc57b1f0"}});function D(){return r.createElement(F,null,function(e){var t=e.data,n=e.error;if(void 0!==t.first||void 0!==t.second){var i=void 0==t.first?void 0:r.createElement(o.b,null,t.first.hash),a=void 0==t.second?void 0:r.createElement(o.b,null,t.second.hash);return r.createElement(r.Fragment,null,i,a)}return n?r.createElement(_,null,"Error!"):r.createElement(o.b,null,"Loading...")})}!function(e){e.fetchDataForRoute=function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){R(i,r,o,a,u,"next",e)}function u(e){R(i,r,o,a,u,"throw",e)}a(void 0)})}}(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.fetchData(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}(D||(D={}))}}]);
//# sourceMappingURL=1-2e23b6cf7a75f1d8178b.js.map