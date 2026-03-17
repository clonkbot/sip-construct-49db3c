import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50" />
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-stone-900" />
        </svg>
      </div>

      {/* Decorative panels */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-0 w-32 md:w-64 h-48 md:h-96 bg-gradient-to-b from-amber-400 to-orange-500 opacity-20 -skew-y-12"
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-1/3 right-8 md:right-16 w-24 md:w-48 h-40 md:h-80 bg-stone-800 opacity-10 -skew-y-12"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Construiește viitorul
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-tight mb-4 md:mb-6">
              Casa ta nouă,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                în timp record
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed mb-6 md:mb-8 max-w-xl">
              Panourile SIP reprezintă cea mai modernă tehnologie de construcție.
              Eficiență energetică superioară, durabilitate și montaj rapid —
              casa ta de vis poate fi gata în doar 2-3 luni.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-sm text-base md:text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
              >
                Solicită Ofertă Gratuită
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#panouri"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-700 px-6 md:px-8 py-3.5 md:py-4 rounded-sm text-base md:text-lg font-semibold border border-stone-300 hover:border-amber-500 hover:text-amber-600 transition-all"
              >
                Vezi Panourile
              </a>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              {[
                { value: '15+', label: 'Ani Experiență' },
                { value: '500+', label: 'Proiecte Finalizate' },
                { value: '98%', label: 'Clienți Mulțumiți' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                >
                  <div className="font-serif text-2xl md:text-3xl text-stone-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-stone-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* SIP Panel Illustration */}
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Outer layer - OSB */}
              <motion.div
                initial={{ x: 50, rotateY: 30 }}
                animate={{ x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute inset-4 md:inset-8 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-sm shadow-2xl"
                style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
              >
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="wood" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 20h40M20 0v40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wood)" />
                  </svg>
                </div>
              </motion.div>

              {/* Middle layer - EPS/Foam */}
              <motion.div
                initial={{ x: 30, rotateY: 20 }}
                animate={{ x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="absolute inset-8 md:inset-16 bg-gradient-to-br from-stone-100 to-stone-200 rounded-sm shadow-xl"
                style={{ transform: 'perspective(1000px) rotateY(-3deg)' }}
              >
                <div className="absolute inset-4 border-2 border-dashed border-stone-300 rounded-sm" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-stone-400 text-xs md:text-sm font-medium tracking-wider">IZOLAȚIE EPS</span>
                  <div className="text-stone-500 text-2xl md:text-4xl font-serif mt-2">150mm</div>
                </div>
              </motion.div>

              {/* Inner layer - OSB */}
              <motion.div
                initial={{ x: 10, rotateY: 10 }}
                animate={{ x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="absolute inset-12 md:inset-24 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-sm shadow-lg flex items-center justify-center"
                style={{ transform: 'perspective(1000px) rotateY(-1deg)' }}
              >
                <div className="text-center text-white">
                  <div className="text-sm md:text-lg font-semibold mb-1">Panou SIP</div>
                  <div className="text-xs md:text-sm opacity-80">Structură Sandwich</div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white px-3 py-2 md:px-4 md:py-3 rounded-sm shadow-lg border-l-4 border-amber-500"
              >
                <div className="text-xs text-stone-500">Coeficient U</div>
                <div className="text-lg md:text-xl font-serif text-stone-900">0.12 W/m²K</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-br from-amber-500 to-orange-600 px-3 py-2 md:px-4 md:py-3 rounded-sm shadow-lg text-white"
              >
                <div className="text-xs opacity-80">Economie</div>
                <div className="text-lg md:text-xl font-serif">până la 70%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-amber-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
