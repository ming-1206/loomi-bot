export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-fuchsia-600/20 to-emerald-500/20 p-8 md:p-12 text-center shadow-lg">
        <h3 className="text-2xl md:text-3xl font-semibold [font-family:var(--font-robotic)]">
          Ready to get your time back?
        </h3>
        <p className="mt-3 text-white/80">
          Join the early access list and be the first to try{" "}
          <span className="text-white font-medium">Loomi</span>.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://forms.gle/uwNt98tgfYXeWVncA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 px-6 py-3 text-sm font-semibold shadow-md transition-all"
          >
            Join Waitlist
          </a>
          <a
            href="#how"
            className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
