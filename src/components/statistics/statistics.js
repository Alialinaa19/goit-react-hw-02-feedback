import propTypes from 'prop-types';
import Notification from 'Notification/Notification';
import css from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
total > 0 ? 
    <div className={css.statistic}>
    <p className={css.point}>Good: <span className={css.feedbackValue}>{good}</span></p>
    <p className={css.point}>Neutral: <span className={css.feedbackValue}>{neutral}</span></p>
    <p className={css.point}>Bad: <span className={css.feedbackValue}>{bad}</span></p>
    <p className={css.point}>Total: <span className={css.feedbackValue}>{total}</span></p>
    <p className={css.point}>Positive feedback: <span className={css.feedbackValue}>{positivePercentage} %</span></p>
    </div>
    : 
    (<Notification message="There is no feedback"/>)
);

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
}

    export default Statistics;