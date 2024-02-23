import PropTypes from "prop-types";
import css from "./Options.module.css";

const Options = ({
  onClickFeedback,
  resetFeedback,
  resetButton,
  totalFeedback,
}) => {
  console.log("resetFeedback:", resetFeedback);
  console.log("totalFeedback:", totalFeedback);
  return (
    <ul className={css.optionList}>
      <li>
        <button
          onClick={() => onClickFeedback("good")}
          className={css.optionButton}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => onClickFeedback("neutral")}
          className={css.optionButton}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => onClickFeedback("bad")}
          className={css.optionButton}
        >
          Bad
        </button>
      </li>
      <li>
        {resetFeedback && totalFeedback > 0 && (
          <button onClick={resetButton} className={css.optionButton}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;

Options.propTypes = {
  onClickFeedback: PropTypes.func,
  resetFeedback: PropTypes.bool,
  resetButton: PropTypes.func,
  totalFeedback: PropTypes.number,
};
