import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "HeyEV Internal Systems",
    description:
      "Designed workflow-driven systems for loan management, inventory tracking, and servicing operations by collaborating with stakeholders, developers, and operations teams.",
    tags: ["Workflow", "Operations", "Collaboration"],
    href: "/work/heyev-internal-systems",
  },
  {
    title: "Operational Analytics Dashboard",
    description:
      "Built dashboards and automation workflows to improve operational visibility, reporting clarity, and decision-making efficiency.",
    tags: ["Analytics", "Reporting", "Automation"],
  },
  {
    title: "Smart Traffic Optimization System",
    description:
      "Developed an adaptive traffic control system using sensor-based prioritization and algorithmic timing optimization.",
    tags: ["Optimization", "Algorithms", "Systems"],
  },
];

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="animate-fade-in border-t border-gray-200 bg-[#F8F9FB]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Product work grounded in systems, operations, and real execution.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}