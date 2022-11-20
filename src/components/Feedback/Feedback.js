import React from 'react';
import Statistics from 'components/statistics/statistics';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

class Feedback extends React.Component {
    state = {
      countOfBad: 0,
      countOfGood: 0,
      countOfNeutral: 0,
      total: 0,
      positivePercentage: 0,
    };

    countTotalFeedback = () => {
        this.setState((prevState) =>({
            total: prevState.countOfBad + prevState.countOfGood + prevState.countOfNeutral,
        })
        );
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) =>({
            positivePercentage:  Math.round(prevState.countOfGood/(prevState.countOfBad + prevState.countOfGood + prevState.countOfNeutral)*100),
        })
        );
    }

    addFeedback = event => {
        console.log(event.target);
        switch (event.target.name) {
            case "bad":
                this.setState(prevState =>({
                    countOfBad: prevState.countOfBad + 1,
                })
                );
                break;
                case "good":
                    this.setState(prevState =>({
                        countOfGood: prevState.countOfGood + 1,
                    }));
                    break;
                    case "neutral":
                    this.setState(prevState =>({
                        countOfNeutral: prevState.countOfNeutral + 1,
                    }));
                    break;
                    default:
    console.log("Invalid subscription type");
        }
        
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    render() {
        return (
            <div className='Counter'>
        
            <Section title="Please leave feedback">
            <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback = {this.addFeedback}/>
            </Section>

            <Section title="Statistics">
            <Statistics
            good = {this.state.countOfGood}
            neutral = {this.state.countOfNeutral}
            bad = {this.state.countOfBad}
            total = {this.state.total}
            positivePercentage = {this.state.positivePercentage}
            />
            </Section>
        </div>

        );
    }
}

export default Feedback