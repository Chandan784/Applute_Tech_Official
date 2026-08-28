"use client";

import { useState } from "react";
import {
  FaTimes,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa";

export default function EnquiryModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Applute Technologies,

I would like to enquire about your software development services.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}

Project Details:
${form.message}
    `;

    const whatsappURL = `https://wa.me/916370302039?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      {/* Modal */}
      <div className="relative flex max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition hover:bg-black hover:text-white"
        >
          <FaTimes className="text-xs" />
        </button>

        {/* ================= LEFT ================= */}

        <div className="hidden w-[38%] shrink-0 bg-black p-7 text-white sm:block">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
            <FaBolt className="text-xs" />
          </div>

          <p className="mt-7 text-[9px] font-black tracking-[0.3em] text-neutral-500">
            FREE CONSULTATION
          </p>

          <h2 className="mt-3 text-2xl font-black leading-tight">
            Let's build
            <span className="block text-neutral-500">
              something great.
            </span>
          </h2>

          <p className="mt-4 text-xs leading-6 text-neutral-400">
            Tell us about your project. Our team will contact you to discuss
            the right solution.
          </p>

          <div className="mt-8 border-t border-white/10 pt-5">

            <p className="text-[9px] font-bold tracking-[0.2em] text-neutral-500">
              APPLUTE TECHNOLOGIES
            </p>

            <p className="mt-2 text-xs text-neutral-400">
              Bhubaneswar, Odisha
              <br />
              India
            </p>

            <p className="mt-4 text-xs text-neutral-400">
              +91 6370302039
            </p>

          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}

        <div className="flex min-w-0 flex-1 flex-col">

          {/* Form Header */}
          <div className="shrink-0 border-b border-neutral-100 px-6 py-5">
            <p className="text-[9px] font-black tracking-[0.3em] text-neutral-400">
              PROJECT ENQUIRY
            </p>

            <h3 className="mt-1 text-xl font-black text-black">
              Tell us about your project
            </h3>
          </div>

          {/* Scrollable Form */}
          <div className="overflow-y-auto px-6 py-5">

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:bg-white"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Service
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-black focus:bg-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>

                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>

                  <option value="CRM / ERP Development">
                    CRM / ERP Development
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="Maintenance & Support">
                    Maintenance & Support
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black focus:bg-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-800"
              >
                Send Enquiry on WhatsApp
                <FaArrowRight className="text-xs" />
              </button>

            </form>

            <p className="mt-4 text-center text-[9px] text-neutral-400">
              Your enquiry will open directly in WhatsApp.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}