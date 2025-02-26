"use client";
import { useRouter } from "next/navigation";
import '../../../src/globals.css';

export default function RegistroArrendatario() {
  const router = useRouter();

  const handleContinuar = () => {
    router.push("/arrendatario"); 
  };

  const handleVolver = () => {
    router.push("/profile"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" />
      <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 text-center max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          ¿Quieres ser Arrendatario?
        </h1>
        <p className="text-gray-300 mb-8">
          Regístrate como arrendatario para publicar tus propiedades y llegar a más personas interesadas.
        </p>
        <button
          onClick={handleContinuar}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mb-4 transition-all duration-300"
        >
          Continuar
        </button>
        <button
          onClick={handleVolver}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
