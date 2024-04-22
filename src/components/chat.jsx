"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { RxPaperPlane } from "react-icons/rx";
import { FiSmile } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { BsChat } from "react-icons/bs";
import Image from "next/image";

export default function Chat() {
  const [isOpen, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const [attach, setAttach] = useState("");
  const [symbol, setSymbol] = useState("");
  const [inbox, setInbox] = useState("");

  function handleInbox() {
    setInbox(!inbox);
  }

  function handleClick() {
    setOpen(!isOpen);
  }

  function handleOption() {
    setOption(!option);
  }

  function handleAttach() {
    setAttach(!attach);
  }

  function handleSymbol() {
    setSymbol(!symbol);
  }

  return (
    <section className="Quicksand z-30 items-end flex gap-[12px] fixed end-4 md:end-[56px] bottom-4 md:bottom-[46px]">
      {isOpen ? (
        <div
          data-aos="fade-up"
          className="flex fixed inset-0 lg:static border rounded-[12px] overflow-hidden lg:w-[767px] lg:h-[500px] bg-[#F4F5F7]">
          <div
            className={`${
              inbox ? "hidden" : "container"
            } border md:w-[90%] bg-white md:flex flex-col col-span-1`}>
            <div className="flex flex-col border-b p-[17px] gap-[12px]">
              <div className="text-[24px] items-center justify-between flex font-[700] text-left">
                <h1>Pesan</h1>
                <button
                  onClick={handleClick}
                  className="md:hidden overflow-hidden w-[24px] h-[24px]">
                  <Image
                    className="active:scale-75"
                    src={"/icons/close-2.png"}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div className="flex gap-[1px] items-center container justify-between h-[44px] rounded-[8px]">
                <input
                  type="text"
                  className="px-[16px] border rounded-l-[8px] container h-full"
                  placeholder="Search"
                />
                <button className="bg-[#E5E5E5] active:scale-95 items-center rounded-r-[8px] text-[#aaa] grid h-full px-[16px]">
                  <CiSearch />
                </button>
              </div>
              <div className="flex gap-[31px] text-[14px] font-[400]">
                <button className="relative flex border-b-4 border-[#D7A901]">
                  <h1>Semua</h1>
                </button>
                <button>Belum dibaca</button>
              </div>
            </div>
            <div className="flex h-full px-[5px] py-[6px] flex-col">
              {/* Inbox */}
              <button
                onClick={handleInbox}
                className="flex md:bg-[#F4F5F7] md:border focus:bg-[#F4F5F7] focus:border rounded-[4px] px-[11px] py-[9px] gap-[16px] items-center">
                <button className="grid text-[10px] bg-cover bg-center bg-[url('../../public/cars/car14.jpeg')] w-[32px] overflow-hidden h-[32px] rounded-full justify-center items-center border"></button>
                <div className="flex flex-col text-start container font-[400]">
                  <div className="flex justify-between text-[14px]">
                    <h1 className="font-bold">Client</h1>
                    <p className="text-[#333]">9:54 PM</p>
                  </div>
                  <div className="hidden items-center text-[12px] gap-1">
                    <p className="font-bold text-">You :</p>
                    <p className="text-[#333]">How are you ?</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`${
              inbox ? "flex container" : "hidden"
            } relative border md:flex w-[120%] flex-col justify-center items-center`}>
            <div className="items-center gap-[10px] px-[20px] justify-end absolute container border-b flex bg-white top-0 h-[76px]">
              <button
                onClick={handleInbox}
                className="grid md:hidden active:scale-75 h-1/2 text-[#aaa] items-center justify-center w-[24px]">
                <FaArrowLeft />
              </button>
              {/* Title Inbox */}
              <div className="flex items-center gap-[16px] container">
                <div className="bg-cover bg-center rounded-full bg-[url('../../public/cars/car14.jpeg')] grid items-end justify-end w-[40px] h-[40px]">
                  <div className="w-[18px] h-[18px] rounded-full border-2 bg-[#05AA5B]"></div>
                </div>

                <div className="flex flex-col pt-1 leading-5">
                  <h1 className="text-[21px] flex font-[700]">Client</h1>
                  <p className="text-[12px] text-[#aaa] font-[400]">Online</p>
                </div>
              </div>

              {/* Opsi */}
              <button
                onClick={handleOption}
                className="relative w-[28px] h-[28px]">
                <p className="absolute top-[-17px] start-[4px] text-[#aaa] text-4xl">
                  ...
                </p>

                {/* Dropdown Option */}
                <div
                  className={`absolute shadow-md border overflow-hidden ${
                    option ? "flex" : "hidden"
                  } flex-col w-[192px] h-[87px] justify-center text-start top-[40px] bg-white end-0 rounded-[12px] text-[14px] font-[400]`}>
                  <p className="hover:bg-[#FCD02F] px-[20px] grid items-center container h-full">
                    Lihat Profil
                  </p>
                  <p className="hover:bg-[#FCD02F] px-[20px] items-center grid container h-full">
                    Laporkan Pengguna
                  </p>
                </div>
              </button>
              <button
                onClick={handleClick}
                className="w-[28px] hidden md:grid justify-center items-center h-[28px] text-[#aaa]">
                <IoIosArrowDown />
              </button>
            </div>

            {/* Isi Pesan */}
            <p>Tidak ada Pesan</p>

            <div className="absolute container items-center bottom-0 px-[17px] py-[15px] bg-white border-t flex">
              <div className="relative gap-[1px] flex rounded-[8px] items-center container justify-between h-[44px]">
                <div className="absolute start-[15px] flex gap-[8px]">
                  {/* Dropdown Pesan */}
                  <div
                    onClick={handleAttach}
                    className={`absolute overflow-hidden text-[14px] font-[400] -top-[100px] bg-white border shadow-md ${
                      attach ? "flex" : "hidden"
                    } flex-col w-[151px] h-[80px] rounded-[12px] items-center`}>
                    <button className="flex hover:bg-[#FFC700] container px-[18px] h-full gap-[14px] items-center">
                      <IoImageOutline />
                      Foto / Video
                    </button>
                    <button className="flex hover:bg-[#FFC700] container px-[18px] h-full gap-[14px] items-center">
                      <BsSuitcaseLg />
                      Produk
                    </button>
                  </div>
                  <button
                    onClick={handleAttach}
                    className="flex text-[#333] justify-center items-center w-[15px] h-[15px] border rounded-full border-[#333]">
                    +
                  </button>
                  <button
                    onClick={handleSymbol}
                    className="relative flex text-[#333] justify-center items-center w-[15px] h-[15px] rounded-full border-[#333]">
                    <div
                      className={`absolute start-0 shadow-md rounded-[12px] -top-[70px] border bg-white w-[150px] h-[50px] justify-center items-center ${
                        symbol ? "flex" : "hidden"
                      }`}>
                      Empty
                    </div>
                    <FiSmile />
                  </button>
                </div>
                <input
                  type="text"
                  className="container border rounded-l-[8px] pl-[70px] pr-[20px] h-full"
                  placeholder="Tulis pesan"
                />
                <button className="grid active:scale-95 text-[#333] bg-[#FFC700] px-[16px] h-full rounded-r-[8px] justify-center items-center">
                  <RxPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          data-aos="fade-down"
          onClick={handleClick}
          className="md:py-[14px] text-[10px] px-[10px] py-[4px] md:text-[16px] hover:scale-105 border text-[#333] font-[600] bg-white items-center md:px-[30px] flex gap-[12px] rounded-full">
          <BsChat />
          <h1>Pesan</h1>
        </button>
      )}

      <button
        data-aos="fade-down"
        className="hover:scale-105 grid Quicksand justify-center md:text-[24px] text-[#333] items-center rounded-full bg-[#FCD02F] w-[24px] h-[24px] md:w-[48px] md:h-[48px]">
        +
      </button>
    </section>
  );
}
