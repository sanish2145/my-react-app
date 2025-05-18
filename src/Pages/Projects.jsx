import React from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A web app that does amazing things.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/username/project-one',
    demo: 'https://project-one.demo',
  },
  {
    title: 'Project Two',
    description: 'An innovative mobile app.',
    tech: ['React Native', 'Expo'],
    github: 'https://github.com/username/project-two',
    demo: 'https://project-two.demo',
  },
  {
    title: 'Project Three',
    description: 'A machine learning project.',
    tech: ['Python', 'TensorFlow'],
    github: 'https://github.com/username/project-three',
    demo: '',
  },
]

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tech, github, demo }) => (
          <div
            key={title}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="mb-4 flex flex-wrap gap