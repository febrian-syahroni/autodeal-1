import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function DariLuar() {
  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <div>
      <div
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={(event) => {
          setIsOverButton(true);
        }}
        onMouseLeave={(event) => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}>
        <span>Title</span> <span aria-hidden>▾</span>
      </div>
      <div
        onMouseEnter={(event) => {
          setIsOverList(true);
        }}
        onMouseLeave={(event) => {
          setIsOverList(false);
        }}>
        <div
          onSelect={() => {
            setIsOpen(false);
          }}>
          Action 1
        </div>
        <div
          onSelect={() => {
            setIsOpen(false);
          }}>
          Action 2
        </div>
      </div>
    </div>
  );
}
