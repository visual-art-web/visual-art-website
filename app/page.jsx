const services = [
  {
    title: 'צילום זוגיות',
    text: 'סשן רגוע, מדויק וקולנועי שמספר את הקשר שלכם דרך אור, תנועה ורגש.',
    tag: 'Couple Session',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'צילום תדמית',
    text: 'נראות עסקית שמייצרת אמון, סמכות ונוכחות — לאתר, לרשתות ולמותג האישי.',
    tag: 'Brand Portraits',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'צילום אופנה',
    text: 'שפה ויזואלית בסגנון Editorial: קומפוזיציה, סטיילינג, דרמה ואסתטיקה של מגזין.',
    tag: 'Editorial Fashion',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'בת מצווה',
    text: 'חוויה אישית ומרגשת שנראית כמו הפקת אופנה, עם תוצאה שמרגישה פרימיום.',
    tag: 'Bat Mitzvah',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'אלבומים',
    text: 'אלבומי פרימיום מעוצבים בקו נקי, אלגנטי ועל־זמני — מזכרת שנשארת בידיים.',
    tag: 'Fine Art Albums',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'קנבסים',
    text: 'הפיכת רגעים נבחרים לפריטי עיצוב לבית — קנבס, זכוכית ותמונות קיר Fine Art.',
    tag: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1100&q=80'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80'
];

const process = [
  ['01', 'שיחת אפיון', 'מבינים את הסגנון, המטרה, הלוקיישן והתחושה שהצילום צריך להעביר.'],
  ['02', 'קונספט וצילום', 'מתכננים תאורה, קומפוזיציה ואווירה — כדי שכל פריים ירגיש מכוון.'],
  ['03', 'עריכה Fine Art', 'בחירה מוקפדת, עיבוד צבע, ריטוש עדין ויצירת שפה אחידה.'],
  ['04', 'תוצר סופי', 'גלריה דיגיטלית, אלבום, קנבס או הדפסה — לפי הצורך והחוויה.']
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Visual Art home">
          <span className="brand-main">Visual Art</span>
          <span className="brand-sub">Capturing Moments</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">שירותים</a>
          <a href="#portfolio">גלריה</a>
          <a href="#process">התהליך</a>
          <a href="#contact">יצירת קשר</a>
        </nav>
        <a className="header-cta" href="#contact">קבלת הצעת מחיר</a>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-photo hero-photo-main" />
          <div className="hero-photo hero-photo-secondary" />
          <div className="hero-glow" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Modern Cinematic Luxury Photography</p>
          <h1>צילום יוקרתי שמרגיש כמו יצירת אמנות</h1>
          <p className="hero-lead">
            Visual Art יוצר חוויית צילום מוקפדת לזוגיות, תדמית, אופנה, בת מצווה ומוצרי Fine Art — עם תוצאה שמרגישה נקייה, יוקרתית ועל־זמנית.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">קבלת הצעת מחיר</a>
            <a href="#portfolio" className="btn btn-light">צפייה בגלריה</a>
          </div>
          <div className="hero-proof">
            <span>Fine Art Albums</span>
            <span>Brand Portraits</span>
            <span>Editorial Sessions</span>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-label">Visual Philosophy</div>
        <h2>לא עוד סט תמונות. חוויה ויזואלית שמתחילה בקונספט ונגמרת בתוצר שמרגיש יקר.</h2>
        <p>
          כל צילום נבנה מתוך מחשבה על אור, זווית, נוכחות ורגש. המטרה היא ליצור פריימים שמייצגים את האדם, הסיפור או הרגע — בצורה נקייה, אלגנטית ומדויקת.
        </p>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p>Services</p>
          <h2>שירותי צילום</h2>
          <span>כל שירות מוצג כחוויה מלאה — מהתכנון ועד לתוצאה הסופית.</span>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="service-content">
                <span>{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">לקבלת הצעת מחיר</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="portfolio-top">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2>גלריה שמוכרת את החוויה עוד לפני השיחה הראשונה</h2>
          </div>
          <p>
            כרגע מוצגות תמונות דמו. בהמשך נחליף אותן בעבודות האמיתיות שלך ונבנה קטגוריות לפי זוגיות, תדמית, אופנה, בת מצווה, אלבומים וקנבסים.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <div className={`gallery-item item-${index + 1}`} key={src}>
              <img src={src} alt="Visual Art portfolio sample" />
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading light-heading">
          <p>Experience</p>
          <h2>תהליך שמרגיש מקצועי, רגוע ומדויק</h2>
          <span>לקוח שמבין שיש תהליך — מבין שיש מותג רציני.</span>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section">
        <div className="product-card-large">
          <p className="section-kicker">Fine Art Products</p>
          <h2>זיכרונות שלא נשארים רק במסך</h2>
          <p>
            אלבומי פרימיום, קנבסים, הדפסות זכוכית ותמונות קיר הופכים את הצילום למוצר מוחשי — כזה שנשאר בבית ומרגיש כמו פריט עיצוב.
          </p>
        </div>
        <div className="product-list">
          <span>אלבומי פרימיום</span>
          <span>קנבסים מעוצבים</span>
          <span>הדפסות זכוכית</span>
          <span>תמונות קיר Fine Art</span>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Inquiry</p>
          <h2>רוצים לקבל הצעת מחיר מותאמת אישית?</h2>
          <p>
            השאירו פרטים ונחזור אליכם לתיאום סשן צילום שמתאים לסגנון, למטרה ולחוויה שאתם מחפשים.
          </p>
          <a className="whatsapp-box" href="https://wa.me/972000000000" target="_blank" rel="noreferrer">
            <strong>WhatsApp מהיר</strong>
            <span>לחצו כאן לשליחת הודעה ישירה</span>
          </a>
        </div>
        <form className="lead-form">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <select defaultValue="">
            <option value="" disabled>סוג צילום</option>
            <option>זוגיות</option>
            <option>תדמית</option>
            <option>אופנה</option>
            <option>בת מצווה</option>
            <option>אלבומים / קנבסים</option>
          </select>
          <input placeholder="תאריך רצוי" />
          <textarea placeholder="ספרו בקצרה מה אתם מחפשים" />
          <button type="button">שליחת פרטים</button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-main">Visual Art</span>
          <p>Capturing Moments. Creating Memories.</p>
        </div>

        <div className="footer-socials">
          <h3>רשתות חברתיות</h3>
          <div>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>יצירת קשר</h3>
          <a href="tel:+972000000000">טלפון</a>
          <a href="mailto:hello@visual-art.co.il">hello@visual-art.co.il</a>
          <a className="footer-whatsapp" href="https://wa.me/972000000000">WhatsApp</a>
        </div>

        <div className="footer-legal">
          <h3>מידע משפטי</h3>
          <a href="#">תקנון</a>
          <a href="#">מדיניות פרטיות</a>
          <a href="#">הצהרת נגישות</a>
        </div>
      </footer>
    </main>
  );
}
