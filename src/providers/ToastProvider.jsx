import { useState } from 'react'
import ToastContext from '../contexts/ToastContext.jsx'
import ToastContainer from '../components/feedback/ToastContainer.jsx'

const DEFAULT_SUCCESS_DURATION = 3000
const DEFAULT_ERROR_DURATION = 4000

const generateUniqueId = () => `toast-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = (id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }

  const showToast = (message, type = 'info', duration) => {
    const resolvedDuration =
      duration ?? (type === 'error' ? DEFAULT_ERROR_DURATION : DEFAULT_SUCCESS_DURATION)
    const id = generateUniqueId()

    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id,
        message,
        type,
        duration: resolvedDuration,
      },
    ])

    setTimeout(() => {
      removeToast(id)
    }, resolvedDuration)
  }

  const value = {
    toasts,
    showToast,
    removeToast,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}