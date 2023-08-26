import Card1 from "../../../components/cards/card1";
import cardOneImg from "../../../assets/images/card_1/pexels-belle-co-402028.png";
import cardTeoImg from "../../../assets/images/card_1/pexels-flo-dahm-1074442.png";
import cardThreeImg from "../../../assets/images/card_1/pexels-valeriia-miller-2573486.png";
const Section2 = () => {
  const cardOneDetails = {
    img: cardOneImg,
    title: "Sincerely Media",
    price: 1440,
    location: "Ikagura, Japan",
    star: "⭐⭐⭐",
  };
  const cardTwoDetails = {
    img: cardTeoImg,
    title: "Reuben Mansell",
    price: 1344,
    location: "Bali, Indonesia",
    star: "⭐⭐⭐⭐",
  };
  const cardThreeDetails = {
    img: cardOneImg,
    title: "Deanna Alys",
    price: 2444,
    location: "Skye, Skotlandia",
    star: "⭐⭐⭐",
  };
  return (
    <div className="min-h-[500px] flex items-center">
      <div className="flex gap-5">
        <div className="left flex flex-col justify-center md:w-4/12">
          <p>(1)Selling product</p>
          <h1 className="text-3xl mt-3 mb-1">Our Best Selling Products</h1>
          <p className="text-[#999999]">
            Elevate your skincare routine with our RadiantGlow Facial Serum,
            your secret to achieving a luminous and youthful complexion.
          </p>
          <button className="mt-5 px-6 py-2 rounded-md text-sm text-white shadow-lg bg-[#F78FB3] w-[120px]">
            See more
          </button>
        </div>

        <div className="md:w-8/12 flex gap-4">
          <Card1 cardDetails={cardOneDetails}></Card1>
          <Card1 cardDetails={cardTwoDetails}></Card1>
          <Card1 cardDetails={cardThreeDetails}></Card1>
        </div>
      </div>
    </div>
  );
};

export default Section2;
