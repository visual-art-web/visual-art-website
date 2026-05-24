
const services = [
  {
    title: 'צילומי זוגיות',
    text: 'סשן אינטימי, מדויק ואלגנטי שמרגיש כמו פריים מסרט — עם הכוונה מלאה, תאורה רכה ועריכה יוקרתית.',
    tag: 'Couple Story'
  },
  {
    title: 'צילומי הריון ומשפחה',
    text: 'תיעוד נקי ומרגש של רגעים שלא חוזרים, באווירת Fine Art שמרגישה טבעית, חמה ומוקפדת.',
    tag: 'Family Fine Art'
  },
  {
    title: 'אירועים ובוטיק',
    text: 'צילום מוקפד לאירועים קטנים, הצעות נישואין, ימי הולדת ותוכן אישי — עם שפה ויזואלית אחידה ויוקרתית.',
    tag: 'Boutique Events'
  },
];

const gallery = [
  'Portrait Light', 'Wedding Detail', 'Family Moment', 'Fine Art Frame',
  'Golden Hour', 'Studio Mood'
];

const process = [
  ['01', 'אפיון קצר', 'מבינים את הסגנון, המטרה, הלוקיישן והתחושה שהצילום צריך להעביר.'],
  ['02', 'יום צילום רגוע', 'הכוונה מלאה מול המצלמה, בלי לחץ ובלי פוזות מאולצות.'],
  ['03', 'עריכה יוקרתית', 'בחירת פריימים, צבעים, ריטוש עדין והכנה לדיגיטל/הדפסה.'],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="cta small" href="#contact">קבלת הצעת מחיר</a>

        <nav className="nav">
          <a href="#services">שירותים</a>
          <a href="#gallery">גלריה</a>
          <a href="#process">התהליך</a>
          <a href="#contact">יצירת קשר</a>
        </nav>

        <a className="brand" href="#">
          <span className="brand-mark">VA</span>
          <span>
            <strong>Visual Art</strong>
            <small>Luxury Photography Studio</small>
          </span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-video" aria-hidden="true">
          <div className="film-grain"></div>
          <div className="light-leak leak-one"></div>
          <div className="light-leak leak-two"></div>
          <div className="cinema-strip strip-a">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="cinema-strip strip-b">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="lens-circle"></div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Bright Luxury Cinematic Photography</p>
          <h1>צילום שמרגיש כמו<br />רגע מתוך סרט.</h1>
          <p className="lead">
            סטודיו צילום יוקרתי לחוויות זוגיות, משפחה, הריון ואירועי בוטיק —
            עם תאורה קולנועית, קומפוזיציה נקייה ועריכה שמרגישה יקרה.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#contact">קבלת הצעת מחיר</a>
            <a className="ghost" href="#gallery">צפייה בגלריה</a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="card-photo">
            <span>Fine Art</span>
          </div>
          <div className="card-caption">
            <strong>Signature Visual Story</strong>
            <p>פריימים מוקפדים שמספרים סיפור — לא עוד צילום רגיל.</p>
          </div>
        </aside>
      </section>

      <section className="intro">
        <p>לא עוד “סט תמונות”.</p>
        <h2>חוויה מצולמת שנבנית כמו מותג יוקרתי.</h2>
        <span>
          מהרגע הראשון באתר הלקוח צריך להבין: כאן הכול מסודר, מדויק וברמה גבוהה.
          לכן השפה הוויזואלית נקייה, רגועה, יוקרתית — ומכוונת להזמנה.
        </span>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p>Services</p>
          <h2>שירותי צילום פרימיום</h2>
        </div>
        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card" key={item.title}>
              <small>{item.tag}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-head center">
          <p>Selected Gallery</p>
          <h2>גלריה שמרגישה כמו קמפיין</h2>
          <span>כרגע אלו פריימים עיצוביים זמניים. בהמשך נחליף אותם בתמונות האמיתיות שלך.</span>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className={`gallery-item item-${index + 1}`} key={item}>
              <div className="photo-shade"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-head">
          <p>Process</p>
          <h2>תהליך צילום מסודר, רגוע ומדויק</h2>
        </div>
        <div className="process-list">
          {process.map(([num, title, text]) => (
            <div className="process-row" key={num}>
              <strong>{num}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products">
        <div>
          <p className="eyebrow">Fine Art Products</p>
          <h2>אלבומים, קנבסים והדפסות שנראות כמו פריט עיצוב.</h2>
        </div>
        <a className="cta dark" href="#contact">לפרטים והזמנה</a>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Start Your Story</p>
          <h2>רוצה שהצילומים שלך ייראו ברמה אחרת?</h2>
          <p>
            השאירו פרטים ונחזור אליכם עם התאמה אישית לסוג הצילום, הלוקיישן והסגנון.
          </p>
        </div>
        <form className="lead-form">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <input placeholder="סוג צילום רצוי" />
          <textarea placeholder="ספרו בקצרה מה תרצו לצלם"></textarea>
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <strong>Visual Art</strong>
          <p>Luxury Photography Studio — צילום נקי, מרגש ויוקרתי.</p>
        </div>

        <div className="footer-box social">
          <h4>רשתות חברתיות</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

        <div className="footer-box whatsapp">
          <h4>WhatsApp</h4>
          <a className="whatsapp-btn" href="#">שיחה מהירה בוואטסאפ</a>
          <span>מענה מהיר להצעות מחיר ותיאום צילומים.</span>
        </div>

        <div className="footer-box">
          <h4>יצירת קשר</h4>
          <a href="tel:+972000000000">טלפון: 000-0000000</a>
          <a href="mailto:hello@visualart.co.il">hello@visualart.co.il</a>
          <span>ישראל · זמינות בתיאום מראש</span>
        </div>

        <div className="footer-legal">
          <a href="#">מדיניות פרטיות</a>
          <a href="#">תנאי שימוש</a>
          <a href="#">הצהרת נגישות</a>
        </div>
      </footer>
    </main>
  );
}
