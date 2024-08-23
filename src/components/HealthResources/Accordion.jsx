/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-darkGreen text-white px-5 sm:px-10 rounded-lg py-5 flex flex-col gap-8 `}
    >
      <aside
        className='flex items-center justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className='text-lg'>{question}</h2>
        {isOpen ? (
          <FaChevronUp className='text-xl sm:text-base' />
        ) : (
          <FaChevronDown className='text-xl sm:text-base' />
        )}
      </aside>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};
export default Accordion;
