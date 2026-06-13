import Divider from "./components/Divider";
import Collection from "./components/Collection";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-8">
      <nav className="flex justify-between items-center mb-24">
        <span className="font-script text-2xl">my little portfolio.</span>
        <a href="/about" className="text-sm tracking-widest text-gray-500 hover:text-gray-700">
          about
        </a>
      </nav>

      <section className="max-w-3xl mx-auto text-center mt-32">
        <p className="text-sm md:text-base text-gray-500 mb-6">
          photographer & collector of beautiful things
        </p>
        <h1 className="font-script text-6xl md:text-8xl mb-6">
          my little portfolio.
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          birds, beaches & buttery pastries — shot on film and heart
        </p>
      </section>

      <Divider />

      <Collection
        title="mr. worldwide bird collection"
        subtitle="— feathered friends from every corner of the world"
        photos={[
          "/photos/birds/bird1.jpeg",
          "/photos/birds/bird2.jpeg",
          "/photos/birds/bird3.jpeg",
          "/photos/birds/bird4.jpeg",
          "/photos/birds/bird5.jpeg",
        ]}
      />

      <Divider />

      <Collection
        title="summer vibezzz"
        subtitle="— golden hours, salty air, and long lazy days"
        photos={[
          "/photos/summer/summer1.jpeg",
          "/photos/summer/summer2.jpeg",
          "/photos/summer/summer3.jpeg",
        ]}
      />

      <Divider />

      <Collection
        title="cute pastries and drinkus"
        subtitle="— every café visit, every flaky croissant, every perfect latte"
        photos={[
          "/photos/pastries/pastry1.jpeg",
          "/photos/pastries/pastry2.jpeg",
          "/photos/pastries/pastry3.jpeg",
        ]}
      />

      <footer className="mt-32 mb-8 text-center">
        <p className="font-script text-4xl text-gray-300">my little portfolio.</p>
      </footer>
    </main>
  );
}