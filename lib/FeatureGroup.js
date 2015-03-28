"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Leaflet = _interopRequire(require("leaflet"));

var PopupContainer = _interopRequire(require("./PopupContainer"));

var FeatureGroup = (function (_PopupContainer) {
  function FeatureGroup() {
    _classCallCheck(this, FeatureGroup);

    if (_PopupContainer != null) {
      _PopupContainer.apply(this, arguments);
    }
  }

  _inherits(FeatureGroup, _PopupContainer);

  _createClass(FeatureGroup, {
    componentWillMount: {
      value: function componentWillMount() {
        var _props = this.props;
        var layers = _props.layers;
        var map = _props.map;

        var props = _objectWithoutProperties(_props, ["layers", "map"]);

        this.leafletElement = Leaflet.featureGroup(layers);
      }
    }
  });

  return FeatureGroup;
})(PopupContainer);

module.exports = FeatureGroup;

FeatureGroup.propTypes = {
  layers: React.PropTypes.array.isRequired
};