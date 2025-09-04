import { Banana, BowArrow, HardDriveDownload } from 'lucide-react'
 
export default function Features() {
    return(
        <>
        <div className="flex flex-col items-center gap-40 pb-12 px-36 traking-tight">

            <div className="flex flex-col gap-3 items-center">
            <div className="tracking-widest text-sm font-secondary text-zinc-600 dark:text-zinc-300">
                Features
            </div>

            <div className="text-4xl font-primary font-bold ">
                -Discover Delicious Recipes With Ease-
            </div>
            </div>

            <div className="flex flex-row gap-6 text-center justify-between">

                <div className="flex flex-col items-center gap-8">
                    <div>
                        <Banana className='' size="40"/>
                    </div>
                    <div className="font-primary font-medium text-2xl px-12">
                        Instant recipe generation at your fingertips.
                    </div>
                    <div className="text-center font-secondary text-zinc-500 text-lg">
                        Get immediate access to tailored recipes based on your input 
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div>
                        <BowArrow className='' size="40"/>
                    </div>
                    <div className="font-primary font-medium text-2xl px-12">
                        User-friendly interface for effortless navigation
                    </div>
                    <div className="text-center font-secondary text-zinc-500 text-lg">
                        Enjoy a semless experience and create any dish that you want anytime.
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div>
                        <HardDriveDownload className='' size="40"/>
                    </div>
                    <div className="font-primary font-medium text-2xl px-12">
                        Save and share your favorite recipe.
                    </div>
                    <div className="text-center font-secondary text-zinc-500 text-lg">
                        Easily share your recipe for any food items by just saving your prompt output.
                    </div>
                </div>
                 
            </div>

        </div>
        </>
    )
}