import React from 'react';

function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-5xl font-light tracking-wider text-gray-800">Sanish.</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-2xl mb-2 text-gray-600">Hello</p>
          <p className="text-5xl font-light mb-8 text-gray-800">I'm Sanish</p>
          <p className="text-lg leading-relaxed max-w-2xl text-gray-700">
            I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-8 w-full"></div>

        {/* Contact Section */}
        <section className="my-8">
          <button className="text-2xl font-normal mb-4 border-2 border-blue-600 rounded-lg px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md">
            Get A Quote
          </button>
          <br />
          <a 
            href="mailto:hello.alime@gmail.com" 
            className="text-2xl text-blue-600 no-underline hover:text-blue-800 transition-colors duration-300"
          >
            hello.sanish@gmail.com
          </a>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-8 w-full"></div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="list-none p-0 flex flex-wrap gap-8">
            {['All', 'Human', 'Nature', 'Country', 'Video'].map((item) => (
              <li 
                key={item}
                className="text-xl cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-600 pb-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default HeroSection;