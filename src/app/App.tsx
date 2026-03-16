import { Mail, MapPin, Linkedin, Github, Sparkles, Briefcase, Download } from 'lucide-react';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { useState } from 'react';
import { BrushCursor } from './components/BrushCursor';
import { PaintText } from './components/PaintText';

export default function App() {
  const [activeSection, setActiveSection] = useState<'about' | 'resume' | 'portfolio' | 'contact' | 'gallery'>('about');

  return (
    <div className="brush-cursor-zone min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <BrushCursor />
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
              <PaintText as="h2" className="text-xl mb-1 italic" text="Zetphy Deng" />
              <PaintText as="p" className="text-sm text-gray-400" text="Software Engineer" />
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
                <PaintText text="About" />
              </button>
              <button
                onClick={() => setActiveSection('resume')}
                className={`hover:text-white transition-colors ${activeSection === 'resume' ? 'text-white' : 'text-gray-400'}`}
              >
                <PaintText text="Resume" />
              </button>
              <button
                onClick={() => setActiveSection('portfolio')}
                className={`hover:text-white transition-colors ${activeSection === 'portfolio' ? 'text-white' : 'text-gray-400'}`}
              >
                <PaintText text="Portfolio" />
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`hover:text-white transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}
              >
                <PaintText text="Contact" />
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className={`hover:text-white transition-colors ${activeSection === 'gallery' ? 'text-white' : 'text-gray-400'}`}
              >
                <PaintText text="Gallery" />
              </button>
            </nav>

            {/* Digital Identity Section */}
            {activeSection === 'about' && (
              <section className="mb-12">
                <PaintText as="h1" className="text-3xl md:text-4xl mb-2" text="Digital Identity" />
                <div className="w-16 h-1 bg-white mb-6"></div>

                <div className="space-y-4 text-gray-300 mb-10">
                  <PaintText as="p" text="Hi, I'm Zetphy." />
                  <PaintText
                    as="p"
                    text="I'm a full-stack developer based in Sydney. I enjoy building web apps that are simple to use on the surface and solid under the hood."
                  />
                  <PaintText
                    as="p"
                    text="Lately I've been spending a lot of time exploring AI-powered applications - especially projects that combine LLMs with real products. Most of the time you'll find me building, experimenting with new tools, and trying to turn ideas into things people can actually use."
                  />
                </div>

                {/* Highlights & Successes */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5" />
                    <PaintText as="h2" className="text-xl" text="Highlights & Successes" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <PaintText as="div" className="text-3xl md:text-4xl mb-2" text="2+" />
                      <PaintText as="div" className="text-sm text-gray-400 uppercase tracking-wide" text="Years of Experience" />
                    </div>
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <PaintText as="div" className="text-3xl md:text-4xl mb-2" text="15+" />
                      <PaintText as="div" className="text-sm text-gray-400 uppercase tracking-wide" text="RESTful APIs Built" />
                    </div>
                    <div className="bg-[#0a0a0a] p-6 rounded-lg">
                      <PaintText as="div" className="text-3xl md:text-4xl mb-2" text="3" />
                      <PaintText as="div" className="text-sm text-gray-400 uppercase tracking-wide" text="Major Projects" />
                    </div>
                  </div>
                </div>

                {/* Featured Portfolios */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5" />
                    <PaintText as="h2" className="text-xl" text="Featured Portfolios" />
                  </div>
                  <PaintText as="p" className="text-gray-400 text-sm mb-6" text="A glimpse into my professional journey" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Portfolio Item 1 - Interview */}
                    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden group hover:ring-2 hover:ring-gray-700 transition-all">
                      <a
                        href="https://ai-interview-coach-app.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video overflow-hidden"
                      >
                        <img
                          src="/interview.pic.jpg"
                          alt="Interview AI Interview Coach"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-3 mb-3">
                          <a
                            href="https://ai-interview-coach-app.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            🌐 Live Demo
                          </a>
                        </div>
                        <PaintText as="h3" className="text-lg mb-2" text="Interview - AI Interview Coach" />
                        <PaintText
                          as="p"
                          className="text-sm text-gray-400"
                          text="An AI-powered interview practice app that helps users prepare with realistic mock interviews and coaching feedback."
                        />
                      </div>
                    </div>

                    {/* Portfolio Item 2 - GeoNote */}
                    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden group hover:ring-2 hover:ring-gray-700 transition-all">
                      <a
                        href="https://note-five-mu.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video overflow-hidden"
                      >
                        <img
                          src="/geonote.jpg"
                          alt="GeoNote 3D Travel Journal"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                      <div className="p-5">
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
                        <PaintText as="h3" className="text-lg mb-2" text="GeoNote - 3D Travel Journal" />
                        <PaintText
                          as="p"
                          className="text-sm text-gray-400"
                          text="A spatial note-taking app that lets you pin your thoughts to locations on an interactive 3D globe."
                        />
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
