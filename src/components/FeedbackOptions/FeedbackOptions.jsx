import PropTypes from 'prop-types';
import { Button } from './Button.styled';
import Section from '../Section';
import { memo } from 'react';
const FeedbackOptions = memo(
  ({ options, onLeaveFeedback }) => {
    const elementsGenerate = options => {
      let btnsArr = [];

      for (const key in options) {
        btnsArr.push(
          <Button
            key={key}
            type="submit"
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </Button>
        );
      }
      return btnsArr;
    };

    return (
      <Section title="Please leave feedback">
        {elementsGenerate(options)}
      </Section>
    );
  },
  () => {
    return true;
  }
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};

export default FeedbackOptions;
