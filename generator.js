// Tailwind color mappings and themes
const COLORS = {
  green: {
    primary: "emerald-600",
    primaryHover: "emerald-700",
    secondary: "teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "bg-white", // Light mode white/gray theme base
    accent: "emerald-700",
    textDark: "text-slate-900",
    textLight: "text-slate-900",
    cardBg: "bg-slate-50",
    accentText: "text-emerald-700",
    mode: "light" // flag for light-mode rendering
  },
  blue: {
    primary: "blue-600",
    primaryHover: "blue-700",
    secondary: "indigo-500",
    bgLight: "bg-blue-50",
    bgDark: "bg-slate-900",
    accent: "teal-400",
    textDark: "text-slate-900",
    textLight: "text-white",
    cardBg: "bg-slate-800",
    accentText: "text-blue-400",
    mode: "dark"
  },
  red: {
    primary: "rose-600",
    primaryHover: "rose-700",
    secondary: "orange-500",
    bgLight: "bg-rose-50",
    bgDark: "bg-stone-900",
    accent: "amber-400",
    textDark: "text-stone-900",
    textLight: "text-white",
    cardBg: "bg-stone-800",
    accentText: "text-rose-400",
    mode: "dark"
  },
  purple: {
    primary: "purple-600",
    primaryHover: "purple-700",
    secondary: "fuchsia-500",
    bgLight: "bg-purple-50",
    bgDark: "bg-neutral-900",
    accent: "pink-400",
    textDark: "text-neutral-900",
    textLight: "text-white",
    cardBg: "bg-neutral-800",
    accentText: "text-purple-400",
    mode: "dark"
  },
  dark: {
    primary: "slate-800",
    primaryHover: "slate-700",
    secondary: "zinc-700",
    bgLight: "bg-slate-100",
    bgDark: "bg-slate-950",
    accent: "emerald-400",
    textDark: "text-slate-950",
    textLight: "text-white",
    cardBg: "bg-slate-900",
    accentText: "text-slate-300",
    mode: "dark"
  }
};

