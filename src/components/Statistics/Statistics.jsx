import PropTypes from 'prop-types';
import Section from '../Section';

const Statistics = ({ options, total, countPositiveFeedbackPercentage }) => {
  const elementsGenerate = options => {
    let labelsMarkUp = [];

    for (const key in options) {
      console.log(countPositiveFeedbackPercentage);
      labelsMarkUp.push(
        <p key={key}>
          {key}: {options[key]}
        </p>
      );
    }
    return labelsMarkUp;
  };

  return (
    <Section title="Statistics">
      {elementsGenerate(options)}
      <p>Total: {total()}</p>
      {/* <p>{countPositiveFeedbackPercentage}</p> */}
    </Section>
  );
};

// Statistics.propTypes = {
//   options: PropTypes.object,
//   total: PropTypes.func,
//   positivePercentage: PropTypes.func,
// };
export default Statistics;
