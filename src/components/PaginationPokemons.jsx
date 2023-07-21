import { Pagination } from "antd";
import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";

const PaginationPokemons = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const [currentPokemons, setCurrentPokemons] = useState([]);

  useEffect(() => {
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
    setCurrentPokemons(currentPokemons);
  }, [currentPage, pokemons, pokemonsPerPage]);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        current={currentPage}
        onChange={onChange}
        total={pokemons.length}
        pageSize={pokemonsPerPage}
      />

      <PokemonList pokemons={currentPokemons}/>
    </>
  );
};

export default PaginationPokemons;
