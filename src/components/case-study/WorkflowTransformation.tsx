"use client";

import { useState } from "react";

const stages = [
  {
    title: "Before System",
    description: "A fragmented workflow of spreadsheets, Google Forms, and ad hoc tracking made loan, inventory, and servicing operations hard to align.",
    points: [
      "Loan intake and approvals were logged in separate spreadsheets.",
      "Inventory status and servicing assignments were tracked manually.",
      "Operational teams had limited visibility into workflow handoffs.",
    ],
  },
  {
    title: "Operational Problems",
    description: "Duplicate data entry, inconsistent status updates, and delayed handoffs created friction across operations and service teams.",
    points: [
      "Manual updates caused inconsistent loan status and inventory visibility.",
      "Service operations could not easily prioritize tasks or track work in progress.",
      "Stakeholders lacked a unified view of blockers and service backlog.",
    ],
  },
  {
    title: "Centralized Workflow System",
    description: "A unified operational system organized loan management, inventory tracking, and servicing tasks into a single workflow with clear accountability.",
    points: [
      "A centralized workflow reduced reliance on spreadsheets and forms.",
      "Standardized status flows improved visibility and reduced handoffs.",
      "The system supported phased rollout and iterative operational refinement.",
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
            <div className="flex items-center justify-center overflow-visible">
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;
                const isPrevious = index === activeIndex - 1;
                const isNext = index === activeIndex + 1;
                const isVisible = isActive || isPrevious || isNext;
                const visiblePoints = isActive ? stage.points : stage.points.slice(0, 1);
                const sizeClass = isActive
                  ? "w-full max-w-[680px]"
                  : "hidden sm:block w-[220px] sm:w-[260px]";
                const visualClass = isActive
                  ? "scale-100 opacity-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  : "scale-95 opacity-65";
                const translateClass = isPrevious
                  ? "-translate-x-3"
                  : isNext
                  ? "translate-x-3"
                  : "translate-x-0";
                const overlapClass = isPrevious
                  ? "mr-[-48px]"
                  : isNext
                  ? "ml-[-48px]"
                  : "";
                const contentClass = isActive
                  ? "space-y-5"
                  : "space-y-5 overflow-hidden max-h-[220px]";

                return (
                  <article
                    key={stage.title}
                    className={`${isVisible ? "block" : "hidden"} ${sizeClass} ${overlapClass} ${translateClass} ${visualClass} rounded-[28px] border border-gray-200 bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    aria-hidden={!isActive}
                  >
                    <div className={contentClass}>
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
