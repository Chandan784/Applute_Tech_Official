"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="border-b border-neutral-200 py-12">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500">
            CONTACT US
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Let's Build Something Amazing
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="space-y-6">

            <h2 className="text-2xl font-bold">
              Get in Touch
            </h2>

            <p className="text-sm leading-7 text-neutral-600">
              We develop websites, mobile apps and custom software for businesses across India.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4">
                <FaPhoneAlt className="text-black" />
                <div>
                  <p className="text-xs text-neutral-500">Phone</p>
                  <p className="font-medium">+91 63703 02039</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4">
                <FaEnvelope className="text-black" />
                <div>
                  <p className="text-xs text-neutral-500">Email</p>
                  <p className="font-medium">info@applutetech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4">
                <FaMapMarkerAlt className="text-black" />
                <div>
                  <p className="text-xs text-neutral-500">Location</p>
                  <p className="font-medium">Bhubaneswar, Odisha, India</p>
                </div>
              </div>

            </div>

          </div>

          {/* Enquiry Form */}
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">

            <h3 className="text-xl font-bold">
              Send an Enquiry
            </h3>

            <form className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

              <select className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black">
                <option>Select Service</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>Custom Software Development</option>
                <option>UI / UX Design</option>
              </select>

              <textarea
                rows={4}
                placeholder="Project Requirement"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <FaPaperPlane className="text-xs" />
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}