/**
 * Small label component for displaying metadata and categories.
 *
 * Variants: primary, secondary, success, danger, warning, info
 * Sizes: sm, md (default), lg
 *
 * @param {node} children - Badge text (required)
 * @param {string} variant - Color variant (default: "primary")
 * @param {string} size - Badge size (default: "md")
 * @param {string} className - Additional Tailwind classes
 */
export default function Badge({ children, variant = 'primary', size = 'md', className = '' }) {
  const variantStyles = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-green-100 text-green-800',
    success: 'bg-green-100 text-emerald-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-cyan-700',
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs rounded',
    md: 'px-3 py-1 text-sm rounded-md',
    lg: 'px-4 py-2 text-base rounded-lg',
  }

  const badgeClass = [
    'inline-block font-medium',
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={badgeClass}>{children}</span>
}