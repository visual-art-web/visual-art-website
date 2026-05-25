
export default function Home() {
return (
<main className="site">

<header className="hero">

<nav className="navbar">
<div className="navLinks">
<a href="#gallery">גלריה</a>
<a href="#services">שירותים</a>
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

  <div className="footerBottom">
    <div className="socials">
      <a href="#"><span>◎</span>Instagram</a>
      <a href="#"><span>◉</span>WhatsApp</a>
      <a href="#"><span>◌</span>TikTok</a>
      <a href="#"><span>◍</span>Facebook</a>
    </div>

    <div className="copyright">
      © VISUAL ART 2026
    </div>
  </div>
</footer>

</main>
)}
