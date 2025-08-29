import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DemoPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Circuit Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/enquiro-imgs/imitated_circuit_background.png"
          alt="Circuit Background"
          fill
          style={{
            objectFit: "cover",
            opacity: 0.5,
            filter: "brightness(1.2)",
            transition: "opacity 0.3s, filter 0.3s",
          }}
          priority
        />
      </div>

      {/* Demo Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="bg-black/70 border border-[#00FF41] rounded-xl max-w-2xl w-full p-8 shadow-lg flex flex-col items-center">
          <div className="bg-[#00FF41] px-3 py-1 rounded flex items-center mb-6">
            <span className="font-bold text-black text-lg tracking-wider">Enquiro</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Welcome to the Enquiro Demo
          </h1>
          <p className="text-gray-200 text-center mb-8 text-lg">
            Discover the awesome features of Enquiro and learn how to get the most out of your AI-powered customer support platform.
          </p>
          <ul className="text-left text-base md:text-lg mb-8 space-y-4 max-w-xl">
            <li>
              <span className="text-[#00FF41] font-bold">✓</span> <b>Multi-Tenant Support:</b> Manage multiple brands or stores from a single dashboard.
            </li>
            <li>
              <span className="text-[#00FF41] font-bold">✓</span> <b>AI Chatbot Customization:</b> Easily tailor chatbots for your unique business needs.
            </li>
            <li>
              <span className="text-[#00FF41] font-bold">✓</span> <b>FAQ Management:</b> Organize and update FAQs for each tenant independently.
            </li>
            <li>
              <span className="text-[#00FF41] font-bold">✓</span> <b>Analytics & Insights:</b> Track customer inquiries, satisfaction, and support efficiency.
            </li>
            <li>
              <span className="text-[#00FF41] font-bold">✓</span> <b>Seamless Integration:</b> Connect Enquiro with your existing website or app in minutes.
            </li>
          </ul>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <button className="bg-[#00FF41] text-black font-bold px-8 py-3 rounded transition hover:bg-[#00e636] w-full">
                Back to Home
              </button>
            </Link>
            <Link href="/login" className="w-full sm:w-auto">
              <button className="border border-gray-400 text-white font-semibold px-8 py-3 rounded transition hover:bg-gray-900 w-full">
                Try Enquiro Now
              </button>
            </Link>
          </div>
          <Link href="/demo">
            <button className="bg-transparent border border-[#00FF41] text-[#00FF41] font-bold px-8 py-3 rounded transition hover:bg-[#00FF41]/10 mt-4">
              Watch Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}