"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Home, MapPin, DollarSign, Image, Check, Upload } from "lucide-react";
import '../../../src/globals.css';


export default function PublicarPropiedad() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        direccion: "",
        precio: "",
        imagen: null, // Cambiamos a null para manejar archivos
    });
    const [previewImage, setPreviewImage] = useState(null); // Estado para la vista previa de la imagen

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, imagen: file })); // Guarda el archivo
            setPreviewImage(URL.createObjectURL(file)); // Crea una URL para la vista previa
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Propiedad publicada:", formData);
        alert("¡Propiedad publicada con éxito!");
        router.push("/propiedadesPublicadas"); 
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 flex items-center justify-center p-4">
            {/* Fondo con efecto blur */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" />

            {/* Contenedor principal */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 flex flex-col lg:flex-row gap-8 max-w-4xl w-full mx-4">
                {/* Formulario */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
                        Publicar Propiedad
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Campo: Título */}
                        <div className="relative">
                            <Home className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="titulo"
                                placeholder="Título de la propiedad"
                                value={formData.titulo}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Campo: Descripción */}
                        <div className="relative">
                            <textarea
                                name="descripcion"
                                placeholder="Descripción de la propiedad"
                                value={formData.descripcion}
                                onChange={handleChange}
                                rows="4"
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Campo: Dirección */}
                        <div className="relative">
                            <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="direccion"
                                placeholder="Dirección"
                                value={formData.direccion}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Campo: Precio */}
                        <div className="relative">
                            <DollarSign className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="number"
                                name="precio"
                                placeholder="Precio al mes"
                                value={formData.precio}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Campo: Imagen (Archivo) */}
                        <div className="relative">
                            <label className="flex items-center justify-center w-full h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white cursor-pointer hover:bg-white/20 transition-all duration-300">
                                <Upload className="w-5 h-5 mr-2" />
                                <span>Seleccionar imagen</span>
                                <input
                                    type="file"
                                    name="imagen"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    required
                                />
                            </label>
                        </div>


                        {/* Botón de Publicar */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                        >
                            Publicar
                            <Check className="w-5 h-5 ml-2" />
                        </button>
                    </form>
                </div>

                {/* Vista previa de la imagen */}
                <div className="flex-1 flex items-center justify-center">
                    {previewImage ? (
                        <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center">
                            <img
                                src={previewImage}
                                alt="Vista previa de la propiedad"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center text-gray-400">
                            <p>Vista previa de la imagen</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}