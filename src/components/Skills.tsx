import { Code2, Database, Wrench, Brain, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { JSX } from 'react';

const Skills = () => {
  const { skills, certificates } = portfolioData;

  const skillIcons: { [key: string]: JSX.Element } = {
    "Programming Languages": <Code2 size={24} />,
    "Frontend": <Code2 size={24} />,
    "Backend": <Database size={24} />,
    "Databases": <Database size={24} />,
    "Data Science & ML": <Brain size={24} />,
    "Tools & Platforms": <Wrench size={24} />,
    "Soft Skills": <Award size={24} />
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg">
                  {skillIcons[category] || <Code2 size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;