import Image from "next/image";
import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface py-20 text-sm text-text-muted sm:py-24">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start">
          <Link
            href="/"
            className="block w-fit self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src={siteConfig.logoPath}
              alt="Nayli Press logo"
              width={856}
              height={625}
              className="h-auto w-28 object-contain"
            />
          </Link>

          <nav className="self-start" aria-label="Footer navigation">
            <p className="mb-4 font-semibold uppercase tracking-[0.16em] text-text">
              Explore
            </p>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center transition-colors duration-fast ease-editorial hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="self-start">
            <p className="mb-4 font-semibold uppercase tracking-[0.16em] text-text">
              Connect
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex min-h-10 items-center break-all transition-colors duration-fast ease-editorial hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none"
            >
              {siteConfig.contactEmail}
            </a>
            <SocialLinks className="mt-6" />
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-7 text-xs tracking-wide">
          © 2026 {siteConfig.name}. All rights reserved
        </p>
      </Container>
    </footer>
  );
}
