import { useState, useCallback, useMemo } from 'react'
import { FaDownload, FaEye, FaFilePdf, FaSpinner, FaGraduationCap, FaBriefcase, FaCertificate, FaAward } from 'react-icons/fa'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'
import { motion, AnimatePresence } from 'framer-motion'

function Resume() {
  const [showPDF, setShowPDF] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Use useCallback to prevent unnecessary re-renders
  const handleViewPDF = useCallback(() => {
    setIsLoading(true)
    setPdfError(false)
    // Reduced loading time for better UX
    setTimeout(() => {
      setIsLoading(false)
      setShowPDF(true)
    }, 500)
  }, [])

  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/documents/Anisa_Shaik_Resume.pdf'
    link.download = 'Anisa_Shaik_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // Memoize static data for performance - Updated with real resume content
  const experiences = useMemo(() => [
    {
      title: "Graduate Research Assistant - ACIS Lab",
      company: "University of Florida",
      period: "May 2025 - Present",
      location: "Gainesville, Florida, United States",
      achievements: [
        "Developing an AI agent for iChatBio.org that uses the Atlas of Living Australia (ALA) to answer species and occurrence questions across Australia.",
        "Leveraging GPT-4 to translate natural language questions into precise ALA API queries, with Pydantic + Instructor ensuring validated, reliable parameters before execution.",
        "Integrating ALA’s Spatial Portal concepts (polygons, bounding boxes, gazetteer regions) to make spatial queries accessible without technical jargon.",
        "Delivering results in human-friendly summaries and multi-format exports (CSV/JSON/RDF/KML/WKT/EML), aligned with ALA’s research tools and R workflows."
      ]
    },
    {
      title: "Member Services Associate",
      company: "UF RecSports - Part Time",
      period: "May 2025 - Sep 2025",
      location: "United States",
      achievements: [
        "Assisted students, staff, and guests with access issues and inquiries, ensuring a smooth and welcoming entry experience.",
        "Delivered efficient, friendly solutions in high-volume situations by staying composed under pressure and actively listening to concerns.",
        "Strengthened communication, problem-solving, and customer service skills while fostering a positive and inclusive environment."
  ]
    },
{
      title: "Software Analyst",
      company: "FIS",
      period: "Jun 2023 - Jul 2024",
      location: "Chennai, Tamil Nadu, India",
      achievements: [
        "Developed and maintained software components for the US government EBT (Electronic Benefit Transfer) project, implementing robust data validation and integration workflows that improved accuracy by 30%",
        "As part of a cross-functional team, I focused on building scalable automation and data infrastructure that supported analytics, API reliability, and system efficiency."
      ]
    },
{
      title: "IT Trainee",
      company: "FIS",
      period: "Jun 2022 - Jun 2023",
      location: "Chennai, Tamil Nadu, India",
      achievements: [
        "Collaborated with cross-functional teams to resolve software bottlenecks, improving system performance and reducing transaction latency by 30%",
        "Designed automated test suites using internal tools, boosting testing efficiency by 50%.",
        "Documented development processes, workflows, and test coverage strategies as part of quality assurance best practices"
      ]
    },
{
      title: "Student Council Executive Member",
      company: "BSA Crescent Institute of Science and Technology",
      period: "Jun 2019 - May 2022",
      location: "Chennai, Tamil Nadu, India",
      achievements: [
        "Served on the Quality Assurance and Enhancement Committee, ensuring student perspectives were represented in institutional decision-making.",
        "Actively participated in university-level meetings, providing constructive suggestions to enhance the quality of student education and campus life.",
        "Advocated for student needs and concerns, collaborating with faculty and administration to drive positive academic and community improvements."
      ]
    },
{
      title: "Data Science and Business Analytics Intern",
      company: "The Sparks Foundation · Internship",
      period: "Sep 2021 - Oct 2021",
      location: "Remote",
      achievements: [
        "During my internship, I developed a comprehensive hybrid model for stock market prediction using both numerical analysis and textual sentiment analysis. This project combined traditional stock price data with news headline sentiment to create a more accurate prediction system.",
        "Developed a Long Short-Term Memory (LSTM) neural network model to analyze 17 years of historical TCS stock data for numerical price prediction",
        "Performed sentiment analysis on news headlines, classifying them as positive (19.47%), negative (7.96%), or neutral (72.58%).",
	"Created a hybrid prediction model combining stock price data with sentiment analysis features including polarity and subjectivity scores.",
	"This internship strengthened my expertise in financial data analysis, machine learning implementation, and hybrid model development, while providing valuable experience in applying data science techniques to real-world financial prediction challenges."
      ]
    }
  ], []);

  // Education data - also memoized with real information
  const education = useMemo(() => [
    {
      degree: "Master of Science - MS, Computer Science",
      institution: "University of Florida",
      period: "August 2024 - May 2026",
      location: "Gainesville, Florida, US.",
      gpa: "3.9",
      details: "Final-year Software Engineering student with solid experience in Java and Spring Boot. Passionate about backend development, database design, and building scalable applications."
    },
{
      degree: "Bachelor of Technology - B.Tech, Computer Science",
      institution: "BSA Crescent Institute of Science and Technology",
      period: "July 2018 - May 2022",
      location: "Chennai, Tamil Nadu, India.",
      gpa: "9.84/10",
      details: "Courses - JavaScript · Android Studio · Core Java · Machine Learning Algorithms · Database Management System (DBMS) · Decision-Making · SQL · Leadership · HTML · Python (Programming Language) · Teamwork · REST APIs · Java · Data Structures"
    }
    
  ], []);

  // Certifications - memoized with real project-based accomplishments
  const certifications = useMemo(() => [
    {
      name: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services (AWS)",
      year: "2025",
      details: "Skills: Generative AI"
    },
    {
      name: "Building Real-Time Video AI Applications",
      issuer: "NVIDIA",
      year: "2025",
      details: "Skills: Deep Learning - Python"
    },
    {
      name: "UX Design by Example",
      issuer: "Infosys Springboard",
      year: "2023",
      details: "Skills: Wireframes · UX design · Prototypes · HTML · User Experience Design (UED)"
    },
    {
      name: "Set, Agile! Virtual Experience Program",
      issuer: "Cognizant",
      year: "2021",
      details: "Skills: Agile Principles"
    },
    {
      name: "IBM Cloud Essentials",
      issuer: "Cognitive Class",
      year: "2021",
      details: "Skills: IBM Cloud · IBM Cloud Object Storage"
    },
    {
      name: "SQL for Data Analytics",
      issuer: "Udemy",
      year: "2021",
      details: "Skills: SQL"
    }
  ], []);

  // Awards & Scholarships - memoized with actual achievements
  const awards = useMemo(() => [
    {
      title: "BSA Crescent Insitute of Science and Technology",
      issuer: "University",
      year: "2022",
      type: "Half Scholarship (50%)",
      achievement: "GPA 9.84/10",
      description: "Awarded half  tuition scholarship for outstanding academic performance"
    }
  ], []);



  return (
    <>
      <SEOHead {...SEO_CONFIGS.resume} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
         {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
  onClick={handleViewPDF}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaFilePdf className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-semibold text-slate-300">
                Professional Resume
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Resume</span>
            </motion.h1>

            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download my complete resume or view it online to learn more about 
              my professional experience, skills, and achievements.
            </motion.p>

          </div>

          {/* PDF Viewer */}
          <AnimatePresence>
            {showPDF && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100">
                        Resume Preview
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        Anisa_Shaik_Resume.pdf
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setShowPDF(false)}
                      className="text-slate-400 hover:text-slate-200 text-2xl p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <iframe
                      src="/documents/Anisa_Shaik_Resume.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
                      className="w-full h-[600px] rounded-lg border border-slate-700/30"
                      title="Resume PDF"
                      loading="lazy"
                      onError={() => setPdfError(true)}
                      onLoad={() => setPdfError(false)}
                    />
                    
                    {/* Fallback for browsers that don't support PDF viewing */}
                    <div className={`text-center mt-4 p-4 bg-slate-700/30 rounded-lg ${pdfError ? 'bg-red-900/20 border border-red-500/30' : ''}`}>
                      <p className="text-slate-400 text-sm mb-3">
                        {pdfError ? 'PDF failed to load, but you can still access it!' : "Can't see the PDF? No problem!"}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="/documents/Anisa_Shaik_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaEye className="text-sm" />
                          View in Browser
                        </a>
                        <button
                          onClick={handleDownloadPDF}
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaDownload className="text-sm" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-6">
                <FaBriefcase className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold text-slate-300">
                  Work Experience
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Professional Journey
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-slate-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-slate-400 text-sm mt-2 md:mt-0 text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-slate-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education, Certifications & Awards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Education */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaGraduationCap className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Education
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Academic Background
                </h2>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 border border-slate-700/50"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center text-slate-400 text-sm mb-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-slate-300 font-semibold mb-3">
                    GPA: {edu.gpa}
                  </p>
                  {edu.details && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaCertificate className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Certifications
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Professional Certifications
                </h2>
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-slate-700/50"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FaAward className="text-yellow-400" />
                      <h3 className="font-bold text-slate-100">
                        {cert.name}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    {cert.details && (
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cert.details}
                      </p>
                    )}
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

            {/* Awards & Scholarships */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaAward className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Awards & Scholarships
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Awards & Recognition
                </h2>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-slate-700/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Award background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl"></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <FaAward className="text-white text-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-100 text-lg">
                              {award.title}
                            </h3>
                            <p className="text-amber-400 text-sm font-medium">
                              {award.type}
                            </p>
                          </div>
                        </div>
                        <span className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-slate-300 text-sm mb-1">
                          <span className="font-medium">Institution:</span> {award.issuer}
                        </p>
                        <p className="text-emerald-400 text-sm font-medium">
                          <span className="text-slate-300">Achievement:</span> {award.achievement}
                        </p>
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center glass-effect rounded-3xl p-12 border border-slate-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaDownload className="text-white text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Ready to collaborate?
            </h3>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Download my full resume for detailed information about my experience, 
              projects, and technical skills. Let's build something amazing together!
            </p>

            <motion.button
              onClick={handleDownloadPDF}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <FaDownload />
              Get My Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Resume
