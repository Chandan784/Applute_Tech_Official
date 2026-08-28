"use client";

import { useState } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const item = testimonials[active];

  return (
    <section
      id="testimonials"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-5 text-[10px] font-black tracking-[0.3em] text-neutral-500">
            CLIENT EXPERIENCE
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What our clients

            <span className="text-neutral-400">
              {" "}say.
            </span>
          </h2>

        </div>


        {/* ================= TESTIMONIAL ================= */}

        <div className="mx-auto mt-16 max-w-4xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-neutral-200
              bg-neutral-50
              px-7
              py-10
              text-center
              sm:px-12
              sm:py-14
              lg:px-20
              lg:py-16
            "
          >

            {/* Quote Icon */}

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <FaQuoteLeft className="text-sm" />
            </div>


            {/* Quote */}

            <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-8 tracking-[-0.01em] text-neutral-800 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
              "{item.text}"
            </p>


            {/* Client */}

            <div className="mt-8">

              <h4 className="text-sm font-black">
                {item.name}
              </h4>

              <p className="mt-1 text-xs text-neutral-500">
                {item.role}
              </p>

            </div>


            {/* Divider */}

            <div className="mx-auto mt-8 h-px w-12 bg-neutral-300" />


            {/* Navigation */}

            <div className="mt-8 flex justify-center gap-3">

              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  bg-white
                  text-black
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  active:scale-95
                "
              >
                <FaChevronLeft className="text-xs" />
              </button>


              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  bg-white
                  text-black
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  active:scale-95
                "
              >
                <FaChevronRight className="text-xs" />
              </button>

            </div>


            {/* Slide Indicator */}

            <div className="mt-7 flex justify-center gap-2">

              {testimonials.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active === index
                        ? "w-8 bg-black"
                        : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}