import Banner from "./section_1/Banner";
import SellingProduct from "./section_2/SellingProduct";
import BestProducts from "./section_3/BestProducts";
import About from "./section_4/About";
import Success from "./section_4_1/Success";
import Testimonial from "./section_5/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <SellingProduct></SellingProduct>
      <BestProducts></BestProducts>
      <About></About>
      <Success></Success>
      <Testimonial></Testimonial>
    </>
  );
};

export default HomePage;
