/* eslint-disable @typescript-eslint/no-explicit-any */

export const getSharedMetadata = (locale: string, translations: any) => ({
  keywords: [
    "Madad",
    "مدد",
    "خدمات تقنية",
    "تطوير مواقع",
    "تحول رقمي",
    "برمجة مخصصة",
    "تصميم واجهات",
    "تطبيقات الويب",
    "دعم فني",
    "حلول برمجية",
    "شركة تقنية",
  ],
  openGraph: {
    title: translations.title,
    description: translations.description,
    url: `https://www.madad.tech/${locale}`, // رابط الصفحة بناءً على اللغة
    siteName: "Madad - مدد",
    images: [
      {
        url: "https://www.madad.tech/images/og-image.jpg", // قم بتحديث الرابط الفعلي عند توفره
        width: 1200,
        height: 630,
        alt:
          locale === "ar"
            ? "مدد - خدمات تقنية متكاملة"
            : "Madad - Integrated Tech Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: translations.title,
    description: translations.description,
    image: "https://www.madad.tech/images/twitter-image.jpg", // قم بتحديث الرابط الفعلي عند توفره
  },
});
