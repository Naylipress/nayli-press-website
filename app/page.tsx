import type { Metadata } from "next";
import Image from "next/image";

import { AmazonCta } from "@/components/amazon-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { books } from "@/data/books";
import { siteConfig } from "@/lib/site-config";

import styles from "./home.module.css";

const pageTitle = "Nayli Press | Books for Curious Little Minds";
const pageDescription =
  "Nayli Press creates thoughtful books designed to inspire curiosity, gratitude and a lifelong love of reading";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.socialImagePath}`,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
};

function LogoBranch({ className = "" }: { className?: string }) {
  return (
    <Image
      src={siteConfig.logoBranchPath}
      alt=""
      width={312}
      height={177}
      className={`${styles.logoBranch} ${className}`}
    />
  );
}

function BookCover() {
  const book = books[0];

  return (
    <div className={`${styles.bookStage} ${styles.heroBook}`}>
      <div className={styles.bookObject}>
        <Image
          src={book.imagePath}
          alt={`${book.title}, official front cover`}
          width={2625}
          height={2625}
          loading="eager"
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 82vw"
          className={styles.bookImage}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const book = books[0];
  const editorialFeatures = [
    {
      title: book.ageRange,
      description: "Made for a child’s earliest shared reading moments",
    },
    {
      title: book.features[0],
      description: "Bold black-and-white artwork created to hold little eyes",
    },
    {
      title: book.features[1],
      description:
        "Simple words invite closeness, repetition and participation",
    },
    {
      title: book.features[2],
      description: "A gentle foundation for noticing everyday blessings",
    },
  ];

  return (
    <div id="top" className="overflow-x-clip">
      <Navbar />

      <main>
        <section
          aria-labelledby="hero-heading"
          className={`${styles.heroSection} relative`}
        >
          <Container className="max-w-[90rem]">
            <div className="grid items-center gap-16 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20">
              <div className={styles.heroCopy}>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  {siteConfig.tagline}
                </p>
                <h1
                  id="hero-heading"
                  className="max-w-3xl font-heading text-[clamp(3rem,7vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.025em]"
                >
                  Designed to inspire curiosity, gratitude and a lifelong love
                  of reading
                </h1>
                <AmazonCta className="mt-12 sm:mt-14" />
              </div>

              <div
                className={`${styles.heroVisual} relative -mt-12 mx-auto w-full max-w-2xl sm:-mt-14 lg:-top-28 lg:mt-0 xl:-top-32`}
              >
                <BookCover />
              </div>
            </div>
          </Container>
        </section>

        <Section
          id="featured-book"
          aria-labelledby="featured-book-heading"
          className={`${styles.featuredSection} scroll-mt-6 border-y border-border bg-surface`}
        >
          <Container>
            <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Why This Book Matters
                </p>
                <h2
                  id="featured-book-heading"
                  className="mt-5 font-heading text-[clamp(2.8rem,5.7vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.02em]"
                >
                  A book made for little hands and growing hearts
                </h2>
              </div>

              <div className="max-w-2xl lg:pt-9">
                <p className="text-base leading-8 text-text-muted sm:text-lg">
                  Every page is designed to encourage curiosity, gratitude and
                  meaningful moments shared between children and the people who
                  read with them
                </p>

                <ul className="mt-16 grid gap-x-14 gap-y-9 border-y border-border py-10 sm:grid-cols-2 xl:gap-x-16">
                  {editorialFeatures.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-text/60 text-[0.62rem]"
                      >
                        ✓
                      </span>
                      <span>
                        <span className="block font-medium leading-6 text-text">
                          {feature.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-text-muted">
                          {feature.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <AmazonCta className="mt-12 sm:mt-14" />

                <blockquote className="mt-12 border-l-[0.5px] border-text pl-6 font-heading text-2xl font-medium italic leading-snug sm:text-3xl">
                  Small moments of reading become lifelong memories
                </blockquote>
              </div>
            </Reveal>
          </Container>
        </Section>

        <Section
          id="mission"
          aria-labelledby="mission-heading"
          className={`${styles.missionSection} scroll-mt-6`}
        >
          <Container>
            <Reveal
              className={`${styles.missionContent} mx-auto max-w-4xl text-center`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                Our Mission
              </p>
              <h2
                id="mission-heading"
                className="mt-6 font-heading text-[clamp(3.2rem,6.5vw,5.7rem)] font-medium leading-[0.92] tracking-[-0.025em]"
              >
                Childhood is where tomorrow begins
              </h2>
              <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-8 text-text-muted sm:text-lg">
                <p>
                  We believe the books children grow up with become part of who
                  they are
                </p>
                <p>
                  That’s why we create books that help children discover,
                  question, imagine and grow
                </p>
              </div>

              <div className={styles.missionDivider} aria-hidden="true">
                <LogoBranch />
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
