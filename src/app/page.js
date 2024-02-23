import CardProducts from "@/components/CardProducts";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <div className="min-h-screen bg-slate-200">
      <Navbar />
      <div className="px-20">
      <HeroSection />
      <CardProducts/>

      </div>
    </div>
  )
}
