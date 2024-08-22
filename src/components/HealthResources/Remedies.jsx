import { remedies } from './data';

const Remedies = () => {
  return (
    <div className='flex flex-col gap-10 mt-40 px-[6vw] lg:px-0'>
      <header className='font-Lora font-bold text-3xl text-center w-full text-lightTextColor'>
        Remedies for Common Health Conditions
      </header>

      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-x-10 lg:gap-y-28 w-full lg:w-3/4 text-white mx-auto'>
        {remedies.map((remedy) => {
          return (
            <div
              key={remedy.title}
              className='flex flex-col gap-4 px-10 py-12 bg-darkGreen rounded-lg'
            >
              <div>
                <img src={remedy.img} alt={remedy.title} />
              </div>
              <h2 className='font-bold text-xl'>{remedy.title}</h2>
              <p className='text-white/80'>{remedy.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Remedies;
