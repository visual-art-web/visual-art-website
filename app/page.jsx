"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const portfolio = [
  ["חתונות", "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop", "רגעים אמיתיים עם תאורה של סרט."],
  ["אופנה", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1700&auto=format&fit=crop", "קומפוזיציה נקייה, נוכחות וביטחון."],
  ["זוגיות", "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1700&auto=format&fit=crop", "אינטימיות, תנועה ואווירה חמה."],
  ["תדמית", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1900&auto=format&fit=crop", "מותג אישי שמרגיש חד ומדויק."],
  ["רילסים", "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1700&auto=format&fit=crop", "תוכן קצר עם קצב וסטייל."],
  ["רחפן", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1700&auto=format&fit=crop", "זוויות אוויר שמוסיפות נשימה."],
];

const flow = [
  ["01", "בימוי", "לא מעמידים אתכם מול מצלמה. בונים סצנה, תנועה, אור ותחושה."],
  ["02", "אווירה", "בחירת לוקיישן, צבעים, קצב ותאורה שמרגישים כמו פריים מסרט."],
  ["03", "צילום", "עבודה רגועה, מדויקת ולא מאולצת — כדי שהרגע ירגיש טבעי."],
  ["04", "עריכה", "צבע, עומק וקונטרסט נקי שמחבר את כל הסיפור לשפה אחת."],
];

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.18 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="va-app">
      <aside className="side-nav" aria-label="ניווט ראשי">
        <a className="brand-mark" href="#top" aria-label="חזרה להתחלה">
          <span>VISUAL</span>
          <b>ART</b>
        </a>
        <nav>
          <a href="#works">עבודות</a>
          <a href="#story">סיפור</a>
          <a href="#flow">חוויה</a>
          <a href="#contact">דיבור</a>
        </nav>
        <div className="side-note">צילום / קולנוע / רגש</div>
      </aside>

      <section className="scene scene-video" id="top">
        <HeroVideoLayer />
        <div className="film-noise" />
        <div className="hero-statement reveal">
          <p className="kicker">סטודיו צילום קולנועי</p>
          <h1>
            לא מצלמים רגעים.
            <br />
            יוצרים סצנות.
          </h1>
          <p className="hero-text">
            צילום שמרגיש כמו פריים מתוך סרט — אור מדויק, תנועה טבעית, עריכה עמוקה ושפה ויזואלית שנשארת בזיכרון.
          </p>
          <div className="hero-actions">
            <a href="#contact">בואו נבנה סיפור</a>
            <a href="#works">לראות עבודות</a>
          </div>
        </div>
        <div className="scroll-cue">גלילה</div>
      </section>

      <section className="marquee-strip" aria-label="תחומי צילום">
        <div>
          <span>חתונות</span><span>אופנה</span><span>זוגיות</span><span>תדמית</span><span>רילסים</span><span>רחפן</span>
          <span>חתונות</span><span>אופנה</span><span>זוגיות</span><span>תדמית</span><span>רילסים</span><span>רחפן</span>
        </div>
      </section>

      <section className="statement-block reveal" id="story">
        <p>VISUAL LANGUAGE</p>
        <h2>כל פריים צריך להרגיש חי — לא יפה בלבד.</h2>
      </section>

      <section className="broken-portfolio" id="works">
        <div className="section-title reveal">
          <p>PORTFOLIO</p>
          <h2>עבודות שנבנות כמו קמפיין.</h2>
        </div>
        <div className="broken-grid">
          {portfolio.map(([title, image, text], index) => (
            <article className={`work work-${index + 1} reveal`} key={title}>
              <img src={image} alt={title} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="flow">
        <div className="section-title reveal">
          <p>THE EXPERIENCE</p>
          <h2>לא עוד יום צילום. תהליך שמרגיש מבוים נכון.</h2>
        </div>
        <div className="flow-list">
          {flow.map(([num, title, text]) => (
            <article className="flow-row reveal" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-scene" id="contact">
        <div className="contact-copy reveal">
          <p>LET'S CREATE</p>
          <h2>יש לכם רגע שצריך להיראות בלתי נשכח?</h2>
          <div className="contact-links">
            <a href="tel:+972000000000">טלפון</a>
            <a href="https://wa.me/972000000000">וואטסאפ</a>
            <a href="https://instagram.com/">אינסטגרם</a>
          </div>
        </div>
        <form className="contact-form reveal">
          <input type="text" placeholder="שם מלא" />
          <input type="tel" placeholder="טלפון" />
          <input type="text" placeholder="סוג צילום" />
          <textarea placeholder="ספרו בקצרה מה אתם רוצים ליצור" />
          <button type="submit">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer-minimal">
        <span>VISUAL ART</span>
        <p>צילום קולנועי • עריכה עמוקה • חוויה יוקרתית</p>
      </footer>
    </main>
  );
}
