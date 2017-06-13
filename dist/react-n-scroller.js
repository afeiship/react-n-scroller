!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-browser"),require("next-debounce-throttle"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-event-emitter")):"function"==typeof define&&define.amd?define(["classnames","next-browser","next-debounce-throttle","next-dom-event","noop","object-assign","prop-types","react","react-event-emitter"],t):"object"==typeof exports?exports.ReactNScroller=t(require("classnames"),require("next-browser"),require("next-debounce-throttle"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-event-emitter")):e.ReactNScroller=t(e.classnames,e["next-browser"],e["next-debounce-throttle"],e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-event-emitter"])}(this,function(e,t,n,r,o,i,s,u,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)},d=n(9),h=r(d),v=n(3),y=(r(v),n(4)),b=r(y),m=n(5),S=r(m),x=n(8),_=r(x),g=n(10),O=r(g),j=n(2),w=(r(j),n(6)),q=r(w),E=n(7),k=(r(E),["init","active","running"]),P=(l=a=function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));c.call(n);var r=e.refresherStatus,o=e.infiniterStatus;return n.state={refresherStatus:r,infiniterStatus:o},n}return u(t,e),f(t,[{key:"refresh",value:function(){}},{key:"getValues",value:function(){return{top:this.scrollTop}}},{key:"componentAttachEvents",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.refs.scroller;this._scroller=e,this.attachEvents()}},{key:"attachEvents",value:function(){this._scrollRes=S.default.on(window,"scroll",this._onMove)}},{key:"componentWillUnmount",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this),this._scrollRes.destroy()}},{key:"finishInfinte",value:function(){var e=k.indexOf(this.state.infiniterStatus)>-1;e&&this.setState({infiniterStatus:"init"})}},{key:"finishPullToRefresh",value:function(){}},{key:"scrollTo",value:function(e,t,n){this._wrapper.scrollTop=t}},{key:"activateInfinite",value:function(){var e=this.props,t=e.distances,n=e.infiniter,r=k.indexOf(this.state.infiniterStatus)>-1;if(n&&r&&this._scroller){var o=this.wrapperBound,i=this.scrollerBound;i.bottom-o.bottom<t[1]?this.setState({infiniterStatus:"active"}):this.setState({infiniterStatus:"init"})}}},{key:"render",value:function(){var e=this.props,t=(e.className,e.children),n=(e.refresher,e.infiniter);e.refresherStatus,e.infiniterStatus,e.onRefresh,e.onInfinite,e.onScroll,e.onScrollEnd,e.distances,e.options,o(e,["className","children","refresher","infiniter","refresherStatus","infiniterStatus","onRefresh","onInfinite","onScroll","onScrollEnd","distances","options"]);return h.default.createElement("section",{ref:"scroller","data-role":"scroller",className:"react-n-scroller"},h.default.createElement("div",{className:"bd","data-role":"body"},t),n&&(0,d.createElement)(n,{status:this.state.infiniterStatus}))}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop||document.body.scrollTop||0}},{key:"wrapperBound",get:function(){return document.body.getBoundingClientRect()}},{key:"scrollerBound",get:function(){return this._scroller.getBoundingClientRect()}}]),t}(O.default),a.propTypes={options:_.default.object,className:_.default.string,refresherStatus:_.default.string,infiniterStatus:_.default.string,onRefresh:_.default.func,onInfinite:_.default.func,onScroll:_.default.func,onScrollEnd:_.default.func,refresher:_.default.func,infiniter:_.default.func,distance:_.default.array},a.defaultProps={options:{scrollingInterval:100},refresherStatus:"init",infiniterStatus:"init",onRefresh:q.default,onInfinite:q.default,onScroll:q.default,onScrollEnd:q.default,refresher:null,infiniter:null,distances:[50,50]},c=function(){var e=this;this._onMove=function(t){var n=e.props.onScroll,r=e.state.infiniterStatus;e.activateInfinite(),n(t),e.fire("scroll",t),"init"===r&&e._onEnd(t)},this._onEnd=b.default.debounce(function(t){var n=e.state.infiniterStatus,r=e.props,o=r.onInfinite,i=r.onScrollEnd;"active"===n&&e.setState({infiniterStatus:"running"},function(){o.call(e,e)}),i(t),e.fire("scrollEnd",t)},this.props.options.scrollingInterval)},l);t.default=P},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=u},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-n-scroller.js.map