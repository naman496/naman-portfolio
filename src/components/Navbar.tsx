export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-[#F8F9FB]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-sm font-semibold tracking-[0.24em] text-slate-700">
          NAMAN JAIN
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#selected-work"
            className="text-sm text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-600 transition duration-200 hover:text-slate-950 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}