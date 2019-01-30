"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css");

require("../less/style.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HomepageHero =
/*#__PURE__*/
function (_Component) {
  _inherits(HomepageHero, _Component);

  function HomepageHero(props) {
    _classCallCheck(this, HomepageHero);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomepageHero).call(this, props));
  }

  _createClass(HomepageHero, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bgImage = _this$props.bgImage,
          title = _this$props.title,
          para = _this$props.para,
          cta = _this$props.cta,
          hatch = _this$props.hatch,
          config = _this$props.config;
      return _react.default.createElement("section", {
        className: "homepage-hero-container ".concat(config.theme),
        style: {
          backgroundImage: "url(".concat(bgImage, ")")
        }
      }, _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-md-12 col-sm-12"
      }, _react.default.createElement("h1", null, title), _react.default.createElement("p", null, para), _react.default.createElement("a", {
        className: "btn",
        href: cta.href,
        target: "_self"
      }, cta.text), _react.default.createElement("p", null, hatch)))));
    }
  }]);

  return HomepageHero;
}(_react.Component);

exports.default = HomepageHero;
HomepageHero.defaultProps = {
  bgImage: 'https://snaporbital.com/wp-content/uploads/edd/2016/12/learndash-notes-background.jpg',
  title: 'Lorem ipsum dolor sit amet',
  para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis lectus, vitae fermentum lacus. Nunc vel erat et est fringilla interdum at finibus neque.',
  cta: {
    href: '#',
    text: 'Lorem Ipsum'
  },
  hatch: 'Proin velit augue, luctus sit amet tristique a, pulvinar a sapien.',
  config: {
    theme: 'dark'
  }
};