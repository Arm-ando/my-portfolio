import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  BarChart3, 
  Database, 
  ArrowUpRight,
  Code2,
  User,
  Menu,
  X,
  Sparkles,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Download,
  MapPin,
  Send,
  Terminal,
  GraduationCap,
  LineChart,
  Layers,
  ChevronRight,
  ChevronLeft,
  Camera,
  PenTool,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Added state for routing
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image in modal
  
  // --- EMBLA CAROUSEL SETUP (Projects) ---
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // --- EMBLA CAROUSEL SETUP (Photography) ---
  const [emblaRefPhoto, emblaApiPhoto] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps' 
  });

  const scrollPrevPhoto = useCallback(() => {
    if (emblaApiPhoto) emblaApiPhoto.scrollPrev();
  }, [emblaApiPhoto]);

  const scrollNextPhoto = useCallback(() => {
    if (emblaApiPhoto) emblaApiPhoto.scrollNext();
  }, [emblaApiPhoto]);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- CONTENT DATA ---
  const experience = [
    {
      role: "BI Analyst",
      company: "NIHR (National Institute for Health & Care Research)",
      period: "Apr '24 - Present",
      description: "Building end-to-end analytics solutions and automated ETL pipelines using SQL and Python. I work with stakeholders to design dashboards and reporting tools that drive data-driven decision-making across research funding.",
      icon: BarChart3
    },
    {
      role: "Clinical Trial Assistant",
      company: "University of Southampton",
      period: "Jul '23 - Apr '24",
      description: "Assisted clinical trial managers with the daily management of oncology clinical trials.",
      icon: Database
    },
    {
      role: "Laboratory Technician",
      company: "University of Southampton",
      period: "Aug '22 - Jul '23",
      description: "Supervised 3 assistants processing 1000+ samples/month. Developed an Excel-based database that reduced administrative time by 20 mins/day and minimised tracking errors.",
      icon: Terminal
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Semantic Similarity NLP",
      category: "NLP",
      description: "A Natural Language Processing model that uses spacy to determine the semantic similarity between different text inputs. Useful for recommendation engines.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      tags: ["Python", "Spacy", "AI"],
      link: "https://github.com/Arm-ando/Semantic_Similarity_NLP"
    },
    {
      id: 2,
      title: "Finance Calculators",
      category: "GUI Apps",
      description: "A financial tool featuring a Tkinter GUI. Allows users to calculate investment returns and home loan repayment schedules with an intuitive visual interface.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
      tags: ["Python", "Tkinter", "Finance"],
      link: "https://github.com/Arm-ando/Finance_Calculators"
    },
    {
      id: 3,
      title: "eBookstore Capstone",
      category: "Database",
      description: "A database management system designed for digital bookstores to handle stock, sales, and inventory tracking. Developed during my software bootcamp.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000&auto=format&fit=crop",
      tags: ["Python", "SQL", "Management"],
      link: "https://github.com/Arm-ando/eBookstore"
    },
    {
      id: 4,
      title: "Task Management System",
      category: "Backend",
      description: "A Python-based application designed to streamline task organisation and monitoring. Features user registration and authentication.",
      year: "2022",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop",
      tags: ["Python", "Auth", "Logic"],
      link: "https://github.com/Arm-ando/Task-Management-System"
    },
    {
      id: 5,
      title: "Store Manager",
      category: "Automation",
      description: "An application designed to assist store managers in managing inventory and stock-taking processes efficiently via automated logic.",
      year: "2022",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
      tags: ["Python", "Automation", "Logic"],
      link: "https://github.com/Arm-ando/Store-Manager"
    }
  ];

  const photography = [
    "\images\\france2.JPG",
    "\images\\france1.JPG",
    "\images\\france3.JPG",
    "\images\\france4.JPG",
    "\images\\Mallorca1.jpg",
    "\images\\Mallorca2.JPG",
    "\images\\Rhodes1.JPG",
  ];

  const filters = ['All', 'NLP', 'GUI Apps', 'Database', 'Backend', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Navigation Helper
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDF8F3] text-[#2D2926] font-sans selection:bg-[#D4A853] selection:text-white overflow-x-hidden min-h-screen flex flex-col">
      
      {/* --- INTEGRATED STYLES --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Nunito', sans-serif; }
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #FDF8F3; }
          ::-webkit-scrollbar-thumb { background: #D4A853; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #b88e3e; }

          /* Floating Animation */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          
          /* Slow Fade In */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }

          /* Embla styles */
          .embla { overflow: hidden; }
          .embla__container { display: flex; gap: 2rem; }
          .embla__slide { flex: 0 0 300px; min-width: 0; }
          .embla__slide_photo { flex: 0 0 auto; min-width: 0; max-width: 90vw; cursor: pointer; }
          @media (max-width: 768px) {
            .embla__slide { flex: 0 0 80%; }
          }
        `}
      </style>

      {/* --- IMAGE MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#D4A853] transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing it
          />
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#FDF8F3]/90 backdrop-blur-md border-b border-[#D4A853]/10 py-3 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => navigateTo('home')} className="font-serif text-2xl tracking-tight font-bold hover:text-[#D4A853] transition-colors focus:outline-none">
            ARMANDO<span className="text-[#D4A853]">.</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-[#2D2926]/80">
            {currentPage === 'home' ? (
               <>
                  {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-[#D4A853] transition-colors">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A853] transition-all group-hover:w-full"></span>
                    </a>
                  ))}
               </>
            ) : (
               <button onClick={() => navigateTo('home')} className="relative group hover:text-[#D4A853] transition-colors">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A853] transition-all group-hover:w-full"></span>
               </button>
            )}
            
            <button onClick={() => navigateTo('other')} className={`relative group hover:text-[#D4A853] transition-colors ${currentPage === 'other' ? 'text-[#D4A853]' : ''}`}>
              OTHER
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A853] transition-all ${currentPage === 'other' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <a href="#contact" onClick={(e) => { if(currentPage !== 'home') { navigateTo('home'); setTimeout(() => window.location.hash = 'contact', 100); } }} className="px-7 py-3 bg-[#2D2926] text-white rounded-full hover:bg-[#D4A853] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#2D2926] p-2 hover:bg-[#D4A853]/10 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-[#FDF8F3] border-b border-[#D4A853]/20 shadow-xl transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="p-8 flex flex-col gap-6 font-serif text-2xl">
            {currentPage === 'home' && ['About', 'Experience', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4A853] hover:pl-2 transition-all">
                {item}
              </a>
            ))}
            {currentPage === 'other' && (
               <button onClick={() => navigateTo('home')} className="text-left hover:text-[#D4A853] hover:pl-2 transition-all">
                  Home
               </button>
            )}
            <button onClick={() => navigateTo('other')} className="text-left hover:text-[#D4A853] hover:pl-2 transition-all">
               Other
            </button>
            <a href="#contact" onClick={(e) => { if(currentPage !== 'home') { navigateTo('home'); setTimeout(() => window.location.hash = 'contact', 100); } else { setIsMenuOpen(false); } }} className="hover:text-[#D4A853] hover:pl-2 transition-all">
               Contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- PAGE RENDERING LOGIC --- */}
      {currentPage === 'home' ? (
        <main className="flex-grow">
          {/* --- HERO SECTION --- */}
          <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5AAFA9]/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left: Text Content */}
                <div className="order-2 lg:order-1 opacity-0 animate-fade-in">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4A853]/30 bg-white/40 backdrop-blur-sm shadow-sm mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A853] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4A853]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#2D2926]">London, UK</span>
                    </div>
                    
                    <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-[#2D2926]">
                        Hi, I'm Armando. <br />
                        <span className="italic text-[#D4A853] font-light">BI Analyst.</span>
                    </h1>
                    
                    <div className="h-px w-24 bg-[#D4A853] mb-8"></div>

                    <p className="text-xl text-[#2D2926]/80 mb-4 font-bold tracking-tight">
                        SQL • Python • Visualisations • Strategy
                    </p>
                    <p className="text-lg text-[#2D2926]/60 mb-10 max-w-lg leading-relaxed font-light">
                        I transform complex healthcare data into clear, actionable business strategies. Bridging the gap between raw data and executive decisions.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 bg-[#D4A853] text-white text-sm font-bold rounded-full hover:bg-[#b88e3e] transition-all duration-300 shadow-lg shadow-[#D4A853]/20 hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest">
                            View Work <ArrowUpRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end opacity-0 animate-fade-in delay-200">
                    <div className="relative max-w-sm lg:max-w-md w-full">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#2D2926]/10 aspect-[3/4] border-8 border-white group z-10 bg-[#E5E5E5] hover:rotate-0 transition-all duration-700">
                            <img 
                                src="/images/me.jpg" 
                                alt="Armando Lobete" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>

                        <div className="absolute bottom-10 -left-6 lg:-left-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/60 hidden md:block animate-float z-20">
                            <div className="flex items-center gap-4">
                               <div className="bg-[#D4A853]/20 p-3 rounded-full text-[#D4A853]">
                                  <BarChart3 size={24} />
                               </div>
                               <div>
                                  <div className="font-serif italic text-2xl text-[#2D2926]">4+ Years</div>
                                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#2D2926]/50">Experience</div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* --- UPDATED ABOUT SECTION --- */}
          <section id="about" className="py-24 px-6 bg-white relative">
             <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                {/* Narrative (Moved to the left) */}
                <div className="order-2 md:order-1">
                   <span className="text-[#D4A853] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">About Me</span>
                   <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#2D2926]">From Labs to <span className="italic text-[#D4A853]">Data Lakes.</span></h2>
                   <div className="space-y-6 text-[#2D2926]/70 text-lg font-light leading-relaxed">
                      <p>
                         I'm a storyteller at heart and one of those mediums is data.
                      </p>
                      <p>
                         With a background in biomedical science, healthcare and clinical research, I understand that behind every data point is a patient, a decision or a critical outcome. I personally believe that the best data tells a story that drives action and creates business impact.
                      </p>
                      <p>
                         Now the thing is, every great story needs a solid foundation. You can't tell compelling stories with messy data, unreliable pipelines or infrastructure that is weak. That's why I'm drawn to the world of analytics and data engineering, I want to build the infrastructure that makes great storytelling possible. The pipelines that ensure data is clean, timely and trustworthy.
                      </p>
                      <p>
                         My goal isn't just to visualise data but to also build the foundations that enable organisations to make confident, data-driven decisions and to tell the stories that turn insights into impact.
                      </p>
                   </div>
                </div>

                {/* Feature Card (Moved to the right) */}
                <div className="order-1 md:order-2">
                   <div className="bg-[#FDF8F3] p-10 rounded-[2.5rem] border-l-4 border-[#D4A853] shadow-sm relative overflow-hidden group">
                      <Briefcase className="w-10 h-10 text-[#D4A853] mb-6" />
                      <h3 className="font-serif text-3xl mb-4 text-[#2D2926]">What's Next?</h3>
                      <p className="text-[#2D2926]/70 leading-relaxed">
                         I am actively developing my technical skillset to transition into <strong>Data Engineering</strong>. 
                         I am passionate about engineering end-to-end data solutions, from the database architecture to the final pipeline.
                      </p>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A853]/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#D4A853]/10"></div>
                   </div>
                </div>
                
             </div>
          </section>

          {/* --- EXPERIENCE SECTION --- */}
          <section id="experience" className="py-32 px-6 bg-[#FDF8F3]">
             <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                   <span className="text-[#D4A853] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">CV</span>
                   <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2926]">Professional History</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                   {experience.map((job, index) => (
                      <div key={index} className="bg-white p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#D4A853]/10 border border-transparent hover:border-[#D4A853]/20 group flex flex-col">
                         <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 bg-[#FDF8F3] rounded-2xl flex items-center justify-center text-[#D4A853] group-hover:bg-[#D4A853] group-hover:text-white transition-colors duration-500">
                               <job.icon className="w-7 h-7" />
                            </div>
                            <span className="px-3 py-1 bg-[#FDF8F3] text-[10px] font-bold uppercase tracking-widest text-[#2D2926]/50 rounded-full group-hover:bg-[#2D2926] group-hover:text-white transition-colors">{job.period}</span>
                         </div>
                         
                         <h3 className="font-serif text-2xl mb-2 font-bold text-[#2D2926] group-hover:text-[#D4A853] transition-colors">{job.role}</h3>
                         <p className="text-sm font-bold text-[#5AAFA9] mb-6 uppercase tracking-wide">{job.company}</p>
                         
                         <p className="text-sm text-[#2D2926]/60 leading-relaxed border-t border-gray-100 pt-6 mt-auto">
                            {job.description}
                         </p>
                      </div>
                   ))}
                </div>
                
                <div className="mt-16 bg-white p-10 md:p-12 rounded-[2rem] border border-[#D4A853]/10 shadow-sm">
                    <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
                       <GraduationCap className="text-[#D4A853]" /> Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12">
                       <div>
                          <h4 className="font-bold text-lg text-[#2D2926]">BSc (Hons) Biomedical Science, 2:1</h4>
                          <p className="text-sm text-[#5AAFA9] font-bold uppercase tracking-wider mb-2">University of Essex (2018 - 2022)</p>
                          <p className="text-sm text-gray-500 italic">Thesis: Bioinformatics analysis of SARS-CoV-2 RNA-seq in human lung cells using Python and Partek Flow.</p>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg text-[#2D2926]">Software Engineering Bootcamp</h4>
                          <p className="text-sm text-[#5AAFA9] font-bold uppercase tracking-wider mb-2">HyperionDev (Nov 2022 - Mar 2023)</p>
                          <p className="text-sm text-gray-500 italic">This was a government-funded programme whereby I gained proficiency in Python (OOP, control structures, SQL), algorithms, and machine learning.</p>
                       </div>
                    </div>
                </div>
             </div>
          </section>

          {/* --- SKILLS SECTION --- */}
          <section id="skills" className="py-32 px-6 bg-white border-y border-[#2D2926]/5">
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-20">
                <div className="md:w-1/3 sticky top-32">
                   <h2 className="font-serif text-5xl font-bold mb-6 text-[#2D2926] leading-tight">Skills <br/>and Technical Stack<span className="text-[#D4A853]">.</span></h2>
                   <p className="text-[#2D2926]/60 text-lg font-light mb-8">
                     Proficient in Microsoft Office, SQL, Python, Power BI, and Looker. Always learning, always optimising.
                   </p>
                   <a href="https://www.linkedin.com/in/armando-lobete/" target="_blank" rel="noreferrer" className="text-[#2D2926] font-bold border-b-2 border-[#D4A853] pb-1 hover:text-[#D4A853] transition-colors">View LinkedIn Profile</a>
                </div>
                
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                   {[
                     { icon: Code2, title: "Languages", skills: ["Python (Including Pandas)", "SQL"] },
                     { icon: LineChart, title: "Visualisation", skills: ["Power BI", "Looker"] },
                     { icon: Database, title: "Engineering", skills: ["ETL Pipelines", "Data Modelling", "Warehousing"] },
                     { icon: User, title: "Soft Skills", skills: ["Bilingual (Eng/Esp)", "Stakeholder Mgmt", "Problem Solving"] }
                   ].map((cat, idx) => (
                     <div key={idx} className="p-8 bg-[#FDF8F3] rounded-3xl border border-transparent hover:border-[#D4A853]/20 transition-all duration-300 hover:shadow-lg group hover:bg-white">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#D4A853] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                           <cat.icon size={24} />
                        </div>
                        <h4 className="font-serif font-bold text-xl mb-4 text-[#2D2926]">{cat.title}</h4>
                        <div className="flex flex-wrap gap-2">
                           {cat.skills.map(skill => (
                              <span key={skill} className="px-3 py-1 bg-white border border-[#2D2926]/5 text-[#2D2926]/70 text-xs font-bold rounded-lg group-hover:bg-[#2D2926] group-hover:text-white transition-colors duration-300">
                                 {skill}
                              </span>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* --- PROJECTS SECTION (EMBLA CAROUSEL) --- */}
          <section id="projects" className="py-32 px-6 bg-[#2D2926] text-[#FDF8F3] overflow-hidden">
             <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="text-[#D4A853] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
                        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Selected Works</h2>
                        <p className="text-white/60 text-lg font-light max-w-lg">Active repositories and capstone projects from my GitHub profile.</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-6">
                      {/* Filters */}
                      <div className="flex flex-wrap gap-3 justify-end">
                        {filters.map(filter => (
                          <button 
                              key={filter}
                              onClick={() => setActiveFilter(filter)}
                              className={`text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full border transition-all duration-300 ${activeFilter === filter ? 'bg-[#D4A853] border-[#D4A853] text-[#2D2926]' : 'border-white/20 text-white/50 hover:border-white hover:text-white'}`}
                          >
                              {filter}
                          </button>
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex gap-4">
                        <button onClick={scrollPrev} className="p-3 rounded-full border border-white/20 hover:bg-[#D4A853] hover:border-[#D4A853] hover:text-[#2D2926] transition-all text-white">
                          <ChevronLeft size={24} />
                        </button>
                        <button onClick={scrollNext} className="p-3 rounded-full border border-white/20 hover:bg-[#D4A853] hover:border-[#D4A853] hover:text-[#2D2926] transition-all text-white">
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="embla" ref={emblaRef}>
                   <div className="embla__container flex gap-8">
                      {filteredProjects.map((project) => (
                          <div className="embla__slide flex-none w-[80vw] md:w-[300px] min-w-0" key={project.id}>
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="group cursor-pointer rounded-[2rem] bg-[#1a1816] overflow-hidden border border-white/5 hover:border-[#D4A853]/30 transition-all duration-500 block h-full flex flex-col"
                            >
                              <div className="aspect-[3/2] overflow-hidden relative">
                                  <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                                  />
                                  <div className="absolute inset-0 bg-[#2D2926]/20 group-hover:bg-transparent transition-colors"></div>
                                  <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-[#D4A853] text-[#2D2926] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                  </div>
                              </div>
                              <div className="p-6 relative flex-1 flex flex-col">
                                  <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-serif text-xl text-white group-hover:text-[#D4A853] transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="text-[#D4A853] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                                  </div>
                                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-light line-clamp-2">{project.description}</p>
                                  <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags?.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-3 py-1 rounded-full">
                                          {tag}
                                        </span>
                                    ))}
                                  </div>
                              </div>
                            </a>
                          </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>

          {/* --- CONTACT SECTION --- */}
          <section id="contact" className="py-32 px-6 bg-[#FDF8F3] relative">
            <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-[#2D2926]/5 overflow-hidden flex flex-col lg:flex-row border border-white">
                
                <div className="lg:w-5/12 bg-[#2D2926] text-[#FDF8F3] p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5AAFA9]/20 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h2 className="font-serif text-4xl mb-6 text-white leading-tight">Let's start a <br/>project together.</h2>
                        <p className="text-white/70 mb-10 leading-relaxed text-sm font-light">
                            I am currently open to opportunities in BI and Data Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className="space-y-6">
                            <a href="mailto:armandolobete9@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4A853] transition-colors border border-white/5">
                                    <Mail className="w-5 h-5 text-white group-hover:text-[#2D2926]" />
                                </div>
                                <div>
                                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</p>
                                   <span className="text-white group-hover:text-[#D4A853] transition-colors font-serif text-lg">Email me</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/armando-lobete/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0077b5] transition-colors border border-white/5">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">LinkedIn</p>
                                   <span className="text-white group-hover:text-[#0077b5] transition-colors font-serif text-lg">Connect with me</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 lg:mt-0 flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} /> London, UK / Remote
                    </div>
                </div>

                <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#2D2926]/40 group-focus-within:text-[#D4A853] transition-colors">Name</label>
                                <input type="text" className="w-full bg-[#FDF8F3] border-b-2 border-[#2D2926]/10 px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#D4A853] focus:bg-white transition-all text-[#2D2926] placeholder-[#2D2926]/20 font-serif" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#2D2926]/40 group-focus-within:text-[#D4A853] transition-colors">Email</label>
                                <input type="email" className="w-full bg-[#FDF8F3] border-b-2 border-[#2D2926]/10 px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#D4A853] focus:bg-white transition-all text-[#2D2926] placeholder-[#2D2926]/20 font-serif" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-[#2D2926]/40 group-focus-within:text-[#D4A853] transition-colors">Subject</label>
                            <div className="relative">
                               <select className="w-full bg-[#FDF8F3] border-b-2 border-[#2D2926]/10 px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#D4A853] focus:bg-white transition-all text-[#2D2926] appearance-none cursor-pointer font-serif">
                                  <option>New Project Opportunity</option>
                                  <option>Recruitment / Hiring</option>
                                  <option>General Inquiry</option>
                               </select>
                               <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-[#2D2926]/30 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold uppercase tracking-wider text-[#2D2926]/40 group-focus-within:text-[#D4A853] transition-colors">Message</label>
                            <textarea rows="4" className="w-full bg-[#FDF8F3] border-b-2 border-[#2D2926]/10 px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#D4A853] focus:bg-white transition-all text-[#2D2926] placeholder-[#2D2926]/20 font-serif resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                          <button type="button" className="group w-full md:w-auto px-10 py-4 bg-[#D4A853] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#b88e3e] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                              Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                      </form>
                  </div>
              </div>
            </section>
        </main>
      ) : (
        <main className="flex-grow pt-32 pb-24">
            {/* --- "OTHER" PAGE HEADER --- */}
            <div className="max-w-4xl mx-auto px-6 mb-20 text-center animate-fade-in">
               <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-[#2D2926]/5 mx-auto mb-8 relative group">
                   <img 
                       src="/images/CRUK.jpg" 
                       alt="Armando Creative" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
               </div>
               <span className="text-[#D4A853] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Beyond Data</span>
               <h1 className="font-serif text-5xl md:text-6xl mb-6 text-[#2D2926]">More about <span className="italic text-[#D4A853]">me.</span></h1>
               <p className="text-xl text-[#2D2926]/60 leading-relaxed font-light">
                  When I’m not wrangling messy datasets, you’ll find me exploring other creative mediums. This is a space for everything that makes me, me. Beyond the SQL and dashboards.
               </p>
            </div>

            {/* --- SERVICES SECTION --- */}
            <section className="max-w-5xl mx-auto px-6 mb-32 animate-fade-in delay-100">
               <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-[#2D2926]/5 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D4A853]/10 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5AAFA9]/5 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <div className="relative z-10 max-w-4xl mx-auto">
                     <div className="w-16 h-16 bg-[#FDF8F3] rounded-2xl flex items-center justify-center text-[#D4A853] mb-6 mx-auto group-hover:scale-110 transition-transform">
                        <Briefcase className="w-8 h-8" />
                     </div>
                     <h2 className="font-serif text-3xl mb-4 text-[#2D2926]">Services</h2>
                     <div className="inline-block px-4 py-1.5 bg-[#D4A853] text-[#2D2926] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Coming Soon</div>
                     <p className="text-[#2D2926]/70 leading-relaxed text-lg font-light max-w-2xl mx-auto mb-12">
                        Currently exploring opportunities to help organisations tell better stories with their data. If you're interested in collaborating, feel free to reach out.
                     </p>

                     {/* Services Grid */}
                     <div className="grid md:grid-cols-3 gap-6 text-left">
                         <div className="p-8 bg-[#FDF8F3]/50 rounded-3xl border border-transparent hover:border-[#D4A853]/30 hover:bg-[#FDF8F3] transition-all duration-300 group/card">
                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#D4A853] mb-6 shadow-sm group-hover/card:scale-110 transition-transform">
                                 <LineChart className="w-6 h-6" />
                             </div>
                             <h4 className="font-serif text-xl text-[#2D2926] mb-3">Data Visualisation</h4>
                             <p className="text-sm text-[#2D2926]/60 leading-relaxed">Building intuitive, actionable dashboards that drive executive decisions.</p>
                         </div>
                         
                         <div className="p-8 bg-[#FDF8F3]/50 rounded-3xl border border-transparent hover:border-[#D4A853]/30 hover:bg-[#FDF8F3] transition-all duration-300 group/card">
                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#D4A853] mb-6 shadow-sm group-hover/card:scale-110 transition-transform">
                                 <Database className="w-6 h-6" />
                             </div>
                             <h4 className="font-serif text-xl text-[#2D2926] mb-3">Data Engineering</h4>
                             <p className="text-sm text-[#2D2926]/60 leading-relaxed">Designing ETL/ELT pipelines and scalable database architectures.</p>
                         </div>
                         
                         <div className="p-8 bg-[#FDF8F3]/50 rounded-3xl border border-transparent hover:border-[#D4A853]/30 hover:bg-[#FDF8F3] transition-all duration-300 group/card">
                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#D4A853] mb-6 shadow-sm group-hover/card:scale-110 transition-transform">
                                 <Layers className="w-6 h-6" />
                             </div>
                             <h4 className="font-serif text-xl text-[#2D2926] mb-3">Analytics Strategy</h4>
                             <p className="text-sm text-[#2D2926]/60 leading-relaxed">Transforming messy, raw numbers into clear, measurable business impact.</p>
                         </div>
                     </div>
                  </div>
               </div>
            </section>
            
            {/* --- MENTORSHIP SECTION --- */}
            <section className="max-w-5xl mx-auto px-6 mb-32 animate-fade-in delay-150">
               <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm flex flex-col md:flex-row items-center gap-10 border border-[#2D2926]/5 group hover:border-[#D4A853]/30 transition-colors duration-500">
                  <div className="w-20 h-20 bg-[#FDF8F3] rounded-2xl flex flex-shrink-0 items-center justify-center text-[#D4A853] group-hover:scale-110 transition-transform duration-500">
                     <GraduationCap className="w-10 h-10" />
                  </div>
                  <div>
                     <h2 className="font-serif text-3xl mb-4 text-[#2D2926]">Career Mentorship</h2>
                     <p className="text-[#2D2926]/70 leading-relaxed text-lg font-light">
                        I am also a career mentor open to guiding recent graduates transitioning into the tech and data space. Particularly those coming from life sciences degrees such as <span className="font-bold text-[#D4A853]">biomedical science</span>.
                     </p>
                  </div>
               </div>
            </section>

            {/* --- PHOTOGRAPHY SECTION --- */}
            <section className="mb-32 overflow-hidden bg-[#2D2926] text-[#FDF8F3] py-24 animate-fade-in delay-200">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                     <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                           <Camera className="text-[#D4A853] w-8 h-8" />
                           <h2 className="font-serif text-4xl text-white">Photography</h2>
                        </div>
                        <p className="text-white/70 text-lg font-light leading-relaxed">
                           Another medium of mine for storytelling is film! I love the slower, more intentional process of shooting on a film camera. 
                           If you ever want a portrait or just want to collaborate, reach out!
                        </p>
                     </div>
                     <div className="flex gap-4">
                        <button onClick={scrollPrevPhoto} className="p-3 rounded-full border border-white/20 hover:bg-[#D4A853] hover:border-[#D4A853] hover:text-[#2D2926] transition-all text-white">
                           <ChevronLeft size={24} />
                        </button>
                        <button onClick={scrollNextPhoto} className="p-3 rounded-full border border-white/20 hover:bg-[#D4A853] hover:border-[#D4A853] hover:text-[#2D2926] transition-all text-white">
                           <ChevronRight size={24} />
                        </button>
                     </div>
                  </div>

                  <div className="embla" ref={emblaRefPhoto}>
                     <div className="embla__container flex gap-6">
                        {photography.map((photo, idx) => (
                           <div className="embla__slide_photo flex-none" key={idx} onClick={() => setSelectedImage(photo)}>
                              <div className="h-[350px] md:h-[450px] rounded-3xl overflow-hidden relative group border border-[#D4A853]/10">
                                 <img 
                                    src={photo} 
                                    alt={`Film photography ${idx+1}`} 
                                    className="w-auto h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    onLoad={() => emblaApiPhoto?.reInit()}
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* --- THOUGHTS SECTION --- */}
            <section className="max-w-5xl mx-auto px-6 animate-fade-in delay-300">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-[#FDF8F3] rounded-full flex items-center justify-center text-[#D4A853] border border-[#D4A853]/20">
                     <PenTool className="w-6 h-6" />
                  </div>
                  <div>
                     <h2 className="font-serif text-3xl text-[#2D2926]">My Thoughts on The Industry</h2>
                     <a href="https://substack.com/@insightswitharmando" className="text-sm font-bold text-[#D4A853] hover:text-[#b88e3e] flex items-center gap-1 uppercase tracking-widest mt-1">Read on Substack <ArrowUpRight size={14} /></a>
                  </div>
               </div>

               <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-[#2D2926]/5">
                  <p className="text-xl text-[#2D2926]/80 leading-relaxed font-light mb-10 border-b border-[#2D2926]/10 pb-10">
                     I write about data, analytics, and the messy reality of working with both, plus my journey transitioning into data and analytics engineering.
                  </p>
                  
                  <h3 className="font-bold text-[#2D2926] uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                     <BookOpen size={16} className="text-[#D4A853]"/> Topics I cover:
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                     <div className="p-6 bg-[#FDF8F3] rounded-2xl border border-transparent hover:border-[#D4A853]/30 transition-colors group cursor-pointer">
                        <h4 className="font-serif text-xl text-[#2D2926] group-hover:text-[#D4A853] transition-colors mb-3">The gap between analytics engineering and BI</h4>
                        <p className="text-sm text-[#2D2926]/60 leading-relaxed">(and why it matters)</p>
                     </div>
                     <div className="p-6 bg-[#FDF8F3] rounded-2xl border border-transparent hover:border-[#D4A853]/30 transition-colors group cursor-pointer">
                        <h4 className="font-serif text-xl text-[#2D2926] group-hover:text-[#D4A853] transition-colors mb-3">What actually makes a good data visualisation</h4>
                        <p className="text-sm text-[#2D2926]/60 leading-relaxed">Beyond just pretty charts.</p>
                     </div>
                     <div className="p-6 bg-[#FDF8F3] rounded-2xl border border-transparent hover:border-[#D4A853]/30 transition-colors group cursor-pointer">
                        <h4 className="font-serif text-xl text-[#2D2926] group-hover:text-[#D4A853] transition-colors mb-3">Your first job in data</h4>
                        <p className="text-sm text-[#2D2926]/60 leading-relaxed">The reality and challenges.</p>
                     </div>
                  </div>

                  {/* Substack Embed */}
                  <div className="mt-16 w-full flex flex-col items-center border-t border-[#2D2926]/5 pt-12">
                     <h3 className="font-bold text-[#2D2926] uppercase tracking-widest text-sm mb-8 text-center">Subscribe to my newsletter</h3>
                     <iframe src="https://insightswitharmando.substack.com/embed" width="100%" height="320" style={{ background: "transparent", maxWidth: "480px" }} frameBorder="0" scrolling="no"></iframe>
                  </div>
               </div>
            </section>
        </main>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-[#2D2926]/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <p className="font-serif text-xl font-bold text-[#2D2926]">ARMANDO<span className="text-[#D4A853]">.</span></p>
                <p className="text-xs text-[#2D2926]/50 mt-1">Data • Strategy • Engineering</p>
            </div>
            
            <div className="flex gap-6">
                <a href="mailto:armandolobete9@gmail.com" className="text-[#2D2926]/40 hover:text-[#D4A853] transition-colors p-2 hover:bg-[#FDF8F3] rounded-full">
                    <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/armando-lobete/" target="_blank" rel="noreferrer" className="text-[#2D2926]/40 hover:text-[#D4A853] transition-colors p-2 hover:bg-[#FDF8F3] rounded-full">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Arm-ando" target="_blank" rel="noreferrer" className="text-[#2D2926]/40 hover:text-[#D4A853] transition-colors p-2 hover:bg-[#FDF8F3] rounded-full">
                    <Github className="w-5 h-5" />
                </a>
                <a href="https://substack.com/@insightswitharmando" target="_blank" rel="noreferrer" className="text-[#2D2926]/40 hover:text-[#D4A853] transition-colors p-2 hover:bg-[#FDF8F3] rounded-full" aria-label="Substack">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                </a>
            </div>
            
            <div className="text-center md:text-right text-xs text-[#2D2926]/40 font-medium">
                <p>&copy; {new Date().getFullYear()} Armando. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}