import { Link, Bell, Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center tracking-wide
                   bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent font-['Orbitron']"
      >
        How Loomi Works
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/20 to-cyan-400/10 p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400 mb-4">
            <Link className="w-7 h-7 text-cyan-400" />
          </div>
          <p className="text-sm text-white/60">Step 1</p>
          <p className="mt-2 font-semibold text-white">Connect Accounts</p>
          <p className="mt-2 text-white/70 text-sm">
            Link all your loyalty programs and wallets into one dashboard.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-purple-400/10 p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400 mb-4">
            <Bell className="w-7 h-7 text-purple-400" />
          </div>
          <p className="text-sm text-white/60">Step 2</p>
          <p className="mt-2 font-semibold text-white">Track & Alerts</p>
          <p className="mt-2 text-white/70 text-sm">
            Loomi monitors balances & expiries, sending smart reminders.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-br from-pink-600/20 to-pink-400/10 p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-500/20 border border-pink-400 mb-4">
            <Sparkles className="w-7 h-7 text-pink-400" />
          </div>
          <p className="text-sm text-white/60">Step 3</p>
          <p className="mt-2 font-semibold text-white">Optimize & Redeem</p>
          <p className="mt-2 text-white/70 text-sm">
            Loomi suggests the best usage, auto-redeems, or swaps for max value.
          </p>
        </div>
      </div>
    </section>
  );
}
