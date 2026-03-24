import {
  Award,
  Check,
  ChevronDown,
  Leaf,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ORDER_URL = "https://www-bellyflush.com/";
const PRODUCT_IMAGE =
  "/assets/uploads/image-019d1f0d-7304-775c-93a6-7661e035264e-1.png";
const PRICING_IMAGE =
  "/assets/uploads/screenshot_2025-11-19_151256-019d1f35-ccd0-70aa-bb4f-62b20cdcb0ed-1.png";

function OrderButton({
  children,
  className = "",
  ocid,
}: {
  children: React.ReactNode;
  className?: string;
  ocid?: string;
}) {
  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className={`inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((k) => (
        <Star key={k} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

const faqs = [
  {
    q: "Will I be charged repeatedly?",
    a: "No. BellyFlush is a one-time purchase only. There are no hidden fees or automatic rebills. Order with confidence!",
  },
  {
    q: "Does BellyFlush really work?",
    a: "Absolutely. BellyFlush has helped thousands of people experience smoother digestion, easier bowel movements, and noticeable relief. And remember—your order is protected by our full 365-day money-back guarantee, so BellyFlush has to work for you, or you get every penny back.",
  },
  {
    q: "How soon will I see results?",
    a: "Many customers notice changes within the first few hours. Some experience their first bowel movement in 2 hours, while others see results the next day. On average, users experience 5–6 additional comfortable bowel movements over the following days as the body naturally flushes accumulated waste.",
  },
  {
    q: "How do I take BellyFlush?",
    a: "Simply take 2 easy-to-swallow capsules per day. We recommend taking them in the morning with a full glass of water. Staying hydrated enhances the cleansing effect.",
  },
  {
    q: "What if BellyFlush doesn't work for me?",
    a: "Every purchase is backed by our 365-Day Money-Back Guarantee. If you're not satisfied for any reason, simply call us at 1-800-259-9522 or email our support team, and we'll issue a complete refund—no questions asked.",
  },
  {
    q: "I'm ready! What happens next?",
    a: "Click the button below to choose your package. You'll be redirected to our 100% secure checkout page. Once you complete your order, we'll ship BellyFlush straight to your doorstep.",
  },
];

const ingredients = [
  {
    name: "Cascara Sagrada Bark",
    desc: "A traditional North American herb known for its effective natural laxative benefits. Often used to relieve constipation and cleanse the colon.",
  },
  {
    name: "Cape Aloe Leaf",
    desc: "Historically recognized for its soothing properties, Cape Aloe softens stool and supports regular bowel movements. Research supports its benefits for IBS, constipation, and gas relief.",
  },
  {
    name: "Senna Alata Extract",
    desc: "A well-known herbal remedy commonly consumed as tea for relieving occasional constipation. Its active compounds provide a strong, natural laxative effect.",
  },
  {
    name: "Triphala Fruit",
    desc: "A traditional Ayurvedic blend of Amla, Haritaki, and Bibhitaki — highly regarded for its cleansing effects and widely used to ease constipation.",
  },
  {
    name: "Fennel Seeds",
    desc: "A popular digestive herb known to relax the digestive tract, reducing gas, bloating, and stomach cramps while supporting smoother digestion.",
  },
  {
    name: "Slippery Elm Bark",
    desc: "Helps soothe and protect the lining of the stomach and intestines. Research shows benefits for Crohn's disease, IBS, and ulcerative colitis.",
  },
  {
    name: "Cayenne Pepper Fruit",
    desc: "Packed with capsaicin, cayenne increases digestive fire, boosts nutrient absorption, and promotes bowel regularity by stimulating intestinal movement.",
  },
  {
    name: "Milk Thistle",
    desc: "A Mediterranean herb known for supporting digestion, easing bloating, and helping maintain healthy liver function.",
  },
  {
    name: "Licorice Root",
    desc: "One of the oldest herbal remedies in the world, shown to ease heartburn, acid reflux, and digestive irritation.",
  },
  {
    name: "Marshmallow Root",
    desc: "A soothing herb used for centuries to relieve constipation, heartburn, and gut discomfort by coating and calming the digestive tract.",
  },
];

const benefits = [
  {
    icon: "🌿",
    title: "Enhanced Detoxification & Waste Removal",
    desc: "Helps your body naturally eliminate harmful buildup for smoother, healthier digestion.",
  },
  {
    icon: "💨",
    title: "Reduced Bloating & Digestive Discomfort",
    desc: "Supports gut balance and minimizes gas production, helping you feel lighter and more comfortable.",
  },
  {
    icon: "⚡",
    title: "Boosted Energy & Vitality",
    desc: "Better digestion leads to improved nutrient absorption, resulting in higher energy levels and wellbeing.",
  },
  {
    icon: "⚖️",
    title: "Supports Healthy Weight Management",
    desc: "Encourages regular bowel movements and efficient digestion, which may help the body shed stubborn waste.",
  },
  {
    icon: "🦠",
    title: "Improved Gut Health",
    desc: "Helps strengthen the gut lining, support good bacteria, and reduce digestive inflammation.",
  },
  {
    icon: "🔄",
    title: "Supports Long-Term Digestive Wellness",
    desc: "By promoting a clean and healthy digestive tract, BellyFlush may help reduce risks associated with long-term gut imbalance.",
  },
];

const reviews = [
  {
    name: "Aigul D.",
    location: "Washington, USA",
    text: "I used to dread going to the bathroom because I'd sit there for ages. After using BellyFlush, everything changed. The first day nothing happened, but by day 2—wow! Total relief. This really works.",
    initials: "AD",
  },
  {
    name: "Jonathan",
    location: "New York, USA",
    text: "I struggled with constipation and was skeptical at first. But by Day 4—BOOM! Huge relief. I felt lighter and more regular than ever. Highly recommend!",
    initials: "JN",
  },
  {
    name: "Britney D.",
    location: "North Carolina, USA",
    text: "I was always bloated and looked months pregnant. BellyFlush emptied me out gently without cramping. Amazing product—I'm buying more!",
    initials: "BD",
  },
];

const trustBadges = [
  {
    icon: <Award className="w-8 h-8 text-navy" />,
    title: "Made in USA",
    desc: "Proudly made in the USA using the highest-quality natural ingredients.",
  },
  {
    icon: <Check className="w-8 h-8 text-navy" />,
    title: "GMP Certified",
    desc: "Manufactured in facilities following strict Good Manufacturing Practice guidelines.",
  },
  {
    icon: <Shield className="w-8 h-8 text-navy" />,
    title: "FDA Registered Facility",
    desc: "Produced in an FDA-registered facility adhering to safety and quality standards.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-navy" />,
    title: "100% Natural",
    desc: "Non-GMO, gluten-free, and made using only safe, natural, plant-based ingredients.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Cleanse",
    desc: "Natural laxatives and detoxifying herbs loosen and soften accumulated waste, preparing it for elimination.",
  },
  {
    step: "02",
    title: "Balance",
    desc: "Fiber-rich ingredients like fennel seed improve bowel regularity and restore healthy gut flora balance.",
  },
  {
    step: "03",
    title: "Revitalize",
    desc: "Cayenne, milk thistle, and other actives enhance nutrient absorption and promote overall digestive wellness.",
  },
];

const footerLinks = [
  { label: "What is BellyFlush?", href: "#what-is" },
  { label: "How Does BellyFlush Work?", href: "#how-it-works" },
  { label: "BellyFlush Ingredients", href: "#ingredients" },
  { label: "Privacy Policy", href: ORDER_URL },
  { label: "Disclaimer", href: ORDER_URL },
  { label: "Terms Of Use", href: ORDER_URL },
  { label: "Order Support", href: ORDER_URL },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card shadow-xs">
      <button
        type="button"
        data-ocid={`faq.item.${index + 1}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#111418] hover:bg-background transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-navy flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-[#66727F] leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* STICKY NAV */}
      <header
        data-ocid="nav.panel"
        className="sticky top-0 z-50 bg-white border-b border-border shadow-xs"
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-extrabold text-navy tracking-tight"
          >
            BellyFlush™
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              data-ocid="nav.link"
              href="#what-is"
              className="text-sm font-medium text-[#66727F] hover:text-navy transition-colors"
            >
              BellyFlush
            </a>
            <a
              data-ocid="nav.link"
              href="#how-it-works"
              className="text-sm font-medium text-[#66727F] hover:text-navy transition-colors"
            >
              How It Works
            </a>
            <a
              data-ocid="nav.link"
              href="#pricing"
              className="text-sm font-medium text-[#66727F] hover:text-navy transition-colors"
            >
              Price
            </a>
          </nav>
          <OrderButton
            ocid="nav.primary_button"
            className="bg-navy text-white px-5 py-2.5 text-sm shadow-md hover:bg-navy-dark"
          >
            ORDER NOW
          </OrderButton>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="hero"
          data-ocid="hero.section"
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a1f35 0%, #0F2F4E 50%, #123A5D 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #F2C94C, transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
            style={{
              background: "radial-gradient(circle, #F2C94C, transparent)",
            }}
          />

          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white order-2 md:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  Limited Time: 81% Off
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                  BellyFlush
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-gold mb-4 leading-snug">
                  Support Smooth Digestion, Reduce Bloating & Promote a Flatter
                  Stomach
                </p>
                <p className="text-white/75 mb-8 leading-relaxed text-base">
                  BellyFlush is a powerful natural supplement crafted to support
                  smooth digestion, reduce uncomfortable bloating, and promote a
                  flatter, healthier stomach. Developed by Simple Promise, it
                  features a blend of detoxifying herbs and probiotics designed
                  to help remove old waste buildup from your digestive tract.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <OrderButton
                    ocid="hero.primary_button"
                    className="bg-gold text-navy px-8 py-4 text-base shadow-hero"
                  >
                    🎁 GET 81% DISCOUNT
                  </OrderButton>
                  <OrderButton
                    ocid="hero.secondary_button"
                    className="bg-white/15 text-white border border-white/30 px-8 py-4 text-base backdrop-blur-sm"
                  >
                    OFFICIAL WEBSITE
                  </OrderButton>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {STAR_KEYS.map((k) => (
                      <Star key={k} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-white font-bold">5.0</span>
                  <span className="text-white/60 text-sm">
                    / 144,189 Reviews
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                    style={{ background: "#F2C94C" }}
                  />
                  <img
                    src={PRODUCT_IMAGE}
                    alt="BellyFlush supplement bottle"
                    className="relative w-72 md:w-96 drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-white/5 border-t border-white/10 py-4">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
              <div className="flex">
                {STAR_KEYS.map((k) => (
                  <Star key={k} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">
                Loved by Thousands · 144,189+ Verified Reviews
              </span>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section
          data-ocid="trust.section"
          className="bg-white border-b border-border py-10"
        >
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-sm font-semibold text-[#66727F] uppercase tracking-widest mb-8">
              Why Choose BellyFlush?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((b) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center gap-3 p-5"
                >
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-xs">
                    {b.icon}
                  </div>
                  <p className="font-bold text-[#111418]">{b.title}</p>
                  <p className="text-xs text-[#66727F] leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section
          id="reviews"
          data-ocid="reviews.section"
          className="py-16 bg-background"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-3">
              BellyFlush Reviews
            </h2>
            <p className="text-center text-[#66727F] mb-12">
              Real results from real customers
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  data-ocid={`reviews.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <StarRating />
                      <span className="text-xs text-green-600 font-medium">
                        ✅ Verified Purchase
                      </span>
                    </div>
                  </div>
                  <p className="text-[#111418] leading-relaxed italic text-sm flex-1">
                    "{r.text}"
                  </p>
                  <p className="font-bold text-navy text-sm">
                    {r.name} —{" "}
                    <span className="font-normal text-[#66727F]">
                      {r.location}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS BELLYFLUSH */}
        <section
          id="what-is"
          data-ocid="what-is.section"
          className="py-16 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-12">
              What Is BellyFlush?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src={PRODUCT_IMAGE}
                  alt="BellyFlush bottle"
                  className="w-64 md:w-80 drop-shadow-xl"
                />
              </div>
              <div>
                <p className="text-[#111418] leading-relaxed mb-4">
                  <strong>BellyFlush™</strong> is a gentle yet effective colon
                  cleanse formula that supports smoother digestion, relieves
                  constipation, reduces heaviness, and promotes long-term gut
                  balance.
                </p>
                <p className="text-[#66727F] leading-relaxed mb-4">
                  Made from premium natural extracts, the ingredients work
                  quickly—often within days—to improve bowel movements and
                  enhance digestive comfort.
                </p>
                <p className="text-[#66727F] leading-relaxed mb-4">
                  This blend brings together nature's most potent detoxifying
                  herbs to help your body naturally flush out built-up waste.
                  Daily use supports stronger digestion, improved energy,
                  reduced bloating, and overall better gut health.
                </p>
                <p className="text-[#66727F] leading-relaxed mb-8">
                  Experience a lighter, healthier, more comfortable body with
                  BellyFlush. Try it today!
                </p>
                <OrderButton
                  ocid="what-is.primary_button"
                  className="bg-navy text-white px-8 py-4 text-base shadow-hero"
                >
                  SHOP NOW
                </OrderButton>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          data-ocid="how-it-works.section"
          className="py-16 bg-background"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-6">
              How Does BellyFlush Work?
            </h2>
            <p className="text-center text-[#66727F] mb-12 leading-relaxed">
              BellyFlush works by targeting built-up waste inside your digestive
              tract. Its unique blend of natural laxatives, fiber-rich
              ingredients, and detoxifying herbs promotes smoother, more regular
              bowel movements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {howItWorks.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border text-center"
                >
                  <div className="text-4xl font-extrabold text-gold mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#66727F] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-[#66727F] text-center leading-relaxed">
              Many people unknowingly carry pounds of excess waste in their
              digestive system. This buildup can lead to bloating, fatigue, and
              poor gut health. Each serving of BellyFlush helps loosen, soften,
              and gently push out this accumulated waste.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          data-ocid="pricing.section"
          className="py-16"
          style={{ background: "linear-gradient(135deg, #0a1f35, #123A5D)" }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block bg-gold text-navy font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                ⏰ LIMITED TIME SPECIAL PRICING — ACT NOW!
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Secure Your BellyFlush Bottles
              </h2>
              <p className="text-white/70">While Stocks Last!</p>
            </div>

            {/* Pricing Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <img
                src={PRICING_IMAGE}
                alt="BellyFlush Pricing Details"
                className="w-full max-w-3xl rounded-xl shadow-2xl drop-shadow-2xl"
              />
            </motion.div>

            {/* Single CTA below image */}
            <div className="flex justify-center">
              <OrderButton
                ocid="pricing.primary_button.1"
                className="bg-gold text-navy px-12 py-4 text-lg shadow-hero"
              >
                ADD TO CART
              </OrderButton>
            </div>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section
          id="ingredients"
          data-ocid="ingredients.section"
          className="py-16 bg-white"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-3">
              BellyFlush Ingredients
            </h2>
            <p className="text-center text-[#66727F] mb-10 leading-relaxed">
              Every serving of BellyFlush is packed with a potent blend of
              natural ingredients formulated to promote smooth, consistent
              digestion.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  data-ocid={`ingredients.item.${i + 1}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 p-5 rounded-xl bg-background border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-navy mb-1">{ing.name}</p>
                    <p className="text-[#66727F] text-sm leading-relaxed">
                      {ing.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section data-ocid="guarantee.section" className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center shadow-hero">
                  <Shield className="w-12 h-12 text-gold" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111418] mb-4">
                BellyFlush 365-Day
                <br />
                Money-Back Guarantee
              </h2>
              <p className="text-[#66727F] leading-relaxed mb-6">
                We stand by every bottle of BellyFlush with a powerful{" "}
                <strong>365-Day Ironclad Guarantee</strong>. If you don't
                experience noticeable improvements—or simply aren't
                satisfied—you're entitled to a full, hassle-free refund.
              </p>
              <p className="text-[#66727F] leading-relaxed mb-8">
                Simply reach out to our customer support team within 365 days of
                your purchase. Even if your bottles are empty, you can still
                request a refund—no questions asked. This gives you an entire
                year to try BellyFlush and decide if it's right for you.
              </p>
              <OrderButton
                ocid="guarantee.primary_button"
                className="bg-gold text-navy px-10 py-4 text-base shadow-hero"
              >
                🛡️ GET YOUR BOTTLE TODAY
              </OrderButton>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section data-ocid="benefits.section" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-3">
              Benefits of BellyFlush Supplement
            </h2>
            <p className="text-center text-[#66727F] mb-12 leading-relaxed">
              Feel the remarkable difference BellyFlush can make. With
              consistent use, enjoy smoother digestion, reduced discomfort, and
              a healthier, more energized you.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border shadow-xs"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-navy mb-2 text-sm">
                    {b.title}
                  </h3>
                  <p className="text-[#66727F] text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          data-ocid="faq.section"
          className="py-16 bg-background"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#111418] mb-12">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          data-ocid="cta.section"
          className="py-20 text-white"
          style={{
            background: "linear-gradient(135deg, #0a1f35 0%, #123A5D 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Order Your Discounted BellyFlush Bottle Now!
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Claim Your Discounted BellyFlush Below While Stocks Last!
            </p>
            <div className="flex justify-center mb-8">
              <img
                src={PRODUCT_IMAGE}
                alt="BellyFlush"
                className="w-48 drop-shadow-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-white/50 line-through text-sm">
                  Regular Price: $99/bottle
                </p>
                <p className="text-gold font-extrabold text-2xl">
                  Today's Price: $33/bottle
                </p>
              </div>
            </div>
            <OrderButton
              ocid="cta.primary_button"
              className="bg-gold text-navy px-12 py-5 text-lg shadow-hero"
            >
              🎁 GET 81% DISCOUNT NOW
            </OrderButton>
            <p className="text-white/50 text-xs mt-6">
              365-Day Money-Back Guarantee · Free Shipping · One-Time Purchase
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        data-ocid="footer.section"
        className="bg-[#0a1f35] text-white/60 py-12"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                data-ocid="footer.link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Please note that the information we provide is not intended to
              replace consultation with a qualified medical professional.
              Statements on this website have not been evaluated by the Food and
              Drug Administration. Products are not intended to diagnose, treat,
              cure or prevent any disease. If you are pregnant, nursing, taking
              medication, or have a medical condition, consult your physician
              before using our products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-center">
                © {year} Copyright BellyFlush — All Rights Reserved
              </p>
              <p className="text-xs text-center">
                Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
