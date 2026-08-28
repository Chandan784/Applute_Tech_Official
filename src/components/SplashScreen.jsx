"use client";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-black">

      <div className="text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-black text-2xl font-black text-white">
          AT
        </div>

        <h1 className="text-3xl font-black tracking-[0.25em]">
          APPLUTE
        </h1>

        <p className="mt-2 text-[9px] font-medium tracking-[0.3em] text-neutral-500">
          TECHNOLOGIES PRIVATE LIMITED
        </p>

        <div className="mx-auto mt-7 h-[2px] w-40 overflow-hidden bg-neutral-200">
          <div className="h-full w-1/3 animate-[pulse_1s_ease-in-out_infinite] bg-black" />
        </div>

        <p className="mt-5 text-[11px] text-neutral-500">
          Building Digital Experiences
        </p>

      </div>

    </div>
  );
}