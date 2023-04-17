import React from 'react';
import SirsContentsContainer from '../components/contentsContainer/sirsContentsContainer';
import { getNumComponentsFromScrollHeight } from '../API/getNumComponentsFromScrollHeight';
import DefaultPageForm from './defaultPageForm';

export default function PageSirs() {
  const boxCount = getNumComponentsFromScrollHeight();
  return (
    <DefaultPageForm boxCount={boxCount}>
      <SirsContentsContainer />
    </DefaultPageForm>
  );
}
