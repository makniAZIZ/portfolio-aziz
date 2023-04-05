import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mohamed Aziz Makni - Développeur Full-Stack Javascript en Alternance
        </title>
        <meta
          name="description"
          content="Développeur web JavaScript en alternance, compétent en front-end et back-end, avec expérience en React et Node.js. Contactez-moi pour en savoir plus sur mes projets passés."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar> </Navbar>
      <Hero> </Hero>
      <About> </About>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Contact></Contact>
      <Footer />
    </>
  );
}
