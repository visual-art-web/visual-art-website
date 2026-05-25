
"use client"

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    const reveals = document.querySelectorAll('.fade-up');

    const handleScroll = () => {

      reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){
          el.classList.add('show');
        }

      });

    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      <section className="hero fade-up">
        Hero Section
      </section>

      <section className="gallery fade-up">
        Gallery Section
      </section>

      <section className="about fade-up">
        About Section
      </section>

      <section className="services fade-up">
        Services Section
      </section>

      <section className="contact fade-up">
        Contact Section
      </section>

      <footer className="footer fade-up">
        Footer
      </footer>
    </>
  );
}
