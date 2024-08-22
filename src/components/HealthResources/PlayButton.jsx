/* eslint-disable react/prop-types */
import { FaPlay } from 'react-icons/fa6';

const PlayButton = ({ addClass }) => {
  return (
    <button
      className={`bg-productBg w-36 h-20 rounded-xl flex items-center justify-center text-[#4EA566]  ${addClass}`}
    >
      <FaPlay />
    </button>
  );
};
export default PlayButton;
