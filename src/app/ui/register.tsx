'use client'

import { useState } from 'react'

export default function RegisterForm() {
    const [userData, setUserData] = useState(
        {
            fullname:"",
            email:"",
            username:"",
            password:"",
            repassword:""
        }
    )

    function handleChange(e:any) {
        // const id = e.target.id;
        setUserData(prevUserData => {
            return {
                ...prevUserData,
                [e.target.id]: e.target.value
            }
        })
        
    }
    function handleSubmit(e:any) {
        e.preventDefault();
        // console.log("HELLO");
        console.log(userData);
    }

    return (
        <div className="w-full max-w-[24rem] bg-white p-8 space-y-6 rounded-2xl shadow-2xl">
            <h2 className="text-center text-2xl font-bold"> Register </h2>
            <form className='space-y-2' onSubmit={handleSubmit}>
                <div>
                    <label className='text-sm mb-2' htmlFor='username'> Full Name </label>
                    <input className='w-full border-2 
                        rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:ring-indigo-100
                        focus:border-indigo-300                     
                        '
                        required
                        value={userData.fullname}
                        type="text"
                        id="fullname"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-sm mb-2' htmlFor='email'> Email </label>
                    <input className='w-full border-2 
                        rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:ring-indigo-100
                        focus:border-indigo-300                     
                        '
                        required
                        value={userData.email}
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-sm mb-2' htmlFor='username'> UserName </label>
                    <input className='w-full border-2 
                        rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:ring-indigo-100
                        focus:border-indigo-300                     
                        '
                        required
                        value={userData.username}
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-sm mb-2' htmlFor='password'> Create Password </label>
                    <input className='w-full border-2 
                        rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:ring-indigo-100
                        focus:border-indigo-300                     
                        '
                        required
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-sm mb-2' htmlFor='repassword'> Retype Password </label>
                    <input className='w-full border-2 
                        rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:ring-indigo-100
                        focus:border-indigo-300                     
                        '
                        required
                        type="text"
                        id="repassword"
                        value={userData.repassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='text-center w-full 
                    px-4 py-2 rounded-lg text-white
                    bg-indigo-500 hover:bg-indigo-600
                    focus:outline-none
                    '
                    >
                    Submit
                </button>
                <p className='text-xs underline text-center text-u' > <a href='/login'> Login Instead? </a></p>
            </form>
        </div>
    );
}