export interface ServiceData {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  smallDesc: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  benefits: {
    en: string[];
    ar: string[];
  };
  features: {
    en: string[];
    ar: string[];
  };
  targetAudience: {
    en: string;
    ar: string;
  };
  slug: string;
  imgsrc: string;
  fullImage: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: {
      en: "Marketing Strategies",
      ar: "استراتيجيات التسويق",
    },
    smallDesc: {
      en: "Marketing strategies are a comprehensive plan that aims to identify the target audience, develop products, and choose the appropriate channels to increase brand awareness and achieve sales goals.",
      ar: "استراتيجيات التسويق هي خطة شاملة تهدف إلى تحديد الجمهور المستهدف، وتطوير المنتجات، واختيار القنوات المناسبة لزيادة الوعي بالعلامة التجارية وتحقيق أهداف المبيعات.",
    },
    description: {
      en: "We develop detailed marketing strategies tailored to your business goals, helping you effectively position your brand in the market, drive engagement, and maximize ROI.",
      ar: "نقوم بتطوير استراتيجيات تسويقية مفصلة تتماشى مع أهداف عملك، لمساعدتك في وضع علامتك التجارية بفعالية في السوق، وتعزيز التفاعل، وتحقيق أعلى عائد استثماري.",
    },
    benefits: {
      en: [
        "Targeted audience reach",
        "Increased brand visibility",
        "Improved conversion rates",
      ],
      ar: [
        "الوصول للجمهور المستهدف",
        "زيادة وضوح العلامة التجارية",
        "تحسين معدلات التحويل",
      ],
    },
    features: {
      en: [
        "Data-driven planning",
        "Multi-channel approach",
        "Customized campaigns",
      ],
      ar: ["تخطيط قائم على البيانات", "نهج متعدد القنوات", "حملات مخصصة"],
    },
    targetAudience: {
      en: "Startups, SMEs, and large enterprises",
      ar: "الشركات الناشئة، والشركات الصغيرة والمتوسطة، والمؤسسات الكبرى",
    },
    slug: "marketing-strategies",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    fullImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
  },
  {
    id: 2,
    title: {
      en: "Web Development",
      ar: "تطوير المواقع الإلكترونية",
    },
    smallDesc: {
      en: "Professional web development services that create responsive, fast, and user-friendly websites tailored to your business needs and modern web standards.",
      ar: "خدمات تطوير المواقع الإلكترونية المهنية التي تنشئ مواقع ويب سريعة الاستجابة وسهلة الاستخدام ومصممة وفقاً لاحتياجات عملك ومعايير الويب الحديثة.",
    },
    description: {
      en: "Our expert developers create stunning, functional websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that drive results.",
      ar: "يقوم مطورونا الخبراء بإنشاء مواقع ويب مذهلة وعملية باستخدام أحدث التقنيات. من صفحات الهبوط البسيطة إلى تطبيقات الويب المعقدة، نقدم حلولاً تحقق النتائج.",
    },
    benefits: {
      en: [
        "Responsive design",
        "SEO optimization",
        "Fast loading speed",
        "Cross-browser compatibility",
      ],
      ar: [
        "تصميم متجاوب",
        "تحسين محركات البحث",
        "سرعة تحميل عالية",
        "التوافق مع جميع المتصفحات",
      ],
    },
    features: {
      en: [
        "Modern frameworks",
        "Mobile-first approach",
        "Security integration",
        "Performance optimization",
      ],
      ar: ["أطر عمل حديثة", "نهج الهاتف أولاً", "تكامل الأمان", "تحسين الأداء"],
    },
    targetAudience: {
      en: "Businesses of all sizes, entrepreneurs, organizations",
      ar: "الشركات من جميع الأحجام، رجال الأعمال، المنظمات",
    },
    slug: "web-development",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    fullImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 3,
    title: {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الهاتف المحمول",
    },
    smallDesc: {
      en: "Custom mobile application development for iOS and Android platforms, delivering engaging user experiences and robust functionality for your business needs.",
      ar: "تطوير تطبيقات الهاتف المحمول المخصصة لمنصات iOS و Android، وتقديم تجارب مستخدم جذابة ووظائف قوية لاحتياجات عملك.",
    },
    description: {
      en: "Transform your ideas into powerful mobile applications. We specialize in native and cross-platform development, ensuring your app performs excellently across all devices.",
      ar: "حوّل أفكارك إلى تطبيقات هاتف محمول قوية. نحن متخصصون في التطوير الأصلي ومتعدد المنصات، مما يضمن أداء تطبيقك بشكل ممتاز عبر جميع الأجهزة.",
    },
    benefits: {
      en: [
        "Native performance",
        "Intuitive UI/UX",
        "Offline functionality",
        "App store optimization",
      ],
      ar: [
        "أداء أصلي",
        "واجهة وتجربة مستخدم بديهية",
        "وظائف غير متصلة",
        "تحسين متجر التطبيقات",
      ],
    },
    features: {
      en: [
        "Cross-platform compatibility",
        "Real-time synchronization",
        "Push notifications",
        "In-app purchases",
      ],
      ar: [
        "التوافق متعدد المنصات",
        "المزامنة في الوقت الفعلي",
        "الإشعارات الفورية",
        "المشتريات داخل التطبيق",
      ],
    },
    targetAudience: {
      en: "Startups, tech companies, retail businesses",
      ar: "الشركات الناشئة، شركات التكنولوجيا، أعمال التجزئة",
    },
    slug: "mobile-app-development",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    fullImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: {
      en: "Digital Marketing",
      ar: "التسويق الرقمي",
    },
    smallDesc: {
      en: "Comprehensive digital marketing solutions including social media management, content creation, PPC advertising, and analytics to grow your online presence effectively.",
      ar: "حلول التسويق الرقمي الشاملة بما في ذلك إدارة وسائل التواصل الاجتماعي، وإنشاء المحتوى، والإعلان بالدفع بالنقرة، والتحليلات لتنمية تواجدك عبر الإنترنت بفعالية.",
    },
    description: {
      en: "Boost your brand's digital footprint with our comprehensive marketing services. We create data-driven campaigns that engage your audience and drive measurable results.",
      ar: "عزز البصمة الرقمية لعلامتك التجارية مع خدماتنا التسويقية الشاملة. نحن ننشئ حملات قائمة على البيانات تشرك جمهورك وتحقق نتائج قابلة للقياس.",
    },
    benefits: {
      en: [
        "Increased online visibility",
        "Higher engagement rates",
        "Better ROI tracking",
        "Brand awareness growth",
      ],
      ar: [
        "زيادة الرؤية عبر الإنترنت",
        "معدلات مشاركة أعلى",
        "تتبع أفضل لعائد الاستثمار",
        "نمو الوعي بالعلامة التجارية",
      ],
    },
    features: {
      en: [
        "Social media campaigns",
        "Content marketing",
        "Email automation",
        "Performance analytics",
      ],
      ar: [
        "حملات وسائل التواصل الاجتماعي",
        "تسويق المحتوى",
        "أتمتة البريد الإلكتروني",
        "تحليلات الأداء",
      ],
    },
    targetAudience: {
      en: "E-commerce businesses, service providers, B2B companies",
      ar: "أعمال التجارة الإلكترونية، مقدمي الخدمات، شركات B2B",
    },
    slug: "digital-marketing",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    fullImage:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80",
  },
  {
    id: 5,
    title: {
      en: "Brand Identity Design",
      ar: "تصميم الهوية التجارية",
    },
    smallDesc: {
      en: "Creative brand identity design services that establish a memorable visual presence for your business, including logo design, color schemes, and brand guidelines.",
      ar: "خدمات تصميم الهوية التجارية الإبداعية التي تؤسس حضوراً بصرياً لا يُنسى لعملك، بما في ذلك تصميم الشعار، وأنظمة الألوان، ودلائل العلامة التجارية.",
    },
    description: {
      en: "Craft a distinctive brand identity that resonates with your target audience. Our designers create cohesive visual systems that communicate your brand's values and personality.",
      ar: "صمم هوية تجارية مميزة تتردد صداها مع جمهورك المستهدف. يقوم مصممونا بإنشاء أنظمة بصرية متماسكة تنقل قيم علامتك التجارية وشخصيتها.",
    },
    benefits: {
      en: [
        "Professional brand image",
        "Consistent visual identity",
        "Memorable brand recognition",
        "Market differentiation",
      ],
      ar: [
        "صورة علامة تجارية احترافية",
        "هوية بصرية متسقة",
        "تميز العلامة التجارية الذي لا يُنسى",
        "التمايز في السوق",
      ],
    },
    features: {
      en: [
        "Logo design",
        "Brand guidelines",
        "Typography selection",
        "Color palette creation",
      ],
      ar: [
        "تصميم الشعار",
        "دلائل العلامة التجارية",
        "اختيار الخط",
        "إنشاء لوحة الألوان",
      ],
    },
    targetAudience: {
      en: "New businesses, rebranding companies, creative agencies",
      ar: "الأعمال الجديدة، الشركات التي تعيد تسمية علامتها التجارية، الوكالات الإبداعية",
    },
    slug: "brand-identity-design",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3076/3076395.png",
    fullImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
  },
  {
    id: 6,
    title: {
      en: "E-commerce Solutions",
      ar: "حلول التجارة الإلكترونية",
    },
    smallDesc: {
      en: "Complete e-commerce platform development with secure payment integration, inventory management, and user-friendly shopping experiences to boost online sales.",
      ar: "تطوير منصة التجارة الإلكترونية الكاملة مع تكامل الدفع الآمن، وإدارة المخزون، وتجارب التسوق سهلة الاستخدام لتعزيز المبيعات عبر الإنترنت.",
    },
    description: {
      en: "Launch your online store with our comprehensive e-commerce solutions. We build scalable platforms that handle everything from product catalogs to payment processing.",
      ar: "أطلق متجرك عبر الإنترنت مع حلول التجارة الإلكترونية الشاملة. نحن نبني منصات قابلة للتوسع تتعامل مع كل شيء من كتالوجات المنتجات إلى معالجة المدفوعات.",
    },
    benefits: {
      en: [
        "Secure transactions",
        "Mobile optimization",
        "Inventory tracking",
        "Multi-payment options",
      ],
      ar: [
        "معاملات آمنة",
        "تحسين للهاتف المحمول",
        "تتبع المخزون",
        "خيارات الدفع المتعددة",
      ],
    },
    features: {
      en: [
        "Shopping cart functionality",
        "Order management",
        "Customer accounts",
        "Analytics dashboard",
      ],
      ar: [
        "وظائف عربة التسوق",
        "إدارة الطلبات",
        "حسابات العملاء",
        "لوحة تحكم التحليلات",
      ],
    },
    targetAudience: {
      en: "Retailers, wholesalers, product manufacturers",
      ar: "تجار التجزئة، تجار الجملة، مصنعي المنتجات",
    },
    slug: "ecommerce-solutions",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    fullImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 7,
    title: {
      en: "SEO Services",
      ar: "خدمات تحسين محركات البحث",
    },
    smallDesc: {
      en: "Professional SEO services to improve your website's search engine rankings, increase organic traffic, and enhance online visibility through proven optimization techniques.",
      ar: "خدمات تحسين محركات البحث المهنية لتحسين ترتيب موقعك في محركات البحث، وزيادة حركة المرور العضوية، وتعزيز الرؤية عبر الإنترنت من خلال تقنيات التحسين المثبتة.",
    },
    description: {
      en: "Dominate search results with our comprehensive SEO strategies. We optimize your website's technical aspects, content, and off-page factors to achieve higher rankings.",
      ar: "هيمن على نتائج البحث مع استراتيجيات تحسين محركات البحث الشاملة. نحن نحسن الجوانب التقنية لموقعك والمحتوى والعوامل خارج الصفحة لتحقيق ترتيبات أعلى.",
    },
    benefits: {
      en: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term results",
      ],
      ar: [
        "ترتيبات بحث أعلى",
        "زيادة حركة المرور العضوية",
        "تجربة مستخدم أفضل",
        "نتائج طويلة المدى",
      ],
    },
    features: {
      en: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
        "Link building",
      ],
      ar: [
        "بحث الكلمات المفتاحية",
        "تحسين الصفحة",
        "تحسين محركات البحث التقني",
        "بناء الروابط",
      ],
    },
    targetAudience: {
      en: "Local businesses, online retailers, service companies",
      ar: "الأعمال المحلية، تجار التجزئة عبر الإنترنت، شركات الخدمات",
    },
    slug: "seo-services",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    fullImage:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: 8,
    title: {
      en: "UI/UX Design",
      ar: "تصميم واجهة وتجربة المستخدم",
    },
    smallDesc: {
      en: "User-centered design services that create intuitive interfaces and exceptional user experiences, focusing on usability, accessibility, and visual appeal.",
      ar: "خدمات التصميم المتمركزة حول المستخدم التي تنشئ واجهات بديهية وتجارب مستخدم استثنائية، مع التركيز على سهولة الاستخدام وإمكانية الوصول والجاذبية البصرية.",
    },
    description: {
      en: "Design interfaces that users love to interact with. Our UX/UI experts create wireframes, prototypes, and final designs that prioritize user satisfaction and business goals.",
      ar: "صمم واجهات يحب المستخدمون التفاعل معها. يقوم خبراء UX/UI لدينا بإنشاء إطارات سلكية ونماذج أولية وتصميمات نهائية تعطي الأولوية لرضا المستخدم وأهداف العمل.",
    },
    benefits: {
      en: [
        "Improved user satisfaction",
        "Higher conversion rates",
        "Reduced bounce rates",
        "Enhanced usability",
      ],
      ar: [
        "تحسين رضا المستخدم",
        "معدلات تحويل أعلى",
        "تقليل معدلات الارتداد",
        "تحسين سهولة الاستخدام",
      ],
    },
    features: {
      en: ["User research", "Wireframing", "Prototyping", "Usability testing"],
      ar: [
        "بحث المستخدم",
        "الإطار السلكي",
        "النماذج الأولية",
        "اختبار سهولة الاستخدام",
      ],
    },
    targetAudience: {
      en: "SaaS companies, mobile app developers, web platforms",
      ar: "شركات SaaS، مطوري تطبيقات الهاتف المحمول، منصات الويب",
    },
    slug: "ui-ux-design",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    fullImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 9,
    title: {
      en: "Content Writing",
      ar: "كتابة المحتوى",
    },
    smallDesc: {
      en: "Professional content writing services that engage your audience, improve SEO rankings, and communicate your brand message effectively across all digital platforms.",
      ar: "خدمات كتابة المحتوى المهنية التي تشرك جمهورك، وتحسن ترتيبات تحسين محركات البحث، وتنقل رسالة علامتك التجارية بفعالية عبر جميع المنصات الرقمية.",
    },
    description: {
      en: "Tell your story with compelling content that converts. Our writers create blog posts, web copy, social media content, and marketing materials that resonate with your audience.",
      ar: "احك قصتك بمحتوى مقنع يحول. يقوم كتابنا بإنشاء منشورات المدونة، ونسخ الويب، ومحتوى وسائل التواصل الاجتماعي، والمواد التسويقية التي تتردد صداها مع جمهورك.",
    },
    benefits: {
      en: [
        "SEO-optimized content",
        "Brand voice consistency",
        "Audience engagement",
        "Increased conversions",
      ],
      ar: [
        "محتوى محسن لمحركات البحث",
        "اتساق صوت العلامة التجارية",
        "مشاركة الجمهور",
        "زيادة التحويلات",
      ],
    },
    features: {
      en: [
        "Blog writing",
        "Web copywriting",
        "Social media content",
        "Email campaigns",
      ],
      ar: [
        "كتابة المدونة",
        "كتابة نسخ الويب",
        "محتوى وسائل التواصل الاجتماعي",
        "حملات البريد الإلكتروني",
      ],
    },
    targetAudience: {
      en: "Content marketers, bloggers, business owners",
      ar: "مسوقي المحتوى، المدونون، أصحاب الأعمال",
    },
    slug: "content-writing",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    fullImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
  },
  {
    id: 10,
    title: {
      en: "Social Media Management",
      ar: "إدارة وسائل التواصل الاجتماعي",
    },
    smallDesc: {
      en: "Comprehensive social media management services including content creation, community engagement, advertising campaigns, and performance analytics across all major platforms.",
      ar: "خدمات إدارة وسائل التواصل الاجتماعي الشاملة بما في ذلك إنشاء المحتوى، ومشاركة المجتمع، والحملات الإعلانية، وتحليلات الأداء عبر جميع المنصات الرئيسية.",
    },
    description: {
      en: "Build a strong social media presence with our expert management services. We create engaging content, manage communities, and run targeted campaigns that grow your following.",
      ar: "بناء حضور قوي لوسائل التواصل الاجتماعي مع خدمات الإدارة الخبيرة لدينا. نحن ننشئ محتوى جذاب، وندير المجتمعات، وننفذ حملات مستهدفة تنمي متابعيك.",
    },
    benefits: {
      en: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Community growth",
        "Lead generation",
      ],
      ar: [
        "زيادة الوعي بالعلامة التجارية",
        "معدلات مشاركة أعلى",
        "نمو المجتمع",
        "توليد العملاء المحتملين",
      ],
    },
    features: {
      en: [
        "Content scheduling",
        "Community management",
        "Paid advertising",
        "Analytics reporting",
      ],
      ar: [
        "جدولة المحتوى",
        "إدارة المجتمع",
        "الإعلانات المدفوعة",
        "تقارير التحليلات",
      ],
    },
    targetAudience: {
      en: "Small businesses, influencers, e-commerce brands",
      ar: "الشركات الصغيرة، المؤثرون، علامات التجارة الإلكترونية",
    },
    slug: "social-media-management",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3059/3059997.png",
    fullImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: 11,
    title: {
      en: "Graphic Design",
      ar: "التصميم الجرافيكي",
    },
    smallDesc: {
      en: "Creative graphic design services for print and digital media, including brochures, banners, infographics, and marketing materials that capture attention and communicate effectively.",
      ar: "خدمات التصميم الجرافيكي الإبداعية للوسائط المطبوعة والرقمية، بما في ذلك الكتيبات واللافتات والرسوم البيانية والمواد التسويقية التي تجذب الانتباه وتتواصل بفعالية.",
    },
    description: {
      en: "Transform your ideas into stunning visual designs. Our graphic designers create impactful visuals that strengthen your brand identity and communicate your message clearly.",
      ar: "حوّل أفكارك إلى تصميمات بصرية مذهلة. يقوم مصممو الجرافيك لدينا بإنشاء مواد بصرية مؤثرة تعزز هوية علامتك التجارية وتنقل رسالتك بوضوح.",
    },
    benefits: {
      en: [
        "Professional visual identity",
        "Brand consistency",
        "Effective communication",
        "Enhanced marketing materials",
      ],
      ar: [
        "هوية بصرية احترافية",
        "اتساق العلامة التجارية",
        "تواصل فعال",
        "تحسين المواد التسويقية",
      ],
    },
    features: {
      en: [
        "Print design",
        "Digital graphics",
        "Infographic creation",
        "Marketing collateral",
      ],
      ar: [
        "تصميم الطباعة",
        "الرسوم الرقمية",
        "إنشاء الرسوم البيانية",
        "المواد التسويقية الداعمة",
      ],
    },
    targetAudience: {
      en: "Marketing teams, event organizers, publishing companies",
      ar: "فرق التسويق، منظمي الأحداث، شركات النشر",
    },
    slug: "graphic-design",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3076/3076395.png",
    fullImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 12,
    title: {
      en: "Cloud Solutions",
      ar: "الحلول السحابية",
    },
    smallDesc: {
      en: "Comprehensive cloud computing solutions including migration, infrastructure setup, security implementation, and ongoing management for scalable business operations.",
      ar: "حلول الحوسبة السحابية الشاملة بما في ذلك الترحيل، وإعداد البنية التحتية، وتنفيذ الأمان، والإدارة المستمرة لعمليات الأعمال القابلة للتوسع.",
    },
    description: {
      en: "Modernize your IT infrastructure with our cloud solutions. We help businesses migrate to the cloud, optimize costs, and ensure secure, scalable operations.",
      ar: "حدّث البنية التحتية لتكنولوجيا المعلومات الخاصة بك مع حلولنا السحابية. نحن نساعد الشركات على الانتقال إلى السحابة، وتحسين التكاليف، وضمان العمليات الآمنة والقابلة للتوسع.",
    },
    benefits: {
      en: [
        "Cost reduction",
        "Scalability",
        "Enhanced security",
        "Improved accessibility",
      ],
      ar: [
        "تقليل التكلفة",
        "قابلية التوسع",
        "أمان محسّن",
        "تحسين إمكانية الوصول",
      ],
    },
    features: {
      en: [
        "Cloud migration",
        "Infrastructure management",
        "Security monitoring",
        "Backup solutions",
      ],
      ar: [
        "الترحيل السحابي",
        "إدارة البنية التحتية",
        "مراقبة الأمان",
        "حلول النسخ الاحتياطي",
      ],
    },
    targetAudience: {
      en: "Enterprises, growing businesses, IT departments",
      ar: "المؤسسات، الشركات النامية، أقسام تكنولوجيا المعلومات",
    },
    slug: "cloud-solutions",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    fullImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 13,
    title: {
      en: "Data Analytics",
      ar: "تحليل البيانات",
    },
    smallDesc: {
      en: "Advanced data analytics services that transform raw data into actionable insights, helping businesses make informed decisions through comprehensive reporting and visualization.",
      ar: "خدمات تحليل البيانات المتقدمة التي تحول البيانات الخام إلى رؤى قابلة للتنفيذ، مما يساعد الشركات على اتخاذ قرارات مدروسة من خلال التقارير الشاملة والتصور.",
    },
    description: {
      en: "Unlock the power of your data with our analytics solutions. We help you collect, process, and analyze data to identify trends, optimize operations, and drive growth.",
      ar: "اكتشف قوة بياناتك مع حلول التحليلات لدينا. نحن نساعدك في جمع ومعالجة وتحليل البيانات لتحديد الاتجاهات وتحسين العمليات ودفع النمو.",
    },
    benefits: {
      en: [
        "Data-driven decisions",
        "Performance insights",
        "Trend identification",
        "ROI optimization",
      ],
      ar: [
        "قرارات قائمة على البيانات",
        "رؤى الأداء",
        "تحديد الاتجاهات",
        "تحسين العائد على الاستثمار",
      ],
    },
    features: {
      en: [
        "Data visualization",
        "Predictive modeling",
        "Custom dashboards",
        "Automated reporting",
      ],
      ar: [
        "تصور البيانات",
        "النمذجة التنبؤية",
        "لوحات التحكم المخصصة",
        "التقارير الآلية",
      ],
    },
    targetAudience: {
      en: "Data-driven companies, research organizations, marketing teams",
      ar: "الشركات القائمة على البيانات، منظمات البحث، فرق التسويق",
    },
    slug: "data-analytics",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    fullImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 14,
    title: {
      en: "Cybersecurity Services",
      ar: "خدمات الأمن السيبراني",
    },
    smallDesc: {
      en: "Comprehensive cybersecurity solutions including threat assessment, security audits, penetration testing, and ongoing monitoring to protect your digital assets.",
      ar: "حلول الأمن السيبراني الشاملة بما في ذلك تقييم التهديدات، وتدقيق الأمان، واختبار الاختراق، والمراقبة المستمرة لحماية أصولك الرقمية.",
    },
    description: {
      en: "Protect your business from cyber threats with our comprehensive security services. We implement robust security measures and provide ongoing monitoring to keep your data safe.",
      ar: "احم عملك من التهديدات السيبرانية مع خدمات الأمان الشاملة لدينا. نحن ننفذ تدابير أمنية قوية ونوفر مراقبة مستمرة للحفاظ على أمان بياناتك.",
    },
    benefits: {
      en: [
        "Enhanced security posture",
        "Compliance assurance",
        "Risk mitigation",
        "24/7 monitoring",
      ],
      ar: [
        "تعزيز الوضع الأمني",
        "ضمان الامتثال",
        "تخفيف المخاطر",
        "مراقبة على مدار الساعة",
      ],
    },
    features: {
      en: [
        "Security audits",
        "Penetration testing",
        "Incident response",
        "Security training",
      ],
      ar: [
        "تدقيق الأمان",
        "اختبار الاختراق",
        "الاستجابة للحوادث",
        "التدريب الأمني",
      ],
    },
    targetAudience: {
      en: "Financial institutions, healthcare providers, government agencies",
      ar: "المؤسسات المالية، مقدمي الرعاية الصحية، الوكالات الحكومية",
    },
    slug: "cybersecurity-services",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/2092/2092063.png",
    fullImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 15,
    title: {
      en: "Business Consulting",
      ar: "الاستشارات التجارية",
    },
    smallDesc: {
      en: "Strategic business consulting services that help organizations improve operations, increase efficiency, and achieve sustainable growth through expert guidance and analysis.",
      ar: "خدمات الاستشارات التجارية الاستراتيجية التي تساعد المنظمات على تحسين العمليات، وزيادة الكفاءة، وتحقيق النمو المستدام من خلال التوجيه والتحليل الخبير.",
    },
    description: {
      en: "Transform your business with our strategic consulting services. We analyze your operations, identify opportunities, and develop actionable strategies for sustainable growth.",
      ar: "حوّل عملك مع خدمات الاستشارات الاستراتيجية لدينا. نحن نحلل عملياتك، ونحدد الفرص، ونطور استراتيجيات قابلة للتنفيذ للنمو المستدام.",
    },
    benefits: {
      en: [
        "Strategic planning",
        "Operational efficiency",
        "Market expansion",
        "Competitive advantage",
      ],
      ar: [
        "التخطيط الاستراتيجي",
        "الكفاءة التشغيلية",
        "التوسع في السوق",
        "الميزة التنافسية",
      ],
    },
    features: {
      en: [
        "Business analysis",
        "Strategy development",
        "Process optimization",
        "Change management",
      ],
      ar: [
        "تحليل الأعمال",
        "تطوير الاستراتيجية",
        "تحسين العمليات",
        "إدارة التغيير",
      ],
    },
    targetAudience: {
      en: "SMEs, startups, established corporations",
      ar: "الشركات الصغيرة والمتوسطة، الشركات الناشئة، الشركات الراسخة",
    },
    slug: "business-consulting",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    fullImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 16,
    title: {
      en: "Video Production",
      ar: "إنتاج الفيديو",
    },
    smallDesc: {
      en: "Professional video production services including corporate videos, promotional content, training materials, and social media videos that engage audiences and drive results.",
      ar: "خدمات إنتاج الفيديو المهنية بما في ذلك الفيديوهات المؤسسية، والمحتوى الترويجي، ومواد التدريب، وفيديوهات وسائل التواصل الاجتماعي التي تشرك الجماهير وتحقق النتائج.",
    },
    description: {
      en: "Bring your stories to life with our professional video production services. From concept to final edit, we create compelling videos that captivate your audience.",
      ar: "أحي قصصك مع خدمات إنتاج الفيديو المهنية لدينا. من المفهوم إلى التحرير النهائي، نحن ننشئ فيديوهات مقنعة تسحر جمهورك.",
    },
    benefits: {
      en: [
        "High-quality production",
        "Engaging storytelling",
        "Multi-platform optimization",
        "Professional equipment",
      ],
      ar: [
        "إنتاج عالي الجودة",
        "سرد جذاب",
        "تحسين متعدد المنصات",
        "معدات احترافية",
      ],
    },
    features: {
      en: ["Scriptwriting", "Filming", "Video editing", "Post-production"],
      ar: ["كتابة السيناريو", "التصوير", "تحرير الفيديو", "ما بعد الإنتاج"],
    },
    targetAudience: {
      en: "Marketing agencies, educational institutions, entertainment companies",
      ar: "وكالات التسويق، المؤسسات التعليمية، شركات الترفيه",
    },
    slug: "video-production",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1179/1179069.png",
    fullImage:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: 17,
    title: {
      en: "IT Support",
      ar: "الدعم التقني",
    },
    smallDesc: {
      en: "Comprehensive IT support services including helpdesk support, system maintenance, troubleshooting, and technical assistance to keep your technology running smoothly.",
      ar: "خدمات الدعم التقني الشاملة بما في ذلك دعم مكتب المساعدة، وصيانة النظام، واستكشاف الأخطاء وإصلاحها، والمساعدة التقنية للحفاظ على تشغيل تقنيتك بسلاسة.",
    },
    description: {
      en: "Keep your technology running smoothly with our comprehensive IT support services. We provide 24/7 support, proactive maintenance, and expert troubleshooting.",
      ar: "حافظ على تشغيل تقنيتك بسلاسة مع خدمات الدعم التقني الشاملة لدينا. نحن نقدم الدعم على مدار الساعة، والصيانة الاستباقية، واستكشاف الأخطاء وإصلاحها بخبرة.",
    },
    benefits: {
      en: [
        "Minimized downtime",
        "Improved productivity",
        "Cost-effective solutions",
        "Expert assistance",
      ],
      ar: [
        "تقليل وقت التوقف",
        "تحسين الإنتاجية",
        "حلول فعالة من حيث التكلفة",
        "المساعدة الخبيرة",
      ],
    },
    features: {
      en: [
        "24/7 helpdesk",
        "Remote support",
        "System monitoring",
        "Hardware maintenance",
      ],
      ar: [
        "مكتب المساعدة على مدار الساعة",
        "الدعم عن بُعد",
        "مراقبة النظام",
        "صيانة الأجهزة",
      ],
    },
    targetAudience: {
      en: "Small businesses, remote teams, growing companies",
      ar: "الشركات الصغيرة، الفرق البعيدة، الشركات النامية",
    },
    slug: "it-support",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1705/1705312.png",
    fullImage:
      "https://images.unsplash.com/photo-1581092786450-7d5e2e9a1a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 18,
    title: {
      en: "Digital Transformation",
      ar: "التحول الرقمي",
    },
    smallDesc: {
      en: "Comprehensive digital transformation services that modernize business processes, integrate new technologies, and create digital-first strategies for competitive advantage.",
      ar: "خدمات التحول الرقمي الشاملة التي تحدث عمليات الأعمال، وتدمج التقنيات الجديدة، وتنشئ استراتيجيات رقمية أولاً للميزة التنافسية.",
    },
    description: {
      en: "Navigate the digital age with our transformation services. We help businesses adopt new technologies, optimize processes, and create digital-first strategies for the future.",
      ar: "تنقل في العصر الرقمي مع خدمات التحول لدينا. نحن نساعد الشركات على تبني التقنيات الجديدة، وتحسين العمليات، وإنشاء استراتيجيات رقمية أولاً للمستقبل.",
    },
    benefits: {
      en: [
        "Process automation",
        "Improved efficiency",
        "Digital innovation",
        "Future readiness",
      ],
      ar: [
        "أتمتة العمليات",
        "تحسين الكفاءة",
        "الابتكار الرقمي",
        "الاستعداد للمستقبل",
      ],
    },
    features: {
      en: [
        "Technology assessment",
        "Process digitization",
        "System integration",
        "Change management",
      ],
      ar: [
        "تقييم التكنولوجيا",
        "رقمنة العمليات",
        "تكامل النظام",
        "إدارة التغيير",
      ],
    },
    targetAudience: {
      en: "Traditional businesses, government agencies, healthcare organizations",
      ar: "الشركات التقليدية، الوكالات الحكومية، منظمات الرعاية الصحية",
    },
    slug: "digital-transformation",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3135/3135783.png",
    fullImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: 19,
    title: {
      en: "Automation Solutions",
      ar: "حلول الأتمتة",
    },
    smallDesc: {
      en: "Business process automation solutions that streamline operations, reduce manual tasks, and increase efficiency through intelligent workflow design and implementation.",
      ar: "حلول أتمتة العمليات التجارية التي تبسط العمليات، وتقلل المهام اليدوية، وتزيد الكفاءة من خلال تصميم وتنفيذ سير العمل الذكي.",
    },
    description: {
      en: "Streamline your operations with our automation solutions. We identify repetitive tasks, design efficient workflows, and implement systems that save time and reduce errors.",
      ar: "بسّط عملياتك مع حلول الأتمتة لدينا. نحن نحدد المهام المتكررة، ونصمم سير عمل فعال، وننفذ أنظمة توفر الوقت وتقلل الأخطاء.",
    },
    benefits: {
      en: [
        "Increased efficiency",
        "Cost reduction",
        "Error minimization",
        "Scalable processes",
      ],
      ar: [
        "زيادة الكفاءة",
        "تقليل التكلفة",
        "تقليل الأخطاء",
        "عمليات قابلة للتوسع",
      ],
    },
    features: {
      en: [
        "Workflow automation",
        "Process optimization",
        "Integration services",
        "Custom development",
      ],
      ar: [
        "أتمتة سير العمل",
        "تحسين العمليات",
        "خدمات التكامل",
        "التطوير المخصص",
      ],
    },
    targetAudience: {
      en: "Manufacturing companies, service providers, administrative departments",
      ar: "شركات التصنيع، مقدمي الخدمات، الأقسام الإدارية",
    },
    slug: "automation-solutions",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3135/3135783.png",
    fullImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 20,
    title: {
      en: "Training and Development",
      ar: "التدريب والتطوير",
    },
    smallDesc: {
      en: "Professional training and development programs designed to enhance team skills, improve performance, and foster continuous learning in technology and business practices.",
      ar: "برامج التدريب والتطوير المهنية المصممة لتعزيز مهارات الفريق، وتحسين الأداء، وتعزيز التعلم المستمر في التكنولوجيا والممارسات التجارية.",
    },
    description: {
      en: "Invest in your team's growth with our comprehensive training programs. We offer customized courses, workshops, and certification programs to enhance skills and productivity.",
      ar: "استثمر في نمو فريقك مع برامج التدريب الشاملة لدينا. نحن نقدم دورات مخصصة وورش عمل وبرامج شهادات لتعزيز المهارات والإنتاجية.",
    },
    benefits: {
      en: [
        "Skill enhancement",
        "Improved performance",
        "Career development",
        "Knowledge retention",
      ],
      ar: [
        "تعزيز المهارات",
        "تحسين الأداء",
        "تطوير الوظيفة",
        "الاحتفاظ بالمعرفة",
      ],
    },
    features: {
      en: [
        "Custom curricula",
        "Hands-on workshops",
        "Certification programs",
        "Progress tracking",
      ],
      ar: ["مناهج مخصصة", "ورش عمل عملية", "برامج الشهادات", "تتبع التقدم"],
    },
    targetAudience: {
      en: "HR departments, educational institutions, professional teams",
      ar: "أقسام الموارد البشرية، المؤسسات التعليمية، الفرق المهنية",
    },
    slug: "training-development",
    imgsrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    fullImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];
