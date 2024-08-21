// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import useFormHook from '../hooks/useFormHook';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  newsletterEmail: '',
  showPassword: false,
  showConfirmPassword: false,
};

export default function Signup() {
  const [formData, handleChange, toggleVisibility, resetForm] =
    useFormHook(initialState);
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;

    if (name === 'confirmPassword') {
      // Check if confirmPassword matches the corresponding part of password
      if (formData.password.startsWith(value)) {
        setPasswordError(''); // Clear error if it matches
      } else {
        setPasswordError('Passwords do not match');
      }
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    console.log('Account created', formData);
    resetForm();
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='border-b'></header>

      <main className='flex-grow flex flex-col items-center justify-center my-6'>
        <h3 className='font-Lora font-bold text-[8vw] md:text-[3vw] text-lightTextColor text-center'>
          Create Account
        </h3>

        <form onSubmit={handleCreateAccount}>
          <div className='flex flex-col justify-center text-center gap-3 mt-5'>
            <input
              placeholder='Email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border border-lightTextColor rounded-full focus:outline-none font-OpenSans focus:ring-2 focus:ring-lightTextColor 
              xs:w-[290px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px]'
            />

            {/* password */}
            <div className='relative'>
              <input
                placeholder='Password'
                type={formData.showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete='off'
                autoCorrect='off'
                className='w-full px-3 py-2 border border-lightTextColor rounded-full focus:outline-none font-OpenSans focus:ring-2 focus:ring-lightTextColor 
                xs:w-[280px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px] pr-10'
              />
              <button
                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                onClick={() => toggleVisibility('showPassword')}
                type='button'
              >
                {formData.showPassword ? (
                  <HiOutlineEyeSlash />
                ) : (
                  <HiOutlineEye />
                )}
              </button>
            </div>

            {/* confirm password */}
            <div className='relative'>
              <input
                placeholder='Confirm Password'
                type={formData.showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handlePasswordChange}
                required
                autoComplete='off'
                autoCorrect='off'
                className='w-full px-3 py-2 border border-lightTextColor rounded-full focus:outline-none font-OpenSans focus:ring-2 focus:ring-lightTextColor 
                xs:w-[280px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px] pr-10'
              />
              <button
                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                onClick={() => toggleVisibility('showConfirmPassword')}
                type='button'
                disabled={passwordError}
              >
                {formData.showConfirmPassword ? (
                  <HiOutlineEyeSlash />
                ) : (
                  <HiOutlineEye />
                )}
              </button>
            </div>
            {/* Display password error */}
            {passwordError && (
              <p className='text-red-500 text-sm'>{passwordError}</p>
            )}

            {/* accept terms and conditions */}
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='acceptTerms'
                name='acceptTerms'
                checked={formData.acceptTerms}
                onChange={handleChange}
                className='h-4 w-4 text-lightTextColor focus:ring-lightTextColor border-lightTextColor rounded accent-darkGreen'
              />
              <label
                htmlFor='acceptTerms'
                className='ml-2 block text-sm text-lightTextColor font-OpenSans'
              >
                Accept all terms & Conditions
              </label>
            </div>

            <button
              type='submit'
              className='w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-darkGreen hover:bg-darkerGreen focus:outline-none font-OpenSans focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              Create Account
            </button>
          </div>
        </form>
        <p className='mt-4 text-center text-base text-gray-600 font-OpenSans'>
          Already have an account?
          <Link
            to='/signin'
            className='font-medium text-darkGreen hover:text-darkerGreen'
          >
            Login
          </Link>
        </p>

        {/* news letter */}
      </main>

      <style>{`
        /* Hide the default show password icon in Edge/IE */
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear {
          display: none;
        }

        /* Hide the default show password icon in Chrome/Safari */
        input[type="password"]::-webkit-textfield-decoration-container {
          display: none;
        }
      `}</style>
    </div>
  );
}
