"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const portfolio = [
  {
    label: "חתונות",
    title: "רגעים שמרגישים כמו סרט",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
    className: "va-shot va-shot-large",
  },
  {
    label: "זוגיות",
    title: "אינטימיות, אור ותנועה",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    className: "va-shot va-shot-tall",
  },
  {
    label: "אופנה",
    title: "שפה ויזואלית של מגזין",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    className: "va-shot",
  },
  {
    label: "תדמית",
    title: "מותג שנראה מדויק",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop",
    className: "va-shot",
  },
  {
    label: "רילסים",
    title: "תוכן קצר עם נוכחות",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
    className: "va-shot va-shot-wide",
  },
  {
    label: "רחפן",
    title: "זווית גבוהה, תחושה גדולה",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    className: "va-shot",
  },
];

const experiences = [
  ["01", "בימוי", "לא רק מצלמים — מכוונים את האור, התנועה והתחושה כדי שהצילום ירגיש חי."],
  ["02", "אווירה", "בונים mood מדויק לפי הסיפור: רך, דרמטי, אלגנטי או מלא אנרגיה."],
  ["03", "צילום", "עבודה רגועה ומקצועית, עם תשומת לב לפרטים הקטנים שמרימים את כל הפריים."],
  ["04", "עריכה", "צבעים אחידים, קונטרסט קולנועי וגימור נקי שלא מרגיש כבד או מלאכותי."],
];

const services = ["חתונות", "זוגיות", "אופנה", "תדמית", "רילסים", "רחפן", "אירועים", "עסקים"];

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".va-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("va-visible");
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="va-site" id="top">
      <header className="va-hero">
        <HeroVideoLayer />
        <div className="va-film-grain" aria-hidden="true" />

        <nav className="va-nav" aria-label="תפריט ראשי">
          <a className="va-logo" href="#top" aria-label="VISUAL ART">
            <span>VISUAL</span>
            <strong>ART</strong>
          </a>

          <div className="va-menu">
            <a href="#portfolio">עבודות</a>
            <a href="#story">סיפור</a>
            <a href="#experience">חוויה</a>
            <a href="#contact">קשר</a>
          </div>

          <a className="va-nav-action" href="#contact">לתיאום צילום</a>
        </nav>

        <section className="va-hero-content va-reveal">
          <p className="va-kicker">סטודיו צילום קולנועי · ישראל</p>
          <h1>
            לא מצלמים רגעים.
            <span>מביימים אותם.</span>
          </h1>
          <p className="va-hero-text">
            צילום חתונות, זוגיות, אופנה ותדמית בשפה ויזואלית עמוקה, אלגנטית ומדויקת — עם אור, תנועה ועריכה שמרגישים כמו סרט.
          </p>
          <div className="va-hero-actions">
            <a href="#portfolio" className="va-link-primary">לראות עבודות</a>
            <a href="#contact" className="va-link-secondary">לקבלת הצעה</a>
          </div>
        </section>

        <aside className="va-hero-note va-reveal">
          <span>VISUAL STORIES</span>
          <p>אווירה, תאורה ורגש — בכל פריים.</p>
        </aside>
      </header>

      <section className="va-intro va-reveal">
        <div className="va-intro-title">
          <span>גישה חדשה לצילום</span>
          <h2>אתר שמרגיש כמו פתיחה של סרט, לא כמו תבנית רגילה.</h2>
        </div>
        <p>
          כל אזור נבנה עם הרבה אוויר, טיפוגרפיה נקייה, צבעים עמוקים ותנועה עדינה. המטרה היא לגרום ללקוח להבין כבר בשנייה הראשונה שהוא הגיע למותג צילום ברמה גבוהה.
        </p>
      </section>

      <section className="va-section va-portfolio va-reveal" id="portfolio">
        <div className="va-section-header">
          <p>PORTFOLIO</p>
          <h2>עבודות נבחרות</h2>
        </div>

        <div className="va-editorial-grid">
          {portfolio.map((item) => (
            <figure className={item.className} key={item.label}>
              <img src={item.image} alt={item.label} />
              <figcaption>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="va-story va-reveal" id="story">
        <div className="va-story-image">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop" alt="צילום קולנועי" />
        </div>
        <div className="va-story-copy">
          <p className="va-kicker">הסיפור שלנו</p>
          <h2>כל פריים צריך להרגיש חי.</h2>
          <p>
            אנחנו לא רודפים אחרי תמונה יפה בלבד. אנחנו בונים סצנה: אור נכון, תנועה טבעית, קומפוזיציה נקייה ורגע שנשאר בזיכרון.
          </p>
          <p>
            החוויה באתר ובצילום עצמו צריכה להרגיש מדויקת, רגועה ויוקרתית — בלי עומס, בלי רעש, בלי משהו שנראה כמו כולם.
          </p>
        </div>
      </section>

      <section className="va-section va-experience va-reveal" id="experience">
        <div className="va-section-header va-section-header-wide">
          <p>THE EXPERIENCE</p>
          <h2>מה קורה מאחורי הפריים?</h2>
        </div>

        <div className="va-experience-list">
          {experiences.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="va-services-strip va-reveal" id="services">
        <div className="va-services-inner">
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="va-quote va-reveal">
        <p>“התמונה הנכונה לא רק נראית טוב — היא גורמת למי שצופה בה להרגיש משהו.”</p>
      </section>

      <section className="va-contact va-reveal" id="contact">
        <div className="va-contact-copy">
          <p className="va-kicker">BOOKING</p>
          <h2>רוצים צילום שנראה אחרת?</h2>
          <p>
            השאירו פרטים ונבנה יחד את הכיוון המתאים: חתונה, זוגיות, תדמית, רילס, אופנה או פרויקט מיוחד.
          </p>
          <div className="va-contact-links">
            <a href="tel:+972500000000">050-000-0000</a>
            <a href="mailto:hello@visualart.co.il">hello@visualart.co.il</a>
          </div>
        </div>

        <form className="va-form">
          <label>
            <span>שם מלא</span>
            <input type="text" placeholder="איך לפנות אליכם?" />
          </label>
          <label>
            <span>טלפון</span>
            <input type="tel" placeholder="מספר ליצירת קשר" />
          </label>
          <label>
            <span>סוג צילום</span>
            <input type="text" placeholder="חתונה / זוגיות / תדמית / אחר" />
          </label>
          <label>
            <span>פרטים נוספים</span>
            <textarea placeholder="תאריך, לוקיישן, סגנון וכל פרט שחשוב לדעת" />
          </label>
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="va-footer">
        <a className="va-footer-logo" href="#top">VISUAL ART</a>
        <div className="va-footer-menu">
          <a href="#portfolio">עבודות</a>
          <a href="#story">סיפור</a>
          <a href="#experience">חוויה</a>
          <a href="#contact">קשר</a>
        </div>
        <p>© 2026 VISUAL ART · CINEMATIC PHOTOGRAPHY</p>
      </footer>
    </main>
  );
}
