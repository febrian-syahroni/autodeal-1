import Endpoint from "../endpoint";
import FooterProfil from "../footerProfil";
import HeaderProfil from "../headerProfil";
import ContentProfilEdit from "./contentProfilEdit";
import EndpointEdit from "./endpointEdit";
import SideBarProfilEdit from "./sideBarProfilEdit";
import Category from "@/components/Category";
export default function Page() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeaderProfil />
      <Category />
      <EndpointEdit />
      <div className="flex mb-[103px] max-w-[1280px] mx-auto">
        <SideBarProfilEdit />
        <ContentProfilEdit />
      </div>
      <FooterProfil />
    </div>
  );
}
