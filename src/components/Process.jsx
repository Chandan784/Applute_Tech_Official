"use client";

import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

import { steps } from "@/data/process";

const icons = [
  FaSearch,
  FaPenNib,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-neutral-500">
            SOFTWARE DEVELOPMENT LIFE CYCLE
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            From Idea to
            <span className="block text-neutral-400">
              Deployment & Support.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-600">
            A structured software development process that ensures quality,
            security, performance and long-term scalability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
                    <div className={isLeft ? "md:text-right" : "md:text-left"}>

                      <p className="text-xs font-bold tracking-[0.3em] text-neutral-400">
                        STEP {step.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-black">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-neutral-600">
                        {step.text}
                      </p>

                    </div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-0 z-20 md:left-1/2 md:-translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-md transition-all duration-300 hover:scale-110 hover:border-black hover:bg-black hover:text-white md:h-16 md:w-16">
                      <Icon className="text-lg" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl bg-black px-8 py-10 text-white">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500">
                APPLUTE DEVELOPMENT PROCESS
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Discover → Design → Develop → Test → Deploy → Support
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">
                We build production-ready software with continuous maintenance,
                updates and technical support after launch.
              </p>
            </div>

            <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
              Start Your Project →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}