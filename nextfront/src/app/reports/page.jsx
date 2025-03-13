"use client";
import React, { useState, useEffect } from "react";

const Reportes = () => {
  const [reportes, setReportes] = useState([]);
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Al montar el componente, carga los reportes
  useEffect(() => {
    fetchReportes();
  }, []);

  const fetchReportes = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:4004/reportes");
      if (!response.ok) {
        throw new Error(`Error al obtener reportes (status: ${response.status})`);
      }
      const data = await response.json();
      setReportes(data);
    } catch (error) {
      console.error("Error al obtener reportes:", error);
      setError("Error al obtener reportes");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:4004/reportes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`Error al enviar reporte (status: ${response.status})`);
      }
      // Se puede obtener la respuesta si se necesita algún dato, por ejemplo:
      // const result = await response.json();
      fetchReportes();
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar reporte:", error);
      setError("Error al enviar reporte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Crear Reporte</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          name="asunto"
          placeholder="Asunto"
          value={form.asunto}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading}>
          {loading ? "Procesando..." : "Enviar Reporte"}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Lista de Reportes</h2>
      <div className="mt-4 space-y-4">
        {loading && reportes.length === 0 ? (
          <p>Cargando reportes...</p>
        ) : (
          reportes.map((reporte) => (
            <div key={reporte.id} className="p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{reporte.asunto}</h3>
                <p>{reporte.mensaje}</p>
                <small className="text-gray-500">
                  De: {reporte.nombre} ({reporte.email})
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reportes;
