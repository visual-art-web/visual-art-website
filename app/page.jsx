"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const frames = [
  ["חתונות", "רגעים אמיתיים, אור דרמטי ותנועה שמרגישה כמו סרט.", "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop"],
  ["אופנה", "קומפוזיציות נקיות, סטיילינג חד ונראות של מגזין בינלאומי.", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1700&auto=format&fit=crop"],
  ["זוגיות", "צילום אינטימי, רגוע, טבעי ומלא אווירה.", "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1700&auto=format&fit=crop"],
  ["תדמית", "מותגים, יוצרים ואנשים שרוצים להיראות אחרת.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1700&auto=format&fit=crop"],
  ["רילסים", "תוכן קצר שמרגיש יוקרתי ולא עוד סרטון רגיל.", "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1700&auto=format&fit=crop"],
  ["רחפן", "פרספקטיבה רחבה, אוויר, תנועה ונוכחות קולנועית.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1700&auto=format&fit=crop"],
];

const experience = [
  ["01", "בימוי", "לא מתחילים מצילום. מתחילים מהרגשה, קצב, תאורה וסיפור."],
  ["02", "אווירה", "כל לוקיישן מקבל שפה: צל, עומק, צבע ותנועה."],
  ["03", "צילום", "הפריים נבנה בזמן אמת — בלי עומס, בלי לחץ, עם דיוק."],
  ["04", "עריכה", "צבעים קולנועיים, עור טבעי, קונטרסט נקי ותוצר שמרגיש יקר."],
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="site">
      <header className="film-opening" id="top">
        <HeroVideoLayer />
        <div className="film-grain" />
        <nav className="floating-menu" aria-label="ניווט ראשי">
          <a className="brand" href="#top" aria-label="VISUAL ART דף הבית">
            <span>VISUAL</span>
            <strong>ART</strong>
          </a>
          <div className="menu-links">
            <a href="#portfolio">עבודות</a>
            <a href="#story">סיפור</a>
            <a href="#experience">חוויה</a>
            <a href="#contact">קשר</a>
          </div>
          <a className="menu-cta" href="#contact">להזמנת צילום</a>
        </nav>

        <section className="opening-copy reveal">
          <p className="kicker">סטודיו צילום קולנועי</p>
          <h1>
            לא מצלמים רגעים.
            <br />
            יוצרים סצנות.
          </h1>
          <p className="lead">
            צילום בעברית, בקצב של מותג בינלאומי: אור, תנועה, רגש ועריכה שנראית כמו פריים מתוך סרט.
          </p>
          <div className="hero-actions">
            <a href="#portfolio">לראות עבודות</a>
            <a href="#contact">לקביעת שיחה</a>
          </div>
        </section>

        <div className="opening-index" aria-hidden="true">
          <span>RTL</span>
          <span>CINEMA</span>
          <span>2026</span>
        </div>
      </header>

      <section className="marquee-strip" aria-label="תחומי צילום">
        <div className="marquee-track">
          <span>חתונות</span><span>אופנה</span><span>תדמית</span><span>זוגיות</span><span>רילסים</span><span>רחפן</span>
          <span>חתונות</span><span>אופנה</span><span>תדמית</span><span>זוגיות</span><span>רילסים</span><span>רחפן</span>
        </div>
      </section>

      <section className="manifest reveal" id="story">
        <div className="statement-number">01</div>
        <div>
          <p className="kicker">הגישה שלנו</p>
          <h2>כל פריים צריך להרגיש חי — לא מסודר מדי, לא מלאכותי, לא עוד תמונה יפה.</h2>
        </div>
      </section>

      <section className="portfolio reveal" id="portfolio">
        <div className="section-title">
          <p className="kicker">עבודות נבחרות</p>
          <h2>גלריה שבורה. כמו מגזין. לא כמו תבנית.</h2>
        </div>

        <div className="broken-grid">
          {frames.map(([title, text, image], i) => (
            <figure className={`frame frame-${i + 1}`} key={title}>
              <img src={image} alt={title} />
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="editorial-story reveal">
        <div className="portrait-stack">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1700&auto=format&fit=crop" alt="צלם בעבודה" />
          <span>VISUAL DIRECTION</span>
        </div>
        <div className="story-text">
          <p className="kicker">מאחורי העדשה</p>
          <h2>לא מחפשים רק יופי. מחפשים נוכחות.</h2>
          <p>
            לפני כל צילום בונים שפה: איזה אור מתאים, איזה קצב נכון, מה צריך להרגיש בפריים, ואיך הופכים את המצולם למרכז של סיפור ויזואלי.
          </p>
        </div>
      </section>

      <section className="experience reveal" id="experience">
        <div className="section-title side-title">
          <p className="kicker">The Experience</p>
          <h2>תהליך צילום שמרגיש כמו בימוי.</h2>
        </div>
        <div className="experience-rows">
          {experience.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-wall reveal">
        <p>“צילום טוב לא רק מתעד. הוא משנה את הדרך שבה זוכרים את הרגע.”</p>
      </section>

      <section className="contact reveal" id="contact">
        <div className="contact-copy">
          <p className="kicker">בואו נבנה סצנה</p>
          <h2>רוצה צילום שנראה אחרת?</h2>
          <p>השאירו פרטים ונחזור אליכם עם כיוון צילום, זמינות והצעת מחיר מסודרת.</p>
          <div className="contact-links">
            <a href="tel:+972000000000">טלפון</a>
            <a href="https://wa.me/972000000000">WhatsApp</a>
            <a href="https://instagram.com/">Instagram</a>
          </div>
        </div>

        <form className="contact-form">
          <label>
            שם מלא
            <input type="text" placeholder="איך לפנות אליך?" />
          </label>
          <label>
            טלפון
            <input type="tel" placeholder="מספר לחזרה" />
          </label>
          <label>
            סוג צילום
            <input type="text" placeholder="חתונה / אופנה / תדמית / אחר" />
          </label>
          <label>
            הודעה
            <textarea placeholder="כמה מילים על מה שצריך לצלם" />
          </label>
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <a className="brand" href="#top"><span>VISUAL</span><strong>ART</strong></a>
        <p>© 2026 — Cinematic Photography Studio</p>
      </footer>
    </main>
  );
}
