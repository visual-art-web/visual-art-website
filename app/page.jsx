const gallery = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop",
];

const services = [
  {
    title: "צילומי זוגיות",
    text: "סשן קולנועי, רגשי ואלגנטי לזוגות שרוצים תמונות שנראות כמו סיפור.",
  },
  {
    title: "צילום אופנה ותדמית",
    text: "הפקות עם תאורה דרמטית, סטיילינג נקי ונראות של מגזין יוקרתי.",
  },
  {
    title: "בת מצווה ואירועי בוטיק",
    text: "חוויה מצולמת ומוקפדת שמרגישה כמו הפקה אישית ברמה גבוהה.",
  },
  {
    title: "אלבומים וקנבסים",
    text: "הפיכת רגעים נבחרים לפריטי Fine Art לבית — אלבומים, קנבסים והדפסות.",
  },
];

export default function Home() {
  return (
    <main className="site" id="top">
      <header className="hero">
        <nav className="topNav">
          <a className="brand" href="#top">
            <span className="brandName">VISUAL ART</span>
            <span className="brandSlogan">CAPTURING MOMENTS, CREATING MEMORIES</span>
          </a>

          <div className="menu">
            <a href="#portfolio">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#experience">חוויה</a>
            <a href="#contact">יצירת קשר</a>
          </div>

          <a className="navButton" href="#contact">קבלת הצעת מחיר</a>
        </nav>

        <section className="heroLayout">
          <div className="heroText">
            <span className="overline">LUXURY CINEMATIC PHOTOGRAPHY</span>
            <h1>צילום שמרגיש כמו<br />סצנה מתוך סרט.</h1>
            <p>
              סטודיו צילום יוקרתי לזוגיות, אופנה, תדמית, בת מצווה ומוצרי Fine Art —
              עם אור דרמטי, צבעים עמוקים ותחושה של מותג פרימיום.
            </p>

            <div className="heroActions">
              <a className="primary" href="#contact">אני רוצה הצעת מחיר</a>
              <a className="secondary" href="#portfolio">לצפייה בגלריה</a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="circleGlow"></div>
            <img
              className="mainPhoto"
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1500&auto=format&fit=crop"
              alt="צילום מקצועי"
            />
            <div className="floatingCard">
              <span>Fine Art</span>
              <strong>Editorial Mood</strong>
            </div>
          </div>
        </section>
      </header>

      <section className="intro" id="experience">
        <span className="overline">VISUAL EXPERIENCE</span>
        <h2>האתר צריך להרגיש כמו סטודיו צילום ברמה גבוהה — נקי, עמוק ומדויק.</h2>
        <p>
          כל חלק באתר בנוי כדי לייצר אמון: קומפוזיציה מסודרת, צבעים יוקרתיים,
          גלריה מרכזית וטופס פנייה ברור שמוביל להזמנה.
        </p>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="sectionHead">
          <span className="overline">SELECTED PORTFOLIO</span>
          <h2>גלריה נבחרת</h2>
        </div>

        <div className="portfolioGrid">
          {gallery.map((src, index) => (
            <figure className={`portfolioItem item${index + 1}`} key={src}>
              <img src={src} alt="" />
            </figure>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="sectionHead">
          <span className="overline">PREMIUM SERVICES</span>
          <h2>שירותי צילום</h2>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="signature">
        <div>
          <span className="overline">SIGNATURE STYLE</span>
          <h2>תאורה קולנועית. עריכה נקייה. תוצאה שנראית יקרה.</h2>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactText">
          <span className="overline">START YOUR STORY</span>
          <h2>רוצה לקבל הצעת מחיר מותאמת?</h2>
          <p>
            השאירו פרטים ונחזור אליכם לתיאום סגנון, לוקיישן, סוג צילום ותוצר סופי.
          </p>
        </div>

        <form className="contactForm">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <input placeholder="סוג צילום רצוי" />
          <textarea placeholder="ספרו בקצרה מה אתם מחפשים" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>VISUAL ART</strong>
          <p>CAPTURING MOMENTS, CREATING MEMORIES</p>
        </div>

        <div className="footerLinks">
          <a>Instagram</a>
          <a>Facebook</a>
          <a>TikTok</a>
          <a>WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
