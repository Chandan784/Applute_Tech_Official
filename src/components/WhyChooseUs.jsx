import {
  FaBriefcase,
  FaCode,
  FaPuzzlePiece,
  FaComments,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

import { whyChooseUs } from "@/data/whyChooseUs";

const icons = [
  FaBriefcase,
  FaCode,
  FaPuzzlePiece,
  FaComments,
  FaShieldAlt,
  FaHeadset,
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[var(--bg-primary)] py-24 text-[var(--text-primary)] lg:py-32"
    >
      {/* Background Decoration */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[9px] font-bold tracking-[0.25em] text-[var(--text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            WHY CHOOSE US
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">

            Built around
            <span className="block text-[var(--text-muted)]">
              your success.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            Practical technology, thoughtful design and reliable
            support — everything you need to build and grow.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {whyChooseUs.map((item, index) => {

            const Icon = icons[index];

            return (
              <div
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_var(--shadow)]
                "
              >

                {/* Top */}

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-black tracking-widest text-[var(--text-muted)]">
                    {item.number}
                  </span>

                  <span className="text-[var(--text-muted)] transition duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    ↗
                  </span>

                </div>


                {/* Icon */}

                <div
                  className="
                    mt-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--accent)]
                    text-[var(--accent-foreground)]
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon className="text-sm" />
                </div>


                {/* Content */}

                <h3 className="mt-7 text-lg font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                  {item.text}
                </p>


                {/* Bottom Line */}

                <div className="mt-7 h-px w-8 bg-[var(--border)] transition-all duration-500 group-hover:w-full group-hover:bg-[var(--accent)]" />

              </div>
            );
          })}

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-7 py-7 sm:flex-row">

          <div>
            <h3 className="text-sm font-bold">
              Ready to build something great?
            </h3>

            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Let's turn your idea into a digital product.
            </p>
          </div>

          <a
            href="/enquiry"
            className="
              inline-flex
              items-center
              gap-3
              rounded-lg
              bg-[var(--accent)]
              px-6
              py-3
              text-xs
              font-bold
              text-[var(--accent-foreground)]
              transition
              duration-300
              hover:opacity-90
              hover:shadow-lg
            "
          >
            Start a Project
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}