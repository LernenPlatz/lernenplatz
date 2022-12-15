import React from "react";
import Image from "next/image";
import illustration from "./teacher.jpg";
import { TrendingFlat } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { buttonVariants } from "../pages/courses/[courseId]";

const Header = () => {
  const router = useRouter();

  const navigate = () => {
    router.push("/courses");
  };
  return (
    <div
      id="home"
      className="flex flex-col-reverse items-center md:flex-row px-2  w-full "
    >
      <div className="w-full md:w-1/2">
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: -500 }}
          transition={{ delay: 0.5 }}
          className="w-full text-4xl md:text-6xl font-bold font-arial "
        >
          Learn German{" "}
          <div className="whitespace-nowrap">
            The Most Intuitive<div>Way Possible</div>
          </div>{" "}
        </motion.p>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:w-2/3  mt-8 font-sora "
        >
          We are a language teaching institution that teaches foreign languages and
          guide people through different parts in which their learning goals can
          be actualized.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={navigate}
          className="flex justify-between items-center p-4 bg-purple-900 mt-20 w-40 h-14 text-white rounded-md shadow-xl"
        >
          <p className="">Our Courses</p>
          <TrendingFlat />
        </motion.button>
      </div>
      <motion.div
        className="w-full md:w-[50%] "
        animate={{ x: 0 }}
        initial={{ x: 500 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className=" radius-5"
          src={illustration}
          height={5000}
          width={1000}
          alt="illustration"
        />
      </motion.div>
    </div>
  );
};

export default Header;
