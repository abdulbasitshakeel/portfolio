'use client'

import { portfolioData } from '@/app/data/portfolio'
import { 
  Linkedin, 
  Github, 
  Facebook, 
  Briefcase, 
  MessageCircle,
  Download,
  Mail
} from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-6 h-6" />,
  github: <Github className="w-6 h-6" />,
  facebook: <Facebook className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  'message-circle': <MessageCircle className="w-6 h-6" />,
}

export function Sidebar() {
  const { personal, social } = portfolioData

  return (
    <aside className="sticky top-8 w-full lg:w-80 glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-fit animate-slideInLeft">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-accent/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="/profile.jpg"
          alt="Abdul Basit Shakeel Professional Photo"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Name */}
      <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl md:text-3xl font-bold mb-2 text-text-primary">
        {personal.name}
      </h2>

      {/* Title */}
      <p className="text-sm uppercase tracking-widest font-medium text-accent mb-4">
        {personal.title}
      </p>

      {/* Bio */}
      <p className="text-center text-sm leading-relaxed mb-8 text-text-secondary">
        {personal.bio.split('\n')[0]}
      </p>

      {/* Action Buttons */}
      <div className="flex w-full gap-3 mb-6">
        <a
          href={personal.resumeUrl}
          download
          className="flex-1 py-2 px-3 rounded-lg font-medium text-white text-sm transition-all bg-gradient-to-r from-accent to-purple-400 hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
        <a
          href={`mailto:${personal.emailWork}?subject=Hiring%20Inquiry`}
          className="flex-1 py-2 px-3 rounded-lg font-medium text-accent text-sm border border-accent/30 hover:bg-accent/5 transition-all flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Hire Me
        </a>
      </div>

      {/* Social Links */}
      <div className="flex space-x-5 pt-6 justify-center w-full border-t border-accent/10 text-text-secondary mt-auto">
        {social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            aria-label={link.label}
          >
            {iconMap[link.icon]}
          </a>
        ))}
      </div>
    </aside>
  )
}
