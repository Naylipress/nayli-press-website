import { isPlaceholderUrl, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type SocialPlatform = "instagram" | "pinterest";

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[1.375rem] w-[1.375rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.375rem] w-[1.375rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.4 20.2c.8-2.4 1.2-4.2 1.7-6.5-.8-1.4-.1-4.2 1.5-4.2 1.2 0 2 1.1 2 2.4 0 1.5-.9 3.6-1.4 5.6-.4 1.6.8 3 2.3 3 2.8 0 4.7-3.5 4.7-7.8 0-4.6-3.7-8.2-8.3-8.2S3.8 8 3.8 12.5c0 1.8.5 3.4 1.7 4.7" />
    </svg>
  );
}

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {(["instagram", "pinterest"] as const).map((platform) => {
        const url = siteConfig.links[platform];
        const label = platform.charAt(0).toUpperCase() + platform.slice(1);

        return (
          <li key={platform}>
            {isPlaceholderUrl(url) ? (
              <span
                aria-disabled="true"
                className="flex h-10 w-10 cursor-not-allowed items-center justify-center text-text-muted/45"
                title={`${label} link coming soon`}
              >
                <SocialIcon platform={platform} />
                <span className="sr-only">{label} (coming soon)</span>
              </span>
            ) : (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center text-text-muted transition-colors duration-fast ease-editorial hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none"
              >
                <SocialIcon platform={platform} />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
