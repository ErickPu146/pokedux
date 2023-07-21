import { Input } from "antd";
import { useState } from "react";
import { searchPokemon } from "../slices/dataSlice";
import { useDispatch } from "react-redux";

const Searcher = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    dispatch(searchPokemon(searchValue));
    setSearchValue('')
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      size="large"
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
      value={searchValue}
    />
  );
};

export default Searcher;
