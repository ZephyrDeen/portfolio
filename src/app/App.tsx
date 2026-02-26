import { Mail, MapPin, Instagram, Linkedin, Facebook, Youtube, Github, Sparkles, Briefcase, FileText, Download } from 'lucide-react';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'about' | 'resume' | 'portfolio' | 'contact' | 'gallery'>('about');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">

          {/* Left Sidebar - Profile Card */}
          <aside className="bg-[#1a1a1a] rounded-2xl p-6 h-fit sticky top-8">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 mx-auto">
              <img
                src="/zetphy_img.jpg"
                alt="Zetphy Deng"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h2 className="text-xl mb-1 italic">Zetphy Deng</h2>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>

            <div className="w-full h-px bg-gray-700 mb-6"></div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
                  <a href="mailto:de4rank@gmail.com" className="text-sm hover:text-white transition-colors">
                    de4rank@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Location</p>
                  <p className="text-sm">Sydney, Australia</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-700 mb-6"></div>

            {/* Social Media */}
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://www.linkedin.com/in/wenxin-zetphy-deng-07b3a830a/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#252525] rounded hover:bg-[#333] transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/ZephyrDeen" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#252525] rounded hover:bg-[#333] transition-colors flex items-center justify-center">
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full h-px bg-gray-700 my-6"></div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </aside>

          {/* Right Content Area */}
          <main className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 lg:p-10">
            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 mb-10 justify-end text-sm">
              <button
                onClick={() => setActiveSection('about')}
                className={`hover:text-white transition-colors ${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveSection('resume')}
                className={`hover:text-white transition-colors ${activeSection === 'resume' ? 'text-white' : 'text-gray-400'}`}
              >
                Resume
              </button>
              <button
                onClick={() => setActiveSection('portfolio')}
                className={`hover:text-white transition-colors ${activeSection === 'portfolio' ? 'text-white' : 'text-gray-400'}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`hover:text-white transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}
              >
                Contact
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className={`hover:text-white transition-colors ${activeSection === 'gallery' ? 'text-white' : 'text-gray-400'}`}
              >
                Gallery
              </button>
            </nav>

            {/* Digital Identity Section */}
            {activeSection === 'about' && (
              <section className="mb-12">
                <h1 className="text-3xl md:text-4xl mb-2">Digital Identity</h1>
                <div className="w-16 h-1 bg-white mb-6"></div>

                <div className="space-y-4 text-gray-300 mb-10">
                  <p>
                    I'm Zetphy Deng, a Full-Stack Software Engineer based in Sydney, Australia. Passionate about building
                    user-facing features with modern frameworks and backend services that power scalable applications.
                  </p>
                  <p>
                    I hold a Master's degree in Information Technology from the University of New South Wales (UNSW).
                    Currently working as a Software Engineer Intern at IMTG, where I build full-stack web platforms and
                    integrate robust backend services. My passion for continuous learning drives me to stay up-to-date with
                    the latest technologies and best practices in software development.
                  </p>
                </div>

                {/* Highlights & Successes */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-xl">Highlights & Successes</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <div className="text-3xl md:text-4xl mb-2">2+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">Years of Experience</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <div className="text-3xl md:text-4xl mb-2">15+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">RESTful APIs Built</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <div className="text-3xl md:text-4xl mb-2">3+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">Major Projects</div>
                    </div>
                  </div>
                </div>

                {/* Featured Portfolios */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5" />
                    <h2 className="text-xl">Featured Portfolios</h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">A glimpse into my professional journey</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Portfolio Item 1 - GeoNote */}
                    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden group hover:ring-2 hover:ring-gray-700 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src="/geonote.jpg"
                          alt="GeoNote 3D Travel Journal"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        {/* Links */}
                        <div className="flex flex-wrap gap-3 mb-3">
                          <a
                            href="https://note-five-mu.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            🌐 Live Demo
                          </a>
                          <a
                            href="https://github.com/ZephyrDeen/note"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            ⭐ GitHub
                          </a>
                        </div>
                        <h3 className="text-lg mb-2">GeoNote - 3D Travel Journal</h3>
                        <p className="text-sm text-gray-400">
                          A spatial note-taking app that lets you pin your thoughts to locations on an interactive 3D globe.
                        </p>
                      </div>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden group cursor-pointer hover:ring-2 hover:ring-gray-700 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                          alt="RentWeb Property Management"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-gray-500 uppercase mb-2">Full-Stack Project</p>
                        <h3 className="text-lg mb-2">RentWeb - Property Management System</h3>
                        <p className="text-sm text-gray-400">
                          A secure multi-tenant platform with RBAC, real-time WebSocket communication, and 15+ RESTful APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Resume Section */}
            {activeSection === 'resume' && <Resume />}

            {/* Portfolio Section */}
            {activeSection === 'portfolio' && <Portfolio />}

            {/* Contact Section */}
            {activeSection === 'contact' && <Contact />}

            {/* Gallery Section */}
            {activeSection === 'gallery' && <Gallery />}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2026 Zetphy Deng | All Rights Reserved
      </footer>
    </div>
  );
}