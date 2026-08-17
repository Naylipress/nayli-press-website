import { siteConfig } from "@/lib/site-config";

export const contactConfig = {
  provider: "netlify",
  formName: "contact",
  submissionEndpoint: "/netlify-forms.html",
  recipientEmail: siteConfig.contactEmail,
  minimumMessageLength: 10,
  maximumMessageLength: 5000,
  successMessage: "Thank you for getting in touch. We’ll get back to you soon.",
  errorMessage: "Something went wrong. Please try again or email",
} as const;
