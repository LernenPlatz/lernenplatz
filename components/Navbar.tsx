import { useState } from "react";
import { MenuOutlined, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex justify-between p-2 relative">
      <div className="">
        <p className="text-4xl text-purple-700  font-lobster">Lernen</p>
      </div>
      <div className={`relative ${!showNav ? "" : "w-1/3"}  md:hidden`}>
        {!showNav && (
          <IconButton onClick={() => setShowNav(true)}>
            <MenuOutlined />
          </IconButton>
        )}
        <AnimatePresence>
          {showNav && (
            <motion.div
              exit={{ y: -500 }}
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              className="flex flex-col items-center top-0 right-0 absolute justify-between bg-purple-400 text-white h-[20em] w-full"
            >
              <IconButton onClick={() => setShowNav(false)}>
                <Close className="text-white" />
              </IconButton>
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/#about">About</Link>
              <Link className="mb-5" href="/#contact">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="md:flex  justify-around items-center font-bold text-purple-700 font-sora hidden">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/courses">
          Courses
        </Link>
        <Link className="nav-link" href="/#about">
          About
        </Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
