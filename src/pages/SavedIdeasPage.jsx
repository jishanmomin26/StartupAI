import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IdeaCard from '../components/idea/IdeaCard.jsx'
import IdeaDetails from '../components/idea/IdeaDetails.jsx'
import Modal from '../components/feedback/Modal.jsx'
import ConfirmDialog from '../components/feedback/ConfirmDialog.jsx'
import LoadingSpinner from '../components/ui/LoadingSpinner.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'

const mockIdeas = [
  {
    id: 'idea-1',
    name: 'EchoMail',
    description: 'An AI assistant that turns email threads into concise action plans for small teams.',
    problemStatement: 'Teams lose time sorting through long email threads and missed follow-ups.',
    proposedSolution: 'A smart inbox layer that extracts tasks, deadlines, and next steps automatically.',
    targetMarket: 'Freelancers, founders, and small remote teams',
    targetMarketSize: '$2B+ productivity software market',
    businessModel: 'Subscription SaaS with team and enterprise tiers',
    revenueStreams: ['Solo plan: $12/month', 'Team plan: $39/month', 'Enterprise onboarding fees'],
    mvpFeatures: ['Thread summary', 'Action item detection', 'Deadline reminders', 'Team handoff notes'],
    estimatedLaunchTimeline: '8-12 weeks',
    keyRisks: [
      { risk: 'Crowded productivity market', mitigation: 'Target a narrow remote-work niche first' },
      { risk: 'Low switching motivation', mitigation: 'Integrate with existing inbox workflows' },
    ],
    budget: '10-20k',
    goal: 'make-money',
    createdAt: '2026-06-25T10:00:00.000Z',
  },
  {
    id: 'idea-2',
    name: 'SkillSprint',
    description: 'A micro-learning platform that converts a user’s goal into a 14-day execution plan.',
    problemStatement: 'People start learning with enthusiasm but struggle to stay consistent after day one.',
    proposedSolution: 'Daily bite-sized lessons, checklists, and accountability prompts built around one outcome.',
    targetMarket: 'Career switchers and self-taught professionals',
    targetMarketSize: '$5B+ online learning market',
    businessModel: 'Freemium app with premium coaching and cohort upgrades',
    revenueStreams: ['Monthly subscription', 'Cohort-based upsells', 'B2B training licenses'],
    mvpFeatures: ['Goal planner', 'Daily lesson flow', 'Progress streaks', 'Reminder notifications'],
    estimatedLaunchTimeline: '10-14 weeks',
    keyRisks: [
      { risk: 'Content creation overhead', mitigation: 'Start with one high-demand topic cluster' },
      { risk: 'Retention drop-off', mitigation: 'Use habit loops and streak rewards' },
    ],
    budget: '20-50k',
    goal: 'build-products',
    createdAt: '2026-06-28T14:30:00.000Z',
  },
  {
    id: 'idea-3',
    name: 'LaunchLens',
    description: 'A market validation dashboard that scores startup ideas before founders spend money.',
    problemStatement: 'Founders often build too early without enough validation or a clear market signal.',
    proposedSolution: 'A guided research tool that scores demand, competition, and pricing readiness in one view.',
    targetMarket: 'Solo founders and early-stage startup teams',
    targetMarketSize: '$1B+ startup tooling market',
    businessModel: 'Tiered SaaS with paid research reports',
    revenueStreams: ['Starter subscription', 'Premium validation reports', 'Agency consulting add-ons'],
    mvpFeatures: ['Idea scoring', 'Competitor snapshot', 'Buyer persona builder', 'Go-to-market checklist'],
    estimatedLaunchTimeline: '6-8 weeks',
    keyRisks: [
      { risk: 'Data freshness', mitigation: 'Use curated inputs and clear update dates' },
      { risk: 'Generic advice risk', mitigation: 'Focus recommendations by niche and budget' },
    ],
    budget: '5-10k',
    goal: 'make-money',
    createdAt: '2026-06-30T09:15:00.000Z',
  },
]

export default function SavedIdeasPage() {
  const navigate = useNavigate()
  const [ideas, setIdeas] = useState([])
  const [selectedIdea, setSelectedIdea] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, ideaId: null })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadIdeas()
  }, [])

  const loadIdeas = async () => {
    setIsLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 400))

      // Phase 4: replace with firebaseService.getIdeas(sessionId)
      setIdeas(mockIdeas)
    } catch (loadError) {
      setError('Failed to load ideas. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleViewIdea = (idea) => {
    setSelectedIdea(idea)
  }

  const handleCloseModal = () => {
    setSelectedIdea(null)
  }

  const handleDeleteIdea = (idea) => {
    setDeleteConfirm({ open: true, ideaId: idea.id })
  }

  const handleCancelDelete = () => {
    setDeleteConfirm({ open: false, ideaId: null })
  }

  const handleConfirmDelete = async () => {
    try {
      // Phase 4: replace with firebaseService.deleteIdea(deleteConfirm.ideaId)
      setIdeas((currentIdeas) => currentIdeas.filter((idea) => idea.id !== deleteConfirm.ideaId))
      setSelectedIdea(null)
      setDeleteConfirm({ open: false, ideaId: null })
    } catch (deleteError) {
      // Phase 3.5: replace with showToast('Error deleting idea', 'error')
      setError('Error deleting idea. Please try again.')
    }
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-lg px-4 py-lg sm:px-6 lg:px-8">
      {isLoading && (
        <LoadingSpinner message="Loading your ideas..." size="lg" className="min-h-[50vh]" />
      )}

      {error && !isLoading && (
        <div className="rounded-lg border border-danger bg-red-100 p-lg">
          <p className="mb-md font-bold text-danger">{error}</p>
          <Button onClick={loadIdeas} variant="danger" size="sm">
            Try Again
          </Button>
        </div>
      )}

      {!isLoading && !error && ideas.length > 0 && (
        <section className="space-y-lg">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Your Startup Ideas</h1>
            <p className="mt-sm text-secondary">
              {ideas.length} {ideas.length === 1 ? 'idea' : 'ideas'} saved
            </p>
          </div>

          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onView={() => handleViewIdea(idea)}
                onDelete={() => handleDeleteIdea(idea)}
              />
            ))}
          </div>
        </section>
      )}

      {!isLoading && !error && ideas.length === 0 && (
        <Card className="py-20 text-center">
          <div className="mb-md text-5xl" aria-hidden="true">
            💡
          </div>
          <h2 className="mb-md text-2xl font-bold text-slate-900">No Startup Ideas Yet</h2>
          <p className="mx-auto mb-lg max-w-xl text-secondary">
            Start generating ideas to save them here and track your entrepreneurial journey.
          </p>
          <Button size="lg" onClick={() => navigate('/generate')}>
            Start Generating Ideas
          </Button>
        </Card>
      )}

      <Modal
        isOpen={Boolean(selectedIdea)}
        onClose={handleCloseModal}
        title={selectedIdea?.name}
        size="lg"
      >
        {selectedIdea && (
          <IdeaDetails
            idea={selectedIdea}
            onClose={handleCloseModal}
            onDelete={() => handleDeleteIdea(selectedIdea)}
          />
        )}
      </Modal>

      <ConfirmDialog
        isOpen={deleteConfirm.open}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        title="Delete Idea?"
        message="Are you sure you want to delete this startup idea? This action cannot be undone."
        confirmText="Delete"
        cancelText="Keep It"
        variant="danger"
      />
    </div>
  )
}