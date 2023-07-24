import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons, searchAPokemon } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  searchedPokemon: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetils",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const searchPokemon = createAsyncThunk(
  "data/searchPokemon",
  async (idOrName, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonRes = await searchAPokemon(idOrName)
    dispatch(setSerchedPokemon(pokemonRes));
    dispatch(setLoading(false));
  }
)

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload
      );

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSerchedPokemon: (state, action) => {
      state.searchedPokemon = action.payload;
    }
  },
});

export const { setPokemons, setFavorite, setSerchedPokemon } = dataSlice.actions;

export default dataSlice.reducer;
