
export default function Home() {
return (
<main className="site">

<header className="hero">

<nav className="navbar">
<div className="navLinks">
<a href="#gallery">גלריה</a>
<a href="#services">שירותים</a>
<a href="#about">אודות</a>
<a href="#contact">יצירת קשר</a>
</div>

<a className="logo" href="#top">
<span>VISUAL ART</span>
<small>CAPTURING MOMENTS, CREATING MEMORIES</small>
</a>
</nav>

<div className="heroContent">

<div className="heroText">
<span className="eyebrow">LUXURY CINEMATIC PHOTOGRAPHY</span>

<h1>
צילום יוקרתי
<br />
עם אווירה קולנועית
</h1>

<p>
סטודיו צילום בסגנון editorial luxury —
זוגיות, אופנה ותוכן פרימיום עם תאורה דרמטית
ותחושה של מותג בינלאומי.
</p>

<div className="heroButtons">
<a className="goldButton">קבלת הצעת מחיר</a>
<a className="ghostButton">צפייה בגלריה</a>
</div>
</div>

<div className="heroImage">
<img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop" />
</div>

</div>

</header>

<section className="gallery" id="gallery">
<img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1800&auto=format&fit=crop" />
<img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop" />
<img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop" />
</section>


<section className="aboutStory" id="about">

  <div className="aboutImage">
    <img
      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1500&auto=format&fit=crop"
      alt="Visual Art studio story"
    />
  </div>

  <div className="aboutContent">
    <span className="eyebrow">ABOUT VISUAL ART</span>

    <h2>
      לא מצלמים רק תמונה.
      <br />
      יוצרים תחושה שנשארת.
    </h2>

    <p>
      יש רגעים שלא צריכים רק מצלמה — הם צריכים אור, תנועה, רגש ואווירה.
      VISUAL ART נוצר מתוך אהבה לפריימים קולנועיים, לתאורה עמוקה ולתמונות
      שמרגישות כמו סצנה מתוך סרט.
    </p>

    <p>
      כל צילום נבנה בקפידה: מהקומפוזיציה, דרך הלוקיישן ועד העריכה הסופית —
      כדי ליצור תוצאה נקייה, יוקרתית ובלתי נשכחת.
    </p>

    <div className="aboutFacts">
      <div>
        <strong>01</strong>
        <span>סגנון קולנועי</span>
      </div>

      <div>
        <strong>02</strong>
        <span>עריכה פרימיום</span>
      </div>

      <div>
        <strong>03</strong>
        <span>חוויה אישית</span>
      </div>
    </div>
  </div>

</section>


<section className="services" id="services">

<div className="service">
<span>01</span>
<h3>צילומי זוגיות</h3>
<p>סשנים קולנועיים עם צבעים עמוקים ואווירה יוקרתית.</p>
</div>

<div className="service">
<span>02</span>
<h3>צילום אופנה</h3>
<p>הפקות פרימיום למותגים ויוצרים.</p>
</div>

<div className="service">
<span>03</span>
<h3>אירועים ובת מצווה</h3>
<p>צילום אלגנטי עם עריכה נקייה ומודרנית.</p>
</div>

</section>

<section className="contact" id="contact">

<div>
<span className="eyebrow">BOOK YOUR SESSION</span>
<h2>בואו ניצור משהו מיוחד.</h2>
</div>

<form className="contactForm">
<input placeholder="שם מלא" />
<input placeholder="טלפון" />
<textarea placeholder="ספרו בקצרה על סוג הצילום שתרצו"></textarea>
<button type="button">שליחת פנייה</button>
</form>

</section>



<footer className="footer">
  <div className="footerQuote">
    <span className="footerLine"></span>
    <h3>Every frame tells a story.</h3>
    <p>Designed to feel like cinema.</p>
  </div>

  <div className="footerSocials" aria-label="Social links">

    <a href="#" className="socialItem" aria-label="Instagram">
      <div className="socialCircle">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5"></rect>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="17.5" cy="6.5" r="1"></circle>
        </svg>
      </div>

      <small>Instagram</small>
    </a>

    <a href="#" className="socialItem" aria-label="Facebook">
      <div className="socialCircle">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8h2V4h-3c-3 0-5 2-5 5v3H6v4h2v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1h1z"></path>
        </svg>
      </div>

      <small>Facebook</small>
    </a>

    <a href="#" className="socialItem" aria-label="TikTok">
      <div className="socialCircle">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4v10.2a4.2 4.2 0 1 1-4.2-4.2c.3 0 .6 0 .9.1v3.7a1.2 1.2 0 1 0 .9 1.1V4h2.4c.4 2.2 1.9 3.8 4 4.4v3.7c-1.5-.2-2.8-.8-4-1.7z"></path>
        </svg>
      </div>

      <small>TikTok</small>
    </a>

  </div>

  <div className="footerCopyright">
    © VISUAL ART 2026
  </div>
</footer>


</main>
)}
