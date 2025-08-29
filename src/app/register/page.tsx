import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans relative flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#00FF41] px-3 py-1 rounded flex items-center">
            <span className="font-bold text-black text-lg tracking-wider">Enquiro</span>
          </div>
        </div>
        <div className="w-full max-w-md bg-black/60 border border-[#00FF41] rounded-xl px-8 py-10 flex flex-col items-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Sign Up</h2>
          <form className="w-full flex flex-col gap-4 mb-4">
            <input className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" placeholder="Email Address" type="email" />
            <input className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" placeholder="Password" type="password" />
            <input className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" placeholder="Confirm Password" type="password" />
            <button type="submit" className="w-full bg-[#00FF41] text-black font-bold py-3 rounded-full text-lg transition hover:bg-[#00e636]">
              Register
            </button>
          </form>
          <p className="text-gray-400 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#00FF41] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}