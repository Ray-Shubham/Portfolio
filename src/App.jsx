import React from "react";
import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        {/* <Contacts /> */}
        <ContactForm />
      </main>
    </>
  );
};

export default App;
