import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Renders a navigation menu.
 * @param {Array} items - Navigation items with label, path, id.
 * @param {string} variant - "horizontal" or "vertical" layout.
 * @param {Function} onItemClick - Callback when item clicked.
 */
export default function Navigation({ items, variant = 'horizontal', onItemClick }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (path) => {
    navigate(path)

    if (onItemClick) {
      onItemClick(path)
    }
  }

  const isActive = (path) => location.pathname === path

  const layoutClasses =
    variant === 'vertical'
      ? 'flex flex-col gap-3'
      : 'flex flex-row flex-wrap items-center gap-6'

  return (
    <nav className={layoutClasses} aria-label="Navigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item.path)}
          aria-current={isActive(item.path) ? 'page' : undefined}
          className={[
            'transition-colors font-medium',
            isActive(item.path)
              ? 'text-primary font-bold'
              : 'text-secondary hover:text-primary',
          ].join(' ')}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}