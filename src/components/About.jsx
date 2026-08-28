"use client";

import {
  FaCheck,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  const aboutPoints = [
    "Business-focused software solutions",
    "Modern and scalable architecture",
    "Clean UI/UX and responsive design",
    "Secure backend and APIs",
    "Post-launch technical support",
  ];

  return (
    <section id="about" className="overflow-hidden bg-white py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.35em] text-neutral-500">
              ABOUT APPLUTE
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              We don't just
              <br />
              write code.
              <span className="block text-neutral-400">
                We build solutions.
              </span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-neutral-600">
              Applute Technologies Private Limited is a software development
              company based in Bhubaneswar, Odisha, India. We build websites,
              mobile apps and custom software that help businesses grow faster.
            </p>

            <p className="mt-4 text-sm leading-8 text-neutral-600">
              From startups to enterprises, we create secure, scalable and
              high-performance digital products using modern technologies.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {aboutPoints.map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    <FaCheck className="text-xs" />
                  </div>

                  <span className="text-sm font-medium text-neutral-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex min-h-[540px] items-center justify-center">

            {/* Background Glow */}
            <div className="absolute h-96 w-96 rounded-full bg-neutral-100 blur-3xl" />

            {/* Outer Circle */}
            <div className="absolute h-[430px] w-[430px] rounded-full border border-neutral-200" />

            {/* Rotating Circle */}
            <div className="absolute h-[320px] w-[320px] animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-neutral-300" />

            {/* Main Card */}
            <div className="relative z-20 flex h-[310px] w-[310px] flex-col items-center justify-center rounded-[28px] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

              {/* Window Buttons */}
              <div className="absolute left-6 top-6 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              {/* Logo */}
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-black text-5xl font-black text-white shadow-lg">
                A
              </div>

              <h3 className="mt-8 text-2xl font-black tracking-[0.18em]">
                APPLUTE
              </h3>

              <p className="mt-2 text-[10px] font-semibold tracking-[0.35em] text-neutral-500">
                TECHNOLOGIES PRIVATE LIMITED
              </p>

              <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-neutral-400">
                BUILD • SCALE • GROW
              </p>
            </div>

            {/* Floating Badge - Clean Code */}
            <div className="absolute left-0 top-10 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-black p-3 text-white">
                <FaCode />
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">Development</p>
                <h4 className="text-xs font-bold">Clean Code</h4>
              </div>
            </div>

            {/* Floating Badge - Smart Ideas */}
            <div className="absolute right-0 top-24 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-black p-3 text-white">
                <FaLightbulb />
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">Innovation</p>
                <h4 className="text-xs font-bold">Smart Ideas</h4>
              </div>
            </div>

            {/* Floating Badge - Client Focus */}
            <div className="absolute bottom-24 left-2 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-black p-3 text-white">
                <FaUsers />
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">Clients</p>
                <h4 className="text-xs font-bold">Client Focus</h4>
              </div>
            </div>

            {/* Floating Badge - Growth */}
            <div className="absolute bottom-8 right-2 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-black p-3 text-white">
                <FaChartLine />
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">Business</p>
                <h4 className="text-xs font-bold">Growth Driven</h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}