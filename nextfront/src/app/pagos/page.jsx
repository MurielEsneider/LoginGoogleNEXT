"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DollarSign, Check, Clock, AlertCircle, ArrowLeft } from "lucide-react";
import '../../../src/globals.css';

export default function GestionPagos() {
    const router = useRouter();

    // Datos de ejemplo (puedes reemplazar esto con datos reales desde una API o estado)
    const [pagos, setPagos] = useState([
        {
            id: 1,
            arrendatario: "Juan Pérez",
            monto: 1500,
            fecha: "2023-10-15",
            estado: "pendiente", // Puede ser "pendiente", "pagado" o "atrasado"
        },
        {
            id: 2,
            arrendatario: "María Gómez",
            monto: 1200,
            fecha: "2023-10-10",
            estado: "pagado",
        },
        {
            id: 3,
            arrendatario: "Carlos López",
            monto: 1000,
            fecha: "2023-09-25",
            estado: "atrasado",
        },
    ]);

    // Función para marcar un pago como pagado
    const handleMarcarComoPagado = (id) => {
        setPagos((prev) =>
            prev.map((pago) =>
                pago.id === id ? { ...pago, estado: "pagado" } : pago
            )
        );
        alert(`Pago #${id} marcado como pagado.`);
    };

    // Función para ver detalles del pago
    const handleVerDetalles = (id) => {
        router.push(`/detalles-pago/${id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 flex items-center justify-center p-4">
            {/* Fondo con efecto blur */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" />

            {/* Contenedor principal */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 max-w-4xl w-full mx-4">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
                    Gestión de Pagos
                </h1>

                {/* Lista de pagos */}
                <div className="space-y-4">
                    {pagos.length > 0 ? (
                        pagos.map((pago) => (
                            <div
                                key={pago.id}
                                className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 p-6 flex flex-col lg:flex-row gap-6 items-center justify-between"
                            >
                                {/* Detalles del pago */}
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white mb-2">
                                        Pago #{pago.id} - {pago.arrendatario}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <DollarSign className="w-5 h-5" />
                                        <p>Monto: ${pago.monto}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300 mt-2">
                                        <Clock className="w-5 h-5" />
                                        <p>Fecha: {pago.fecha}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300 mt-2">
                                        {pago.estado === "pendiente" && (
                                            <AlertCircle className="w-5 h-5 text-yellow-500" />
                                        )}
                                        {pago.estado === "pagado" && (
                                            <Check className="w-5 h-5 text-green-500" />
                                        )}
                                        {pago.estado === "atrasado" && (
                                            <AlertCircle className="w-5 h-5 text-red-500" />
                                        )}
                                        <p
                                            className={
                                                pago.estado === "pendiente"
                                                    ? "text-yellow-500"
                                                    : pago.estado === "pagado"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                                            Estado: {pago.estado}
                                        </p>
                                    </div>
                                </div>

                                {/* Acciones */}
                                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                                    {pago.estado === "pendiente" && (
                                        <button
                                            onClick={() => handleMarcarComoPagado(pago.id)}
                                            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                        >
                                            <Check className="w-5 h-5 mr-2" />
                                            Marcar como pagado
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-400">
                            <p>No hay pagos registrados.</p>
                        </div>
                    )}
                </div>

                {/* Botón para volver al inicio */}
                <button
                    onClick={() => router.push("/arrendatario")}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center mt-6"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Volver al perfil
                </button>
            </div>
        </div>
    );
}