"use client";

import Link from "next/link";
import GoogleMap from "../../../public/svgs/googleMap";

import Mail from "../../../public/svgs/mail";
import Profil from "../../../public/svgs/profil";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Whatsapp from "../../../public/svgs/whatsapp";
import Facebook from "../../../public/svgs/facebook";
import Image from "next/image";
import Youtube from "../../../public/svgs/youtube";
import Tiktok from "../../../public/svgs/tiktok";
import { useState } from "react";

export default function SideBarProfil() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDetail() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="grid lg:contents rounded-[12px] overflow-hidden">
      <section className="grid lg:rounded-[12px] lg:justify-center lg:flex lg:w-[305px] lg:h-full bg-white">
        <div className="p-[20px] lg:flex lg:flex-col lg:h-full grid gap-[20px]">
          <div className="pt-[20px] flex lg:flex-col lg:h-auto items-center gap-[20px]">
            <button className="rounded-full lg:w-[120px] lg:h-[120px] w-[76px] h-[76px] bg-gray-500">
              A
            </button>
            <div className="flex lg:text-center flex-col">
              <h1 className="font-[600] text-[18px] text-[#333333]">Anonim</h1>
              <p className="font-[400] text-[12px] text-[#AAAAAA]">
                Bergabung pada September 2021
              </p>
            </div>
          </div>
          <Link
            id="edit-profil"
            href={"/profile/edit"}
            className="flex justify-center">
            <button className="flex rounded-[8px] gap-[10px] py-[13px] justify-center items-center text-[14px] font-[600] md:w-full w-full h-[44px] bg-[#f5f5f5]">
              <Profil className="" />
              Edit Profil
            </button>
          </Link>
          <DetailProfil className={"hidden lg:contents"} />
        </div>
      </section>

      {/* dropdown */}
      <div
        className={
          isOpen
            ? "relative lg:hidden grid bg-white px-[20px] transition-all duration-500 h-full pb-[102px] overflow-hidden"
            : "relative lg:hidden grid bg-white px-[20px] transition-all items-end duration-500 h-[82px] overflow-hidden"
        }>
        {/* <DetailProfil /> */}
        <DetailProfil className={""} />
        <div className="absolute w-full px-[20px] pb-[20px] bg-white bottom-0 start-0 grid gap-[20px]">
          <div className="w-full lg:hidden h-[1px] border-[1px] border-[#e5e5e5]"></div>
          <div className="lg:hidden justify-end flex">
            {!isOpen ? (
              <button
                onClick={handleDetail}
                className="flex font-[500] text-[12px] text-[#aaaaaa] active:scale-90 items-center justify-between bg-[#ececec] w-[169px] h-[40px] rounded-[8px] px-[16px] py-[10px]">
                <p className="">Lihat lebih banyak</p>
                <FaAngleDown className="w-[10px] h-[10px]" />
              </button>
            ) : (
              <Link
                href={"#edit-Profil"}
                onClick={handleDetail}
                className="flex transition-all duration-500 font-[500] text-[12px] text-[#aaaaaa] active:scale-90 items-center justify-between bg-[#ececec] w-[169px] h-[40px] rounded-[8px] px-[16px] py-[10px]">
                <p className="">Lihat lebih sedikit</p>
                <FaAngleUp className="w-[10px] h-[10px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailProfil({ className }) {
  return (
    <div className={`${className} grid gap-[20px]`}>
      <div className={"grid gap-[20px]"}>
        <h1 className="font-[500] text-[12px] text-[#aaaaaa]">BIO</h1>
        <p className="font-[500] text-[14px]">
          Penjual terpercaya sejak tahun 2010. Bukan penjual musiman yang cepat
          menghilang
        </p>
      </div>
      <div className="w-full h-[1px] border-[1px] border-[#e5e5e5]"></div>
      <div className="grid gap-[20px]">
        <p className="font-[500] text-[12px] text-[#aaaaaa]">KONTAK</p>
        <div className="flex items-center gap-[10px]">
          <Mail />
          <p className="font-[500] text-[14px] text-[#333333]">email.com</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Whatsapp />
          <p className="underline font-[500] text-[14px] text-[#30BE2E]">
            08123456789
          </p>
        </div>
        <div className="flex justify-start gap-[16px]">
          <Link
            href={"/"}
            className="box-shadow flex rounded-full w-[40px] justify-center h-[40px] items-center">
            <Facebook className="" />
          </Link>
          <Link
            href={"/"}
            className="flex  box-shadow rounded-full w-[40px] justify-center h-[40px] items-center">
            <Image src={"/icons/Instagram.png"} width={20} height={20} />
          </Link>
          <Link
            href={"/"}
            className=" flex box-shadow rounded-full w-[40px] justify-center h-[40px] items-center">
            <Youtube />
          </Link>
          <Link
            href={"/"}
            className=" flex box-shadow rounded-full w-[40px] justify-center h-[40px] items-center">
            <Tiktok />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] border-[1px] border-[#e5e5e5]"></div>
      <div className="grid gap-[20px]">
        <h1 className="font-[500] text-[12px] text-[#aaaaaa]">ALAMAT</h1>
        <p className="font-[500] text-[14px]">
          Pejaten Village Mall P-5, Jl. Warung Jati Barat, RT.01/RW.05, Jati
          Padang, Kecamatan Pasar Minggu, Jakarta Selatan, DKI Jakarta
        </p>
        <div className="justify-start items-center flex w-full gap-[10px]">
          <GoogleMap className="" />
          <Link
            href={"/"}
            className="underline text-[#d7a901] font-[500] text-[12px]">
            Lihat Petunjuk
          </Link>
        </div>
      </div>
    </div>
  );
}
