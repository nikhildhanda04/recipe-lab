import Navbar from "./components/landingPage/common/navbar";
import Hero from "./components/landingPage/landingPage/hero";
import Features from "./components/landingPage/landingPage/features";
import Cta from "./components/landingPage/landingPage/cta";
import Footer from "./components/landingPage/common/footer";


export default function Home() {
  return (
    <>
  
   <div className="flex flex-col items-center gap-40">
     <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Footer />
   </div>
   </>
  );
}
