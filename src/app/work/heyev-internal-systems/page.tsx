import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WorkflowTransformation from "@/components/case-study/WorkflowTransformation";

export const metadata: Metadata = {
  title: "HeyEV Internal Systems — Product Analyst Case Study",
  description:
    "Product Analyst case study for HeyEV Internal Systems, showcasing stakeholder-led workflow redesign, operational systems, and MVP delivery.",
  openGraph: {
    title: "HeyEV Internal Systems — Product Analyst Case Study",
    description:
      "Product Analyst case study for HeyEV Internal Systems, showcasing stakeholder-led workflow redesign, operational systems, and MVP delivery.",
    type: "article",
  },
};

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
            A product-led operational transformation that replaced fragmented
            spreadsheets and manual handoffs with a centralized internal system
            for loan, inventory, and service operations.
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
                  HeyEV had a distributed operational stack of Google Forms,
                  spreadsheets, and manual updates that made loan administration,
                  inventory tracking, and service coordination hard to scale. The
                  goal was to translate those workflows into a practical internal
                  system and deliver an MVP that teams could use immediately.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-slate-950">
                  Problem space
                </h3>
                <div className="mt-4 space-y-4 max-w-3xl leading-8 text-slate-600">
                  <p>
                    Work moved through disconnected tools and manual handoffs.
                    Operations teams spent more time reconciling data than using
                    it, and service leaders lacked a consistent picture of what
                    was happening on the ground.
                  </p>
                  <ul className="space-y-3 list-inside list-disc">
                    <li>Fragmented operational workflows across loan, inventory, and service</li>
                    <li>Manual status updates created inconsistent handoff timing</li>
                    <li>Limited visibility into ticket progress and resource load</li>
                  </ul>
                </div>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-slate-950">
                  Stakeholder discovery
                </h3>
                <div className="mt-4 space-y-4 max-w-3xl leading-8 text-slate-600">
                  <p>
                    The project began with deep discovery across operations,
                    servicing, inventory, and finance teams to capture how work
                    actually flowed and where decisions stalled.
                  </p>
                  <p>
                    Workshops and shadowing sessions surfaced high-priority
                    friction points, aligned stakeholders on scope, and
                    established the smallest useful system for the first rollout.
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
                  <li>Stakeholder analysis</li>
                  <li>Workflow optimization</li>
                  <li>Operational systems</li>
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

      <section className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Operational Scale
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Metrics that show the system needed to support real operational teams.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "20+", label: "Operational Centers" },
              { value: "100–200", label: "Active Users" },
              { value: "5000+", label: "Monthly Collection Transactions" },
              { value: "400+", label: "Monthly Service Tickets" },
              { value: "20+", label: "Operational Google Sheets Replaced" },
              { value: "100+", label: "Assets Managed Monthly" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-gray-200 bg-white p-8"
              >
                <div className="text-4xl font-semibold tracking-tight text-slate-950">
                  {metric.value}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-in mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Before vs After
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            How work shifted from fragmented operations to centralized control.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-gray-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-slate-950">Before</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>Google Forms</li>
              <li>Multiple Operational Sheets</li>
              <li>Manual Validation</li>
              <li>WhatsApp Updates</li>
              <li>Fragmented Reporting</li>
              <li>Duplicate Data Entry</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-gray-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-slate-950">After</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>Centralized Systems</li>
              <li>Structured Workflow States</li>
              <li>Validation Logic</li>
              <li>System-Based Tracking</li>
              <li>Reporting Dashboards</li>
              <li>Standardized Operations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Product development journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A step-by-step path from discovery to production rollout.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:gap-12 md:grid-cols-2">
            {[
              {
                title: "Stakeholder Discovery",
                description:
                  "Capture operational needs, clarify ownership, and identify the most urgent workflow gaps.",
              },
              {
                title: "Workflow Mapping",
                description:
                  "Document current processes and surface the handoff points that caused the most friction.",
              },
              {
                title: "Flow Diagrams",
                description:
                  "Translate workflows into structured states, validation checks, and coordinated operational paths.",
              },
              {
                title: "Wireframing",
                description:
                  "Iterate on a usable interface that reflects actual operational work rather than abstract features.",
              },
              {
                title: "Engineering Feasibility Review",
                description:
                  "Validate constraints, confirm scope, and align the system plan with the delivery strategy.",
              },
              {
                title: "Development",
                description:
                  "Build the MVP with a focus on the core workflow, data integrity, and operational handoffs.",
              },
              {
                title: "Testing",
                description:
                  "Exercise the workflow with real data, capture issues, and ensure the system mirrored actual team behavior.",
              },
              {
                title: "UAT",
                description:
                  "Validate the new process with frontline users and adjust the release based on operational feedback.",
              },
              {
                title: "Production Rollout",
                description:
                  "Deploy the first version to operational teams while monitoring adoption and early issues.",
              },
              {
                title: "Continuous Iteration",
                description:
                  "Refine the system with regular feedback loops and expand the solution to adjacent processes.",
              },
            ].map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-in mx-auto max-w-6xl px-6 py-20 bg-white">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Product Artifacts
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Operational systems were designed through stakeholder collaboration, workflow analysis, process mapping and iterative delivery.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            These artifacts capture the evidence, decisions, and alignment that drove the system from discovery to implementation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Workflow Mapping",
              description:
                "Mapped existing operational workflows across inventory, loan and service operations to identify bottlenecks, handoff failures and process inefficiencies.",
              placeholder: "Workflow Diagram",
            },
            {
              title: "System Flow Design",
              description:
                "Defined operational states, transitions, ownership rules and validation checkpoints before development.",
              placeholder: "Flow Diagram",
            },
            {
              title: "Wireframing & Solution Design",
              description:
                "Translated workflows into interface concepts and reviewed requirements with stakeholders before engineering implementation.",
              placeholder: "Wireframe Screenshot",
            },
            {
              title: "Engineering Collaboration",
              description:
                "Conducted requirement walkthroughs and KT sessions to align implementation with business expectations and technical feasibility.",
              placeholder: "Review Session Artifact",
            },
            {
              title: "Testing & Validation",
              description:
                "Tracked defects, validated workflows and supported user acceptance testing before production rollout.",
              placeholder: "Testing Evidence",
            },
          ].map((artifact) => (
            <div
              key={artifact.title}
              className="rounded-[28px] border border-gray-200 bg-[#F8F9FB] p-6 transition-all duration-200 hover:border-slate-300"
            >
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-400 shadow-sm">
                {artifact.placeholder}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                {artifact.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {artifact.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Key Outcomes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Business impact from a workflow-first operational rollout.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="lg:col-span-2 rounded-[28px] border border-slate-300 bg-slate-950 p-8 text-white shadow-sm">
              <div className="text-4xl font-semibold tracking-tight">
                2 Days → Under 2 Hours
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Inventory processing time reduced through clearer workflow states and validation checks.
              </p>
            </div>

            {[
              {
                title: "Operational Sheets Consolidated",
                description:
                  "A centralized internal system reduced duplicate spreadsheets and created a single source of truth for operations.",
              },
              {
                title: "Centralized Workflow Ownership",
                description:
                  "Defined clear ownership for each workflow state so teams could move work forward with accountability.",
              },
              {
                title: "Standardized Operational States",
                description:
                  "Structured workflow stages improved handoffs and helped the team manage work consistently.",
              },
              {
                title: "Improved Reporting Visibility",
                description:
                  "Operational reporting became more reliable, making it easier to spot bottlenecks and service issues.",
              },
            ].map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-[28px] border border-gray-200 bg-white p-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-in mx-auto max-w-6xl px-6 py-20 bg-white">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            What This Project Taught Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Lessons learned from a workflow-led operational system.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            "Stakeholder alignment matters more than feature quantity.",
            "Operational adoption is as important as technical implementation.",
            "Shipping a focused MVP creates momentum faster than pursuing a perfect system.",
            "Workflow clarity reduces downstream complexity.",
            "Iterative feedback improves product quality significantly.",
          ].map((lesson) => (
            <div
              key={lesson}
              className="rounded-[28px] border border-gray-200 bg-[#F8F9FB] p-6"
            >
              <p className="text-sm leading-7 text-slate-700">{lesson}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Role & Responsibilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              My contribution to the operational transformation.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Stakeholder Discovery",
              "Requirement Gathering",
              "Workflow Mapping",
              "User Story Definition",
              "Wireframing",
              "Engineering Collaboration",
              "Testing & Validation",
              "UAT Support",
              "Rollout Coordination",
            ].map((role) => (
              <div
                key={role}
                className="rounded-[28px] border border-gray-200 bg-white px-6 py-5 text-sm font-medium text-slate-950"
              >
                {role}
              </div>
            ))}
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