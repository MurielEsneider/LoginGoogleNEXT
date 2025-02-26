"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, MapPin, DollarSign, Image as ImageIcon, Trash2, Edit } from "lucide-react";
import '../../../src/globals.css';

export default function MisPublicaciones() {
    const router = useRouter();

    // Datos de ejemplo (puedes reemplazar esto con datos reales desde una API o estado)
    const [publicaciones, setPublicaciones] = useState([
        {
            id: 1,
            titulo: "Casa en la playa",
            descripcion: "Hermosa casa frente al mar con vista espectacular.",
            direccion: "Playa del Carmen, México",
            precio: 150,
            imagen: "https://via.placeholder.com/500",
        },
        {
            id: 2,
            titulo: "Departamento céntrico",
            descripcion: "Departamento moderno en el corazón de la ciudad.",
            direccion: "Ciudad de México, México",
            precio: 100,
            imagen: "https://via.placeholder.com/500",
        },
    ]);

    // Función para eliminar una publicación
    const handleEliminarPublicacion = (id) => {
        setPublicaciones((prev) => prev.filter((pub) => pub.id !== id));
        alert("Publicación eliminada");
    };

    // Función para editar una publicación
    const handleEditarPublicacion = (id) => {
        router.push(`/editar-publicacion/${id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 flex items-center justify-center p-4">
            {/* Fondo con efecto blur */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" />

            {/* Contenedor principal */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 max-w-4xl w-full mx-4">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
                    Mis Publicaciones
                </h1>

                {/* Lista de publicaciones */}
                <div className="space-y-6">
                    {publicaciones.map((publicacion) => (
                        <div
                            key={publicacion.id}
                            className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 p-6 flex flex-col lg:flex-row gap-6"
                        >
                            {/* Imagen de la publicación */}
                            <div className="w-full lg:w-1/3 h-48 lg:h-40 rounded-lg overflow-hidden">
                                <img
                                    src={publicacion.imagen}
                                    alt={publicacion.titulo}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Detalles de la publicación */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    {publicacion.titulo}
                                </h2>
                                <p className="text-gray-300 mb-4">{publicacion.descripcion}</p>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <MapPin className="w-5 h-5" />
                                    <p>{publicacion.direccion}</p>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300 mt-2">
                                    <DollarSign className="w-5 h-5" />
                                    <p>${publicacion.precio} por noche</p>
                                </div>
                            </div>

                            {/* Acciones (Editar y Eliminar) */}
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-center">
                                <button
                                    onClick={() => handleEditarPublicacion(publicacion.id)}
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                >
                                    <Edit className="w-5 h-5 mr-2" />
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleEliminarPublicacion(publicacion.id)}
                                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                >
                                    <Trash2 className="w-5 h-5 mr-2" />
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para volver al inicio */}
                <button
                    onClick={() => router.push("/arrendatario")}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center mt-6"
                >
                    Volver al perfil
                </button>
            </div>
        </div>
    );
}