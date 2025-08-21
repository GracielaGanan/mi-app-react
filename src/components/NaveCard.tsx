interface NaveCardProps {
  nave: {
    name: string;
    model: string;
    manufacturer: string;
    starship_class: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    hyperdrive_rating: string;
  };
}

export default function NaveCard({ nave }: NaveCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
      <h2 className="text-xl font-bold mb-2 text-yellow-400">
        {nave.name}
      </h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-gray-400">Modelo:</span>{" "}
          {nave.model}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Fabricante:</span>{" "}
          {nave.manufacturer}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Clase:</span>{" "}
          {nave.starship_class}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Velocidad:</span>{" "}
          {nave.max_atmosphering_speed}
        </p>
        <p>
          <span className="font-semibold text-gray-400">
            Tripulación:
          </span>{" "}
          {nave.crew}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Pasajeros:</span>{" "}
          {nave.passengers}
        </p>
        <p>
          <span className="font-semibold text-gray-400">
            Capacidad de carga:
          </span>{" "}
          {nave.cargo_capacity}
        </p>
        <p>
          <span className="font-semibold text-gray-400">
            Clasificación del hiperimpulsor:
          </span>{" "}
          {nave.hyperdrive_rating}
        </p>
      </div>
    </div>
  );
}