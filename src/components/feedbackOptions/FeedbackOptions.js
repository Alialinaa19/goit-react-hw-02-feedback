import propTypes from 'prop-types';
import css from "./feedbackOptions.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => (<div className={css.btnBox}>

{options.map(option => {
                return <button className={css.feedbackBtn} key={option} type="button" name={option} onClick={(e) => onLeaveFeedback(e)}>{ option}</button>
                })}
</div>);

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
}

export default FeedbackOptions;