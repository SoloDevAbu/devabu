import React from 'react';

export function ContactSection() {
  const contactItems = [
    { name: "Email", link: "mailto:youremail@example.com" },
    { name: "GitHub", link: "https://github.com/your-github" },
    { name: "LinkedIn", link: "https://linkedin.com/in/your-linkedin" },
    { name: "X", link: "https://x.com/your-twitter" }
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-4">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-sm underline hover:no-underline"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}