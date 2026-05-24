const services = [
  {
    title: 'צילום זוגיות',
    tag: 'Couple Story',
    text: 'סשן אינטימי וקולנועי שמתרגם קשר, מבט ותנועה לסיפור ויזואלי אלגנטי שנשאר איתכם.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=88'
  },
  {
    title: 'צילום תדמית',
    tag: 'Personal Brand',
    text: 'נראות מקצועית שמייצרת אמון מהרגע הראשון — לאנשים, יזמים ומותגים שרוצים לשדר רמה גבוהה.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=88'
  },
  {
    title: 'צילום אופנה',
    tag: 'Editorial Mood',
    text: 'קומפוזיציות דרמטיות, אור מדויק ותחושה של הפקת מגזין — עם נראות נקייה, חזקה וזכירה.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=88'
  },
  {
    title: 'בת מצווה',
    tag: 'Luxury Celebration',
    text: 'חוויה אישית, מוקפדת ומרגשת שמרגישה כמו הפקת אופנה — עם תוצאה שמכבדת את הרגע.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88'
  },
  {
    title: 'אלבומי פרימיום',
    tag: 'Fine Album',
    text: 'אלבומים מעוצבים עם גימור יוקרתי, בחירת תמונות מדויקת ותחושה של מוצר שנשאר לשנים.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=88'
  },
  {
    title: 'קנבסים והדפסות',
    tag: 'Wall Art',
    text: 'הפיכת רגעים נבחרים לפריטי עיצוב לבית — קנבסים, הדפסות זכוכית ותמונות קיר Fine Art.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=88'
  }
];

const gallery = [
  ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=88', 'tall'],
  ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=88', 'wide'],
  ['https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=88', 'medium'],
  ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=88', 'tall'],
  ['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=88', 'medium'],
  ['https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1000&q=88', 'wide']
];

const steps = [
  ['01', 'שיחת אפיון', 'מבינים מה חשוב לכם, מה הסגנון, מי הקהל ומה התוצאה שתרצו לקבל.'],
  ['02', 'קונספט וצילום', 'בונים אווירה, לוקיישן, תאורה והכוונה מלאה כדי שהצילום ירגיש טבעי ומדויק.'],
  ['03', 'עריכה אמנותית', 'בחירת תמונות מובילות, עיבוד Fine Art ושמירה על שפה נקייה ויוקרתית.'],
  ['04', 'תוצר סופי', 'גלריה דיגיטלית, אלבום פרימיום, קנבס או הדפסה שמתאימה לבית ולזיכרון.']
];

