// import { MoveRight } from "lucide-react";
import Link from "next/link"

export default function Hero() {
    return(

        <div className="flex flex-row justify-between items-center px-36 min-h-screen">

        <div className="flex flex-col pt-48 gap-16 items-start  light-rays">

        {/* <div className="bg-neutral-200 px-7 py-3 rounded-full gap-6 items-center flex flex-row shadow-[1px_4px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_4px_13px_rgba(255,255,255,0.9)]">
            Dish Name <MoveRight className="inline"/> Recipe step by step <MoveRight className="inline"/> Freshly Cooked
        </div> */}


        <div>           
        <div className="text-7xl dark:text-zinc-100 uppercase text-zinc-800 font-primary font-bold leading-snug tracking-tight text-left">
            discover delicious recipes with just one click!
        </div>
        
        <div className=" text-lg text-left font-secondary tracking-tight text-zinc-600 ">
            learn to cook step by step with the use of your our AI recipe generator, <br />just write the name of dish and let recipe lab get all the ingredients you will need to make it <br /> and all the steps to help you reach your final dish. 
        </div>
        </div> 

        <div className="flex flex-row gap-8">
        <Link 
        href="/recipe"
        className="bg-primary text-zinc-50 font-primary border backdrop-blur-xl border-stone-100 dark:border-stone-600 text-xl px-8 py-3 rounded-2xl shadow-[0px_4px_2px_rgba(255,0,72,0.5)] dark:shadow-[0px_4px_2px_rgba(255,0,72,0.5)] hover:shadow-[0px_0px_0px_rgba(255,0,72,0.5)] relative hover:top-1 transition-all duration-50 ">
           Try for Free
        </Link>
        <div className="border-2 border-stone-500 text-zinc-800  dark:text-zinc-100 font-primary backdrop-blur-xl text-xl px-8 py-3 rounded-2xl dark:shadow-[0px_4px_2px_rgba(255,255,255,0.2)] shadow-[0px_4px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_rgba(255,255,255,0.5)] relative hover:top-1 transition-all duration-50">
            Get Started
        </div>

        </div>
        </div>

        <div>
            {/* <video 
            src="/hero.mp4"
            autoPlay
            loop
            className="rounded-3xl w-200"
            /> */}
        </div>

        </div>
    )
}