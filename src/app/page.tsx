import Navbar from "./components/common/navbar";
import Hero from "./components/landingPage/landingPage/hero";
import Features from "./components/landingPage/landingPage/features";
import Cta from "./components/landingPage/landingPage/cta";
import Footer from "./components/common/footer";


export default function Home() {
  return (
    <>
  
   <div className="flex flex-col items-center gap-40">
     <Navbar />
     <div id="home">
       <Hero />
     </div>
     
     <div id="features">
   <Features />
     </div>
   
   <div id="">
      <Cta />
   </div>

      <Footer />
   </div>
   </>
  );
}
