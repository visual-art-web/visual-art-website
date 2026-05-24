const services = [
  {
    title: 'צילום זוגיות',
    tag: 'Couple Story',
    text: 'סשן אינטימי, נקי וקולנועי שמספר את הקשר שלכם דרך אור, מבט ותנועה — בלי להרגיש מבוים.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1300&q=90'
  },
  {
    title: 'צילום תדמית',
    tag: 'Personal Brand',
    text: 'נראות שמייצרת אמון מהרגע הראשון. מתאים ליזמים, בעלי עסקים, אנשי מקצוע ומותגים אישיים.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1300&q=90'
  },
  {
    title: 'צילום אופנה',
    tag: 'Editorial Mood',
    text: 'שפה של מגזין: תאורה דרמטית, קומפוזיציות מדויקות, סטיילינג ונוכחות חזקה מול מצלמה.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1300&q=90'
  },
  {
    title: 'בת מצווה',
    tag: 'Luxury Celebration',
    text: 'חוויה אישית ומרגשת שמרגישה כמו הפקת אופנה — עם הכוונה מלאה ותוצאה נקייה ויוקרתית.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1300&q=90'
  },
  {
    title: 'אלבומי פרימיום',
    tag: 'Fine Album',
    text: 'אלבומים מעוצבים עם גימור יוקרתי, בחירת תמונות מוקפדת וסיפור ויזואלי שנשאר לשנים.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1300&q=90'
  },
  {
    title: 'קנבסים והדפסות',
    tag: 'Wall Art',
    text: 'הפיכת רגעים נבחרים לפריטי עיצוב לבית — קנבסים, הדפסות זכוכית ותמונות קיר Fine Art.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1300&q=90'
  }
];

const gallery = [
  ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90', 'large', 'Editorial Portrait'],
  ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90', 'medium', 'Fashion Mood'],
  ['https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1200&q=90', 'small', 'Soft Light'],
  ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90', 'large', 'Couple Story'],
  ['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=90', 'small', 'Classic Beauty'],
  ['https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=90', 'medium', 'Personal Brand']
];

const steps = [
  ['01', 'שיחת אפיון', 'מבינים את המטרה, הסגנון, הלוקיישן והתחושה שתרצו לקבל בתוצאה הסופית.'],
  ['02', 'תכנון קונספט', 'בונים כיוון ויזואלי: לבוש, אווירה, תאורה, זוויות והשראה לצילומים.'],
  ['03', 'יום צילום', 'צילום רגוע ומכוון עם ליווי מלא, כדי שתדעו בדיוק איך לעמוד, לזוז ולהרגיש טבעי.'],
  ['04', 'עריכה ותוצר', 'בחירת תמונות, עיבוד Fine Art והכנה לגלריה, אלבום, קנבס או הדפסה מעוצבת.']
];

