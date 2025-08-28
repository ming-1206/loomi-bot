export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f1a]/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo (Left) */}
        {/* Logo (Left) */}
        <div className="h-14 w-14 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Loomi Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Nav Links (Center) */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {["Problem", "Solution", "How it works", "Features"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="relative text-white/80 hover:text-white transition-colors duration-200"
            >
              {item}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA (Right) */}
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 py-2 text-sm font-semibold tracking-wide shadow-lg [font-variant-caps:all-small-caps]"
          >
            Try the bot
          </a>
        </div>
      </div>
    </header>
  );
}
