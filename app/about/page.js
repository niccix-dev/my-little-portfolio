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
          Hi, I&apos;m Nicole.
        </h1>

        <p className="text-gray-500 leading-relaxed mb-16 text-xl">
          This is my portfolio of casual non-edited photos that I have taken
          with my phone, during my day to day life. I programmed this little
          website since I am too lazy and mysterious to post on my socials. 
          You can expect to see some silly photos as well as some pretty ones 
          and I hope you will enjoy them.

          Thanks for checking them out!
        </p>

      </section>

      <footer className="mt-32 mb-8 text-center">
        <p className="font-script text-4xl text-gray-300">my little portfolio.</p>
      </footer>
    </main>
  );
}