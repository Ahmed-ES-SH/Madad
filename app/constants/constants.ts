import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

export const navLinks = [
  {
    text: { en: "Home", ar: "الرئيسية" },
    link: "/",
    icon: FaHome,
  },
  {
    text: { en: "About", ar: "من نحن" },
    link: "/about",
    icon: FaInfoCircle,
  },
  {
    text: { en: "Services", ar: "خدماتنا" },
    link: "/services",
    icon: FaServicestack,
  },
  {
    text: { en: "Portfolio", ar: "أعمالنا" },
    link: "/portfolio",
    icon: FaProjectDiagram,
  },
  {
    text: { en: "Blog", ar: "المدونة" },
    link: "/blog",
    icon: FaBlog,
  },
  {
    text: { en: "Contact Us", ar: "تواصل معنا" },
    link: "/contact",
    icon: FaEnvelope,
  },
];

export const socialIcons: { icon: IconType; link: string }[] = [
  { icon: FaFacebook, link: "https://www.facebook.com" },
  { icon: FaInstagram, link: "https://www.instagram.com" },
  { icon: FaXTwitter, link: "https://www.x.com" },
  { icon: FaYoutube, link: "https://www.youtube.com/" },
];

export const blogs = [
  {
    imgSrc: "/portfoliosection/1.jpg",
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description:
      "Discover smart investment strategies to streamline and organize your portfolio..",
    link: "javascript:;", // يمكن استبدال هذا برابط حقيقي إذا كان متاحًا
  },
  {
    imgSrc: "/portfoliosection/4.jpg",
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description:
      "Unlock the power of systematic investment with us and watch your profits soar. Our..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/5.jpg",
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description:
      "Our comprehensive guide will equip you with the tools and insights needed to..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/1.jpg",
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description:
      "Discover smart investment strategies to streamline and organize your portfolio..",
    link: "javascript:;", // يمكن استبدال هذا برابط حقيقي إذا كان متاحًا
  },
  {
    imgSrc: "/portfoliosection/1.jpg",
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description:
      "Discover smart investment strategies to streamline and organize your portfolio..",
    link: "javascript:;", // يمكن استبدال هذا برابط حقيقي إذا كان متاحًا
  },
  {
    imgSrc: "/portfoliosection/4.jpg",
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description:
      "Unlock the power of systematic investment with us and watch your profits soar. Our..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/4.jpg",
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description:
      "Unlock the power of systematic investment with us and watch your profits soar. Our..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/5.jpg",
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description:
      "Our comprehensive guide will equip you with the tools and insights needed to..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/1.jpg",
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description:
      "Discover smart investment strategies to streamline and organize your portfolio..",
    link: "javascript:;", // يمكن استبدال هذا برابط حقيقي إذا كان متاحًا
  },
  {
    imgSrc: "/portfoliosection/4.jpg",
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description:
      "Unlock the power of systematic investment with us and watch your profits soar. Our..",
    link: "javascript:;",
  },

  {
    imgSrc: "/portfoliosection/5.jpg",
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description:
      "Our comprehensive guide will equip you with the tools and insights needed to..",
    link: "javascript:;",
  },
  {
    imgSrc: "/portfoliosection/5.jpg",
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description:
      "Our comprehensive guide will equip you with the tools and insights needed to..",
    link: "javascript:;",
  },
];

