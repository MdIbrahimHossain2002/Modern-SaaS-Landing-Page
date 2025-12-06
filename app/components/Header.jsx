import React from 'react'

export default function Header() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-6xl font-bold mb-4">I'm Imran</h1>
      <p className="text-xl text-gray-300 mb-8">
        Frontend Developer & Designer
      </p>
      <button className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow">
        View My Work
      </button>
    </section>
  );
}
