"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation"; 
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            redirect('/home'); // Si está autenticado, redirige a /home
        } else {
            redirect('/login'); // Si no está autenticado, redirige a /login
        }
    }, [user]);

    return null; // No muestra nada mientras redirige
}
