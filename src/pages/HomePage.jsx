import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'

export default function HomePage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/generate')
  }

  const handleLearnMore = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              AI-Powered Startup Idea Generator
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Generate Your Startup Idea
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary md:text-xl">
              In minutes, not hours. Get AI-powered startup ideas tailored to your interests,
              skills & budget.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={handleGetStarted} className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleLearnMore}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Why StartupAI?</h2>

          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
            <Card hoverable>
              <div className="text-center">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  🧠
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Smart Ideation</h3>
                <p className="text-secondary">
                  Leverage AI to generate unique, personalized startup ideas based on your
                  interests, skills, and budget. Get past brainstorm paralysis.
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="text-center">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  🤖
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">AI-Powered</h3>
                <p className="text-secondary">
                  Powered by Google&apos;s Gemini API, our AI analyzes your input and generates
                  comprehensive startup ideas with problem statements, solutions, and business
                  models.
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="text-center">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  💾
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Save & Track</h3>
                <p className="text-secondary">
                  Save your favorite ideas to your personal dashboard. Keep track of all your
                  startup concepts and come back to refine them anytime.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">How It Works</h2>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Answer Questions</h3>
                <p className="text-secondary">
                  Tell us about your startup interests, your skills, available budget, target
                  audience, and primary goal. Answer 5 simple questions in less than 2 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Generate Idea</h3>
                <p className="text-secondary">
                  Our AI analyzes your input and generates a comprehensive startup idea including
                  problem statement, proposed solution, target market, business model, revenue
                  streams, and MVP features.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Save & Explore</h3>
                <p className="text-secondary">
                  Save your generated ideas to your personal dashboard. Review, compare, and
                  refine multiple ideas. Come back anytime to develop your favorite concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg backdrop-blur-sm md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Ready to launch your next idea?</h2>
          <p className="mb-8 text-lg text-white/90">
            Join thousands of entrepreneurs generating startup ideas with AI.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleGetStarted}
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Start Generating Now
          </Button>
        </div>
      </section>
    </div>
  )
}