export const directionMap: Record<string, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const servicesSection = [
  {
    id: 1,
    title: {
      en: "Marketing Strategies",
      ar: "استراتيجيات التسويق",
    },
    smallDesc: {
      en: "Marketing strategies are a comprehensive plan that aims to identify the target audience, develop products, and choose the appropriate channels to increase brand awareness and achieve sales goals.",
      ar: "استراتيجيات التسويق هي خطة شاملة تهدف إلى تحديد الجمهور المستهدف، تطوير المنتجات، واختيار القنوات المناسبة لزيادة الوعي بالعلامة التجارية وتحقيق أهداف المبيعات.",
    },
    src: "/servicessection/1.png",
  },
  {
    id: 2,
    title: {
      en: "Digital Marketing",
      ar: "التسويق الرقمي",
    },
    smallDesc: {
      en: "Digital marketing encompasses all marketing efforts that use the internet or electronic devices to connect with potential customers, including social media, email marketing, and online advertising.",
      ar: "يشمل التسويق الرقمي جميع الجهود التسويقية التي تستخدم الإنترنت أو الأجهزة الإلكترونية للتواصل مع العملاء المحتملين، بما في ذلك وسائل التواصل الاجتماعي، التسويق عبر البريد الإلكتروني، والإعلانات عبر الإنترنت.",
    },
    src: "/servicessection/2.png",
  },
  {
    id: 3,
    title: {
      en: "Brand Identity Design",
      ar: "تصميم هوية العلامة التجارية",
    },
    smallDesc: {
      en: "Brand identity design involves creating a unique image and representation for a brand through visual elements like logos, color palettes, and typography, ensuring a cohesive presence in the market.",
      ar: "يتضمن تصميم هوية العلامة التجارية إنشاء صورة فريدة وتمثيل للعلامة من خلال عناصر بصرية مثل الشعارات، لوحات الألوان، والطباعة، لضمان حضور متناسق في السوق.",
    },
    src: "/servicessection/3.png",
  },
  {
    id: 4,
    title: {
      en: "Search Engine Optimization (SEO)",
      ar: "تحسين محركات البحث (SEO)",
    },
    smallDesc: {
      en: "SEO is the practice of optimizing a website to improve its visibility in search engine results, enhancing organic traffic through strategies like keyword research, on-page optimization, and link building.",
      ar: "SEO هو ممارسات تحسين موقع الويب لزيادة ظهوره في نتائج محركات البحث، مما يعزز حركة المرور العضوية من خلال استراتيجيات مثل البحث عن الكلمات المفتاحية، التحسين الداخلي، وبناء الروابط.",
    },
    src: "/servicessection/4.png",
  },
  {
    id: 5,
    title: {
      en: "Influencer Marketing",
      ar: "التسويق عبر المؤثرين",
    },
    smallDesc: {
      en: "Influencer marketing focuses on partnering with popular figures in social media to promote products or services, leveraging their reach and credibility to engage with target audiences effectively.",
      ar: "يركز التسويق عبر المؤثرين على التعاون مع شخصيات مشهورة في وسائل التواصل الاجتماعي للترويج للمنتجات أو الخدمات، مستفيدًا من وصولهم ومصداقيتهم للتفاعل بفعالية مع الجمهور المستهدف.",
    },
    src: "/servicessection/5.png",
  },
  {
    id: 6,
    title: {
      en: "Technical Services",
      ar: "الخدمات التقنية",
    },
    smallDesc: {
      en: "Technical services involve providing specialized support and solutions in areas such as web development, software engineering, and IT consulting to enhance business operations.",
      ar: "تشمل الخدمات التقنية تقديم الدعم والحلول المتخصصة في مجالات مثل تطوير الويب، هندسة البرمجيات، واستشارات تكنولوجيا المعلومات لتعزيز العمليات التجارية.",
    },
    src: "/servicessection/6.png",
  },
];

