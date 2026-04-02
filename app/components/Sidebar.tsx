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
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-accent shadow-xl animate-pulse-border">
        <img
          src="/profile.jpg"
          alt="Abdul Basit Shakeel Professional Photo"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold mb-4 text-text-primary">
        {personal.name}
      </h1>

      {/* Title Badge */}
      <span className="inline-block px-5 py-1 text-sm uppercase tracking-wider font-semibold rounded-full mb-4 bg-accent-light text-accent">
        {personal.title}
      </span>

      {/* Bio */}
      <p className="text-center leading-relaxed mt-2 mb-8 max-w-xs text-text-secondary">
        {personal.bio.split('\n')[0]}
      </p>

      {/* Action Buttons */}
      <div className="flex w-full gap-4 mb-4">
        <a
          href={personal.resumeUrl}
          download
          className="flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-accent to-blue-600 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
        <a
          href={`mailto:${personal.emailWork}?subject=Hiring%20Inquiry&body=Hi%20Basit,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
          className="flex-1 py-3 px-4 rounded-xl font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Hire Me
        </a>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 pt-6 justify-center w-full border-t border-gray-200/50 text-text-secondary mt-auto">
        {social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            aria-label={link.label}
          >
            {iconMap[link.icon]}
          </a>
        ))}
      </div>
    </aside>
  )
}
