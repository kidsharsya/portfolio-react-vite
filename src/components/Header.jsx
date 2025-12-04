import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav className="space-x-8" aria-label="Navigasi utama">
          <a href="#home" className="text-gray-500 hover:font-medium hover:text-blue-600 transition">
            Home
          </a>
          <a href="#projects" className="text-gray-500 hover:font-medium hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-500 hover:font-medium hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
