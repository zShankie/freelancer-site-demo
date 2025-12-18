function App() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex h-[70vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
          Content that people want to watch on repeat.
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          I edit high-retention Instagram Reels for creators and brands.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 pt-6 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">About</h2>

        <p className="mt-6 text-gray-300 leading-relaxed">
          I’m a short-form video editor focused on retention-first editing —
          tight cuts, pacing, and structure that keeps viewers watching till the
          end.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          I work with creators and brands who want their Reels to perform, not
          just look good.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold">Services</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-medium">Reels Editing</h3>
            <p className="mt-3 text-sm text-gray-300">
              Clean, fast-paced edits with strong hooks, tight cuts, and
              retention-focused structure.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-medium">Short-form Repurposing</h3>
            <p className="mt-3 text-sm text-gray-300">
              Turning long-form content into multiple high-performing short
              videos optimized for Instagram.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-medium">Basic Motion & Captions</h3>
            <p className="mt-3 text-sm text-gray-300">
              Simple motion, on-screen text, and captions that improve clarity
              without overdoing effects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="mt-6 text-gray-300">
          Want to work together or have a project in mind?
        </p>

        <div className="mt-8">
          <a
            href="mailto:shanky.viswa09@gmail.com"
            className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition"
          >
            shanky.viswa09@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
