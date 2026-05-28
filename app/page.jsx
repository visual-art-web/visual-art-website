"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const galleryItems = [
  { title: "חתונות", tag: "Wedding Story", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop" },
  { title: "זוגיות", tag: "Couple Session", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop" },
  { title: "אופנה", tag: "Editorial", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop" },
  { title: "תדמית", tag: "Brand Portrait", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1900&auto=format&fit=crop" },
  { title: "רילסים", tag: "Social Motion", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop" },
  { title: "רחפן", tag: "Aerial View", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
];

const services = [
  ["חתונות", "סיפור חתונה מלא עם צבעים חמים, רגעים טבעיים, פרטים קטנים ועריכה שנראית כמו סרט."],
  ["זוגיות", "סשן זוגי רגוע, אינטימי ומדויק — בלי פוזות כבדות, עם אווירה טבעית ויוקרתית."],
  ["תדמית", "צילומי מותג ואנשים שמציגים מקצועיות, ביטחון ונראות גבוהה לרשתות ולאתר."],
  ["אופנה", "הפקות אופנה בסגנון מגזין: קומפוזיציה נקייה, תאורה מדויקת וסטיילינג חד."],
  ["רילסים", "תוכן קצר ודינמי לעסק, יוצר או מותג — צילום נקי, קצב נכון ותחושה פרימיום."],
  ["רחפן", "צילום אווירי לאירועים, לוקיישנים ונכסים עם זוויות רחבות שמייצרות אפקט וואו."],
];

const process = [
  ["01", "שיחה קצרה", "מבינים את הסגנון, המטרה, הלוקיישן והתחושה שצריך להעביר."],
  ["02", "תכנון וסטייל", "בונים כיוון צילום: תאורה, צבעים, זוויות, לבוש ואווירה."],
  ["03", "צילום רגוע", "מובילים את המצולמים בצורה נעימה כדי לקבל תמונות טבעיות ומדויקות."],
  ["04", "עריכה סופית", "מסיימים בצבע, קונטרסט וניקיון ויזואלי שמתאימים לשפה של המותג."],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".va-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("va-visible")),
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="va-site" id="top">
      <nav className="va-navbar">
        <a className="va-logo" href="#top" aria-label="Visual Art">VISUAL<span>ART</span></a>
        <div className="va-nav-links">
          <a href="#gallery">גלריה</a>
          <a href="#services">שירותים</a>
          <a href="#about">אודות</a>
          <a href="#process">תהליך</a>
          <a href="#contact">יצירת קשר</a>
        </div>
      </nav>

      <header className="va-hero">
        <HeroVideoLayer />
        <section className="va-hero-inner va-reveal">
          <div className="va-hero-copy">
            <span className="va-eyebrow">LUXURY VISUAL STORYTELLING</span>
            <h1>צילום שמרגיש כמו שער למגזין.</h1>
            <p>
              אתר חדש בסגנון editorial premium: פחות שחור כבד, יותר חום עמוק,
              שמנת, יין וסייג׳. נראות נקייה, יוקרתית ומסודרת לכל קטגוריית צילום.
            </p>
            <div className="va-buttons">
              <a className="va-button va-button-primary" href="#contact">קבלת הצעת מחיר</a>
              <a className="va-button va-button-secondary" href="#gallery">לצפייה בעבודות</a>
            </div>
          </div>
          <div className="va-hero-panel" aria-hidden="true">
            <span>VISUAL ART</span>
            <strong>Editorial • Weddings • Fashion</strong>
          </div>
        </section>
      </header>

      <section className="va-intro va-reveal">
        <div className="va-intro-text">
          <span className="va-eyebrow">THE STYLE</span>
          <h2>מראה חם, נקי ויוקרתי — לא עוד אתר כהה ושטוח.</h2>
        </div>
        <div className="va-intro-cards">
          <article><h3>צבעים חדשים</h3><p>שמנת, יין עמוק, חום קפה, סייג׳ וזהב עדין.</p></article>
          <article><h3>קטגוריות שונות</h3><p>כל קטגוריה מקבלת כרטיס עם תמונה, תווית וסגנון ברור.</p></article>
          <article><h3>תחושת סטודיו</h3><p>מרווח, אלגנטי, מתאים לצלמת שרוצה לשדר רמה גבוהה.</p></article>
        </div>
      </section>

      <section className="va-section va-gallery va-reveal" id="gallery">
        <div className="va-section-head">
          <span className="va-eyebrow">SELECTED CATEGORIES</span>
          <h2>קטגוריות צילום</h2>
          <p>במקום רשת רגילה ומשעממת — חלוקה ויזואלית שמרגישה כמו תיק עבודות של סטודיו פרימיום.</p>
        </div>
        <div className="va-gallery-grid">
          {galleryItems.map((item, index) => (
            <figure className={`va-gallery-card card-${index + 1}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <small>{item.tag}</small>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="va-section va-about va-reveal" id="about">
        <div className="va-about-card">
          <span className="va-eyebrow">ABOUT VISUAL ART</span>
          <h2>לא רק תמונות. שפה ויזואלית שלמה.</h2>
          <p>
            הצילום בנוי סביב אור, צבע, קומפוזיציה ורגש. כל סט מקבל כיוון ברור:
            חתונה רכה ומרגשת, אופנה חדה ומגזינית, תדמית נקייה או תוכן קצר לרשתות.
          </p>
          <p>
            המטרה היא שכל לקוח ירגיש שהוא מקבל תוצר עם זהות — לא עוד תמונה רגילה,
            אלא פריים שמספר סיפור ומרגיש יקר.
          </p>
        </div>
        <div className="va-about-image">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" alt="צילום אווירה" />
        </div>
      </section>

      <section className="va-section va-services va-reveal" id="services">
        <div className="va-section-head split">
          <span className="va-eyebrow">SERVICES</span>
          <h2>מה אפשר לצלם?</h2>
          <p>כל שירות מקבל מסר ברור, קצר ומכובד — בלי עומס ובלי תחושה גנרית.</p>
        </div>
        <div className="va-services-grid">
          {services.map(([title, text]) => (
            <article className="va-service-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="va-process va-reveal" id="process">
        <div className="va-section va-process-inner">
          <div className="va-section-head">
            <span className="va-eyebrow">OUR PROCESS</span>
            <h2>איך יוצרים תוצאה שנראית יקרה?</h2>
            <p>תהליך מסודר שמחזיק את כל החוויה — מהשיחה הראשונה ועד למסירת התמונות.</p>
          </div>
          <div className="va-process-grid">
            {process.map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="va-section va-contact va-reveal" id="contact">
        <div className="va-contact-copy">
          <span className="va-eyebrow">BOOK YOUR SESSION</span>
          <h2>בואו נבנה צילום שמתאים בדיוק לסגנון שלכם.</h2>
          <p>השאירו פרטים ונחזור עם כיוון צילום, המלצה ללוקיישן והצעת מחיר.</p>
        </div>
        <form className="va-contact-form">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון / WhatsApp" />
          <textarea placeholder="איזה צילום תרצו? חתונה, זוגיות, תדמית, אופנה, רילס או רחפן" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="va-footer va-reveal">
        <h2>Visual Art</h2>
        <p>Premium photography with a warm editorial soul.</p>
        <div className="va-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
        <small>© VISUAL ART 2026</small>
      </footer>
    </main>
  );
}
