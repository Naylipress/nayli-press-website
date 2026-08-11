import { siteConfig } from "@/lib/site-config";

const provider =
  process.env.CONTACT_PROVIDER === "formspree" ? "formspree" : "disabled";

export const contactConfig = {
  provider,
  recipientEmail: siteConfig.contactEmail,
  formspreeEndpoint: process.env.FORMSPREE_ENDPOINT ?? "",
  minimumMessageLength: 10,
  maximumMessageLength: 5000,
} as const;
