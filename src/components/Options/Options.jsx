import clsx from "clsx";
import css from "./Options.module.css";

export default function Options({ updateFeedback, onFeedbackReset, total }) {
  return (
    <div className={css.olist}>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
        className={clsx(css.btn, css.good)}>
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={clsx(css.btn, css.neutral)}>
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
        className={clsx(css.btn, css.bad)}>
        Bad
      </button>
      {total > 0 && (
        <button type="button" onClick={onFeedbackReset} className={clsx(css.btn, css.reset)}>
          Reset
        </button>
      )}
    </div>
  );
}
