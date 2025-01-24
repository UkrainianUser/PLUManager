import PropTypes from "prop-types";
import { PluCard } from "../PluCard/PluCard";
import css from "./PluList.module.css";

export const PluList = ({ items }) => {
  return (
    <ul className={css.pluList}>
      {items.map(({ _id, article, name, PLU }) => (
        <PluCard key={_id} article={article} name={name} PLU={PLU}></PluCard>
      ))}
    </ul>
  );
};

PluList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      article: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      PLU: PropTypes.string.isRequired,
    })
  ),
};
