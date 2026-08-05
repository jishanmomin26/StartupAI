import { useState } from 'react'
import Button from '../components/ui/Button.jsx'
import IdeaDetails from '../components/idea/IdeaDetails.jsx'
import IdeaForm from '../components/form/IdeaForm.jsx'
import LoadingSpinner from '../components/ui/LoadingSpinner.jsx'
import * as firebaseService from '../services/firebaseService.js'
import useSession from '../hooks/useSession.js'
import useToast from '../hooks/useToast.js'

export default function GeneratorPage() {
  const { showToast } = useToast()
  const { sessionId } = useSession()
  const [, setFormData] = useState({
    interest: '',
    skills: [],
    budget: '',
    targetAudience: '',
    goal: '',
  })
  const [generatedIdea, setGeneratedIdea] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formResetKey, setFormResetKey] = useState(0)

  const handleFormSubmit = async (submittedFormData) => {
    setFormData(submittedFormData)
    setError(null)
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockIdea = {
        id: `idea-${Date.now()}`,
        name: `StartupAI ${Date.now()}`,
        description: `A startup idea based on your interest in ${submittedFormData.interest} and your selected skills.`,
        problemStatement: 'Problem based on your input and market opportunity analysis.',
        proposedSolution: 'Solution tailored to your skills and budget.',
        targetMarket: submittedFormData.targetAudience,
        targetMarketSize: '$1-5B (estimated)',
        businessModel: 'Subscription-based SaaS',
        revenueStreams: [
          'Individual plan: $9.99/month',
          'Team plan: $29.99/month',
          'Enterprise: Custom pricing',
        ],
        mvpFeatures: [
          'Core feature 1',
          'Core feature 2',
          'Core feature 3',
          'Core feature 4',
          'Core feature 5',
        ],
        estimatedLaunchTimeline: '3-4 months',
        keyRisks: [
          { risk: 'Market competition', mitigation: 'Focus on a niche segment' },
          { risk: 'User acquisition', mitigation: 'Strategic partnerships and content marketing' },
        ],
        budget: submittedFormData.budget,
        goal: submittedFormData.goal,
        createdAt: new Date().toISOString(),
      }

      await firebaseService.saveIdea(sessionId, mockIdea)

      setGeneratedIdea(mockIdea)
      showToast('Idea saved to your collection!', 'success', 3000)
    } catch {
      setError('Failed to generate or save idea. Please try again.')
      showToast('Error saving idea. Please try again.', 'error', 4000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveIdea = () => {}

  const handleGenerateAnother = () => {
    setGeneratedIdea(null)
    setError(null)
    setFormData({
      interest: '',
      skills: [],
      budget: '',
      targetAudience: '',
      goal: '',
    })
    setFormResetKey((currentValue) => currentValue + 1)
  }

  return (
    <div>
      <main className="flex-grow">
        <div className="mx-auto max-w-6xl px-4 py-lg sm:px-6 lg:px-8">
          {error && (
            <div className="mb-lg rounded-lg border border-danger bg-red-100 p-lg">
              <p className="font-bold text-danger">{error}</p>
              <Button size="sm" variant="danger" onClick={handleGenerateAnother} className="mt-md">
                Try Again
              </Button>
            </div>
          )}

          {isLoading && <LoadingSpinner message="Generating your startup idea..." size="lg" />}

          {!isLoading && generatedIdea && (
            <div className="space-y-lg">
              <IdeaDetails idea={generatedIdea} />

              <div className="flex flex-col gap-md md:flex-row">
                <Button size="lg" onClick={handleSaveIdea}>
                  Save This Idea
                </Button>
                <Button size="lg" variant="secondary" onClick={handleGenerateAnother}>
                  Generate Another
                </Button>
              </div>
            </div>
          )}

          {!isLoading && !generatedIdea && !error && (
            <div>
              <h1 className="mb-lg text-3xl font-bold text-slate-900 md:text-4xl">
                Generate Your Startup Idea
              </h1>
              <IdeaForm key={formResetKey} onSubmit={handleFormSubmit} isLoading={isLoading} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}