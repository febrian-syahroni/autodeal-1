import Tiktok from "../../../../public/svgs/tiktok";
import Whatsapp from "../../../../public/svgs/whatsapp";
import Youtube from "../../../../public/svgs/youtube";
import Facebook from "../../../../public/svgs/facebook";
import Instagram from "../../../../public/svgs/instagram";

import Maps from "@/components/Maps";

export default function ContentProfilEdit() {
  return (
    <div className="ml-[20px] p-[20px] bg-white w-[955px] rounded-[12px]">
      <h1 className="border-b-[1px] font-[500] text-[12px] text-[#aaaaaa]">
        EDIT PROFIL
      </h1>
      <div className="mt-[20px]">
        <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
          Nama Lengkap
        </h3>
        <input className="w-[915px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]" />
      </div>
      <div className="mt-[20px]">
        <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">Bio</h3>
        <input
          placeholder="Tulis sesuatu tentang kamu dan bisnismu..."
          className="w-[915px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
        />
      </div>
      <div className="flex gap-[20px] mt-[20px]">
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Email
          </h3>
          <input
            placeholder="contoh: email@gmail.com"
            className="w-[447px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
          />
        </div>
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Nomor handphone
          </h3>
          <div className="flex">
            <button className="flex justify-center items-center border-[1px] text-[#aaaaaa] bg-[#e5e5e5] font-[500] text-[14px] w-[61px] h-[44px] rounded-l-[8px]">
              +62
            </button>
            <input
              placeholder="contoh: 812345678"
              className="w-[387px] h-[44px] rounded-r-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
          <div className="flex gap-[10px] mt-[13px] ml-[10px] items-center">
            <input
              type="checkbox"
              className="w-[14px] h-[14px] rounded-[4px]"
            />
            <h3 className="font-[600] text-[12px] text-[#333333]">Tersedia</h3>
            <Whatsapp className="w-[18px] h-[18px]" />
            <h1 className="font-[600] text-[12px] text-[#30be2e]">Whatsapp</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] mt-[20px]">
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Facebook
          </h3>
          <div className="flex">
            <button className="flex justify-center items-center border-[1px] text-[#aaaaaa] bg-[#e5e5e5] font-[500] text-[14px] w-[61px] h-[44px] rounded-l-[8px]">
              <Facebook />
            </button>
            <input
              placeholder="contoh: 812345678"
              className="w-[387px] h-[44px] rounded-r-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Instagram
          </h3>
          <div className="flex">
            <button className="flex justify-center items-center border-[1px] text-[#aaaaaa] bg-[#e5e5e5] font-[500] text-[14px] w-[61px] h-[44px] rounded-l-[8px]">
              <Instagram />
            </button>
            <input
              placeholder="contoh: 812345678"
              className="w-[387px] h-[44px] rounded-r-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] mt-[20px]">
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Youtube
          </h3>
          <div className="flex">
            <button className="flex justify-center items-center border-[1px] text-[#aaaaaa] bg-[#e5e5e5] font-[500] text-[14px] w-[61px] h-[44px] rounded-l-[8px]">
              <Youtube />
            </button>
            <input
              placeholder="contoh: 812345678"
              className="w-[387px] h-[44px] rounded-r-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
        <div>
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Tiktok
          </h3>
          <div className="flex">
            <button className="flex justify-center items-center border-[1px] text-[#aaaaaa] bg-[#e5e5e5] font-[500] text-[14px] w-[61px] h-[44px] rounded-l-[8px]">
              <Tiktok />
            </button>
            <input
              placeholder="contoh: 812345678"
              className="w-[387px] h-[44px] rounded-r-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
      </div>
      <h1 className="border-b-[1px] font-[500] text-[12px] mt-[60px] text-[#aaaaaa]">
        LOKASI
      </h1>
      <div className="flex gap-[20px]">
        <div className="mt-[40px]">
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Provinsi
          </h3>
          <div className="flex">
            <input
              placeholder="Input Provinsi"
              className="w-[447px] h-[44px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
        <div className="mt-[40px]">
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Kabupaten/Kota
          </h3>
          <div className="flex">
            <input
              placeholder="Input Kabupaten/Kota"
              className="w-[447px] h-[44px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="mt-[40px]">
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Pilih Lokasi
          </h3>
          <div className="flex">
            <input
              placeholder="Input Kecamatan"
              className="w-[447px] h-[44px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
        <div className="mt-[40px]">
          <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
            Kode Pos
          </h3>
          <div className="flex">
            <input
              placeholder="Input Kode Pos"
              className="w-[447px] h-[44px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <h3 className="font-[500] text-[12px] text-[#aaaaaa] mb-[10px]">
          Detail Alamat
        </h3>
        <input
          placeholder="Input Alamat"
          className="w-[915px] rounded-[8px] font-[500] text-[14px] text-[#333333] border-[1px] px-[13px] py-[12px]"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-[500] text-[12px] text-[#aaaaaa] mt-[20px] mb-[10px]">
          Pilih Lokasi
        </h3>
        <div className="w-[915px] h-[200px] rounded-[8px] bg-gray-300">
          <Maps />
        </div>
      </div>
      <div className="flex gap-[8px] justify-end mt-[20px]">
        <button className="font-[500] text-[14px] text-[#333333] flex items-center justify-center w-[132px] h-[43px] rounded-[8px] py-[13px] px-[41px] bg-[#ececec]">
          Batal
        </button>
        <button className="font-[500] text-[14px] text-[#333333] flex items-center justify-center w-[132px] h-[43px] rounded-[8px] py-[13px] px-[41px] bg-[#fcd02f]">
          Simpan
        </button>
      </div>
    </div>
  );
}
