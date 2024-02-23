"use client";

import Image from "next/image";
import Favorite from "../../../public/svgs/favorite";
import Search from "../../../public/svgs/search";
import Eye from "../../../public/svgs/eye";
import Calendar from "../../../public/svgs/calendar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export const kategori = [
  { harga: "Harga Terendah" },
  { harga: "Harga Tertinggi" },
];

export default function ContentProfil({ api }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  function handleKategori() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="grid lg:w-3/4 lg:gap-[20px] gap-[10px]">
      <div className="Quicksand lg:flex lg:w-full lg:justify-between">
        <div className="hidden lg:flex items-center">
          <form className="">
            <div className=" flex gap-[2px]">
              <div className="form-group">
                <input
                  className="w-[251px] h-[44px] bg-white pl-[16px] rounded-l-[8px] text-sm"
                  type="text"
                  placeholder="Cari Berdasarkan Judul"
                />
                <button className="flex absolute left-4 top-0 mr-3 mt-3 text-gray-400"></button>
              </div>

              <button className="cursor-pointer w-[52px] bg-white flex justify-center items-center rounded-r-[8px]">
                <Search />
              </button>
            </div>
          </form>
          <p className="ml-[20px] font-[600] text-[18px] text-[#aaaaaa]">
            125 iklan
          </p>
        </div>

        <div className=" grid lg:gap-[20px] lg:flex lg:items-center grid-cols-4">
          <span className="grid col-span-1 md:col-span-2 items-center font-[600] text-[14px] text-[#333333]">
            Urutkan :
          </span>

          <div className="grid lg:bg-white col-span-3 md:col-span-2 rounded-[8px] lg:flex h-[40px]">
            {/* Desktop */}
            <div className="hidden lg:flex">
              <button className="focus:text-[#d7a901] justify-center w-[100px] h-full flex items-center font-[600] text-[14px] text-[#333333]">
                Terbaru
              </button>
            </div>

            {/* Mobile */}
            <div className="relative  bg-white rounded-[8px] justify-between flex lg:w-[165px] w-full h-full items-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex justify-between font-[600] h-full text-[14px] text-[#333333] w-full items-center">
                <span className="hidden lg:flex border-[1px] w-0 h-[24px]"></span>
                <div className="flex px-[20px] justify-between w-full items-center">
                  {selected ? selected.substring() : "Harga"}
                  {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
                </div>
              </button>
              {isOpen && (
                <div
                  onClick={handleKategori}
                  className="font-[600] text-[14px] text-[#333333] absolute overflow-hidden flex flex-col rounded bg-white z-10 w-full left-0 top-[42px]">
                  {kategori?.map((value) => (
                    <button
                      key={value.harga}
                      onClick={() => setSelected(value.harga)}
                      className="px-[20px] active:scale-95 h-[37px] hover:bg-[#d7a901] text-start">
                      {value.harga}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-[20px] gap-[10px]">
        {api.map((value, index) => (
          <div
            key={index}
            className="cursor-pointer active:scale-95 lg:hover:scale-105 lg:active:scale-100 duration-200 h-auto md:h-auto rounded-[12px] bg-white">
            <Content api={value} />
          </div>
        ))}
      </div>
    </section>
  );
}

{
  /* Content */
}

function Content({ api }) {
  const { car, car_model } = api;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-center overflow-hidden relative h-[150px] md:h-[250px] rounded-t-[12px] bg-transparent">
        <Image
          className="md:w-full md:h-full absolute object-cover h-[150px]"
          width={170}
          height={150}
          src={car_model}
        />
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`active:scale-90 justify-center flex bg-white/60 backdrop-blur-sm items-center w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-[8px] absolute mt-[106px] md:mt-[194px] end-0 mr-[20px] mb-[12px] md:mb-[16px]`}>
          <Favorite
            strokeWidth={0}
            className={`${
              !isOpen ? "fill-none" : "fill-red-400"
            } w-[22px] h-[22px] outline-none`}
          />
        </button>
      </div>
      <div className="mx-[12px] pb-[15px] md:pb-[20px] md:mx-[20px]">
        <div className="flex justify-between items-center mt-[10px] md:mt-[15px] font-[500] text-[10px] md:text-[12px] text-[#aaaaaa]">
          Jual | Baru
          <div className="flex items-center">
            <Eye className="mr-[5px] md:mr-[6px]" />
            120
          </div>
        </div>
        <p className="flex justify-center items-center mt-[10px] bg-[#fff7e1] w-[84px] md:w-[106px] h-[20px] md:h-[27px] rounded-[6px] md:rounded-[8px] px-[6px] md:px-[10px] py-[4px] md:py-[6px] font-[700] text-[10px] md:text-[12px] text-[#d7a901]">
          2022-1500 cc
        </p>
        <p className="mt-[10] md:mt-[11px] font-[500] text-[12px] md:text-[14px] text-[#333333]">
          {car}
        </p>
        <p className="mt-[4px] font-[700] text-[14px] md:text-[24px] text-[#333333]">
          Rp 3.518.990.000
        </p>
        <div className="md:gap-1 flex justify-between items-center font-[500] text-[10px] md:text-[12px] text-[#aaaaaa] mt-[11px] md:mt-[16px]">
          <div className="flex gap-[6px] justify-between items-center">
            <div className="flex w-[12px] h-[12px] md:w-[16px] md:h-[16px]">
              <Image src={"/icons/map.png"} width={50} height={50} />
            </div>
            <span className="text-[10px] font-[500]">
              Jakarta Barat, kalideres
            </span>
          </div>
          <div className="hidden gap-[6px] md:flex md:items-center md:text-center">
            <Calendar className="" />
            <p className="">7 Aug</p>
          </div>
        </div>
      </div>
    </div>
  );
}
