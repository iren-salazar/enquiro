import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Top Bar */}
      <header className="w-full flex items-center justify-between px-10 py-4 bg-[#111]">
        <div className="flex items-center">
          <div className="bg-[#00FF41] px-3 py-1 rounded flex items-center">
            <span className="font-bold text-black text-lg tracking-wider">Enquiro</span>
          </div>
        </div>
        <div>
          {/* Toggle Switch Icon */}
          <span className="inline-block w-10 h-6 bg-[#00FF41] rounded-full relative">
            <span className="absolute left-1 top-1 w-4 h-4 bg-black rounded-full"></span>
          </span>
        </div>
      </header>

      {/* Background Circuit Lines (optional, can use an SVG or CSS for effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* You can replace this with a custom SVG or background image for circuit effect */}
        <Image
          src="/app/enquiro-imgs/imitated_circuit_background.png"
          alt="Circuit Background"
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
          priority
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col justify-center min-h-[80vh] px-10 pt-16 max-w-4xl">
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          Transform<br />
          Customer Support<br />
          with <span className="text-[#00FF41]">AI-Powered</span><br />
          Chatbots
        </h1>
        <p className="text-lg text-gray-200 mb-10 max-w-xl">
          Enquiro’s multi-tenant platform lets you deploy customized AI chatbots across your entire organization. Reduce support costs by 57% while improving customer satisfaction.
        </p>
        <div className="flex gap-4 mb-10">
          <button className="bg-[#00FF41] text-black font-bold px-8 py-3 rounded transition hover:bg-[#00e636]">
            Get Started
          </button>
          <button className="border border-gray-400 text-white font-semibold px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-900 transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2"/>
              <polygon points="10,8 16,12 10,16" fill="#fff"/>
            </svg>
            Watch Demo
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="absolute right-10 top-40 z-10 flex flex-col gap-10">
        <div className="border border-[#00FF41] rounded-lg px-6 py-4 bg-black/60 max-w-xs mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-gray-100 text-base">This saved our support team hours every day!</p>
        </div>
        <div className="border border-[#00FF41] rounded-lg px-6 py-4 bg-black/60 max-w-xs mb-4 ml-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-gray-100 text-base">Quickly customized the chatbot for my brand.</p>
        </div>
        <div className="border border-[#00FF41] rounded-lg px-6 py-4 bg-black/60 max-w-xs ml-32">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-gray-100 text-base">Love how I can manage FAQs separately from the chatbot responses.</p>
        </div>
      </div>
    </main>
  );
}
