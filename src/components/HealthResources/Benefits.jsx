import { benefits } from "./data";

const Benefits = () => {
  return (
    <div className='flex flex-col gap-10 mt-10 px-[6vw] lg:mt-16'>
      <header className='font-Lora font-bold text-3xl text-center w-full text-lightTextColor'>
        Benefits of Green Remedies
      </header>
      <div className='grid w-full lg:w-4/5 xl:w-3/5 mx-auto gap-3 sm:grid-cols-2 md:grid-cols-3'>
        {benefits.map((benfit) => {
          return (
            <p
              key={benfit}

              className='py-6 rounded-md bg-darkGreen text-white text-center w-full '
            >
              {benfit}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Benefits;
