/**
 * Displays error message for form fields.
 * @param {string} message - Error message to display.
 * @param {boolean} show - Whether to show the error (default: true).
 */
export default function FormError({ message, show = true, className = '', ...rest }) {
  if (!message || !show) {
    return null
  }

  return (
    <div {...rest} className={['mt-1 text-xs font-medium text-danger', className].join(' ').trim()}>
      {message}
    </div>
  )
}