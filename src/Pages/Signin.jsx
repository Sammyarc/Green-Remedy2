// // eslint-disable-next-line no-unused-vars

// import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';
// import useFormHook from '../hooks/useFormHook';
// import Navbar from '../components/Navbar/Navbar';
// import Newsletter from '../components/Newsletter/Newsletter';
// import Footer from '../components/Footer/Footer';

// const initialState = {
//   email: '',
//   password: '',
//   rememberMe: false,
//   showPassword: false,
// };

// export default function Signin() {
//   const [formData, handleChange, toggleVisibility, resetForm] =
//     useFormHook(initialState);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Login attempt', formData);
//     resetForm();
//   };

//   return (
//     <div className='flex flex-col'>
//       <header className='border-b'>
//         <Navbar />
//       </header>

//       <main className='flex-grow flex flex-col items-center justify-center my-20'>
//         <h3 className='font-Lora font-bold text-[8vw] md:text-[3vw] text-lightTextColor text-center'>
//           Log In
//         </h3>

//         <form onSubmit={handleLogin}>
//           <div className='flex flex-col justify-center text-center gap-3 mt-5'>
//             <input
//               placeholder='Email'
//               type='email'
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className='w-full px-3 py-2 border border-lightTextColor rounded-full font-OpenSans focus:outline-none focus:ring-2 focus:ring-lightTextColor
//               xs:w-[290px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px]'
//             />

//             {/* password */}
//             <div className='relative'>
//               <input
//                 placeholder='Password'
//                 type={formData.showPassword ? 'text' : 'password'}
//                 name='password'
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 autoComplete='off'
//                 autoCorrect='off'
//                 className='w-full px-3 py-2 border border-lightTextColor rounded-full font-OpenSans focus:outline-none focus:ring-2 focus:ring-lightTextColor
//                 xs:w-[280px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px] pr-10'
//               />
//               <button
//                 className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
//                 onClick={() => toggleVisibility('showPassword')}
//                 type='button'
//               >
//                 {formData.showPassword ? (
//                   <HiOutlineEyeSlash />
//                 ) : (
//                   <HiOutlineEye />
//                 )}
//               </button>
//             </div>

//             {/* Remember me */}
//             <div className='flex items-center justify-between'>
//               <div className='flex'>
//                 <input
//                   type='checkbox'
//                   id='rememberMe'
//                   name='rememberMe'
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className='h-4 w-4 text-lightTextColor focus:ring-lightTextColor border-lightTextColor rounded accent-darkGreen'
//                 />
//                 <label
//                   htmlFor='rememberMe'
//                   className='ml-2 block text-sm font-OpenSans text-lightTextColor'
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <div>
//                 <p className='text-lightTextColor font-OpenSans'>
//                   forgot password
//                 </p>
//               </div>
//             </div>

//             <button
//               type='submit'
//               className='w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-darkGreen hover:bg-darkerGreen font-OpenSans focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
//             >
//               Log In
//             </button>
//           </div>
//         </form>
//         <p className='mt-4 text-center text-base text-gray-600 font-OpenSans'>
//           Don&apos;t have an account?
//           <Link
//             to='/signup'
//             className='font-medium text-darkGreen hover:text-darkerGreen'
//           >
//             Register
//           </Link>
//         </p>

//         {/* newsletter */}
//         <Newsletter />
//       </main>

//       <footer>
//         <Footer />
//       </footer>

//       <style>{`
//         /* Hide the default show password icon in Edge/IE */
//         input[type="password"]::-ms-reveal,
//         input[type="password"]::-ms-clear {
//           display: none;
//         }

//         /* Hide the default show password icon in Chrome/Safari */
//         input[type="password"]::-webkit-textfield-decoration-container {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// import React from "react";
// import { SignIn } from "@clerk/clerk-react";

// const SignInPage = () => {
//   return (
//     <div>
//       <SignIn path="/signin" routing="path" />
//     </div>
//   );
// };

// export default SignInPage;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

// import { useAuth } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";

const Signin = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  // const { isSignedIn } = useAuth();

  // React.useEffect(() => {
  //   if (isSignedIn) {
  //     const from = location.state?.from?.pathname || "/";
  //     navigate(from, { replace: true });
  //   }
  // }, [isSignedIn, navigate, location]);

  return (
    <div>
      <header className="border-b">
        <Navbar />
      </header>
      <main>
        <section className="flex flex-col justify-center items-center my-[5vw]">
          <SignIn
            path="/signin"
            routing="path"
            signUpUrl="/signup"
            fallbackRedirectUrl={location.state?.from?.pathname || "/"}
          />
        </section>
        <section>
          <Newsletter />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Signin;
