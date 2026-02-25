import { Briefcase, GraduationCap, Code } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="mb-12">
      <h1 className="text-3xl md:text-4xl mb-2">Career Snapshot</h1>
      <div className="w-16 h-1 bg-cyan-400 mb-10"></div>

      {/* Combined Timeline - Experience & Education */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl">Experience & Education</h2>
        </div>

        <div className="relative ml-5 border-l-2 border-cyan-400/30 pl-8">
          {/* Experience Item 1 */}
          <div className="relative mb-10">
            <div className="absolute -left-[41px] w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-[#0a0a0a]"></div>
            <div>
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-medium">Software Engineer Intern (Full-Stack)</h3>
                  <p className="text-cyan-400 text-sm">IMTG • Sydney, Australia</p>
                </div>
                <p className="text-xs text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded">Jan 2026 — Present</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Building full-stack web platforms using Svelte, TypeScript, Node.js, and PostgreSQL with end-to-end ownership.
                Designed RESTful APIs, containerized services with Docker, and implemented CI/CD pipelines for reliable deployments.
              </p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative mb-10">
            <div className="absolute -left-[41px] w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-[#0a0a0a]"></div>
            <div>
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-medium">Front-End Developer Intern</h3>
                  <p className="text-cyan-400 text-sm">JD.com • Remote</p>
                </div>
                <p className="text-xs text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded">Nov 2025 — Jan 2026</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Developed enterprise web interfaces using React (Next.js) and TypeScript. Built interactive dashboards with D3.js and Chart.js,
                optimized rendering performance for large datasets, and collaborated in Agile sprint cycles.
              </p>
            </div>
          </div>

          {/* Education Item */}
          <div className="relative">
            <div className="absolute -left-[41px] w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-[#0a0a0a]"></div>
            <div>
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-medium">Master of Information Technology</h3>
                  <p className="text-cyan-400 text-sm">University of New South Wales (UNSW) • Sydney, Australia</p>
                </div>
                <p className="text-xs text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded">2023 — 2025</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
              
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-400/10 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-2xl">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Languages */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">JavaScript</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">TypeScript</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Python</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">React</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Next.js</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Svelte</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">HTML/CSS</span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Node.js</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Express.js</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">RESTful APIs</span>
            </div>
          </div>

          {/* Database */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">PostgreSQL</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Supabase</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Prisma</span>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Docker</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">GitHub Actions</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">AWS</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Vercel</span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors">
            <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Git</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Postman</span>
              <span className="px-3 py-1 bg-[#0a0a0a] text-sm rounded text-gray-300">Jira</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
