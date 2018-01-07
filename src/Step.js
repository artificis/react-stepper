import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeCompleted,
      activeColor, completeColor, defaultColor,
      circleFontColor, activeCircleFontColor,
      activeTitleColor, completeTitleColor, defaultTitleColor,
      size, activeCircleSize, circleFontSize, activeCircleFontSize, titleFontSize,
      circleTop, titleTop, width, completeOpacity, activeOpacity, defaultOpacity,
      completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle, defaultBarColor,
      defaultBorderColor, completeBorderColor, activeBorderColor,
      defaultBorderStyle,completeBorderStyle, activeBorderStyle,
      defaultBarThickness
    } = this.props;

    const barTop = circleTop + (activeCompleted ? size : activeCircleSize) / 2 - defaultBarThickness / 2;
    const barGap = 7;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop,
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
        borderWidth: (defaultBorderColor ? 2 : 0),
        borderColor: defaultBorderColor,
        borderStyle: defaultBorderStyle
      },
      activeCircle: {
        width: activeCircleSize,
        height: activeCircleSize,
        backgroundColor: activeColor,
        fontSize: activeCircleFontSize,
        opacity: activeOpacity,
        borderWidth: (activeBorderColor ? 3 : 0),
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle,
      },
      completedCircle: {
        backgroundColor: completeColor,
        opacity: completeOpacity,
        borderWidth: (completeBorderColor ? 3 : 0),
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle,
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
        opacity: defaultTitleOpacity,
      },
      activeTitle: {
        marginTop: titleTop - (activeCircleSize - size) / 2 + 1,
        color: activeTitleColor,
        opacity: activeTitleOpacity,
      },
      completedTitle: {
        color: completeTitleColor,
        opacity: completeTitleOpacity,
      },
      leftBar: {
        position: 'absolute',
        top: barTop,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: defaultBarThickness,
        borderTopColor: defaultBarColor,
        left: 0,
        right: `calc(50% + ${size / 2 + barGap}px)`,
        opacity: defaultOpacity,
      },
      rightBar: {
        position: 'absolute',
        top: barTop,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: defaultBarThickness,
        borderTopColor: defaultBarColor,
        right: 0,
        left: `calc(50% + ${size / 2 + barGap}px)`,
        opacity: defaultOpacity,
      },
      checkSymbol: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    };
  }

  render() {
    const {
      title, index, active, completed, first, isLast, completeCircleFontColor
    } = this.props;

    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active && !completed ? styles.activeCircle : {},
    );
    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active && !completed ? styles.activeTitle : {},
    );
    const indexStyle = Object.assign(
      styles.index,
      active && !completed ? styles.activeIndex : {},
    );
    const checkSymbol = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" style={styles.checkSymbol}><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" fill={completeCircleFontColor} /></svg>;

    return (
      <div style={ styles.step }>
        <div style={ circleStyle }>
          { completed
            ? <span style={ indexStyle }>&nbsp;{checkSymbol}</span>
            : <span style={ indexStyle }>{index + 1}</span>
          }
        </div>
        <div style={ titleStyle }>{ title }</div>
        { !first && <div style={ styles.leftBar }></div> }
        { !isLast && <div style={ styles.rightBar }></div> }
      </div>
    );
  }
}

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
  defaultBarThickness: 2,
};

Step.propTypes = {
  width: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  first: PropTypes.bool,
  isLast: PropTypes.bool,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  defaultBarThickness: PropTypes.number
};
