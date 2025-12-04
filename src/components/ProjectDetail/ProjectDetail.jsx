import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      desc: 'Platform jual beli online dengan fitur lengkap dan desain modern.',
      fullDesc: 'Ini adalah platform e-commerce lengkap dengan sistem pembayaran, keranjang belanja, dan manajemen produk.',
      img: '/src/assets/images/project1.webp',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      desc: 'Aplikasi perbankan mobile dengan interface yang user-friendly dan aman.',
      fullDesc: 'Aplikasi mobile banking dengan fitur transfer, cek saldo, dan pembayaran tagihan.',
      img: '/src/assets/images/project2.jpeg',
      tech: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      desc: 'Portfolio website untuk menampilkan karya desain dengan tampilan yang elegan.',
      fullDesc: 'Website portfolio yang menampilkan karya desain dengan galeri interaktif.',
      img: '/src/assets/images/project3.webp',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="py-16 text-center">Project tidak ditemukan</div>;
  }

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen mt-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-6 text-gray-600 hover:text-gray-900">
          ← Kembali
        </Link>
        <img src={project.img} alt={project.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.fullDesc}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Teknologi yang Digunakan:</h2>
          <div className="flex gap-2">
            {project.tech.map((tech, index) => (
              <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
