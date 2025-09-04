import {Moon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className="bg-light/[0.6] fixed dark:bg-[#1e1e1e]/[0.6] backdrop-blur-xl flex flex-row justify-between items-center w-full py-6 px-24">

            <Link
            href="/"
            className="font-logo text-4xl text-zinc-800 dark:text-zinc-300">
                Recipe Lab
            </Link>

            <div className="flex flex-row gap-6">
                <div className="font-primary text-lg hover:text-primary text-zinc-800 dark:text-zinc-300 hover:underline underline-offset-4 tranistion-all duration-300">Find</div>
                <div className="font-primary text-lg hover:text-primary text-zinc-800 dark:text-zinc-300 hover:underline underline-offset-4 tranistion-all duration-300">Explore</div>
                <div className="font-primary text-lg hover:text-primary text-zinc-800 dark:text-zinc-300 hover:underline underline-offset-4 tranistion-all duration-300">Queries</div>
            </div>


            <div className="flex flex-row items-center gap-6">
            <div className='bg-neutral-200 p-3 rounded-full'>   
            <Moon 
            color="black"
            />
            </div>

            <Link 
            href="login"
            className="bg-dark dark:bg-light text-zinc-300 font-primary dark:text-zinc-900 hover:bg-primary transition-all duration-300 shadow-[0px_4px_2px_rgba(0,0,0,0.2)] active:shadow-[0px_0px_0px_rgba(0,0,0,0.0)] relative active:top-1 hover:text-zinc-50 font-medium px-8 py-3 rounded-full">
                Register
            </Link>
            </div>
        </div>
    )
}