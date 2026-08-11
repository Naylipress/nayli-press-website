import Image from "next/image";

import type { Book } from "@/data/books";
import { cn } from "@/lib/utils";

type BookCardProps = {
  book: Book;
  className?: string;
};

export function BookCard({ book, className }: BookCardProps) {
  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-card border border-border bg-surface shadow-soft sm:grid-cols-[minmax(12rem,0.8fr)_1.2fr]",
        className,
      )}
    >
      <div className="relative aspect-[4/5] bg-background sm:aspect-auto sm:min-h-96">
        <Image
          src={book.imagePath}
          alt={`${book.title} front cover`}
          fill
          sizes="(min-width: 640px) 40vw, 100vw"
          className="object-contain p-6"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">
          {book.ageRange}
        </p>
        <h2 className="mt-3 font-heading text-heading-sm font-semibold">
          {book.title}
        </h2>
        <p className="mt-4 leading-7 text-text-muted">{book.description}</p>
        <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
          {book.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
