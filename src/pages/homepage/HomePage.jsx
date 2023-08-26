import Banner from "./section_1/Banner";
import SellingProduct from "./section_2/SellingProduct";
import Testimonial from "./section_5/Testimonial";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <SellingProduct></SellingProduct>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
