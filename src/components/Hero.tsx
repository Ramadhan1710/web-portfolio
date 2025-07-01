import { ChevronDown, Download, Github, Instagram, Linkedin } from "lucide-react";
import MyPhoto from "../assets/img/profile-me.jpeg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      <div className="container my-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - Centered */}
          <div className="mb-8 mt-24 flex justify-center">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl group-hover:border-blue-400 transition-all duration-500 group-hover:scale-105">
                <img
                  src={MyPhoto}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-400 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Floating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 animate-fadeInUp">
                Halo, Saya{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  M. Ainur Ramadhan
                </span>
              </h1>
              <div
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="inline-block animate-bounce">👨‍💻</span>
                <span className="ml-2">Full Stack Web & Mobile Developer</span>
              </div>
            </div>

            <p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Passionate about creating beautiful, functional, and user-friendly
              digital experiences. Specialized in modern web technologies and
              innovative design solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => window.open("/cv.pdf", "_blank")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 overflow-hidden cursor-pointer"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              </button>

              <button
                onClick={scrollToAbout}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center space-x-6 mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { Icon: Github, href: "https://github.com/Ramadhan1710", label: "GitHub" },
                { Icon: Linkedin, href: "https://lnk.ink/Mddmk", label: "LinkedIn" },
                { Icon: Instagram, href: "https://lnk.ink/YTFJd", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
