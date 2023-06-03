import { currenciesStateInterface, currencyInterface } from "@/core/interfaces/currencies.interface";
import { filterByNames } from "../../../core/utils/filters";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL as string;

export const getAllCurrencies = createAsyncThunk(
  "currencies/getAllCurrencies",
  async () => {
    try {
      const { data } = await axios.get(apiUrl);
      return data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
);

export const currenciesReducer = {
  filterCurrencies: (state: currenciesStateInterface, action: PayloadAction<string>) => {
    state.value = filterByNames(action.payload, state.allRecords);
    // state.value = state.allRecords.filter((record: currencyInterface) => record.name.includes(action.payload) || record.enName.includes(action.payload) || record.symbol.includes(action.payload));
  }
};

export const currenciesExtraReducers = {
  [getAllCurrencies.pending as any]: (state: currenciesStateInterface) => {
    state.loading = true;
  },
  [getAllCurrencies.fulfilled as any]: (state: currenciesStateInterface, action: PayloadAction<any>) => {
    state.loading = false;
    const temp = [] as Array<currencyInterface>
    action.payload.data.forEach((currency: any) => {
      // add to list if its rial base
      if (currency.quote_currency_symbol.en === "irr") {
        temp.push({
          id: currency.pair_id,
          name: currency.name.fa,
          symbol: currency.base_currency_symbol.en.toUpperCase(),
          enName: currency.name.en.split("/")[0],
          price: currency.sell.toLocaleString('en'),
          last24hChanges: `${currency.financial.last24h.change_percent} %`,
          tradeVolume: `${currency.financial.last24h.quote_volume.toLocaleString('en')} IRR`,
          icon: `https://ramzinex.com/${currency.icon}`,
        });
      }
    });
    state.allRecords = temp;
    state.value = temp;
    state.isSuccess = true;
  },
  [getAllCurrencies.rejected as any]: (state: currenciesStateInterface) => {
    state.loading = false;
    state.isSuccess = false;
  },
};
