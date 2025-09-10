import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building enterprise solutions and contributing to impactful projects
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <Briefcase size={24} />
                    </div>
                  </div>
                  
                  <div className={`flex-grow ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    <div className={`flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                          {resp}
                        </li>
                      ))}
                    </ul>
                    
                    {exp.responsibilities.length > 3 && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Show more ({exp.responsibilities.length - 3} more)
                        </summary>
                        <ul className={`space-y-2 mt-2 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                          {exp.responsibilities.slice(3).map((resp, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;