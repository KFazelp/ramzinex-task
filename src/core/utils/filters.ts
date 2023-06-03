import { currencyInterface } from "../interfaces/currencies.interface";

export const filterById = (id: string, list: Array<currencyInterface>) => {
  return list.filter((currency) => {
    return currency.id == id;
  })[0];
};

export const filterByNames = (target: string, list: Array<currencyInterface>) => {
  return list.filter((currency) => {
    return currency.name.includes(target) || currency.enName.includes(target) || currency.symbol.includes(target);
  })
};