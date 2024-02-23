import PropTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ feedbackObj, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <div className={css.feedbackBox}>
        <p className={css.feedbackText}>Good: {good}</p>
        <p className={css.feedbackText}>Neutral: {neutral}</p>
        <p className={css.feedbackText}>Bad: {bad}</p>
      </div>
      <div className={css.feedbackBox}>
        <p className={css.feedbackText}>Total: {feedbackTotal}</p>
        <p className={css.feedbackText}>Positive: {feedbackPositive}%</p>
      </div>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
  feedbackPositive: PropTypes.number,
};
