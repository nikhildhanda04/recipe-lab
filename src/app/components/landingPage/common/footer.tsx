export default function Footer(){
    return(
        <>
        <div className="flex flex-col w-full px-36 py-8 border-t-2 border-stone-500 tracking-tight">

            <div className="flex flex-row py-12 border-b-2 border-stone-500 justify-between">

                <div className="flex flex-col gap-5">

                    <div className="font-logo text-6xl">
                        Recipe Lab-
                    </div>
                    <div className="font-secondary text-zinc-600">
                        want to drop a review?
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <input 
                        placeholder="send a message" 
                        className="px-7 py-3 rounded-xl border-2 border-stone-600 shadow-[0px_4px_2px_rgba(0,0,0,0.2)] dark:bg-neutral-700"
                        />
                        <div className="font-primary border-2 border-stone-600 px-5 py-3 rounded-2xl shadow-[0px_5px_3px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] relative hover:top-1 tranition-all duration-50">
                            Send
                        </div>
                    </div>

                </div>

                <div className="flex flex-row gap-12">

                    <div className="flex flex-col gap-3">

                        <div className="font-primary text-2xl font-bold text-primary ">
                            Navigate
                        </div>
                        <div className="font-primary text-lg text-zinc-800 hover:underline transition-all duration-200">
                            Home
                        </div>
                        <div className="font-primary text-lg text-zinc-800 hover:underline transition-all duration-200">
                            Features
                        </div>

                    </div>

                    <div className="flex flex-col gap-3">

                        <div className="font-primary text-2xl font-bold text-primary ">
                            Contact Me
                        </div>
                        <div className="font-primary text-lg text-zinc-800 hover:underline transition-all duration-200">
                            nikhildhanda84@gmail.com
                        </div>
                        <div className="font-primary text-lg text-zinc-800 hover:underline transition-all duration-200">
                            nikhildhanda2022@vitbhopal.ac.in
                        </div>

                    </div>

                </div>

            </div>
            
            <div className="pt-4 text-center font-secondary text-base text-zinc-400 dark:text-zinc-600">
                @2025 Recipelab. All Rights Reserved.
            </div>

        </div>
        </>
    )
}