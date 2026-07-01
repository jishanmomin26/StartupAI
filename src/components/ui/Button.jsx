/**
 * Reusable button component with multiple variants and sizes.
 *
 * Variants:
 * - primary: Blue button for main actions
 * - secondary: Outlined button for secondary actions
 * - danger: Red button for destructive actions
 *
 * Sizes:
 * - sm: Small button
 * - md: Standard button (default)
 * - lg: Large button for prominent actions
 *
 * @param {node} children - Button text/content (required)
 * @param {function} onClick - Click handler
 * @param {string} variant - "primary", "secondary", or "danger" (default: "primary")
 * @param {string} size - "sm", "md", or "lg" (default: "md")
 * @param {boolean} disabled - Disable button
 * @param {boolean} loading - Show loading state
 * @param {boolean} fullWidth - Make button full width
 * @param {string} className - Additional Tailwind classes
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 disabled:shadow-none'

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-blue-600 focus:ring-primary',
    secondary: 'border-2 border-primary bg-transparent text-primary hover:bg-blue-50 focus:ring-primary',
    danger: 'bg-danger text-white hover:bg-red-600 focus:ring-danger',
  }

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const widthStyles = fullWidth ? 'w-full' : ''
  const disabledStyles = disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
  const buttonClass = [
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    widthStyles,
    disabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClass}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}