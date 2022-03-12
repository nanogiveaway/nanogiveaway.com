import React from 'react';
import { BaseComponentProps } from '@/types';

export default function Title(props: BaseComponentProps) {
  const { children } = props;

  return <h1 className="mb-2 text-3xl font-bold text-slate-400 dark:text-white">{children}</h1>;
}
