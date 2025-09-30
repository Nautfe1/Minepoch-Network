import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Trophy, Zap } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: Users, label: "Jugadores Totales", value: "50,000+" },
    { icon: Clock, label: "Uptime", value: "99.9%" },
    { icon: Trophy, label: "Comunidad 24/7", value: "Activa" },
    { icon: Zap, label: "Modalidades", value: "10+" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group glass-dark rounded-3xl p-10 hover:scale-105 transition-all duration-300 card-shadow"
            >
              <div className="w-20 h-20 roman-gradient rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-gray-300 text-base font-bold mb-3 uppercase tracking-wider">{stat.label}</p>
              <p className="text-5xl font-black text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}