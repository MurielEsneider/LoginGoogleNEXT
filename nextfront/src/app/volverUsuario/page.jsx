"use client";
import { useRouter } from "next/navigation";
import '../../../src/globals.css';

export default function VolverAUsuario() {
  const router = useRouter();

  const handleConfirmar = () => {
    console.log("Arrendatario convertido a usuario normal.");
    router.push("/profile"); 
  };

  const handleCancelar = () => {
    router.push("/arrendatario"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" />
      <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 text-center max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          ¿Volver a ser Usuario?
        </h1>

        <p className="text-gray-300 mb-8">
          Si decides volver a ser usuario, ya no podrás publicar propiedades como arrendatario. ¿Estás seguro de continuar?
        </p>

        <button
          onClick={handleConfirmar}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-4 transition-all duration-300"
        >
          Confirmar
        </button>

        <button
          onClick={handleCancelar}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
