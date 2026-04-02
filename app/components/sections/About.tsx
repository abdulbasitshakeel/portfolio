'use client'

import { portfolioData } from '@/app/data/portfolio'
import { Briefcase, Lightbulb, Star } from 'lucide-react'

export function About() {
  const { personal } = portfolioData

  return (
    <div className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          Hello! I&apos;m Abdul Basit.
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
        <p className="border-l-4 border-accent-light pl-4 py-2">
          A passionate Frontend Developer with a keen interest in building innovative and user focused digital solutions. My journey in web development started with a drive to create impactful online experiences that leave a lasting impression.
        </p>
        <p className="border-l-4 border-accent-light pl-4 py-2">
          With a solid foundation in both frontend and backend technologies, I specialize in crafting seamless, responsive websites and web applications that prioritize user experience. I enjoy working in dynamic environments, where I can push the limits of my creativity and technical skills to deliver cutting-edge solutions.
        </p>
        <p className="border-l-4 border-accent-light pl-4 py-2">
          Whether it&apos;s designing beautiful interfaces or building scalable web applications, my focus remains on creating solutions that are both efficient and easy to use. I am committed to staying on top of the latest industry trends and continuously improving my skills to stay ahead in the rapidly evolving field of web development.
        </p>
        <p className="border-l-4 border-accent pl-4 py-2 bg-accent-light/20 rounded-r-lg font-semibold">
          Let&apos;s work together to turn your ideas into a remarkable digital experience.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-3xl font-bold mb-8 text-text-primary">What I Do</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-accent-light/30 hover:bg-accent-light/60 transition-colors duration-300">
            <Briefcase className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <p className="text-lg text-text-secondary">
                <strong className="font-semibold text-text-primary">Professional Role:</strong> Frontend Developer at EmpireOne BPO Solutions, Inc.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg bg-accent-light/30 hover:bg-accent-light/60 transition-colors duration-300">
            <Lightbulb className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <p className="text-lg text-text-secondary">
                <strong className="font-semibold text-text-primary">Learning:</strong> Advancing expertise in React.js and modern frontend architectures.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg bg-accent-light/30 hover:bg-accent-light/60 transition-colors duration-300">
            <Star className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <p className="text-lg text-text-secondary">
                <strong className="font-semibold text-text-primary">Specialization:</strong> User Interface Development, Responsive Design, and Web Performance Optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
