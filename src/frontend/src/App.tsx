import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  CheckCircle2,
  ChevronRight,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const ORDER_LINK = "https://official-glycolean.com/";
const PRODUCT_IMAGE =
  "/assets/uploads/image-019d1fec-a40b-70eb-aa95-80c17e5769ee-1.png";
const PRICING_IMAGE =
  "/assets/uploads/image-019d1f5c-7f55-77ca-b12a-f6774ef4663a-1.png";

function OrderButton({
  className = "",
  label = "ORDER NOW",
  dataOcid = "order.primary_button",
}: { className?: string; label?: string; dataOcid?: string }) {
  return (
    <a
      href={ORDER_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={dataOcid}
    >
      <Button
        className={`bg-brand hover:bg-brand-dark text-white font-bold uppercase tracking-wide rounded-full shadow-hero transition-all duration-200 ${className}`}
        style={{ backgroundColor: "#B11E2A" }}
      >
        {label}
      </Button>
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  const trustBadges = [
    {
      icon: <Leaf className="w-8 h-8" style={{ color: "#B11E2A" }} />,
      label: "100% Natural Ingredients",
    },
    {
      icon: <Award className="w-8 h-8" style={{ color: "#B11E2A" }} />,
      label: "Made In USA",
    },
    {
      icon: <FlaskConical className="w-8 h-8" style={{ color: "#B11E2A" }} />,
      label: "GMP Certified Facility",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" style={{ color: "#B11E2A" }} />,
      label: "FDA Registered Facility",
    },
  ];

  const testimonials = [
    {
      name: "Emily Carter",
      location: "Chicago, Illinois",
      stars: 5,
      text: "I started using Glyco Lean a few weeks ago to help support my overall wellness. I've noticed my daily energy feels more balanced and I don't experience the same mid-day slump I used to have. It fits perfectly into my routine.",
    },
    {
      name: "Jennifer Bennett",
      location: "Denver, Colorado",
      stars: 5,
      text: "Glyco Lean has been a great addition to my health routine. I feel more consistent energy during the day and fewer cravings between meals. I also like that the formula focuses on natural ingredients.",
    },
    {
      name: "Laura Mitchell",
      location: "Phoenix, Arizona",
      stars: 5,
      text: "After using Glyco Lean for about a month, I've noticed better energy throughout my day. It has also helped me stay more mindful about my eating habits and maintain a healthier routine.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Supporting Healthy Insulin Function",
      desc: "Proper insulin activity plays a key role in helping glucose move from the bloodstream into cells where it can be used for energy. Glyco Lean includes nutrients that help support insulin sensitivity and efficient glucose utilization.",
    },
    {
      step: "02",
      title: "Encouraging Healthy Glucose Metabolism",
      desc: "Glyco Lean contains plant-based ingredients and essential minerals that help support the body's ability to process carbohydrates more efficiently, promoting balanced metabolic function throughout the day.",
    },
    {
      step: "03",
      title: "Helping Reduce Sugar Cravings",
      desc: "Blood sugar fluctuations can sometimes lead to frequent cravings for sugary foods. Glyco Lean includes botanical ingredients that may support balanced glucose absorption and help reduce unnecessary sugar cravings.",
    },
    {
      step: "04",
      title: "Promoting Natural Energy & Metabolic Balance",
      desc: "Glyco Lean also supports the body's natural metabolic activity by helping convert nutrients into usable energy — assisting in maintaining consistent vitality and supporting overall metabolic wellness.",
    },
  ];

  const keyBenefits = [
    {
      icon: <Activity className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Supports Healthy Blood Sugar Balance",
      desc: "Helps support balanced glucose levels by assisting the body's natural insulin response and encouraging efficient glucose utilization.",
    },
    {
      icon: <Droplets className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Helps Control Sugar Cravings",
      desc: "Botanical ingredients may help support balanced glucose absorption, reducing cravings for sugary foods.",
    },
    {
      icon: <Zap className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Promotes Steady Energy Levels",
      desc: "Helps maintain stable blood sugar to support consistent daily energy and reduce fatigue from glucose fluctuations.",
    },
    {
      icon: <Sparkles className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Supports Healthy Metabolism",
      desc: "Assists the body's natural metabolic processes by supporting efficient carbohydrate metabolism and nutrient utilization.",
    },
    {
      icon: <Scale className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Encourages Healthy Weight Goals",
      desc: "Balanced blood sugar and reduced cravings may support healthier eating patterns and maintaining a balanced weight.",
    },
    {
      icon: <Heart className="w-6 h-6" style={{ color: "#B11E2A" }} />,
      title: "Supports Overall Wellness",
      desc: "Natural plant compounds and antioxidants help support metabolic health and promote overall daily wellness.",
    },
  ];

  const ingredients = [
    {
      name: "Green Tea Extract",
      desc: "Contains natural antioxidants and beneficial compounds that help support healthy metabolism and promote balanced energy levels throughout the day.",
      emoji: "🍵",
    },
    {
      name: "Grape Seed Extract",
      desc: "Rich in antioxidants that help protect cells from oxidative stress while supporting healthy circulation and metabolic balance.",
      emoji: "🍇",
    },
    {
      name: "Eleutherococcus Senticosus",
      desc: "Often referred to as Siberian ginseng, this adaptogenic herb helps support energy, resilience to stress, and overall metabolic function.",
      emoji: "🌿",
    },
    {
      name: "Maca Root Extract",
      desc: "Traditionally used to help promote natural energy levels, endurance, and metabolic balance while supporting overall vitality.",
      emoji: "🌱",
    },
    {
      name: "African Mango Seed Extract",
      desc: "Traditionally used to support healthy metabolism and appetite balance while promoting overall metabolic wellness.",
      emoji: "🥭",
    },
    {
      name: "Astragalus Root Extract",
      desc: "A traditional herbal ingredient known for supporting immune health, metabolic balance, and overall wellness.",
      emoji: "🌾",
    },
  ];

  const faqs = [
    {
      q: "1. What are Glyco Lean Drops?",
      a: "Glyco Lean Drops are a natural dietary supplement designed to support balanced blood sugar levels, healthy metabolism, and steady daily energy. The formula contains plant-based extracts, vitamins, and minerals that work with the body's natural processes to promote overall metabolic wellness.",
    },
    {
      q: "2. How do Glyco Lean Drops work?",
      a: "Glyco Lean Drops support the body's natural glucose metabolism and insulin function. The carefully selected ingredients help the body process carbohydrates efficiently, which may contribute to balanced blood sugar levels and consistent energy throughout the day.",
    },
    {
      q: "3. Who should consider using Glyco Lean Drops?",
      a: "Glyco Lean Drops are designed for adults who want to support healthy blood sugar balance and metabolic health. If you are pregnant, nursing, taking medication, or managing a medical condition, consult a healthcare professional before using this supplement.",
    },
    {
      q: "4. How should Glyco Lean Drops be used?",
      a: "For best results, follow the serving instructions listed on the product label. Regular daily use combined with a balanced diet and active lifestyle can help support optimal metabolic wellness.",
    },
    {
      q: "5. When can I expect to see results?",
      a: "Results may vary depending on individual health, diet, and lifestyle. Many users choose to take Glyco Lean Drops consistently for several weeks as part of their wellness routine to support balanced energy and metabolic health.",
    },
    {
      q: "6. Are Glyco Lean Drops safe?",
      a: "Glyco Lean Drops are formulated using natural ingredients and are generally well tolerated. However, individuals with allergies or existing medical conditions should consult a healthcare professional before adding any new dietary supplement to their routine.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs"
        data-ocid="header.section"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#B11E2A" }}
            >
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "#B11E2A" }}
            >
              Glyco Lean™
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.section"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                className="text-sm font-medium text-gray-700 hover:text-red-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <OrderButton
              label="ORDER NOW"
              className="hidden md:inline-flex px-5 py-2 text-sm"
              dataOcid="header.order.primary_button"
            />
            <button
              type="button"
              className="md:hidden p-2 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-ocid="nav.mobile.toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3"
            data-ocid="nav.mobile.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <OrderButton
              label="ORDER NOW"
              className="w-full justify-center mt-2"
              dataOcid="mobile.order.primary_button"
            />
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="home"
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #fff 60%, #F6D7D8 100%)",
          }}
          data-ocid="hero.section"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <Badge
                  className="mb-4 text-white uppercase text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#B11E2A" }}
                >
                  Advanced Natural Formula
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 mb-6">
                  Glyco Lean™ –{" "}
                  <span style={{ color: "#B11E2A" }}>
                    Advanced Natural Support
                  </span>{" "}
                  for Healthy Blood Sugar and Metabolic Balance
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Glyco Lean™ is a premium plant-based dietary supplement
                  designed to support balanced blood sugar levels, healthy
                  metabolism, and consistent daily energy. Carefully selected
                  herbal extracts work together to support metabolic function
                  and promote stable energy throughout the day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <OrderButton
                    label="Order Glyco Lean Today – Only $49 Per Bottle"
                    className="text-sm px-6 py-3 text-base"
                    dataOcid="hero.order.primary_button"
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#B11E2A" }}
                    />{" "}
                    Doctor Recommended
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#B11E2A" }}
                    />{" "}
                    Made in USA
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#B11E2A" }}
                    />{" "}
                    FDA Registered Facility
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                    style={{ backgroundColor: "#B11E2A" }}
                  />
                  <img
                    src={PRODUCT_IMAGE}
                    alt="Glyco Lean product bottle"
                    className="relative z-10 w-72 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section
          className="py-10 border-y border-gray-200 bg-gray-50"
          data-ocid="trust.section"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center text-center gap-3 p-4"
                >
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS GLYCO LEAN ── */}
        <section
          id="benefits"
          className="py-16 md:py-24 bg-white"
          data-ocid="about.section"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What is <span style={{ color: "#B11E2A" }}>Glyco Lean™?</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Glyco Lean™ is a plant-based dietary supplement designed to
                  support balanced blood sugar levels and healthy metabolic
                  function. Maintaining stable glucose levels is essential for
                  sustained energy, mental clarity, and overall wellness.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Helps support balanced blood sugar levels",
                    "Promotes steady daily energy",
                    "Supports reduced sugar cravings",
                    "Encourages healthy metabolic function",
                    "Made with carefully selected natural ingredients",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "#B11E2A" }}
                      />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <OrderButton
                  label="Order Glyco Lean Today"
                  className="px-7 py-3"
                  dataOcid="about.order.primary_button"
                />
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-10"
                    style={{ backgroundColor: "#B11E2A" }}
                  />
                  <img
                    src={PRODUCT_IMAGE}
                    alt="Glyco Lean bottle"
                    className="relative z-10 w-64 md:w-80 object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          id="reviews"
          className="py-16 md:py-24"
          style={{ backgroundColor: "#F9F3F3" }}
          data-ocid="reviews.section"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                What Customers Are Saying
              </h2>
              <p className="text-gray-500 text-lg">
                Real experiences from real people
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  data-ocid={`reviews.item.${i + 1}`}
                  className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
                >
                  <div className="flex mb-3">
                    <>
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.location} • Verified Buyer
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          id="how-it-works"
          className="py-16 md:py-24 bg-white"
          data-ocid="how-it-works.section"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                How <span style={{ color: "#B11E2A" }}>Glyco Lean</span>{" "}
                Supports Healthy Blood Sugar Balance
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Glyco Lean Drops are designed to support natural blood sugar
                balance, metabolic health, and steady daily energy using a
                carefully crafted plant-based formula.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-card transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: "#B11E2A" }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section
          id="pricing"
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #B11E2A 0%, #8F1721 100%)",
          }}
          data-ocid="pricing.section"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Limited Time Special Pricing – Act Now!
              </h2>
              <p className="text-red-200 text-lg">
                Secure your supply before it runs out
              </p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <img
                src={PRICING_IMAGE}
                alt="Glyco Lean Pricing Details"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl object-contain"
                data-ocid="pricing.card"
              />
              <OrderButton
                label="ORDER NOW"
                className="px-10 py-4 text-lg shadow-hero"
                dataOcid="pricing.order.primary_button"
              />
            </div>
          </div>
        </section>

        {/* ── KEY BENEFITS ── */}
        <section
          className="py-16 md:py-24 bg-white"
          data-ocid="key-benefits.section"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Key Benefits of{" "}
                <span style={{ color: "#B11E2A" }}>Glyco Lean</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Glyco Lean Drops are designed to help support balanced blood
                sugar levels and healthy metabolic function through a
                comprehensive, plant-based approach.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((b, i) => (
                <div
                  key={b.title}
                  data-ocid={`key-benefits.item.${i + 1}`}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-card transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MONEY BACK GUARANTEE ── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "#F9F3F3" }}
          data-ocid="guarantee.section"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div
                  className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-2xl mb-6"
                  style={{ backgroundColor: "#B11E2A" }}
                >
                  <ShieldCheck className="w-12 h-12 mb-1" />
                  <span className="text-xs uppercase tracking-wider">
                    Risk-Free
                  </span>
                  <span className="text-2xl font-extrabold">60</span>
                  <span className="text-xs uppercase">Day</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  60-Day Risk-Free Satisfaction Guarantee
                </h3>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Risk-Free 60-Day{" "}
                  <span style={{ color: "#B11E2A" }}>Money-Back Guarantee</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your satisfaction matters to us. That's why every order of
                  Glyco Lean Drops is protected by a full 60-day money-back
                  guarantee from the date of purchase. This allows you to try
                  the product with complete peace of mind.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you are not fully satisfied for any reason, simply contact
                  our customer support team within 60 days. We will guide you
                  through the quick and simple return process and provide a
                  refund according to our policy.
                </p>
                <OrderButton
                  label="Order Glyco Lean Today"
                  className="px-7 py-3"
                  dataOcid="guarantee.order.primary_button"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── NATURAL INGREDIENTS ── */}
        <section
          id="ingredients"
          className="py-16 md:py-24 bg-white"
          data-ocid="ingredients.section"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Natural Ingredients in{" "}
                <span style={{ color: "#B11E2A" }}>Glyco Lean™</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Glyco Lean Drops feature a powerful blend of carefully selected
                botanical extracts, vitamins, and essential nutrients designed
                to support balanced blood sugar levels, healthy metabolism, and
                steady daily energy.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {ingredients.map((ing, i) => (
                <div
                  key={ing.name}
                  data-ocid={`ingredients.item.${i + 1}`}
                  className="p-6 rounded-2xl border border-gray-100 hover:shadow-card hover:border-red-200 transition-all"
                >
                  <div className="text-4xl mb-3">{ing.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{ing.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {ing.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="py-16 md:py-24"
          style={{ backgroundColor: "#F9F3F3" }}
          data-ocid="faq.section"
        >
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500">
                Everything you need to know about Glyco Lean™
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
              data-ocid="faq.panel"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  data-ocid={`faq.item.${i + 1}`}
                  className="bg-white rounded-xl border border-gray-100 px-5 shadow-xs"
                >
                  <AccordionTrigger className="font-semibold text-gray-900 hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="py-16 md:py-24 bg-white"
          data-ocid="final-cta.section"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Don't Wait Any Longer!{" "}
                <span style={{ color: "#B11E2A" }}>
                  Order Discounted Glyco Lean
                </span>
              </h2>
              <p className="text-gray-500 text-lg">
                Limited time offer – secure your supply today
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img
                src={PRODUCT_IMAGE}
                alt="Glyco Lean"
                className="w-56 object-contain drop-shadow-xl"
              />
              <div className="text-center md:text-left">
                <p className="text-gray-400 line-through text-lg mb-1">
                  Regular Price: $79 per Bottle
                </p>
                <p
                  className="text-3xl font-extrabold mb-6"
                  style={{ color: "#B11E2A" }}
                >
                  Today Only: $49 per Bottle
                </p>
                <OrderButton
                  label="Order Now – $49 per Bottle"
                  className="text-lg px-10 py-4 shadow-hero"
                  dataOcid="final-cta.order.primary_button"
                />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ 60-Day Money Back Guarantee &nbsp;|&nbsp; ✓ Free Shipping
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong>Disclaimer:</strong> The information provided on this
              website is for general educational and informational purposes only
              and is not intended as medical advice. Glyco Lean™ is a natural
              dietary supplement designed to support overall wellness and
              healthy lifestyle habits. It is not intended to diagnose, treat,
              cure, or prevent any disease. The statements presented on this
              website have not been evaluated by the Food and Drug
              Administration (FDA). Individuals should consult a qualified
              healthcare professional before starting any dietary supplement,
              especially if pregnant, nursing, taking medication, or managing a
              medical condition. Individual results may vary.
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#2B2B2B" }}
        data-ocid="footer.section"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#B11E2A" }}
              >
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Glyco Lean™</span>
            </div>
            <nav
              className="flex flex-wrap gap-6 text-sm"
              data-ocid="footer.nav.section"
            >
              {[
                { label: "Home", href: "#home" },
                { label: "Privacy Policy", href: "#" },
                { label: "Disclaimer", href: "#" },
                { label: "Terms & Conditions", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Glyco Lean™. All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with <span className="text-red-500">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg hover:opacity-90 transition z-50"
        style={{ backgroundColor: "#B11E2A" }}
        data-ocid="scroll-top.button"
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-5 h-5 -rotate-90" />
      </a>
    </div>
  );
}
