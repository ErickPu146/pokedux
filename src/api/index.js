import axios from "axios";

export const getPokemons = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const { data } = await axios.get(pokemon.url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const searchAPokemon = async (idOrName) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
