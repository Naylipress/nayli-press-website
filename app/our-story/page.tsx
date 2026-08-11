import type { Metadata } from "next";
import Image from "next/image";

import { AmazonCta } from "@/components/amazon-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { books } from "@/data/books";
import { siteConfig } from "@/lib/site-config";

import styles from "./our-story.module.css";

const book = books[0];
const pageTitle = `Our Story | ${siteConfig.name}`;
const pageDescription =
  "Discover the story and philosophy behind Nayli Press, an independent publishing house creating thoughtful books for curious little minds";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: siteConfig.name,
    type: "website",
    url: `${siteConfig.url}/our-story`,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.socialImagePath}`,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
};

const philosophyItems = [
  {
    title: "Curiosity",
    description:
      "We believe every book should encourage children to wonder, observe and ask questions",
  },
  {
    title: "Meaning",
    description:
      "We create stories that inspire connection, gratitude and thoughtful conversations",
  },
  {
    title: "Timeless Design",
    description:
      "We favour simple, lasting design that families can return to for years",
  },
] as const;

function OfficialBranch() {
  return (
    <Image src={siteConfig.logoBranchPath} alt="" width={312} height={177} />
  );
}

export default function OurStoryPage() {
  return (
    <div className="overflow-x-clip">
      <Navbar activeLabel="Our Story" />

      <main>
        <section
          aria-labelledby="story-page-heading"
          className={styles.heroSection}
        >
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Our Story
                </p>
                <h1
                  id="story-page-heading"
                  className="mt-6 font-heading text-[clamp(3.6rem,7.6vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.03em]"
                >
                  Every child deserves stories worth growing up with
                </h1>
              </div>

              <div className={styles.heroAside}>
                <p className="font-heading text-2xl font-medium leading-snug sm:text-3xl">
                  The books children discover in their earliest years become
                  part of how they see the world
                </p>
                <p className="mt-7 text-base leading-8 text-text-muted sm:text-lg">
                  We believe those first stories can inspire curiosity,
                  gratitude and a lifelong love of reading
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="purpose-heading"
          className={styles.purposeSection}
        >
          <Container>
            <Reveal className={styles.purposeGrid}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Why We Exist
                </p>
                <h2
                  id="purpose-heading"
                  className="mt-6 font-heading text-[clamp(3.2rem,6vw,5.4rem)] font-medium leading-[0.94] tracking-[-0.025em]"
                >
                  Some books are read
                  <span className="mt-2 block">
                    Others become part of childhood
                  </span>
                </h2>
              </div>

              <div className={styles.purposeCopy}>
                <p>
                  The stories children hear in their earliest years help shape
                  the way they see the world, ask questions and build lasting
                  memories
                </p>
                <div className={styles.beliefStatement}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    A simple belief
                  </p>
                  <p className="mt-4 font-heading text-2xl font-medium leading-snug text-text sm:text-3xl">
                    Beautifully designed books can nurture curiosity, gratitude
                    and meaningful moments shared together
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="philosophy-heading"
          className={styles.philosophySection}
        >
          <Container>
            <Reveal className={styles.philosophyIntro}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                What Guides Us
              </p>
              <h2
                id="philosophy-heading"
                className="mt-5 font-heading text-[clamp(3rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                Our Philosophy
              </h2>
            </Reveal>

            <div className={styles.philosophyGrid}>
              {philosophyItems.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 70}>
                  <article className={styles.philosophyCard}>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="future-heading"
          className={styles.futureSection}
        >
          <Container>
            <Reveal className={styles.futureGrid}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Looking Ahead
                </p>
                <h2
                  id="future-heading"
                  className="mt-6 font-heading text-[clamp(3.2rem,6vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.025em]"
                >
                  This is only the beginning
                </h2>
              </div>

              <div className={styles.futureCopy}>
                <p className="font-heading text-2xl font-medium leading-snug text-text sm:text-3xl">
                  Alhamdulillah is the first book in a collection created to
                  grow alongside curious little minds
                </p>
                <p className="mt-7 text-base leading-8 text-text-muted sm:text-lg">
                  We look forward to creating many more stories that inspire
                  young readers and the families who share them
                </p>
                <div className={styles.branchDivider} aria-hidden="true">
                  <OfficialBranch />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="first-book-heading"
          className={styles.bookSection}
        >
          <Container className="max-w-[90rem]">
            <Reveal className={styles.bookGrid}>
              <div className={styles.bookStage}>
                <div className={styles.bookObject}>
                  <Image
                    src={book.imagePath}
                    alt={`${book.title}, official front cover`}
                    width={2625}
                    height={2625}
                    sizes="(min-width: 1024px) 34rem, (min-width: 640px) 58vw, 84vw"
                    className={styles.bookImage}
                  />
                </div>
              </div>

              <div className={styles.bookCopy}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Our First Chapter
                </p>
                <h2
                  id="first-book-heading"
                  className="mt-5 font-heading text-[clamp(3.4rem,6vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.025em]"
                >
                  {book.title}
                </h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                  Our first book is a quiet expression of everything we believe
                  in: thoughtful design, meaningful reading and moments of
                  gratitude shared between children and their families
                </p>
                <Button href="/books" className="mt-10">
                  Explore Alhamdulillah
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        <section
          aria-labelledby="closing-heading"
          className={styles.closingSection}
        >
          <Container>
            <Reveal className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                Nayli Press
              </p>
              <h2
                id="closing-heading"
                className="mt-7 font-heading text-[clamp(3.3rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em]"
              >
                We don’t simply publish books
                <span className="mt-2 block">We create childhood memories</span>
              </h2>
              <AmazonCta className="mx-auto mt-12" />
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
