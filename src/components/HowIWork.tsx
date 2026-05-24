export default function HowIWork() {
  const steps = [
    {
      title: "Discover",
      description:
        "Understand operational friction, stakeholder needs and business constraints.",
    },
    {
      title: "Map",
      description:
        "Translate workflows into scalable systems and structured processes.",
    },
    {
      title: "Build",
      description:
        "Prioritize blockers first and deliver usable MVPs quickly.",
    },
    {
      title: "Iterate",
      description:
        "Refine products through testing, feedback and operational insights.",
    },
  ];

  return (
    <section id="how-i-work" className="border-t border-gray-200 bg-[#F8F9FB]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            How I Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A structured approach to solving operational and product problems.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            I combine stakeholder insight, workflow clarity, and outcome-driven
            execution to translate business needs into practical systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[28px] border border-gray-200 bg-white p-6 text-slate-950 shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-2xl border border-slate-200 bg-slate-50 text-lg font-semibold text-slate-950">
                {index + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
