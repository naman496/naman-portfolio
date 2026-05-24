"use client";

import { useState } from "react";

const stages = [
  {
    title: "Pre-system workflow",
    description:
      "Operations depended on spreadsheets, forms, and manual logging, which made loan, inventory, and servicing work hard to align.",
    points: [
      "Loan intake and approvals were logged separately.",
      "Inventory and service assignments were tracked manually.",
      "Teams had limited visibility into handoffs and status updates.",
    ],
  },
  {
    title: "Operational friction",
    description:
      "Duplicate tracking, delayed handoffs, and fragmented reporting slowed the business and masked the real workload.",
    points: [
      "Manual updates caused inconsistent status and accountability.",
      "Service teams could not easily prioritize tasks or queue work.",
      "Stakeholders lacked a single operational view of blockers.",
    ],
  },
  {
    title: "Centralized operational system",
    description:
      "A phased internal system unified loan, inventory, and servicing workflows with structured states, validation logic, and dashboard visibility.",
    points: [
      "Centralized workflows reduced reliance on spreadsheets and forms.",
      "Standardized states improved visibility and clarified handoffs.",
      "The system was designed for MVP rollout and operational refinement.",
    ],
  },
];

export default function WorkflowTransformation() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => Math.min(stages.length - 1, current + 1));
  };

  return (
    <section
      id="workflow-transformation"
      aria-labelledby="workflow-transformation-heading"
      className="animate-fade-in mx-auto max-w-6xl px-6 py-16"
    >
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Workflow transformation
        </p>
        <h2
          id="workflow-transformation-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          A focused, stacked workflow experience for operational transformation.
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-600">
          Move through the operational story one stage at a time, from the pre-system
          workflow to the core problems and finally the centralized solution.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="flex w-full items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            aria-label="Show previous workflow stage"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition duration-300 hover:border-slate-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ←
          </button>

          <div className="mx-auto w-full max-w-[1100px] overflow-visible px-2">
            <div className="relative flex h-[420px] items-center justify-center overflow-visible">
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;
                const isPrevious = index === activeIndex - 1;
                const isNext = index === activeIndex + 1;
                const isVisible = isActive || isPrevious || isNext;
                const visiblePoints = isActive ? stage.points : stage.points.slice(0, 1);
                const offset = isPrevious ? -120 : isNext ? 120 : 0;
                const scale = isActive ? 1 : 0.95;
                const opacity = isActive ? 1 : 0.65;
                const zIndex = isActive ? 30 : 10;
                const widthClass = isActive
                  ? "w-full max-w-[680px]"
                  : "hidden sm:block w-[260px]";

                return (
                  <article
                    key={stage.title}
                    aria-hidden={!isActive}
                    className={`${isVisible ? "block" : "hidden"} ${widthClass} absolute left-1/2 top-0 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    style={{
                      transform: `translateX(calc(-50% + ${offset}px)) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          {stage.title}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-7 text-slate-600">{stage.description}</p>

                      <div className="space-y-3 text-sm leading-7 text-slate-600">
                        {visiblePoints.map((point) => (
                          <p key={point} className="flex gap-3">
                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-300" />
                            <span>{point}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === stages.length - 1}
            aria-label="Show next workflow stage"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition duration-300 hover:border-slate-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-2">
          {stages.map((stage, index) => (
            <button
              key={stage.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${stage.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-12 bg-slate-950" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
