import React from 'react'

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Git',
  'Python',
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}