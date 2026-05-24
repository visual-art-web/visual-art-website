const services = [
  ['זוגיות', 'סשן קולנועי, אישי ומרגש שמספר את הסיפור שלכם דרך אור, תנועה ורגעים אמיתיים.', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85'],
  ['תדמית', 'צילום שמייצר נוכחות, אמון ומיתוג אישי חד — לאנשים שרוצים להיראות ברמה גבוהה.', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85'],
  ['אופנה', 'Editorial style עם קומפוזיציות דרמטיות, סטיילינג ותחושה של מגזין בינלאומי.', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85'],
  ['בת מצווה', 'חוויה יוקרתית ומרגשת שמרגישה כמו הפקת אופנה אישית, עם סטייל ועיבוד מוקפד.', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85'],
  ['אלבומים', 'אלבומי פרימיום מעוצבים, עם נייר איכותי וגימור שמרגיש כמו מוצר אספנות.', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=85'],
  ['קנבסים', 'הפיכת רגעים נבחרים לפריטי עיצוב אמנותיים לבית, משרד או חלל אישי.', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85']
];

const gallery = [
  ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', 'h-[420px]'],
  ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85', 'h-[560px]'],
  ['https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85', 'h-[360px]'],
  ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85', 'h-[520px]'],
  ['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85', 'h-[420px]'],
  ['https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=85', 'h-[500px]']
];

const steps = [
  ['01', 'אפיון', 'שיחה קצרה להבנת הסגנון, המטרה, הלוקיישן והחוויה הרצויה.'],
  ['02', 'קונספט', 'בחירת אווירה, צבעים, תאורה, לבוש ותכנון סטיילינג מדויק.'],
  ['03', 'צילום', 'יום צילום רגוע ומכוון, עם הדרכה מלאה ותשומת לב לפרטים.'],
  ['04', 'Fine Art', 'עריכה מוקפדת, עיבוד יוקרתי ובחירת תמונות מובילות.'],
  ['05', 'מוצר סופי', 'גלריה דיגיטלית, אלבום פרימיום, קנבס או הדפסה אמנותית.']
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf8] text-[#1d2422]">
      <div className="luxury-noise" />

      <header className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-7xl rounded-full glass-header">
        <div className="flex items-center justify-between px-4 py-3 md:px-7">
          <a href="#home" className="text-center md:text-right">
            <div className="font-serif text-2xl tracking-[.28em] text-[#1d2422] md:text-3xl">Visual Art</div>
            <div className="mt-[-4px] text-[10px] uppercase tracking-[.34em] text-[#c99332]">Capturing Moments</div>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-[#4b514f] md:flex">
            <a href="#services" className="hover:text-[#c99332]">שירותים</a>
            <a href="#gallery" className="hover:text-[#c99332]">גלריה</a>
            <a href="#process" className="hover:text-[#c99332]">התהליך</a>
            <a href="#contact" className="hover:text-[#c99332]">יצירת קשר</a>
          </nav>
          <a href="#contact" className="gold-gradient rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_40px_rgba(201,147,50,.30)] transition hover:scale-105">קבלת הצעת מחיר</a>
        </div>
      </header>

      <section id="home" className="hero-bg relative flex min-h-screen items-center pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(201,147,50,.18),transparent_32%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="hidden md:block">
            <div className="float-soft h-[560px] w-[78%] overflow-hidden rounded-[42px] border border-white/20 bg-[#0f3d3e]/20 shadow-[0_40px_100px_rgba(15,61,62,.22)] backdrop-blur-sm">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center opacity-80 mix-blend-luminosity" />
            </div>
          </div>

          <div className="max-w-2xl text-center md:text-right">
            <div className="reveal-up mb-5 inline-flex items-center gap-2 rounded-full border border-[#c99332]/25 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[.34em] text-[#0f3d3e] backdrop-blur-md">
              Bright Luxury Cinematic ✦
            </div>
            <h1 className="reveal-up-delay font-serif text-5xl font-semibold leading-[.95] tracking-[-.04em] text-[#1d2422] md:text-8xl">
              צילום שנשאר<br />כיצירת אמנות
            </h1>
            <p className="reveal-up-delay mt-6 text-base tracking-[.18em] text-[#c99332] md:text-lg">Capturing Moments. Creating Memories.</p>
            <p className="reveal-up-delay-2 mx-auto mt-6 max-w-xl text-lg leading-9 text-[#56524c] md:mx-0">
              חוויה ויזואלית יוקרתית לצילומי זוגיות, תדמית, אופנה, בת מצווה ומוצרי Fine Art לבית.
            </p>
            <div className="reveal-up-delay-2 mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="#contact" className="gold-gradient rounded-full px-8 py-4 font-bold text-white shadow-[0_20px_45px_rgba(201,147,50,.32)] transition hover:scale-105">קבלת הצעת מחיר</a>
              <a href="#gallery" className="rounded-full border border-[#c99332]/45 bg-white/60 px-8 py-4 font-bold text-[#1d2422] backdrop-blur-md transition hover:bg-white">צפייה בגלריה</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_.8fr] md:items-center">
          <div>
            <div className="mb-4 text-sm tracking-[.32em] text-[#c99332]">VISUAL PHILOSOPHY</div>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-7xl">לא עוד צילום. חוויה שנראית כמו קמפיין יוקרה.</h2>
          </div>
          <div className="rounded-[34px] border border-[#ead9b5] bg-[#fff7e8]/70 p-8 shadow-[0_30px_80px_rgba(29,36,34,.08)]">
            <p className="text-xl leading-10 text-[#5d5750]">
              ב־Visual Art כל פריים נבנה מתוך מחשבה על אור, קומפוזיציה, רגש ונוכחות. המטרה היא להפוך רגעים לתוצרים מוחשיים: אלבומים, קנבסים והדפסות Fine Art שנשארים איתך לאורך שנים.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f0e2] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 text-sm tracking-[.32em] text-[#c99332]">SERVICES</div>
              <h2 className="font-serif text-5xl font-semibold md:text-7xl">שירותי צילום</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#625c54]">כל שירות נבנה כחוויה מלאה — מהרעיון, דרך הצילום ועד לתוצר הסופי.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([title, text, image]) => (
              <article key={title} className="image-card group relative h-[440px] overflow-hidden rounded-[34px] bg-[#0f3d3e] shadow-[0_28px_80px_rgba(29,36,34,.16)]">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101817]/90 via-[#101817]/22 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="font-serif text-4xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-8 text-white/82">{text}</p>
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
            <div className="mb-4 text-sm tracking-[.32em] text-[#c99332]">PORTFOLIO</div>
            <h2 className="font-serif text-5xl font-semibold md:text-7xl">גלריה קולנועית</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#625c54]">דוגמאות דמו בלבד — בהמשך נחליף לתמונות המקוריות שלך ונבנה תיק עבודות מלא לפי קטגוריות.</p>
          </div>
          <div className="masonry columns-1 md:columns-3">
            {gallery.map(([src, height], i) => (
              <div key={src} className={`masonry-item image-card overflow-hidden rounded-[34px] shadow-[0_28px_80px_rgba(29,36,34,.12)] ${height}`}>
                <img src={src} alt={`Visual Art portfolio ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#0f3d3e] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <div className="mb-4 text-sm tracking-[.32em] text-[#e0bd73]">THE EXPERIENCE</div>
            <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">מהרעיון הראשון ועד לתמונה שתישאר איתך שנים</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            {steps.map(([num, title, text]) => (
              <div key={num} className="rounded-[30px] border border-white/12 bg-white/[.07] p-6 backdrop-blur-md">
                <div className="mb-8 font-serif text-4xl text-[#e0bd73]">{num}</div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-stretch">
          <div className="rounded-[42px] bg-[#f7f0e2] p-10 shadow-[0_28px_80px_rgba(29,36,34,.08)] md:p-14">
            <div className="mb-4 text-sm tracking-[.32em] text-[#c99332]">FINE ART PRODUCTS</div>
            <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">זיכרונות שלא נשארים רק במסך</h2>
            <p className="mt-6 text-lg leading-9 text-[#625c54]">אלבומי פרימיום, קנבסים, הדפסות זכוכית ותמונות קיר — מוצרים מוחשיים שמכניסים רגש, עומק ואופי לבית.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['אלבומי פרימיום', 'קנבסים מעוצבים', 'הדפסות זכוכית', 'Fine Art Wall Prints'].map((item) => (
              <div key={item} className="rounded-[34px] border border-[#ead9b5] bg-white p-8 shadow-[0_20px_55px_rgba(29,36,34,.07)]">
                <div className="mb-8 h-px w-20 bg-[#c99332]" />
                <h3 className="font-serif text-3xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f0e2] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.85fr_1fr] md:items-center">
          <div>
            <div className="mb-4 text-sm tracking-[.32em] text-[#c99332]">INQUIRY</div>
            <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">רוצים לקבל הצעת מחיר מותאמת אישית?</h2>
            <p className="mt-6 text-lg leading-9 text-[#625c54]">השאירו פרטים ונחזור אליכם לתיאום סשן שמתאים בדיוק לסגנון, למטרה ולחוויה שאתם מחפשים.</p>
          </div>
          <form className="rounded-[42px] border border-white/80 bg-white/70 p-7 shadow-[0_30px_90px_rgba(29,36,34,.12)] backdrop-blur-md md:p-10">
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
            <textarea className="mt-5 min-h-[140px] w-full rounded-[28px] border border-[#c99332]/25 bg-white/75 p-5 outline-none transition focus:border-[#c99332] focus:ring-4 focus:ring-[#c99332]/10" placeholder="ספרו לנו בקצרה מה אתם מחפשים" />
            <div className="mt-7 flex flex-wrap gap-4">
              <button type="button" className="gold-gradient rounded-full px-8 py-4 font-bold text-white shadow-[0_20px_45px_rgba(201,147,50,.28)]">שליחת פרטים</button>
              <a href="https://wa.me/972000000000" className="rounded-full border border-[#c99332]/45 bg-white/70 px-8 py-4 font-bold text-[#1d2422]">WhatsApp</a>
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
