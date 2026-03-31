/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Instagram, 
  Phone, 
  Calendar, 
  Users, 
  ChevronRight, 
  MessageCircle,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ink/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-2xl tracking-wider text-gold">SELVÁTICO</a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-gold transition-colors">Nosotros</a>
            <a href="#menu" className="text-sm uppercase tracking-widest hover:text-gold transition-colors">Carta</a>
            <a href="#experience" className="text-sm uppercase tracking-widest hover:text-gold transition-colors">Ambiente</a>
            <a href="#locations" className="text-sm uppercase tracking-widest hover:text-gold transition-colors">Restaurantes</a>
            <a href="#reservations" className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors uppercase tracking-widest text-sm">Reservar</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-ink-light absolute top-full left-0 w-full shadow-2xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg uppercase tracking-widest hover:text-gold py-2">Nosotros</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block text-lg uppercase tracking-widest hover:text-gold py-2">Carta</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="block text-lg uppercase tracking-widest hover:text-gold py-2">Ambiente</a>
            <a href="#locations" onClick={() => setIsOpen(false)} className="block text-lg uppercase tracking-widest hover:text-gold py-2">Restaurantes</a>
            <a href="#reservations" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3 bg-gold text-ink uppercase tracking-widest mt-4">Reservar Mesa</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" 
          alt="Sushi premium" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Selvático <br/> <span className="text-gold italic font-light">Sushi & Grill</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-10 tracking-wide font-light max-w-2xl mx-auto"
        >
          Sushi fusión en un entorno salvajemente elegante. Diferentes ubicaciones, una misma experiencia sensorial.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#reservations" className="px-8 py-4 bg-gold text-ink hover:bg-gold-light transition-colors uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-2">
            Reservar mesa <ChevronRight size={16} />
          </a>
          <a href="#menu" className="px-8 py-4 border border-white/30 hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm flex items-center justify-center">
            Ver carta
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Donde la selva se encuentra con Japón</h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              En Selvático, hemos creado un oasis urbano donde la precisión de la técnica japonesa se fusiona con la exuberancia de los sabores tropicales y las brasas del grill.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Nuestro ambiente selvático único, diseñado para estimular todos los sentidos, envuelve una propuesta gastronómica atrevida. Cada plato es una obra de arte, elaborada con ingredientes premium y la creatividad desbordante de nuestros chefs, acompañada de una atención cercana y detallista.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 mt-8">
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Ambiente</h4>
                <p className="text-sm text-gray-500">Exótico y sofisticado</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Cocina</h4>
                <p className="text-sm text-gray-500">Fusión creativa</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 z-0"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipOlN0hmR7YYp_BvxX375gXCUrrApqSXta25Q0Iq=s1360-w1360-h1020-rw" 
              alt="Ambiente Selvático" 
              className="w-full h-full object-cover relative z-10 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Entrantes');

  const menuData: Record<string, {name: string, desc: string, price: string}[]> = {
    'Entrantes': [
      { name: 'Bao de Gambas Tempura', desc: 'Con vegetales salteados (2 uds)', price: '10,90 €' },
      { name: 'Tartar de Aguacate y Atún Rojo', desc: '#1 de tus favoritos', price: '14,90 €' },
      { name: 'Tartar de Aguacate y Salmón', desc: '', price: '14,80 €' },
      { name: 'Edamame Trufado', desc: 'Con mantequilla de trufa y sal rosada', price: '5,10 €' },
      { name: 'Gyozas de Secreto Ibérico', desc: '6 unidades', price: '9,90 €' },
      { name: 'Croquetas de Jamón Ibérico o Queso', desc: '', price: '10,50 €' },
      { name: 'Gambas Tempura', desc: '', price: '11,90 €' },
      { name: 'Kataifi de Queso Ahumado Herreño', desc: 'Con reducción de calabaza confitada', price: '10,50 €' },
      { name: 'Bao de Carrillera de Cerdo', desc: '2 unidades', price: '10,90 €' },
      { name: 'Carpaccio de Solomillo', desc: 'Con virutas de foie', price: '14,50 €' },
    ],
    'Sushi Rolls': [
      { name: 'Alaska Roll Especial', desc: 'Aguacate, queso crema, salmón, topping de ikura y wakame', price: '14,50 €' },
      { name: 'Vegan Roll', desc: 'Champiñones tempura, aguacate, zanahoria, envuelto en pepino', price: '12,90 €' },
      { name: 'Rhino Roll', desc: 'Salmón, aguacate, queso crema, envuelto en cebolla frita', price: '13,90 €' },
      { name: 'Gorilla Roll', desc: 'Gambas furai, queso crema, envuelto en salmón y atún rojo', price: '14,50 €' },
      { name: 'Tiger Roll', desc: 'Tempura con salmón, queso crema y aguacate', price: '14,50 €' },
      { name: 'Acevichado Roll', desc: 'Relleno de gambas, topping de pescado del día y salsa acevichada', price: '15,90 €' },
      { name: 'Wagyu Selvático Roll', desc: 'Wagyu en tartar, topping de cecina de wagyu', price: '16,90 €' },
    ],
    'Rolls Calientes': [
      { name: 'Chicken Roll', desc: 'Queso crema, pimentón, envuelto en panko', price: '12,50 €' },
      { name: 'Nikkei Roll', desc: 'Gambas tempura, aguacate, envuelto en panko con salsa Nikkei', price: '13,90 €' },
      { name: 'Futomaki Crab Salad', desc: 'Gambas furay, envuelto en tempura con ensalada de cangrejo', price: '13,90 €' },
    ],
    'Sashimi & Nigiri': [
      { name: 'Sashimi Mixto', desc: '10 unidades', price: '25,50 €' },
      { name: 'Sashimi de Salmón / Atún Rojo', desc: '5 unidades', price: '13,90 €' },
      { name: 'Nigiri de Gambas Flameado', desc: 'Coronado con cebollín (2 uds)', price: '5,50 €' },
      { name: 'Nigiri de Wagyu Sellado', desc: 'Con mantequilla de trufa (2 uds)', price: '8,90 €' },
      { name: 'Mixto de Nigiris', desc: '10 unidades', price: '29,50 €' },
    ],
    'Arroces': [
      { name: 'Arroz de Verduras', desc: 'Fondeado a fuego y terminado al horno (Mín. 2 pers)', price: '29,80 €' },
      { name: 'Arroz del Señorito', desc: 'Gambas, calamar, almeja y mejillones (Mín. 2 pers)', price: '31,80 €' },
      { name: 'Arroz Negro', desc: 'Calamar sahariano y gambas (Mín. 2 pers)', price: '31,80 €' },
      { name: 'Arroz Trufado de Secreto Ibérico', desc: 'Con verduras de temporada (Mín. 2 pers)', price: '31,80 €' },
    ]
  };

  return (
    <section id="menu" className="py-24 bg-jungle relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ink to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Nuestra Carta</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-12">Menú Selvático</h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm uppercase tracking-widest transition-colors border ${
                  activeTab === tab 
                    ? 'border-gold bg-gold text-ink' 
                    : 'border-white/20 text-gray-400 hover:border-gold hover:text-gold'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto min-h-[400px]">
          {menuData[activeTab].map((dish, index) => (
            <motion.div 
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-white/10 pb-4"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-serif text-white">{dish.name}</h4>
                <span className="text-gold font-medium ml-4 whitespace-nowrap">{dish.price}</span>
              </div>
              {dish.desc && (
                <p className="text-sm text-gray-400 font-light">{dish.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-block px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors uppercase tracking-widest text-sm">
            Descargar Carta PDF
          </a>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 z-20"
          >
            <div className="bg-ink-light p-10 md:p-12 border border-white/5 relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold/50"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold/50"></div>
              
              <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Atmósfera</h2>
              <h3 className="text-4xl font-serif mb-6 leading-tight">Un refugio exótico en la ciudad</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                La iluminación cálida y tenue acaricia las texturas de madera y la abundante vegetación que cuelga de nuestros techos. Cada rincón de Selvático está diseñado para transportarte.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                El sonido envolvente, el aroma a brasas y especias, y una decoración que equilibra el lujo moderno con elementos orgánicos, crean el escenario perfecto para veladas inolvidables.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative h-[500px] lg:h-[700px] lg:-ml-12 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Interior del restaurante" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      text: "Exquisita la ensalada de salmón y atún en tataki. Una explosión de sabores que no te esperas. El servicio impecable.",
      author: "María G.",
      rating: 5
    },
    {
      text: "Ambiente increíble y sushi de gran calidad. Se nota el cuidado en cada detalle, desde la vajilla hasta la música.",
      author: "Carlos R.",
      rating: 5
    },
    {
      text: "Totalmente recomendable por su atención y creatividad. Los rolls premium son de otro nivel. Volveremos seguro.",
      author: "Laura M.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-jungle-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Testimonios</h2>
          <h3 className="text-4xl font-serif">La experiencia de nuestros clientes</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-ink p-8 border border-white/5 flex flex-col h-full"
            >
              <div className="flex text-gold mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-8 flex-grow">"{review.text}"</p>
              <p className="text-gold font-serif tracking-wide">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const locations = [
    {
      name: "Las Palmas - La Minilla",
      address: "C. Pintor Juan Guillermo, 6-8, 35011 Las Palmas de Gran Canaria",
      extra: "C.C. Minilla Center",
      hours: [
        { days: "Martes", time: "13:00 – 23:30" },
        { days: "Miércoles", time: "13:00 – 23:30" },
        { days: "Jueves", time: "13:00 – 23:30" },
        { days: "Viernes", time: "13:00 – 01:00" },
        { days: "Sábado", time: "13:00 – 01:00" },
        { days: "Domingo", time: "13:00 – 17:00" },
        { days: "Lunes", time: "Cerrado" }
      ],
      mapLink: "https://www.google.com/maps/search/?api=1&query=C.+Pintor+Juan+Guillermo,+6-8,+35011+Las+Palmas+de+Gran+Canaria"
    },
    {
      name: "Puerto Rico - The Market",
      address: "Av Tomás Roca Bosch, 4, Local 11, 35130 Puerto Rico, Las Palmas",
      extra: "C.C. The Market Puerto Rico",
      hours: [
        { days: "Martes", time: "12:30 – 24:00" },
        { days: "Miércoles", time: "12:30 – 24:00" },
        { days: "Jueves", time: "12:30 – 24:00" },
        { days: "Viernes", time: "12:30 – 01:00" },
        { days: "Sábado", time: "12:30 – 01:00" },
        { days: "Domingo", time: "12:30 – 24:00" },
        { days: "Lunes", time: "12:30 – 24:00" }
      ],
      mapLink: "https://www.google.com/maps/place/Selv%C3%A1tico+Sushi+%26+Grill+Puerto+Rico/@27.7931956,-15.7092898,17z/data=!3m1!4b1!4m6!3m5!1s0xc4081cebd67e203:0x71f31362945ba2d1!8m2!3d27.7931909!4d-15.7067149!16s%2Fg%2F11sjwgfsn2?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-ink relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Nuestra Franquicia</h2>
          <h3 className="text-4xl font-serif">Nuestros Restaurantes</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-ink-light p-8 border border-white/5 flex flex-col h-full hover:border-gold/50 transition-colors"
            >
              <h4 className="text-2xl font-serif text-white mb-4">{loc.name}</h4>
              
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 font-light text-sm">{loc.address}</p>
                  {loc.extra && <p className="text-gold font-light text-sm mt-1">{loc.extra}</p>}
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-8 flex-grow">
                <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                <div className="w-full">
                  {loc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{h.days}</span>
                      <span className="text-gray-300">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-gold text-gold text-center uppercase tracking-widest text-xs hover:bg-gold hover:text-ink transition-colors block"
              >
                Ver en Google Maps
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  const [restaurant, setRestaurant] = useState('Las Palmas - La Minilla');
  const [date, setDate] = useState('');
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const schedules: Record<string, Record<number, { start: string, end: string } | null>> = {
    'Las Palmas - La Minilla': {
      1: null, // Lunes: Cerrado
      2: { start: '13:00', end: '23:30' }, // Martes
      3: { start: '13:00', end: '23:30' }, // Miércoles
      4: { start: '13:00', end: '23:30' }, // Jueves
      5: { start: '13:00', end: '01:00' }, // Viernes
      6: { start: '13:00', end: '01:00' }, // Sábado
      0: { start: '13:00', end: '17:00' }, // Domingo
    },
    'Puerto Rico - The Market': {
      1: { start: '12:30', end: '24:00' }, // Lunes
      2: { start: '12:30', end: '24:00' }, // Martes
      3: { start: '12:30', end: '24:00' }, // Miércoles
      4: { start: '12:30', end: '24:00' }, // Jueves
      5: { start: '12:30', end: '01:00' }, // Viernes
      6: { start: '12:30', end: '01:00' }, // Sábado
      0: { start: '12:30', end: '24:00' }, // Domingo
    }
  };

  useEffect(() => {
    if (!date) {
      setTimeSlots([]);
      return;
    }

    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();
    const schedule = schedules[restaurant][dayOfWeek];

    if (!schedule) {
      setTimeSlots([]);
      return;
    }

    const slots: string[] = [];
    const [startH, startM] = schedule.start.split(':').map(Number);
    const [endH, endM] = schedule.end.split(':').map(Number);

    let currentH = startH;
    let currentM = startM;

    // Handle end time after midnight
    const endTotalMinutes = (endH < startH ? endH + 24 : endH) * 60 + endM;

    while (true) {
      const currentTotalMinutes = (currentH < startH ? currentH + 24 : currentH) * 60 + currentM;
      
      if (currentTotalMinutes > endTotalMinutes) break;

      const hStr = currentH.toString().padStart(2, '0');
      const mStr = currentM.toString().padStart(2, '0');
      slots.push(`${hStr}:${mStr}`);

      currentM += 30;
      if (currentM >= 60) {
        currentH = (currentH + 1) % 24;
        currentM = 0;
      }
    }

    setTimeSlots(slots);
  }, [restaurant, date]);

  return (
    <section id="reservations" className="py-24 bg-jungle-light relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Reservas</h2>
            <h3 className="text-4xl font-serif mb-8">Asegura tu mesa</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Restaurante</label>
                  <div className="relative">
                    <select 
                      value={restaurant}
                      onChange={(e) => setRestaurant(e.target.value)}
                      className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option>Las Palmas - La Minilla</option>
                      <option>Puerto Rico - The Market</option>
                    </select>
                    <MapPin className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Teléfono</label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="+34 600 000 000"
                    />
                    <Phone className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Personas</label>
                  <div className="relative">
                    <select className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>2 Personas</option>
                      <option>3 Personas</option>
                      <option>4 Personas</option>
                      <option>5+ Personas</option>
                    </select>
                    <Users className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Fecha</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                    />
                    <Calendar className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Hora</label>
                  <div className="relative">
                    <select 
                      disabled={!date || timeSlots.length === 0}
                      className="w-full bg-ink border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {!date ? (
                        <option>Selecciona una fecha</option>
                      ) : timeSlots.length === 0 ? (
                        <option>Cerrado este día</option>
                      ) : (
                        timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))
                      )}
                    </select>
                    <Clock className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gold text-ink py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors mt-4">
                Solicitar Reserva
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Para reservas de más de 8 personas, por favor contáctenos directamente.
              </p>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="bg-ink p-10 border border-white/5 relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gold/50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-gold/50"></div>
              
              <h3 className="text-2xl font-serif mb-8 text-white">Atención al Cliente</h3>
              
              <div className="space-y-8">
                <p className="text-gray-400 font-light leading-relaxed">
                  ¿Tienes alguna petición especial, alergia alimentaria o necesitas organizar un evento privado? Nuestro equipo está a tu disposición.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Teléfono Central</h4>
                    <p className="text-gray-400 font-light">+34 928 023 547</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400 font-light">info@selvaticocanarias.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink-light py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl tracking-wider text-gold">
          SELVÁTICO
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gold transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="text-gray-500 text-sm font-light">
          &copy; {new Date().getFullYear()} Selvático Sushi & Grill. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="#reservations" 
        className="w-14 h-14 bg-gold text-ink rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Reservar mesa"
      >
        <Calendar size={24} />
      </a>
      <a 
        href="#" 
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white selection:bg-gold selection:text-ink">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Experience />
      <Locations />
      <Reviews />
      <Reservation />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
