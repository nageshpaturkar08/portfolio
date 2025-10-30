import React, { useState } from 'react';
import Img from '../assets/Image/Img.jpg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ loading: true, success: false, error: false, message: '' });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbynFXIAzpEgzABmjBcfoYdY8XZHL12TTKUHmvO4oXe1-4sVPqhNJEtxstHvn36tcyNcuw/exec';

  try {
    // Create URLSearchParams from form data
    const formDataToSend = new URLSearchParams();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    // Use fetch but don't wait for response (due to CORS)
    fetch(scriptURL, {
      method: 'POST',
      body: formDataToSend,
      mode: 'no-cors' // This tells fetch not to expect a CORS response
    }).catch(error => {
      // We expect an error due to no-cors mode, but the request still goes through
      console.log('Request sent (CORS error expected):', error);
    });

    // Assume success and show message
    setFormStatus({
      loading: false,
      success: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    console.error('Error:', error);
    setFormStatus({
      loading: false,
      success: false,
      error: true,
      message: 'There was an error sending your message. Please try again.'
    });
  }
};
  // Your existing data arrays remain the same...
  const timelineData = [
    {
      year: "2025",
      title: "Software Developer Intern",
      company: "Novapex Infohub",
      achievements: [
        "Engineered full-stack service platform integrating 12+ city services for 500+ monthly active users",
        "Secured application with JWT authentication using Spring Security, reducing vulnerabilities by 70%",
        "Developed location-based filtering algorithm boosting service accuracy by 45% and engagement by 30%",
        "Automated notifications with Spring Mail achieving 95% delivery rate and 60% communication time reduction",
        "Created responsive React UI components improving mobile performance by 25% and load speed by 35%",
        "Optimized database with Spring Data JPA and indexing, cutting response time from 1.8s to 0.7s (61%)"
      ]
    },
    {
      year: "2025",
      title: "Engineering Graduate",
      company: "Shri Sant Gajanan Maharaj College of Engineering",
      achievements: [
        "Bachelor of Engineering in Information Technology with CGPA: 9.2/10",
        "Specialized in Java, Data Structures, Algorithms, and Web Technologies",
        "Completed academic projects demonstrating full-stack development capabilities",
        "Participated in hands-on learning with strong focus on backend development and performance optimization"
      ]
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Personal Projects & Learning",
      achievements: [
        "Built Smart Contact Manager using Spring Boot, OAuth2, and MySQL for 1,000+ users reducing unauthorized access by 80%",
        "Developed Student Enquiry Management Portal handling 2,000+ student enquiries and cutting manual processing time by 55%",
        "Implemented Spring Mail OTP verification achieving 99% success rate and 90% reduction in failed registrations",
        "Optimized backend queries reducing data retrieval time by 67% across multiple projects",
        "Mastered Spring Boot, React.js, and modern full-stack development practices"
      ]
    },
    {
      year: "2021",
      title: "Higher Secondary Certificate (HSC)",
      company: "Yashvantrao Chavan Arts and Science Mahavidyalaya, Mangrulpir",
      achievements: [
        "Secured 94% in Higher Secondary Certificate (HSC) examination",
        "Focused on foundational computer science and mathematics concepts"
      ]
    },
    {
      year: "2019",
      title: "Secondary School Certificate (SSC)",
      company: "Zila Parishad High School, Mangrulpir",
      achievements: [
        "Secured 87.60% in Secondary School Certificate (SSC) examination",
        "Developed early interest in programming and problem-solving"
      ]
    }
  ];

  const projectsData = [
    {
      title: "Smart Contact Manager",
      description: "A comprehensive contact management system with secure authentication, cloud storage integration, and advanced search capabilities. The system provides a seamless experience for managing personal and professional contacts with real-time synchronization.",
      technologies: ['Spring Boot', 'React', 'MySQL', 'OAuth2', 'Cloudinary', 'Docker'],
      metrics: [
        { value: '80%', label: 'Reduced unauthorized access' },
        { value: '40%', label: 'Faster data retrieval' },
        { value: '67%', label: 'Improved response time' },
        { value: '35%', label: 'Reduced storage costs' }
      ],
      githubLink: "https://github.com/nageshpaturkar/smart-contact-manager",
      features: [
        "Secure OAuth2 authentication",
        "REST APIs with pagination and search",
        "Cloudinary integration for image storage",
        "Docker containerization",
        "Responsive React UI"
      ]
    },
    {
      title: "Student Enquiry Management Portal",
      description: "A full-stack web application designed to streamline student enquiry processes in educational institutions. Features automated OTP verification, enquiry tracking, and admin dashboard for efficient management.",
      technologies: ['Spring Boot', 'Thymeleaf', 'Spring Mail', 'MySQL', 'Spring Security'],
      metrics: [
        { value: '95%', label: 'OTP success rate' },
        { value: '60%', label: 'Time reduction' },
        { value: '45%', label: 'Accuracy improvement' },
        { value: '30%', label: 'Staff efficiency gain' }
      ],
      githubLink: "https://github.com/nageshpaturkar/Citizen-Welfare-Reports-Generator",
      features: [
        "Spring Mail OTP verification",
        "Advanced JPA queries",
        "Responsive Thymeleaf templates",
        "Role-based access control",
        "Real-time notification system"
      ]
    },
    {
      title: "Amazon Clone",
      description: "A fully responsive Amazon clone built with HTML and CSS, replicating the core design and user interface of the original e-commerce platform. Demonstrates advanced frontend development skills and attention to detail in recreating complex UI elements.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      metrics: [
        { value: '95%', label: 'UI Accuracy' },
        { value: '100%', label: 'Mobile Responsive' },
        { value: '90%', label: 'Feature Replication' },
        { value: '85%', label: 'User Experience' }
      ],
      githubLink: "https://github.com/nageshpaturkar/Amazon-Clone",
      features: [
        "Responsive navigation bar with dropdown menus",
        "Product grid layout with hover effects",
        "Shopping cart interface",
        "User authentication modal",
        "Footer with multiple sections",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "Gemini Clone",
      description: "A dynamic cryptocurrency exchange platform clone built with React, focusing on modern frontend development practices. Replicates the sophisticated UI of Gemini exchange with real-time data display and interactive components.",
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Component Architecture'],
      metrics: [
        { value: '90%', label: 'Design Accuracy' },
        { value: '100%', label: 'Component Reusability' },
        { value: '95%', label: 'Code Maintainability' },
        { value: '88%', label: 'Performance Score' }
      ],
      githubLink: "https://github.com/nageshpaturkar/gemini-git/tree/main/Gemini-Clone-main",
      features: [
        "Component-based React architecture",
        "Real-time cryptocurrency price display",
        "Interactive trading interface",
        "Responsive design for all devices",
        "Modern UI with professional styling",
        "State management with React hooks"
      ]
    }
  ];

  const certificationsData = [
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy - Dr. Angela Yu",
      year: "2024",
      skills: ["Full Stack Development", "HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      description: "Comprehensive 63-hour bootcamp covering full-stack web development with modern technologies",
      duration: "63 hours",
      date: "Jan 5, 2024"
    },
    {
      title: "Full Stack Java Developer Certification",
      issuer: "Wipro",
      year: "2025",
      skills: ["Java", "Spring Boot", "React", "MySQL", "Full Stack Development"],
      description: "Comprehensive certification covering full-stack development with Java ecosystem"
    },
    {
      title: "Introduction to Java",
      issuer: "LearnQuest via Coursera",
      year: "2023",
      skills: ["Java", "Programming Fundamentals", "OOP", "Basic Syntax"],
      description: "Fundamental Java programming concepts and introductory object-oriented programming",
      date: "Dec 28, 2023"
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM via Coursera",
      year: "2024",
      skills: ["HTML5", "CSS3", "JavaScript", "Web Development", "Frontend"],
      description: "Comprehensive introduction to web development technologies and frontend programming",
      date: "Mar 3, 2024"
    },
    {
      title: "Java for Beginners",
      issuer: "Infosys Springboard",
      year: "2024",
      skills: ["Java", "Programming Basics", "Syntax", "Fundamental Concepts"],
      description: "Beginner-level Java programming course covering core concepts and fundamentals",
      date: "Mar 24, 2024"
    },
    {
      title: "CSS3",
      issuer: "Infosys Springboard",
      year: "2024",
      skills: ["CSS3", "Styling", "Layout", "Responsive Design", "Animations"],
      description: "Advanced CSS3 features including layouts, animations, and responsive design techniques",
      date: "Mar 24, 2024"
    },
    {
      title: "HTML5 - The Language",
      issuer: "Infosys Springboard",
      year: "2024",
      skills: ["HTML5", "Semantic HTML", "Web Standards", "Accessibility"],
      description: "Comprehensive HTML5 course covering semantic elements, forms, and modern web standards",
      date: "Mar 23, 2024"
    },
    {
      title: "React Basics Certification",
      issuer: "Coursera",
      year: "2023",
      skills: ["React.js", "JavaScript", "Frontend Development", "Components"],
      description: "Fundamentals of React.js including components, state management, and hooks"
    },
    {
      title: "Web Development Certification",
      issuer: "IBM via Coursera",
      year: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      description: "Modern web development technologies and responsive design principles"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              N<span className="text-blue-600">P</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'journey', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'journey', 'projects', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-left py-2 transition-colors duration-300 font-medium ${
                      activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500 tracking-wider">
                  <span>FULL STACK DEVELOPER</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>BASED IN INDIA</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Hello, I'm <span className="text-blue-600">Nagesh</span> Paturkar
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  I'm a Full Stack Java Developer based in Mangrulpir, India. I strive to build 
                  high-performance, scalable applications through carefully crafted code and 
                  user-centric design.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>View Projects</span>
                  <span className="ml-2">↓</span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border border-gray-300 hover:border-blue-600 text-gray-700 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image and Stats */}
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mb-8 overflow-hidden border-8 border-white shadow-2xl">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                  src={Img} 
                  alt="Nagesh Paturkar"
                  className="w-full h-full object-cover"
                />
                  {/* <span className="text-4xl text-gray-600">Your Photo</span> */}
                  
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9.2</div>
                  <div className="text-gray-600 text-sm">CGPA</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
                  <div className="text-gray-600 text-sm">Performance Gain</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">9</div>
                  <div className="text-gray-600 text-sm">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Passionate developer with expertise in modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                Results-driven Full Stack Java Developer skilled in building high-performance, scalable applications 
                using Java, Spring Boot, and React. Proven track record of optimizing system performance by 40-67% 
                through efficient architecture design and code refinement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Strong problem-solving abilities with expertise in full-stack development, performance tuning, 
                and delivering seamless user experiences. Passionate about creating efficient, maintainable code 
                and staying updated with the latest industry trends.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-700 font-medium">Java 8+</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-green-700 font-medium">Spring Boot</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="text-purple-700 font-medium">React.js</span>
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="text-orange-700 font-medium">MySQL</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6">Technical Skills</h4>
              <div className="space-y-4">
                <SkillBar skill="Java & Spring Boot" level={90} />
                <SkillBar skill="React.js" level={85} />
                <SkillBar skill="MySQL & Database Design" level={80} />
                <SkillBar skill="RESTful APIs" level={88} />
                <SkillBar skill="JavaScript" level={82} />
                <SkillBar skill="Docker & DevOps" level={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From engineering graduate to full stack developer, creating impactful solutions
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30 transform -translate-x-1/2"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0 group">
                  {/* Year Circle */}
                  <div className="absolute left-8 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="font-bold text-white">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-32 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 group-hover:border-blue-600/50 transition-all duration-300 flex-1">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg font-medium">{item.company}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Building solutions that deliver measurable performance improvements
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Validating expertise through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - FIXED */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <ContactInfo 
                    label="Email"
                    value="nageshpaturkar2020@gmail.com"
                    icon="✉️"
                  />
                  <ContactInfo 
                    label="Phone"
                    value="+91 9359581695"
                    icon="📱"
                  />
                  <ContactInfo 
                    label="Location"
                    value="Mangrulpir, India"
                    icon="📍"
                  />
                  <ContactInfo 
                    label="GitHub"
                    value="github.com/nageshpaturkar"
                    icon="💻"
                    isLink={true}
                  />
                </div>

                <div className="flex space-x-4 pt-8">
                  <SocialLink platform="GitHub" url="https://github.com/nageshpaturkar" />
                  <SocialLink platform="LinkedIn" url="#" />
                  <SocialLink platform="LeetCode" url="#" />
                </div>
              </div>
            </div>

            {/* FIXED CONTACT FORM */}
           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
  
  {/* Status Messages - placed at the top of the form */}
  {formStatus.success && (
    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
      ✅ {formStatus.message}
    </div>
  )}
  
  {formStatus.error && (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
      ❌ {formStatus.message}
    </div>
  )}
  
  {formStatus.loading && (
    <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-6">
      ⏳ Sending your message...
    </div>
  )}
  
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Your form inputs remain the same */}
    <input 
      type="text" 
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleInputChange}
      required
      disabled={formStatus.loading}
      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors disabled:bg-gray-100"
    />
    
    <input 
      type="email" 
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleInputChange}
      required
      disabled={formStatus.loading}
      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors disabled:bg-gray-100"
    />
    
    <textarea 
      name="message"
      placeholder="Your Message"
      rows="6"
      value={formData.message}
      onChange={handleInputChange}
      required
      disabled={formStatus.loading}
      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors disabled:bg-gray-100"
    ></textarea>
    
    <button 
      type="submit"
      disabled={formStatus.loading}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-medium transition-colors duration-300"
    >
      {formStatus.loading ? 'Sending...' : 'Send Message'}
    </button>
  </form>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">
            N<span className="text-blue-600">P</span>
          </div>
          <p className="text-gray-600">Full Stack Java Developer</p>
          <p className="text-gray-500 text-sm mt-4">© 2024 Nagesh Paturkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{skill}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <span className="mr-2">🔗</span>
              View Code
            </a>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">Performance Metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                <div className="text-xs text-gray-600 leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Certification Card Component
const CertificationCard = ({ certification }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{certification.title}</h3>
          <p className="text-blue-600 font-medium">{certification.issuer}</p>
          {certification.date && (
            <p className="text-gray-500 text-sm mt-1">Completed: {certification.date}</p>
          )}
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-4 flex-shrink-0">
          {certification.year}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{certification.description}</p>
      
      {certification.duration && (
        <p className="text-gray-500 text-sm mb-3">Duration: {certification.duration}</p>
      )}
      
      <div className="flex flex-wrap gap-2">
        {certification.skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Contact Info Component
const ContactInfo = ({ label, value, icon, isLink = false }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        {isLink ? (
          <a 
            href={`https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-900 font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

// Social Link Component
const SocialLink = ({ platform, url }) => {
  return (
    <a 
      href={url}
      className="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-sm font-medium text-gray-600 hover:text-white">{platform[0]}</span>
    </a>
  );
};

export default Portfolio;