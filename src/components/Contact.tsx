import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Contact</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-4 md:mb-6">
              Solicită Ofertă Gratuită
            </h2>
            <p className="text-stone-400 text-base md:text-lg mb-8">
              Completează formularul și te contactăm în maxim 24 de ore cu o ofertă personalizată pentru proiectul tău.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center text-amber-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Telefon</div>
                  <a href="tel:+40721234567" className="text-amber-400 hover:text-amber-300 transition-colors">
                    +40 721 234 567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center text-amber-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <a href="mailto:contact@sipconstruct.ro" className="text-amber-400 hover:text-amber-300 transition-colors">
                    contact@sipconstruct.ro
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center text-amber-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Adresă</div>
                  <span className="text-stone-400">
                    Str. Industriilor 45, București
                  </span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-stone-800/50 p-4 md:p-6 rounded-sm">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-stone-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Ofertă fără obligații
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Răspuns în 24h
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-stone-800 p-6 md:p-8 lg:p-10 rounded-sm">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-400 text-sm mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-700 border border-stone-600 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Ion Popescu"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-stone-400 text-sm mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-700 border border-stone-600 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="0721 234 567"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-stone-400 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="area" className="block text-stone-400 text-sm mb-2">
                    Suprafață estimată (m²)
                  </label>
                  <select
                    id="area"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Selectează</option>
                    <option value="50-100">50 - 100 m²</option>
                    <option value="100-150">100 - 150 m²</option>
                    <option value="150-200">150 - 200 m²</option>
                    <option value="200-300">200 - 300 m²</option>
                    <option value="300+">Peste 300 m²</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-stone-400 text-sm mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Detalii despre proiectul tău..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-sm text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
                >
                  Trimite Cererea
                </button>

                <p className="text-xs text-stone-500 mt-4 text-center">
                  Prin trimiterea formularului, ești de acord cu politica noastră de confidențialitate.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-stone-800 p-8 md:p-12 rounded-sm text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                  Mulțumim pentru mesaj!
                </h3>
                <p className="text-stone-400 text-base md:text-lg mb-6">
                  Am primit cererea ta și te vom contacta în maximum 24 de ore cu o ofertă personalizată.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Trimite altă cerere
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
