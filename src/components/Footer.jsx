"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-lg font-black text-white">
                A
              </div>

              <div>
                <h3 className="text-sm font-black tracking-[0.2em]">
                  APPLUTE
                </h3>

                <p className="mt-0.5 text-[8px] font-semibold tracking-[0.3em] text-neutral-500">
                  TECHNOLOGIES
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
              Applute Technologies Private Limited builds modern websites,
              mobile applications and custom software solutions for businesses
              that want to grow digitally.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Start a Project
              <FaArrowRight className="text-[10px]" />
            </a>

          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-[10px] font-black tracking-[0.3em] text-neutral-400">
              COMPANY
            </h4>

            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="w-fit text-sm text-neutral-600 transition hover:text-black"
              >
                About
              </a>

              <a
                href="#services"
                className="w-fit text-sm text-neutral-600 transition hover:text-black"
              >
                Services
              </a>

              <a
                href="#process"
                className="w-fit text-sm text-neutral-600 transition hover:text-black"
              >
                Process
              </a>

              <a
                href="#technology"
                className="w-fit text-sm text-neutral-600 transition hover:text-black"
              >
                Technology
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-neutral-600 transition hover:text-black"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[10px] font-black tracking-[0.3em] text-neutral-400">
              CONTACT
            </h4>

            <div className="space-y-5">

              {/* Phone */}
              <a
                href="tel:+916370302039"
                className="group flex items-start gap-3 text-sm text-neutral-600 transition hover:text-black"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-black transition group-hover:bg-black group-hover:text-white">
                  <FaPhone className="text-xs" />
                </span>

                <span>
                  <span className="block text-[10px] text-neutral-400">
                    CALL US
                  </span>
                  <span className="font-medium">
                    +91 6370302039
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@applutetech.com"
                className="group flex items-start gap-3 text-sm text-neutral-600 transition hover:text-black"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-black transition group-hover:bg-black group-hover:text-white">
                  <FaEnvelope className="text-xs" />
                </span>

                <span>
                  <span className="block text-[10px] text-neutral-400">
                    EMAIL US
                  </span>
                  <span className="font-medium">
                    info@applutetech.com
                  </span>
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-black">
                  <FaMapMarkerAlt className="text-xs" />
                </span>

                <span>
                  <span className="block text-[10px] text-neutral-400">
                    LOCATION
                  </span>

                  <span className="font-medium">
                    Bhubaneswar,
                    <br />
                    Odisha, India
                  </span>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-5 border-t border-neutral-200 pt-7 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Applute Technologies Private Limited.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-2 font-medium text-black transition"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 transition group-hover:-translate-y-1 group-hover:border-black">
              <FaArrowUp className="text-[10px]" />
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
}