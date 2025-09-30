import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, ShoppingBag, Users, Crown, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: createPageUrl("Home"), icon: Home },
    { name: "Tienda", path: createPageUrl("Store"), icon: ShoppingBag },
    { name: "Comunidad", path: createPageUrl("Community"), icon: Users },
  ];

  return (
    <div className="min-h-screen relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .minecraft-bg {
          background-image: url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        
        .roman-gradient {
          background: linear-gradient(135deg, #DC2626 0%, #EA580C 50%, #F59E0B 100%);
        }
        
        .text-shadow-strong {
          text-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.8),
            0 4px 20px rgba(0, 0, 0, 0.6);
        }
        
        .card-shadow {
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .glass-dark {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        
        .overlay-dark {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* Minecraft Background */}
      <div className="fixed inset-0 minecraft-bg" />
      <div className="fixed inset-0 bg-black/60" />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b-2 border-amber-600/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 roman-gradient blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-16 h-16 roman-gradient rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Crown className="w-9 h-9 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">
                  MINEPOCH
                </h1>
                <p className="text-sm text-amber-400 uppercase tracking-widest font-bold">
                  Imperium Network
                </p>
              </div>
            </Link>

            {/* Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      isActive
                        ? 'roman-gradient text-white shadow-2xl scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="px-8 py-4 roman-gradient text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl">
                Conectar Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-4 rounded-2xl bg-white/10 backdrop-blur-xl text-amber-400 border border-amber-600/30"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t-2 border-amber-600/50">
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                      isActive
                        ? 'roman-gradient text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <button className="w-full px-6 py-4 roman-gradient text-white font-bold text-lg rounded-2xl mt-2">
                Conectar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-black/90 backdrop-blur-xl border-t-2 border-amber-600/50 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 roman-gradient rounded-2xl flex items-center justify-center shadow-2xl">
                  <Crown className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">MINEPOCH</h3>
                  <p className="text-sm text-amber-400 uppercase tracking-wider font-bold">Imperium Network</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                El servidor de Minecraft más épico con temática romana. Construye tu imperio, lidera tu legión y conquista territorios.
              </p>
              <div className="flex gap-4">
                {['Discord', 'Twitter', 'YouTube'].map((social) => (
                  <div key={social} className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer border border-amber-600/30 hover:border-amber-600/60">
                    <span className="text-white font-bold text-sm">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="text-white font-black text-xl mb-6">Enlaces</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-gray-300 hover:text-amber-400 transition-colors text-lg flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Server Info */}
            <div>
              <h4 className="text-white font-black text-xl mb-6">Servidor</h4>
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-600/50 shadow-2xl">
                <p className="text-gray-400 text-sm mb-3 font-semibold">IP del Servidor:</p>
                <p className="text-amber-400 font-black text-xl mb-4">
                  play.minepoch.net
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 font-semibold">1,247 jugadores online</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-lg">
                &copy; 2024 Minepoch Network. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-3 text-amber-500">
                <span className="text-2xl">🏛️</span>
                <span className="text-sm font-bold uppercase tracking-wider">SPQR • Gloria Aeterna</span>
                <span className="text-2xl">⚔️</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}