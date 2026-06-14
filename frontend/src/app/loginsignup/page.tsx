"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaVenusMars, FaCalendarAlt, FaRobot, FaDatabase, FaCompass, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

// HARDCODED CREDENTIALS DIRECTORY FOR IMMEDIATE TESTING
const PRESET_ACCOUNTS = [
  {
    email: "admin@sahayak.ai",
    password: "password123",
    name: "Alex Mercer",
    role: "operator", // Maps to structural control panel access
  },
  {
    email: "developer@sahayak.ai",
    password: "password123",
    name: "Sarah Chen",
    role: "developer", // Maps to agent builder access
  }
];

export default function LoginSignup() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");
  
  // Track runtime hardcoded accounts created by the user during this session
  const [sessionAccounts, setSessionAccounts] = useState<any[]>(PRESET_ACCOUNTS);

  // Core Form Coordinates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("operator"); // operator (Agent control) | developer (Agent builder)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agentAccess, setAgentAccess] = useState("Standard Workspace");
  const [computeQuota, setComputeQuota] = useState("100 TFLOPS");

  // Hardcoded Session Registration Pipeline
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password || !name) {
      setMessage("❌ Missing required system validation parameters.");
      return;
    }

    // Check if configuration profile already exists
    const accountExists = sessionAccounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
    if (accountExists) {
      setMessage("❌ Profile initialization error: Identity record already exists.");
      return;
    }

    const newProfile = {
      email,
      password,
      name,
      phone,
      role,
      agentAccess,
      computeQuota,
      createdAt: new Date().toISOString()
    };

    // Commit to runtime memory
    setSessionAccounts([...sessionAccounts, newProfile]);
    setMessage("✅ System profile initialized! Shifting to access portal...");
    
    // Auto-toggle to sign in panel after short delay
    setTimeout(() => {
      setIsSignup(false);
      setMessage("");
    }, 1500);
  };

  // Hardcoded Identity Verification Pipeline
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    // Find record across memory matrix
    const matchedProfile = sessionAccounts.find(
      (acc) => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password
    );

    if (!matchedProfile) {
      setMessage("❌ Access Denied: Security signature mismatch.");
      return;
    }

    // Provision local browser caches with mock runtime keys
    localStorage.setItem("sahayak_token", "mock_jwt_node_stream_active_2026");
    localStorage.setItem("sahayak_role", matchedProfile.role);
    localStorage.setItem("sahayak_profile", JSON.stringify(matchedProfile));

    setMessage("✅ Security handshake verified. Spawning Agentic OS environment...");
    
    // Redirect adjusted directly to the base /dashboard route
    setTimeout(() => {
      router.push(`/dashboard`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] relative overflow-hidden px-4 py-12 selection:bg-violet-500/30">
      
      {/* Space Matrix Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 blur-[160px] rounded-full"
        />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Main Console Frame Wrapper */}
      <div className="relative z-10 w-full max-w-4xl h-[720px] bg-[#0c0c14]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex">
        
        {/* Left Side: Dynamic Sign In Interface */}
        <div 
          className={`w-1/2 h-full p-12 flex flex-col justify-center transition-all duration-700 ease-in-out z-20 ${
            isSignup ? "translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">ACCESS CONTROL</h2>
            <p className="text-xs text-white/40 tracking-wider uppercase">Initialize terminal secure handshake</p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input label="Identity Gateway (Email)" type="email" value={email} onChange={setEmail} icon={<FaEnvelope />} placeholder="admin@sahayak.ai" />
            <Input label="Security Access Key" type="password" value={password} onChange={setPassword} icon={<FaLock />} placeholder="••••••••" />
            
            <div className="pt-4">
              <button type="submit" className="w-full relative group overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  EXECUTE INITIALIZATION <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
            </div>
            
            {message && !isSignup && (
              <p className={`text-xs text-center font-mono mt-4 p-2.5 rounded-lg border bg-black/40 ${
                message.includes("❌") ? "border-red-500/20 text-red-400" : "border-emerald-500/20 text-emerald-400"
              }`}>{message}</p>
            )}
          </form>

          {/* Fallback Credential Tooltip Matrix */}
          <div className="mt-8 p-3 rounded-xl border border-white/5 bg-white/[0.01] text-[10px] text-white/30 font-mono">
            <span className="text-violet-400 block mb-1">■ SYSTEM TEST BENCH CODES:</span>
            User: admin@sahayak.ai / Key: password123
          </div>
        </div>

        {/* Right Side: Dynamic Sign Up Interface */}
        <div 
          className={`w-1/2 h-full p-12 flex flex-col justify-center transition-all duration-700 ease-in-out z-20 overflow-y-auto custom-scrollbar ${
            isSignup ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">PROVISION CORE</h2>
            <p className="text-xs text-white/40 tracking-wider uppercase">Register new agent kernel instance</p>
          </div>

          <form className="space-y-3.5" onSubmit={handleSignup}>
            <Input label="Account Operator Name" type="text" value={name} onChange={setName} icon={<FaUser />} placeholder="Jane Doe" />
            <Input label="Secure Contact Link (Phone)" type="tel" value={phone} onChange={setPhone} icon={<FaPhone />} placeholder="+1 (555) 000-0000" />
            <Select label="System Operational Role" value={role} onChange={setRole} options={["operator"]} icon={<FaRobot />} />
            
            {role === "operator" && (
              <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                <Select label="Workspace Scope" value={agentAccess} onChange={setAgentAccess} options={["Standard Workspace", "Enterprise Cluster", "Global Node"]} icon={<FaCompass />} />
                <Select label="Compute Quota Allocation" value={computeQuota} onChange={setComputeQuota} options={["100 TFLOPS", "500 TFLOPS", "1 PFLOPS"]} icon={<FaDatabase />} />
              </div>
            )}
          
            <Input label="Identity Email Coordinate" type="email" value={email} onChange={setEmail} icon={<FaEnvelope />} placeholder="new.node@sahayak.ai" />
            <Input label="Root Access Password" type="password" value={password} onChange={setPassword} icon={<FaLock />} placeholder="••••••••" />
            
            <div className="pt-2">
              <button type="submit" className="w-full relative group overflow-hidden bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white py-3 rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  COMPILE KERNEL REPLICATION
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
            </div>
            
            {message && isSignup && (
              <p className={`text-xs text-center font-mono mt-4 p-2.5 rounded-lg border bg-black/40 ${
                message.includes("❌") ? "border-red-500/20 text-red-400" : "border-emerald-500/20 text-emerald-400"
              }`}>{message}</p>
            )}
          </form>
        </div>

        {/* Sliding Graphic Control Frame Partition */}
        <div 
          className={`absolute top-0 w-1/2 h-full bg-gradient-to-br from-[#121225] to-[#070712] border-white/5 text-white flex flex-col justify-center items-center p-12 transition-all duration-700 ease-in-out z-30 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
            isSignup ? "left-0 border-r rounded-r-[2.5rem]" : "left-1/2 border-l rounded-l-[2.5rem]"
          }`}
        >
          {/* Subtle architectural frame accent lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.3),transparent_70%)]" />

          <h3 className="text-3xl font-black tracking-tighter text-white mb-4 text-center">
            {isSignup ? "AUTOMATE YOUR LIFE WITH SAHAYAK" : "YOUR ONE STOP PORTAL TO THE SAHAYAK ECOSYSTEM"}
          </h3>
          <p className="text-center text-sm mb-8 max-w-xs text-white/40 leading-relaxed">
            {isSignup 
              ? "If current infrastructure identity keys are active, shift down into the central command processing matrix interface." 
              : "Register custom neural node vectors and deploy cross-domain architecture blocks with SAHAYAK systems."
            }
          </p>
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
            }}
            className="group relative px-10 py-3 rounded-full font-bold text-xs tracking-[0.2em] uppercase border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 overflow-hidden transform active:scale-95 shadow-md"
          >
            <span className="relative z-10">{isSignup ? "DE-CRYPT ACCESS ROUTE" : "SPAWN SYSTEM IDENTITY"}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (val: string) => void;
  icon: React.ReactNode;
  placeholder?: string;
}

const Input = ({ label, type, value, onChange, icon, placeholder }: InputProps) => (
  <div className="flex flex-col space-y-1.5 w-full">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-3.5 flex items-center text-white/30 text-xs">{icon}</span>
      <input 
        type={type} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 text-sm border border-white/5 bg-black/40 text-white placeholder:text-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all font-mono" 
        required 
      />
    </div>
  </div>
);

interface SelectProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  icon: React.ReactNode;
}

const Select = ({ label, value, onChange, options, icon }: SelectProps) => (
  <div className="flex flex-col space-y-1.5 w-full">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-3.5 flex items-center text-white/30 text-xs">{icon}</span>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full pl-10 pr-10 py-2.5 text-sm border border-white/5 bg-[#0e0e18] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all cursor-pointer appearance-none font-mono" 
        required
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0e0e18] text-white py-2">
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-white/20 text-[9px]">
        ▼
      </div>
    </div>
  </div>
);