import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Star, Clock, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Anti-Cheat Avanzado",
      description: "Sistema de protección de última generación que garantiza una experiencia justa para todos los jugadores",
    },
    {
      icon: Zap,
      title: "Rendimiento Óptimo",
      description: "Servidores de alto rendimiento con 0 lag y 99.9% de uptime garantizado las 24 horas",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Miles de legionarios online 24/7 con eventos constantes y una comunidad increíble",
    },
    {
      icon: Star,
      title: "Contenido Exclusivo",
      description: "Items legendarios, rangos imperiales y características únicas que no encontrarás en ningún lado",
    },
    {
      icon: Clock,
      title: "Actualizaciones Constantes",
      description: "Nuevo contenido cada semana con correcciones, mejoras y expansiones del imperio",
    },
    {
      icon: Award,
      title: "Staff Profesional",
      description: "Equipo dedicado y experimentado disponible 24/7 para ayudarte en todo momento",
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block roman-gradient px-8 py-4 rounded-full mb-8 shadow-2xl">
            <p className="text-white font-black text-lg uppercase tracking-widest">🏛️ Virtudes Imperiales 🏛️</p>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 text-shadow-strong">
            ¿Por qué Minepoch?
          </h2>
          <p className="text-gray-200 text-2xl max-w-3xl mx-auto font-semibold text-shadow-strong">
            No es solo un servidor, es una experiencia imperial premium
          </p>
        </motion.div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-3xl p-10 hover:scale-105 transition-all duration-300 card-shadow"
            >
              {/* Icono */}
              <div className="w-24 h-24 roman-gradient rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
                <feature.icon className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-5">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}