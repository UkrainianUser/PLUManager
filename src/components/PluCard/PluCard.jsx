import PropTypes from "prop-types";
import css from "./PluCard.module.css";

export const PluCard = ({ article, name, PLU }) => {
  return (
    <li className={css.item}>
      <span className={css.itemArticle}>{article}</span>
      <span className={css.itemName}>{name}</span>
      <span className={css.itemPlu}>PLU: {PLU}</span>
    </li>
  );
};

PluCard.propTypes = {
  article: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  PLU: PropTypes.string.isRequired,
};
