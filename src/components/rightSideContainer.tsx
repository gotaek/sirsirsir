import React from 'react';
import SideContainer from './sideContainer';

export interface IphotosInfo {
  link: string;
}
const photos: IphotosInfo[] = [
  {
    link: 'https://source.unsplash.com/random',
  },
  {
    link: 'https://source.unsplash.com/random',
  },
  {
    link: 'https://source.unsplash.com/random',
  },
  {
    link: 'https://source.unsplash.com/random',
  },
  {
    link: 'https://source.unsplash.com/random',
  },
];
export default function RightSideContainer() {
  return <SideContainer photos={photos} />;
}
