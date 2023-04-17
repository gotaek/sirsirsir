import React from 'react';
import DefaultPageForm from './defaultPageForm';
import IrsContentsContainer from '../components/contentsContainer/irsContentsContainer';
import { getNumComponentsFromScrollHeight } from '../API/getNumComponentsFromScrollHeight';

export default function PageIrs() {
  const boxCount = getNumComponentsFromScrollHeight();

  return (
    <DefaultPageForm boxCount={boxCount}>
      <IrsContentsContainer />
    </DefaultPageForm>
  );
}
