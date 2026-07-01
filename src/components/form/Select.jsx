import FormError from './FormError.jsx'

/**
 * Dropdown select component for choosing one option.
 * @param {string} label - Label text (required)
 * @param {string} name - Select name/id (required)
 * @param {string} value - Selected value (required)
 * @param {function} onChange - Change handler (required)
 * @param {array} options - Array of {value, label} objects (required)
 * @param {string} placeholder - Placeholder text (default: 'Select an option')
 * @param {string} error - Error message
 * @param {boolean} required - Mark as required
 * @param {string} helpText - Helper text
 */
export default function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = null,
  disabled = false,
  required = false,
  helpText = null,
  ...rest
}) {
  const selectId = `select-${name}`
  const hasError = !!error
  const helperId = helpText ? `${selectId}-help` : undefined
  const errorId = `${selectId}-error`
  const describedBy = hasError ? errorId : helperId

  const selectClasses = [
    'w-full rounded-lg border px-sm py-xs font-medium transition-colors focus:outline-none focus:ring-2',
    'cursor-pointer',
    hasError
      ? 'border-danger bg-red-50 focus:border-danger focus:ring-danger'
      : 'border-border bg-white focus:border-primary focus:ring-primary',
    disabled ? 'cursor-not-allowed bg-surface opacity-60' : '',
  ]
    .join(' ')
    .trim()

  return (
    <div className="mb-md">
      <label htmlFor={selectId} className="mb-xs block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </label>

      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={selectClasses}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helpText && !hasError && (
        <p id={helperId} className="mt-1 text-xs text-secondary">
          {helpText}
        </p>
      )}

      <FormError id={errorId} message={error} show={hasError} />
    </div>
  )
}