
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
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=90'
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
        
        <a className="logo premiumInlineLogo" href="#top" aria-label="Visual Art">
          <div className="cameraMark">
            <div className="lens"></div>
          </div>

          <div className="brandText">
            <h2>VISUAL ART</h2>
            <p>CAPTURING MOMENTS, CREATING MEMORIES</p>
          </div>
        </a>


        <nav>
          <a href="#work">גלריה</a>
          <a href="#services">שירותים</a>
          <a href="#about">הסטודיו</a>
          <a href="#contact">יצירת קשר</a>
        </nav>

        <div className="navActions">
          <a className="whatsappTop" href="https://wa.me/972000000000" aria-label="WhatsApp">WhatsApp</a>
          <a className="navCta" href="#contact">קבלת הצעת מחיר</a>
        </div>
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
              <img src={item.src} alt="" />
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

          <div className="socialIcons" aria-label="רשתות חברתיות">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2V4h-3c-3 0-5 2-5 5v3H6v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3c.5 3 2.2 4.8 5 5v4c-1.9 0-3.5-.6-5-1.7v5.8c0 3.4-2.4 5.9-5.8 5.9A5.7 5.7 0 0 1 3.5 16.3c0-3.3 2.5-5.7 5.8-5.7.4 0 .8 0 1.2.1v4.1a2.4 2.4 0 0 0-1.2-.3A1.8 1.8 0 1 0 11 16.3V3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footerCol">
          <h4>יצירת קשר</h4>
          <a href="tel:+972000000000">000-0000000</a>
          <a href="mailto:hello@visualart.co.il">hello@visualart.co.il</a>
          <p>זמינות בתיאום מראש לצילומים והצעות מחיר.</p>
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
