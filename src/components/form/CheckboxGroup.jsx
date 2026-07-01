import FormError from './FormError.jsx'

/**
 * Multiple checkbox component for selecting multiple values.
 * @param {string} label - Group label (required)
 * @param {string} name - Group name (required)
 * @param {array} value - Array of selected values (required)
 * @param {function} onChange - Change handler (required)
 * @param {array} options - Array of {value, label} objects (required)
 * @param {string} error - Error message
 * @param {boolean} required - Mark as required
 * @param {string} helpText - Helper text
 * @param {string} layout - "grid" or "stack" (default: "stack")
 */
export default function CheckboxGroup({
  label,
  name,
  value = [],
  onChange,
  options = [],
  error = null,
  disabled = false,
  required = false,
  helpText = null,
  layout = 'stack',
  ...rest
}) {
  const groupId = `checkboxgroup-${name}`
  const hasError = !!error
  const helperId = helpText ? `${groupId}-help` : undefined
  const errorId = `${groupId}-error`
  const describedBy = hasError ? errorId : helperId

  const isChecked = (optionValue) => value.includes(optionValue)

  const handleCheckboxChange = (optionValue) => {
    const newValue = isChecked(optionValue)
      ? value.filter((selectedValue) => selectedValue !== optionValue)
      : [...value, optionValue]

    onChange({
      target: {
        name,
        value: newValue,
      },
    })
  }

  const containerClasses = [
    'mb-sm rounded-lg border p-sm',
    hasError ? 'border-danger bg-red-50' : 'border-border bg-white',
    disabled ? 'opacity-60' : '',
  ]
    .join(' ')
    .trim()

  const optionLayoutClasses = layout === 'grid' ? 'grid grid-cols-1 gap-md md:grid-cols-2' : 'space-y-sm'

  return (
    <div className="mb-md">
      <p id={`${groupId}-label`} className="mb-xs block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </p>

      <div
        className={containerClasses}
        role="group"
        aria-labelledby={`${groupId}-label`}
        aria-describedby={describedBy}
      >
        <div className={optionLayoutClasses}>
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-xs cursor-pointer">
              <input
                type="checkbox"
                name={`${name}-${option.value}`}
                value={option.value}
                checked={isChecked(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                disabled={disabled}
                className={[
                  'h-4 w-4 rounded border border-border text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                  isChecked(option.value) ? 'bg-primary' : 'bg-white',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                ].join(' ')}
                {...rest}
              />
              <span className="text-sm text-slate-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {helpText && !hasError && (
        <p id={helperId} className="mt-1 text-xs text-secondary">
          {helpText}
        </p>
      )}

      <FormError id={errorId} message={error} show={hasError} />
    </div>
  )
}