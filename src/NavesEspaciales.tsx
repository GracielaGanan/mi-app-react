import { useState, useEffect } from "react";
import NaveCard from "./components/NaveCard";

export default function NavesEspaciales() {
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const respuesta = await fetch("https://swapi.dev/api/starships/");
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setDatos(datos.results);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos. Por favor, intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    }

    obtenerDatos();
  }, []);

  // Si cargando es true, se muestra un spinner
  if (cargando) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      </div>
    );
  }

  // Si hay un error, se muestra el mensaje de error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-400 mb-4">Error</h1>
            <p className="text-gray-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Si cargando es false y no hay error, se muestra la lista de naves
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
        Naves de Star Wars
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datos.map((nave) => (
          <NaveCard key={nave.model} nave={nave} />
        ))}
      </div>
    </div>
  );
}