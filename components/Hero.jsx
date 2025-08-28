export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-6 pb-2">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="text-center md:text-left">
            <h1 className="mt-4 mb-2 pb-3 text-4xl md:text-6xl font-semibold tracking-tight [font-family:var(--font-robotic)] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-400 to-emerald-400">
              Loomi
            </h1>
            <p className="mt-4 max-w-xl bg-clip-text text-slate-300 text-2xl md:max-w-none">
              Never let your loyalty point to expire again!
            </p>
            <p className="mt-4 max-w-xl text-white/80 text-lg md:max-w-none">
              An AI DeFAI Loyalty Agent — turning expiring rewards into
              financial value for APAC consumers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 md:justify-start justify-center">
              <a
                href="#how"
                className="rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 text-sm font-medium"
              >
                See how it works
              </a>
              <a
                href="#solution"
                className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-medium"
              >
                What it can do
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-emerald-500" />
            <img
              src="/loomi-bot.png"
              alt="Loomi bot"
              className="w-[80%] md:w-[90%] max-w-md"
            />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-30"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-gradient-to-tr from-blue-500 to-fuchsia-500" />
      </div>
    </section>
  );
}
