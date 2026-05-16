export default function About() {
  return (
    <section id="about" className="animate-fade-in mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            I turn operational complexity into predictable, scalable internal systems.
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600">
            <p>
              I collaborate with stakeholders to map workflows, uncover blockers,
              and align product decisions with business needs and technical
              feasibility.
            </p>
            <p>
              My work is centered on workflow optimization, iterative product
              delivery, and creating systems that support teams instead of
              adding overhead.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
          <div className="space-y-5 text-sm leading-8 text-slate-700">
            <p>
              I partner with operations, engineering, and business teams to
              translate real pain points into practical systems and decision
              frameworks.
            </p>
            <p>
              The goal is to build with clarity: a usable MVP first, then
              iterate with feedback, testing, and measurable improvement.
            </p>
            <p>
              I bring a systems lens to each project, balancing long-term
              structure with immediate operational value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}