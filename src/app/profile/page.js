import ContentProfil from "./contentProfil";
import SideBarProfil from "./sideBarProfil";
import data from "@/app/profile/cars.json";

export default async function Page() {
  const products = await data;

  return (
    <div className="relative mt-[88px] md:mt-[150px] lg:mt-[192px] mb-[103px] px-[20px] lg:px-0 lg:gap-[20px] lg:flex lg:mx-auto grid gap-[10px] lg:max-w-[1280px]">
      <SideBarProfil />
      <ContentProfil api={products} />
    </div>
  );
}
