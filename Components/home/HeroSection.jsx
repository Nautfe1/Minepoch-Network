import React from "react";
import { motion } from "framer-motion";
import { Swords, Users, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-6">
      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/80 backdrop-blur-xl rounded-full border-2 border-amber-600/50 shadow-2xl">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-white font-bold text-lg uppercase tracking-widest">
                Imperio Romano
              </span>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
          </motion.div>

          {/* Título Principal */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-black text-white text-shadow-strong leading-none">
              MINEPOCH
            </h1>
            
            <div className="inline-flex items-center gap-4 px-10 py-5 roman-gradient rounded-full shadow-2xl">
              <span className="text-white font-black text-2xl uppercase tracking-wider">
                Network Premium
              </span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-2xl md:text-3xl text-white font-semibold max-w-4xl mx-auto leading-relaxed text-shadow-strong">
            🏛️ Ave, legionario! Construye tu imperio, lidera tu legión y conquista 
            los reinos de Minecraft. La gloria eterna te espera ⚔️
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <button className="group relative px-12 py-6 roman-gradient text-white font-black text-xl rounded-2xl overflow-hidden hover:scale-110 transition-all duration-300 shadow-2xl">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-4">
                <Play className="w-7 h-7" />
                <span>Jugar Ahora</span>
              </div>
            </button>
            
            <div className="px-10 py-6 bg-black/80 backdrop-blur-xl rounded-2xl border-2 border-amber-600/50 shadow-2xl">
              <div className="flex items-center gap-5">
                <Users className="w-8 h-8 text-amber-400" />
                <div className="text-left">
                  <p className="text-gray-300 text-sm font-bold uppercase tracking-wider">Jugadores Online</p>
                  <p className="text-white font-black text-3xl">1,247</p>
                </div>
              </div>
            </div>
          </div>

          {/* IP del Servidor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-12"
          >
            <p className="text-gray-300 mb-6 font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-3">
              <Swords className="w-6 h-6 text-amber-400" />
              IP Imperial
              <Swords className="w-6 h-6 text-amber-400" />
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 roman-gradient blur-3xl opacity-60" />
              <div className="relative px-12 py-6 bg-black/90 backdrop-blur-xl rounded-2xl border-2 border-amber-600/50 shadow-2xl">
                <p className="text-amber-400 font-black text-3xl md:text-4xl">
                  play.minepoch.net
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-10 h-16 border-3 border-white/50 rounded-full flex justify-center p-3">
          <motion.div
            className="w-3 h-3 bg-amber-400 rounded-full"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}