"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RightArrow from "../../public/svgs/panah-kanan";
import LeftArrow from "../../public/svgs/panah-kiri";
import LeftArrowDark from "../../public/svgs/panah-kiri-abu";
import RIghtArrowDark from "../../public/svgs/panah-kanan-abu";

export default function Category() {
  const categoryItems = [
    { scr: "/icons/semua.png", alt: "semuaaaaaaaa" },
    { scr: "/icons/properti.png", alt: "properti" },
    { scr: "/icons/mobil.png", alt: "mobil" },
    { scr: "/icons/motor.png", alt: "motor" },
    { scr: "/icons/gadget.png", alt: "gadget" },
    { scr: "/icons/elektronik.png", alt: "gadget" },
    { scr: "/icons/olahraga.png", alt: "olahraga" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
    { scr: "/icons/pawprint.png", alt: "pawprint" },
  ];

  const [disablePrevButton, setDisablePrevButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const swiperRef = useRef();

  return (
    <div className="Quicksand hidden w-full md:flex items-center h-[64px] bg-[#333333]">
      <div className="relative max-w-[1280px] mx-auto flex !justify-between">
        {/* Categories  */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setDisablePrevButton(swiper.isBeginning);
            setDisableNextButton(swiper.isEnd);
          }}
          pagination
          slidesPerView={10}
          spaceBetween={8}
          className="relative flex">
          {categoryItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-fit hover:bg-[#282828]/50 active:scale-95 overflow-hidden cursor-pointer !flex items-center justify-center gap-[12px] rounded-lg bg-[#282828] px-[20px] !py-[10px] text-[14px] text-white">
              <Image src={item.scr} alt={item.alt} width={20} height={20} />
              <h5 className="text-xs capitalize lg:text-sm">{item.alt}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="h-full bg-gradient-to-l from-[#333333] z-10 end-[93px] w-[60px] absolute"></div>

        {/* Arrow Button */}
        <div
          className={`z-10 flex items-center gap-[6px] max-lg:hidden ${
            categoryItems.length < 10 ? "hidden" : ""
          }`}>
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="hidden md:block active:scale-95"
            disabled={disablePrevButton}>
            {disablePrevButton ? <LeftArrowDark /> : <LeftArrow />}
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            disabled={disableNextButton}
            className="hidden md:block active:scale-95">
            {disableNextButton ? <RIghtArrowDark /> : <RightArrow />}
          </button>
        </div>
      </div>
    </div>
  );
}
