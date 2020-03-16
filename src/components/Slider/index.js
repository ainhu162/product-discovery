import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useStyles } from './useStyles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Slider = ({ images }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images ? images.length : 0;
  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <div className={classes.sliderContainer}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images  &&
          images.map((step, index) => (
            <div key={step.url}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.url} alt='' />
              ) : null}
            </div>
          ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        variant='dots'
        activeStep={activeStep}
        nextButton={
          <div></div>
        }
        backButton={
            <div></div>
        }
      />
    </div>
  );
};
