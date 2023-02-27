import React from 'react';
import SideContainer from './sideContainer';

export interface Iphotos {
  link: string;
}
export default function LeftSideContainer() {
  return <SideContainer isLeft />;
}
