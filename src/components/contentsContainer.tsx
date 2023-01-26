import React, { useRef, useState, useEffect, RefObject } from 'react';
import ModalContainer from './modalContainer';

export default function ContentsContainer() {
  // const [divPosition, setDivPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  const openModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      console.log(`Button's position: Left: ${rect.left}, Top: ${rect.top}`);
      // setModalPosition({ x: rect.left, y: rect.top });
    }
    setShowModal(!showModal);
  };

  const handleClickOutSide = (e: MouseEvent) => {
    console.log(!modalRef.current || !modalRef.current.contains(e.target as Node));
    if (showModal && (!modalRef.current || !modalRef.current.contains(e.target as Node))) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutSide);
      return () => {
        document.removeEventListener('mousedown', handleClickOutSide);
      };
    }
    return undefined;
  }, [showModal]);

  return (
    <div className="grid">
      <button className="one" ref={buttonRef} type="button" onClick={openModal}>
        sirs.
      </button>
      {showModal && (
        <div ref={modalRef}>
          <ModalContainer />
        </div>
      )}
      <span className="two">어떤 사람인가</span>
      <span className="three">어떤 것을 했는가</span>
      <button className="four" type="button">
        irs.
      </button>
      <span className="five">어떤 사람이 될 것인가</span>
      <button className="six" type="button">
        ir.
      </button>
    </div>
  );
}
