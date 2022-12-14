import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import { WhatsApp, Error } from "@mui/icons-material";
import contact from "./contact.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { buttonVariants } from "../../pages/courses/[courseId]";

const ContactUs = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((form) => {
      return {
        ...form,
        name: event.target.value,
      };
    });
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((form) => {
      return {
        ...form,
        email: event.target.value,
      };
    });
  };

  const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((form) => {
      return {
        ...form,
        subject: event.target.value,
      };
    });
  };
  const updateMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((form) => {
      return {
        ...form,
        message: event.target.value,
      };
    });
  };
  const form = useRef();

  const contactVariant = {
    hidden: { y: 200 },
    visible: {
      y: 0,
      transition: { duration: 1 },
    },
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    if (
      formValues.name === "" ||
      formValues.message === "" ||
      formValues.subject === "" ||
      formValues.email === ""
    ) {
      setError(true);
    } else {
      setSending(true);
      try {
        const resp = await emailjs.send(
          "service_0swfjet",
          "template_kky0iv6",
          formValues,
          "JjjlZU6bI2NXQioht"
        );
        console.log({ resp });
        setSending(false);
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
        setSending(false);
      }
    }
  };

  return (
    <motion.div
      id="contact"
      variants={contactVariant}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center font-sora lg:min-h-screen px-4 mb-4 md:mb-0 md:px-0"
    >
      <p className="font-outfit text-4xl font-bold ">Contact Us</p>
      <p className="text-center mt-5 md:mt-0">
        Are you ready to join us? Or you have some questions to ask us? Please
        send us a mail below
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <form onSubmit={onSubmit} className="basis-1/2 md:mt-10 md:ml-20">
          {error && (
            <p className=" bg-red-500 p-3  text-center text-white flex items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
              {" "}
              <Error className="mr-2" /> Please ensure all fields are filled and
              try again
            </p>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                value={formValues.name}
                type="text"
                id="name"
                onChange={updateName}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                value={formValues.email}
                type="email"
                id="email"
                onChange={updateEmail}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="subject">Subject</label>
              <input
                className="form-input"
                value={formValues.subject}
                type="text"
                id="subject"
                onChange={updateSubject}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="message">Message</label>
              <textarea
                value={formValues.message}
                className="w-full border outline-none indent-1 text-sm border-purple-400 h-20 rounded-md"
                id="message"
                onChange={updateMessage}
              />
            </Grid>
          </Grid>
          {!sending && (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              type="submit"
              className="w-40 h-10 border-none bg-purple-500 text-white mt-3"
            >
              Contact Us
            </motion.button>
          )}
          {sending && (
            <button
              disabled
              className="w-40 h-10 border-none bg-purple-500 text-white mt-3"
            >
              Sending.....
            </button>
          )}
          <motion.a
            onClick={() => router.push("https://wa.link/7eplda")}
            variants={buttonVariants}
            whileHover="hover"
            className="text-white cursor-pointer bg-green-500 h-10 text-sm flex items-center justify-around w-fit p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl mt-10 hover:bg-green-700"
          >
            <WhatsApp className="mr-4" />
            Message us on whatsApp
          </motion.a>
        </form>
        <div className="basis-1/2 flex justify-center">
          <Image src={contact} alt="contact" height={300} width={500} />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
