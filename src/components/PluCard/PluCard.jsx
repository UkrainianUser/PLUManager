import PropTypes from "prop-types";
import { GiWeight } from "react-icons/gi";
import { Articule, Card, Name, Plu } from "./PluCard.styled";

export const PluCard = ({ articule, name, PLU }) => {
  return (
    <Card>
      <Articule>{articule}</Articule>
      <Name>{name}</Name>
      <Plu>
        <GiWeight />
        PLU: {PLU}
      </Plu>
    </Card>
  );
};

PluCard.propTypes = {
  articule: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  PLU: PropTypes.string.isRequired,
};
