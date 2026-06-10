import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Tayog",
    period: "2023 - Present",
    description: [
      "Owned and shipped production features.",
      "Built notification and activity systems.",
      "Designed analytics dashboards and reporting pipelines.",
      "Worked with PostgreSQL, MongoDB, Redis, Kafka, and Next.js.",
      "Contributed across backend, frontend, infrastructure, and deployment."
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <div className="mt-6">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-border"></div>
            <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-foreground"></div>
            <h3 className="text-lg font-medium">{exp.title} <span className="text-muted-foreground">@ {exp.company}</span></h3>
            <p className="text-sm text-muted-foreground">{exp.period}</p>
            <ul className="mt-2 space-y-1">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-muted-foreground">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}