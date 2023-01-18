import React from 'react';
import SideContainer from './sideContainer';

export interface Iphotos {
  link: string;
}
const photos: Iphotos[] = [
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
  {
    link: 'https://source.unsplash.com/random',
  },
];
export default function LeftSideContainer() {
  return <SideContainer photos={photos} />;
}
