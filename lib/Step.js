'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this));

    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(Step, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props,
          activeCompleted = _props.activeCompleted,
          activeColor = _props.activeColor,
          completeColor = _props.completeColor,
          defaultColor = _props.defaultColor,
          circleFontColor = _props.circleFontColor,
          activeCircleFontColor = _props.activeCircleFontColor,
          activeTitleColor = _props.activeTitleColor,
          completeTitleColor = _props.completeTitleColor,
          defaultTitleColor = _props.defaultTitleColor,
          size = _props.size,
          activeCircleSize = _props.activeCircleSize,
          circleFontSize = _props.circleFontSize,
          activeCircleFontSize = _props.activeCircleFontSize,
          titleFontSize = _props.titleFontSize,
          circleTop = _props.circleTop,
          titleTop = _props.titleTop,
          width = _props.width,
          completeOpacity = _props.completeOpacity,
          activeOpacity = _props.activeOpacity,
          defaultOpacity = _props.defaultOpacity,
          completeTitleOpacity = _props.completeTitleOpacity,
          activeTitleOpacity = _props.activeTitleOpacity,
          defaultTitleOpacity = _props.defaultTitleOpacity,
          barStyle = _props.barStyle,
          defaultBarColor = _props.defaultBarColor,
          defaultBorderColor = _props.defaultBorderColor,
          completeBorderColor = _props.completeBorderColor,
          activeBorderColor = _props.activeBorderColor,
          defaultBorderStyle = _props.defaultBorderStyle,
          completeBorderStyle = _props.completeBorderStyle,
          activeBorderStyle = _props.activeBorderStyle,
          defaultBarThickness = _props.defaultBarThickness;


      var barTop = circleTop + (activeCompleted ? size : activeCircleSize) / 2 - defaultBarThickness / 2;
      var barGap = 7;

      return {
        step: {
          width: width + '%',
          display: 'table-cell',
          position: 'relative',
          paddingTop: circleTop
        },
        circle: {
          width: size,
          height: size,
          margin: '0 auto',
          backgroundColor: defaultColor,
          borderRadius: '50%',
          textAlign: 'center',
          padding: 1,
          fontSize: circleFontSize,
          color: circleFontColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: defaultOpacity,
          borderWidth: defaultBorderColor ? 2 : 0,
          borderColor: defaultBorderColor,
          borderStyle: defaultBorderStyle
        },
        activeCircle: {
          width: activeCircleSize,
          height: activeCircleSize,
          backgroundColor: activeColor,
          fontSize: activeCircleFontSize,
          opacity: activeOpacity,
          borderWidth: activeBorderColor ? 3 : 0,
          borderColor: activeBorderColor,
          borderStyle: activeBorderStyle
        },
        completedCircle: {
          backgroundColor: completeColor,
          opacity: completeOpacity,
          borderWidth: completeBorderColor ? 3 : 0,
          borderColor: completeBorderColor,
          borderStyle: completeBorderStyle
        },
        index: {
          color: circleFontColor,
          fontWeight: 600
        },
        activeIndex: {
          color: activeCircleFontColor
        },
        title: {
          marginTop: titleTop,
          fontSize: titleFontSize,
          fontWeight: 500,
          textAlign: 'center',
          display: 'block',
          color: defaultTitleColor,
          opacity: defaultTitleOpacity
        },
        activeTitle: {
          marginTop: titleTop - (activeCircleSize - size) / 2 + 1,
          color: activeTitleColor,
          opacity: activeTitleOpacity
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeTitleOpacity
        },
        leftBar: {
          position: 'absolute',
          top: barTop,
          height: 1,
          borderTopStyle: barStyle,
          borderTopWidth: defaultBarThickness,
          borderTopColor: defaultBarColor,
          left: 0,
          right: 'calc(50% + ' + (size / 2 + barGap) + 'px)',
          opacity: defaultOpacity
        },
        rightBar: {
          position: 'absolute',
          top: barTop,
          height: 1,
          borderTopStyle: barStyle,
          borderTopWidth: defaultBarThickness,
          borderTopColor: defaultBarColor,
          right: 0,
          left: 'calc(50% + ' + (size / 2 + barGap) + 'px)',
          opacity: defaultOpacity
        },
        checkSymbol: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          index = _props2.index,
          active = _props2.active,
          completed = _props2.completed,
          first = _props2.first,
          isLast = _props2.isLast,
          completeCircleFontColor = _props2.completeCircleFontColor;


      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active && !completed ? styles.activeCircle : {});
      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active && !completed ? styles.activeTitle : {});
      var indexStyle = Object.assign(styles.index, active && !completed ? styles.activeIndex : {});
      var checkSymbol = _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 18 18', style: styles.checkSymbol },
        _react2.default.createElement('path', { d: 'M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z', fill: completeCircleFontColor })
      );

      return _react2.default.createElement(
        'div',
        { style: styles.step },
        _react2.default.createElement(
          'div',
          { style: circleStyle },
          completed ? _react2.default.createElement(
            'span',
            { style: indexStyle },
            '\xA0',
            checkSymbol
          ) : _react2.default.createElement(
            'span',
            { style: indexStyle },
            index + 1
          )
        ),
        _react2.default.createElement(
          'div',
          { style: titleStyle },
          title
        ),
        !first && _react2.default.createElement('div', { style: styles.leftBar }),
        !isLast && _react2.default.createElement('div', { style: styles.rightBar })
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;


Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  defaultBarThickness: 2
};

Step.propTypes = {
  width: _propTypes.PropTypes.number.isRequired,
  activeColor: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  defaultColor: _propTypes.PropTypes.string,
  activeTitleColor: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  defaultTitleColor: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.number,
  circleFontSize: _propTypes.PropTypes.number,
  titleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number,
  title: _propTypes.PropTypes.string,
  index: _propTypes.PropTypes.number,
  active: _propTypes.PropTypes.bool,
  completed: _propTypes.PropTypes.bool,
  first: _propTypes.PropTypes.bool,
  isLast: _propTypes.PropTypes.bool,
  completeOpacity: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
  defaultOpacity: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  defaultTitleOpacity: _propTypes.PropTypes.string,
  barStyle: _propTypes.PropTypes.string,
  defaultBarColor: _propTypes.PropTypes.string,
  defaultBorderColor: _propTypes.PropTypes.string,
  completeBorderColor: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  defaultBorderStyle: _propTypes.PropTypes.string,
  completeBorderStyle: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  defaultBarThickness: _propTypes.PropTypes.number
};