const products = ['אלבומי פרימיום', 'קנבסים מעוצבים', 'הדפסות זכוכית', 'Fine Art Wall Prints'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf4e8] text-[#17211f]">
      <div className="site-noise" />
      <header className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-7xl rounded-full luxury-nav">
        <div className="flex items-center justify-between px-5 py-3 md:px-8">
          <a href="#home" className="shrink-0 text-right">
            <div className="font-serif text-2xl font-semibold tracking-[.28em] text-[#17211f] md:text-3xl">Visual Art</div>
            <div className="mt-[-4px] text-[10px] uppercase tracking-[.32em] text-[#b77d21]">Capturing Moments</div>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-semibold text-[#4d524f] md:flex">
            <a href="#services" className="nav-link">שירותים</a>
            <a href="#gallery" className="nav-link">גלריה</a>
            <a href="#process" className="nav-link">התהליך</a>
            <a href="#products" className="nav-link">מוצרים</a>
            <a href="#contact" className="nav-link">יצירת קשר</a>
          </nav>
          <a href="#contact" className="gold-button hidden rounded-full px-6 py-3 text-sm font-bold text-white md:block">קבלת הצעת מחיר</a>
          <a href="#contact" className="gold-button rounded-full px-4 py-2 text-xs font-bold text-white md:hidden">הצעה</a>
        </div>
      </header>

      <section id="home" className="hero-v4 relative flex min-h-screen items-center pt-28">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-light left" />
        <div className="hero-light right" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#fbf4e8] to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.05fr] md:py-24">
          <div className="order-2 md:order-1">
            <div className="portrait-stage">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1500&q=90"
                alt="Visual Art luxury portrait"
                className="portrait-main"
              />
              <div className="portrait-shadow" />
              <div className="portrait-label">
                <span className="font-serif text-3xl">Fine Art</span>
                <span className="text-[11px] tracking-[.28em] text-[#f2d48d]">VISUAL EXPERIENCE</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="copy-panel">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#e5c77c]/35 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[.28em] text-[#f1d99b] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f1d99b]" /> Bright Luxury Cinematic
              </div>
              <h1 className="font-serif text-[4.1rem] font-semibold leading-[.9] tracking-[-.055em] text-[#fff7e7] md:text-[7.4rem]">
                צילום שנשאר<br />כיצירת אמנות
              </h1>
              <p className="mt-7 max-w-xl text-sm uppercase tracking-[.28em] text-[#e7c47a] md:text-base">Capturing Moments. Creating Memories.</p>
              <p className="mt-7 max-w-xl text-lg font-light leading-9 text-white/82 md:text-xl">
                Visual Art יוצרת חוויה ויזואלית מוקפדת לצילומי זוגיות, תדמית, אופנה, בת מצווה ומוצרי Fine Art שנשארים איתך גם אחרי שהרגע נגמר.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#contact" className="gold-button rounded-full px-8 py-4 font-bold text-white">קבלת הצעת מחיר</a>
                <a href="#gallery" className="soft-button rounded-full px-8 py-4 font-bold">צפייה בגלריה</a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/12 pt-7 text-white/75">
                <div><strong className="block font-serif text-3xl text-[#fff7e7]">01</strong><span className="text-sm">קונספט אישי</span></div>
                <div><strong className="block font-serif text-3xl text-[#fff7e7]">02</strong><span className="text-sm">צילום מוקפד</span></div>
                <div><strong className="block font-serif text-3xl text-[#fff7e7]">03</strong><span className="text-sm">תוצר Fine Art</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center">
          <div>
            <p className="section-kicker">VISUAL PHILOSOPHY</p>
            <h2 className="section-title">מותג צילום שנבנה כמו גלריה פרטית.</h2>
          </div>
          <div className="luxury-panel">
            <p className="text-xl leading-10 text-[#5d5750]">
              ב־Visual Art כל פריים נבנה מתוך מחשבה על אור, קומפוזיציה, רגש ונוכחות. המטרה היא לא רק לתעד — אלא ליצור תוצאה שמרגישה מוקפדת, על־זמנית ומוכנה להפוך לאלבום, קנבס או יצירת קיר.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f2e7d3] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">SERVICES</p>
              <h2 className="section-title">שירותי צילום</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#625c54]">כל שירות נבנה כחוויה מלאה — מהרעיון, דרך יום הצילום ועד לתוצר הסופי שנשאר איתכם.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="service-card group">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071819]/92 via-[#071819]/28 to-transparent" />
                <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[.22em] text-[#f0dca6] backdrop-blur">{service.tag}</div>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                  <h3 className="font-serif text-4xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-8 text-white/82">{service.text}</p>
                  <a href="#contact" className="mt-6 inline-block text-sm font-bold tracking-[.18em] text-[#e7c47a]">לקבלת הצעה ←</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="section-kicker justify-center">PORTFOLIO</p>
            <h2 className="section-title mx-auto max-w-4xl">תיק עבודות שנראה כמו קמפיין Editorial</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#625c54]">כרגע מוצגות תמונות דמו. בהמשך נחליף לתמונות המקוריות ונבנה גלריה מלאה לפי קטגוריות צילום.</p>
          </div>

          <div className="gallery-grid-v4">
            {gallery.map(([src, size, label], index) => (
              <div key={src} className={`gallery-item ${size}`}>
                <img src={src} alt={`Visual Art portfolio ${index + 1}`} className="h-full w-full object-cover" />
                <div className="gallery-caption">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#0f3d3e] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="section-kicker text-[#e0bd73]">THE EXPERIENCE</p>
            <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">תהליך שמרגיש מסודר, רגוע ומדויק</h2>
            <p className="mt-6 text-lg leading-9 text-white/70">האתר צריך לשדר את אותו סדר שהלקוח מצפה לקבל בעבודה עצמה: הכוונה ברורה, חוויה נעימה ותוצאה מוקפדת.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <div key={num} className="process-card">
                <div className="mb-8 font-serif text-5xl text-[#e0bd73]">{num}</div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-stretch">
          <div className="rounded-[42px] bg-[#f2e7d3] p-10 shadow-[0_28px_80px_rgba(29,36,34,.08)] md:p-14">
            <p className="section-kicker">FINE ART PRODUCTS</p>
            <h2 className="section-title">זיכרונות שלא נשארים רק במסך</h2>
            <p className="mt-6 text-lg leading-9 text-[#625c54]">הערך של Visual Art לא נגמר בגלריה דיגיטלית. הרגעים החשובים יכולים להפוך לאלבום פרימיום, קנבס, הדפסת זכוכית או תמונת קיר שמכניסה אופי לבית.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((item) => (
              <div key={item} className="product-card">
                <div className="mb-8 h-px w-20 bg-[#c99332]" />
                <h3 className="font-serif text-3xl font-semibold">{item}</h3>
                <p className="mt-4 leading-7 text-[#625c54]">מוצר מוחשי, נקי ויוקרתי שמרגיש כמו חלק מהעיצוב של הבית.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3df] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="section-kicker justify-center">CLIENT WORDS</p>
            <h2 className="font-serif text-5xl font-semibold md:text-6xl">חוויית לקוח שמרגישה Premium</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {['החוויה הרגישה כמו הפקה אישית. הכל היה רגוע, מדויק, והתוצאה נראית כמו מגזין.', 'מהרגע הראשון הרגשנו שיש פה סטנדרט אחר. התמונות יצאו אלגנטיות, נקיות ומרגשות.', 'האלבום והקנבס הפכו לחלק מהבית. לא עוד קבצים בטלפון — באמת יצירת אמנות.'].map((text) => (
              <div key={text} className="testimonial-card">
                <div className="mb-6 font-serif text-6xl text-[#d1a557]">“</div>
                <p className="text-lg leading-9 text-[#514d47]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f2e7d3] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.85fr_1fr] md:items-center">
          <div>
            <p className="section-kicker">INQUIRY</p>
            <h2 className="section-title">רוצים לקבל הצעת מחיר מותאמת אישית?</h2>
            <p className="mt-6 text-lg leading-9 text-[#625c54]">השאירו פרטים ונחזור אליכם לתיאום סשן שמתאים בדיוק לסגנון, למטרה ולחוויה שאתם מחפשים.</p>
          </div>
          <form className="contact-card">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="input-luxury" placeholder="שם מלא" />
              <input className="input-luxury" placeholder="טלפון" />
              <select className="input-luxury text-[#6d6860]">
                <option>סוג צילום</option>
                <option>זוגיות</option>
                <option>תדמית</option>
                <option>אופנה</option>
                <option>בת מצווה</option>
                <option>אלבומים / קנבסים</option>
              </select>
              <input className="input-luxury" placeholder="תאריך רצוי" />
            </div>
            <textarea className="textarea-luxury" placeholder="ספרו לנו בקצרה מה אתם מחפשים" />
            <div className="mt-7 flex flex-wrap gap-4">
              <button type="button" className="gold-button rounded-full px-8 py-4 font-bold text-white">שליחת פרטים</button>
              <a href="https://wa.me/972000000000" className="rounded-full border border-[#c99332]/45 bg-white/70 px-8 py-4 font-bold text-[#1d2422] transition hover:bg-white">WhatsApp</a>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#17211f] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-4xl tracking-[.28em]">Visual Art</div>
            <p className="mt-2 text-sm tracking-[.24em] text-[#e0bd73]">Capturing Moments. Creating Memories.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/70">
            <a href="#contact">יצירת קשר</a>
            <span>Instagram</span>
            <span>WhatsApp</span>
            <span>מדיניות פרטיות</span>
            <span>הצהרת נגישות</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
