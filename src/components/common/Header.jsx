import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { THEME } from '../../config/theme.config.js'

const navItems = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'Generate', path: '/generate', id: 'generate' },
  { label: 'Saved Ideas', path: '/saved', id: 'saved' },
  { label: 'About', path: '/about', id: 'about' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navTextClass = {
    primary: THEME.colors.primary === '#3B82F6' ? 'text-primary' : 'text-slate-900',
    secondary: THEME.colors.text.secondary === '#6B7280' ? 'text-slate-500' : 'text-slate-600',
  }

  const stickyClass = THEME.zIndex.sticky === 20 ? 'z-20' : 'z-10'

  const handleNavClick = (path) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 ${stickyClass} w-full border-b border-border bg-white shadow-sm`}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className={`text-2xl font-bold ${navTextClass.primary} transition-opacity hover:opacity-80`}
          aria-label="Go to home"
        >
          StartupAI
        </button>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={[
                'border-b-2 border-transparent pb-1 text-sm font-medium transition-colors',
                isActive(item.path)
                  ? `${navTextClass.primary} border-primary font-bold`
                  : `${navTextClass.secondary} hover:text-primary`,
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className={`text-2xl ${navTextClass.primary} transition-colors hover:text-blue-700 sm:hidden`}
          aria-label={`Toggle navigation menu below ${THEME.breakpoints.tablet}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-border bg-white sm:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={[
                  'w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors',
                  isActive(item.path)
                    ? 'bg-blue-100 text-primary font-bold'
                    : `${navTextClass.secondary} hover:bg-surface hover:text-primary`,
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}