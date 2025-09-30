
import React from "react";
import { Crown, Zap, Gift, Sparkles } from "lucide-react";

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    { id: "all", label: "OMNIA", icon: Sparkles },
    { id: "ranks", label: "RANGOS", icon: Crown },
    { id: "kits", label: "KITS", icon: Zap },
    { id: "perks", label: "BENEFICIA", icon: Gift },
  ];

  return (
    <div className="px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 minecraft-font text-xs px-6 py-3 minecraft-btn transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-b from-red-600 to-red-800 text-amber-400'
                  : 'bg-gradient-to-b from-stone-700 to-stone-800 text-stone-400 hover:from-stone-600 hover:to-stone-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
    