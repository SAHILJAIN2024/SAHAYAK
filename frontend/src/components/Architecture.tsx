export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
      <p className="text-gray-400 mb-8">
        How Sahayak processes requests from UI → AI → Memory → Response
      </p>

      {/* Flow Diagram */}
      <div className="bg-gray-900 p-6 rounded-2xl space-y-4">

        <div className="p-4 bg-gray-800 rounded-xl">
          🖥️ Frontend (Next.js / Sahayak UI)
          <p className="text-gray-400 text-sm">Chat, Dashboard, Memory, Profile</p>
        </div>

        <div className="text-center text-gray-400">⬇</div>

        <div className="p-4 bg-gray-800 rounded-xl">
          🌐 API Gateway (Node / Express optional)
          <p className="text-gray-400 text-sm">Auth, routing, rate limiting</p>
        </div>

        <div className="text-center text-gray-400">⬇</div>

        <div className="p-4 bg-gray-800 rounded-xl">
          ⚡ AI Orchestrator (FastAPI)
          <p className="text-gray-400 text-sm">
            Routes requests to capabilities like symptom checker, SOAP generator, risk model
          </p>
        </div>

        <div className="text-center text-gray-400">⬇</div>

        <div className="p-4 bg-gray-800 rounded-xl">
          🧠 Capability Layer (Tools / Agents)
          <p className="text-gray-400 text-sm">
            symptom_checker, soap_extractor, risk_predictor
          </p>
        </div>

        <div className="text-center text-gray-400">⬇</div>

        <div className="p-4 bg-gray-800 rounded-xl">
          💾 Memory System
          <p className="text-gray-400 text-sm">
            Short-term session memory + Long-term MongoDB + optional Redis cache
          </p>
        </div>

        <div className="text-center text-gray-400">⬇</div>

        <div className="p-4 bg-green-900 rounded-xl">
          📤 Response returned to user
          <p className="text-gray-400 text-sm">
            AI result + context + saved memory
          </p>
        </div>

      </div>

      {/* Tech Stack */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="font-bold">Frontend</h3>
          <p className="text-gray-400">Next.js, Tailwind, React</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="font-bold">Backend</h3>
          <p className="text-gray-400">FastAPI + Node.js Gateway</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="font-bold">AI Layer</h3>
          <p className="text-gray-400">LLMs + ML Models + Tools</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="font-bold">Storage</h3>
          <p className="text-gray-400">MongoDB + Redis + Vector DB (optional)</p>
        </div>
      </div>

    </div>
  );
}