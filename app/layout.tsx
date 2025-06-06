/* eslint-disable @typescript-eslint/no-explicit-any */
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/_global/Navbar";
import Footer from "./_components/_global/Footer";
import ClientLayout from "./_components/_global/ClientLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { directionMap } from "./constants/constants";
import { getTranslations } from "./helpers/helpers";
import { getSharedMetadata } from "./helpers/getSharedMetadata";
import "./globals.css";
import WhatsappButton from "./_components/_global/WhatsappButton";
import ScrollToTopButton from "./_components/_global/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: any) {
  const local = params.local || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.layoutMeta.title,
    description: translations.layoutMeta.description,
    ...sharedMetadata,
  };
}

export default async function RootLayout({ params, children }: any) {
  const local = params.local || "en";

  return (
    <html dir={directionMap[local]} lang={local}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ClientLayout>
            <Navbar />
            <Toaster richColors position="top-center" />
            <div className="min-h-screen">
              {children}
              <WhatsappButton />
              <ScrollToTopButton />
            </div>
            <Footer />
          </ClientLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
