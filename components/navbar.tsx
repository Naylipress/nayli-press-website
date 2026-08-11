"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export type NavigationItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items?: readonly NavigationItem[];
  activeLabel?: string;
};

export function Navbar({
  items = siteConfig.navigation,
  activeLabel = "Home",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-border bg-background/95">
      <Container className="flex min-h-24 items-center justify-between gap-6 sm:min-h-28">
        <Link
          href="/"
          className="flex shrink-0 items-center self-stretch py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMenu}
        >
          <Image
            src={siteConfig.logoPath}
            alt="Nayli Press logo"
            width={856}
            height={625}
            loading="eager"
            className="h-auto w-20 object-contain sm:w-24"
          />
        </Link>

        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center border border-border text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-transform duration-fast motion-reduce:transition-none ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-opacity duration-fast motion-reduce:transition-none ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-transform duration-fast motion-reduce:transition-none ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col border-b border-border bg-background px-gutter py-5 shadow-soft md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-9">
            {items.map((item) => {
              const isActive = item.label === activeLabel;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={`flex min-h-12 items-center border-b text-sm font-medium tracking-[0.035em] transition-colors duration-base ease-editorial focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none md:min-h-11 md:border-b-0 md:py-2 ${
                      isActive
                        ? "border-text text-text md:underline md:decoration-1 md:underline-offset-8"
                        : "border-border text-text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
