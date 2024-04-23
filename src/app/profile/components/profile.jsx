import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Profile() {
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
        onMouseEnter={() => {
          setIsOverButton(true);
        }}
        onMouseLeave={() => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}>
        <div>A</div>
      </div>

      <div
        onMouseEnter={() => {
          setIsOverList(true);
        }}
        onMouseLeave={() => {
          setIsOverList(false);
        }}>
        <div
          onSelect={() => {
            setIsOpen(false);
          }}>
          A
        </div>

        <div
          onSelect={() => {
            setIsOpen(false);
          }}>
          Dashboard
        </div>

        <div
          onSelect={() => {
            setIsOpen(false);
          }}>
          Log Out
        </div>
      </div>
    </div>
  );
}
