"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import '../../src/globals.css';


export default function Login() {
    const { login, loginWithGoogle, register } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNewUser, setIsNewUser] = useState(false); // Estado para alternar entre registro e inicio de sesión

    const handleAuth = async () => {
        if (!email || !password) {
            console.error("Email y contraseña son obligatorios.");
            return;
        }

        try {
            if (isNewUser) {
                await register(email, password);
                console.log("Usuario registrado correctamente.");
            } else {
                await login(email, password);
                console.log("Inicio de sesión exitoso.");
            }
            router.push("/home");
        } catch (error) {
            console.error("Error en la autenticación:", error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            router.push("/home");
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error.message);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
    <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-6 text-white">
            {isNewUser ? "Regístrate" : "Inicia sesión"}
        </h1>

        <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
            onClick={handleAuth}
            className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg mb-3 transition"
        >
            {isNewUser ? "Registrarse" : "Iniciar sesión"}
        </button>

        <button
            onClick={handleGoogleLogin}
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mb-4 transition"
        >
            Iniciar sesión con Google
        </button>

        <p
            onClick={() => setIsNewUser(!isNewUser)}
            className="text-white cursor-pointer hover:underline"
        >
            {isNewUser ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
        </p>
    </div>
</div>

    );
}
