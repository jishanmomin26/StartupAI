import { createBrowserRouter, Navigate, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import GeneratorPage from './pages/GeneratorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SavedIdeasPage from './pages/SavedIdeasPage.jsx'

function RootLayout() {
  const navLinkClassName = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
      isActive ? 'bg-primary text-white' : 'bg-white text-slate-700 hover:bg-surface',
    ].join(' ')

  return (
    <div className="min-h-screen flex flex-col bg-surface text-slate-900">
      <header className="border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">StartupAI</p>
            <p className="text-sm text-slate-500">AI-Powered Startup Idea Generator</p>
          </div>
          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/generate" className={navLinkClassName}>
              Generator
            </NavLink>
            <NavLink to="/saved" className={navLinkClassName}>
              Saved Ideas
            </NavLink>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'generate',
        element: <GeneratorPage />,
      },
      {
        path: 'saved',
        element: <SavedIdeasPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
