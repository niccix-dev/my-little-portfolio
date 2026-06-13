export default function About() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-8">
      <nav className="flex justify-between items-center mb-24">
        <a href="/" className="font-script text-2xl">my little portfolio.</a>
        <a href="/about" className="text-sm tracking-widest text-gray-500 hover:text-gray-700">
          about
        </a>
      </nav>

      <section className="max-w-2xl mx-auto mt-16">
        <h1 className="font-script text-5xl md:text-6xl mb-12">
          hello, I&apos;m Nicole.
        </h1>

        <p className="text-gray-500 leading-relaxed mb-16">
          I photograph the things that catch my eye — a bird mid-flight, a
          crema-crowned espresso, the way afternoon light hits ocean water.
        </p>

        <div className="flex gap-8 text-sm tracking-widest text-gray-500">
          <a href="#" className="hover:text-gray-700">instagram</a>
          <a href="#" className="hover:text-gray-700">vsco</a>
          <a href="#" className="hover:text-gray-700">contact</a>
        </div>
      </section>

      <footer className="mt-32 mb-8">
        <p className="font-script text-4xl text-gray-100">my little portfolio.</p>
      </footer>
    </main>
  );
}