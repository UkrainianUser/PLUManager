import PageTitle from "../PageTitle";
import PluList from "../PluList";
import { Container } from "./App.styled";

import data from "../../data/data.json";
import PluSearch from "../PluSearch/PluSearch";
import { useState } from "react";

export const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <Container>
      <PageTitle text="PLU вагового товару" />
      <PluSearch
        data={data}
        onFilter={setFilteredData}
        fields={["articule", "name"]}
        inputType="text"
        inputPlaceholder="Введіть назву або артикул"
      />
      <PluSearch
        data={data}
        onFilter={setFilteredData}
        fields={["PLU"]}
        inputType="text"
        inputPlaceholder="Введіть PLU товару"
      />
      <PluList items={filteredData} />
    </Container>
  );
};
