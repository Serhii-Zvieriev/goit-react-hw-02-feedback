import { Component } from 'react';

import style from './Feedback.module.scss';

class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtnGood = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };

  handleClickBtnNeutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  handleClickBtnBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    // return Math.round(this.state.good / this.countTotalFeedback());
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.container}>
        <h1>Please leave Feedback</h1>

        <ul className={style.list__button}>
          <li>
            <button onClick={this.handleClickBtnGood}>Good</button>
          </li>
          <li>
            <button onClick={this.handleClickBtnNeutral}>Neutral</button>
          </li>
          <li>
            <button onClick={this.handleClickBtnBad}>Bad</button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {this.countTotalFeedback()}</p>
          </li>
          <li>
            <p>
              Positive feedback:{' '}
              {isNaN(this.countPositiveFeedbackPercentage())
                ? 0
                : this.countPositiveFeedbackPercentage()}
              %
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
