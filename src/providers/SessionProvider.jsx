import { useEffect, useState } from 'react'
import SessionContext from '../contexts/SessionContext.jsx'
import { generateSessionId } from '../services/firebaseService.js'

const SESSION_STORAGE_KEY = 'startupai_sessionId'

export default function SessionProvider({ children }) {
  const [sessionId, setSessionId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const initializeSession = () => {
      try {
        setIsLoading(true)
        setError(null)

        const storedSessionId = localStorage.getItem(SESSION_STORAGE_KEY)

        if (storedSessionId) {
          setSessionId(storedSessionId)
          return
        }

        const newSessionId = generateSessionId()
        localStorage.setItem(SESSION_STORAGE_KEY, newSessionId)
        setSessionId(newSessionId)
      } catch (sessionError) {
        console.error('Session initialization error:', sessionError)
        setError('Failed to initialize session')

        try {
          setSessionId(generateSessionId())
        } catch {
          setSessionId(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    initializeSession()
  }, [])

  const value = {
    sessionId,
    isLoading,
    error,
  }

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}