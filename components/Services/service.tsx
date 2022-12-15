import { useEffect } from "react";
import { serviceList } from "./servicelist";
import { useRouter } from "next/router";
import { Card, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const onClick = (name: string) => {
    router.push(`/courses/${name}`);
  };

  const introVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      id="service"
      className="flex flex-col items-center justify-center mt-10 lg:min-h-screen font-sora"
    >
      <p className="text-lg md:text-4xl font-bold font-outfit">
        Learn Easily . Speak Fluently . Pass Excellently
      </p>
      <h2 className="text-center w-full md:w-9/12 my-4">
        Our Courses are designed to help you understand and learn the german
        language the easiest and fastest way possible and also prepare you for
        different German certification exams such as Goethe, TELC,etc
      </h2>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        style={{ width: "100vw" }}
      >
        {serviceList.map((s) => (
          <Grid key={s.name} item onClick={() => onClick(s.name)}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              className="cursor-pointer"
            >
              <Card
                sx={{
                  maxWidth: 345,
                  height: "14em",
                  borderColor: "purple",
                  borderStyle: "solid",
                  borderWidth: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <div className="bg-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-sora">
                  <p className="font-bold text-xl">{s.name}</p>
                </div>
                <h3 className="font-bold text-sm font-sora my-2">
                  {s.level ? s.level + ` -` : '' }  {s.duration}
                </h3>
                <h1 className="text-justify">
                  {s.details.substr(0, 150) + "...."}
                </h1>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Service;
