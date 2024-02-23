import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";
import Search from "../../public/svgs/search";
import HeartOutline from "../../public/svgs/heart-outline";
import RedBall from "../../public/svgs/redBall";
import Bell from "../../public/svgs/bell";
import Map from "../../public/svgs/map";


const Navbar = () => {
  return (
    <header className="lg:flex bg-white w-screen">
      <div className="px-[20px] lg:px-0 flex lg:w-[1280px] mx-auto lg:h-[81px] h-[56px] items-center justify-between">
        <div className="">
          <Link href="/" className="grid items-center">
            <Image
              className="w-[144.2px] h-[28px]"
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
            />
          </Link>
        </div>
        <section className="hidden lg:contents">
          <form>
            <div className="flex gap-[2px]">
              <div className="form-group relative">
                <input
                  className="w-[189px] h-[44px] bg-[#F4F5F7] pl-12 rounded-l-[8px] text-sm"
                  type="text"
                  placeholder="Indonesia"
                />
                <button className="flex absolute left-4 top-0 mr-3 mt-3 text-gray-400">
                  <Map />
                </button>
              </div>
              <div className="form-group">
                <input
                  className="w-[389px] h-[44px] bg-[#F4F5F7] px-4 py-2 text-sm"
                  type="text"
                  placeholder="Cari yang kamu mau di sini..."
                />
              </div>
              <botton className="cursor-pointer w-[52px] bg-[#F4F5F7] flex justify-center items-center rounded-r-[8px]">
                <button>
                  <Search />
                </button>
              </botton>
            </div>
          </form>
        </section>

        <div className=" ">
          <button
            class="px-3 py-2.5   flex items-center gap-1 text-[14px]  rounded-xl  bg-[#FCD02F] text-black"
            type="submit"
          >
            <FaUnlockKeyhole />
            <h5>Masuk/Daftar</h5>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
