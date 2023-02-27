import React from 'react';
import SideContainer from './sideContainer';

export interface IphotosInfo {
  link: string;
}
export default function RightSideContainer() {
  return <SideContainer isLeft={false} />;
}
