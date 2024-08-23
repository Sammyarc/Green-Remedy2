import watchAndLearnImg from '../../assets/watchAndLearn.jpg';
import { watchAndLearn } from './data';
import PlayButton from './PlayButton';

const WatchAndLearn = () => {
  return (
    <div className='px-[6vw] mt-20 xl:px-[12vw] md:mt-[10vw] xl:mt-[2vw] mx-auto bg-darkGreen text-productBg py-20'>
      <header className=''>
        <h1 className='font-bold text-3xl text-center font-Lora mb-6'>
          Watch and Learn
        </h1>
        <p className='mx-auto text-center  font-OpenSans text-white/70 mb-16'>
          Watch our expert-led videos to get practical <br />
          tips and advice on natural health topics.
        </p>
      </header>

      <aside className='rounded-2xl md:rounded-[3rem] bg-productBg mb-6'>
        <div className='h-[18rem] md:h-[34rem] relative rounded-t-2xl md:rounded-t-[3rem]'>
          <article className='absolute h-full w-full'>
            <img
              src={watchAndLearnImg}
              alt='Woman cooking'
              className='w-full h-full rounded-t-2xl md:rounded-t-[3rem]'
            />
          </article>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
            <PlayButton addClass='w-16 h-10 md:w-20 md:h-12 text-2xl md:w-36 md:h-20 md:text-4xl' />
          </div>
        </div>
        <article className='h-24 text-black flex items-center justify-center'>
          <h1 className='text-xl font-bold font-Lora px-6 md:px-0 text-center md:text-start'>
            Cooking with herbs: Delicious and Healthy Recipes
          </h1>
        </article>
      </aside>

      <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-3 md:gap-6 lg:gap-5'>
        {watchAndLearn.map((item, i) => {
          return (
            <aside key={i} className='rounded-lg bg-[#383838]'>
              <div className='h-[10rem] relative rounded-lg cursor-pointer'>
                <article className='absolute h-full w-full'>
                  <img
                    src={item.img}
                    alt='Woman cooking'
                    className='w-full h-full rounded-t-lg'
                  />
                </article>

                <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
                  <PlayButton addClass='w-14 h-8 xl:w-20 xl:h-9 text-lg xl:text-2xl rounded-sm' />
                </div>
              </div>
              <article className='flex flex-col items-center justify-center py-3'>
                <h1 className='font-medium text-xl font-Lora'>{item.title}</h1>
                <section className='flex items-center justify-between gap-5 font-OpenSans md:text-xs mt-2 text-white/70'>
                  <p>{item.views} views</p>
                  <span className='h-2 w-2 rounded-full bg-productBg'></span>
                  <p>{item.duration}</p>
                </section>
              </article>
            </aside>
          );
        })}
      </section>
    </div>
  );
};
export default WatchAndLearn;
