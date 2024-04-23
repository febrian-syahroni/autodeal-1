import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";

export default function CategoryDropdown(props) {
  let { title } = props;

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
    <Menu>
      <MenuButton
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
        <button>{title}</button> <span aria-hidden>▾</span>
      </MenuButton>

      <div
        onMouseEnter={(event) => {
          setIsOverList(true);
        }}
        onMouseLeave={(event) => {
          setIsOverList(false);
        }}>
        <button
          onSelect={() => {
            setIsOpen(false);
          }}>
          Action 1
        </button>

        <button
          onSelect={() => {
            setIsOpen(false);
          }}>
          Action 2
        </button>
      </div>
    </Menu>
  );
}
