# Abdul Basit Shakeel - Interactive Portfolio

A modern, immersive React + Three.js + GSAP interactive portfolio website featuring cinematic UI, 3D visuals, and smooth animations.

## Features

- **Interactive 3D Hero Section** - WebGL-powered animated sphere with particle effects
- **Smooth Animations** - GSAP and Framer Motion for fluid scroll and transition animations
- **Custom Cursor** - Interactive cursor follower with hover effects
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Glass Morphism UI** - Modern frosted glass card design with backdrop blur
- **Smooth Page Transitions** - Animated content transitions between tabs
- **Performance Optimized** - Code splitting, lazy loading, and WebGL optimization
- **SEO Optimized** - Next.js metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber & Drei
- **Animations**: GSAP, Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Installation

### Using shadcn CLI (Recommended)

```bash
npx shadcn-cli@latest init
# or
npx create-next-app@latest my-portfolio --typescript --tailwind
cd my-portfolio
npm install
```

### Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/abdulbasitshakeel/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── components/
│   ├── 3d/
│   │   └── HeroScene.tsx          # 3D WebGL scene
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Journey.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── AnimatedCard.tsx           # Reusable animated card component
│   ├── CustomCursor.tsx           # Custom cursor interaction
│   ├── Navigation.tsx             # Tab navigation
│   ├── Sidebar.tsx                # Profile sidebar
│   ├── ScrollToTop.tsx            # Scroll-to-top button
│   └── PageTransition.tsx         # Page transition effects
├── data/
│   └── portfolio.ts               # Portfolio content and data
├── hooks/
│   └── useScrollAnimation.ts      # GSAP scroll animation hook
├── layout.tsx                     # Root layout
├── page.tsx                       # Main portfolio page
├── globals.css                    # Global styles and animations
└── data.portfolio.ts              # All portfolio content
```

## Customization

### Update Portfolio Content

Edit `app/data/portfolio.ts` to update:
- Personal information
- Social media links
- Services
- Experience and education
- Skills and proficiencies
- Contact information

### Customize Colors

Update the CSS variables in `app/globals.css`:

```css
:root {
  --accent: #333366;           /* Primary brand color */
  --accent-light: #E8E8F5;     /* Light accent for backgrounds */
  --bg-primary: #F5F6FA;       /* Primary background */
  --text-primary: #1F1F2E;     /* Primary text color */
  --text-secondary: #5C5C80;   /* Secondary text color */
}
```

Or update the Tailwind config in `tailwind.config.ts`:

```typescript
colors: {
  accent: '#333366',
  'accent-light': '#E8E8F5',
  'bg-primary': '#F5F6FA',
  'text-primary': '#1F1F2E',
  'text-secondary': '#5C5C80',
}
```

### Add Projects

Update the Projects section in `app/components/sections/Projects.tsx` to showcase your work.

## Performance Optimization

The portfolio includes several optimizations:

- **Code Splitting**: Route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component for automatic optimization
- **WebGL Optimization**: Proper Three.js resource cleanup and vertex optimization
- **Lazy Loading**: Intersection Observer for content-triggered animations
- **CSS-in-JS**: Minimal CSS with Tailwind's tree-shaking

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Mobile browsers with WebGL support are fully supported with touch-optimized interactions.

## Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

For questions or suggestions, reach out to:
- Email: basitshakeel2005@gmail.com
- LinkedIn: [Abdul Basit Shakeel](https://linkedin.com/in/abdulbasitshakeel)
- GitHub: [@abdulbasitshakeel](https://github.com/abdulbasitshakeel)

---

Built with ❤️ using React, Three.js, and modern web technologies.
