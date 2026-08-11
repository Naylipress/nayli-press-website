import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex min-h-11 items-center justify-center rounded-editorial border border-text bg-text px-6 py-2.5 font-body text-sm font-medium tracking-[0.045em] text-surface shadow-none transition-[background-color,box-shadow,transform] duration-base ease-editorial hover:-translate-y-px hover:bg-text/90 hover:text-surface hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text active:translate-y-0 disabled:cursor-not-allowed disabled:border-text-muted disabled:bg-text-muted disabled:text-surface disabled:hover:translate-y-0 disabled:hover:bg-text-muted disabled:hover:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: undefined;
};

type ButtonLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "aria-label"
> & {
  href: string;
  ariaLabel?: string;
};

function isButtonLink(
  props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps | ButtonLinkProps) {
  if (isButtonLink(props)) {
    const { href, children, className, ariaLabel, ...linkProps } = props;

    return (
      <Link
        href={href}
        className={cn(buttonStyles, className)}
        aria-label={ariaLabel}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { className, type = "button", ...buttonProps } = props;

  return (
    <button
      type={type}
      className={cn(buttonStyles, className)}
      {...buttonProps}
    />
  );
}
