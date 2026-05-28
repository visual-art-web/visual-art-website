"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const portfolio = [
  {
    tag: "01 / חתונות",
    title: "חתונה שנראית כמו סרט",
    text: "רגעים אמיתיים, אור טבעי ועריכה נקייה שמרגישה יוקרתית בלי להיות מוגזמת.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1900&auto=format&fit=crop",
  },
  {
    tag: "02 / זוגיות",
    title: "אינטימיות, שקט ותנועה",
    text: "סשן זוגי עם הכוונה רגועה, קומפוזיציה מדויקת ואווירה קולנועית.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1700&auto=format&fit=crop",
  },
  {
    tag: "03 / אופנה",
    title: "Fashion Editorial",
    text: "שפה ויזואלית חדה למותגים, סטיילינג, הפקות אישיות ותוכן לרשתות.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1700&auto=format&fit=crop",
  },
  {
    tag: "04 / תדמית",
    title: "להיראות כמו מותג",
    text: "צילומי תדמית לעסקים ויוצרים שרוצים לשדר אמינות, עומק ורמה גבוהה.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop",
  },
];

const categories = [
  ["חתונות", "תיעוד אלגנטי של היום הגדול — מההכנות ועד הרחבה."],
  ["זוגיות", "צילום רגוע, טבעי ומדויק לזוגות שרוצים תמונות עם נשמה."],
  ["אופנה", "הפקות בסגנון מגזין: אור, סטייל, תנועה ונוכחות."],
  ["תדמית", "תמונות שמספרות מי אתם עוד לפני שקוראים מילה."],
  ["רילסים", "תוכן קצר, דינמי וממותג לרשתות חברתיות."],
  ["רחפן", "זוויות אוויר נקיות שמוסיפות גודל, תנועה ויוקרה."],
];

const process = [
  ["שיחה והבנת כיוון", "מגדירים יחד את האווירה, הלוקיישן, הסגנון והמסר."],
  ["בימוי עדין ביום הצילום", "לא מעמידים בכוח — מכוונים בעדינות כדי שהכול ייראה טבעי."],
  ["עריכה נקייה וקולנועית", "צבעים אחידים, קונטרסט מדויק ותוצאה שלא נראית פילטרית."],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <aside className="side-menu" aria-label="תפריט ראשי">
        <a className="brand" href="#top" aria-label="Visual Art">
          <span>VISUAL</span>
          <strong>ART</strong>
        </a>

        <nav className="menu-links">
          <a href="#work">עבודות</a>
          <a href="#categories">קטגוריות</a>
          <a href="#story">הסיפור</a>
          <a href="#process">תהליך</a>
          <a href="#contact">יצירת קשר</a>
        </nav>

        <div className="side-bottom">
          <a href="#contact" className="side-cta">לקבלת הצעה</a>
          <span>צילום / וידאו / רחפן</span>
        </div>
      </aside>

      <header className="mobile-bar">
        <a className="mobile-brand" href="#top">VISUAL ART</a>
        <a className="mobile-cta" href="#contact">דברו איתי</a>
      </header>

      <section className="opening-scene" id="top">
        <HeroVideoLayer />
        <div className="video-dim" />
        <div className="film-grain" />

        <div className="opening-content reveal">
          <p className="micro">סטודיו צילום קולנועי</p>
          <h1>לא עוד תמונות רגילות. רגעים שנראים כמו סצנה.</h1>
          <p className="lead">
            צילום חתונות, זוגיות, תדמית, אופנה ותוכן לרשתות — בשפה נקייה, יוקרתית ומדויקת שמתאימה לאנשים ולמותגים שרוצים להיראות אחרת.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-btn">לראות עבודות</a>
            <a href="#contact" className="text-link">לקביעת שיחה</a>
          </div>
        </div>

        <div className="scene-note">
          <span>VISUAL STORIES</span>
          <span>2026</span>
        </div>
      </section>

      <section className="manifest reveal" aria-label="משפט מותג">
        <p>כל פריים צריך להרגיש חי, מדויק ובלתי נשכח.</p>
      </section>

      <section className="work-section" id="work">
        <div className="section-intro reveal">
          <span className="micro">Portfolio</span>
          <h2>עבודות נבחרות</h2>
          <p>במקום גלריה רגילה — מקבץ עבודות שמציג את הסגנון: טבעי, קולנועי, אלגנטי ועם הרבה אווירה.</p>
        </div>

        <div className="editorial-work">
          {portfolio.map((item, index) => (
            <article className={`work-card work-${index + 1} reveal`} key={item.title}>
              <div className="work-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="work-copy">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="category-head reveal">
          <span className="micro">Services</span>
          <h2>תחומי צילום</h2>
        </div>

        <div className="category-list">
          {categories.map(([title, text], index) => (
            <article className="category-row reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-photo reveal">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" alt="אווירת צילום קולנועית" />
        </div>
        <div className="story-copy reveal">
          <span className="micro">About</span>
          <h2>הצילום מתחיל עוד לפני שלוחצים על הכפתור.</h2>
          <p>
            אנחנו בונים אווירה: אור, תנועה, לוקיישן, צבעים ורגעים אמיתיים. המטרה היא לא רק לתעד — אלא ליצור תחושה שאפשר לחזור אליה גם שנים אחרי.
          </p>
          <p>
            כל פרויקט מקבל שפה משלו, אבל הקו נשאר ברור: נקי, עמוק, קולנועי ואלגנטי.
          </p>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-intro narrow reveal">
          <span className="micro">Experience</span>
          <h2>איך זה עובד</h2>
        </div>

        <div className="process-lines">
          {process.map(([title, text], index) => (
            <article className="process-line reveal" key={title}>
              <span>{`0${index + 1}`}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy reveal">
          <span className="micro">Contact</span>
          <h2>בואו נבנה את הסיפור הוויזואלי שלכם.</h2>
          <p>השאירו פרטים ונחזור אליכם עם כיוון צילום, זמינות והצעת מחיר מסודרת.</p>
          <div className="contact-details">
            <a href="tel:+972500000000">050-000-0000</a>
            <a href="mailto:hello@visual-art.co.il">hello@visual-art.co.il</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <form className="contact-form reveal">
          <label>
            שם מלא
            <input type="text" name="name" placeholder="איך לפנות אליכם?" />
          </label>
          <label>
            טלפון
            <input type="tel" name="phone" placeholder="מספר לחזרה" />
          </label>
          <label>
            מה תרצו לצלם?
            <textarea name="message" placeholder="חתונה, זוגיות, תדמית, אופנה, רילס..." />
          </label>
          <button type="submit">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <strong>VISUAL ART</strong>
        <span>Luxury cinematic photography studio</span>
      </footer>
    </main>
  );
}
