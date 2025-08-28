export default function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2
            className="text-3xl md:text-3xl font-extrabold tracking-wide 
                         bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                         bg-clip-text text-transparent font-['Orbitron']"
          >
            The Loyalty Economy is Broken
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Billions of loyalty points are left unused or expire every year.
            Users struggle to track balances across platforms, while brands lose
            opportunities to drive real engagement and spending.
          </p>
        </div>

        {/* Right Section */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-purple-500/10">
          <ul className="space-y-3 text-white/80 text-lg">
            <li>• Points expire before they’re used</li>
            <li>• Scattered balances across multiple apps</li>
            <li>• No easy way to maximize rewards value</li>
            <li>• Lack of personalization in redemption</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