export const services = [
  {
    title: {
      en: "Marketing Strategies",
      ar: "استراتيجيات التسويق",
    },
    smallDesc: {
      en: "Marketing strategies are a comprehensive plan that aims to identify the target audience, develop products, and choose the appropriate channels to increase brand awareness and achieve sales goals.",
      ar: "استراتيجيات التسويق هي خطة شاملة تهدف إلى تحديد الجمهور المستهدف، وتطوير المنتجات، واختيار القنوات المناسبة لزيادة الوعي بالعلامة التجارية وتحقيق أهداف المبيعات.",
    },
    imgsrc: "/servicessection/1.png",
  },
  {
    title: {
      en: "Digital Marketing",
      ar: "التسويق الرقمي",
    },
    smallDesc: {
      en: "Digital marketing encompasses all marketing efforts that use the internet or electronic devices to connect with potential customers, including social media, email marketing, and online advertising.",
      ar: "يشمل التسويق الرقمي جميع الجهود التسويقية التي تستخدم الإنترنت أو الأجهزة الإلكترونية للتواصل مع العملاء المحتملين، بما في ذلك وسائل التواصل الاجتماعي والتسويق عبر البريد الإلكتروني والإعلانات الإلكترونية.",
    },
    imgsrc: "/servicessection/2.png",
  },
  {
    title: {
      en: "Brand Identity Design",
      ar: "تصميم الهوية البصرية",
    },
    smallDesc: {
      en: "Brand identity design involves creating a unique image and representation for a brand through visual elements like logos, color palettes, and typography, ensuring a cohesive presence in the market.",
      ar: "يتضمن تصميم الهوية البصرية إنشاء صورة فريدة وتمثيل مميز للعلامة التجارية من خلال عناصر بصرية مثل الشعارات، ولوحات الألوان، والطباعة، لضمان حضور متماسك في السوق.",
    },
    imgsrc: "/servicessection/3.png",
  },
  {
    title: {
      en: "Search Engine Optimization (SEO)",
      ar: "تحسين محركات البحث (SEO)",
    },
    smallDesc: {
      en: "SEO is the practice of optimizing a website to improve its visibility in search engine results, enhancing organic traffic through strategies like keyword research, on-page optimization, and link building.",
      ar: "تحسين محركات البحث (SEO) هو ممارسة تحسين الموقع لزيادة ظهوره في نتائج محركات البحث، مما يعزز الزيارات العضوية من خلال استراتيجيات مثل البحث عن الكلمات المفتاحية، وتحسين الصفحات، وبناء الروابط.",
    },
    imgsrc: "/servicessection/4.png",
  },
  {
    title: {
      en: "Influencer Marketing",
      ar: "التسويق عبر المؤثرين",
    },
    smallDesc: {
      en: "Influencer marketing focuses on partnering with popular figures in social media to promote products or services, leveraging their reach and credibility to engage with target audiences effectively.",
      ar: "يركز التسويق عبر المؤثرين على التعاون مع شخصيات مشهورة على وسائل التواصل الاجتماعي للترويج للمنتجات أو الخدمات، مستفيدًا من مدى تأثيرهم ومصداقيتهم للوصول إلى الجمهور المستهدف بفعالية.",
    },
    imgsrc: "/servicessection/5.png",
  },
  {
    title: {
      en: "Technical Services",
      ar: "الخدمات التقنية",
    },
    smallDesc: {
      en: "Technical services involve providing specialized support and solutions in areas such as web development, software engineering, and IT consulting to enhance business operations.",
      ar: "تشمل الخدمات التقنية تقديم دعم وحلول متخصصة في مجالات مثل تطوير الويب، وهندسة البرمجيات، والاستشارات التقنية لتحسين أداء الأعمال.",
    },
    imgsrc: "/servicessection/6.png",
  },
  {
    title: {
      en: "Economic Consulting",
      ar: "الاستشارات الاقتصادية",
    },
    smallDesc: {
      en: "Economic Consulting involves the application of economic theories and methodologies to provide insights and solutions for businesses, governments, and organizations.",
      ar: "تشمل الاستشارات الاقتصادية تطبيق النظريات والأساليب الاقتصادية لتقديم رؤى وحلول للشركات والحكومات والمؤسسات.",
    },
    imgsrc: "/servicessection/7.png",
  },
  {
    title: {
      en: "Roadside ads",
      ar: "إعلانات الطرق",
    },
    smallDesc: {
      en: "Roadside ads are effective marketing tools that capture the attention of drivers and pedestrians, promoting brand visibility and increasing awareness.",
      ar: "إعلانات الطرق هي أدوات تسويقية فعالة تجذب انتباه السائقين والمشاة، مما يعزز ظهور العلامة التجارية ويزيد من الوعي بها.",
    },
    imgsrc: "/servicessection/8.png",
  },
];

export const projects = [
  {
    id: 1,
    imgSrc: "/portfoliosection/1.jpg",
    title: {
      en: "E-Commerce Platform",
      ar: "منصة تجارة إلكترونية",
    },
    description: {
      en: "An online store built to deliver a seamless shopping experience with integrated payment and inventory systems.",
      ar: "متجر إلكتروني يقدم تجربة تسوق سلسة مع أنظمة دفع ومخزون مدمجة.",
    },
    category: {
      en: "Web Development",
      ar: "تطوير الويب",
    },
    skills: ["React", "Node.js", "MongoDB", "Stripe API"],
  },
  {
    id: 2,
    imgSrc: "/portfoliosection/2.jpg",
    title: {
      en: "Brand Identity Design",
      ar: "تصميم الهوية البصرية",
    },
    description: {
      en: "We created a complete brand identity including logo, typography, and visual assets for a startup.",
      ar: "قمنا بإنشاء هوية بصرية كاملة تشمل الشعار والخطوط والعناصر البصرية لشركة ناشئة.",
    },
    category: {
      en: "Graphic Design",
      ar: "التصميم الجرافيكي",
    },
    skills: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 3,
    imgSrc: "/portfoliosection/3.jpg",
    title: {
      en: "Social Media Campaign",
      ar: "حملة تسويقية عبر التواصل الاجتماعي",
    },
    description: {
      en: "Managed and executed a month-long social media campaign for a retail brand.",
      ar: "قمنا بإدارة وتنفيذ حملة تسويق شهرية عبر وسائل التواصل لعلامة تجارية تجزئة.",
    },
    category: {
      en: "Digital Marketing",
      ar: "التسويق الرقمي",
    },
    skills: ["Meta Ads", "Instagram", "Analytics"],
  },
  {
    id: 4,
    imgSrc: "/portfoliosection/4.jpg",
    title: {
      en: "Mobile Delivery App",
      ar: "تطبيق توصيل موبايل",
    },
    description: {
      en: "Developed a mobile application for food delivery with real-time tracking and online payments.",
      ar: "طورنا تطبيق موبايل لتوصيل الطعام مع تتبع لحظي وخيارات دفع إلكترونية.",
    },
    category: {
      en: "Mobile Development",
      ar: "تطوير التطبيقات",
    },
    skills: ["React Native", "Firebase", "Google Maps API"],
  },
  {
    id: 5,
    imgSrc: "/portfoliosection/5.jpg",
    title: {
      en: "Corporate Website",
      ar: "موقع شركة رسمي",
    },
    description: {
      en: "Designed and developed a multilingual corporate website for a consulting firm.",
      ar: "صممنا وطوّرنا موقعًا رسميًا متعدد اللغات لشركة استشارية.",
    },
    category: {
      en: "Web Development",
      ar: "تطوير الويب",
    },
    skills: ["Next.js", "Tailwind CSS", "i18n"],
  },
  {
    id: 6,
    imgSrc: "/portfoliosection/6.jpg",
    title: {
      en: "Marketing Strategy Plan",
      ar: "خطة استراتيجية تسويقية",
    },
    description: {
      en: "Provided a full marketing strategy with analytics insights for a new product launch.",
      ar: "قدمنا خطة تسويقية متكاملة مع تحليلات لمنتج جديد عند الإطلاق.",
    },
    category: {
      en: "Marketing Strategy",
      ar: "استراتيجية تسويق",
    },
    skills: ["SEO", "Google Analytics", "Email Marketing"],
  },
];

