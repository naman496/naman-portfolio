import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const cardClasses =
    "group block h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md";

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-slate-950 transition group-hover:text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-8 text-slate-600">{description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={cardClasses} aria-label={`Open case study for ${title}`}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>{content}</div>
  );
}