"use client";
import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import H1 from "./H1";
export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) {
      setSubmitStatus({
        success: false,
        message: "Form reference error",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!,
        }
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="contact-form-container grid md:grid-cols-3 md:gap-3 items-start"
      id="contact"
    >
      <div className="line-hr">
        <H1 content={"Contact"} noWrap={false} />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:col-span-2 contact-form space-y-2"
      >
        <div className="form-group grid gap-2 ">
          <label htmlFor="name" className="capitalize font-bold">
            name :
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            minLength={2}
            placeholder="Name"
            className="bg-transparent border-black border-b-2 border-solid "
          />
        </div>

        <div className="form-group grid gap-2">
          <label htmlFor="email" className="capitalize font-bold">
            email :
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Email"
            className="bg-transparent border-black border-b-2 border-solid "
          />
        </div>

        <div className="form-group grid gap-2">
          <label htmlFor="message" className="capitalize font-bold">
            message :
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            placeholder="Message"
            className="bg-transparent border-black border-b-2 border-solid "
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button border-2 rounded-full px-2 py-1 float-right"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus && (
          <div
            className={`status-message  ${
              submitStatus.success ? "text-green-600" : "text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
