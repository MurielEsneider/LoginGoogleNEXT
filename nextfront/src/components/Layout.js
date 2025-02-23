// components/Layout.js
import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import '../../src/globals.css';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="bg-zinc-800 bg-opacity-50 backdrop-blur-md border-b border-white/20 shadow-lg px-6 py-4 text-white flex items-center justify-between relative">
          <Link
            href="/profile"
            className="flex items-center text-white font-bold hover:text-cyan-400 transition-colors"
          >
            <FaUser className="mr-2" />
            Perfil
          </Link>

          {/* Botón de menú con opción de cerrar sesión */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center text-white focus:outline-none"
            >
              <FaBars size={20} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="mr-2" />
                  Cerrar Sesión
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </>
  );
}
