import {
  WhatsApp,
  Instagram,
  Twitter,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-200 flex flex-col md:flex-row md:items-center justify-between p-3 font-sora text-sm ">
      <div className="md:w-1/3 md:mb-0 mb-4">
        <p className="text-2xl text-purple-700  font-lobster">Lernen</p>
        <p className="w-2/3 text-justify md:mt-8 mt-2 ">
          We are a language teaching firm that teaches foreign languages and
          guide people through different parts in which their learning goals can
          be actualized.
        </p>
        <div className="text-white flex mt-4 ">
          <div className="social-icons bg-green-500">
            <WhatsApp />
          </div>
          <div className="social-icons bg-red-400">
            <Instagram />
          </div>
          <div className="social-icons bg-blue-400">
            <Twitter />
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col md:mb-0 mb-4">
        <p className="md:mb-8 font-bold text-md">Useful Links</p>
        <Link className="footer-link" href="/">
          Home
        </Link>
        <Link className="footer-link" href="/courses">
          Courses
        </Link>
        <Link className="footer-link" href="/#about">
          About
        </Link>
        <Link className="footer-link" href="/#contact">
          Contact
        </Link>
      </div>
      <div className="md:w-1/3">
        <p className="md:mb-8 font-bold text-md">Contacts</p>
        <div className="footer-contact">
          <LocationOn />
          <p className="ml-2 text-black">Lagos, Nigeria</p>
        </div>
        <div className="footer-contact">
          <Phone />
          <p className="ml-2 text-black">+2347067050605</p>
        </div>
        <div className="footer-contact">
          <Email />
          <p className="ml-2 text-black">Lernenplatz@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
