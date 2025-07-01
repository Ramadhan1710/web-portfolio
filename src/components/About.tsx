import { User, MapPin, Calendar, Coffee, Heart, Target } from "lucide-react";

const About = () => {
  // const stats = [
  //   { icon: Calendar, label: "Tahun Pengalaman", value: "1+" },
  //   { icon: Target, label: "Proyek Selesai", value: "2+" },
  //   { icon: Coffee, label: "Cangkir Kopi", value: "∞" },
  //   { icon: Heart, label: "Client Puas", value: "100%" },
  // ];

  return (
    <section id="about" className="py-20 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat dengan passion, background, dan apa yang
            mendorong saya dalam dunia teknologi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Me"
                className="w-full h-96 object-cover"
              /> */}
              <iframe
                title="Lokasi Rumah"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885724.4690533625!2d110.6661415100097!3d-7.6694829968263765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784ce6f4f78779%3A0xdacf096d3d63861!2sLorubung%2C%20Ngepeh%2C%20Kec.%20Loceret%2C%20Kabupaten%20Nganjuk%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1751398807050!5m2!1sid!2sid"
                className="w-full h-96 rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 text-white">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 md:-bottom-14 -right-8 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl text-white max-w-xs">
              <div className="flex items-center space-x-3">
                <User className="h-8 w-8" />
                <div>
                  <p className="font-semibold">Available for</p>
                  <p className="text-sm opacity-90">Freelance Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Passion Meets Innovation
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Saya adalah seorang Full Stack Web and Mobile Developer yang
                  baru saja lulus dari D3 Teknik Informatika di Politeknik
                  Elektronika Negeri Surabaya. Saya memiliki ketertarikan
                  mendalam pada pengembangan teknologi dan solusi digital yang
                  berdampak.
                </p>
                <p>
                  Saat ini saya sedang fokus mengembangkan kemampuan Full Stack
                  Web Development (sebelumnya lebih banyak bekerja di
                  Front-End), dan membangun aplikasi mobile menggunakan Flutter,
                  terutama untuk platform Android.
                </p>
                <p>
                  Saya percaya bahwa belajar secara berkelanjutan, eksplorasi
                  teknologi baru, dan berkontribusi pada komunitas developer
                  adalah bagian penting dari perjalanan saya sebagai seorang
                  software developer.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-3">
                My Philosophy
              </h4>
              <p className="text-gray-300 italic">
                "Code is poetry, design is art, and great software is the
                beautiful intersection of both."
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                <h5 className="text-white font-medium mb-2">Focus Areas</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Web Development</li>
                  <li>• Mobile Development</li>
                  <li>• API Development</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                <h5 className="text-white font-medium mb-2">Interests</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Machine Learning</li>
                  <li>• Open Source</li>
                  <li>• Tech Community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
