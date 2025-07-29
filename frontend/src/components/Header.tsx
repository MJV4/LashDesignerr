import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/servicos", label: "Serviços" },
    { path: "/depoimentos", label: "Depoimentos" },
    { path: "/curso", label: "Curso" },
    { path: "/contatos", label: "Contatos" },
    { path: "/cadastro", label: "Login" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* Logo ou título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex-shrink-0 break-words ml-12 pt-3">
          Luciana{" "}
          <span className="underline-animation-lash relative cursor-pointer">
            Lash-Designer
          </span>
        </h1>

        {/* Botão do menu mobile */}
        <button
          aria-label="Toggle Menu"
          className="text-yellow-400 lg:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu de navegação */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:space-x-6 mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-center font-bold text-lg">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="w-full lg:w-auto break-words bg-yellow-200 rounded-xl hover:bg-amber-400 transition-all duration-300"
              >
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded transition-colors duration-200 whitespace-normal ${
                    location.pathname === item.path
                      ? "text-yellow-600 font-bold"
                      : "text-black hover:underline"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
