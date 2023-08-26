import testimonial from "../../../assets/images/rest/Rectangle 709.png";
const Testimonial = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center font-poppins px-5">
      <div className="left">
        <img src={testimonial} alt="" className="w-[450px]" />
      </div>
      <div className="right">
        <p>(3)Testimonial:</p>
        <h1 className="mt-4 mb-2 text-3xl">What the says About Our Services</h1>
        <p className="text-[#999]">
          Elevate your skincare routine with our RadiantGlow Facial Serum, your
          secret to achieving a luminous and youthful complexion. Infused with a
          potent blend of natural ingredients, this serum is designed to
          nourish, hydrate, and rejuvenate your skin from within.
        </p>
        <h4 className="font-semibold mt-8">Jessica Iskandar</h4>
        <p className="text-[#999] text-sm">Video Blogger</p>
      </div>
    </div>
  );
};

export default Testimonial;
