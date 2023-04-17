import React, { ReactNode } from 'react';
import LeftSideContainer from '../components/leftSideContainer';
import RightSideContainer from '../components/rightSideContainer';

type defaultPageProps = {
  boxCount: number;
  children: ReactNode;
};

export default function DefaultPageForm({ boxCount, children }: defaultPageProps) {
  return (
    <div className="mainFlexbox">
      <LeftSideContainer boxCount={boxCount} />
      {children}
      <RightSideContainer boxCount={boxCount} />
    </div>
  );
}
