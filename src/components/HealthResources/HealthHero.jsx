import HealthHeroImg from '../../assets/health-hero-img.png';

const HealthHero = () => {
  return (
    <div className='flex flex-col w-full md:px-[5vw] md:flex-row md:pt-[5vw] md:pb-[10vw]'>
      <div className='w-1/2'>
        <h1 className='font-Lora font-bold text-5xl leading-[61.44px] text-lightTextColor'>
          Welcome to Our Health Resources
        </h1>
        <p
          className='font-OpenSans text-lg leading-[
24.51px] text-lightTextColor'
        >
          Explore our curated collection of articles, guides, and tips to help
          you live a healthier life.
        </p>
      </div>
      <div className='w-1/2 flex justify-end'>
        <img src={HealthHeroImg} alt='Image of herbs and people taking herbs' />
      </div>
    </div>
  );
};
export default HealthHero;
