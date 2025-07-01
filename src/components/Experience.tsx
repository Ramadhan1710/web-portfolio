import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

interface ExperienceItem {
  type: 'experience' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience = () => {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  useEffect(() => {
    // Load experience data
    fetch('/src/data/experience.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error('Error loading experience:', error));
  }, []);

  const filteredData = experienceData.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pengalaman & Pendidikan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Perjalanan karir dan pendidikan yang membentuk keahlian dan pengalaman saya
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>Pengalaman Kerja</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Pendidikan</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>

            {filteredData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg">
                          {item.type === 'experience' ? (
                            <Briefcase className="h-6 w-6 text-blue-400" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-purple-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-blue-400 font-medium">{item.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                        <Award className="h-4 w-4 text-yellow-400" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        {/* <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 border border-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Degree</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;