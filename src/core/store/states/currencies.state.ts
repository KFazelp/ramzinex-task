import { createSlice } from "@reduxjs/toolkit"
import { currenciesStateInterface, currencyInterface } from "@/core/interfaces/currencies.interface";
import { currenciesExtraReducers, currenciesReducer } from "../reducers/currencies.reducer";

const INTIAL_STATE = {
  value: [] as Array<currencyInterface>,
  test: 0,
  isSuccess: false,
  loading: true,
} as currenciesStateInterface;

const currenciesState = createSlice({
  name: "currencies",
  initialState: INTIAL_STATE,
  reducers: currenciesReducer,
  extraReducers: currenciesExtraReducers,
});

export const { filterCurrencies } = currenciesState.actions;

export default currenciesState; 