import {
  LayoutDashboard,
  Sparkles,
  RefreshCw,
  Store,
  Briefcase,
} from "lucide-react";

export default function FeaturesAndCommercial() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Features & Commercial Model
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {/* Features */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-fuchsia-400" />
            <p className="font-medium text-lg">Features</p>
          </div>
          <ul className="mt-4 text-white/70 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-blue-400" />
              Unified Dashboard
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              AI Recommendations
            </li>
            <li className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-green-400" />
              Auto-Redeem & Delegated Spending
            </li>
            <li className="flex items-center gap-2">
              <Store className="w-4 h-4 text-purple-400" />
              Cross-Platform Marketplace (future)
            </li>
          </ul>
        </div>

        {/* Commercial Model */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <p className="font-medium text-lg">Commercial Model</p>
          </div>
          <ul className="mt-4 text-white/70 space-y-3 text-sm">
            <li>Free for users (save more, lose less)</li>
            <li>Affiliate cuts from vouchers & merchants</li>
            <li>White-label SaaS for banks & fintechs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
