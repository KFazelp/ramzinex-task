import { configureStore } from "@reduxjs/toolkit";
import currenciesState from "./states/currencies.state";

const store = configureStore({
  reducer: {
    currencies: currenciesState.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;