import React from 'react';
import ShapeBox from './shapeBox';
import Footer from './Footer';

interface PropsType {
  isLeft: boolean;
}
const shapeBoxs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
function SideContainer({ isLeft }: PropsType) {
  let footer;
  let className;

  if (isLeft) {
    footer = <Footer />;
    className = 'leftSideContainer';
  } else {
    className = 'rightSideContainer';
  }
  return (
    <div className={className}>
      {shapeBoxs.map(() => {
        return <ShapeBox />;
      })}
      {footer}
    </div>
  );
}

export default SideContainer;
