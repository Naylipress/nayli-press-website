"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "loading" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(formData: FormData) {
  const errors: FieldErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    errors.name = "Please enter your name";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (message.length < 10) {
    errors.message = "Please write at least 10 characters";
  }

  return { errors, name, email, message };
}

export function ContactForm() {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const { errors, name, email, message } = validateForm(formData);

    setFieldErrors(errors);
    setStatusMessage("");

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setStatusMessage("Please review the highlighted fields");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          company: String(formData.get("company") ?? ""),
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent");
      }

      form.reset();
      setFieldErrors({});
      setStatus("success");
      setStatusMessage(
        result.message || "Thank you — your message has been sent",
      );
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent",
      );
    }
  }

  function errorId(field: FieldName) {
    return fieldErrors[field] ? `${field}-error` : undefined;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-busy={status === "loading"}
    >
      <div>
        <label htmlFor="name" className="mb-3 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={errorId("name")}
          className="min-h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-text outline-none transition-colors duration-base placeholder:text-text-muted/60 focus:border-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text motion-reduce:transition-none"
        />
        {fieldErrors.name ? (
          <p id="name-error" className="mt-2 text-sm text-text" role="alert">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-3 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={320}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={errorId("email")}
          className="min-h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-text outline-none transition-colors duration-base placeholder:text-text-muted/60 focus:border-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text motion-reduce:transition-none"
        />
        {fieldErrors.email ? (
          <p id="email-error" className="mt-2 text-sm text-text" role="alert">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-3 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={errorId("message")}
          className="w-full resize-y border border-border bg-transparent p-4 text-base leading-7 text-text outline-none transition-colors duration-base placeholder:text-text-muted/60 focus:border-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text motion-reduce:transition-none"
        />
        {fieldErrors.message ? (
          <p id="message-error" className="mt-2 text-sm text-text" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col items-start gap-5">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </Button>
        <p
          className="min-h-6 text-sm leading-6 text-text-muted"
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
