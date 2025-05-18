import React from 'react'

const posts = [
  {
    title: 'Understanding React Hooks',
    description:
      'A beginner-friendly guide to using React Hooks effectively in your projects.',
  },
  {
    title: 'CSS Grid vs Flexbox',
    description:
      'Comparing CSS Grid and Flexbox for layout design with practical examples.',
  },
]

export default function Blog() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map(({ title, description }) => (
          <article
            key={title}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}