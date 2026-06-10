import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects = [
  {
    title: "HookRelay",
    description: "Multi-tenant webhook delivery infrastructure with retries, idempotency, circuit breakers, dead-letter queues, rate limiting, and observability.",
    technologies: ["Redis", "BullMQ", "PostgreSQL", "Fastify", "TypeScript"],
    highlights: ["~1200 req/sec"],
    githubUrl: "https://github.com",
    demoUrl: "https://hookrelay.com"
  },
  {
    title: "Operon AI",
    description: "AI-native operations platform that ingests logs and events, detects anomalies, investigates incidents, and executes workflows using AI agents.",
    technologies: ["Multi-agent architecture", "Event ingestion", "Workflow execution", "Human approval flows", "AI investigations"],
    highlights: ["Multi-agent architecture", "Event ingestion", "Workflow execution", "Human approval flows", "AI investigations"],
    githubUrl: "https://github.com",
    demoUrl: "https://operon.ai"
  },
  {
    title: "Onlook Open Source Contributions",
    description: "Contributions to a popular open-source project including merged pull requests and bug fixes.",
    technologies: ["Merged PRs", "Collaboration", "Code reviews", "Open-source development"],
    highlights: ["Merged PRs", "Collaboration", "Code reviews", "Open-source development"],
    githubUrl: "https://github.com",
  }
];

export function ProjectShowcase() {
  return (
    <div className="mt-6 grid gap-8">
      {projects.map((project, index) => (
        <div key={index} className="border-b border-border pb-8">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <li key={techIndex} className="rounded-sm bg-muted px-2 py-1 text-xs">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}