export const siteConfig = {
  name: "Nayli Press",
  url: "https://naylipress.com",
  tagline: "Books for curious little minds",
  contactEmail: "hello@naylipress.com",
  logoPath: "/images/nayli-press-header-logo.jpeg",
  footerLogoPath: "/images/nayli-press-logo-transparent.png",
  logoBranchPath: "/images/nayli-press-logo-branch.png",
  socialImagePath: "/images/nayli-press-header-logo.jpeg",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Our Story", href: "/our-story" },
    { label: "Get in Touch", href: "/get-in-touch" },
  ],
  links: {
    amazon: "https://www.amazon.com/dp/B0HCW5CKZW",
    instagram: "placeholder",
    pinterest: "placeholder",
  },
} as const;

export function isPlaceholderUrl(url: string) {
  return url === "placeholder";
}
