'use client'

import { portfolioData } from '@/app/data/portfolio'
import { Briefcase, Lightbulb, Star } from 'lucide-react'

export function About() {
  const { personal } = portfolioData

  return (
    <div className="space-y-12">
      <div>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
          Hello! I&apos;m Abdul Basit.
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full" />
      </div>

      <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-secondary">
        <p className="border-l-4 border-accent/30 pl-4 py-3">
          A passionate Frontend Developer with a keen interest in building innovative and user-focused digital solutions. My journey in web development started with a drive to create impactful online experiences that leave a lasting impression.
        </p>
        <p className="border-l-4 border-accent/30 pl-4 py-3">
          With a solid foundation in both frontend and backend technologies, I specialize in crafting seamless, responsive websites and web applications that prioritize user experience. I enjoy working in dynamic environments where I can push the limits of my creativity and technical skills.
        </p>
        <p className="border-l-4 border-accent/30 pl-4 py-3">
          Whether designing beautiful interfaces or building scalable applications, my focus is on creating efficient, user-friendly solutions. I&apos;m committed to staying current with industry trends and continuously improving my craft.
        </p>
        <p className="border-l-4 border-accent pl-4 py-3 bg-gradient-to-r from-accent/5 to-purple-200/10 rounded-r-lg font-medium text-accent">
          Let&apos;s work together to turn your ideas into a remarkable digital experience.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl md:text-3xl font-bold text-text-primary">
          What I Do
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-start space-x-4 p-5 rounded-lg border border-accent/10 bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-purple-200/20 flex items-center justify-center flex-shrink-0 text-accent">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-text-primary text-sm md:text-base">Professional Role</p>
              <p className="text-text-secondary text-sm">Frontend Developer at EmpireOne BPO Solutions, Inc.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 rounded-lg border border-accent/10 bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-purple-200/20 flex items-center justify-center flex-shrink-0 text-accent">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-text-primary text-sm md:text-base">Learning & Growth</p>
              <p className="text-text-secondary text-sm">Advancing expertise in React.js and modern frontend architectures.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 rounded-lg border border-accent/10 bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-purple-200/20 flex items-center justify-center flex-shrink-0 text-accent">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-text-primary text-sm md:text-base">Specialization</p>
              <p className="text-text-secondary text-sm">UI Development, Responsive Design, and Web Performance Optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
