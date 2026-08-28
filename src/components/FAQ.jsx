"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const questions = [
    {
      q: "What type of websites do you develop?",
      a: "We develop business websites, corporate websites, landing pages, travel websites, e-commerce platforms and custom web applications.",
    },
    {
      q: "Can you develop Android and iOS applications?",
      a: "Yes. We develop cross-platform mobile applications using Flutter or React Native with secure and scalable backends.",
    },
    {
      q: "Can you build custom CRM or business software?",
      a: "Yes. We build custom CRM systems, enquiry management platforms, admin panels, ERP-style solutions and business automation software.",
    },
    {
      q: "Do you provide hosting and deployment?",
      a: "Yes. We can help with domain configuration, hosting, VPS deployment, SSL, DNS, server configuration and production deployment.",
    },
    {
      q: "How can I start a project?",
      a: "You can submit the enquiry form or contact us directly at +91 6370302039 or info@applutetech.com.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-[10px] font-black tracking-[0.35em] text-neutral-500">
            FAQ
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Questions?
            <span className="block text-neutral-400">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500">
            Everything you need to know about our software development
            services and project process.
          </p>
        </div>

        {/* FAQ */}
        <div className="border-t border-neutral-200">

          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.q}
                className="border-b border-neutral-200"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                      isOpen ? "text-black" : "text-neutral-800"
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-black bg-black text-white"
                        : "border-neutral-200 bg-white text-black"
                    }`}
                  >
                    <FaPlus
                      className={`text-[10px] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-neutral-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-neutral-950 px-6 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">
              Still have questions?
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              Talk to our team about your project.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-black transition-all duration-300 hover:bg-neutral-200"
          >
            Contact Us →
          </a>
        </div>

      </div>
    </section>
  );
}