import Card from '../components/ui/Card.jsx'

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-0 px-4 py-lg sm:px-6 lg:px-8">
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">About StartupAI</h1>
          <p className="text-xl text-secondary">Your AI-powered startup ideation assistant</p>
          <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
            Discover innovative startup ideas tailored to your skills, interests, and goals—powered
            by advanced AI technology.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-900">
            <p>
              At StartupAI, we believe entrepreneurship should be accessible to everyone. We&apos;re
              democratizing startup ideation by combining cutting-edge AI with personalized insights.
              Whether you&apos;re a first-time founder, investor, or professional exploring side projects,
              StartupAI helps you discover viable startup ideas that align with your unique profile—in
              minutes, not months.
            </p>
            <p>
              Our vision is to empower millions of people to turn entrepreneurial dreams into reality
              by removing barriers to ideation and providing data-driven startup concepts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold text-slate-900">How It Works</h2>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
            <Card className="h-full">
              <h3 className="mb-2 text-xl font-bold text-primary">1. Answer Questions</h3>
              <p className="text-secondary">
                Tell us about your interests, skills, budget, and goals. Our quiz is designed to
                capture the essence of your entrepreneurial vision.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="mb-2 text-xl font-bold text-primary">2. AI Analysis</h3>
              <p className="text-secondary">
                Our AI engine, powered by Google&apos;s Gemini, analyzes your profile and generates a
                comprehensive startup idea with problem statements, solutions, and business models.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="mb-2 text-xl font-bold text-primary">3. Save &amp; Iterate</h3>
              <p className="text-secondary">
                Save your generated ideas to your personal dashboard. Review, compare, and refine
                multiple concepts as your vision evolves.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">
                How accurate are the startup ideas generated?
              </h3>
              <p className="text-secondary">
                Our AI uses advanced language models trained on thousands of startups, market data,
                and business frameworks. While generated ideas are well-researched and viable, they
                serve as starting points for your own validation. We recommend conducting thorough
                market research before committing to any idea.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">Can I save and revisit my ideas?</h3>
              <p className="text-secondary">
                Yes! All ideas are saved to your personal dashboard. You can view, edit notes, and
                compare multiple ideas anytime. Your ideas persist as long as your session is active.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">
                What if I want to generate another idea?
              </h3>
              <p className="text-secondary">
                Simply return to the generator, adjust your inputs if desired, and generate as many
                ideas as you like. Experimentation is encouraged!
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">Is my data private and secure?</h3>
              <p className="text-secondary">
                Your ideas and personal information are stored securely. We do not share your data
                with third parties. See our Privacy Policy for details.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">What technology powers StartupAI?</h3>
              <p className="text-secondary">
                StartupAI uses React for the frontend, Google&apos;s Gemini API for AI idea generation,
                and Firebase for secure data storage.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-lg font-bold text-primary">How much does StartupAI cost?</h3>
              <p className="text-secondary">
                StartupAI is completely free to use. We want to make startup ideation accessible to
                everyone. No credit card required.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold text-slate-900">Built With</h2>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
            <Card>
              <h3 className="mb-3 text-xl font-bold text-primary">Frontend</h3>
              <p className="text-secondary">
                React + Vite: Modern, fast, and reactive user interface optimized for rapid
                development and deployment.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-primary">AI Engine</h3>
              <p className="text-secondary">
                Google Gemini API: Advanced language model that generates comprehensive,
                data-informed startup ideas.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-primary">Database</h3>
              <p className="text-secondary">
                Firebase: Secure, scalable cloud database that stores your ideas and ensures your
                data is always available.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}