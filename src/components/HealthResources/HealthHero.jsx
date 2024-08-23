import HealthHeroImg from '../../assets/health-hero-img.png';

const HealthHero = () => {
  return (
    <div className='flex flex-col w-full pt-[15vw] px-[6vw]  md:px-[5vw] md:flex-row md:items-center md:pt-[5vw] md:pb-[10vw]'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-center font-Lora font-bold text-4xl leading-normal md:leading-[61.44px] text-lightTextColor mb-5 md:text-start md:text-5xl'>
          Welcome to Our Health Resources
        </h1>
        <p
          className='font-OpenSans text-lg leading-[
24.51px] text-lightTextColor w-full text-center md:text-start mb-14 md:mb-0 md:w-3/5'
        >
          Explore our curated collection of articles, guides, and tips to help
          you live a healthier life.
        </p>
      </div>
      <div className='w-full mb-14 md:mb-0 md:w-1/2 flex justify-end'>
        <img src={HealthHeroImg} alt='Image of herbs and people taking herbs' />
      </div>
    </div>
  );
};
export default HealthHero;
