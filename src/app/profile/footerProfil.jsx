import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/svgs/facebook";
import Tiktok from "../../../public/svgs/tiktok";
import Youtube from "../../../public/svgs/youtube";

export default function FooterProfil() {
  return (
    <section className="hidden z-40 lg:sticky lg:flex bottom-0 lg:flex-col bg-white w-full h-[122px]">
      <div className="w-[1280px] h-[122px] mx-auto">
        <div className="flex h-full justify-between items-center">
          <div className="flex flex-col gap-[10px]">
            <p className="font-[600] text-[14px] text-[#333333]">Ikuti Kami</p>
            <div className="flex justify-start gap-[18px]">
              <Link href={"/"} className="flex justify-center items-center">
                <Facebook className="" />
              </Link>
              <Link href={"/"} className="flex  justify-center items-center">
                <Image src={"/icons/Instagram.png"} width={20} height={20} />
              </Link>
              <Link href={"/"} className=" flex  justify-center items-center">
                <Youtube />
              </Link>
              <Link href={"/"} className=" flex  justify-center items-center">
                <Tiktok />
              </Link>
            </div>
          </div>
          <div className="flex ml-[80px] gap-[12px] flex-col text-center">
            <h1 className="font-[600] text-[14px] text-[#333333]">Autodeal</h1>
            <p className="flex gap-[20px] font-[500] text-[12px] text-[#aaaaaa]">
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                Tentang Kami
              </Link>
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                Pusat Bantuan
              </Link>
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                Syarat & Ketentuan
              </Link>
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                Kebijakan Privasi
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-[600] text-[14px] text-[#333333]">
              Download Aplikasi Autodeal
            </h1>
            <div className="flex gap-[6px]">
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                <Image
                  src={"/icons/playstore-grey.png"}
                  width={103}
                  height={36}
                />
              </Link>
              <Link className="hover:scale-110 active:scale-100" href={"/"}>
                <Image
                  src={"/icons/appstore-grey.png"}
                  width={103}
                  height={36}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex justify-center bg-[#f5f5f5] h-[40px]">
        <div className="flex justify-center items-center h-full w-[1280px]">
          <h1 className="flex gap-[5px] justify-center w-full font-[600] text-[12px] text-[#aaaaaa]">
            Copyright © 2023{""}
            <Link href={"/"} className="font-[500] text-[12px] text-[#d7a901]">
              autodeal
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
}
