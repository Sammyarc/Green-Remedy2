import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useFormHook from "../hooks/useFormHook";
import Newsletter from "../components/Newsletter/Newsletter";

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  showPassword: false,
};

export default function Signin() {
  const [formData, handleChange, toggleVisibility, resetForm] =
    useFormHook(initialState);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt", formData);
    resetForm();
  };

  const handleSubscribe = (email) => {
    // e.preventDefault();
    console.log("Newsletter subscription submitted:", email);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center my-6">
        <h3 className="font-Lora font-bold text-[38px] text-lightTextColor text-center">
          Log In
        </h3>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col justify-center text-center gap-3">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-lightTextColor rounded-full focus:outline-none focus:ring-2 focus:ring-lightTextColor 
              xs:w-[280px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px]"
            />

            {/* password */}
            <div className="relative">
              <input
                placeholder="Password"
                type={formData.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="off"
                autoCorrect="off"
                className="w-full px-3 py-2 border border-lightTextColor rounded-full focus:outline-none focus:ring-2 focus:ring-lightTextColor 
                xs:w-[280px] sm:w-[320px] md:w-[472px] lg:w-[520px] xl:w-[600px] pr-10"
              />
              <button
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => toggleVisibility("showPassword")}
                type="button"
              >
                {formData.showPassword ? (
                  <HiOutlineEyeSlash />
                ) : (
                  <HiOutlineEye />
                )}
              </button>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-lightTextColor focus:ring-lightTextColor border-lightTextColor rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-lightTextColor"
                >
                  Remember me
                </label>
              </div>
              <div>
                <p className="text-lightTextColor">forgot password</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-darkGreen hover:bg-darkerGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-darkGreen hover:text-darkerGreen"
          >
            Register
          </Link>
        </p>

        {/* newsletter */}
        <Newsletter onSubmit={handleSubscribe} />
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>

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
