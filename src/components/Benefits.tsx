import { motion } from 'framer-motion';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Eficiență Energetică Superioară',
    description: 'Economisește până la 70% din costurile de încălzire și răcire datorită izolației termice excepționale.',
    stat: '-70%',
    statLabel: 'Costuri energie',
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Construcție Rapidă',
    description: 'Casa ta poate fi ridicată în doar 2-3 luni, de 3x mai rapid decât metodele tradiționale de construcție.',
    stat: '3x',
    statLabel: 'Mai rapid',
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Rezistență Seismică',
    description: 'Structura ușoară dar extrem de rigidă oferă protecție sporită în caz de cutremur.',
    stat: '8+',
    statLabel: 'Grade Richter',
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ecologic & Sustenabil',
    description: 'Materiale prietenoase cu mediul și amprentă de carbon redusă pe întreaga durată de viață.',
    stat: '100%',
    statLabel: 'Reciclabil',
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cost Total Redus',
    description: 'Prețuri competitive la construcție plus economii majore pe termen lung la utilități.',
    stat: '25%',
    statLabel: 'Mai ieftin',
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Durabilitate Excepțională',
    description: 'Construcție solidă cu durată de viață de peste 100 de ani cu întreținere minimă.',
    stat: '100+',
    statLabel: 'Ani garanție',
  },
];

export function Benefits() {
  return (
    <section id="beneficii" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">De ce panouri SIP?</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mt-3 mb-4 md:mb-6">
            Avantaje Competitive
          </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
            Tehnologia SIP oferă beneficii superioare față de construcțiile tradiționale din cărămidă sau BCA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-stone-50 p-6 md:p-8 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-amber-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm flex items-center justify-center text-amber-600 group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg md:text-xl text-stone-900 mb-2">{benefit.title}</h3>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-serif text-4xl md:text-5xl text-amber-600">{benefit.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#panouri"
            className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors text-base md:text-lg"
          >
            Descoperă gama noastră de panouri
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
