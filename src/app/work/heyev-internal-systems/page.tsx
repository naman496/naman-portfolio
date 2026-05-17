import Link from "next/link";
import Navbar from "@/components/Navbar";
import WorkflowTransformation from "@/components/case-study/WorkflowTransformation";

export default function HeyEVInternalSystemsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-slate-950">
      <Navbar />

      <section className="animate-fade-in mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Case Study
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            HeyEV Internal Systems
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A systems-first redesign of internal workflows that moved operations
            away from spreadsheets, forms, and manual tracking toward a
            centralized, usable internal system.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:border-slate-400 hover:-translate-y-0.5"
            >
              ← Back to portfolio
            </Link>
            <div className="text-sm text-slate-500">
              Systems thinking · operational workflows · stakeholder alignment
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-8">
              <article>
                <h2 className="text-2xl font-semibold text-slate-950">
                  Project overview
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  HeyEV needed a better way to manage loan administration,
                  inventory tracking, and servicing operations. The initiative
                  focused on understanding operational friction, improving
                  visibility, and building a practical MVP for internal teams.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-slate-950">
                  Problem space
                </h3>
                <div className="mt-4 space-y-4 max-w-3xl leading-8 text-slate-600">
                  <p>
                    The existing process relied heavily on Excel, Google Forms,
                    and ad hoc spreadsheets. Teams were duplicating effort,
                    losing context between handoffs, and struggling to keep
                    pace with growing service volume.
                  </p>
                  <ul className="space-y-3 list-inside list-disc">
                    <li>Fragmented operational workflows across functions</li>
                    <li>Manual status updates and inconsistent data</li>
                    <li>Limited visibility into loan servicing and inventory</li>
                  </ul>
                </div>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-slate-950">
                  Stakeholder discovery
                </h3>
                <div className="mt-4 space-y-4 max-w-3xl leading-8 text-slate-600">
                  <p>
                    The team partnered with operations, finance, and servicing
                    stakeholders to surface the highest-impact pain points and
                    align on core workflow needs.
                  </p>
                  <p>
                    Stakeholder sessions were structured around live process
                    reviews, existing tool walkthroughs, and prioritization of
                    blockers that prevented a consolidated operational view.
                  </p>
                </div>
              </article>
            </div>

            <aside className="space-y-8 rounded-[28px] border border-gray-200 bg-[#F8F9FB] p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Focus areas
                </p>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>Operational workflows</li>
                  <li>Systems mapping</li>
                  <li>Developer collaboration</li>
                  <li>MVP rollout</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center text-sm text-slate-500">
                Diagram / screenshot placeholder
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WorkflowTransformation />

      <section className="animate-fade-in mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          <article className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">
                Workflow & systems thinking
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                The approach was rooted in workflow mapping and systems design.
                Rather than chase an ideal system, the goal was to identify
                bottlenecks, clarify handoffs, and define the smallest useful
                version of a centralized operational tool.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Workflow output
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Flow diagrams, step-by-step process maps, and clearly defined
                operational states shaped a system that could support loan,
                inventory, and servicing teams consistently.
              </p>
            </div>
          </article>

          <article className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">
                Collaboration with engineering
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Development collaboration centered on feasibility checks,
                implementation constraints, and knowledge transfer. Regular KT
                sessions kept the team aligned and helped shape a reliable
                scope for the first release.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Engineering alignment
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Shared wireframes, review sessions, and developer walkthroughs
                ensured the MVP matched both user workflows and technical
                delivery cadence.
              </p>
            </div>
          </article>

          <article className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">
                MVP rollout strategy
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                The launch was intentionally phased: validate the core workflow,
                capture user feedback early, and iterate before expanding to
                adjacent processes. This kept the first release focused and
                operationally useful.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Phased delivery
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Initial focus areas included loan status tracking, inventory
                visibility, and service task coordination with clear handoff
                points.
              </p>
            </div>
          </article>

          <article className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">
                Testing & UAT
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Testing was integrated into the rollout plan. User acceptance
                testing, bug reporting, and live feedback sessions helped refine
                flows before wider adoption.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Validation process
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Validation included operational walkthroughs, issue tracking,
                and iterative updates based on frontline user feedback.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-950">
                Outcomes & learnings
              </h2>
              <ul className="space-y-4 max-w-3xl leading-8 text-slate-600">
                <li>
                  Replaced fragmented manual workflows with a centralized
                  internal system built for operations.
                </li>
                <li>
                  Prioritized usable MVP delivery over perfection, enabling
                  faster adoption and earlier feedback.
                </li>
                <li>
                  Strengthened stakeholder trust through discovery, review, and
                  iterative collaboration.
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Key learnings
              </p>
              <div className="mt-4 space-y-4 leading-7 text-slate-700">
                <p>
                  Start with the actual workflow, not the UI. The system works
                  when the process is clear.
                </p>
                <p>
                  Regular alignment with engineering keeps scope realistic and
                  release-ready.
                </p>
                <p>
                  Phased rollout and UAT make operational systems easier to
                  adopt across teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}