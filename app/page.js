import Collection from "./components/Collection";
import Divider from "./components/Divider";
import { supabase } from "./lib/supabase";
import Hero from "./components/Hero";

export default async function Home() {
  const { data: collections, error } = await supabase
    .from("collections")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <main className="min-h-screen px-6 md:px-12 py-8">
      <nav className="flex justify-between items-center mb-24">
        <span className="font-script text-2xl">my little portfolio.</span>
        <a href="/about" className="text-sm tracking-widest text-gray-500 hover:text-gray-700">
          about
        </a>
      </nav>

      <Hero />

      {collections?.map((collection) => (
        <div key={collection.id}>
          <Divider />
          <Collection
            title={collection.title}
            subtitle={collection.subtitle}
            photos={collection.photos}
            font={collection.font}
            subtitleFont={collection.subtitle_font}
          />
        </div>
      ))}

      <footer className="mt-32 mb-8 text-center">
        <p className="font-script text-4xl text-gray-300">my little portfolio.</p>
      </footer>
    </main>
  );
}