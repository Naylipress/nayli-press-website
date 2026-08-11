import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { isPlaceholderUrl, siteConfig } from "@/lib/site-config";

import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  icons: {
    icon: [{ url: siteConfig.logoPath, type: "image/png" }],
    apple: [{ url: siteConfig.logoPath, type: "image/png" }],
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const sameAs = [
    siteConfig.links.instagram,
    siteConfig.links.pinterest,
  ].filter((url) => !isPlaceholderUrl(url));
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoPath}`,
    email: siteConfig.contactEmail,
    description: siteConfig.tagline,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
