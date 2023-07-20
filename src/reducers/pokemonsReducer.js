import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex(
        (pokemon) => pokemon.id === action.payload
      );

      if (currentPokemonIndex < 0) {
        return state;
      }

      newPokemonList[currentPokemonIndex].favorite =
        !newPokemonList[currentPokemonIndex].favorite;

      console.log(
        "🚀 ~ file: pokemonsReducer.js:24 ~ pokemonsReducer ~ newPokemonList:",
        newPokemonList
      );

      return { ...state, pokemons: newPokemonList };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
