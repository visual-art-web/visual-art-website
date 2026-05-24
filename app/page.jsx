const gallery = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
];

export default function Home() {
  return (
    <main className="site" id="top">
      <header className="hero">
        <div className="nav">
          <a className="brand" href="#top" aria-label="Visual Art">
            <span className="brandName">VISUAL ART</span>
            <span className="brandTag">CAPTURING MOMENTS, CREATING MEMORIES</span>
          </a>

          <nav className="menu">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#contact">יצירת קשר</a>
          </nav>

          <div className="actions">
            <a className="whatsapp" href="https://wa.me/972000000000">WhatsApp</a>
            <a className="quote" href="#contact">קבלת הצעת מחיר</a>
          </div>
        </div>

        <section className="heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">LUXURY PHOTOGRAPHY STUDIO</span>
            <h1>צילום שמרגיש כמו<br />סרט יוקרתי.</h1>
            <p>
              סטודיו לצילום זוגיות, אופנה, אירועים ותוכן פרימיום —
              עם תאורה עמוקה, צבעים קולנועיים וחוויה ויזואלית בלתי נשכחת.
            </p>
            <div className="heroButtons">
              <a className="goldBtn" href="#contact">אני רוצה הצעת מחיר</a>
              <a className="outlineBtn" href="#gallery">צפייה בגלריה</a>
            </div>
          </div>

          <div className="heroPhoto">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop"
              alt="צילום מקצועי"
            />
            <div className="goldShape" />
          </div>
        </section>
      </header>

      <section className="section workIntro" id="about">
        <span className="lineTitle">VISUAL STORY</span>
        <h2>לא עוד צילום רגיל — אלא חוויה ויזואלית עם נוכחות.</h2>
        <p>
          כל פריים נבנה כמו סצנה: תאורה, קומפוזיציה, צבע, תנועה ועריכה שמרגישים נקיים,
          יוקרתיים ומדויקים.
        </p>
      </section>

      <section className="section" id="gallery">
        <div className="sectionHead">
          <span>RECENT WORK</span>
          <h2>גלריה נבחרת</h2>
        </div>

        <div className="galleryGrid">
          {gallery.map((src, i) => (
            <figure className={`galleryCard card${i + 1}`} key={src}>
              <img src={src} alt="" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionHead">
          <span>OUR CATEGORIES</span>
          <h2>שירותי צילום</h2>
        </div>

        <div className="categoryGrid">
          <article>
            <h3>צילומי זוגיות</h3>
            <p>אווירה קולנועית, רגישה ונקייה — לסט תמונות שמרגיש כמו סיפור.</p>
          </article>
          <article>
            <h3>צילום אופנה</h3>
            <p>הפקות פרימיום למותגים, יוצרים ותוכן שצריך להיראות יקר.</p>
          </article>
          <article>
            <h3>אירועים ובוטיק</h3>
            <p>צילום מוקפד לאירועים קטנים, חופות, הצעות וימי צילום מיוחדים.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <form>
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <input placeholder="סוג צילום רצוי" />
          <textarea placeholder="ספרו בקצרה מה תרצו לצלם" />
          <button>שליחת פנייה</button>
        </form>

        <div>
          <span className="lineTitle">START YOUR STORY</span>
          <h2>רוצה שהצילומים שלך יראו ברמה אחרת?</h2>
          <p>השאירו פרטים ונחזור אליכם עם התאמה אישית לסגנון, ללוקיישן ולקונספט.</p>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>VISUAL ART</strong>
          <p>CAPTURING MOMENTS, CREATING MEMORIES</p>
        </div>
        <div className="social">
          <a>Instagram</a>
          <a>Facebook</a>
          <a>TikTok</a>
          <a>WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
