"use client";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Replace this with your actual form submission logic
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(
        "There was an error submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Have questions or feedback? We would love to hear from you. Please
            fill out the form below, and we will get back to you as soon as
            possible.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Email:</strong> support@medium.community
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              ></textarea>
            </div>

            {submitError && (
              <p className="text-red-600 dark:text-red-400">{submitError}</p>
            )}

            {submitSuccess && (
              <p className="text-green-600 dark:text-green-400">
                Thank you for your message! We will get back to you shortly.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
