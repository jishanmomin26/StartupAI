import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { validateEnvironment } from './config/validateEnv.js'
import './styles/global.css'
import App from './App.jsx'

validateEnvironment()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
