import titlePic from "../../../assets/images/banner/titlePic.png";
import play from "../../../assets/images/banner/play.png";
import leftPic from "../../../assets/images/banner/left.png";
import rightPic from "../../../assets/images/banner/right.png";
import pinkStar from "../../../assets/images/banner/pinkStar.png";
import Star from "../../../assets/images/banner/3Star.png";
import blackStar from "../../../assets/images/banner/blackStar.png";
import blackCross from "../../../assets/images/banner/blackCross.png";
const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto md:flex min-h-[460px] md:min-h-[500px] items-center">
      <div className="left md:w-7/12 p-10 md:p-0">
        <div className="title text-5xl md:text-7xl font-poppins mb-3">
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
      <div className="right px-5 md:px-0 md:w-3/12 h-screen relative">
        <div className="img1 absolute bottom-24 md:-left-16 z-40">
          <img src={leftPic} alt="" className="h-[350px]" />
        </div>
        <div className="shape absolute bottom-56 md:bottom-[150px] left-24 md:left-[80px] border-2 border-black h-[350px] w-[170px] rounded-[50px]"></div>
        <div className="img2 absolute right-5 md:-right-28 top-14">
          <img src={rightPic} alt="" className="h-[350px]" />
        </div>
        <img
          src={pinkStar}
          alt=""
          className="w-7 right-1 md:-right-32 top-36 absolute z-50"
        />
        <img
          src={pinkStar}
          alt=""
          className="w-7 left-1 md:-left-20 bottom-60 md:top-80 absolute z-50"
        />
        <img
          src={blackStar}
          alt=""
          className="w-7 left-20 md:left-4 top-28 md:top-16 absolute z-50"
        />
        <img
          src={blackCross}
          alt=""
          className="w-5 right-16 bottom-[144px] absolute z-50"
        />
        <img
          src={Star}
          alt=""
          className="w-12 right-10 md:-right-14 bottom-60 md:bottom-28 absolute z-50"
        />
      </div>
    </div>
  );
};

export default Banner;
