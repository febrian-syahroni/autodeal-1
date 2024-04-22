import Category from "@/components/Category";
import HeaderProfil from "./headerProfil";
import Endpoint from "./endpoint";
import FooterProfil from "./footerProfil";
import Chat from "@/components/chat";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="overflow-x-hidden background bg-[#F4F5F7]">
          <div className="fixed shadow-sm flex-col z-20">
            <HeaderProfil className="z-10" />
            <Category />
            <Endpoint className="bg-[#F4F5F7]" />
          </div>
          {children}
          <Chat />
          <FooterProfil />
        </div>
      </body>
    </html>
  );
}
