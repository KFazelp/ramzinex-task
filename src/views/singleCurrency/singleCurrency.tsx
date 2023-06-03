import * as React from 'react';
import { filterById } from '../../core/utils/filters';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { currencyInterface } from '@/core/interfaces/currencies.interface';
import { useTranslation } from 'react-i18next';

export function SingleCurrency() {
  const { id } = useParams();
  const { t } = useTranslation();

  const currencies = useSelector((state: any) => state.currencies.allRecords);
  const data = filterById(id as string, currencies) as any;

  const currencyData = ["enName", "price", "last24hChanges", "tradeVolume"];

  return (
    <div className='single-currency'>
      <div>
        <div className='name'>{data.name}</div>
        {currencyData.map((item: string, index: number) => {
          return <div className='data-container' key={index}>
            <div>{t(item)}</div>
            <div style={{ direction: 'ltr' }}>{data[item]}</div>
          </div>
        })}
      </div>
      <Link to={'/'}>
        <div className='button'>{t("return")}</div>
      </Link>
    </div>
  );
}
