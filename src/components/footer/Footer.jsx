/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/images/logo.png";
import paypal from "../../assets/images/payment/PayPal_.png";
import mastercard from "../../assets/images/payment/MasterCard_.png";
import visa from "../../assets/images/payment/Visa_.png";

const Footer = () => {
  return (
    <div className="bg-[#FFEFEE]">
      <footer className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-7 font-poppins px-10">
        <div className="col-span-3 pe-4">
          <div className="logo flex items-center">
            <img src={logo} alt="logo" className="w-[45px]" />
            <h1 className="font-kaushan text-[25px]">Boutiquin</h1>
          </div>
          <p className="my-4">
            Let's take your free time by taking a vacation with us release
            stress and have a fun holiday
          </p>
          <div className="flex gap-2 mb-4">
            <img src={paypal} alt="" className="h-4" />
            <img src={mastercard} alt="" className="h-4" />
            <img src={visa} alt="" className="h-4" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-lg font-semibold">Home</h1>
          <ul className="text-base">
            <li className="my-2">
              <a href="#">Why choose us</a>
            </li>
            <li className="my-2">
              <a href="#">Top Destination</a>
            </li>
            <li className="my-2">
              <a href="#">Our Experience</a>
            </li>
            <li className="my-2">
              <a href="#">What they said</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Company</h1>
          <ul className="text-base">
            <li className="my-2">
              <a href="#">Travelkuy</a>
            </li>
            <li className="my-2">
              <a href="#">FAQ</a>
            </li>
            <li className="my-2">
              <a href="#">Partner with us</a>
            </li>
            <li className="my-2">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-lg font-semibold">Support</h1>
          <ul className="text-base">
            <li className="my-2">
              <a href="#">Account</a>
            </li>
            <li className="my-2">
              <a href="#">Support Center</a>
            </li>
            <li className="my-2">
              <a href="#">Feedback</a>
            </li>
            <li className="my-2">
              <a href="#">Contact us</a>
            </li>
            <li className="my-2">
              <a href="#">Accesbility</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Social Media</h1>
          <ul className="text-base">
            <li className="my-2">
              <a href="#">Facebook</a>
            </li>
            <li className="my-2">
              <a href="#">Instragram</a>
            </li>
            <li className="my-2">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
