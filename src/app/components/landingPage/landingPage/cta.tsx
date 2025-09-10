export default function Cta() {
    return(
        <>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between w-full md:py-24 px-6 md:px-36">

            <div className="flex flex-col gap-4">

                <div className="font-primary font-bold text-4xl text-zinc-800 dark:text-zinc-300">
                    Unleash Your Culinary Creativity
                </div>
                <div className="font-secondary text-zinc-600 dark:text-zinc-500 text-base">
                    Discover delicious recipes with just one click! 
                </div>

            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="bg-primary text-zinc-50 font-primary border backdrop-blur-xl border-stone-100 dark:border-stone-600 text-sm md:text-xl px-8 py-3 rounded-2xl shadow-[0px_4px_2px_rgba(255,0,72,0.5)] dark:shadow-[0px_4px_2px_rgba(255,0,72,0.5)] hover:shadow-[0px_0px_0px_rgba(255,0,72,0.5)] relative hover:top-1 transition-all duration-50 ">
           Try for Free
        </div>
        <div className="border-2 border-stone-500 text-zinc-800  dark:text-zinc-100 font-primary backdrop-blur-xl text-sm md:text-xl px-8 py-3 rounded-2xl dark:shadow-[0px_4px_2px_rgba(255,255,255,0.2)] shadow-[0px_4px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_rgba(255,255,255,0.5)] relative hover:top-1 transition-all duration-50">
            Get Started
        </div>

        </div>

        </div>
        </>
    )
}