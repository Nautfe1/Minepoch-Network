import React from "react";
import { motion } from "framer-motion";
import { Scroll, ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      title: "Nueva Temporada SkyBlock",
      subtitle: "Season V",
      description: "¡La quinta era de las Islas Celestiales ha comenzado! Nuevas islas flotantes, reliquias legendarias y desafíos épicos te esperan",
      date: "15 Diciembre 2024",
      tag: "Actualización",
    },
    {
      title: "Evento de Invierno",
      subtitle: "Festivus Maximus",
      description: "Celebra el invierno con el imperio. Participa en torneos especiales y gana recompensas exclusivas navideñas",
      date: "20 Diciembre 2024",
      tag: "Evento",
    },
    {
      title: "Torneo Gladiadores",
      subtitle: "Copa Imperial",
      description: "Demuestra tu valor en el Coliseo más grande. El vencedor será proclamado Campeón del César con premios épicos",
      date: "10 Diciembre 2024",
      tag: "Torneo",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 roman-gradient px-8 py-4 rounded-full mb-8 shadow-2xl">
            <Scroll className="w-6 h-6 text-white" />
            <p className="text-white font-black text-lg uppercase tracking-widest">Acta Diurna</p>
            <Scroll className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 text-shadow-strong">
            Últimas Noticias
          </h2>
          <p className="text-gray-200 text-2xl max-w-3xl mx-auto font-semibold text-shadow-strong">
            Mantente informado de los edictos imperiales y acontecimientos
          </p>
        </motion.div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer card-shadow"
            >
              {/* Badge */}
              <div className="p-8 pb-0">
                <div className="inline-block roman-gradient px-5 py-2 rounded-full mb-6 shadow-xl">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">{item.tag}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 pt-0">
                <div className="flex items-center gap-3 text-gray-400 text-sm mb-6 font-semibold">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-amber-400 text-base font-bold italic mb-6">{item.subtitle}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{item.description}</p>

                <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
                  <span>Leer más</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}