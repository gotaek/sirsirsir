import React from 'react';
import DefaultPageForm from './defaultPageForm';
import IrContentsContainer from '../components/contentsContainer/irContentsContainer';
import { getNumComponentsFromScrollHeight } from '../API/getNumComponentsFromScrollHeight';

export default function PageIr() {
  const boxCount = getNumComponentsFromScrollHeight();

  return (
    <DefaultPageForm boxCount={boxCount}>
      <IrContentsContainer />
    </DefaultPageForm>
  );
}
