"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">

        {/* LOGO */}

        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-xs font-black text-white">
            AT
          </div>

          <div className="flex flex-col text-left">

            <span className="text-base font-black tracking-wide">
              APPLUTE
            </span>

            <span className="text-[7px] tracking-[0.25em] text-neutral-500">
              TECHNOLOGIES
            </span>

          </div>

        </button>


        {/* DESKTOP MENU */}

        <nav className="hidden items-center gap-8 md:flex">

          {[
            ["Home", "home"],
            ["Services", "services"],
            ["About", "about"],
            ["Process", "process"],
            ["Contact", "contact"],
          ].map(([label, id]) => (

            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-medium text-neutral-700 transition hover:text-black"
            >
              {label}
            </button>

          ))}

        </nav>


        {/* CTA */}

        <button
          onClick={() => scrollTo("contact")}
          className="hidden rounded-lg bg-black px-5 py-3 text-xs font-bold text-white transition hover:bg-neutral-800 md:block"
        >
          Start a Project
        </button>


        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {open ? "×" : "☰"}
        </button>

      </div>


      {/* MOBILE MENU */}

      {open && (

        <div className="border-t border-border bg-white px-5 py-5 md:hidden">

          <div className="flex flex-col gap-2">

            {[
              ["Home", "home"],
              ["Services", "services"],
              ["About", "about"],
              ["Process", "process"],
              ["Contact", "contact"],
            ].map(([label, id]) => (

              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium hover:bg-neutral-100"
              >
                {label}
              </button>

            ))}

          </div>

        </div>

      )}

    </header>
  );
}