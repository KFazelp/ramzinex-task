import { filterCurrencies } from '../../../core/store/states/currencies.state';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

export function SearchBox() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  let timer = null as any;
  const searchTimeout = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      dispatch(filterCurrencies(target));
    }, 800);
  };

  return (
    <input className='search-box' type="text" placeholder={t("search")} onChange={searchTimeout} />
  );
}
