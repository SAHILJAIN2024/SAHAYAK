export default function CapabilitiesPage() {
  const capabilities = [
    "Symptom Checker",
    "SOAP Note Generator",
    "Risk Prediction",
    "Medical History Analysis"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Capabilities</h1>

      <div className="grid grid-cols-2 gap-4">
        {capabilities.map((c, i) => (
          <div key={i} className="bg-gray-900 p-5 rounded-xl">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}