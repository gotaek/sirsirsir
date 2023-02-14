import React, { useRef, useState, useEffect } from 'react';
import Modal from './modal';

export default function ContentsContainer() {
  const [visibilityModal, setVisibilityModal] = useState<Boolean>(false);
  const [delayToCloseModal, setDelayToCloseModal] = useState<Boolean>(true);
  // const [modalPosition, setModalPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState<number | null>(null);
  // const repeatRef = useRef<NodeJS.Timeout | null>(null);

  const openModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      console.log(`Button's position: Left: ${rect.left}, Top: ${rect.top}`);
      // setModalPosition({ x: rect.left, y: rect.top });
    }

    setVisibilityModal(!visibilityModal);
  };
  const closeModal = () => {
    if (visibilityModal === true) {
      setVisibilityModal(!visibilityModal);
    }
  };

  const handleClickOutSide = (e: MouseEvent) => {
    if (visibilityModal && (!modalRef.current || !modalRef.current.contains(e.target as Node))) {
      setVisibilityModal(false);
    }
  };

  useEffect(() => {
    if (visibilityModal && repeat) {
      document.addEventListener('mousedown', handleClickOutSide);
      clearTimeout(repeat);
      setRepeat(null);
      setDelayToCloseModal(false);

      return () => {
        document.removeEventListener('mousedown', handleClickOutSide);
      };
    }
    setRepeat(
      window.setTimeout(() => {
        setDelayToCloseModal(true);
      }, 400),
    );
    return undefined;
  }, [visibilityModal]);

  return (
    <div className="grid">
      <button className="btn1" type="button" ref={buttonRef} onClick={openModal}>
        sirs.
      </button>
      {!delayToCloseModal && (
        <div className={`modalBackground ${visibilityModal ? 'opacity-fade-in' : 'opacity-fade-out'}`}>
          <button className="closeBtn" type="button" onClick={closeModal}>
            ❌
          </button>
          <div className={`modalContainer ${visibilityModal ? 'modal-fade-in' : 'modal-fade-out'}`} ref={modalRef}>
            <Modal />
          </div>
        </div>
      )}
      <span className="text1">어떤 사람인가</span>
      <span className="text2">어떤 것을 했는가</span>
      <button className="btn2" type="button" ref={buttonRef} onClick={openModal}>
        irs.
      </button>
      <span className="text3">어떤 사람이 될 것인가</span>
      <button className="btn3" type="button" ref={buttonRef} onClick={openModal}>
        ir.
      </button>
    </div>
  );
}
