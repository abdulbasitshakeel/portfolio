'use client'

export function Projects() {
  return (
    <div className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      <div className="text-center py-16">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-accent-light rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h-6m0 0h-6"
              />
            </svg>
          </div>
          <p className="text-text-secondary text-lg">
            Projects coming soon! Check back for exciting work samples and case studies.
          </p>
        </div>
      </div>
    </div>
  )
}
