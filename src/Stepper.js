import React from 'react';
import { PropTypes } from 'prop-types';

import Step from './Step';

const styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0,
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto',
  },
};

function Stepper({
  activeStep, steps, completedSteps,
  activeColor, completeColor, defaultColor,
  circleFontColor, activeCircleFontColor, completeCircleFontColor,
  activeTitleColor, completeTitleColor, defaultTitleColor,
  size, activeCircleSize, circleFontSize, activeCircleFontSize, titleFontSize,
  circleTop, titleTop, completeOpacity, activeOpacity, defaultOpacity,
  completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle,
  defaultBorderColor, completeBorderColor, activeBorderColor, defaultBorderStyle,
  completeBorderStyle, activeBorderStyle, defaultBarColor, completeBarColor,
  defaultBarThickness, completeBarThickness
}) {
  const activeCompleted = completedSteps.includes(activeStep.toString());

  return (
    <div style={ styles.root }>
      <div style={ styles.stepper }>
        { steps.map((step, index) => (
          <Step
            key={index}
            width={100 / steps.length}
            title={step.title}
            href={step.href}
            onClick={step.onClick}
            active={index === activeStep}
            completed={completedSteps.includes(index.toString())}
            activeCompleted={activeCompleted}
            first={index === 0}
            isLast={index === steps.length - 1}
            index={index}
            activeColor={activeColor}
            completeColor={completeColor}
            defaultColor={defaultColor}
            circleFontColor={circleFontColor}
            activeCircleFontColor={activeCircleFontColor}
            completeCircleFontColor={completeCircleFontColor}
            activeTitleColor={activeTitleColor}
            completeTitleColor={completeTitleColor}
            defaultTitleColor={defaultTitleColor}
            size={size}
            activeCircleSize={activeCircleSize}
            circleFontSize={circleFontSize}
            activeCircleFontSize={activeCircleFontSize}
            titleFontSize={titleFontSize}
            circleTop={circleTop}
            titleTop={titleTop}
            defaultOpacity={defaultOpacity}
            completeOpacity={completeOpacity}
            activeOpacity={activeOpacity}
            defaultTitleOpacity={defaultTitleOpacity}
            completeTitleOpacity={completeTitleOpacity}
            activeTitleOpacity={activeTitleOpacity}
            barStyle={barStyle}
            defaultBorderColor={defaultBorderColor}
            completeBorderColor={completeBorderColor}
            activeBorderColor={activeBorderColor}
            defaultBorderStyle={defaultBorderStyle}
            completeBorderStyle={completeBorderStyle}
            activeBorderStyle={activeBorderStyle}
            defaultBarColor={defaultBarColor}
            completeBarColor={completeBarColor}
            defaultBarThickness={defaultBarThickness}
            completeBarThickness={completeBarThickness}
          />
        )) }
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  activeStep: 0,
  activeCompleted: false
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  activeCompleted: PropTypes.bool,
  steps: PropTypes.array,
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
  defaultOpacity: PropTypes.string,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  completeBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
};

export default Stepper;
