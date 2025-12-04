import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="bg-white py-16 px-6 pt-28">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img src="/src/assets/images/profile.jpg" alt="Profil Ahmad Rizki" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-md" />

        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Halo, Saya Ahmad Rizki</h2>
          <p className="text-gray-600 leading-relaxed">
            Saya adalah seorang Web Developer dan UI/UX Designer dengan passion dalam menciptakan pengalaman digital yang menarik dan intuitif. Dengan pengalaman lebih dari 3 tahun, saya telah mengerjakan berbagai proyek dari website
            perusahaan hingga aplikasi mobile.
          </p>
        </div>
      </div>
    </section>
  );
}
