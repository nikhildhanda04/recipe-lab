import {  } from 'lucide-react'
export default function Login(){
    return(
        <>
        <div className="flex flex-row gap-12 justify-between max-h-screen items-center w-full px-44 py-44">

            <div className="flex flex-col gap-6 w-full">
            <div className="font-primary font-bold text-5xl ">
                Fast, Effiecient and Delicious
            </div>
            <div className="font-secondary text-lg text-zinc-600">
                Start you sweet and spicy culinary journey today with us. 
            </div>
            </div>

            <form className="flex flex-col  gap-6 rounded-2xl shadow-[2px_2px_3px_5px_rgba(0,0,0,0.1)] backdrop-blur-2xl w-full text-left items-start py-24 px-12 bg-white">

                <div className="flex flex-col gap-2">
                    <div className="font-primary text-3xl font-bold ">
                        Log In
                    </div>
                    <div className='font-primary '> 
                        New User? <span className='text-blue-700 hover:underline'>Create Account</span>
                    </div>
                    {/* <div className="text-lg font-secondary text-zinc-600">
                        Welcome Back! 
                    </div> */}
                </div>

                <div className="w-full">
                    <div className='font-primary font-medium mb-1 ml-2'>
                        Email
                    </div>
                    <input
                    placeholder=""
                    className="px-9 py-4 w-full font-secondary text-zinc-700  bg-white border-2 border-stone-400 rounded-xl "
                    />
                </div>

                <div className='w-full'>
                    <div className='font-primary font-medium mb-1 ml-2'>
                        Password
                    </div>
                    <input 
                    placeholder=""
                    className="px-9 py-4 w-full font-secondary text-zinc-700  bg-white border-2 border-stone-400 rounded-xl"
                    />
                </div>

                <div className="text-xl w-full font-primary font-bold text-center item-center"> 
                    OR
                </div>

                <div className='px-9 py-4 font-primary w-full font-medium bg-white border-2 border-stone-400 rounded-xl'>
                  Sign Up with Google
                </div>

                <div className='px-9 py-3 bg-primary text-white font-primary font-bold rounded-2xl hover:shadow-[0px_4px_2px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_0px(0,0,0,0.0)] hover:-top-1 relative active:top-1 transition-all duration-50 w-full text-center'>
                    Sign Up
                </div>

                

            </form>


        </div>
        </>
    )
}