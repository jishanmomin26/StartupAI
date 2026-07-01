import { useEffect } from 'react'

/**
 * Auto-dismissing notification toast.
 *
 * Types: success, error, info, warning
 * Positions: top-right, top-left, bottom-right, bottom-left
 * Auto-dismisses after duration (default: 3 seconds)
 *
 * @param {string} message - Toast message (required)
 * @param {string} type - Notification type (default: "info")
 * @param {number} duration - Duration before auto-dismiss in ms (default: 3000)
 * @param {function} onClose - Called when toast closes
 * @param {string} position - Position on screen (default: "top-right")
 */
export default function Toast({ message, type = 'info', duration = 3000, onClose, position = 'top-right', id }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (onClose) {
        onClose(id)
      }
    }, duration)

    return () => window.clearTimeout(timer)
  }, [duration, onClose, id])

  const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  }

  const icons = {
    success: '✓',
    error: '✗',
    info: 'ℹ',
    warning: '!',
  }

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }

  const toastClass = [
    'fixed z-50 max-w-sm cursor-pointer rounded-lg border-l-4 bg-white p-md shadow-lg transition-shadow hover:shadow-xl animate-fade-in',
    positionStyles[position] || positionStyles['top-right'],
    typeStyles[type] || typeStyles.info,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClose = () => {
    if (onClose) {
      onClose(id)
    }
  }

  return (
    <div className={toastClass} onClick={handleClose} role="status" aria-live="polite">
      <span className="flex-shrink-0 text-xl font-bold leading-none">{icons[type] || icons.info}</span>

      <p className="flex-grow text-sm font-medium">{message}</p>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handleClose()
        }}
        className="ml-2 text-lg leading-none opacity-70 transition-opacity hover:opacity-100"
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  )
}