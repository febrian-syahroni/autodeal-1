import HeaderProfil from "./headerProfil";
import ContentProfil from "./contentProfil";
import SideBarProfil from "./sideBarProfil";
import FooterProfil from "./footerProfil";
import Endpoint from "./endpoint";
import data from "@/app/profile/cars.json";

import Category from "@/components/Category";

export default async function Page() {
  const products = await data;

  return (
    <div className="overflow-x-hidden background bg-[#F4F5F7]">
      <div className="fixed shadow-sm flex-col z-10">
        <HeaderProfil className="z-10" />
        <Category />
        <Endpoint className="bg-[#F4F5F7]" />
      </div>
      <div className="mt-[88px] md:mt-[150px] lg:mt-[192px] mb-[103px] px-[20px] lg:px-0 lg:gap-[20px] lg:flex lg:mx-auto grid gap-[10px] lg:max-w-[1280px]">
        <SideBarProfil />
        <ContentProfil api={products} />
      </div>
      <FooterProfil />
    </div>
  );
}
