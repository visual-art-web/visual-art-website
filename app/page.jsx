
const galleryImages = [
  {
    title: 'Editorial Portraits',
    text: 'פורטרטים נקיים עם תאורה קולנועית ועומק רגשי.',
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'Wedding Stories',
    text: 'תיעוד חתונות ואירועים בסגנון יוקרתי, טבעי ומדויק.',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'Golden Hour',
    text: 'צילומי חוץ בשקיעה, ים, רוח ותנועה רכה.',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'Fine Art Details',
    text: 'פרטים קטנים שנראים כמו מתוך מגזין.',
    src: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c84?auto=format&fit=crop&w=1200&q=90'
  }
];

const services = [
  ['01', 'צילומי זוגיות', 'סשן אלגנטי, רגוע וקולנועי לזוגות שרוצים תמונות שמרגישות כמו סיפור אהבה אמיתי.'],
  ['02', 'צילום הריון ומשפחה', 'תיעוד טבעי, חם ומוקפד של רגעים משפחתיים — עם עריכה נקייה ויוקרתית.'],
  ['03', 'אירועים ובוטיק', 'צילום לאירועים קטנים, הצעות נישואין, ימי הולדת ותוכן אישי ברמה גבוהה.'],
  ['04', 'אלבומים והדפסות', 'אלבומי Fine Art, קנבסים והדפסות שנראות כמו פריט עיצוב לבית.']
];

export default function Home() {
  return (
    <main>
      <header className="navBar">
        <a className="logo" href="#top">
          <span>Visual Art</span>
          <small>Cinematic Photography Studio</small>
        </a>

        <nav>
          <a href="#work">גלריה</a>
          <a href="#services">שירותים</a>
          <a href="#about">הסטודיו</a>
          <a href="#contact">יצירת קשר</a>
        </nav>

        <a className="navCta" href="#contact">קבלת הצעת מחיר</a>
      </header>

      <section className="hero" id="top">
        <div className="heroFilm">
          <div className="heroSlide heroSlideOne"></div>
          <div className="heroSlide heroSlideTwo"></div>
          <div className="heroSlide heroSlideThree"></div>
          <div className="heroOverlay"></div>
          <div className="grain"></div>
        </div>

        <div className="heroText">
          <p className="kicker">Luxury · Editorial · Cinematic</p>
          <h1>צילום שנראה<br />כמו סרט.</h1>
          <p className="heroLead">
            סטודיו צילום פרימיום לחוויות זוגיות, משפחה, הריון ואירועי בוטיק —
            עם שפה ויזואלית נקייה, תאורה קולנועית ותחושה של מותג יוקרה.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">אני רוצה הצעת מחיר</a>
            <a className="secondaryBtn" href="#work">לצפייה בגלריה</a>
          </div>
        </div>

        <div className="heroMeta">
          <span>Visual stories for people who care about details.</span>
          <strong>Fine Art · Sea · Light · Motion</strong>
        </div>

        <div className="scrollCue">Scroll</div>
      </section>

      <section className="statement" id="about">
        <p>לא עוד אתר עמוס. לא עוד צילום רגיל.</p>
        <h2>חוויה ויזואלית שמרגישה מסודרת, שקטה ויקרה.</h2>
        <span>
          כל פריים, כל מרווח וכל תנועה באתר צריכים לשדר ללקוח שהעסק עובד ברמה גבוהה.
          לכן העיצוב כאן מינימליסטי, חשוך-יוקרתי, עם דגש על תמונות גדולות, תנועה איטית וקומפוזיציה נקייה.
        </span>
      </section>

      <section className="work" id="work">
        <div className="sectionHead">
          <p>Selected work</p>
          <h2>גלריה בסגנון מגזין</h2>
        </div>

        <div className="editorialGrid">
          {galleryImages.map((item, index) => (
            <article className={`workCard card${index + 1}`} key={item.title}>
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="sectionHead">
          <p>Services</p>
          <h2>שירותי צילום</h2>
        </div>

        <div className="serviceRows">
          {services.map(([num, title, text]) => (
            <div className="serviceRow" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cinemaBreak">
        <div>
          <p className="kicker">Signature mood</p>
          <h2>תנועה איטית, אור טבעי, ים, רוח, מצלמה — ותחושה של סרט.</h2>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactText">
          <p className="kicker">Start your story</p>
          <h2>רוצה אתר וצילומים שמרגישים ברמה אחרת?</h2>
          <p>
            השאירו פרטים ונחזור אליכם עם הצעה מותאמת לסוג הצילום, הלוקיישן והסגנון.
          </p>
        </div>

        <form className="form">
          <input placeholder="שם מלא" />
          <input placeholder="טלפון" />
          <input placeholder="סוג צילום רצוי" />
          <textarea placeholder="מה חשוב לכם שיהיה בצילום?" />
          <button type="button">שליחת פנייה</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <strong>Visual Art</strong>
          <span>Luxury Cinematic Photography Studio</span>
        </div>

        <div className="footerCol">
          <h4>רשתות חברתיות</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

        <div className="footerCol whatsappBox">
          <h4>WhatsApp</h4>
          <a href="#">שיחה מהירה בוואטסאפ</a>
          <p>מקום נפרד ומהיר לתיאום צילומים והצעות מחיר.</p>
        </div>

        <div className="footerCol">
          <h4>מידע</h4>
          <a href="#">מדיניות פרטיות</a>
          <a href="#">תנאי שימוש</a>
          <a href="#">הצהרת נגישות</a>
        </div>
      </footer>
    </main>
  );
}
