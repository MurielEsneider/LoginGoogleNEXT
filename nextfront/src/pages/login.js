"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

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
        <div>
            <h1>{isNewUser ? "Regístrate" : "Inicia sesión"}</h1>
            
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleAuth}>
                {isNewUser ? "Registrarse" : "Iniciar sesión"}
            </button>

            <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>

            <p onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: "pointer", color: "blue" }}>
                {isNewUser ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
            </p>
        </div>
    );
}
