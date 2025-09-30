
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sword, Shield, Crown, Users, Clock, TrendingUp, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import HeroSection from "../components/home/HeroSection";
import GameModes from "../components/home/GameModes";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import NewsSection from "../components/home/NewsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <GameModes />
      <Features />
      <NewsSection />
      
      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 roman-gradient blur-3xl opacity-40" />
            
            <div className="relative glass-dark rounded-[3rem] p-16 md:p-20 text-center card-shadow border-2 border-amber-600/50">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow-strong">
                ¿Listo para la Gloria?
              </h2>
              <p className="text-gray-200 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-semibold text-shadow-strong">
                Únete ahora a miles de legionarios y vive la mejor experiencia imperial de Minecraft
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <div className="glass-dark px-10 py-6 rounded-2xl border-2 border-amber-600/50 shadow-2xl">
                  <p className="text-gray-300 text-base font-bold mb-3 uppercase tracking-wider">IP Imperial</p>
                  <p className="text-amber-400 font-black text-3xl">
                    play.minepoch.net
                  </p>
                </div>
                <button className="px-12 py-6 roman-gradient text-white font-black text-xl rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl">
                  Copiar IP
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
