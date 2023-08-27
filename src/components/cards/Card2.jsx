/* eslint-disable react/prop-types */
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Card2 = ({ cardData }) => {
  const { img, title, star, price } = cardData || {};
  return (
    <div className="card2 group font-poppins">
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt={title + "image"}
          className="h-[400px] group-hover:scale-110 duration-200"
        />
      </div>
      <div className="flex justify-between border-b-[1px] border-[#D7D7D7] py-4">
        <h1 className="text-lg">{title}</h1>
        <p>{star}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="left">
          <p className="text-sm">From</p>
          <h4 className="text-[#F78FB3] text-xl">${price}</h4>
        </div>
        <a href="#">
          <BsFillArrowUpRightCircleFill
            className="text-[#F78FB3]"
            size={35}
          ></BsFillArrowUpRightCircleFill>
        </a>
      </div>
    </div>
  );
};

export default Card2;
