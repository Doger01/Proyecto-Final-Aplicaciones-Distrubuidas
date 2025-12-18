"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  status: "active" | "suspended";
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/users/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: status as any } : u
      )
    );
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Gestión de Usuarios</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Correo</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => updateStatus(u.id, "active")}
                  className="px-2 py-1 bg-green-600 text-white rounded"
                >
                  Activar
                </button>
                <button
                  onClick={() => updateStatus(u.id, "suspended")}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Suspender
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
