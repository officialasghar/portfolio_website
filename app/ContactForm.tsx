"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f1293c49-ab7c-416c-be6d-7f318164ee7d");
    formData.append("subject", "New portfolio contact message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        form.reset();
      } else {
        setResult(data.message || "Unable to send your message. Please try again.");
      }
    } catch {
      setResult("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" placeholder="Tell me about your project..." required />
      </label>
      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"} <b>↗</b>
      </button>
      {result && <p className={`form-result ${result.startsWith("Unable") || result === "Error" ? "error" : ""}`} role="status">{result}</p>}
    </form>
  );
}
