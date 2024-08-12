import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPokemons = createAsyncThunk(
  'pokemons/getAll', 
  async (arg, thunkAPI) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    const json = await response.json();
    console.log("response from api", json);
    return json.results;
  }
)

export const amountSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemonStatus: null,
    pokemonList: [],
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
    purchaseItem: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (state.value >= item.cost) {
        state.value -= item.cost;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state, action) => {
      console.log(state.pokemonStatus);
      
      state.pokemonStatus = "pending";
    }),
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.pokemonList = action.payload;
      }
      state.pokemonStatus = "fulfilled";
    }),
    builder.addCase(getPokemons.rejected, (state, action) => {
      console.log(action);
      

      state.pokemonStatus = "rejected";
    })
  },
});

export const { deposit, withdraw, purchaseItem } = amountSlice.actions;

export const pokemonStatusSelector = (state => state.pokemons.pokemonStatus)
export const pokemonListSelector = (state => state.pokemons.pokemonList)

export default amountSlice.reducer;
