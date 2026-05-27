"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const galleryItems = [
  {
    title: "חתונות",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
    className: "va-gallery-card va-gallery-tall",
  },
  {
    title: "זוגיות",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "אופנה",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "תדמית",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1900&auto=format&fit=crop",
    className: "va-gallery-card va-gallery-wide",
  },
  {
    title: "רילסים",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "רחפן",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
];

const services = [
  ["חתונות", "צילום חתונות בסגנון קולנועי עם צבעים עמוקים, רגעים אמיתיים ועריכה יוקרתית."],
  ["זוגיות", "סשנים רומנטיים עם תאורה טבעית ואווירה שנראית כמו סצנה מתוך סרט."],
  ["תדמית", "צילומי תדמית לעסקים, יוצרים ומותגים שרוצים להיראות ברמה אחרת."],
  ["אופנה", "הפקות אופנה עם קומפוזיציה נקייה, סטיילינג וצבעים editorial luxury."],
  ["רילסים", "תוכן קצר לרשתות חברתיות עם צילום דינמי ועריכה שמושכת תשומת לב."],
  ["רחפן", "זוויות אוויר יוקרתיות לצילום אירועים, לוקיישנים ותוכן cinematic premium."],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".va-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("va-visible");
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="va-site" id="top">
      <header className="va-hero">
        <nav className="va-navbar">
          <a className="va-brand" href="#top">
            <strong>VISUAL ART</strong>
            <span>CAPTURING MOMENTS, CREATING MEMORIES</span>
          </a>

          <div className="va-nav-links">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <section className="va-hero-inner va-reveal">
          <HeroVideoLayer />

          <div className="va-hero-copy">
            <span className="va-eyebrow">LUXURY CINEMATIC PHOTOGRAPHY</span>
            <h1>צילום יוקרתי עם אווירה קולנועית</h1>
            <p>
              סטודיו צילום בסגנון editorial luxury — זוגיות, אופנה ותוכן פרימיום
              עם תאורה דרמטית ותחושה של מותג בינלאומי.
            </p>

            <div className="va-buttons">
              <a className="va-button va-button-gold" href="#contact">
                קבלת הצעת מחיר
              </a>
              <a className="va-button va-button-outline" href="#gallery">
                צפייה בגלריה
              </a>
            </div>
          </div>
        </section>
      </header>
    </main>
  );
}
