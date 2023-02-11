import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

const FEEDBACKS = ['Good', 'Neutral', 'Bad'];

const App = () => {
  const [feedbacks, setFeedbacks] = useState(
    FEEDBACKS.reduce((obj, feedback) => ({ ...obj, [feedback]: 0 }), {})
  );

  const countTotalFeedback = () => {
    return FEEDBACKS.reduce((acc, f) => {
      return acc + feedbacks[f];
    }, 0);
  };

  const onLeaveFeedback = feedbackName => {
    setFeedbacks(prevFeeds => ({
      ...prevFeeds,
      [feedbackName]: (prevFeeds[feedbackName] += 1),
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    console.log('posit');
    let total = countTotalFeedback();
    const positiveFeeds = feedbacks['Good'];
    let percent = (positiveFeeds && positiveFeeds / total) * 100;
    let croppedPercent = percent.toFixed(2);
    return (croppedPercent + '').includes('.00') ? percent : croppedPercent;
  };

  return (
    <div>
      <FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
      {countTotalFeedback() ? (
        <Statistics
          options={feedbacks}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
export default App;
