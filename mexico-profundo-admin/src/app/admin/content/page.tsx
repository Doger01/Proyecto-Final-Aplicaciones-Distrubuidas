"use client";

import { useEffect, useState } from "react";

type Content = {
  id: number;
  title: string;
  author: string;
  status: "pending" | "approved" | "rejected";
};

export default function ContentPage() {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const updateContent = async (id: number, status: string) => {
    await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    setItems((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: status as any } : c
      )
    );
  };

  if (loading) return <p>Cargando contenido...</p>;

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">
        Moderación de Contenido
      </h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Título</th>
            <th className="border p-2">Autor</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.author}</td>
              <td className="border p-2">{c.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => updateContent(c.id, "approved")}
                  className="px-2 py-1 bg-green-600 text-white rounded"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => updateContent(c.id, "rejected")}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Rechazar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
