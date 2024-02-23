import Link from "next/link";
import Home from "../../../../public/svgs/home";

export default function EndpointEdit() {
  return (
    <div className="flex max-w-[1280px] my-[15px] mx-auto items-center gap-[6px]">
      <Link href={"/"}>
        <Home />
      </Link>
      <p className="text-[#aaaaaa]">/</p>
      <Link href={"/profile"} className="font-[500] text-[12px] text-[#333333]">
        Profil Penjual
      </Link>
      <p className="text-[#aaaaaa]">/</p>
      <Link href={"/profile"} className="font-[500] text-[12px] text-[#333333]">
        ID 12345
      </Link>
      <p className="text-[#aaaaaa]">/</p>
      <h1 className="font-[500] text-[12px] text-[#aaaaaa]">Edit Profil</h1>
    </div>
  );
}
