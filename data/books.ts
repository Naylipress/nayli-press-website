export type Book = {
  title: string;
  ageRange: string;
  description: string;
  features: readonly string[];
  benefits: readonly string[];
  imagePath: string;
  seoDescription: string;
  benefitsDescription: string;
  storyHeading: string;
  storyDescription: string;
  language: string;
  languageCode: string;
  format: string;
  publisher: string;
  readingTime: string;
  audience: string;
};

export const books = [
  {
    title: "Alhamdulillah",
    ageRange: "Ages 0–3",
    description:
      "A high-contrast book that introduces little ones to gratitude through simple words, bold illustrations and meaningful moments shared together",
    features: [
      "High-contrast illustrations",
      "Interactive reading",
      "Gratitude-focused learning",
    ],
    benefits: [
      "High-contrast illustrations",
      "Encourages gratitude",
      "Supports early visual development",
      "Perfect for shared reading",
      "Ages 0–3",
      "Interactive reading",
    ],
    imagePath: "/images/alhamdulillah-front-cover.png",
    seoDescription:
      "Discover Alhamdulillah, a high-contrast children’s book created to introduce little ones to gratitude and meaningful shared reading",
    benefitsDescription:
      "Thoughtfully designed for early reading, shared discovery and meaningful everyday moments",
    storyHeading:
      "Some books are read once\nOthers become part of a family’s daily rhythm",
    storyDescription:
      "Alhamdulillah was created to encourage quiet moments of connection, curiosity and gratitude. Each page invites parents and children to discover the world together through simple words and bold illustrations",
    language: "English",
    languageCode: "en",
    format: "Paperback",
    publisher: "Nayli Press",
    readingTime: "Approximately 5–10 minutes",
    audience: "Children ages 0–3",
  },
] as const satisfies readonly Book[];
