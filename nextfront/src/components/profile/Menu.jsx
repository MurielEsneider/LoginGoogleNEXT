export default function Menu() {
  const menuItems = [
    { label: "Registrarse como arrendatario", href: "/registrarArrendatario" },
    { label: "Publicaciones guardadas", href: "/saved-posts" },
    { label: "Enviar reportes", href: "/reportes" },
    { label: "Notificaciones", href: "/notificaciones" },
    { label: "Cerrar sesión", href: "/" },
  ]

  return (
    <nav className="mt-8">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 rounded-md 
                         hover:bg-white/30 hover:backdrop-blur-sm hover:text-blue-500 
                         transition-all duration-150 ease-in-out"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
