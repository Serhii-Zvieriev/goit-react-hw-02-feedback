import { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        [event.target.id]: prevState[event.target.id] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App container">
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
