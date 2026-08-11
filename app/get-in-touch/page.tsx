import type { Metadata } from "next";
import Image from "next/image";

import { AmazonCta } from "@/components/amazon-cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SocialLinks } from "@/components/social-links";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

import styles from "./get-in-touch.module.css";

const pageTitle = `Get in Touch | ${siteConfig.name}`;
const pageDescription =
  "Get in touch with Nayli Press for questions, feedback, bookseller enquiries or simply to say hello";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/get-in-touch" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: siteConfig.name,
    type: "website",
    url: `${siteConfig.url}/get-in-touch`,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.socialImagePath}`,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
};

export default function GetInTouchPage() {
  return (
    <div className="overflow-x-clip">
      <Navbar activeLabel="Get in Touch" />

      <main>
        <section
          aria-labelledby="contact-heading"
          className={styles.heroSection}
        >
          <Container>
            <div className={`${styles.heroCopy} max-w-5xl`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                Get in Touch
              </p>
              <h1
                id="contact-heading"
                className="mt-6 max-w-4xl font-heading text-[clamp(3.6rem,7.6vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.03em]"
              >
                We’d love to hear from you
              </h1>
              <p className="mt-8 max-w-2xl font-heading text-2xl font-medium leading-snug sm:text-3xl">
                Have a question, feedback or simply want to say hello?
                <span className="mt-2 block">We’d love to hear from you</span>
              </p>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="message-heading"
          className={styles.contactSection}
        >
          <Container>
            <div className={styles.contactGrid}>
              <Reveal>
                <div className="mb-10 max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                    Send a Message
                  </p>
                  <h2
                    id="message-heading"
                    className="mt-5 font-heading text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.95] tracking-[-0.02em]"
                  >
                    Write to us
                  </h2>
                </div>
                <ContactForm />
              </Reveal>

              <Reveal className={styles.directContact} delayMs={70}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-6 inline-flex min-h-12 items-center break-all font-heading text-[clamp(2rem,4vw,3.25rem)] font-medium leading-tight transition-colors duration-base hover:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text motion-reduce:transition-none"
                >
                  {siteConfig.contactEmail}
                </a>
                <p className="mt-7 text-base leading-8 text-text sm:text-lg">
                  We personally read every message we receive
                </p>
                <p className="mt-5 max-w-lg text-base leading-8 text-text-muted sm:text-lg">
                  Parents, educators, booksellers and fellow book lovers are
                  always welcome to get in touch
                </p>

                <div className={styles.branchDivider} aria-hidden="true">
                  <Image
                    src={siteConfig.logoBranchPath}
                    alt=""
                    width={312}
                    height={177}
                  />
                </div>

                <div className="mt-9 border-t border-border pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Follow Nayli Press
                  </p>
                  <SocialLinks className="mt-4" />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="contact-purchase-heading"
          className={styles.purchaseSection}
        >
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2
                id="contact-purchase-heading"
                className="font-heading text-[clamp(3rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                Ready to discover our first book?
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
