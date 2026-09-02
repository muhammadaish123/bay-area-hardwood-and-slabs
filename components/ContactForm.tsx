"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error while typing
    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate(): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) {
      errors.name = "Enter your name.";
    }

    if (!form.email.trim()) {
      errors.email = "Enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      errors.email = "Enter a valid email.";
    }

    if (!form.message.trim()) {
      errors.message = "Tell us a bit about the project.";
    }

    return errors;
  }

 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setErrorMessage("");

  const errors = validate();
  setFieldErrors(errors);

  if (Object.keys(errors).length > 0) {
    return;
  }

  setStatus("submitting");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        company: form.company,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      setStatus("error");
      setErrorMessage(
        data.message ||
          "Something went wrong. Please call the shop instead."
      );
      return;
    }

    setStatus("success");
    setForm(initialForm);
    setFieldErrors({});
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus("error");
    setErrorMessage(
      "Something went wrong. Please call the shop instead."
    );
  }
}

  if (status === "success") {
    return (
      <div className="rounded-card border border-ink/15 bg-paper p-6">
        <h3 className="text-lg text-ink">
          Thanks — got it.
        </h3>

        <p className="mt-2 text-[15px] text-ink/65">
          We&apos;ll get back to you shortly. If it&apos;s urgent,
          call the shop at{" "}
          <a
            href="tel:510-813-4952"
            className="text-ink underline"
          >
            510-813-4952
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="btn-secondary mt-5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot field */}
      <div
        className="hidden"
        aria-hidden="true"
      >
        <label htmlFor="company">
          Company
        </label>

        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-ink"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink"
            placeholder="Your name"
          />

          {fieldErrors.name && (
            <p className="mt-1.5 text-sm text-red-700">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium text-ink"
          >
            Phone
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink"
            placeholder="(510) 000-0000"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-ink"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink"
          placeholder="you@email.com"
        />

        {fieldErrors.email && (
          <p className="mt-1.5 text-sm text-red-700">
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-ink"
        >
          Tell us about the project
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink"
          placeholder="Species, dimensions, timeline — whatever you've got."
        />

        {fieldErrors.message && (
          <p className="mt-1.5 text-sm text-red-700">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : "Send message"}
      </button>
    </form>
  );
}