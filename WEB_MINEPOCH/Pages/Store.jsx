
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Star, Zap, Shield, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import RankCard from "../components/store/RankCard";
import CategoryFilter from "../components/store/CategoryFilter";

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("all");

  const ranks = [
    {
      name: "CIVIS",
      subtitle: "Ciudadano",
      price: "4.99",
      color: "from-green-700 to-green-900",
      icon: Star,
      features: [
        "Prefijo [CIVIS] imperial",
        "Kit de ciudadano básico",
        "2 domus adicionales",
        "XP x1.5 en conquistas",
        "Prioridad en la cola",
      ],
    },
    {
      name: "EQUES",
      subtitle: "Caballero",
      price: "9.99",
      color: "from-blue-700 to-blue-900",
      icon: Zap,
      popular: true,
      features: [
        "Todo lo de CIVIS",
        "Prefijo [EQUES] dorado",
        "5 domus imperiales",
        "XP x2 en batallas",
        "Fly en el Foro",
        "Kit semanal de caballero",
      ],
    },
    {
      name: "CENTURIO",
      subtitle: "Centurión",
      price: "19.99",
      color: "from-purple-700 to-purple-900",
      icon: Crown,
      features: [
        "Todo lo de EQUES",
        "Prefijo [CENTURIO] épico",
        "10 domus en el imperio",
        "XP x3 en combate",
        "Acceso a warps privados",
        "Comandos de legionario",
        "Kit diario centurión",
      ],
    },
    {
      name: "IMPERATOR",
      subtitle: "Emperador",
      price: "39.99",
      color: "from-red-700 to-red-950",
      icon: Shield,
      features: [
        "Todo lo de CENTURIO",
        "Prefijo [IMPERATOR] legendario",
        "Domus ilimitadas",
        "XP x5 en todo",
        "Partículas imperiales",
        "Mascota águila romana",
        "Kit cada 6 horas",
        "Apoyo del Senado 24/7",
      ],
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-950 to-transparent relative">
        <div className="stone-texture absolute inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-gradient-to-r from-red-800 to-amber-800 px-6 py-2 minecraft-btn mb-6">
              <p className="minecraft-font text-xs text-amber-400">💰 MERCATUS OFFICIALIS 💰</p>
            </div>
            <h1 className="minecraft-font text-5xl md:text-6xl text-amber-500 mb-6 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
              ASCENDE RANGOS
            </h1>
            <p className="text-stone-400 text-xl max-w-3xl mx-auto">
              Desbloquea privilegios imperiales, ventajas épicas y destaca entre los legionarios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Ranks Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ranks.map((rank, index) => (
              <RankCard key={rank.name} rank={rank} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-stone-800 to-stone-900 border-4 border-amber-700 minecraft-btn p-8 md:p-12 relative overflow-hidden"
          >
            <div className="stone-texture absolute inset-0 opacity-20" />
            <div className="relative">
              <h3 className="minecraft-font text-2xl text-amber-500 mb-6">
                INFORMATIONES
              </h3>
              <div className="space-y-4 text-stone-300">
                {[
                  "Los rangos son permanentes y funcionan en todas las arenas",
                  "Pago seguro: PayPal, tarjetas y métodos imperiales",
                  "Activación automática tras la transacción",
                  "Senado disponible 24/7 para asistencia",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-700 minecraft-btn flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 text-lg">✓</span>
                    </div>
                    <p className="text-sm">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-900/30 border-4 border-red-800 minecraft-btn">
                <p className="text-red-400 text-sm minecraft-font">
                  CAVE: Las compras no son reembolsables. Lee los términos antes de comprar.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
