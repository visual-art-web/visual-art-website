export default function Home() {
  return (
    <main className="site">
      <section className="hero">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.coverr.co/videos/coverr-woman-taking-pictures-on-the-beach-1561758222447?download=1080p"
        />

        <div className="heroOverlay" />

        <header className="navbar">
          <div className="logoWrap">
            <div className="logoCircle">VA</div>

            <div>
              <h2>VISUAL ART</h2>
              <span>LUXURY PHOTOGRAPHY STUDIO</span>
            </div>
          </div>

          <nav>
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#contact">יצירת קשר</a>
          </nav>

          <a className="quoteBtn" href="#contact">
            קבלת הצעת מחיר
          </a>
        </header>

        <div className="heroContent">
          <p className="smallTitle">LUXURY CINEMATIC PHOTOGRAPHY</p>

          <h1>
            צילום שמרגיש כמו
            <br />
            סרט יוקרתי.
          </h1>

          <p className="heroText">
            סטודיו לצילום זוגיות, אופנה, משפחה ותוכן פרימיום —
            עם צבעים קולנועיים, תאורה עמוקה וחוויית צילום
            ברמה אחרת.
          </p>

          <div className="heroButtons">
            <a className="primaryBtn" href="#contact">
              אני רוצה הצעת מחיר
            </a>

            <a className="secondaryBtn" href="#gallery">
              צפייה בגלריה
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionTitle">
          <span>SERVICES</span>
          <h2>שירותי צילום פרימיום</h2>
        </div>

        <div className="servicesGrid">
          <div className="serviceCard">
            <h3>צילומי זוגיות</h3>
            <p>צילום רגשי, קולנועי ויוקרתי באווירת Fine Art.</p>
          </div>

          <div className="serviceCard">
            <h3>צילום אופנה</h3>
            <p>קונספטים ויזואליים עם תאורה ברמה מגזינית.</p>
          </div>

          <div className="serviceCard">
            <h3>צילומי משפחה</h3>
            <p>רגעים אמיתיים עם צבעים חמים ותחושה טבעית.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="sectionTitle">
          <span>SELECTED WORK</span>
          <h2>גלריה קולנועית</h2>
        </div>

        <div className="galleryGrid">
          <div className="galleryItem tall">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="galleryItem">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="galleryItem wide">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="galleryItem">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <span className="smallTitle">START YOUR STORY</span>

          <h2>
            רוצה שהצילומים שלך
            <br />
            יראו ברמה אחרת?
          </h2>

          <p>
            השאירו פרטים ונחזור אליכם עם התאמה אישית לסגנון,
            ללוקיישן ולקונספט המדויק עבורכם.
          </p>
        </div>

        <form className="contactForm">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <input placeholder="סוג צילום רצוי" />
          <textarea placeholder="ספרו קצת על הצילום שאתם רוצים" />
          <button>שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <h3>VISUAL ART</h3>
          <p>Luxury Photography Studio</p>
        </div>

        <div className="socials">
          <a>Instagram</a>
          <a>TikTok</a>
          <a>Facebook</a>
          <a>WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
