import Card1 from "../../../components/cards/card1";
import cardOneImg from "../../../assets/images/card_1/pexels-belle-co-402028.png";
import cardTeoImg from "../../../assets/images/card_1/pexels-flo-dahm-1074442.png";

const SellingProduct = () => {
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
    <div className="max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="md:flex gap-5  px-9 md:px-0">
        <div className="left flex flex-col text-center md:text-left justify-center md:w-4/12 mb-7 md:mb-0">
          <p>(1)Selling product</p>
          <h1 className="text-3xl mt-3 mb-1">Our Best Selling Products</h1>
          <p className="text-[#999999]">
            Elevate your skincare routine with our RadiantGlow Facial Serum,
            your secret to achieving a luminous and youthful complexion.
          </p>
          <div>
            <button className="mt-5 px-6 py-2 rounded-md text-sm text-white shadow-lg bg-[#F78FB3] w-[120px]">
              See more
            </button>
          </div>
        </div>
        <div className="md:w-8/12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          <Card1 cardDetails={cardOneDetails}></Card1>
          <Card1 cardDetails={cardTwoDetails}></Card1>
          <Card1 cardDetails={cardThreeDetails}></Card1>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
