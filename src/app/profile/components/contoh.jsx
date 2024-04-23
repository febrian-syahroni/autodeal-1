import React, { useState } from "react";

export default function HoverDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center p-2 bg-white border rounded-md">
          <span className="mr-4">Dropdown Button</span>
        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
    </div>
  );
}
