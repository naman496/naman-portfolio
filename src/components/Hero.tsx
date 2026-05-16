export default function Hero() {
  return (
    <section className="animate-fade-in max-w-6xl mx-auto px-6 pt-14 pb-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">
          Hybrid Product + Systems Analyst
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          I build operational systems that improve workflows, reduce friction,
          and help teams scale more effectively.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Systems thinking, operational problem solving, and product-led
          execution for teams that move faster when their internal systems
          finally align.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#selected-work"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            View work
          </a>

          <a
            href="/Naman_Jain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:border-slate-400 sm:w-auto"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}