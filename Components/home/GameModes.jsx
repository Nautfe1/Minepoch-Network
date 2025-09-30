import React from "react";
import { motion } from "framer-motion";
import { Sword, Mountain, Skull, Shield, Crown, Pickaxe } from "lucide-react";

export default function GameModes() {
  const gameModes = [
    {
      icon: Mountain,
      name: "Survival",
      subtitle: "Provincia Silvae",
      description: "Explora tierras vírgenes, construye tu villa romana y sobrevive como un verdadero legionario",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    },
    {
      icon: Crown,
      name: "SkyBlock",
      subtitle: "Insulae Caeli",
      description: "Construye tu isla flotante desde cero y conviértela en un imperio celestial próspero",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800",
    },
    {
      icon: Sword,
      name: "PvP Arena",
      subtitle: "Coliseum",
      description: "Combate como gladiador en el Coliseo y gana la gloria eterna del César",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    },
    {
      icon: Shield,
      name: "Factions",
      subtitle: "Legiones",
      description: "Forma tu legión, conquista territorios enemigos y domina el mapa imperial",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    },
    {
      icon: Pickaxe,
      name: "Prison",
      subtitle: "Carcer",
      description: "Mina en las profundidades, rankea progresivamente y libérate de las mazmorras",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800",
    },
    {
      icon: Skull,
      name: "Bedwars",
      subtitle: "Bellum",
      description: "Protege tu cama y destruye las de tus enemigos en batallas épicas por equipos",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block roman-gradient px-8 py-4 rounded-full mb-8 shadow-2xl">
            <p className="text-white font-black text-lg uppercase tracking-widest">⚔️ Arenas de Combate ⚔️</p>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 text-shadow-strong">
            Modalidades de Juego
          </h2>
          <p className="text-gray-200 text-2xl max-w-3xl mx-auto font-semibold text-shadow-strong">
            Elige tu camino hacia la gloria en el Imperio Minepoch
          </p>
        </motion.div>

        {/* Grid de Modalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gameModes.map((mode, index) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer card-shadow"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={mode.image}
                  alt={mode.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Icono */}
                <div className="absolute top-6 right-6 w-20 h-20 roman-gradient rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <mode.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-white mb-2">{mode.name}</h3>
                <p className="text-amber-400 text-base font-bold italic mb-6">{mode.subtitle}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{mode.description}</p>
                
                <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
                  <span>Explorar</span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}