import { FaArrowRight } from 'react-icons/fa6';
import { articles } from './data';

const Articles = () => {
  return (
    <div className='flex flex-col gap-10 mt-20 mb-10 font-Lora px-[6vw] md:px-[5vw] md:pt-[5vw] md:pb-[10vw]'>
      <header className='font-bold text-3xl text-center w-full text-textColor mb-8'>
        Explore Our Recent Article
      </header>
      <aside className='flex flex-col gap-24 md:gap-36'>
        {articles.map((article) => {
          return (
            <div
              key={article.title}
              className='flex flex-col md:flex-row md:items-center gap-5 md:gap-16 md:even:flex-row-reverse '
            >
              <div className='w-full md:w-[58%] xl:mr-10'>
                <img src={article.img} alt='Image' className='rounded-xl' />
              </div>
              <section className='w-full md:w-[42%]'>
                <h2 className='font-bold text-2xl text-textColor mb-5 mt-5 sm:mt-0  lg:w-2/3'>
                  {article.title}
                </h2>
                <p className='text-textColor mb-5 lg:mr-24'>{article.desc}</p>
                <button className='flex items-center justify-center gap-4 text-white bg-darkGreen rounded-md px-11 py-3 mt-3 group hover:bg-darkerGreen transition-all'>
                  <h1 className='text-white'>Read More</h1>
                  <FaArrowRight className='text-sm group-hover:translate-x-2 transition-all' />
                </button>
              </section>
            </div>
          );
        })}
      </aside>
    </div>
  );
};
export default Articles;
