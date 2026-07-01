import Navigation from './Navigation.jsx'

const navItems = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'Generate', path: '/generate', id: 'generate' },
  { label: 'Saved Ideas', path: '/saved', id: 'saved' },
  { label: 'About', path: '/about', id: 'about' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-lg sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 mb-lg">
          <div className="text-center md:text-left">
            <h3 className="mb-sm text-lg font-bold text-primary">StartupAI</h3>
            <p className="text-sm text-secondary">AI-Powered Startup Idea Generator</p>
          </div>

          <div className="text-center md:text-right">
            <Navigation items={navItems} variant="horizontal" />
          </div>
        </div>

        <div className="mb-lg border-t border-border" />

        <div className="flex flex-col items-center justify-between gap-md md:flex-row">
          <p className="text-xs text-secondary">© 2024 StartupAI. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="mailto:contact@startupai.dev"
              className="text-secondary transition-colors hover:text-primary"
            >
              Contact
            </a>
            <span className="text-border">|</span>
            <a href="#privacy" className="text-secondary transition-colors hover:text-primary">
              Privacy
            </a>
            <span className="text-border">|</span>
            <a href="#terms" className="text-secondary transition-colors hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}