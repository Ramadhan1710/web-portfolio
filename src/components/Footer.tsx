import {
  Code,
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Development", href: "#" },
      { name: "API Development", href: "#" },
    ],
    Technologies: [
      { name: "React", href: "#" },
      { name: "Node.js", href: "#" },
      { name: "Flutter", href: "#" },
      { name: "TypeScript", href: "#" },
      { name: "Tailwind CSS", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ramadhan1710", name: "GitHub" },
    { icon: Linkedin, href: "https://lnk.ink/Mddmk", name: "LinkedIn" },
    { icon: Instagram, href: "https://lnk.ink/YTFJd", name: "Instagram" },
    { icon: Mail, href: "mailto:mainurramadhan7@gmail.com", name: "Email" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white">M. Ainur Ramadhan</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full Stack Web & Mobile Developer yang passionate dalam
              menciptakan digital experiences yang beautiful dan functional.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-400/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Subscribe untuk mendapatkan update terbaru tentang proyek, tips, dan insights 
                seputar web development.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800/50 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} M. Ainur Ramadhan. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>in Indonesia</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
