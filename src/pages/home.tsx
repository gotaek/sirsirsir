import React from 'react';
import LeftSideContainer from '../components/leftSideContainer';
import RightSideContainer from '../components/rightSideContainer';
import HomeContentsContainer from '../components/homeContentsContainer';
import { getScrollHeight } from '../API/getScrollHeight';

export default function Home() {
  const numComponents = getScrollHeight();

  return (
    <div className="mainFlexbox">
      <LeftSideContainer boxCount={numComponents} />
      <HomeContentsContainer />
      <RightSideContainer boxCount={numComponents} />
    </div>
  );
}
