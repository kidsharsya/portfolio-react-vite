import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      desc: 'Platform jual beli online dengan fitur lengkap dan desain modern.',
      img: '/src/assets/images/project1.webp',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      desc: 'Aplikasi perbankan mobile dengan interface yang user-friendly dan aman.',
      img: '/src/assets/images/project2.jpeg',
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      desc: 'Portfolio website untuk menampilkan karya desain dengan tampilan yang elegan.',
      img: '/src/assets/images/project3.webp',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Project Saya</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <article key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                <Link to={`/project/${item.id}`} className="block w-full text-center bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                  Lihat Detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
