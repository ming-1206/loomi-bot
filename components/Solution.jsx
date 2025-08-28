export default function Solution() {
  return (
    <section id="solution" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: demo placeholder */}
        <div className="aspect-video rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
          <span>
            <img
              src="/demo.png"
              alt="demo image"
              className="h-full w-auto object-contain"
            />
          </span>
        </div>

        {/* Right side: solution text */}
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-600/20 to-fuchsia-600/20 p-6">
          <h2
            className="text-3xl md:text-3xl font-extrabold tracking-wide 
                         bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                         bg-clip-text text-transparent font-['Orbitron']"
          >
            Loomi: Your AI Loyalty Companion
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Loomi makes sure your loyalty points never go to waste. It tracks,
            learns, and maximizes every reward you’ve earned — across all
            platforms, in one simple dashboard.
          </p>

          {/* Features grid */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/10 bg-black/40 p-4">
              <p className="font-medium">Unified Dashboard</p>
              <p className="text-sm text-white/70">
                Consolidates loyalty points from multiple platforms.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-4">
              <p className="font-medium">AI Insights</p>
              <p className="text-sm text-white/70">
                Learns your spending habits and suggests best usage.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-4">
              <p className="font-medium">Expiry Alerts</p>
              <p className="text-sm text-white/70">
                Notifies you before points expire with redemption options.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-4">
              <p className="font-medium">Auto-Optimize</p>
              <p className="text-sm text-white/70">
                Auto-redeems or swaps rewards when enabled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
