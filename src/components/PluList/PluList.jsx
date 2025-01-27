import PropTypes from "prop-types";
import PluCard from "../PluCard";
import { List } from "./PluList.styled";

const PluList = ({ items }) => {
  return (
    <List>
      {items.map(({ _id, articule, name, PLU }) => (
        <PluCard key={_id} articule={articule} name={name} PLU={PLU}></PluCard>
      ))}
    </List>
  );
};

PluList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      articule: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      PLU: PropTypes.string.isRequired,
    })
  ),
};

export default PluList;
