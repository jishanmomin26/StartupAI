import { useEffect, useMemo, useRef } from 'react'

/**
 * Full-screen dialog overlay for displaying content.
 *
 * Controlled component: use isOpen prop to show/hide.
 * Click outside or Escape key closes (configurable).
 * Supports title, custom content, custom sizing.
 *
 * Sizes: sm (384px), md (512px), lg (640px)
 *
 * @param {boolean} isOpen - Whether modal is visible (required)
 * @param {function} onClose - Called when modal closes (required)
 * @param {node} children - Modal content (required)
 * @param {string} title - Modal title (optional)
 * @param {string} size - Dialog size (default: "md")
 * @param {boolean} showCloseButton - Show X button (default: true)
 * @param {boolean} closeOnBackdrop - Close on background click (default: true)
 * @param {boolean} closeOnEscape - Close on Escape key (default: true)
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
}) {
  const dialogRef = useRef(null)
  const titleId = useMemo(() => `modal-title-${Math.random().toString(36).slice(2, 10)}`, [])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    dialogRef.current?.focus()

    if (!closeOnEscape) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  const sizeClasses = {
    sm: 'w-96',
    md: 'w-full md:w-[512px]',
    lg: 'w-full md:w-[640px]',
  }

  if (!isOpen) {
    return null
  }

  const backdropClass = 'fixed inset-0 z-40 bg-black/50 animate-fade-in'
  const dialogClass = [
    'max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-xl animate-slide-up',
    sizeClasses[size] || sizeClasses.md,
  ]
    .filter(Boolean)
    .join(' ')

  const handleBackdropClick = () => {
    if (closeOnBackdrop) {
      onClose()
    }
  }

  return (
    <>
      <div className={backdropClass} onClick={handleBackdropClick} aria-hidden="true" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          className={dialogClass}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-border p-lg">
            {title ? (
              <h2 id={titleId} className="text-xl font-bold text-slate-900">
                {title}
              </h2>
            ) : (
              <span />
            )}

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="text-2xl text-secondary transition-colors hover:text-slate-900"
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>

          <div className="p-lg">{children}</div>
        </div>
      </div>
    </>
  )
}