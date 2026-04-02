'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroScene } from '@/app/components/3d/HeroScene'
import { Sidebar } from '@/app/components/Sidebar'
import { Navigation } from '@/app/components/Navigation'
import { About } from '@/app/components/sections/About'
import { Services } from '@/app/components/sections/Services'
import { Journey } from '@/app/components/sections/Journey'
import { Skills } from '@/app/components/sections/Skills'
import { Projects } from '@/app/components/sections/Projects'
import { Contact } from '@/app/components/sections/Contact'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'journey':
        return <Journey />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main className="w-full min-h-screen bg-bg-primary">
      {/* Hero Section with 3D Scene */}
      <section className="w-full h-screen">
        <HeroScene />
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            {/* Sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col space-y-8">
              {/* Mobile Sidebar - Show on mobile only */}
              <div className="lg:hidden w-full">
                <Sidebar />
              </div>

              {/* Navigation Tabs */}
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Content Area */}
              <div className="glass-card rounded-2xl p-8 md:p-10 lg:p-14 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-text-secondary border-t border-gray-200/20 bg-bg-primary">
        <p>© 2025 Abdul Basit Shakeel. All rights reserved.</p>
      </footer>
    </main>
  )
}
