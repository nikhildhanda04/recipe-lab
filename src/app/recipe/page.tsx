import Navbar from "../components/landingPage/common/navbar"
// import Footer from "../components/landingPage/common/footer"

export default function Recipe(){
    return(
        <>
        <div className="flex flex-col min-h-screen w-full">
            <div>
            <Navbar />
            </div>

            <div className="flex flex-col items-center gap-16 py-36">

                <div className="flex flex-col items-center">
                <div className="font-primary items-center mx-auto font-bold tracking-tight text-center text-7xl text-zinc-800 dark:text-zinc-400">
                    Start your <span className="text-primary">cooking</span> journey <br/> that never ends. 
                </div>
                {/* <div className="text-base font-secondary text-zinc-600">
                    try one dish for free
                </div> */}
                </div>
                <div className="flex flex-row items-center gap-6">
                    <input 
                    placeholder="Enter a Dish"
                    className="px-8 text-left py-5 border-2 font-secondary font-lg  border-stone-500 rounded-xl shadow-[0px_4px_2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_0px(0,0,0,0.0)] relative hover:top-1 transition-all duration-50 active:shadow-[0px_0px_0px(0,0,0,0.2)]"
                    />
                    <div className="bg-primary p-5 rounded-xl font-primary border-2 font-bold text-light border-stone-500 hover:shadow-[0px_4px_2px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_0px(0,0,0,0.0)] hover:-top-1 relative active:top-1 transition-all duration-50">
                        Create
                    </div>
                </div>

            </div>


        </div>
        </>
    )
}