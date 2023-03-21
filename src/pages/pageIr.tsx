import React from 'react';
import LeftSideContainer from '../components/leftSideContainer';
import RightSideContainer from '../components/rightSideContainer';
import { getScrollHeight } from '../API/getScrollHeight';

export default function PageIr() {
  const numComponents = getScrollHeight();

  return (
    <div className="mainFlexbox">
      <LeftSideContainer boxCount={numComponents} />

      <RightSideContainer boxCount={numComponents} />
    </div>
  );
}
