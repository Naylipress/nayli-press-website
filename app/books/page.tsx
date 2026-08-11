import type { Metadata } from "next";
import Image from "next/image";

import { AmazonCta } from "@/components/amazon-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { books } from "@/data/books";
import { siteConfig } from "@/lib/site-config";

import styles from "./books.module.css";

const book = books[0];
const pageTitle = `${book.title} | ${siteConfig.name}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: book.seoDescription,
  alternates: { canonical: "/books" },
  openGraph: {
    title: pageTitle,
    description: book.seoDescription,
    siteName: siteConfig.name,
    type: "website",
    url: `${siteConfig.url}/books`,
    images: [
      {
        url: `${siteConfig.url}${book.imagePath}`,
        width: 547,
        height: 547,
        alt: `${book.title}, official front cover`,
      },
    ],
  },
};

export default function BooksPage() {
  const bookDetails = [
    { label: "Title", value: book.title },
    { label: "Language", value: book.language },
    { label: "Format", value: book.format },
    {
      label: "Recommended age",
      value: book.ageRange.replace("Ages ", "") + " years",
    },
    { label: "Publisher", value: book.publisher },
    { label: "Reading time", value: book.readingTime },
  ];

  const bookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description,
    image: `${siteConfig.url}${book.imagePath}`,
    url: `${siteConfig.url}/books`,
    inLanguage: book.languageCode,
    bookFormat: book.format,
    author: {
      "@type": "Organization",
      name: book.publisher,
    },
    publisher: {
      "@type": "Organization",
      name: book.publisher,
      url: siteConfig.url,
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: book.audience,
      suggestedMinAge: 0,
      suggestedMaxAge: 3,
    },
  };

  return (
    <div className="overflow-x-clip">
      <script
        id="book-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData) }}
      />

      <Navbar activeLabel="Books" />

      <main>
        <section aria-labelledby="book-heading" className={styles.heroSection}>
          <Container className="max-w-[90rem]">
            <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 xl:gap-28">
              <div className={styles.heroCopy}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Our First Book
                </p>
                <h1
                  id="book-heading"
                  className="mt-5 font-heading text-[clamp(3.25rem,15vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.025em]"
                >
                  {book.title}
                </h1>
                <p className="mt-8 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                  {book.description}
                </p>

                <AmazonCta className="mt-10" />
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.coverStage}>
                  <div className={styles.coverObject}>
                    <Image
                      src={book.imagePath}
                      alt={`${book.title}, official front cover`}
                      width={2625}
                      height={2625}
                      loading="eager"
                      sizes="(min-width: 1280px) 43rem, (min-width: 1024px) 48vw, (min-width: 640px) 72vw, 88vw"
                      className={styles.coverImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="benefits-heading"
          className={styles.editorialSection}
        >
          <Container>
            <Reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">
              <div className="max-w-xl">
                <h2
                  id="benefits-heading"
                  className="font-heading text-[clamp(3rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.02em]"
                >
                  Why parents love it
                </h2>
                <p className="mt-7 text-base leading-8 text-text-muted sm:text-lg">
                  {book.benefitsDescription}
                </p>
              </div>

              <ul className="grid gap-x-12 gap-y-8 border-y border-border py-10 sm:grid-cols-2">
                {book.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-text/60 text-[0.62rem]"
                    >
                      ✓
                    </span>
                    <span className="font-medium leading-6">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="story-heading"
          className={`${styles.storySection} border-y border-border bg-surface`}
        >
          <Container>
            <Reveal className="mx-auto max-w-5xl text-center">
              <h2
                id="story-heading"
                className="whitespace-pre-line font-heading text-[clamp(3rem,6vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                {book.storyHeading}
              </h2>
              <p className="mx-auto mt-10 max-w-3xl text-base leading-8 text-text-muted sm:text-lg">
                {book.storyDescription}
              </p>
              <div className={styles.branchDivider} aria-hidden="true">
                <Image
                  src={siteConfig.logoBranchPath}
                  alt=""
                  width={312}
                  height={177}
                />
              </div>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="details-heading"
          className={styles.editorialSection}
        >
          <Container>
            <Reveal className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">
              <h2
                id="details-heading"
                className="font-heading text-[clamp(3rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                Book details
              </h2>

              <dl className={styles.detailsList}>
                {bookDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="final-cta-heading"
          className={`${styles.finalCtaSection} border-t border-border bg-surface`}
        >
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2
                id="final-cta-heading"
                className="font-heading text-[clamp(3rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                Ready to discover {book.title}?
              </h2>
              <AmazonCta className="mx-auto mt-10" />
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
