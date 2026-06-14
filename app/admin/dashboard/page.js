"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState("");
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin");
      } else {
        setChecking(false);
      }
    }
    checkAuth();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin");
  }

  function openUploadWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        multiple: true,
        sources: ["local"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setPhotos((prev) => [...prev, result.info.secure_url]);
        }
      }
    );
    widget.open();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (photos.length === 0) {
      setMessage("Please upload at least one photo.");
      return;
    }

    const { error } = await supabase.from("collections").insert({
      title,
      subtitle,
      photos,
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Collection created!");
      setTitle("");
      setSubtitle("");
      setPhotos([]);
    }
  }

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-400">checking...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-script text-4xl">new collection</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-gray-600"
        >
          log out
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="collection title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm"
          required
        />

        <input
          type="text"
          placeholder="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm"
        />

        <button
          type="button"
          onClick={openUploadWidget}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm hover:bg-gray-50"
        >
          upload photos ({photos.length} selected)
        </button>

        <button
          type="submit"
          className="bg-gray-800 text-white py-2 rounded-sm text-sm hover:bg-gray-700"
        >
          create collection
        </button>

        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </main>
  );
}