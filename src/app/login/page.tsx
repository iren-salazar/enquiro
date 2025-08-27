import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative flex items-center justify-center overflow-hidden">
      {/* Background Circuit Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/enquiro-imgs/imitated_circuit_background.png"
          alt="Circuit Background"
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
          priority
        />
      </div>

      {/* Centered Login Card */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#00FF41] px-3 py-1 rounded flex items-center">
            <span className="font-bold text-black text-lg tracking-wider">Enquiro</span>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-md bg-black/60 border border-[#00FF41] rounded-xl px-8 py-10 flex flex-col items-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Welcome</h2>
          <p className="text-gray-200 text-center mb-8 text-base">
            Effortless AI-powered customer<br />support for your business.
          </p>
          <button className="w-full bg-[#00FF41] text-black font-bold py-3 rounded-full mb-4 text-lg transition hover:bg-[#00e636]">
            Log In
          </button>
          <button className="w-full border border-gray-400 text-white font-semibold py-3 rounded-full text-lg bg-black hover:bg-gray-900 transition">
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}