import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              {personal.title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {personal.bio}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail size={18} />
              <span className="text-gray-700 dark:text-gray-300">{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone size={18} />
              <span className="text-gray-700 dark:text-gray-300">{personal.phone}</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <MapPin size={18} />
              <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href={personal.resume}
              target='blank'
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;