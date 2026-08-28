"use client";

export default function Hero() {
  const goContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const goServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#eeeeee 1px, transparent 1px), linear-gradient(90deg, #eeeeee 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Soft background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-100/60 blur-3xl" />

      {/* ================= HERO CONTAINER ================= */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-10">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-semibold text-neutral-600 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-black" />

              Software Development Company
            </div>

            {/* Heading */}

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

              We Build

              <br />

              <span className="text-neutral-500">
                Digital Products
              </span>

              <br />

              That Move Business Forward.
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
              Applute Technologies Private Limited helps businesses
              transform ideas into powerful websites, mobile applications
              and custom software solutions.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-3">

              <button
                onClick={goContact}
                className="rounded-lg bg-black px-6 py-4 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-lg"
              >
                Start Your Project →
              </button>

              <button
                onClick={goServices}
                className="rounded-lg border border-neutral-200 bg-white px-6 py-4 text-xs font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                Explore Services
              </button>

            </div>

            {/* ================= STATS ================= */}

            <div className="mt-12 flex flex-wrap gap-8 border-t border-neutral-200 pt-7">

              {[
                ["10+", "Solutions Delivered"],
                ["100%", "Client Focused"],
                ["24/7", "Technical Support"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1"
                >
                  <strong className="text-xl font-black tracking-tight">
                    {number}
                  </strong>

                  <span className="text-[10px] text-neutral-500">
                    {label}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[430px]">

            {/* Outer Circle */}

            <div className="absolute h-[330px] w-[330px] rounded-full border border-neutral-200 sm:h-[410px] sm:w-[410px]" />

            {/* Rotating Circle */}

            <div className="absolute h-[250px] w-[250px] animate-spin rounded-full border border-dashed border-neutral-300 [animation-duration:25s] sm:h-[310px] sm:w-[310px]" />

            {/* Small Circle */}

            <div className="absolute h-3 w-3 rounded-full bg-black" />

            {/* ================= CODE CARD ================= */}

            <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-black text-white shadow-2xl sm:max-w-md">

              {/* Header */}

              <div className="flex items-center gap-4 border-b border-white/10 px-5 py-4">

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>

                <span className="text-[10px] text-white/50">
                  digital-product.js
                </span>

              </div>

              {/* Code */}

              <div className="p-6 font-mono text-[11px] leading-7 sm:p-7 sm:text-xs sm:leading-8">

                <p>
                  <span className="text-white/50">
                    const
                  </span>{" "}
                  solution = {"{"}
                </p>

                <p className="pl-5 text-white/60">
                  design: "beautiful",
                </p>

                <p className="pl-5 text-white/60">
                  technology: "modern",
                </p>

                <p className="pl-5 text-white/60">
                  performance: "fast",
                </p>

                <p className="pl-5 text-white/60">
                  business: "growth"
                </p>

                <p>
                  {"}"}
                </p>

              </div>

              {/* Bottom Status */}

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">

                <span className="text-[9px] text-white/40">
                  APPLUTE TECHNOLOGIES
                </span>

                <span className="flex items-center gap-1.5 text-[9px] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Ready
                </span>

              </div>

            </div>

            {/* ================= FLOATING CARDS ================= */}

            <div className="absolute right-0 top-10 z-20 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition duration-300 hover:-translate-y-1">

              <strong className="block text-xs font-black">
                Web
              </strong>

              <span className="text-[9px] text-neutral-500">
                Development
              </span>

            </div>

            <div className="absolute bottom-8 left-0 z-20 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg transition duration-300 hover:-translate-y-1">

              <strong className="block text-xs font-black">
                Mobile
              </strong>

              <span className="text-[9px] text-neutral-500">
                Applications
              </span>

            </div>

            {/* Software Card */}

            <div className="absolute bottom-2 right-5 z-20 hidden rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg sm:block">

              <strong className="block text-xs font-black">
                Custom
              </strong>

              <span className="text-[9px] text-neutral-500">
                Software
              </span>

            </div>

          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-bold tracking-[0.25em] text-neutral-400 lg:flex">

        <span className="h-px w-8 bg-neutral-300" />

        SCROLL

        <span className="h-px w-8 bg-neutral-300" />

      </div>

    </section>
  );
}