const testimonials = [
  'החוויה הרגישה כמו הפקה אישית. הכל היה רגוע, מדויק, והתוצאה נראית כמו מגזין.',
  'מהרגע הראשון הרגשנו שיש פה סטנדרט אחר. התמונות יצאו אלגנטיות, נקיות ומרגשות.',
  'האלבום והקנבס הפכו לחלק מהבית. לא עוד קבצים בטלפון — באמת יצירת אמנות.'
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf2] text-[#1d2422]">
      <div className="site-noise" />
      <header className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-7xl rounded-full glass-header">
        <div className="flex items-center justify-between px-4 py-3 md:px-7">
          <a href="#home" className="shrink-0 text-right">
            <div className="font-serif text-2xl font-semibold tracking-[.26em] text-[#1d2422] md:text-3xl">Visual Art</div>
            <div className="mt-[-4px] text-[10px] uppercase tracking-[.28em] text-[#bd862e]">Creating Memories</div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4b514f] md:flex">
            <a href="#services" className="nav-link">שירותים</a>
            <a href="#gallery" className="nav-link">גלריה</a>
            <a href="#process" className="nav-link">התהליך</a>
            <a href="#contact" className="nav-link">יצירת קשר</a>
          </nav>
          <a href="#contact" className="gold-button hidden rounded-full px-5 py-2.5 text-sm font-bold text-white md:block">קבלת הצעת מחיר</a>
          <a href="#contact" className="gold-button rounded-full px-4 py-2 text-xs font-bold text-white md:hidden">הצעה</a>
        </div>
      </header>

      <section id="home" className="premium-hero relative flex min-h-screen items-center pt-28">
        <div className="hero-video-fallback" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,25,.92)_0%,rgba(7,24,25,.74)_34%,rgba(7,24,25,.24)_64%,rgba(255,250,242,.26)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_34%,rgba(222,185,108,.34),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(255,250,242,.30),transparent_24%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fffaf2] to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[.95fr_1.05fr]">
          <div className="hero-card max-w-2xl rounded-[38px] p-7 text-white md:p-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#e6c987]/35 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[.28em] text-[#f0dca6] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e6c987]" /> Bright Luxury Cinematic
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[.94] tracking-[-.035em] text-[#fff7e8] md:text-8xl">
              צילום שנשאר<br />כיצירת אמנות
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[.24em] text-[#e6c987] md:text-base">Capturing Moments. Creating Memories.</p>
            <p className="mt-7 max-w-xl text-lg font-light leading-9 text-white/82 md:text-xl">
              Visual Art יוצרת חוויה ויזואלית מוקפדת לצילומי זוגיות, תדמית, אופנה, בת מצווה ומוצרי Fine Art שנשארים איתך גם אחרי שהרגע נגמר.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="gold-button rounded-full px-8 py-4 font-bold text-white">קבלת הצעת מחיר</a>
              <a href="#gallery" className="rounded-full border border-[#e6c987]/45 bg-white/10 px-8 py-4 font-bold text-[#fff7e8] backdrop-blur transition hover:bg-white/18">צפייה בגלריה</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="editorial-frame float-soft ml-auto h-[610px] w-[84%] overflow-hidden rounded-[46px]">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=90" alt="Visual Art cinematic portrait" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071819]/35 via-transparent to-white/10" />
              <div className="absolute bottom-6 right-6 rounded-3xl border border-white/25 bg-white/12 p-5 text-white backdrop-blur-xl">
                <div className="font-serif text-3xl">Fine Art</div>
                <div className="text-xs tracking-[.24em] text-[#f0dca6]">VISUAL EXPERIENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="section-kicker">VISUAL PHILOSOPHY</p>
            <h2 className="section-title">לא עוד צילום. חוויה שנראית כמו קמפיין יוקרה.</h2>
          </div>
          <div className="luxury-panel">
            <p className="text-xl leading-10 text-[#5d5750]">
              ב־Visual Art כל פריים נבנה מתוך מחשבה על אור, קומפוזיציה, רגש ונוכחות. המטרה היא לא רק לתעד — אלא ליצור תוצאה שמרגישה מוקפדת, על־זמנית ומוכנה להפוך לאלבום, קנבס או יצירת קיר.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f4ead8] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">SERVICES</p>
              <h2 className="section-title">שירותי צילום</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#625c54]">כל שירות נבנה כחוויה מלאה — משלב הרעיון, דרך יום הצילום ועד לתוצר הסופי שנשאר איתכם.</p>
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
            <h2 className="section-title mx-auto max-w-4xl">רגעים שנראים כמו סצנות מתוך סרט</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#625c54]">כרגע מוצגות תמונות דמו. בהמשך נחליף לתמונות המקוריות ונבנה תיק עבודות מלא לפי קטגוריות.</p>
          </div>

          <div className="gallery-grid">
            {gallery.map(([src, size], index) => (
              <div key={src} className={`gallery-item ${size}`}>
                <img src={src} alt={`Visual Art portfolio ${index + 1}`} className="h-full w-full object-cover" />
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
            <p className="mt-6 text-lg leading-9 text-white/70">לקוח שנכנס לאתר צריך להבין שהעסק מנוהל ברמה גבוהה. לכן גם חוויית הצילום עצמה מוצגת כדרך מקצועית, נקייה וברורה.</p>
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

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-stretch">
          <div className="rounded-[42px] bg-[#f4ead8] p-10 shadow-[0_28px_80px_rgba(29,36,34,.08)] md:p-14">
            <p className="section-kicker">FINE ART PRODUCTS</p>
            <h2 className="section-title">זיכרונות שלא נשארים רק במסך</h2>
            <p className="mt-6 text-lg leading-9 text-[#625c54]">הערך של Visual Art לא נגמר בגלריה דיגיטלית. הרגעים החשובים יכולים להפוך לאלבום פרימיום, קנבס, הדפסת זכוכית או תמונת קיר שמכניסה אופי לבית.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['אלבומי פרימיום', 'קנבסים מעוצבים', 'הדפסות זכוכית', 'Fine Art Wall Prints'].map((item) => (
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
            {testimonials.map((text) => (
              <div key={text} className="testimonial-card">
                <div className="mb-6 font-serif text-6xl text-[#d1a557]">“</div>
                <p className="text-lg leading-9 text-[#514d47]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f4ead8] px-6 py-24 md:py-32">
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

      <footer className="bg-[#1d2422] px-6 py-16 text-white">
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