export const projectsmany = [
  {
    id: 1,
    imgSrc: "/portfoliosection/1.jpg", // Replace this with the actual image link
    title: "Project One",
    description: "This is the description for Project one.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },

  {
    id: 4,
    imgSrc: "/portfoliosection/4.jpg", // Replace this with the actual image link
    title: "Project Four",
    description: "This is the description for Project four.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 5,
    imgSrc: "/portfoliosection/5.jpg", // Replace this with the actual image link
    title: "Project Five",
    description: "This is the description for Project five.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 6,
    imgSrc: "/portfoliosection/6.jpg", // Replace this with the actual image link
    title: "Project Six",
    description: "This is the description for Project six.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 1,
    imgSrc: "/portfoliosection/1.jpg", // Replace this with the actual image link
    title: "Project seven",
    description: "This is the description for Project seven.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 2,
    imgSrc: "/portfoliosection/2.jpg", // Replace this with the actual image link
    title: "Project eight",
    description: "This is the description for Project eight.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 2,
    imgSrc: "/portfoliosection/2.jpg", // Replace this with the actual image link
    title: "Project Two",
    description: "This is the description for Project two.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 4,
    imgSrc: "/portfoliosection/4.jpg", // Replace this with the actual image link
    title: "Project ten",
    description: "This is the description for Project ten.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 5,
    imgSrc: "/portfoliosection/5.jpg", // Replace this with the actual image link
    title: "Project eleven",
    description: "This is the description for Project eleven.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 6,
    imgSrc: "/portfoliosection/6.jpg", // Replace this with the actual image link
    title: "Project tweleve",
    description: "This is the description for Project tweleve.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 3,
    imgSrc: "/portfoliosection/3.jpg", // Replace this with the actual image link
    title: "Project Three",
    description: "This is the description for Project three.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },

  {
    id: 3,
    imgSrc: "/portfoliosection/3.jpg", // Replace this with the actual image link
    title: "Project nine",
    description: "This is the description for Project nine.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },

  {
    id: 1,
    imgSrc: "/portfoliosection/1.jpg", // Replace this with the actual image link
    title: "Project 13",
    description: "This is the description for Project 13.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 2,
    imgSrc: "/portfoliosection/2.jpg", // Replace this with the actual image link
    title: "Project 14",
    description: "This is the description for Project 14.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 3,
    imgSrc: "/portfoliosection/3.jpg", // Replace this with the actual image link
    title: "Project 15",
    description: "This is the description for Project 15.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 4,
    imgSrc: "/portfoliosection/4.jpg", // Replace this with the actual image link
    title: "Project 16",
    description: "This is the description for Project 16.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 5,
    imgSrc: "/portfoliosection/5.jpg", // Replace this with the actual image link
    title: "Project 17",
    description: "This is the description for Project 17.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
  {
    id: 6,
    imgSrc: "/portfoliosection/6.jpg", // Replace this with the actual image link
    title: "Project 18",
    description: "This is the description for Project 18.",
    skills: ["skill - 1", "skill - 2", "skill - 3", "skill - 4"],
  },
];

export const projectCategories = [
  {
    en: "Web Development",
    ar: "تطوير الويب",
  },
  {
    en: "Graphic Design",
    ar: "التصميم الجرافيكي",
  },
  {
    en: "Digital Marketing",
    ar: "التسويق الرقمي",
  },
  {
    en: "Mobile Development",
    ar: "تطوير التطبيقات",
  },
  {
    en: "Marketing Strategy",
    ar: "استراتيجية تسويق",
  },
];
