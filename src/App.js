import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from './Theme-css';

import FeedOpt from './components/OptFeetback';
import Stats from './components/Stats';
import Sect from './components/Sect';
import Notification from './components/Notification';

// Глобальні стилі для застосунку
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Функція обробки кліку по кнопці
  const handleLeaveFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  // Функція, яка рахує загальну кількість фідбеків
  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // Функція для обчислення % позитивних фідбеків
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        background: lightTheme.cardBg,
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <Sect title="Please leave feedback">
          <FeedOpt
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Sect>

        <Sect title="Statistics">
          {total > 0 ? (
            <Stats
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sect>
      </div>
    </ThemeProvider>
  );
}

export default App;