import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

/**
 * Display full idea details in expanded view.
 *
 * @param {object} idea - Full idea object (required)
 * @param {function} onClose - Called to close (optional)
 * @param {function} onDelete - Called on delete (optional)
 */
export default function IdeaDetails({ idea, onClose, onDelete }) {
  const formattedDate = idea.createdAt
    ? new Date(idea.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <div className="space-y-lg">
      <div>
        <h1 className="mb-sm text-3xl font-bold text-slate-900">{idea.name}</h1>
        <p className="text-secondary">{idea.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {idea.budget && <Badge variant="primary">{idea.budget}</Badge>}
        {idea.goal && <Badge variant="secondary">{idea.goal}</Badge>}
        {formattedDate && <Badge variant="info">{formattedDate}</Badge>}
      </div>

      {idea.problemStatement && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Problem Statement</h2>
          <p className="text-slate-700">{idea.problemStatement}</p>
        </div>
      )}

      {idea.proposedSolution && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Proposed Solution</h2>
          <p className="text-slate-700">{idea.proposedSolution}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        {idea.targetMarket && (
          <div>
            <h3 className="mb-sm text-lg font-bold">Target Market</h3>
            <p className="text-slate-700">{idea.targetMarket}</p>
          </div>
        )}

        {idea.targetMarketSize && (
          <div>
            <h3 className="mb-sm text-lg font-bold">Market Size</h3>
            <p className="text-slate-700">{idea.targetMarketSize}</p>
          </div>
        )}
      </div>

      {idea.businessModel && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Business Model</h2>
          <p className="text-slate-700">{idea.businessModel}</p>
        </div>
      )}

      {idea.revenueStreams?.length > 0 && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Revenue Streams</h2>
          <ul className="list-inside list-disc space-y-xs">
            {idea.revenueStreams.map((stream, index) => (
              <li key={index} className="text-slate-700">
                {stream}
              </li>
            ))}
          </ul>
        </div>
      )}

      {idea.mvpFeatures?.length > 0 && (
        <div>
          <h2 className="mb-sm text-xl font-bold">MVP Features</h2>
          <ul className="list-inside list-disc space-y-xs">
            {idea.mvpFeatures.map((feature, index) => (
              <li key={index} className="text-slate-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {idea.estimatedLaunchTimeline && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Estimated Launch Timeline</h2>
          <p className="text-slate-700">{idea.estimatedLaunchTimeline}</p>
        </div>
      )}

      {idea.keyRisks?.length > 0 && (
        <div>
          <h2 className="mb-sm text-xl font-bold">Key Risks & Mitigation</h2>
          <div className="space-y-md">
            {idea.keyRisks.map((item, index) => (
              <div key={index} className="border-l-4 border-warning pl-md">
                <p className="font-bold text-slate-900">Risk: {item.risk}</p>
                <p className="text-secondary">Mitigation: {item.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-md pt-md">
        {onDelete && (
          <Button variant="danger" onClick={onDelete}>
            Delete Idea
          </Button>
        )}
        {onClose && (
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        )}
      </div>
    </div>
  )
}