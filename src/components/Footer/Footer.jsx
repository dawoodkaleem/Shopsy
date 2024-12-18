// import React from "react";
import Banner from "../../assets/website/Banner.jpg";
import footerLogo from "../../assets/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
function Footer() {
  return (
    <div style={BannerImg} className="text-black ">
      <div className="container ">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5 ">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className=" sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              reprehenderit sit est a ullam unde ipsa maxime, tempore
              necessitatibus sunt in labore rem, voluptatum voluptatibus et quis
              nulla esse quae.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <div className="sm:text-3xl text-xl font-old sm:text-left text-justify mb-3">
                <h1>Important Links</h1>
                <ul className="flex flex-col gap-3 mt-2">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-green-600   hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}>
                      <span className="text-black hover:text-white">
                        {link.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-8 px-4">
              <div className="sm:text-3xl text-xl font-old sm:text-left text-justify mb-3">
                <h1>Links</h1>
                <ul className="flex flex-col gap-3 mt-2">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-green-600   hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}>
                      <span className="text-black hover:text-white">
                        {link.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* socila links  */}
            <div className="">
              <div className="flex items-center gap-3 mt-10 ml-8">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lahore , Karachi</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+92 1234455667</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
