import aboutImage1 from "../../../assets/images/rest/Rectangle 24.png";
import aboutImage2 from "../../../assets/images/rest/Rectangle 25.png";
const About = () => {
  return (
    <div id="about" className="min-h-screen bg-[#FBF7F3]">
      <div className="md:flex gap-10 max-w-6xl mx-auto font-poppins p-10 md:p-0">
        <div className="left md:w-5/12">
          <p className="mt-8">(2)About:</p>
          <h1 className="md:text-right text-4xl mb-8 md:mb-14">About Us</h1>
          <img
            src={aboutImage2}
            alt=""
            className="w-72 mb-10 md:mb-0 md:w-80"
          />
        </div>
        <div className="right md:w-7/12">
          <img src={aboutImage1} alt="" className="w-11/12" />
          <p className="text-[#999] w-10/12 my-3">
            The lightweight, non-greasy texture allows for quick absorption,
            making it suitable for all skin types.
          </p>
          <a href="#" className="text-[#7A7272]">
            Learn more..
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
