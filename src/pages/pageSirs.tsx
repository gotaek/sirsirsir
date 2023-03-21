import React from 'react';
import LeftSideContainer from '../components/leftSideContainer';
import RightSideContainer from '../components/rightSideContainer';
import SirsContentsContainer from '../components/sirsContentsContainer';
import { getScrollHeight } from '../API/getScrollHeight';

export default function PageSirs() {
  const numComponents = getScrollHeight();
  return (
    <div className="mainFlexbox">
      <LeftSideContainer boxCount={numComponents} />
      <SirsContentsContainer />
      <RightSideContainer boxCount={numComponents} />
    </div>
  );
}
