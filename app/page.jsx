export default function Home() {
  return (
    <main className="site">

      <header className="hero">
        <nav className="navbar">
          <div className="logoBlock">
            <h1>VISUAL ART</h1>
            <p>CAPTURING MOMENTS, CREATING MEMORIES</p>
          </div>

          <div className="menu">
            <a href="#gallery">גלריה</a>
            <a href="#services">שירותים</a>
            <a href="#about">אודות</a>
            <a href="#contact">יצירת קשר</a>
          </div>
        </nav>

        <div className="heroContent">
          <div className="heroText">
            <span className="miniTitle">LUXURY PHOTOGRAPHY</span>
            <h2>צילום קולנועי<br />ברמה אחרת.</h2>

            <p>
              סטודיו לצילום זוגיות, אופנה ותוכן פרימיום עם צבעים עמוקים,
              תאורה יוקרתית וחווית צילום ברמה בינלאומית.
            </p>

            <div className="heroButtons">
              <button className="goldBtn">קבלת הצעת מחיר</button>
              <button className="darkBtn">צפייה בגלריה</button>
            </div>
          </div>

          <div className="heroImage">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop"
              alt="photographer"
            />
          </div>
        </div>
      </header>

      <section className="gallery" id="gallery">
        <div className="sectionTitle">
          <span>SELECTED WORK</span>
          <h3>גלריה קולנועית</h3>
        </div>

        <div className="galleryGrid">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=900&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=900&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop" />
        </div>
      </section>

      <section className="services" id="services">
        <div className="sectionTitle">
          <span>PREMIUM SERVICES</span>
          <h3>שירותי צילום</h3>
        </div>

        <div className="serviceCards">
          <div className="card">
            <h4>צילומי זוגיות</h4>
            <p>צילום רגשי וקולנועי עם צבעים עמוקים ואווירה יוקרתית.</p>
          </div>

          <div className="card">
            <h4>צילום אופנה</h4>
            <p>הפקות צילום מקצועיות למותגים, רשתות ויוצרים.</p>
          </div>

          <div className="card">
            <h4>צילומי חתונה</h4>
            <p>סיפור ויזואלי מלא עם עריכה קולנועית ופריימים יוקרתיים.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
