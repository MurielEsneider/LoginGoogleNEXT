"use client";
import { useState } from "react";
import "../../globals.css";

export default function ReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reporte enviado:", formData);
    alert("¡Reporte enviado!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-lg z-[-1] pointer-events-none"></div>

      <div className="flex items-center justify-center min-h-screen px-4 py-8 relative z-10">
        <div className="max-w-lg w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Enviar Reporte
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto del reporte"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe el problema o reporte..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out"
            >
              Enviar Reporte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
