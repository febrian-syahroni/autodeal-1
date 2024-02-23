import Link from "next/link";
import Camera from "../../../../public/svgs/camera";

export default function SideBarProfilEdit() {
  return (
    <section className="flex-col items-center bg-white rounded-[12px] flex w-[305px] h-full">
      <div className="flex flex-col justify-center py-[20px] px-[20px]">
        <div className="flex flex-col justify-center ">
          <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center relative rounded-full w-[120px] h-[120px] bg-gray-500 text-red-400">
              A
              <Link className="absolute end-0 bottom-0" href={"/"}>
                <Camera />
              </Link>
            </div>
          </div>
          <h1 className=" flex justify-center mt-[20px] font-[600] h-[23px] leading-[22.5px] text-[18px] text-[#333333]">
            Anonim
          </h1>
          <p className=" flex justify-center font-[400] text-[12px] text-[#AAAAAA] leading-[14.52px] h-[15px] mt-[2px]">
            Bergabung pada September 2021
          </p>
        </div>
      </div>
    </section>
  );
}
