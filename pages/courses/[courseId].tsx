import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { serviceList } from "../../components/Services/servicelist";
import Head from "next/head";

export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const CourseId = () => {
  const router = useRouter();
  const course = router.query.courseId;

  const courseDetails = serviceList.find((s) => s.name === course);

  return (
    <div className=" flex flex-col md:flex-row items-center">
      <Head>
        <title>{courseDetails?.name}</title>
        <meta name="description" content="Lernen Courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-full w-3/4  basis-1/2 rounded-full">
        <div className=" flex items-center justify-center text-white bg-purple-400 w-[20em] h-[20em] rounded-full">
          <p className="text-6xl ">{courseDetails?.name}</p>
        </div>
      </div>
      <div className="basis-1/2 mt-10 p-4 flex flex-col ">
        {courseDetails?.title && (
          <div className="mb-8  flex ">
            <p className="text-xl font-bold font-sora">Title </p>{" "}
            <p className="ml-2"> - {courseDetails?.title}</p>
          </div>
        )}
        <div className="mb-8  flex ">
          <p className="text-xl font-bold font-sora">Level </p>{" "}
          <p className="ml-2"> - {courseDetails?.level}</p>
        </div>
        <div className="mb-8  flex ">
          <p className="text-xl font-bold font-sora">Price </p>{" "}
          <p className="ml-2"> - &#8358; {courseDetails?.price} </p>{" "}
        </div>
        <div className="mb-8  flex ">
          <p className="text-xl font-bold font-sora">Duration </p>
          <p className="ml-2"> - {courseDetails?.duration} </p>
        </div>
        <div className="mb-8  flex ">
          <p className="text-xl font-bold font-sora">Period </p>
          <p className="ml-2"> - {courseDetails?.period} </p>
        </div>
        <div className="mb-8  flex ">
          <p className="text-xl font-bold font-sora">Details </p>{" "}
          <p className="ml-2 text-justify"> - {courseDetails?.details} </p>{" "}
        </div>
        <Link href="/#contact">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="self-center p-4 w-40 h-14 text-purple-700 rounded-full border-2 border-purple-700 shadow-xl"
          >
            Apply Here
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default CourseId;
