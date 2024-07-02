import React, { useState } from 'react';
import Logo from '../../Components/Assets/Logo_icon.png.JPG'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting forgot password request for email:', email);
  };

  return (
    <div className='bg-teal-600 h-screen flex justify-center items-center'>
      <div className='bg-white p-3 rounded w-[450px]'>
      <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Reset Password
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Remember your password?
              <a href="/signin" className="ml-1 font-semibold leading-6 text-yellow-400 hover:text-yellow-400">Sign in here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
