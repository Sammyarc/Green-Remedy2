import { faqs } from './data';
import Accordion from './Accordion';

const Faqs = () => {
  return (
    <div className='px-[6vw] lg:px-[5vw] xl:px-[12vw] md:mt-[2vw] mx-auto text-productBg py-32 lg:pb-0'>
      <header className='text-lightTextColor'>
        <h1 className='font-bold text-3xl text-center font-Lora mb-6'>
          Frequently asked questions
        </h1>
        <p className='mx-auto text-center  font-OpenSans mb-16'>
          Stay up to date with our recent blog posts, featuring insightful
          articles <br className='hidden md:block' />
          on health, wellness, and natural remedies for your daily life.
        </p>
      </header>

      <section className='w-full md:w-2/3 mx-auto flex flex-col gap-3'>
        {faqs.map((faq, i) => {
          return <Accordion key={i} {...faq} />;
        })}
      </section>
    </div>
  );
};
export default Faqs;
