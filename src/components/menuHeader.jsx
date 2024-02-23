import Link from "next/link";
import Image from "next/image";
import Facebook from "../../public/svgs/facebook";
import Tiktok from "../../public/svgs/tiktok";
import Youtube from "../../public/svgs/youtube";

export default function MenuHeader({ onClick, isOpen }) {
  const kategori = [
    { img: "/icons/semua.png", title: "Semua" },
    { img: "/icons/properti.png", title: "Properti" },
    { img: "/icons/mobil.png", title: "Mobil" },
    { img: "/icons/motor.png", title: "Motor" },
    { img: "/icons/gadget.png", title: "Gadget" },
    { img: "/icons/elektronik.png", title: "Elektronik" },
    { img: "/icons/olahraga.png", title: "Olahraga" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
    { img: "/icons/pawprint.png", title: "Peliharaan" },
  ];

  return (
    <section
      className={
        isOpen
          ? "Quicksand !transition-all container !duration-500 start-0 fixed px-[20px] top-0 py-[12px] backdrop-blur-sm bg-[#333333]/80 z-10"
          : "Quicksand !transition-all container !duration-500 start-0 fixed px-[20px] -top-[1200px] py-[12px] backdrop-blur-sm bg-[#333333]/80 z-10"
      }>
      {/* header */}
      <div className="flex justify-between">
        <Link
          href="/"
          className="flex items-center w-[144.2px] h-[28px] text-white">
          <div className="">
            <Image
              className=""
              src="/images/logo-putih.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </Link>
        <button onClick={onClick} className="active:scale-75 end-0 top-0">
          <Image src={"/icons/close.png"} width={18} height={18} />
        </button>
      </div>

      {/* foto profil */}
      <div className="w-full h-[75px] mt-[20px] flex items-center px-[20px] gap-[13px] rounded-[8px] bg-[#333333]/80">
        <Image src={"/icons/profile-bulat.png"} width={50} height={50} />
        <div className="flex flex-col justify-center">
          <h1 className="text-[14px] leading-[17.5px] text-[#AAAAAA]">Halo,</h1>
          <h1 className="text-[16px] leading-[20px] text-[#E6BD40]">
            Ayo login ke akunmu
          </h1>
        </div>
      </div>

      <div className="overflow-auto h-screen">
        {/* menu kategori */}
        <div className="w-full border-b-2 border-[#333333] pb-[30px] flex flex-wrap gap-x-2 gap-y-[20px] justify-center mt-[30px]">
          {kategori.map((item, index) => (
            <button
              key={index}
              className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
              <div className="grid items-center justify-center bg-[#333333] hover:bg-[#333333]/50 active:scale-90 rounded-full w-[44px] h-[44px]">
                <Image src={item.img} width={24} height={24} />
              </div>
              <p className="text-[10px] font-[600]">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="text-[12px] grid mt-[25px] font-[600] text-[#aaaaaa] h-auto grid-cols-2">
          <div className="grid gap-[15px] text-center">
            <button>Tentang kami</button>
            <button>Syarat & Ketentuan</button>
          </div>
          <div className="grid gap-[15px] text-center">
            <button>Pusat bantuan</button>
            <button>Kebijakan Privasi</button>
          </div>
        </div>

        <div className="mt-[24px] justify-center flex gap-[11px]">
          <Image
            className="active:scale-90 cursor-pointer"
            src={"/icons/playstore-grey.png"}
            width={137}
            height={48}
          />
          <Image
            className="active:scale-90 cursor-pointer"
            src={"/icons/playstore-grey.png"}
            width={137}
            height={48}
          />
        </div>

        <div className="flex mt-[21px] justify-center gap-[18px]">
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

        {/* footer */}
        <footer className="flex items-center w-full pb-[160px] pt-[10px] border-[#333333] border-t-2 mt-[22px]">
          <h1 className="flex gap-[5px] justify-center w-full font-[600] text-[10px] text-[#aaaaaa]">
            Copyright © 2023{""}
            <Link href={"/"} className="font-[500] text-[10px] text-[#d7a901]">
              autodeal
            </Link>
          </h1>
        </footer>
      </div>
    </section>
  );
}
