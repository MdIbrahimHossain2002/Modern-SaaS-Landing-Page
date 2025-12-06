export default function Projects() {
  const items = [
    { title: "Website Design", img: "/p1.jpg" },
    { title: "E-commerce UI", img: "/p2.jpg" },
    { title: "Portfolio UI", img: "/p3.jpg" },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
            <img src={p.img} className="w-full h-56 object-cover" />
            <h3 className="p-4 text-xl font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
