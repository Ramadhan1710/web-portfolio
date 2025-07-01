import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills = () => {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    // Load skills data
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Code;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keahlian & Teknologi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools dan teknologi yang saya kuasai untuk membangun aplikasi web dan mobile yang modern dan berkualitas tinggi
          </p>
        </div>

        {skillsData.length > 0 && (
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {skillsData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData[activeCategory]?.skills.map((skill, index) => {
                const Icon = getIcon(skill.icon);
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                          <Icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                        </div>
                        <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                    </div>

                    {/* Skill Level Label */}
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 75 ? 'Advanced' : 
                         skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Selalu Belajar & Berkembang
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Teknologi terus berkembang, dan saya berkomitmen untuk terus belajar dan mengasah keahlian. 
                  Saat ini sedang fokus mempelajari full stack web development.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[ 'React', 'Microservices', 'Laravel', 'Flutter', 'Golang'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;