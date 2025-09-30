
import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Heart, MessageCircle } from "lucide-react";

export default function Community() {
  const staff = [
    {
      name: "Admin_RedStone",
      role: "Administrador",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin1",
      color: "red",
    },
    {
      name: "Mod_Phoenix",
      role: "Moderador Senior",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mod1",
      color: "orange",
    },
    {
      name: "Helper_Solar",
      role: "Helper",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=helper1",
      color: "yellow",
    },
    {
      name: "Dev_Matrix",
      role: "Desarrollador",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev1",
      color: "red",
    },
  ];

  const rules = [
    "Respeta a todos los jugadores y al staff",
    "No uses hacks, cheats o mods no permitidos",
    "Prohibido el spam en el chat",
    "No grief ni robes en zonas protegidas",
    "El idioma principal es español",
    "Reporta bugs y jugadores problemáticos al staff",
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
              <p className="minecraft-font text-xs text-amber-400">👥 NOSTRA COMMUNITAS 👥</p>
            </div>
            <h1 className="minecraft-font text-5xl md:text-6xl text-amber-500 mb-6 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
              FAMILIA ROMANA
            </h1>
            <p className="text-stone-400 text-xl max-w-3xl mx-auto">
              Miles de legionarios, eventos épicos y un senado dedicado te esperan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Discord", value: "15K+" },
              { icon: MessageCircle, label: "Mensajes", value: "50K+" },
              { icon: Heart, label: "Eventos", value: "20+" },
              { icon: Shield, label: "Staff", value: "24/7" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-b from-stone-800 to-stone-900 border-4 border-stone-700 minecraft-btn p-6 text-center hover:border-amber-700 transition-all duration-300 relative overflow-hidden"
              >
                <div className="stone-texture absolute inset-0 opacity-20" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-b from-red-600 to-red-800 minecraft-btn mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="minecraft-font text-2xl text-amber-500 mb-2">{stat.value}</p>
                  <p className="text-stone-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="minecraft-font text-4xl text-amber-500 mb-4 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
              SENATUS ROMANUS
            </h2>
            <p className="text-stone-400 text-lg">
              Un equipo dedicado sirviendo al imperio 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-b from-stone-800 to-stone-900 border-4 border-stone-700 minecraft-btn p-6 text-center hover:border-amber-700 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="stone-texture absolute inset-0 opacity-20" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-amber-600 minecraft-btn overflow-hidden bg-stone-950">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="minecraft-font text-sm text-amber-400 mb-1">{member.name}</h3>
                  <p className="text-red-500 text-xs">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-stone-950 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="minecraft-font text-4xl text-amber-500 mb-4 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
              LEGES IMPERIALIS
            </h2>
            <p className="text-stone-400 text-lg">
              Mantén el imperio sano y divertido para todos los ciudadanos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-stone-800 to-stone-900 border-4 border-amber-700 minecraft-btn p-8 relative overflow-hidden"
          >
            <div className="stone-texture absolute inset-0 opacity-20" />
            <ul className="space-y-4 relative">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-b from-red-600 to-red-800 minecraft-btn flex items-center justify-center">
                    <span className="minecraft-font text-xs text-amber-400">
                      {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
                    </span>
                  </div>
                  <span className="mt-2 text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
