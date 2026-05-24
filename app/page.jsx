'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Gem, Menu, MessageCircle, Sparkles, X } from 'lucide-react';

const services = [
  {
    title: 'צילום זוגיות',
    text: 'סשן אישי וקולנועי שמספר את הסיפור שלכם דרך אור, רגש ותנועה.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'צילום תדמית',
    text: 'צילום שמייצר נוכחות, אמון ומיתוג אישי ברמה גבוהה.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'צילום אופנה',
    text: 'Editorial style עם קומפוזיציות דרמטיות, סטיילינג ואווירת מגזין.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'בת מצווה',
    text: 'חוויה יוקרתית ומרגשת שמרגישה כמו הפקת אופנה אישית.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'אלבומים',
    text: 'אלבומי פרימיום מעוצבים שנשארים כמזכרת מוחשית לשנים.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'קנבסים',
    text: 'הפיכת רגעים נבחרים לפריטי עיצוב אמנותיים לבית.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85'
];

const process = [
  'שיחת אפיון והבנת הסגנון',
  'תכנון קונספט, לוקיישן ואווירה',
  'יום צילום מקצועי ומכוון',
  'עריכה אמנותית Fine Art',
  'בחירת אלבום, קנבס או הדפסה'
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="overflow-x-hidden bg-cream text-graphite">
      <header className="fixed left-4 right-4 top-4 z-50 rounded-full glass-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <button onClick={() => scrollTo('hero')} className="text-right">
            <div className="font-serif text-2xl tracking-[0.18em]">Visual Art</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Capturing Moments</div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <button onClick={() => scrollTo('services')}>שירותים</button>
            <button onClick={() => scrollTo('gallery')}>גלריה</button>
            <button onClick={() => scrollTo('process')}>התהליך</button>
            <button onClick={() => scrollTo('contact')}>יצירת קשר</button>
          </nav>

          <button onClick={() => scrollTo('contact')} className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-gold/20 md:block">
            קבלת הצעת מחיר
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#E8DDCC] px-6 pb-5 pt-2 md:hidden">
            <div className="grid gap-3 text-right text-sm">
              {[
                ['services', 'שירותים'],
                ['gallery', 'גלריה'],
                ['process', 'התהליך'],
                ['contact', 'יצירת קשר']
              ].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)}>{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="hero-bg relative flex min-h-screen items-center pt-28">
        <div className="luxury-container relative py-20">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-2 text-xs tracking-[0.2em] text-teal backdrop-blur">
              <Sparkles size={14} /> BRIGHT LUXURY CINEMATIC
            </div>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
              צילום שנשאר<br />כיצירת אמנות
            </h1>
            <p className="mt-5 text-lg tracking-[0.12em] text-gold">Capturing Moments. Creating Memories.</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#35403E] md:text-lg">
              חוויה ויזואלית יוקרתית לצילומי זוגיות, תדמית, אופנה, בת מצווה ומוצרי Fine Art לבית.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')} className="rounded-full bg-gold px-7 py-3 font-semibold text-white shadow-xl shadow-gold/20 transition hover:scale-105">
                קבלת הצעת מחיר
              </button>
              <button onClick={() => scrollTo('gallery')} className="rounded-full border border-gold bg-white/35 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/70">
                צפייה בגלריה
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="luxury-container grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-3 text-sm tracking-[0.25em] text-gold">VISUAL PHILOSOPHY</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">לא רק צילום. חוויה ויזואלית שנבנית כמו יצירת אמנות.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#48514F]">
              ב־Visual Art כל פריים נבנה מתוך מחשבה על אור, קומפוזיציה, רגש ונוכחות. המטרה היא לא רק לתעד רגע — אלא להפוך אותו לזיכרון מוחשי, אלגנטי ועל־זמני.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gold/15 blur-2xl" />
            <img className="relative h-[520px] w-full rounded-[3rem] object-cover shadow-2xl" src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85" alt="Visual Art photography" />
          </div>
        </div>
      </section>

      <section id="services" className="bg-sand px-4 py-24">
        <div className="luxury-container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm tracking-[0.25em] text-gold">SERVICES</p>
              <h2 className="font-serif text-4xl md:text-6xl">שירותי צילום</h2>
            </div>
            <p className="max-w-xl leading-8 text-[#48514F]">כל שירות נבנה כחוויה מלאה — מהרעיון, דרך הצילום, ועד לתוצר הסופי.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.div whileHover={{ y: -8 }} key={service.title} className="service-card group relative h-[420px] overflow-hidden rounded-[2rem] shadow-xl">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/20 to-transparent" />
                <div className="absolute bottom-0 p-7 text-white">
                  <h3 className="font-serif text-3xl">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/85">{service.text}</p>
                  <button onClick={() => scrollTo('contact')} className="mt-5 inline-flex items-center gap-2 text-sm text-[#E9C775]">
                    לפרטים והצעת מחיר <ArrowLeft size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 py-24">
        <div className="luxury-container">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold">PORTFOLIO</p>
          <h2 className="font-serif text-4xl md:text-6xl">רגעים שנראים כמו סצנות מתוך סרט</h2>
          <div className="mt-10 columns-1 gap-5 md:columns-3">
            {gallery.map((src, index) => (
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                key={src}
                src={src}
                alt="Portfolio sample"
                className="mb-5 w-full rounded-[2rem] object-cover shadow-lg transition duration-500 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-teal px-4 py-24 text-white">
        <div className="luxury-container">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold">EXPERIENCE</p>
          <h2 className="font-serif text-4xl md:text-6xl">מהרעיון הראשון ועד לתמונה שתישאר איתך שנים</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-xl text-white">{index + 1}</div>
                <p className="leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="luxury-container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-[3rem] bg-sand p-10 shadow-sm">
            <Gem className="mb-6 text-gold" size={42} />
            <h2 className="font-serif text-4xl md:text-5xl">זיכרונות שלא נשארים רק במסך</h2>
            <p className="mt-6 leading-9 text-[#48514F]">
              הרגעים החשובים ביותר יכולים להפוך לאלבום יוקרתי, קנבס מעוצב או יצירת קיר שמכניסה רגש, עומק ואופי לבית.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['אלבום פרימיום', 'קנבס מעוצב', 'הדפסות זכוכית', 'תמונות קיר Fine Art'].map((item) => (
              <div key={item} className="rounded-[2rem] border border-[#E5D8C2] bg-white p-6 shadow-sm">
                <CheckCircle className="mb-4 text-gold" />
                <h3 className="font-serif text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sand px-4 py-24">
        <div className="luxury-container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm tracking-[0.25em] text-gold">INQUIRY</p>
            <h2 className="font-serif text-4xl md:text-6xl">רוצים לקבל הצעת מחיר מותאמת אישית?</h2>
            <p className="mt-6 leading-9 text-[#48514F]">
              השאירו פרטים ונחזור אליכם לתיאום סשן צילום שמתאים בדיוק לסגנון, למטרה ולחוויה שאתם מחפשים.
            </p>
          </div>

          <form className="rounded-[3rem] border border-white/70 bg-white/70 p-7 shadow-xl backdrop-blur md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="input-field" placeholder="שם מלא" />
              <input className="input-field" placeholder="טלפון" />
              <select className="input-field" defaultValue="">
                <option value="" disabled>סוג צילום</option>
                <option>זוגיות</option>
                <option>תדמית</option>
                <option>אופנה</option>
                <option>בת מצווה</option>
                <option>אלבומים / קנבסים</option>
              </select>
              <input className="input-field" placeholder="תאריך רצוי" />
            </div>
            <textarea className="input-field mt-5 min-h-[130px]" placeholder="ספרו לנו בקצרה מה אתם מחפשים" />
            <div className="mt-6 flex flex-wrap gap-4">
              <button type="button" className="rounded-full bg-gold px-8 py-3 font-semibold text-white shadow-lg shadow-gold/20">שליחת פרטים</button>
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-3 font-semibold text-graphite">
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-graphite px-4 py-14 text-white">
        <div className="luxury-container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-4xl tracking-[0.18em]">Visual Art</div>
            <p className="mt-2 text-sm tracking-[0.18em] text-gold">Capturing Moments. Creating Memories.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/75">
            <span>WhatsApp</span>
            <span>Instagram</span>
            <span>מדיניות פרטיות</span>
            <span>הצהרת נגישות</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
