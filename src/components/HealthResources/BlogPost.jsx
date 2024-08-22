import { FaArrowRight } from 'react-icons/fa6';
import { blogPosts } from './data';

const BlogPost = () => {
  return (
    <div className='flex flex-col gap-10 font-Lora  px-[6vw] pt-40 mb-40 lg:px-[9vw] lg:pt-[2vw] md:pb-[10vw]'>
      <header className=''>
        <h1 className='font-bold text-3xl text-center font-Lora text-lightTextColor mb-6'>
          Recent Blog Post
        </h1>
        <p className='mx-auto text-center text-lightTextColor font-OpenSans'>
          Stay up to date with our recent blog posts, featuring insightful
          articles <br className='hidden md:block' />
          on health, wellness, and natural remedies for your daily life.
        </p>
      </header>

      <article className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {blogPosts.map((post, i) => {
          return (
            <div
              key={i}
              className='border border-darkGreen px-6 py-6 flex flex-col gap-5 rounded-xl'
            >
              <div className='w-full'>
                <img
                  src={post.img}
                  alt='Herbs Image'
                  className='rounded-md w-full'
                />
              </div>
              <h2 className='text-xl font-bold text-lightTextColor font-Lora'>
                {post.title}
              </h2>
              <p className='font-OpenSans text-lightTextColor'>{post.des}</p>
              <div className='flex items-center justify-between'>
                <aside className='p-2 px-3 bg-darkGreen rounded-lg text-productBg'>
                  {post.buttonText}
                </aside>
                <p className='text-lightTextColor'>{post.noOfRead} mins read</p>
              </div>
            </div>
          );
        })}
      </article>

      <button className='mt-5 flex gap-1 items-center justify-center rounded-2xl py-3 px-5 border border-darkGreen text-darkGreen font-bold font-OpenSans hover:bg-darkGreen hover:text-productBg transition-all w-fit self-center'>
        Explore more blog post <FaArrowRight />{' '}
      </button>
    </div>
  );
};
export default BlogPost;
