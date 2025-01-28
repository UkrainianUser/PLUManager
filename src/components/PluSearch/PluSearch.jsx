import { useEffect, useState } from "react";
import { SearchInput, InputWrapper } from "./PluSearch.styled";
import { filterPlus } from "../../utils/filterPlus";

const PluSearch = ({ data, onFilter, fields, inputType, inputPlaceholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredPlus = filterPlus(searchTerm, data, fields);
      onFilter(filteredPlus);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, data, onFilter, fields]);

  return (
    <InputWrapper>
      <SearchInput
        value={searchTerm}
        autoFocus
        type={inputType}
        autoComplete="off"
        placeholder={inputPlaceholder}
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
    </InputWrapper>
  );
};

export default PluSearch;
