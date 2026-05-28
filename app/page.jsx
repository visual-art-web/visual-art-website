"use client";

import { useEffect } from "react";
import HeroVideoLayer from "../components/HeroVideoLayer";

const galleryItems = [
  {
    title: "חתונות",
    text: "רגעים אמיתיים, אור רך ועריכה קולנועית",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
    className: "va-gallery-card va-gallery-large",
  },
  {
    title: "זוגיות",
    text: "אינטימיות, תנועה ותחושה טבעית",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "אופנה",
    text: "Editorial clean, סטיילינג וקומפוזיציה",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "תדמית",
    text: "נראות עסקית שמשדרת אמינות ויוקרה",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1900&auto=format&fit=crop",
    className: "va-gallery-card va-gallery-wide",
  },
  {
    title: "רילסים",
    text: "תוכן קצר, חד ומדויק לרשתות",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card",
  },
  {
    title: "רחפן",
    text: "זוויות אוויר שמוסיפות עומק וסיפור",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    className: "va-gallery-card va-gallery-wide",
  },
];

const services = [
  ["חתונות", "צילום חתונות בסגנון קולנועי עם צבעים עמוקים, רגעים אמיתיים ועריכה יוקרתית."],
  ["זוגיות", "סשנים רומנטיים עם תאורה טבעית, תנועה רכה ואווירה שנראית כמו סצנה מתוך סרט."],
  ["תדמית", "צילומי תדמית לעסקים, יוצרים ומותגים שרוצים להיראות מקצועיים ברמה אחרת."],
  ["אופנה", "הפקות אופנה עם קומפוזיציה נקייה, סטיילינג מדויק וצבעים בסגנון editorial luxury."],
  ["רילסים", "תוכן קצר לרשתות חברתיות עם צילום דינמי, קצב נכון ועריכה שמושכת תשומת לב."],
  ["רחפן", "זוויות אוויר יוקרתיות לצילום אירועים, לוקיישנים, נדל״ן ותוכן cinematic premium."],
];

