import { useState } from 'react';
import Sections from './Sections';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };
  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  return (
    <div>
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />

        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>
    </div>
  );
};
