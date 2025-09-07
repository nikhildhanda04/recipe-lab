'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'


export default function Register(){

      const [email, setEmail] = useState('');
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError('');
    
        try {
          const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username,email, password }),
          });
          // console.log({ email, password });
    
          const data = await response.json();
    
          if (response.ok) {
    
            localStorage.setItem('accessToken', data.accessToken);
            
            router.push('/');
            
          } else {
            setError(data.error || 'Register failed');
          }
        } catch (error) {
          console.error('Login error:', error);
          setError('Network error. Please try again.');
        } finally {
          setLoading(false);
        }
      };

  return (
    <>
      <div className="flex flex-row gap-12 justify-between max-h-screen items-center w-full px-44 py-44">
        <div className="flex flex-col gap-6 w-full">
          <div className="font-primary font-bold text-5xl ">
            Fast, Efficient and Delicious
          </div>
          <div className="font-secondary text-lg text-zinc-600">
            Start your sweet and spicy culinary journey today with us.
          </div>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-2xl shadow-[2px_2px_3px_5px_rgba(0,0,0,0.1)] backdrop-blur-2xl w-full text-left items-start py-24 px-12 bg-white"
        >
          <div className="flex flex-col gap-2">
            <div className="font-primary text-3xl font-bold ">
              Create Account
            </div>
            <div className='font-primary '>
              Old User? <Link href="/login" className='text-blue-700 hover:underline cursor-pointer'>Log In</Link>
            </div>
          </div>

          {error && (
            <div className="w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              {error}
            </div>
          )}
            <div className="w-full">
            <div className='font-primary font-medium mb-1 ml-2'>
              Username
            </div>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              className="px-9 py-4 w-full font-secondary text-zinc-700 bg-white border-2 border-stone-400 rounded-xl focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <div className='font-primary font-medium mb-1 ml-2'>
              Email
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-9 py-4 w-full font-secondary text-zinc-700 bg-white border-2 border-stone-400 rounded-xl focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className='w-full'>
            <div className='font-primary font-medium mb-1 ml-2'>
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="px-9 py-4 w-full font-secondary text-zinc-700 bg-white border-2 border-stone-400 rounded-xl focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="text-xl w-full font-primary font-bold text-center">
            OR
          </div>

          <button
            type="button"
            className='px-9 py-4 font-primary w-full font-medium bg-white border-2 border-stone-400 rounded-xl hover:bg-gray-50'
          >
            Sign Up with Google
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`px-9 py-3 font-primary font-bold rounded-2xl w-full text-center transition-all duration-150 ${
              loading 
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                : 'bg-primary text-white hover:shadow-[0px_4px_2px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_0px_rgba(0,0,0,0.0)] hover:-translate-y-1 active:translate-y-1'
            }`}
          >
            {loading ? 'Setting You Up...' : 'Register'}
          </button>
        </form>
      </div>
    </>
  );
}