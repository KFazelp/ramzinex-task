import * as React from 'react';

export interface IMessageProps {
  text: string;
}

export function Message({ text }: IMessageProps) {
  return (
    <div className='message-box'>
      {text}
    </div>
  );
}
