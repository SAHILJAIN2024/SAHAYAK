"use client";

export default function Footer() {
  return (
    <footer id="footer" className="py-24 px-8 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-16">

          <div className="md:col-span-2">

            <h1 className="text-4xl font-black">
              SAHAYAK
              <span className="text-violet-400">.</span>
            </h1>

            <p className="mt-6 max-w-md text-zinc-500">

              Building the intelligence layer for universal problem
              solving through dynamic agents and autonomous execution.

            </p>

          </div>

          <div>

            <h3 className="text-sm uppercase tracking-[0.3em] text-zinc-300 mb-5">
              Platform
            </h3>

            <div className="space-y-3 text-zinc-500">

              <div>Agents</div>
              <div>Memory</div>
              <div>Validation</div>
              <div>Knowledge</div>

            </div>

          </div>

          <div>

            <h3 className="text-sm uppercase tracking-[0.3em] text-zinc-300 mb-5">
              Developers
            </h3>

            <div className="space-y-3 text-zinc-500">

              <div>API</div>
              <div>Research</div>
              <div>Github</div>
              <div>Docs</div>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/5 pt-10 flex justify-between">

          <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
            System Status : Online
          </p>

          <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
            © 2026 SAHAYAK
          </p>

        </div>

      </div>

    </footer>
  );
}