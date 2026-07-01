import FormError from './FormError.jsx'

/**
 * Reusable text input component with label and error handling.
 * @param {string} label - Label text (required).
 * @param {string} name - Input name/id (required).
 * @param {string} value - Current value (required).
 * @param {function} onChange - Change handler (required).
 * @param {string} type - Input type: text, email, number, password (default: 'text').
 * @param {string} placeholder - Placeholder text.
 * @param {string} error - Error message to display.
 * @param {boolean} disabled - Disable input.
 * @param {boolean} required - Mark field as required.
 * @param {string} helpText - Helper text below input.
 * @param {number} maxLength - Max character length.
 */
export default function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = null,
  disabled = false,
  required = false,
  helpText = null,
  maxLength = null,
  rows = 1,
  ...rest
}) {
  const inputId = `input-${name}`
  const hasError = !!error
  const helperId = helpText ? `${inputId}-help` : undefined
  const errorId = `${inputId}-error`
  const describedBy = hasError ? errorId : helperId
  const sharedClasses = [
    'w-full rounded-lg border px-sm py-xs font-medium transition-colors focus:outline-none focus:ring-2',
    hasError
      ? 'border-danger bg-red-50 focus:border-danger focus:ring-danger'
      : 'border-border bg-white focus:border-primary focus:ring-primary',
    disabled ? 'cursor-not-allowed bg-surface opacity-60' : '',
  ]
    .join(' ')
    .trim()

  return (
    <div className="mb-md">
      <label htmlFor={inputId} className="mb-xs block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </label>

      {rows > 1 ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          className={sharedClasses}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          {...rest}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className={sharedClasses}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          {...rest}
        />
      )}

      {helpText && !hasError && (
        <p id={helperId} className="mt-1 text-xs text-secondary">
          {helpText}
        </p>
      )}

      <FormError id={errorId} message={error} show={hasError} />
    </div>
  )
}