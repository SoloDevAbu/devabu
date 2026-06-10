import React from 'react';

const expertise = {
  backend: [
    "Node.js", "TypeScript", "Fastify", "Express", "Hono"
  ],
  databases: [
    "PostgreSQL", "MongoDB", "Redis"
  ],
  infrastructure: [
    "Docker", "Nginx", "BullMQ", "Kafka", "GitHub Actions"
  ],
  frontend: [
    "React", "Next.js", "Tailwind"
  ],
  ai: [
    "Vercel AI SDK", "Agent Workflows", "Langfuse", "LLM Integrations"
  ]
};

export function TechnicalExpertise() {
  return (
    <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Backend</h4>
        <ul className="mt-3 space-y-2">
          {expertise.backend.map((tech, index) => (
            <li key={index} className="text-sm">{tech}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Databases</h4>
        <ul className="mt-3 space-y-2">
          {expertise.databases.map((tech, index) => (
            <li key={index} className="text-sm">{tech}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Infrastructure</h4>
        <ul className="mt-3 space-y-2">
          {expertise.infrastructure.map((tech, index) => (
            <li key={index} className="text-sm">{tech}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Frontend</h4>
        <ul className="mt-3 space-y-2">
          {expertise.frontend.map((tech, index) => (
            <li key={index} className="text-sm">{tech}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">AI</h4>
        <ul className="mt-3 space-y-2">
          {expertise.ai.map((tech, index) => (
            <li key={index} className="text-sm">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}