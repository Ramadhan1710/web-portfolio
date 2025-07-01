import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Twitter,
  Instagram,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mainurramadhan7@gmail.com',
      href: 'mailto:mainurramadhan7@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nganjuk, Jawa Timur, Indonesia',
      href: '#',
      color: 'text-purple-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+62 819 1792 6409',
      href: 'https://wa.me/6281917926409',
      color: 'text-green-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-200'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://lnk.ink/Mddmk',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://lnk.ink/YTFJd',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 border-gray-800 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Punya proyek menarik? Mari diskusikan bagaimana saya bisa membantu mewujudkan ide Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Diskusi Proyek Web Development"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-vertical"
                    placeholder="Ceritakan tentang proyek atau ide Anda..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 ${item.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400 ml-auto" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 text-gray-400 ${social.color} group`}
                      >
                        <Icon className="h-6 w-6" />
                        <span className="font-medium">{social.name}</span>
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-4 md:p-8 border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  Siap Memulai Proyek?
                </h3>
                <p className="text-gray-300 mb-6">
                  Saya selalu terbuka untuk diskusi proyek baru dan kolaborasi yang menarik.
                </p>
                <a
                  href="https://wa.me/6281917926409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;