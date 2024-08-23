import { FaArrowRight } from 'react-icons/fa6';
import { herbalRemedies } from './data';

const HerbalRemedies = () => {
  return (
    <div className='flex flex-col gap-10 mt-36 py-20 bg-lightGreen px-[6vw] lg:px-0'>
      <header className='font-Lora font-bold text-3xl text-center w-full text-lightTextColor'>
        Herbal Remedies
      </header>
      <div className='grid md:grid-cols-2 lg:w-4/5 xl:w-3/5 mx-auto gap-10 md:gap-6 xl:gap-10'>
        {herbalRemedies.map((item) => {
          return (
            <div
              key={item.title}
              className='flex flex-col justify-between gap-4 bg-white rounded-xl'
            >
              <div className='w-full'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='rounded-t-xl w-full'
                />
              </div>
              <section className='flex flex-col gap-4 px-6'>
                <h2 className='font-bold text-xl text-textColor font-Lora'>
                  {item.title}
                </h2>
                <p className='font-OpenSans text-textColor'>{item.desc}</p>
                <h3 className='text-textColor font-bold text-lg'>Benefit:</h3>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-center'>
                  {item.benefits.map((benefit) => {
                    return (
                      <span
                        key={benefit}
                        className='border border-textColor rounded-lg text-textColor text-sm px-6 py-1 text-center'
                      >
                        {benefit}
                      </span>
                    );
                  })}
                </div>
              </section>

              <button className='flex items-center justify-center gap-3 text-white bg-darkGreen rounded-md py-3 mt-3 group hover:bg-darkerGreen transition-all'>
                <h1 className='text-white'>Learn More</h1>
                <FaArrowRight className='text-sm group-hover:translate-x-2 transition-all' />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HerbalRemedies;
