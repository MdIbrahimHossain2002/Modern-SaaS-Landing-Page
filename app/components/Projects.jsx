"use client";

export default function Projects() {
  return (
    <section id="projects" className="relative container w-full py-24 px-6 md:px-12 lg:px-20 bg-[#0A0A1A] bg-gradient-to-b from-[#0A0A1A] to-[#1a0f2e] overflow-hidden">
      
      {/* Blue Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)] opacity-30"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Create physical and<br />
            virtual cards for your<br />
            <span className="underline decoration-green-400">business</span>
          </h1>

          <p className="text-white/80 text-lg max-w-md mb-10">
            Our landing page template works on all devices, so you only 
            have to set it up once, and get beautiful results forever.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-900 transition">
              Get your card →
            </button>

            <button className="px-6 py-3 bg-white/30 backdrop-blur text-white rounded-full border border-white/40 hover:bg-white/40 transition">
              Read Documentation
            </button>
          </div>
        </div>

        {/* RIGHT CARD + FORM SECTION */}
        <div className="flex justify-center relative">

          {/* Form-like Card */}
          <div className="w-72 md:w-80 bg-white rounded-2xl shadow-xl p-6 transform rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full"
              />
              <h4 className="font-semibold text-gray-800">Lisa Paredi</h4>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Card Number</span>
                <span className="font-semibold">**** 7328</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Holder</span>
                <span className="font-semibold">Mark Robinson</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Expires</span>
                <span className="font-semibold">04 / 28</span>
              </div>
            </div>

            <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Pay Now
            </button>
          </div>

          {/* Floating Card */}
          <div className="absolute -top-8 right-0 md:right-10 w-60 md:w-64 bg-[#0b1b30] text-white rounded-xl shadow-2xl p-4 transform -rotate-6">
            <h3 className="text-lg font-bold mb-4">Sparks</h3>
            <div className="space-y-2 text-sm">
              <p>**** **** **** 7328</p>
              <p className="text-white/60">Mark Robinson</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
