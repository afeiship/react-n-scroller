!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-status-manager")):"function"==typeof define&&define.amd?define(["classnames","next-dom-event","noop","object-assign","prop-types","react","react-dom","react-status-manager"],t):"object"==typeof exports?exports.ReactInfiniteScroller=t(require("classnames"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-status-manager")):e.ReactInfiniteScroller=t(e.classnames,e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"],e["react-status-manager"])}(this,function(e,t,n,r,o,a,s,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(7),p=r(d),v=n(8),m=(r(v),n(6)),h=r(m),y=n(2),b=r(y),g=n(4),_=r(g),x=n(5),j=(r(x),n(3)),w=r(j),O=n(9),q=r(O),E=["loaded","loading","complete"],k=(i=l=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onScroll=function(e){var t=n.props.onChange,r=n.state.value,o={value:"loading"};n.boundary&&n.direction<=0&&"loading"!==r&&n.setState(o,function(){t({target:o})}),n._lastScrollY=n.scrollY},n.state={value:e.value},n._lastScrollY=n.scrollY,n}return u(t,e),f(t,[{key:"scrollY",get:function(){return window.scrollY}},{key:"direction",get:function(){var e=this._lastScrollY-this.scrollY;return e?e/Math.abs(e):0}},{key:"boundary",get:function(){var e=this.props.distance;return document.documentElement.scrollHeight-(window.innerHeight+this.scrollY)<=e}}]),f(t,[{key:"componentDidMount",value:function(){this.attachEvents()}},{key:"componentWillUnmount",value:function(){this.detachEvents()}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t})}},{key:"attachEvents",value:function(){this._scrollRes=w.default.on(window,"scroll",this._onScroll)}},{key:"detachEvents",value:function(){this._scrollRes&&this._scrollRes.destroy()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(e.value,e.onChange,o(e,["className","children","value","onChange"])),a=this.state.value;return p.default.createElement("div",c({className:(0,b.default)("react-infinite-scroller",t),"data-status":a},r),n,p.default.createElement(q.default,{nodeName:"footer",className:"ft",value:a,items:E},p.default.createElement("div",{"data-status":"loaded"},"上拉加载更多"),p.default.createElement("div",{"data-status":"loading"},p.default.createElement("i",{className:"webkit-sassui-spinkit"}),p.default.createElement("span",null,"数据加载中")),p.default.createElement("div",{"data-status":"complete"},"没有更多数据了")))}}]),t}(d.Component),l.propTypes={className:h.default.string,distance:h.default.number,value:h.default.oneOf(E),onChange:h.default.func},l.defaultProps={distance:60,value:"loaded",onChange:_.default},i);t.default=k},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=s},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-infinite-scroller.js.map