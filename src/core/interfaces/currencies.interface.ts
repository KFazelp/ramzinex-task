export interface currenciesStateInterface {
  allRecords: Array<currencyInterface>;
  value: Array<currencyInterface>;
  isSuccess: boolean;
  loading: boolean;
  test: number;
}

export interface currencyStateInterface {
  value: currencyInterface;
}

export interface currencyInterface {
  id: string;
  name: string;
  enName: string;
  price: string;
  last24hChanges: string;
  tradeVolume: string;
  symbol: string;
  icon: string;
}
