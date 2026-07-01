import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'

/**
 * Display startup idea in compressed card format.
 *
 * @param {object} idea - Idea object (required)
 * @param {function} onView - Called when view clicked
 * @param {function} onDelete - Called when delete clicked
 * @param {function} onSave - Called when save clicked (optional)
 */
export default function IdeaCard({ idea, onView, onDelete, onSave }) {
  const truncatedDescription =
    idea.description && idea.description.length > 100
      ? `${idea.description.substring(0, 100)}...`
      : idea.description || ''

  const formattedDate = idea.createdAt
    ? new Date(idea.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <Card hoverable className="flex h-full flex-col">
      <div className="mb-md flex items-start justify-between gap-md">
        <h3 className="text-lg font-bold text-slate-900">{idea.name}</h3>
        <span className="text-lg text-primary" aria-hidden="true">
          🎯
        </span>
      </div>

      <p className="mb-md text-sm text-secondary">{truncatedDescription}</p>

      <div className="mb-md flex flex-wrap gap-2">
        {idea.budget && (
          <Badge variant="primary" size="sm">
            {idea.budget}
          </Badge>
        )}
        {idea.goal && (
          <Badge variant="secondary" size="sm">
            {idea.goal}
          </Badge>
        )}
        {formattedDate && (
          <Badge size="sm" variant="info">
            {formattedDate}
          </Badge>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {onView && (
          <Button size="sm" variant="secondary" onClick={onView}>
            View
          </Button>
        )}
        {onDelete && (
          <Button size="sm" variant="danger" onClick={onDelete}>
            Delete
          </Button>
        )}
        {onSave && (
          <Button size="sm" variant="primary" onClick={onSave}>
            Save
          </Button>
        )}
      </div>
    </Card>
  )
}