const services = [
  ["חתונות", "צילום חתונות בסגנון קולנועי עם צבעים עמוקים, רגעים אמיתיים ועריכה יוקרתית."],
  ["זוגיות", "סשנים רומנטיים עם תאורה טבעית ואווירה שנראית כמו סצנה מתוך סרט."],
  ["תדמית", "צילומי תדמית לעסקים, יוצרים ומותגים שרוצים להיראות ברמה אחרת."],
  ["אופנה", "הפקות אופנה עם קומפוזיציה נקייה, סטיילינג וצבעים editorial luxury."],
  ["רילסים", "תוכן קצר לרשתות חברתיות עם צילום דינמי ועריכה שמושכת תשומת לב."],
  ["רחפן", "זוויות אוויר יוקרתיות לצילום אירועים, לוקיישנים ותוכן cinematic premium."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="hero">
        <nav className="navbar">
          <a className="brand" href="#top">
            <strong>VISUAL ART</strong>
            <span>CAPTURING MOMENTS, CREATING MEMORIES</span>
          </a>

          <div className="navLinks">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <section className="heroGrid">
          <div className="heroImage" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop" alt="" />
          </div>

          <div className="heroCopy">
            <span className="eyebrow">LUXURY CINEMATIC PHOTOGRAPHY</span>
            <h1>צילום יוקרתי<br />עם אווירה קולנועית</h1>
            <p>
              סטודיו צילום בסגנון editorial luxury — זוגיות, אופנה ותוכן פרימיום
              עם תאורה דרמטית ותחושה של מותג בינלאומי.
            </p>
            <div className="heroActions">
              <a className="goldBtn" href="#contact">קבלת הצעת מחיר</a>
              <a className="ghostBtn" href="#gallery">צפייה בגלריה</a>
            </div>
          </div>
        </section>
      </header>

      <section className="gallerySection" id="gallery">
        <div className="sectionText">
          <span className="eyebrow">SELECTED WORK</span>
          <h2>גלריה קולנועית</h2>
          <p>
            פריימים נבחרים מתוך עולמות הצילום שלנו — חתונות, זוגיות, אופנה,
            תדמית, רילסים ורחפן. גלריה רחבה ונקייה שמרגישה כמו מגזין.
          </p>
        </div>

        <div className="galleryGrid">
          <figure className="shot shotLarge">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop" alt="" />
            <figcaption>חתונות</figcaption>
          </figure>
          <figure className="shot">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop" alt="" />
            <figcaption>זוגיות</figcaption>
          </figure>
          <figure className="shot">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop" alt="" />
            <figcaption>אופנה</figcaption>
          </figure>
          <figure className="shot shotWide">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop" alt="" />
            <figcaption>תדמית</figcaption>
          </figure>
          <figure className="shot">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" alt="" />
            <figcaption>רחפן</figcaption>
          </figure>
          <figure className="shot">
            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1400&auto=format&fit=crop" alt="" />
            <figcaption>רילסים</figcaption>
          </figure>
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutCopy">
          <span className="eyebrow">ABOUT VISUAL ART</span>
          <h2>לא מצלמים רק תמונה.<br />יוצרים תחושה שנשארת.</h2>
          <p>
            יש רגעים שלא צריכים רק מצלמה — הם צריכים אור, תנועה, רגש ואווירה.
            VISUAL ART נוצר מתוך אהבה לפריימים קולנועיים, לתאורה עמוקה ולתמונות
            שמרגישות כמו סצנה מתוך סרט.
          </p>
          <p>
            כל צילום נבנה בקפידה: מהקומפוזיציה, דרך הלוקיישן ועד העריכה הסופית —
            כדי ליצור תוצאה נקייה, יוקרתית ובלתי נשכחת.
          </p>
        </div>

        <div className="aboutPhoto">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1500&auto=format&fit=crop" alt="" />
        </div>
      </section>

      <section className="services" id="services">
        {services.map(([title, text]) => (
          <article className="service" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="contact" id="contact">
        <div className="contactCopy">
          <span className="eyebrow">BOOK YOUR SESSION</span>
          <h2>בואו ניצור משהו מיוחד.</h2>
        </div>

        <form className="contactForm">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון / WhatsApp" />
          <textarea placeholder="ספרו בקצרה איזה צילום תרצו, תאריך ולוקיישן אם יש" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerQuote">
          <span className="footerDivider"></span>
          <h2>Every frame tells a story.</h2>
          <p>Designed to feel like cinema.</p>
        </div>

        <div className="footerSocials">
          <a href="#" aria-label="TikTok">
            <span className="icon">♬</span>
            <small>TikTok</small>
          </a>
          <a href="#" aria-label="Facebook">
            <span className="icon">f</span>
            <small>Facebook</small>
          </a>
          <a href="#" aria-label="Instagram">
            <span className="icon">◎</span>
            <small>Instagram</small>
          </a>
        </div>

        <div className="copyright">© VISUAL ART 2026</div>
      </footer>
    </main>
  );
}
