/**
 * Animated loading spinner for async operations.
 *
 * Shows a rotating SVG spinner with optional message.
 * Can be used inline or as full-screen overlay.
 *
 * Sizes: sm, md (default), lg
 *
 * @param {string} size - Spinner size (default: "md")
 * @param {string} message - Optional loading message
 * @param {boolean} fullScreen - Show as full-screen overlay (default: false)
 * @param {string} className - Additional Tailwind classes
 */
export default function LoadingSpinner({ size = 'md', message = '', fullScreen = false, className = '' }) {
  const spinnerSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  const containerClass = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/50'
    : 'flex items-center justify-center'

  return (
    <div className={[containerClass, className].filter(Boolean).join(' ')}>
      <div className="flex flex-col items-center gap-md">
        <svg
          className={[spinnerSizes[size] || spinnerSizes.md, 'animate-spin text-primary'].join(' ')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>

        {message && <p className={[textSizes[size] || textSizes.md, 'text-center font-medium text-secondary'].join(' ')}>{message}</p>}
      </div>
    </div>
  )
}