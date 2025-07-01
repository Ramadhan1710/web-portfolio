import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  const projectsPerSlide = 6; // Show 6 projects per slide in carousel mode

  useEffect(() => {
    // Load projects data
    fetch('/src/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  useEffect(() => {
    let filtered;
    if (filter === 'all') {
      filtered = projects;
    } else if (filter === 'featured') {
      filtered = projects.filter(project => project.featured);
    } else {
      filtered = projects.filter(project => 
        project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
    setIsCarouselMode(filtered.length > 6);
    setCurrentSlide(0);
  }, [filter, projects]);

  const filterOptions = [
    { value: 'all', label: 'Semua Proyek' },
    { value: 'featured', label: 'Featured' },
    { value: 'react', label: 'React' },
    { value: 'node', label: 'Node.js' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'golang', label: 'Golang' },
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' }
  ];

  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentProjects = () => {
    if (!isCarouselMode) {
      return filteredProjects;
    }
    
    const startIndex = currentSlide * projectsPerSlide;
    const endIndex = startIndex + projectsPerSlide;
    return filteredProjects.slice(startIndex, endIndex);
  };

  const currentProjects = getCurrentProjects();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyek & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan, dari aplikasi web kompleks hingga solusi inovatif
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === option.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Count and Carousel Info */}
        {isCarouselMode && (
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm">
              Menampilkan {currentProjects.length} dari {filteredProjects.length} proyek
              {totalSlides > 1 && ` • Slide ${currentSlide + 1} dari ${totalSlides}`}
            </p>
          </div>
        )}

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show if carousel mode is active */}
          {isCarouselMode && totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}

          {/* Projects Grid */}
          <div className="overflow-hidden">
            <div 
              className={`grid gap-8 transition-all duration-500 ease-in-out ${
                isCarouselMode 
                  ? 'md:grid-cols-2 lg:grid-cols-3' 
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-200"
                      >
                        <Eye className="h-5 w-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transform hover:scale-110 transition-all duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots - Only show if carousel mode is active */}
        {isCarouselMode && totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Auto-play indicator for carousel */}
        {isCarouselMode && totalSlides > 1 && (
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Gunakan tombol navigasi atau dots untuk berpindah slide
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ingin Melihat Lebih Banyak?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ini hanya sebagian dari proyek yang telah saya kerjakan. 
              Kunjungi GitHub saya untuk melihat koleksi lengkap dan source code.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span>Kunjungi GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;