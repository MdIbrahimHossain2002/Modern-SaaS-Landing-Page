"use client";

export default function About() {
  return (
    <section id="about" className="container relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#0A0A1A] bg-gradient-to-b from-[#0A0A1A] to-[#1a0f2e] overflow-hidden">

      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,76,255,0.5),transparent_60%)] blur-3xl opacity-70"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <div>
          <p className="text-[#A083FF] text-sm font-semibold mb-3">
            The security first platform
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Simplify your security with<br />authentication services
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-md">
            Define access roles for the end-users, and extend your authorization 
            capabilities to implement dynamic access control.
          </p>

          {/* Feature Cards */}
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-[#5433FF] rounded-lg text-white bg-white/5 backdrop-blur-md">
              Simplify your security
            </button>
            <button className="w-full text-left px-4 py-3 border border-white/10 text-gray-300 bg-white/0 hover:bg-white/10 transition rounded-lg">
              Customer identity
            </button>
            <button className="w-full text-left px-4 py-3 border border-white/10 text-gray-300 bg-white/0 hover:bg-white/10 transition rounded-lg">
              Adaptable authentication
            </button>
          </div>
        </div>

        {/* Right Grid Effect */}
        <div className="relative flex justify-center md:justify-end">
          <div className="w-64 h-64 border border-white/10 rounded-xl grid grid-cols-6 grid-rows-6 opacity-40"></div>

          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20">
            <span className="text-white font-semibold">⚡</span>
          </div>
        </div>

      </div>
    </section>
  );
}
