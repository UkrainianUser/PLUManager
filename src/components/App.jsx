import { PageTitle } from "./PageTitle/PageTitle";
import { PluList } from "./PluList/PluList";
import { Container } from "../Container/Container";

import data from "../data/data.json";

export const App = () => {
  return (
    <Container>
      <PageTitle text="Всі PLU вагового товару" />
      <PluList items={data} />
    </Container>
  );
};
