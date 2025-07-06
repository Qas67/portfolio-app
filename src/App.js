import React, { useState, useEffect } from 'react';
// Ensure these paths are correct relative to your App.js file in src/
import yourPhoto from './assets/IMG_5208.jpeg';
import lc from './assets/images.png';
import vsp from './assets/visual_product_search.png';
import umang from './assets/umang.png';
import bm from './assets/bharat_mandapam.png';

// Main App component for the portfolio website
const App = () => {
  // State to manage the active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Embedded configuration data for the portfolio.
  const configData = {
    "personalInfo": {
      "name": "Ridham Gupta",
      "title": "Backend Developer",
      "tagline": "A passionate developer focused on building engaging web experiences.",
      "aboutMeParagraph1": "Hi, I'm Ridham Gupta — a passionate developer with a strong interest in solving real-world problems through technology. I enjoy diving deep into code, exploring new ideas, and building efficient, scalable applications. With experience in both frontend and backend development, I love creating impactful digital experiences and constantly strive to learn and grow. Whether it's developing user-friendly interfaces or architecting solid backend systems, I aim to deliver clean and thoughtful solutions.",
      "aboutMeParagraph2": "I have experience working with various front-end and back-end technologies, including JavaScript, TypeScript, Angular, Node.js, NESTJS and databases like PostgreSQL. I'm always eager to learn new tools and frameworks to expand my skill set and tackle new challenges.",
      "aboutMeParagraph3": "When I'm not coding, you can find me playing chess, watching movies. I believe in continuous learning and always striving for excellence in everything I do.",
      "resumeUrl": "https://drive.google.com/file/d/1I6X5Vx7mu4Jl8rYT015bdtjq3kbES5Gu/view?usp=sharing", // Your resume URL
      "linkedinUrl": "https://www.linkedin.com/in/ridham-gupta-3899931b5", // Your LinkedIn URL
      "githubUrl": "https://github.com/Qas67", // Your GitHub URL
      "leetcodeUrl": "https://leetcode.com/Ridham389/", // Your LeetCode URL
      "gmailUrl": "mailto:ridhamgupta389.rg@gmail.com",
      "profileImageUrl": yourPhoto, // Using the imported image
      "lcImage": lc // Using the imported LeetCode image
    },
    "experience": [
      {
        "id": "exp1",
        "title": "Junior Associate Software Engineer",
        "company": "Daffodil Softwares",
        "duration": "July 2025 - Present",
        "description": []
      },
      {
        "id": "exp2",
        "title": "Junior Associate Software Engineer Intern",
        "company": "Daffodil Softwares",
        "duration": "Jan 2025 - June 2025",
        "description": [
          "Built and maintained RESTful APIs using NestJS and TypeORM for hall booking and service management modules, improving backend scalability and data consistency across 5+ core services",
          "Implemented dynamic report generation and export functionality (PDF, Excel, CSV) using Puppeteer, EJS, and AWS S3, optimizing file delivery and cleanup through Redis caching and cron jobs",
          "Developed responsive user interfaces using Angular v16, enhancing user experience and optimized API calls, reducing requests by 25%, improving performance and lowering server load."
        ]
      }
    ],
    "education": [
      {
        "id": "edu1",
        "degree": "Bachelor of Engineering in Computer Science",
        "institution": "University Institute of Engineering and Technology, Panjab University",
        "duration": "2021-2025",
        "details": [
          "Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Management System, OOPS.",
          "Focused on Problem Solving and Web Development."
        ]
      }
    ],
    "skills": {
      "frontend": [
        "JavaScript", "TypeScript", "HTML", "CSS", "Angular"
      ],
      "backend": [
        "Node.js", "NESTJS", "Express.js"
      ],
      "database": [
        "PostgreSQL"
      ],
      "tools": [
        "Git", "Docker", "GitHub"
      ],
      "languages": [
        "C", "C++", "Javascript", "TypeScript", "Java"
      ]
    },
    "projects": [
      {
        "id": "imageSearch",
        "title": "Visual Product Search",
        "description": "Developed an end-to-end visual search system by converting 3,000 images into vector embeddings using PyTorch and storing them efficiently in a Neon PostgreSQL database. Built a FastAPI backend to perform real-time cosine similarity searches, and designed a responsive frontend for seamless image-based queries.",
        "imageUrl": vsp, // Using the imported image
        "liveUrl": "https://bitbucket.org/learning_123/visual_search/src/main/",
        "githubUrl": "https://bitbucket.org/learning_123/visual_search/src/main/",
        "hasLiveUrl": true, // New flag for live URL
        "hasGithubUrl": true // New flag for GitHub URL
      },
      {
        "id": "umang",
        "title": "Umang",
        "description": "Contributed to the Umang project by developing user interfaces using Angular v16, focusing on responsive design and smooth user experience. Implemented features like OTP-based login, and dynamic dashboards with efficient sorting and search functionality.",
        "imageUrl": umang,
        "liveUrl": "https://web.umang.gov.in/web_new/home",
        "githubUrl": "https://web.umang.gov.in/web_new/home",
        "hasLiveUrl": true,
        "hasGithubUrl": false // Example: No GitHub link for this project
      },
      {
        "id": "bharatMandapam",
        "title": "Bharat Mandapam",
        "description": "Worked on the backend of the Bharat Mandapam project using NestJS, building secure and scalable APIs with PostgreSQL and TypeORM. Implemented PDF generation using Puppeteer and EJS, handled file storage with AWS S3, and developed features for report exports (PDF/CSV/Excel) along with scheduled jobs using Redis and cron.",
        "imageUrl": bm,
        "liveUrl": "https://booking.indiatradefair.com/",
        "githubUrl": "https://booking.indiatradefair.com/",
        "hasLiveUrl": true,
        "hasGithubUrl": true
      }
    ],
    "contactInfo": {
      "introText": "Have a question or want to work together? Feel free to reach out!"
    }
  };

  // Destructure data from the embedded configData for easier access.
  const { personalInfo, experience, education, skills, projects, contactInfo } = configData;

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section for highlighting
    }
  };

  // Function to highlight skills in a given text
  const highlightSkills = (text, skillsToHighlight) => {
    const sortedSkills = [...skillsToHighlight].sort((a, b) => b.length - a.length);

    let highlightedText = text;
    sortedSkills.forEach(skill => {
      const regex = new RegExp(`\\b(${skill})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-teal-300 font-semibold">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  // Define skills to highlight for the aboutMeParagraph2
  const skillsForHighlight = [
    "JavaScript", "TypeScript", "Angular", "Node.js", "NESTJS", "PostgreSQL"
  ];


  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Removed 'contact' from the sections array for navigation highlighting
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'my-work'];
      let currentActive = 'home';

      // Get the height of the fixed navbar to adjust scroll position check
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Iterate through sections in reverse order to prioritize lower sections when scrolling down
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // A section is considered active if its top is within or above the viewport (adjusted for navbar),
          // and its bottom is also below the adjusted viewport top.
          const offset = 10; // Small offset to prevent flickering
          if (rect.top <= navbarHeight + offset && rect.bottom > navbarHeight + offset) {
            currentActive = sectionId;
            break; // Found the active section, stop
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll once on mount to set the initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-800 bg-opacity-90 z-50 shadow-lg rounded-b-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400">{personalInfo.name}</div>
          <div className="flex space-x-6">
            {/* Removed 'contact' from the navigation buttons map */}
            {['home', 'about', 'experience', 'education', 'skills', 'my-work'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium transition duration-300 ease-in-out
                  ${activeSection === section ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-300 hover:text-teal-300'}`}
              >
                {section === 'my-work' ? 'My Work' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center p-8 bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-teal-400">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            A passionate <span className="text-purple-300">{personalInfo.title}</span> focused on building engaging web experiences.
          </p>
          <button
            onClick={() => scrollToSection('my-work')}
            className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={personalInfo.profileImageUrl}
                className="rounded-full shadow-xl border-4 border-teal-500 w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed">
              <p className="mb-4">
                {personalInfo.aboutMeParagraph1}
              </p>
              <p className="mb-4">
                {highlightSkills(personalInfo.aboutMeParagraph2, skillsForHighlight)}
              </p>
              <p className="mb-8">
                {personalInfo.aboutMeParagraph3}
              </p>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mb-8">
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.799 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.082-.729.082-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.49.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.22-.12-.3-.535-1.52.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.656.238 2.876.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.895-.015 3.286 0 .323.21.698.825.577C20.562 21.799 24 17.303 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href={personalInfo.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                  <img src={personalInfo.lcImage} alt="LeetCode" className="w-8 h-8" />
                </a>
                <a href={personalInfo.gmailUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.5L12 13 2 6.5V6h20zM2 18V7.5l10 6.5 10-6.5V18H2z"/>
                </svg>
                </a>
              </div>
              {/* Resume Download Link */}
              <a
                href={personalInfo.resumeUrl}
                download="Ridham_resume.pdf" // Suggests a filename for download
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Experience</h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.id} className="bg-gray-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-3xl font-bold text-white mb-2">{job.title}</h3>
                <p className="text-teal-300 text-xl mb-2">{job.company} - {job.duration}</p>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  {job.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Education</h2>
          <div className="space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-700 p-8 rounded-xl shadow-xl">
                <h3 className="text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-teal-300 text-xl mb-2">{edu.institution} - {edu.duration}</p>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  {edu.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(skills).map((category) => (
              <div key={category} className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills[category].map((skill, index) => (
                    <span key={index} className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Renamed to My Work */}
      <section id="my-work" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Map over the projects array from configData */}
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-700 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    {/* Conditional rendering for View Live button */}
                    {project.hasLiveUrl && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
                      >
                        View Live
                      </a>
                    )}
                    {/* Conditional rendering for View Code button */}
                    {project.hasGithubUrl && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - This section is commented out in the provided code,
          so the navigation button for it is also removed.
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
            <p className="text-lg text-gray-300 text-center mb-6">
              {contactInfo.introText}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>

              {submissionStatus === 'success' && (
                <p className="text-center text-green-400 mt-4">
                  Message sent successfully! Thank you.
                </p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-center text-red-400 mt-4">
                  Please fill in all fields before submitting.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-red-500">&hearts;</span> and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
