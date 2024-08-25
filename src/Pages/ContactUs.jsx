// eslint-disable-next-line no-unused-vars
import React from "react";
// icons from assests
import location from "../assets/Icons/location-icon.svg";
import phone from "../assets/Icons/phone-icon.svg";
import mail from "../assets/Icons/mail-icon.svg";
import instagram from "../assets/Icons/instagram-green-icon.svg";
import facebook from "../assets/Icons/facebook-green-icon.svg";
import twitter from "../assets/Icons/twitter-green-icon.svg";
import useFormHook from "../hooks/useFormHook";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import BgImage from '../assets/aboutHero.png';

const initialState = {
  name: "",
  email: "",
  message: "",
};

const ContactUs = () => {
  const [formData, handleChange, resetForm] = useFormHook(initialState);

  const handleContact = (e) => {
    e.preventDefault();
    console.log("contact details", formData);
    resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="flex flex-col justify-center text-center h-[50vw] md:h-[30vw]" style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
          <p className="text-white text-lg font-Lora">We&apos;d love to help!</p>
          <p className="text-white text-[8vw] md:text-6xl font-Lora font-bold">
            Get in touch with us
          </p>
        </section>
        <section className="flex xs:flex-col md:flex-row gap-5 justify-around py-20">
          <div className="flex justify-center border-2 border-darkGreen h-auto py-[10vw] md:py-[0vw] md:w-[397px] md:h-[700px] rounded-lg bg-productBg text-lightTextColor">
            <div className="md:w-[269px] flex flex-col items-center md:gap-12 md:pt-10">
              <div>
                <h1 className="font-Lora md:text-4xl text-[8vw] font-bold ">
                  Contact Details
                </h1>
              </div>

              <div className="text-lg flex flex-col gap-1 md:gap-5">
                <p className="flex gap-3 items-center ">
                  <span>
                    <img
                      src={location}
                      alt="location-icon"
                      height={24}
                      width={24}
                    />
                  </span>
                  Fellakumi estate ikeja lagos, Nigeria
                </p>
                <p className="flex gap-3 items-center ">
                  <span>
                    <img
                      src={phone}
                      alt="location-icon"
                      height={24}
                      width={24}
                    />
                  </span>
                  <span className="flex  flex-col">
                    <span>08156558752</span>
                    <span>08156558752</span>
                  </span>
                </p>
                <p className="flex gap-3 items-center ">
                  <span>
                    <img
                      src={mail}
                      alt="location-icon"
                      height={24}
                      width={24}
                    />
                  </span>
                  Info@greenremedies.com
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <h1 className="font-Lora md:text-4xl text-[6vw] font-bold flex justify-center items-center">
                  Stay Connected
                </h1>
                <div className="flex gap-1 mt-4 md:mt-10 text-center">
                  <img
                    src={instagram}
                    alt="instagram-icon"
                    width={48}
                    height={48}
                  />
                  <img
                    src={facebook}
                    alt="facebook-icon"
                    width={48}
                    height={48}
                  />
                  <img
                    src={twitter}
                    alt="twitter-icon"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center border border-darkGreen md:w-[693px] md:h-[700px] rounded-lg bg-darkGreen text-white">
            <div className="md:w-[472px] flex flex-col md:pt-10">
              <div className="flex flex-col md:gap-5 p-5">
                <h1 className="font-Lora md:text-4xl text-[6vw] font-bold ">
                  Fill in the details
                </h1>
                <p>
                  Have a question or want to connect, Please share your
                  information below and we’ll reach out as soon as possible.
                </p>
              </div>

              <form className="p-5 mt-5" onSubmit={handleContact}>
                <div className="flex flex-col gap-5">
                  {/* name */}
                  <div className="flex flex-col">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-milkWhite border border-white rounded-full text-textColor text-sm p-2 focus:outline
                "
                      placeholder="Enter name"
                    />
                  </div>

                  {/* email */}
                  <div className="flex flex-col">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-milkWhite border border-white rounded-full text-textColor text-sm p-2 focus:outline
                "
                      placeholder="Enter email"
                    />
                  </div>

                  {/* message */}
                  <div className="flex flex-col">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-milkWhite border border-white rounded-2xl text-textColor text-sm p-2 focus:outline resize-none"
                      placeholder="Enter message here..."
                      rows="8"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white rounded-full text-darkerGreen font-bold p-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
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

export default ContactUs;
