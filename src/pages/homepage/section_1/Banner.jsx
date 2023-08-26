import titlePic from "../../../assets/images/banner/titlePic.png";
import play from "../../../assets/images/banner/play.png";
import leftPic from "../../../assets/images/banner/left.png";
import rightPic from "../../../assets/images/banner/right.png";
const Banner = () => {
  return (
    <div className="flex min-h-screen md:min-h-[500px] items-center">
      <div className="left md:w-7/12">
        <div className="title text-7xl font-poppins ">
          <h1>
            Natural <span className="text-[#F78FB3]">product</span>
          </h1>
          <h1>
            With Best the
            <h1 className="flex items-center">
              Results
              <img src={titlePic} alt="" className="ms-3 mt-2 h-9" />
            </h1>
          </h1>
        </div>
        <p className="text-[#999] font-poppins w-10/12">
          Discover luminous skin with RadiantGlow Facial Serum. Enriched with
          natural ingredients, this serum nourishes, hydrates, and rejuvenates
          for a youthful.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 rounded-md text-sm text-white shadow-lg bg-[#F78FB3]">
            Shop Now
          </button>
          <button className="flex gap-2 items-center text-sm font-bold">
            <img src={play} alt="" className="w-9" />
            Watch Reviews
          </button>
        </div>
      </div>
      <div className="right md:w-3/12 relative hidden md:block">
        <div className="img1 absolute -top-24 -left-16 z-40">
          <img src={leftPic} alt="" className="h-[350px]" />
        </div>
        <div className="shape absolute -bottom-[200px] left-16 border-2 border-black h-[350px] w-[170px] rounded-[50px]"></div>
        <div className="img2 absolute -right-28 -bottom-36">
          <img src={rightPic} alt="" className="h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
