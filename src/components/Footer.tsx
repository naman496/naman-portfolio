export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-[#F8F9FB]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Naman Jain</p>
            <p className="mt-3 max-w-2xl leading-8 text-sm text-slate-600">
              Building operational systems with clarity, precision, and
              product-first thinking.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/naman-jain-43b19b281/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/naman496"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 hover:underline"
            >
              GitHub
            </a>
            <a
              href="mailto:namanjain09119@gmail.com"
              aria-label="Send email"
              className="text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}