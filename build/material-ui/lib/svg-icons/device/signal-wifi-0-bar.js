'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _svgIcon = require('../../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceSignalWifi0Bar = function DeviceSignalWifi0Bar(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z' })
  );
};
DeviceSignalWifi0Bar = (0, _pure2.default)(DeviceSignalWifi0Bar);
DeviceSignalWifi0Bar.displayName = 'DeviceSignalWifi0Bar';

exports.default = DeviceSignalWifi0Bar;