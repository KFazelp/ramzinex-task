import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ICurrencyCardProps {
  icon: string;
  name: string;
  symbol: string;
  id: string;
}

export function CurrencyCard({ icon, name, symbol, id }: ICurrencyCardProps) {
  return (
    <Link to={`/currency/${id}`}>
      <div className='currency-card'>
        <img src={icon} alt={`${symbol}-icon`} width={40} />
        <div>{`${name} (${symbol})`}</div>
      </div>
    </Link>
  );
}
