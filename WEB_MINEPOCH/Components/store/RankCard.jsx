
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RankCard({ rank, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-gradient-to-b from-stone-800 to-stone-900 border-4 border-stone-700 minecraft-btn overflow-hidden hover:border-amber-700 transition-all duration-300 hover:scale-105 ${
        rank.popular ? 'ring-4 ring-red-600' : ''
      }`}
    >
      <div className="stone-texture absolute inset-0 opacity-20" />
      
      {rank.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-700 to-amber-700 text-center py-2 z-10">
          <p className="minecraft-font text-xs text-white">★ POPULARIS ★</p>
        </div>
      )}
      
      <div className={`p-6 relative ${rank.popular ? 'pt-14' : ''}`}>
        <div className={`w-20 h-20 bg-gradient-to-b ${rank.color} minecraft-btn flex items-center justify-center mb-4`}>
          <rank.icon className="w-10 h-10 text-amber-400" />
        </div>
        
        <h3 className="minecraft-font text-xl text-amber-500 mb-1">{rank.name}</h3>
        <p className="text-stone-500 text-sm italic mb-4">{rank.subtitle}</p>
        
        <div className="mb-6">
          <span className="minecraft-font text-3xl text-amber-400">${rank.price}</span>
          <span className="text-stone-400 ml-2 text-sm">DENARII</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {rank.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-300 text-sm">
              <div className="w-5 h-5 bg-green-700 minecraft-btn flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-400 text-xs">✓</span>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full minecraft-font text-xs bg-gradient-to-b ${rank.color} text-amber-400 py-6 minecraft-btn hover:scale-105 transition-all duration-300`}>
          EMERE NUNC
        </Button>
      </div>
    </motion.div>
  );
}
