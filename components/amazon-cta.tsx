import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import styles from "./amazon-cta.module.css";

type AmazonCtaProps = {
  className?: string;
};

export function AmazonCta({ className }: AmazonCtaProps) {
  const book = books[0];

  return (
    <div className={cn(styles.group, className)}>
      <Button
        href={siteConfig.links.amazon}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        ariaLabel={`Buy ${book.title} on Amazon`}
      >
        <span>ORDER NOW</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Button>
      <p className={styles.support}>Available on Amazon.com</p>
    </div>
  );
}
