import { useForm } from 'react-hook-form';
import Productsfeature from '../components/Feature/Productsfeature';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import { useCart } from '../context/CartContext';

const UserInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Assuming form validation is successful, you can proceed with further actions
    console.log(data);
  };

  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar />

      <section className='flex flex-col-reverse md:flex-row md:justify-between gap-[3vw] border-t-2 border-gray-300 px-4 py-4 md:px-[5vw] md:py-[5vw]'>
        {/* Form Section */}
        <div className='md:w-2/3 border-[0.1vw] rounded-[1vw] shadow-lg bg-productBg mt-[6vw] md:mt-[0]'>
          <aside className='font-Lora text-[5vw] md:text-[1.5vw] bg-lightTextColor rounded-t-[2vw] md:rounded-t-[1vw] p-5 text-white'>
            <table className='w-full'>
              <thead className='flex justify-between items-center'>
                <tr className='w-full flex justify-between items-center px-5'>
                  <th className='text-[3.5vw] md:text-[1.2vw] font-OpenSans text-white font-normal'>
                    Personal
                  </th>
                  <th className='text-[3.5vw] md:text-[1.2vw] font-OpenSans text-white font-normal'>
                    Billing
                  </th>
                  <th className='text-[3.5vw] md:text-[1.2vw] font-OpenSans text-white font-normal'>
                    Confirmation
                  </th>
                </tr>
              </thead>
            </table>
          </aside>
          <form onSubmit={handleSubmit(onSubmit)} className='p-4 md:p-8'>
            <div className='grid grid-cols-2 gap-6 mb-6'>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  First Name*
                </label>
                <input
                  type='text'
                  {...register('firstName', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.firstName && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Last Name*
                </label>
                <input
                  type='text'
                  {...register('lastName', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.lastName && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 mb-6'>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Email Address*
                </label>
                <input
                  type='text'
                  {...register('email', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.email && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Phone Number*
                </label>
                <input
                  type='text'
                  {...register('phoneNumber', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.phoneNumber && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6'>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Street Address*
                </label>
                <input
                  type='text'
                  {...register('streetAddress', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.streetAddress && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Town / City*
                </label>
                <input
                  type='text'
                  {...register('townOrCity', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.townOrCity && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Country*
                </label>
                <input
                  type='text'
                  {...register('country', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor outline-none rounded-md'
                />{' '}
                {errors.country && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>
              <div>
                <label className='block text-lightTextColor font-OpenSans text-[3.5vw] md:text-[1.1vw]'>
                  Postcode / Zip*
                </label>
                <input
                  type='text'
                  {...register('postcodeOrZip', { required: true })}
                  className='w-full p-2 mt-1 border border-textColor rounded-md outline-none'
                />{' '}
                {errors.postcodeOrZip && (
                  <span className='text-red-500'>This field is required</span>
                )}
              </div>

              <button
                type='submit'
                className='mt-4 md:w-[20vw] bg-darkGreen text-white font-OpenSans text-[3.5vw] md:text-[1.1vw] p-3 rounded-full hover:bg-green-700'
              >
                Proceed to Next Step
              </button>
            </div>
          </form>
        </div>

        {/* Cart Details Section */}
        <div className='md:w-1/3 h-full bg-productBg shadow-lg rounded-[1vw] mt-[6vw] md:mt-[0]'>
          <h3 className='font-Lora text-[5vw] md:text-[1.5vw] mb-4 bg-lightTextColor rounded-t-[2vw] md:rounded-t-[1vw] p-4 text-white'>
            Cart Details
          </h3>
          <table className='w-full text-left mb-4 p-4'>
            <thead>
              <tr className='text-textColor border-b-[0.15vw] border-darkGreen border-dashed'>
                <th className='p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
                  PRODUCT
                </th>
                <th className='p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor text-center'>
                  QUANTITY
                </th>
                <th className='p-4 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor text-end'>
                  SUBTOTAL
                </th>
              </tr>
            </thead>
            <tbody className='border-b-[0.15vw] border-darkGreen border-dashed p-6'>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
                    {item.name}
                  </td>
                  <td className='px-4 py-3 text-center text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
                    {item.quantity}
                  </td>
                  <td className='px-4 py-3 text-end text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>{`₦${(
                    item.price * item.quantity
                  ).toLocaleString()}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-between border-b-[0.15vw] border-darkGreen border-dashed mb-4'>
            <span className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
              SUBTOTAL
            </span>
            <span className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>{`₦${calculateTotal().toLocaleString()}`}</span>
          </div>
          <div className='flex justify-between border-b-[0.12vw] border-darkGreen border-dashed mb-4'>
            <span className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
              SHIPPING
            </span>
            <span className='px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
              ₦0.00
            </span>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='font-bold px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>
              Total
            </span>
            <span className='font-bold px-4 py-3 text-[3.5vw] md:text-[1vw] font-OpenSans text-textColor'>{`₦${calculateTotal().toLocaleString()}`}</span>
          </div>
        </div>
      </section>

      <section>
        <Productsfeature />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};
export default UserInfo;
