import Card2 from "../../../components/cards/Card2";
import img1 from "../../../assets/images/card_2/daniela-chavez-cUy8UUGnsqg-unsplash 1.png";
import img2 from "../../../assets/images/card_2/Rectangle 15.png";
import img3 from "../../../assets/images/card_2/Rectangle 16.png";
import img4 from "../../../assets/images/card_2/Rectangle 17.png";
import img5 from "../../../assets/images/card_2/Rectangle 18.png";

const BestProducts = () => {
  const card1 = {
    img: img1,
    title: "Sincerely Media",
    star: "⭐⭐⭐⭐⭐",
    price: "566",
  };
  const card2 = {
    img: img2,
    title: "Valeriia Miller",
    star: "⭐⭐⭐",
    price: "886",
  };
  const card3 = {
    img: img3,
    title: "Mathide Langevin",
    star: "⭐⭐⭐⭐⭐",
    price: "205",
  };
  const card4 = {
    img: img4,
    title: "Sincerely Media",
    star: "⭐⭐",
    price: "346",
  };
  const card5 = {
    img: img5,
    title: "Priscilla Du Preez",
    star: "⭐⭐⭐⭐",
    price: "406",
  };
  return (
    <div className="min-h-screen px-10 md:px-0 py-10 font-poppins">
      <div className="text-center mb-12">
        <h1 className="text-4xl">
          <span className="text-[#F78FB3]">Our Best</span> Products Await You
        </h1>
        <p className="text-[#999999]">
          Introducing our RadiantGlow Facial Serum – <br /> Unveil Your Inner
          Glow!
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <Card2 cardData={card1}></Card2>
        </div>
        <Card2 cardData={card2}></Card2>
        <Card2 cardData={card3}></Card2>
        <Card2 cardData={card4}></Card2>
        <Card2 cardData={card5}></Card2>
      </div>
    </div>
  );
};

export default BestProducts;
