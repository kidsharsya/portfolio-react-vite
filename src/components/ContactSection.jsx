import React from 'react';
import { Mail, Phone, MapIcon } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ahmad.rizki@email.com',
      link: 'mailto:ahmad.rizki@email.com',
    },
    {
      icon: Phone,
      title: 'Whatsapp',
      value: '+62 812 3456 7890',
      link: 'https://wa.me/6281234567890',
    },
    {
      icon: MapIcon,
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Hubungi Saya</h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-3">
                  <Icon />
                </div>
                <h3 className="font-semibold mb-1">{contact.title}</h3>
                <p className="text-gray-600">
                  {contact.link ? (
                    <a href={contact.link} className="hover:underline">
                      {contact.value}
                    </a>
                  ) : (
                    contact.value
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
