import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.flist}>
      <li className={css.fitem}>Good {good}</li>
      <li className={css.fitem}>Neutral {neutral}</li>
      <li className={css.fitem}>Bad {bad}</li>
      <li className={css["fitem-strong"]}>Total: {total}</li>
      <li className={css["fitem-strong"]}>positive: {positive}%</li>
    </ul>
  );
}
