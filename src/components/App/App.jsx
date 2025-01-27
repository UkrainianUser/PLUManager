import PageTitle from "../PageTitle";
import PluList from "../PluList";
import { Container } from "./App.styled";

import data from "../../data/data.json";
import PluSearch from "../PluSearch/PluSearch";

export const App = () => {
  return (
    <Container>
      <PageTitle text="PLU вагового товару" />
      <PluSearch />
      <PluList items={data} />
    </Container>
  );
};
