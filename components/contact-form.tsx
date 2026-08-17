"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { contactConfig } from "@/lib/contact-config";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type FormStatus =
  "idle" | "loading" | "success" | "validation-error" | "submission-error";

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

  if (message.length < contactConfig.minimumMessageLength) {
    errors.message = `Please write at least ${contactConfig.minimumMessageLength} characters`;
  }

  return errors;
}

export function ContactForm() {
  const isSubmitting = useRef(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting.current) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validateForm(formData);

    setFieldErrors(errors);
    setStatusMessage("");

    if (Object.keys(errors).length > 0) {
      setStatus("validation-error");
      setStatusMessage("Please review the highlighted fields");
      return;
    }

    isSubmitting.current = true;
    setStatus("loading");

    try {
      const encodedFormData = new URLSearchParams();

      for (const [fieldName, fieldValue] of formData.entries()) {
        if (typeof fieldValue === "string") {
          encodedFormData.append(fieldName, fieldValue);
        }
      }

      const response = await fetch(contactConfig.submissionEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedFormData.toString(),
      });

      if (!response.ok) {
        throw new Error(contactConfig.errorMessage);
      }

      form.reset();
      setFieldErrors({});
      setStatus("success");
      setStatusMessage(contactConfig.successMessage);
    } catch {
      setStatus("submission-error");
      setStatusMessage("");
    } finally {
      isSubmitting.current = false;
    }
  }

  function errorId(field: FieldName) {
    return fieldErrors[field] ? `${field}-error` : undefined;
  }

  return (
    <form
      name={contactConfig.formName}
      method="POST"
      action={contactConfig.submissionEndpoint}
      data-netlify="true"
      {...{ "netlify-honeypot": "company" }}
      noValidate
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-busy={status === "loading"}
    >
      <input type="hidden" name="form-name" value={contactConfig.formName} />

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
          minLength={contactConfig.minimumMessageLength}
          maxLength={contactConfig.maximumMessageLength}
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
          role={status.includes("error") ? "alert" : "status"}
          aria-live="polite"
        >
          {status === "submission-error" ? (
            <>
              {contactConfig.errorMessage}{" "}
              <a
                href={`mailto:${contactConfig.recipientEmail}`}
                className="underline decoration-1 underline-offset-4 transition-colors duration-fast hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none"
              >
                {contactConfig.recipientEmail}
              </a>
              .
            </>
          ) : (
            statusMessage
          )}
        </p>
      </div>
    </form>
  );
}
