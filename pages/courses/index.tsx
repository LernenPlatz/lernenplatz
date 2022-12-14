import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { serviceList } from "../../components/Services/servicelist";
import { buttonVariants } from "./[courseId]";
import { motion } from "framer-motion";

const Courses = () => {
  const router = useRouter();
  const data = router.query;
  const onClick = (name: string) => {
    router.push(`/courses/${name}`);
  };
  return (
    <div className="flex flex-col items-center p-2">
      <Head>
        <title>Lernen Courses</title>
        <meta name="description" content="Lernen Courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="font-outfit text-2xl font-bold ">Courses</p>
      <h2 className="text-center w-full md:w-9/12 my-4">
        Our Courses are designed to help you understand and learn the german
        language the easiest and fastest way possible and also prepare you for
        different German certification exams such as Goethe, TELC,etc
      </h2>
      <p className="text-center mb-3">
        These are the list of classes available at Lernen for now
      </p>
      {serviceList.map((s) => (
        <div key={s.name} className="flex flex-col items-center pb-4 w-full">
          <p className={`w-3/4 h-1 bg-purple-400`}></p>
          <p className="font-bold text-lg mt-2">{s.title ? s.title : s.name}</p>
          <p className="w-3/4 text-center">{s.details}</p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => onClick(s.name)}
            className="flex items-center justify-center p-2 w-30 h-10 text-purple-400 rounded-full border-2 border-purple-400 shadow-xl my-4"
          >
            <p>More details....</p>{" "}
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
