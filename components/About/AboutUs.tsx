import Image from "next/image";
import illustration from "./about.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const aboutVariant = {
    hidden: { x: -200 },
    visible: {
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      id="about"
      variants={aboutVariant}
      initial="hidden"
      whileInView="visible"
      className=" flex flex-col items-center mt-10 px-4 lg:min-h-screen md:px-0"
    >
      <p className="font-outfit text-4xl font-bold ">About Us</p>
      <div className="flex flex-col md:flex-row items-center">
        <div className="basis-1/2">
          <Image src={illustration} width={1000} alt="about-image" />
        </div>
        <div className="basis-1/2 mt-10 md:mt-0">
          <p className="mb-3 font-sora text-lg text-justify md:w-3/4 ">
            We are a German language teaching institution based in Nigeria
          </p>
          <p className="mb-3 font-sora text-lg text-justify md:w-3/4">
            Our goal is to help people learn and understand the German language
            as fast and easy as possible.
          </p>
          <p className="mb-3 font-sora text-lg text-justify md:w-3/4">
            Our courses are also designed to help you prepare and pass different
            german certications exams wih high quality resources and materials
            to guide you along the way.
          </p>
          <p className="mb-3 font-sora text-lg text-justify md:w-3/4">
            Our Goal is not only designed to make you pass your examinations
            alone but to also make you understand and speak the german language
            efficiently.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