const process = [
  ["אפיון קצר", "מבינים מה מטרת הצילום, איזה סגנון מתאים, מה חשוב להבליט ומה חייבים להרגיש בתוצאה."],
  ["תכנון לוקיישן ואווירה", "בוחרים קומפוזיציה, תאורה, צבעים וזוויות שמתאימות לשפה של המותג או האירוע."],
  ["צילום ועריכה", "מצלמים בצורה רגועה ומדויקת ומסיימים בעריכה נקייה, יוקרתית ולא עמוסה."],
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
        <HeroVideoLayer />

        <nav className="va-navbar" aria-label="ניווט ראשי">
          <a className="va-brand" href="#top" aria-label="VISUAL ART">
            <strong>VISUAL ART</strong>
            <span>CINEMATIC PHOTOGRAPHY</span>
          </a>

          <div className="va-nav-links">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <section className="va-hero-inner va-reveal">
          <div className="va-hero-copy">
            <span className="va-eyebrow">LUXURY CINEMATIC PHOTOGRAPHY</span>
            <h1>צילום יוקרתי עם אווירה קולנועית</h1>
            <p>
              סטודיו צילום בסגנון editorial luxury — חתונות, זוגיות, אופנה,
              תדמית, רילסים ורחפן. כל פריים נבנה עם אור, עומק ועריכה שמרגישה כמו מותג בינלאומי.
            </p>

            <div className="va-buttons">
              <a className="va-button va-button-primary" href="#contact">קבלת הצעת מחיר</a>
              <a className="va-button va-button-secondary" href="#gallery">צפייה בגלריה</a>
            </div>
          </div>
        </section>
      </header>

      <section className="va-intro va-reveal">
        <div className="va-section-head">
          <span className="va-eyebrow">THE VISUAL ART EXPERIENCE</span>
          <h2>כל פריים נבנה כמו סצנה.</h2>
          <p>
            אנחנו משלבים צילום מדויק, תאורה נכונה ועריכה מוקפדת כדי להפוך כל רגע
            לתמונה שמרגישה עמוקה, נקייה ובלתי נשכחת.
          </p>
        </div>

        <div className="va-intro-cards">
          <article><h3>אווירה קולנועית</h3><p>צבעים עמוקים, קונטרסט מדויק ותחושה של סרט פרימיום.</p></article>
          <article><h3>עריכה יוקרתית</h3><p>עיבוד נקי שמבליט רגש, אור ועומק בלי להעמיס על התמונה.</p></article>
          <article><h3>חוויית צילום רגועה</h3><p>ליווי מקצועי מהרגע הראשון ועד למסירת התוצר הסופי.</p></article>
        </div>
      </section>

      <section className="va-section va-gallery va-reveal" id="gallery">
        <div className="va-section-head">
          <span className="va-eyebrow">SELECTED WORK</span>
          <h2>גלריה קולנועית</h2>
          <p>
            חלוקה נקייה לפי קטגוריות צילום, עם תמונות רחבות, תוויות ברורות ונראות יוקרתית שמתאימה לאתר של צלמת פרימיום.
          </p>
        </div>

        <div className="va-gallery-grid">
          {galleryItems.map((item) => (
            <figure className={item.className} key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="va-section va-about va-reveal" id="about">
        <div className="va-about-copy">
          <span className="va-eyebrow">ABOUT VISUAL ART</span>
          <h2>לא מצלמים רק תמונה. יוצרים תחושה שנשארת.</h2>
          <p>
            יש רגעים שלא צריכים רק מצלמה — הם צריכים אור, תנועה, רגש ואווירה.
            VISUAL ART נוצר מתוך אהבה לפריימים קולנועיים, לתאורה עמוקה ולתמונות שמרגישות כמו סצנה מתוך סרט.
          </p>
          <p>
            כל צילום נבנה בקפידה: מהקומפוזיציה, דרך הלוקיישן ועד העריכה הסופית — כדי ליצור תוצאה נקייה, יוקרתית ובלתי נשכחת.
          </p>
        </div>

        <div className="va-about-image">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop"
            alt="צלם בנוף קולנועי"
          />
        </div>
      </section>

      <section className="va-section va-services va-reveal" id="services">
        <div className="va-section-head">
          <span className="va-eyebrow">SERVICES</span>
          <h2>קטגוריות צילום</h2>
          <p>כל קטגוריה קיבלה כרטיס נקי, קריא ומסודר כדי שהלקוח יבין מיד מה הוא מקבל.</p>
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

      <section className="va-process va-reveal">
        <div className="va-section va-process-inner">
          <div className="va-section-head va-section-head-light">
            <span className="va-eyebrow">OUR PROCESS</span>
            <h2>איך נוצר צילום ברמה גבוהה?</h2>
            <p>
              תהליך מסודר שמתחיל בהבנת הסגנון, ממשיך בתכנון מדויק ומסתיים בעריכה נקייה שמרגישה יוקרתית ולא עמוסה.
            </p>
          </div>

          <div className="va-process-grid">
            {process.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
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
          <h2>בואו ניצור משהו מיוחד.</h2>
          <p>השאירו פרטים ונחזור אליכם עם התאמה אישית לסוג הצילום, הלוקיישן והסגנון הרצוי.</p>
        </div>

        <form className="va-contact-form">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון / WhatsApp" />
          <textarea placeholder="ספרו בקצרה איזה צילום תרצו, תאריך ולוקיישן אם יש" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="va-footer va-reveal">
        <span className="va-footer-line" />
        <h2>Every frame tells a story.</h2>
        <p>Designed to feel like cinema.</p>

        <div className="va-socials">
          <a href="#" aria-label="Instagram"><span>◎</span><small>Instagram</small></a>
          <a href="#" aria-label="Facebook"><span>f</span><small>Facebook</small></a>
          <a href="#" aria-label="TikTok"><span>♫</span><small>TikTok</small></a>
        </div>

        <div className="va-copyright">© VISUAL ART 2026</div>
      </footer>
    </main>
  );
}
