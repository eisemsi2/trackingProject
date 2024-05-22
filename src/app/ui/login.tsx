'use client'
import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500/70">
      <div className="w-full max-w-[24rem] p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>

          <p className='text-sm text-center'> If you do not have an account
          <a href="/register" className='block text-sm text-center p-0 underline'> Sign Up Here! </a>
           </p>
        </form>
      </div>
    </div>
  );
};
