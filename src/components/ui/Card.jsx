/**
 * Container component for organizing and displaying content.
 *
 * Simple wrapper with white background, border, shadow, and padding.
 * Can be made hoverable or clickable for interactive use.
 *
 * @param {node} children - Card content (required)
 * @param {function} onClick - Click handler (makes card interactive)
 * @param {boolean} hoverable - Add hover effect
 * @param {string} className - Additional Tailwind classes
 */
export default function Card({ children, onClick, className = '', hoverable = false, ...rest }) {
  const baseStyles = 'rounded-lg border border-border bg-white p-md shadow-sm'

  const interactive = hoverable || onClick
  const hoverStyles = interactive ? 'transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer' : ''

  const cardClass = [baseStyles, hoverStyles, className].filter(Boolean).join(' ')
  const handleKeyDown = (event) => {
    if (!interactive) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (onClick) {
        onClick(event)
      }
    }
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      className={cardClass}
      {...rest}
    >
      {children}
    </div>
  )
}