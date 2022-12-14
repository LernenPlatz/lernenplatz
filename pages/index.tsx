import Head from "next/head";
import AboutUs from "../components/About/AboutUs";
import ContactUs from "../components/Contact/ContactUs";
import LandingPage from "../components/Landing/LandingPage";
import Service from "../components/Services/service";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lernen</title>
        <meta name="description" content="Learn German Language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <LandingPage />

      {/* services */}
      <Service />

      {/* About Us */}
      <AboutUs />

      {/* contact form */}
      <div className="w-full">
        <ContactUs />
      </div>
    </div>
  );
}
