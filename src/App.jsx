import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'
import GeneratorPage from './pages/GeneratorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SavedIdeasPage from './pages/SavedIdeasPage.jsx'
import ToastProvider from './providers/ToastProvider.jsx'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-slate-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
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
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  )
}
