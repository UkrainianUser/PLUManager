import PropTypes from "prop-types";
import { Title } from "./PageTitle.styled";

const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
