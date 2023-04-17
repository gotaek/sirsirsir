import React from 'react';
import DefaultPageForm from './defaultPageForm';
import HomeContentsContainer from '../components/contentsContainer/homeContentsContainer';
import { getNumComponentsFromScrollHeight } from '../API/getNumComponentsFromScrollHeight';

export default function Home() {
  const boxCount = getNumComponentsFromScrollHeight();

  return (
    <DefaultPageForm boxCount={boxCount}>
      <HomeContentsContainer />
    </DefaultPageForm>
  );
}
