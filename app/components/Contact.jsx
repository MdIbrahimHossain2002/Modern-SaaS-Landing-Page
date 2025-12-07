export default function Contact() {
  return (
    <section id="contact" className="py-24  px-6 md:px-12 lg:px-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Top Icons + Features */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 mb-20 text-center">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-500 rounded-lg"></div>
            <h3 className="text-lg font-semibold mb-2">Create custom cards</h3>
            <p className="text-gray-400 text-sm">
              Create cards that work exactly as you configure them. Make smarter
              decisions on charges and spending.
            </p>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build a flexible card program for your business needs
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Get your card →
          </button>
        </div>

        {/* Right – Cards */}
        <div className="relative h-[350px] flex items-center justify-center">
          {/* Card 1 */}
          <div className="absolute top-0 left-8 w-64 h-36 bg-teal-400 rounded-xl p-4 shadow-xl rotate-[-10deg]">
            <p className="font-bold text-lg">Ebker</p>
            <p className="text-sm mt-6">**** **** **** 7214</p>
          </div>

          {/* Card 2 */}
          <div className="absolute bottom-6 left-0 w-64 h-36 bg-gray-800 rounded-xl p-4 shadow-xl rotate-[10deg]">
            <p className="font-bold text-lg">Arasa</p>
            <p className="text-sm mt-6">**** **** **** 2234</p>
          </div>

          {/* Card 3 */}
          <div className="absolute right-0 top-10 w-64 h-36 bg-blue-500 rounded-xl p-4 shadow-xl rotate-[6deg]">
            <p className="font-bold text-lg">MoonPay</p>
            <p className="text-sm mt-6">**** **** **** 9920</p>
          </div>
        </div>
      </div>
    </section>
  );
}
