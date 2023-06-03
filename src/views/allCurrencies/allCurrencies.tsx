import { filterCurrencies } from '../../core/store/states/currencies.state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrencies } from '../../core/store/reducers/currencies.reducer';
import { currencyInterface } from "../../core/interfaces/currencies.interface";
import { AppDispatch } from '../../core/store/store';
import { useTranslation } from 'react-i18next';
import { SearchBox } from './fragments/search.box';
import { Message } from '../../components/message';
import { CurrencyCard } from './fragments/currency.card';

export function AllCurrencies() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);
  const currencies = useSelector((state: any) => state.currencies);

  const { t } = useTranslation();

  return (
    <div>
      {currencies.loading && <Message text={t("loading")} />}
      {currencies.isSuccess ? <>
        <SearchBox />
        <div style={{ padding: '10px 0' }}>{t("currencies_list")}</div>
        {currencies.value.map((currency: currencyInterface, index: number) => {
          return <CurrencyCard key={index} id={currency.id} icon={currency.icon} name={currency.name} symbol={currency.symbol} />
        })}
      </> : <Message text={t("fetch_error")} />}
    </div>
  );
}
