import React from 'react';

interface OpenSourceContribution {
  repo: string;
  description: string;
  prLink: string;
  prTitle: string;
}

const contributions: OpenSourceContribution[] = [
  {
    repo: "onloook",
    description: "Fixed critical bug in state tracking",
    prLink: "https://github.com/onloook/pr-123",
    prTitle: "PR #123"
  },
  {
    repo: "onloook",
    description: "Improved performance of event handlers",
    prLink: "https://github.com/onloook/pr-456",
    prTitle: "PR #456"
  },
  {
    repo: "onloook",
    description: "Added support for nested component selection",
    prLink: "https://github.com/onloook/pr-789",
    prTitle: "PR #789"
  }
];

export function OpenSourceContributions() {
  return (
    <div className="mt-6">
      <div className="space-y-4">
        {contributions.map((contribution, index) => (
          <div key={index} className="border-l border-border pl-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">{contribution.repo}</h4>
                <p className="text-sm text-muted-foreground">{contribution.description}</p>
                <a href={contribution.prLink} className="text-sm text-foreground hover:underline">
                  {contribution.prTitle}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}