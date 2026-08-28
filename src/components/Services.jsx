"use client";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-surface-muted py-12 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-muted">
              WHAT WE DO
            </span>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Technology that
              <br />
              <span className="text-neutral-500">
                works for you.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-neutral-600">
            From an idea to a complete digital product,
            we provide end-to-end technology solutions
            for businesses of every size.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.number}
              className="group min-h-[300px] rounded-xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-black hover:text-white"
            >

              <div className="flex items-center justify-between">

                <span className="text-[11px] font-bold text-neutral-400 group-hover:text-white">
                  {service.number}
                </span>

                <span className="text-xl text-neutral-500 group-hover:text-white">
                  ↗
                </span>

              </div>

              <h3 className="mt-12 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-xs leading-7 text-neutral-600 group-hover:text-neutral-400">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-1 text-[9px] text-neutral-500 group-hover:border-neutral-700 group-hover:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}