// Industry templates and mock content database
const INDUSTRIES = {
  saas: {
    keywords: ["saas", "software", "app", "tech", "platform", "cloud", "startup", "tool", "ai"],
    name: "SaaSify",
    tagline: "Supercharge your team's workflow and performance.",
    description: "The ultimate collaboration platform designed for modern, high-growth remote and hybrid teams. Keep everything aligned, automated, and secure.",
    features: [
      { title: "Real-time Sync", desc: "Collaborate effortlessly with instant updates across all connected devices and platforms.", icon: "zap" },
      { title: "Advanced Analytics", desc: "Track performance metrics, generate smart insights, and build beautiful reports instantly.", icon: "bar-chart-2" },
      { title: "Robust Security", desc: "Enterprise-grade encryption keeps your customer data and private intellectual property fully secure.", icon: "shield" }
    ],
    pricing: [
      { name: "Starter", price: "$19", desc: "Perfect for small teams getting started.", features: ["Up to 5 team members", "Core analytics platform", "10GB secured cloud storage", "Standard email support"] },
      { name: "Pro", price: "$49", desc: "Our most popular option for growing businesses.", features: ["Unlimited team members", "Advanced real-time analytics", "100GB secured cloud storage", "24/7 dedicated support", "Custom API Integrations"], popular: true },
      { name: "Enterprise", price: "Custom", desc: "Built for scale, security, and flexibility.", features: ["Dedicated database instances", "SAML SSO / Multi-factor auth", "Unlimited secured cloud storage", "Dedicated success manager", "Custom SLA & contract terms"] }
    ],
    testimonials: [
      { quote: "This platform completely revolutionized how our remote team works. Sync issues are a thing of the past!", author: "Sarah Jenkins", role: "VP of Product, CloudTech" },
      { quote: "The level of detail in the analytics module alone is worth ten times what we pay monthly.", author: "Marcus Aurelius", role: "CTO, NextGen Media" }
    ],
    faq: [
      { q: "Is there a free trial option available?", a: "Yes! We offer a full-featured 14-day free trial. No credit card required to start." },
      { q: "Can I cancel or upgrade my plan later?", a: "Absolutely. You can easily upgrade, downgrade, or cancel your subscription at any time with a single click." }
    ],
    cta: "Start your free 14-day trial today. Join thousands of productive teams already thriving."
  },
  portfolio: {
    keywords: ["portfolio", "designer", "developer", "artist", "photographer", "creative", "freelancer", "resume", "personal"],
    name: "Alex Reed",
    tagline: "Crafting modern, immersive digital experiences.",
    description: "I am a full-stack developer & product designer specializing in creating highly interactive, responsive, and blazing-fast web applications.",
    features: [
      { title: "UI/UX Design", desc: "Creating intuitive user journeys and stunning user interfaces that convert visitors into loyal clients.", icon: "layout" },
      { title: "Frontend Engineering", desc: "Building responsive, modern frontend applications using React, Vue, Tailwind CSS, and vanilla JS.", icon: "code" },
      { title: "Backend Systems", desc: "Designing scalable RESTful APIs, secure cloud architectures, and database configurations.", icon: "database" }
    ],
    projects: [
      { title: "Fintech Dashboard", category: "Web App", desc: "A responsive, real-time banking dashboard utilizing dynamic charting, transaction filtering, and modern design.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
      { title: "E-commerce Redesign", category: "UX/UI Design", desc: "A sleek, conversion-focused redesign for a modern sustainable apparel brand, featuring seamless checkout flows.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
      { title: "Fitness Tracking App", category: "Mobile App", desc: "An interactive mobile app design tracking workouts, health metrics, and meal plans, built with React Native.", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" }
    ],
    testimonials: [
      { quote: "Alex delivered our landing page ahead of schedule, with exceptional code quality and brilliant communication.", author: "Elena Rostova", role: "Founder, Bloom Studio" },
      { quote: "An absolute pleasure to work with. Alex understands the perfect balance between beautiful design and solid code.", author: "James Carter", role: "Creative Director, Apex Digital" }
    ],
    faq: [
      { q: "Are you available for full-time employment or contract work?", a: "I am currently accepting both freelance/contract work and selective full-time roles. Let's start with a virtual coffee chat!" },
      { q: "What is your typical project timeline?", a: "Most landing page and interface projects take 2 to 4 weeks. Full applications usually range from 6 to 10 weeks." }
    ],
    cta: "Have an exciting project in mind? Let's connect and build something extraordinary together."
  },
  restaurant: {
    keywords: ["restaurant", "food", "cafe", "bistro", "bakery", "kitchen", "dining", "menu", "chef", "bar", "coffee", "bites", "cook"],
    name: "The Velvet Fork",
    tagline: "Artisanal, locally sourced, modern dining experiences.",
    description: "Welcome to a culinary sanctuary where passion meets taste. Every ingredient is carefully chosen, and every plate tells an elegant story of flavors.",
    features: [
      { title: "Farm to Table", desc: "We partner strictly with certified local farms to bring fresh, seasonal, and organic ingredients to your plate.", icon: "heart" },
      { title: "Artisanal Wines", desc: "An exquisite collection of hand-selected international and domestic wines curated by our master sommelier.", icon: "glass" },
      { title: "Cozy Ambiance", desc: "The perfect setting for romantic dates, memorable family gatherings, or high-level business dinners.", icon: "moon" }
    ],
    menu: [
      { section: "Starters", items: [
        { name: "Truffle Arancini", price: "$16", desc: "Crispy wild mushroom risotto balls with truffle oil and shaved Parmigiano-Reggiano." },
        { name: "Heirloom Caprese", price: "$14", desc: "Fresh burrata, vine-ripened heirloom tomatoes, organic basil, and aged balsamic glaze." }
      ]},
      { section: "Main Course", items: [
        { name: "Pan-Seared Sea Bass", price: "$38", desc: "Wild-caught sea bass served with saffron risotto, asparagus, and a delicate lemon butter sauce." },
        { name: "Herb-Crusted Ribeye", price: "$44", desc: "Prime aged ribeye steak with rosemary-infused fingerling potatoes and Cabernet reduction." }
      ]},
      { section: "Desserts", items: [
        { name: "Deconstructed Cannoli", price: "$12", desc: "Sweet ricotta cream, chocolate chips, crushed pistachios, and light crispy pastry wafers." },
        { name: "Espresso Crème Brûlée", price: "$11", desc: "Rich espresso-infused custard base topped with a layer of hardened caramelized sugar." }
      ]}
    ],
    testimonials: [
      { quote: "The pan-seared sea bass was absolute perfection. Flawless service, cozy lights, and a marvelous wine list.", author: "Sophia Moretti", role: "Food Critic, Gastronomy Hub" },
      { quote: "Every bite is an explosion of rich flavors. Easily my favorite restaurant in the entire city!", author: "David Vance", role: "Local Guide & regular guest" }
    ],
    faq: [
      { q: "Do you offer vegetarian, vegan, and gluten-free options?", a: "Yes! Our menu has several gluten-free and vegan alternatives clearly labeled. Our chef is happy to accommodate custom dietary requests." },
      { q: "Do I need to make a reservation in advance?", a: "While we do accept walk-ins, we highly recommend making a reservation, especially on Friday and Saturday evenings." }
    ],
    cta: "Ready to treat your senses? Reserve your table today and embark on an unforgettable culinary journey."
  },
  fitness: {
    keywords: ["gym", "fitness", "workout", "trainer", "yoga", "crossfit", "athlete", "coaching", "wellness", "health", "athletics"],
    name: "Pulse Fitness",
    tagline: "Unleash your strength, redefine your potential.",
    description: "A premier boutique fitness studio dedicated to helping you achieve your physical, mental, and lifestyle transformation goals with professional guidance.",
    features: [
      { title: "Elite Personal Trainers", desc: "Work one-on-one with certified, passionate experts who build tailored programs just for you.", icon: "user-check" },
      { title: "State-of-the-Art Gear", desc: "Equipped with the absolute latest in functional training, free weights, and cardio equipment.", icon: "activity" },
      { title: "Community Motivation", desc: "Dynamic group classes, challenges, and supportive members that keep you inspired daily.", icon: "users" }
    ],
    classes: [
      { title: "HIIT & Cardio Burn", duration: "45 mins", level: "All Levels", desc: "High-intensity interval training designed to blast fat, build endurance, and boost metabolism." },
      { title: "Power Yoga & Flow", duration: "60 mins", level: "Intermediate", desc: "A dynamic Vinyasa flow focusing on core strength, muscle flexibility, mental alignment, and breathing." },
      { title: "Strength & Powerlifting", duration: "50 mins", level: "Advanced", desc: "Focus on proper heavy barbell lifting form, compound movements, and raw functional strength." }
    ],
    pricing: [
      { name: "Basic Membership", price: "$39", desc: "Full access to general gym facilities.", features: ["General gym & cardio floor access", "Sleek locker room & showers", "2 free group fitness classes/mo", "Standard onboarding support"] },
      { name: "All-Access Pass", price: "$69", desc: "Our most popular option for fitness lovers.", features: ["Unlimited group training classes", "Full gym & cardio floor access", "1 personal training assessment", "10% discount on supplements", "Hydration station & towel service"], popular: true },
      { name: "Premium VIP", price: "$129", desc: "For those completely serious about their goals.", features: ["All standard & premium classes", "4 private 1-on-1 coaching sessions", "Custom personalized nutrition plan", "Unrestricted 24/7 gym access", "Bi-weekly body composition analysis"] }
    ],
    testimonials: [
      { quote: "The coaches here actually care about your form and progress. I've never felt stronger in my entire life!", author: "Brandon Cole", role: "Member for 1 year" },
      { quote: "Clean environment, excellent selection of equipment, and an unbelievably friendly and helpful community.", author: "Diana Prince", role: "Yoga enthusiast" }
    ],
    faq: [
      { q: "Can I try out a class before signing up for a full membership?", a: "Yes, we offer a free day pass for all local residents! Sign up online or stop by the front desk." },
      { q: "Is there an initiation fee or a long-term contract requirement?", a: "No! All our standard plans are month-to-month, contract-free, with absolutely no hidden initialization or cancellation fees." }
    ],
    cta: "Your journey starts now. Claim your free 1-day pass today and experience the energy."
  },
  general: {
    keywords: ["company", "business", "agency", "service", "consulting", "marketing", "corporate"],
    name: "Vanguard Partners",
    tagline: "Strategic solutions for exponential business growth.",
    description: "We are a boutique advisory and execution agency helping mid-market and enterprise businesses scale with operations, marketing, and modern tech.",
    features: [
      { title: "Strategic Advisory", desc: "Aligning your business vision, resources, and systems for highly repeatable performance.", icon: "compass" },
      { title: "Digital Optimization", desc: "Modernizing outdated infrastructure and workflows with robust, automated, and secure software.", icon: "cpu" },
      { title: "Growth Marketing", desc: "Placing your product and brand in front of high-intent buyers using precision-targeted digital campaigns.", icon: "trending-up" }
    ],
    pricing: [
      { name: "Starter Suite", price: "$999", desc: "Essential support for early stage startups.", features: ["Comprehensive operations audit", "Social and search strategy setup", "Monthly analytics scorecard", "Monthly strategy review checkup"] },
      { name: "Accelerate Plan", price: "$2499", desc: "Designed for ambitious, scaling companies.", features: ["Full operational workflow overhaul", "Ongoing paid acquisition management", "Custom growth dashboard", "Bi-weekly consulting and strategy calls", "Direct Slack support channel"], popular: true },
      { name: "Enterprise Custom", price: "Custom", desc: "Complete hands-on partnership for scale.", features: ["Full-funnel digital transformation", "Dedicated operations team", "24/7 priority emergency support", "Custom technical engineering resources", "SLA guarantees"] }
    ],
    testimonials: [
      { quote: "They didn't just give us a standard template. They deeply analyzed our friction points and automated them beautifully.", author: "Clara Oswald", role: "CEO, Chrono Systems" },
      { quote: "Our pipeline increased by 40% in less than 90 days of onboarding. Outstanding professionalism.", author: "Peter Parker", role: "Marketing Director, Daily Bugle" }
    ],
    faq: [
      { q: "Do you offer localized, industry-specific consultations?", a: "Yes. Our senior consultants have specialized expertise across SaaS, healthcare, e-commerce, real estate, and finance." },
      { q: "How long before we start seeing tangible marketing results?", a: "Operations automation is immediate. Growth marketing campaigns typically require 30 to 45 days of rigorous testing to dial in." }
    ],
    cta: "Ready to scale your operation? Book a 30-minute discovery call and let's craft a blueprint."
  }
};

/**
 * Extracts key elements from a user prompt
 * @param {string} prompt
 * @returns {object} { industry, colors, name, customTagline }
 */
export function parsePrompt(prompt) {
  const normalized = prompt.toLowerCase();

  // 1. Identify Industry based on full word match to prevent partial matching (e.g., 'grain' matching 'ai')
  let detectedIndustry = "general";
  const words = normalized.split(/[^a-zA-Z0-9]/).filter(Boolean);

  for (const [key, config] of Object.entries(INDUSTRIES)) {
    if (config.keywords.some(kw => words.includes(kw))) {
      detectedIndustry = key;
      break;
    }
  }

  // 2. Identify Colors
  let detectedColors = "blue"; // default
  if (normalized.includes("green") || normalized.includes("eco") || normalized.includes("organic") || normalized.includes("nature") || normalized.includes("forest") || normalized.includes("emerald") || normalized.includes("white")) {
    detectedColors = "green";
  } else if (normalized.includes("red") || normalized.includes("pink") || normalized.includes("cherry") || normalized.includes("rose") || normalized.includes("sunset") || normalized.includes("warm")) {
    detectedColors = "red";
  } else if (normalized.includes("purple") || normalized.includes("neon") || normalized.includes("cyberpunk") || normalized.includes("violet") || normalized.includes("magic") || normalized.includes("royal")) {
    detectedColors = "purple";
  } else if (normalized.includes("dark") || normalized.includes("black") || normalized.includes("slate") || normalized.includes("charcoal") || normalized.includes("midnight") || normalized.includes("stealth")) {
    detectedColors = "dark";
  } else if (normalized.includes("blue") || normalized.includes("ocean") || normalized.includes("sky") || normalized.includes("tech") || normalized.includes("water") || normalized.includes("indigo")) {
    detectedColors = "blue";
  }

  // 3. Extract custom name if in quotes or following "called", "named"
  let extractedName = null;
  const quotesRegex = /["']([^"']+)["']/;
  const quotesMatch = prompt.match(quotesRegex);
  if (quotesMatch) {
    extractedName = quotesMatch[1];
  } else {
    const nameKeywords = ["called", "named", "for", "named:"];
    for (const kw of nameKeywords) {
      const idx = normalized.indexOf(kw);
      if (idx !== -1) {
        let remainder = prompt.substring(idx + kw.length).trim();
        // Grab the first 2-3 words
        const wordsList = remainder.split(/\s+/).slice(0, 3);
        // Clean up symbols or end-of-sentence punctuation
        extractedName = wordsList.join(" ").replace(/[,.!?]/g, "").trim();
        break;
      }
    }
  }

  // 4. Try to find a custom tagline/purpose in the prompt
  let customTagline = null;
  const promptWords = prompt.trim().split(/\s+/);
  if (promptWords.length > 5) {
    // If prompt is decently long, use some part of it as the tagline or base
    let cleanedPrompt = prompt.replace(/["'][^"']+["']/g, "").trim(); // strip quoted names
    cleanedPrompt = cleanedPrompt.replace(/(called|named|for)\s+\w+(\s+\w+)?(\s+\w+)?/gi, "").trim(); // strip 'called XYZ'
    if (cleanedPrompt.length > 15) {
      customTagline = cleanedPrompt.charAt(0).toUpperCase() + cleanedPrompt.slice(1);
    }
  }

  return {
    industry: detectedIndustry,
    colors: detectedColors,
    name: extractedName,
    customTagline: customTagline
  };
}

/**
 * Generates the responsive HTML string based on the parsed specifications
 * @param {object} specs
 * @returns {string} Fully responsive, modern HTML string
 */
export function generateHTML(specs) {
  const baseData = INDUSTRIES[specs.industry] || INDUSTRIES.general;
  const colors = COLORS[specs.colors] || COLORS.blue;
  const name = specs.name || baseData.name;
  const tagline = specs.customTagline || baseData.tagline;
  const description = baseData.description;

  const isLight = colors.mode === "light";

  // Light-mode vs Dark-mode style utilities
  const bgMain = isLight ? "bg-white" : colors.bgDark;
  const textTitle = isLight ? "text-slate-900" : "text-white";
  const textBody = isLight ? "text-slate-600" : "text-slate-300";
  const borderLight = isLight ? "border-slate-200" : "border-white/10";
  const bgCard = isLight ? "bg-slate-50" : "bg-slate-900";
  const borderCard = isLight ? "border-slate-200/80" : "border-white/5";
  const textSub = isLight ? "text-slate-500" : "text-slate-400";

  // Icons mapper
  const icons = {
    zap: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />`,
    "bar-chart-2": `<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />`,
    shield: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />`,
    layout: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18M2.25 13.5v-2.25C2.25 7.418 5.418 4.25 9.3 4.25h5.4c3.882 0 7.05 3.168 7.05 7.0v2.25m-18 0v2.25c0 3.882 3.168 7.05 7.05 7.05h5.4c3.882 0 7.05-3.168 7.05-7.05v-2.25" />`,
    code: `<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />`,
    database: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />`,
    heart: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />`,
    glass: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 21V12M12 12c2.21 0 4-1.79 4-4V5H8v3c0 2.21 1.79 4 4 4zm-7 9h14" />`,
    moon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />`,
    "user-check": `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    activity: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />`,
    users: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />`,
    compass: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    cpu: `<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m10.5-5.25v1.5M21 8.25h-1.5m-3 12.75V21M4.5 15.75H3m10.5 5.25V21M21 15.75h-1.5M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />`,
    "trending-up": `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />`
  };

  const getIcon = (key) => {
    return icons[key] || icons.zap;
  };

  // Section builders
  const navSection = `
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all border-b ${borderLight} ${bgMain} ${isLight ? 'text-slate-800 shadow-sm' : 'text-white'} py-4 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2 font-black text-2xl tracking-tight">
        <span class="p-2 bg-${colors.primary} rounded-xl shadow-lg shadow-${colors.primary}/20 text-white">★</span>
        <span class="${isLight ? 'text-slate-900' : 'text-white'}">${name}</span>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm font-semibold ${isLight ? 'text-slate-600' : 'text-slate-300'}">
        <a href="#features" class="hover:text-${colors.accent} transition-colors">Features</a>
        ${specs.industry === 'restaurant' ? `<a href="#menu" class="hover:text-${colors.accent} transition-colors">Menu</a>` : ''}
        ${specs.industry === 'portfolio' ? `<a href="#portfolio" class="hover:text-${colors.accent} transition-colors">Works</a>` : ''}
        ${specs.industry === 'fitness' ? `<a href="#classes" class="hover:text-${colors.accent} transition-colors">Classes</a>` : ''}
        ${baseData.pricing ? `<a href="#pricing" class="hover:text-${colors.accent} transition-colors">Pricing</a>` : ''}
        <a href="#testimonials" class="hover:text-${colors.accent} transition-colors">Success Stories</a>
        <a href="#faq" class="hover:text-${colors.accent} transition-colors">FAQ</a>
      </div>
      <div>
        <a href="#contact" class="bg-${colors.primary} hover:bg-${colors.primaryHover} text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 inline-block text-sm">
          Get Started
        </a>
      </div>
    </div>
  </nav>
  `;

  const heroSection = `
  <header class="relative overflow-hidden py-24 md:py-32 flex items-center justify-center ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6">
    <div class="absolute inset-0 bg-radial-gradient from-${colors.primary}/10 via-transparent to-transparent opacity-60"></div>
    <div class="relative max-w-4xl text-center z-10">
      <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold ${isLight ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-white/10 text-' + colors.accent + ' border-white/10'} mb-6 border animate-pulse">
        <span class="w-2 h-2 rounded-full bg-${isLight ? 'emerald-600' : colors.accent}"></span> Live & Optimized
      </span>
      <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight ${textTitle}">
        ${tagline}
      </h1>
      <p class="text-lg md:text-xl ${textBody} mb-10 max-w-2xl mx-auto leading-relaxed">
        ${description}
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#contact" class="w-full sm:w-auto bg-${colors.primary} hover:bg-${colors.primaryHover} text-white font-extrabold py-4 px-8 rounded-2xl shadow-xl shadow-${colors.primary}/20 hover:shadow-${colors.primary}/30 transition-all duration-300 hover:-translate-y-0.5 text-center">
          Experience Now
        </a>
        <a href="#features" class="w-full sm:w-auto ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200' : 'bg-white/10 hover:bg-white/15 text-white border-white/15'} font-extrabold py-4 px-8 rounded-2xl border transition-all duration-300 text-center">
          Learn More
        </a>
      </div>
    </div>
  </header>
  `;

  const featuresSection = `
  <section id="features" class="py-20 md:py-28 ${isLight ? 'bg-slate-50 border-t border-slate-100' : 'bg-slate-950'} ${isLight ? 'text-slate-800' : 'text-white'} px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Core Value Proposition</h2>
        <p class="text-3xl md:text-4xl font-black tracking-tight ${textTitle}">Engineered for absolute excellence and performance</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${baseData.features.map(f => `
          <div class="group p-8 rounded-3xl ${isLight ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-slate-900 border-white/5 hover:bg-slate-800/80'} border hover:border-${colors.primary}/30 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-${colors.primary}/10 text-${isLight ? 'emerald-600' : colors.accent} flex items-center justify-center mb-8 border border-${colors.primary}/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  ${getIcon(f.icon)}
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 ${textTitle}">${f.title}</h3>
              <p class="${textBody} leading-relaxed text-sm">${f.desc}</p>
            </div>
            <div class="mt-8 pt-6 border-t ${isLight ? 'border-slate-100' : 'border-white/5'} flex items-center gap-2 text-xs font-semibold text-${isLight ? 'emerald-600' : colors.accent} group-hover:translate-x-1.5 transition-transform duration-300">
              Read documentation <span class="text-sm">→</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
  `;

  let industrySection = "";
  if (specs.industry === 'restaurant' && baseData.menu) {
    industrySection = `
    <section id="menu" class="py-20 md:py-28 ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">The Velvet Fork Menu</h2>
          <p class="text-3xl md:text-4xl font-black ${textTitle}">Savor our curated culinary masterworks</p>
        </div>
        <div class="grid md:grid-cols-3 gap-12">
          ${baseData.menu.map(sec => `
            <div class="${bgCard} p-8 rounded-3xl border ${borderCard} shadow-2xl">
              <h3 class="text-2xl font-black border-b border-${colors.primary}/30 pb-4 mb-6 text-${isLight ? 'emerald-600' : colors.accent}">${sec.section}</h3>
              <div class="space-y-6">
                ${sec.items.map(item => `
                  <div>
                    <div class="flex justify-between items-baseline gap-2 mb-1">
                      <span class="font-bold text-lg ${textTitle}">${item.name}</span>
                      <span class="w-full border-b border-dashed ${isLight ? 'border-slate-300' : 'border-white/10'} flex-1 mx-2"></span>
                      <span class="font-black text-lg text-${isLight ? 'emerald-600' : colors.accent}">${item.price}</span>
                    </div>
                    <p class="${textSub} text-xs leading-relaxed">${item.desc}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    `;
  } else if (specs.industry === 'portfolio' && baseData.projects) {
    industrySection = `
    <section id="portfolio" class="py-20 md:py-28 ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Recent Projects</h2>
          <p class="text-3xl md:text-4xl font-black ${textTitle}">Featured works & creative explorations</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${baseData.projects.map(proj => `
            <div class="group ${bgCard} rounded-3xl overflow-hidden border ${borderCard} hover:border-${colors.primary}/30 transition-all duration-300 shadow-xl">
              <div class="relative overflow-hidden h-52">
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-${isLight ? 'emerald-300' : colors.accent} text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full">
                  ${proj.category}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 ${textTitle}">${proj.title}</h3>
                <p class="${textSub} text-xs leading-relaxed mb-6">${proj.desc}</p>
                <a href="#contact" class="inline-flex items-center gap-1 text-xs font-bold text-${isLight ? 'emerald-600' : colors.accent} hover:underline">
                  Case study details <span>→</span>
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    `;
  } else if (specs.industry === 'fitness' && baseData.classes) {
    industrySection = `
    <section id="classes" class="py-20 md:py-28 ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Class Schedule</h2>
          <p class="text-3xl md:text-4xl font-black ${textTitle}">Unlock dynamic group energy & focus</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${baseData.classes.map(cls => `
            <div class="${bgCard} p-8 rounded-3xl border ${borderCard} hover:border-${colors.primary}/30 transition-all duration-300 shadow-2xl flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <span class="text-xs font-black bg-${colors.primary}/10 border border-${colors.primary}/20 px-3 py-1 rounded-full text-${isLight ? 'emerald-700' : colors.accent}">${cls.duration}</span>
                  <span class="text-xs ${textSub} font-semibold">${cls.level}</span>
                </div>
                <h3 class="text-xl font-bold mb-4 ${textTitle}">${cls.title}</h3>
                <p class="${textSub} text-xs leading-relaxed mb-6">${cls.desc}</p>
              </div>
              <a href="#contact" class="w-full text-center bg-white/5 hover:bg-white/10 ${isLight ? 'text-slate-800 border-slate-300 bg-slate-100 hover:bg-slate-200' : 'text-white border-white/10'} font-bold py-2.5 px-4 rounded-xl border text-xs transition-colors">
                Book a spot
              </a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    `;
  }

  const pricingSection = baseData.pricing ? `
  <section id="pricing" class="py-20 md:py-28 ${isLight ? 'bg-slate-50' : 'bg-slate-950'} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Transparent Pricing</h2>
        <p class="text-3xl md:text-4xl font-black ${textTitle}">Choose a plan designed for your absolute growth</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${baseData.pricing.map(plan => `
          <div class="relative ${bgCard} p-8 rounded-3xl border ${plan.popular ? `border-${colors.primary} shadow-2xl shadow-${colors.primary}/10` : borderCard} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            ${plan.popular ? `
              <span class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-${colors.primary} text-white font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1 rounded-full border border-white/10">
                Most Popular
              </span>
            ` : ""}
            <div>
              <h3 class="text-lg font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'} mb-1">${plan.name}</h3>
              <div class="flex items-baseline gap-1 mb-3">
                <span class="text-4xl font-black ${textTitle}">${plan.price}</span>
                <span class="text-xs ${textSub} font-semibold">${plan.price === 'Custom' ? '' : '/mo'}</span>
              </div>
              <p class="${textSub} text-xs leading-relaxed mb-6 border-b ${isLight ? 'border-slate-200' : 'border-white/5'} pb-4">${plan.desc}</p>
              <ul class="space-y-3 mb-8 text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}">
                ${plan.features.map(f => `
                  <li class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-${isLight ? 'emerald-600' : colors.accent}">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>${f}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
            <a href="#contact" class="w-full text-center py-3 rounded-xl font-bold text-xs transition-all ${plan.popular ? `bg-${colors.primary} hover:bg-${colors.primaryHover} text-white` : `bg-white/5 hover:bg-white/10 ${isLight ? 'text-slate-700 bg-slate-200 hover:bg-slate-300' : 'text-slate-200 border-white/10'} border`}">
              Subscribe Now
            </a>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
  ` : "";

  const testimonialsSection = `
  <section id="testimonials" class="py-20 md:py-28 ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Testimonials</h2>
        <p class="text-3xl md:text-4xl font-black ${textTitle}">Trusted by industry leaders and visionaries</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        ${baseData.testimonials.map(t => `
          <div class="${bgCard} p-8 rounded-3xl border ${borderCard} shadow-xl flex flex-col justify-between">
            <p class="${isLight ? 'text-slate-700' : 'text-slate-300'} italic text-sm leading-relaxed mb-8">
              "${t.quote}"
            </p>
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 rounded-full bg-${colors.primary}/20 flex items-center justify-center font-bold text-${isLight ? 'emerald-700' : colors.accent} border border-${colors.primary}/20">
                ${t.author.charAt(0)}
              </div>
              <div>
                <h4 class="font-bold text-sm ${textTitle}">${t.author}</h4>
                <p class="${textSub} text-xs">${t.role}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
  `;

  const faqSection = `
  <section id="faq" class="py-20 md:py-28 ${isLight ? 'bg-slate-50' : 'bg-slate-950'} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-xs uppercase font-extrabold tracking-widest text-${isLight ? 'emerald-600' : colors.accent} mb-4">Frequently Asked Questions</h2>
        <p class="text-3xl md:text-4xl font-black ${textTitle}">Got questions? We've got answers</p>
      </div>
      <div class="space-y-4">
        ${baseData.faq.map((faq, idx) => `
          <div class="border ${borderCard} rounded-2xl ${bgCard} overflow-hidden">
            <button onclick="toggleFaq(${idx})" class="w-full flex justify-between items-center p-6 text-left hover:bg-slate-200/50 transition-colors">
              <span class="font-bold text-sm md:text-base ${textTitle}">${faq.q}</span>
              <svg id="faq-icon-${idx}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 ${textSub} transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div id="faq-answer-${idx}" class="hidden p-6 pt-0 border-t ${isLight ? 'border-slate-200/50' : 'border-white/5'} ${textSub} text-xs md:text-sm leading-relaxed">
              ${faq.a}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
  `;

  const contactSection = `
  <section id="contact" class="py-20 md:py-28 ${bgMain} ${isLight ? 'text-slate-800' : 'text-white'} px-6 border-t ${borderLight}">
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-white/5 text-${isLight ? 'emerald-600' : colors.accent} mb-4 border ${isLight ? 'border-emerald-200 bg-emerald-50/50' : 'border-white/10 bg-white/5'} uppercase tracking-widest">
            Let's connect
          </span>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight ${textTitle}">${baseData.cta}</h2>
          <p class="${textBody} text-sm leading-relaxed mb-8">
            Complete the secure form and our dedicated relations team will get back to you in less than 12 business hours.
          </p>
          <div class="space-y-4 text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}">
            <div class="flex items-center gap-3">
              <span class="p-2.5 rounded-lg bg-white/5 ${isLight ? 'bg-slate-100' : ''} text-${isLight ? 'emerald-600' : colors.accent}">✉</span>
              <span>hello@${name.toLowerCase().replace(/\s+/g, '')}.com</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="p-2.5 rounded-lg bg-white/5 ${isLight ? 'bg-slate-100' : ''} text-${isLight ? 'emerald-600' : colors.accent}">☏</span>
              <span>+1 (800) 555-0199</span>
            </div>
          </div>
        </div>
        <div class="${bgCard} p-8 rounded-3xl border ${borderCard} shadow-2xl">
          <form id="contactForm" class="space-y-4">
            <div>
              <label class="block text-xs font-bold ${textSub} uppercase tracking-wider mb-1">Full Name</label>
              <input type="text" required placeholder="Jane Doe" class="w-full ${isLight ? 'bg-white border-slate-300' : 'bg-white/5 border-white/10'} border rounded-xl px-4 py-3 text-sm focus:border-${colors.primary} focus:outline-none transition-colors" />
            </div>
            <div>
              <label class="block text-xs font-bold ${textSub} uppercase tracking-wider mb-1">Email Address</label>
              <input type="email" required placeholder="jane@example.com" class="w-full ${isLight ? 'bg-white border-slate-300' : 'bg-white/5 border-white/10'} border rounded-xl px-4 py-3 text-sm focus:border-${colors.primary} focus:outline-none transition-colors" />
            </div>
            <div>
              <label class="block text-xs font-bold ${textSub} uppercase tracking-wider mb-1">How can we help?</label>
              <textarea required rows="4" placeholder="Tell us about your requirements..." class="w-full ${isLight ? 'bg-white border-slate-300' : 'bg-white/5 border-white/10'} border rounded-xl px-4 py-3 text-sm focus:border-${colors.primary} focus:outline-none transition-colors resize-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-${colors.primary} hover:bg-${colors.primaryHover} text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 hover:scale-102 flex justify-center items-center gap-2 text-xs">
              Submit Inquiry
            </button>
          </form>
          <div id="contactSuccess" class="hidden mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl text-xs text-center font-bold">
            ✔ Your message has been sent successfully! We will contact you shortly.
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  const footerSection = `
  <footer class="${isLight ? 'bg-slate-100 border-t border-slate-200' : 'bg-slate-950 border-t border-white/5'} text-slate-500 py-12 px-6 text-xs md:text-sm">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-2 font-black text-xl ${isLight ? 'text-slate-950' : 'text-white'}">
        <span class="p-1.5 bg-${colors.primary} rounded-lg text-white text-sm">★</span>
        <span>${name}</span>
      </div>
      <div>
        <p>&copy; ${new Date().getFullYear()} ${name}. All rights reserved.</p>
      </div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-slate-900 transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-slate-900 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
  `;

  // Combined responsive generated webpage with integrated interaction scripts
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} | ${tagline}</title>
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          scale: {
            '102': '1.02'
          },
          backgroundImage: {
            'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
          }
        }
      }
    }
  </script>
</head>
<body class="${isLight ? 'bg-white' : colors.bgDark} font-sans ${isLight ? 'text-slate-800' : 'text-slate-200'} selection:bg-${colors.primary}/30">

  ${navSection}
  ${heroSection}
  ${featuresSection}
  ${industrySection}
  ${pricingSection}
  ${testimonialsSection}
  ${faqSection}
  ${contactSection}
  ${footerSection}

  <!-- Interactive JavaScript -->
  <script>
    // FAQ Accordion interaction
    function toggleFaq(index) {
      const answer = document.getElementById('faq-answer-' + index);
      const icon = document.getElementById('faq-icon-' + index);
      if (answer) {
        if (answer.classList.contains('hidden')) {
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        } else {
          answer.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
        }
      }
    }

    // Contact form validation & submission handler
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    if (contactForm && contactSuccess) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Hide form inputs and trigger success validation toast animation
        contactForm.style.display = 'none';
        contactSuccess.classList.remove('hidden');
      });
    }
  </script>
</body>
</html>`;
}
