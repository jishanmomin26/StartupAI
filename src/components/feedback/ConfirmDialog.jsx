import Button from '../ui/Button.jsx'
import Modal from './Modal.jsx'

/**
 * Pre-built confirmation modal for destructive and important actions.
 *
 * @param {boolean} isOpen - Whether dialog is visible (required)
 * @param {function} onConfirm - Called when confirm clicked (required)
 * @param {function} onCancel - Called when cancel clicked (required)
 * @param {string} title - Dialog title (default: "Confirm Action")
 * @param {string} message - Confirmation message (required)
 * @param {string} confirmText - Confirm button text (default: "Confirm")
 * @param {string} cancelText - Cancel button text (default: "Cancel")
 * @param {boolean} loading - Show loading state (default: false)
 * @param {string} variant - "danger", "warning", "info" (default: "danger")
 */
export default function ConfirmDialog({
  isOpen,
  onConfirm,
  onCancel,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loading = false,
  variant = 'danger',
}) {
  const buttonVariant = {
    danger: 'danger',
    warning: 'danger',
    info: 'primary',
  }[variant] || 'danger'

  const iconStyles = {
    danger: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  }

  const icons = {
    danger: '!',
    warning: '!',
    info: 'i',
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title={title}
      size="sm"
      closeOnBackdrop={!loading}
      closeOnEscape={!loading}
    >
      <div className="space-y-lg">
        <div className="flex items-start gap-md">
          <span className={['flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold', iconStyles[variant] || iconStyles.danger].join(' ')}>
            {icons[variant] || icons.danger}
          </span>

          <p className="text-sm leading-6 text-slate-700">{message}</p>
        </div>

        <div className="flex justify-end gap-md">
          <Button variant="secondary" onClick={onCancel} disabled={loading}>
            {cancelText}
          </Button>
          <Button variant={buttonVariant} onClick={onConfirm} loading={loading}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}