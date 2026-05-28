"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const categories = [
  { title: "חתונות", tag: "Wedding Story", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop", size: "tall" },
  { title: "זוגיות", tag: "Couple Session", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop" },
  { title: "אופנה", tag: "Editorial", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop" },
  { title: "רילסים", tag: "Social Motion", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop" },
  { title: "תדמית", tag: "Brand Portrait", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
  { title: "רחפן", tag: "Aerial View", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop", size: "wide" },
];

const services = [
  ["01", "חתונות", "סיפור חתונה מלא בצבעים חמים, רגעים טבעיים ועריכה שנראית כמו סרט."],
  ["02", "זוגיות", "סשן זוגי רגוע, אינטימי ומדויק — בלי פוזות כבדות, עם אווירה טבעית ויוקרתית."],
  ["03", "תדמית", "צילומי מותג ואנשים שמציגים מקצועיות, ביטחון ונראות גבוהה לרשתות ולאתר."],
  ["04", "אופנה", "הפקות אופנה בסגנון מגזיני: קומפוזיציה נקייה, תאורה מדויקת וסטיילינג חד."],
  ["05", "רילסים", "תוכן קצר ודינמי לעסק, יוצר או מותג — צילום נקי, קצב נכון ותנועה פרימיום."],
  ["06", "רחפן", "צילום אווירי לאירועים, לוקיישנים ונכסים עם זווית רחבה שמייצרת אפקט וואו."],
];

const process = [
  ["שיחה קצרה", "מבינים את הסגנון, המטרה, הלוקיישן והתחושה שצריכים להעביר."],
  ["תכנון וסטייל", "בונים כיוון צילום: תאורה, צבעים, זוויות, אווירה וקצב ויזואלי."],
  ["צילום רגוע", "מובילים את הצילומים בצורה נעימה כדי לקבל תמונות טבעיות ומדויקות."],
  ["עריכה סופית", "מסיימים בצבע, קונטרסט וניקיון ויזואלי שמתאימים לשפה של המותג."],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.14 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site" id="top">
      <header className="hero">
        <HeroVideoLayer />
        <nav className="nav glass-panel">
          <a className="brand" href="#top" aria-label="Visual Art">
            <strong>VISUAL</strong><span>ART</span>
          </a>
          <div className="links">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#process">תהליך</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <section className="hero-grid reveal">
          <aside className="hero-card glass-panel">
            <span>VISUAL ART</span>
            <h2>Editorial<br />Weddings<br />Fashion</h2>
          </aside>

          <div className="hero-copy">
            <p className="eyebrow">Luxury Visual Storytelling</p>
            <h1>צילום שמרגיש כמו שער למגזין.</h1>
            <p className="lead">
              אתר חדש בסגנון editorial premium: פחות שחור כבד, יותר חום עמוק,
              שמנת, יין וזהב עדין. נראות נקייה, יוקרתית ומסודרת לכל קטגוריית צילום.
            </p>
            <div className="actions">
              <a className="btn primary" href="#contact">קבלת הצעת מחיר</a>
              <a className="btn secondary" href="#gallery">לצפייה בעבודות</a>
            </div>
          </div>
        </section>
      </header>

      <section className="style-card reveal">
        <div>
          <p className="eyebrow wine">The Style</p>
          <h2>מראה חם, נקי ויוקרתי — לא עוד אתר כהה ושטוח.</h2>
        </div>
        <div className="style-points">
          <article><h3>צבעים חדשים</h3><p>שמנת, יין עמוק, חום קפה, סייג׳ וזהב עדין.</p></article>
          <article><h3>קטגוריות שונות</h3><p>כל קטגוריה מקבלת כרטיס עם תמונה, תווית וסגנון ברור.</p></article>
          <article><h3>תחושת סטודיו</h3><p>מרווח, אלגנטי ומתאים לצלמת שרוצה לשדר רמה גבוהה.</p></article>
        </div>
      </section>

      <section className="section gallery reveal" id="gallery">
        <div className="section-head">
          <p className="eyebrow wine">Selected Categories</p>
          <h2>קטגוריות צילום</h2>
          <p>במקום רשת רגילה ומשעממת — חלוקה ויזואלית שמרגישה כמו תיק עבודות של סטודיו פרימיום.</p>
        </div>
        <div className="masonry">
          {categories.map((item) => (
            <figure className={`photo-card ${item.size || ""}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <small>{item.tag}</small>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section about reveal" id="about">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1900&auto=format&fit=crop" alt="צילום קולנועי" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">About Visual Art</p>
          <h2>לא רק תמונות. שפה ויזואלית שלמה.</h2>
          <p>
            הצילום בנוי סביב אור, צבע, קומפוזיציה ורגש. כל סט מקבל כיוון ברור:
            חתונה רכה ומרגשת, אופנה חדה ומגזינית, תדמית נקייה או תוכן קצר לרשתות.
          </p>
          <p>
            המטרה היא שכל לקוח ירגיש שהוא מקבל תוצר עם זהות — לא עוד תמונה רגילה,
            אלא פריימים שמספרים סיפור ומרגישים יקר.
          </p>
        </div>
      </section>

      <section className="section services reveal" id="services">
        <div className="section-head right">
          <p className="eyebrow wine">Services</p>
          <h2>מה אפשר לצלם?</h2>
          <p>כל שירות מקבל מסר ברור, קצר ומכובד — בלי עומס ובלי תחושה גנרית.</p>
        </div>
        <div className="service-grid">
          {services.map(([num, title, text]) => (
            <article className="service" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process reveal" id="process">
        <div className="section-head dark">
          <p className="eyebrow">Our Process</p>
          <h2>איך יוצרים תוצאה שנראית יקרה?</h2>
          <p>תהליך מסודר שמתחיל בהבנת הסגנון ומסתיים בעריכה נקייה ומדויקת.</p>
        </div>
        <div className="process-grid">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact reveal" id="contact">
        <div className="contact-copy">
          <p className="eyebrow wine">Book Your Session</p>
          <h2>בואו נבנה צילום שמתאים בדיוק לסגנון שלכם.</h2>
          <p>השאירו פרטים ונחזור עם כיוון צילום, המלצה ללוקיישן והצעת מחיר.</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="שם מלא" />
          <input type="tel" placeholder="טלפון / WhatsApp" />
          <textarea placeholder="איזה צילום תרצו? חתונה, זוגיות, תדמית, אופנה, רילס או רחפן" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <h2>Visual Art</h2>
        <p>Premium photography with a warm editorial soul.</p>
        <div className="socials">
          <a href="#top">TikTok</a>
          <a href="#top">Facebook</a>
          <a href="#top">Instagram</a>
        </div>
        <small>VISUAL ART 2026 ©</small>
      </footer>
    </main>
  );
}
