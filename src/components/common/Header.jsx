import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation.jsx'

const navItems = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'Generate', path: '/generate', id: 'generate' },
  { label: 'Saved Ideas', path: '/saved', id: 'saved' },
  { label: 'About', path: '/about', id: 'about' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => {
            navigate('/')
            setIsMobileMenuOpen(false)
          }}
          className="text-2xl font-bold text-primary transition-opacity hover:opacity-80"
          aria-label="Go to home"
        >
          StartupAI
        </button>

        <div className="hidden sm:block">
          <Navigation items={navItems} variant="horizontal" onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="text-2xl text-primary transition-colors hover:text-blue-700 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-border bg-white sm:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4">
            <Navigation
              items={navItems}
              variant="vertical"
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  )
}