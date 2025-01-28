import PageTitle from "../PageTitle";
import PluList from "../PluList";
import { Container, SearchWrapper } from "./App.styled";

import data from "../../data/data.json";
import PluSearch from "../PluSearch/PluSearch";
import { useState } from "react";

export const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <Container>
      <PageTitle text="PLU вагового товару" />
      <SearchWrapper>
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
          inputType="tel"
          inputPlaceholder="Введіть PLU товару"
        />
      </SearchWrapper>
      <PluList items={filteredData} />
    </Container>
  );
};
