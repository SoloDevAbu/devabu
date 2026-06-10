import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExperienceTimeline } from "@/components/sections/experience-timeline"
import { ProjectShowcase } from "@/components/sections/project-showcase"
import { TechnicalExpertise } from "@/components/sections/technical-expertise"
import { OpenSourceContributions } from "@/components/sections/open-source-contributions"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Announcement Bar */}
      <div className="border-b border-border">
        <div className="container py-3 text-center text-xs text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4">
            <span>~1200 req/sec webhook infrastructure</span>
            <span>1 year startup ownership</span>
            <span>3 merged open-source contributions</span>
            <span>Production systems shipped</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Shipping Production Systems
            <br className="hidden sm:block" />
            from Webhooks to AI Agents
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:mt-8 md:text-2xl">
            Backend-focused engineer with startup experience building event-driven systems, webhook infrastructure, 
            analytics platforms, and AI-powered operational tooling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="mt-2">View Projects</Button>
            <Button variant="outline" className="mt-2">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">About</h2>
        <div className="mt-6 max-w-2xl">
          <div className="mt-4 text-muted-foreground">
            <p>Full-stack engineer with a strong backend focus. Currently owning and shipping features at a startup. 
            Experience designing APIs, queues, event-driven architectures, analytics systems, and AI-powered products. 
            Interested in developer tools, infrastructure, AI agents, distributed systems, and backend engineering. 
            Comfortable owning products from architecture through deployment.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">Experience</h2>
        <ExperienceTimeline />
      </section>

      {/* Projects Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">Selected Work</h2>
        <ProjectShowcase />
      </section>

      {/* Technical Expertise Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">Technical Expertise</h2>
        <TechnicalExpertise />
      </section>

      {/* Open Source Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">Open Source</h2>
        <OpenSourceContributions />
      </section>

      {/* Contact Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold">Let's Build Something Interesting</h2>
        <ContactSection />
      </section>
    </main>
  )
}
