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
  const [font, setFont] = useState("font-script");
  const [subtitleFont, setSubtitleFont] = useState("font-italiana-italic");
  const [collections, setCollections] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin");
      } else {
        setChecking(false);
        loadCollections();
      }
    }
    checkAuth();
  }, [router]);

  async function loadCollections() {
    const { data } = await supabase
      .from("collections")
      .select("*")
      .order("position", { ascending: true });
    setCollections(data || []);
  }

  async function moveCollection(index, direction) {
    const newCollections = [...collections];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newCollections.length) return;

    const current = newCollections[index];
    const target = newCollections[targetIndex];

    await supabase.from("collections").update({ position: target.position }).eq("id", current.id);
    await supabase.from("collections").update({ position: current.position }).eq("id", target.id);

    loadCollections();
  }

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

  function resetForm() {
    setTitle("");
    setSubtitle("");
    setPhotos([]);
    setFont("font-script");
    setSubtitleFont("font-italiana-italic");
    setEditingId(null);
  }

  function startEdit(c) {
    setEditingId(c.id);
    setTitle(c.title || "");
    setSubtitle(c.subtitle || "");
    setPhotos(c.photos || []);
    setFont(c.font || "font-script");
    setSubtitleFont(c.subtitle_font || "font-italiana-italic");
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (photos.length === 0) {
      setMessage("Please upload at least one photo.");
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from("collections")
        .update({
          title,
          subtitle,
          photos,
          font,
          subtitle_font: subtitleFont,
        })
        .eq("id", editingId);

      if (error) {
        setMessage("Error: " + error.message);
      } else {
        setMessage("Collection updated!");
        resetForm();
        loadCollections();
      }
    } else {
      const { error } = await supabase.from("collections").insert({
        title,
        subtitle,
        photos,
        font,
        subtitle_font: subtitleFont,
      });

      if (error) {
        setMessage("Error: " + error.message);
      } else {
        setMessage("Collection created!");
        resetForm();
        loadCollections();
      }
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this collection? This cannot be undone.")) return;

    const { error } = await supabase.from("collections").delete().eq("id", id);

    if (error) {
      setMessage("Error deleting: " + error.message);
    } else {
      setMessage("Collection deleted.");
      if (editingId === id) resetForm();
      loadCollections();
    }
  }

  function removePhoto(index) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
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
        <h1 className="font-script text-4xl">
          {editingId ? "edit collection" : "new collection"}
        </h1>
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

        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm"
        >
          <option value="font-script">Pinyon Script</option>
          <option value="font-italianno">Italianno</option>
          <option value="font-marck">Marck Script</option>
          <option value="font-petit">Petit Formal Script</option>
          <option value="font-playfair">Playfair Display</option>
        </select>

        <select
          value={subtitleFont}
          onChange={(e) => setSubtitleFont(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm"
        >
          <option value="font-italiana-italic">Italiana</option>
          <option value="font-cormorant">Cormorant Garamond</option>
          <option value="font-ebgaramond">EB Garamond</option>
        </select>

        {photos.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {photos.map((src, i) => (
              <div key={i} className="relative">
                <img src={src} alt="" className="w-16 h-16 object-cover rounded-sm" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-5 h-5 text-xs leading-none"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={openUploadWidget}
          className="px-4 py-2 border border-gray-200 rounded-sm text-sm hover:bg-gray-50"
        >
          upload photos ({photos.length} selected)
        </button>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-gray-800 text-white py-2 rounded-sm text-sm hover:bg-gray-700"
          >
            {editingId ? "update collection" : "create collection"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border border-gray-200 rounded-sm text-sm hover:bg-gray-50"
            >
              cancel
            </button>
          )}
        </div>

        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>

      <hr className="my-12 border-gray-200" />

      <h2 className="font-script text-3xl mb-6">your collections</h2>

      <div className="flex flex-col gap-3">
        {collections.map((c, index) => (
          <div
            key={c.id}
            className="flex justify-between items-center border border-gray-200 rounded-sm px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium">{c.title}</p>
              <p className="text-xs text-gray-400">{c.photos?.length || 0} photos</p>
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => moveCollection(index, "up")}
                disabled={index === 0}
                className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30"
              >
                ↑
              </button>
              <button
                onClick={() => moveCollection(index, "down")}
                disabled={index === collections.length - 1}
                className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30"
              >
                ↓
              </button>
              <button
                onClick={() => startEdit(c)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                edit
              </button>
              <button
                onClick={() => handleDelete(c.id)}
                className="text-sm text-red-400 hover:text-red-600"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}