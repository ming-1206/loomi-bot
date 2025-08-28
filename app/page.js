import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#0b0f1a] [background-image:radial-gradient(1400px_700px_at_40%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(1200px_600px_at_110%_20%,rgba(236,72,153,0.25),transparent),radial-gradient(900px_500px_at_-10%_80%,rgba(16,185,129,0.2),transparent)]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Roadmap />
        <CTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} MingOnChain — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#problem" className="hover:text-white">
              Problem
            </a>
            <a href="#solution" className="hover:text-white">
              Solution
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#roadmap" className="hover:text-white">
              Roadmap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
