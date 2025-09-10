import { GraduationCap, Code, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with a strong foundation in software
            engineering and practical experience in enterprise solutions
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="inline-flex p-3 bg-blue-600 text-white rounded-full mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              300+ problems solved on LeetCode and Codeforces, strengthening
              algorithmic thinking
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="inline-flex p-3 bg-purple-600 text-white rounded-full mb-4">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Full-Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experienced in React, Node.js, Python,Golang and enterprise
              solutions with Odoo
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="inline-flex p-3 bg-green-600 text-white rounded-full mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Continuous Learner
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always staying updated with latest technologies and best practices
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <p>{edu.duration}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>
              )}
              {edu.coursework && (
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;