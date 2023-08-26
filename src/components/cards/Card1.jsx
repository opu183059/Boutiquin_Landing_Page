/* eslint-disable react/prop-types */
const Card1 = ({ cardDetails }) => {
  console.log(cardDetails);
  const { img, title, price, location, star } = cardDetails;
  return (
    <div className="shadow-lg rounded-lg font-poppins group cursor-pointer">
      <div className="overflow-hidden rounded-t-lg">
        <img src={img} alt="" className="group-hover:scale-125 duration-300" />
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <h3 className="text-[#F78FB3] font-semibold text-lg">$ {price}</h3>
          <p className="ms-1 text-[#999] text-sm">one by one</p>
        </div>
        <h2 className="mt-1">{title}</h2>
        <div className="flex justify-between mt-5">
          <p className="text-[#8D8E90] text-sm">{location}</p>
          <span className="text-sm">{star}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
