import { motion } from 'framer-motion';

const plans = [
  {
    id: 'basic',
    name: 'Structură',
    description: 'Doar panourile SIP și structura de bază',
    price: '350',
    unit: '/m²',
    features: [
      'Panouri SIP Premium 170mm',
      'Structură lemn uscat',
      'Montaj inclus',
      'Transport inclus (< 100km)',
      'Garanție structură 25 ani',
    ],
    notIncluded: ['Fundație', 'Finisaje', 'Instalații'],
    popular: false,
  },
  {
    id: 'standard',
    name: 'La Roșu',
    description: 'Casă închisă la exterior, gata pentru finisaje',
    price: '550',
    unit: '/m²',
    features: [
      'Tot ce include Structură +',
      'Fundație din beton armat',
      'Acoperiș complet cu țiglă',
      'Ferestre și uși exterioare',
      'Instalații sanitare și electrice',
      'Tencuială exterioară',
    ],
    notIncluded: ['Finisaje interioare'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'La Cheie',
    description: 'Casă completă, gata de mutat',
    price: '850',
    unit: '/m²',
    features: [
      'Tot ce include La Roșu +',
      'Finisaje interioare complete',
      'Parchet sau gresie',
      'Zugrăveli și vopsitorii',
      'Mobilier bucătărie',
      'Centrală termică cu montaj',
      'Curte amenajată',
    ],
    notIncluded: [],
    popular: false,
  },
];

const popularHouses = [
  { name: 'Casa Moderna 100', area: '100 m²', bedrooms: 3, price: '55.000' },
  { name: 'Vila Confort 150', area: '150 m²', bedrooms: 4, price: '82.500' },
  { name: 'Casa Familie 200', area: '200 m²', bedrooms: 5, price: '110.000' },
];

export function Plans() {
  return (
    <section id="pachete" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Pachete Complete</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mt-3 mb-4 md:mb-6">
            Alege Nivelul de Finisare
          </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
            De la structura de bază până la casa complet finisată — oferim soluții flexibile pentru orice buget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${
                plan.popular ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-2 text-sm font-semibold">
                  CEL MAI POPULAR
                </div>
              )}

              <div className={`p-6 md:p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm md:text-base mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-stone-400 text-lg">de la</span>
                  <span className="text-4xl md:text-5xl font-serif text-stone-900">{plan.price}</span>
                  <span className="text-stone-500">EUR{plan.unit}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-stone-100 pt-4 mb-6">
                    <p className="text-xs text-stone-400 mb-2">Nu include:</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.notIncluded.map((item, i) => (
                        <span key={i} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 md:py-4 rounded-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-amber-500/25'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Solicită Ofertă
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular house models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900 rounded-sm p-6 md:p-8 lg:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2">Modele Populare de Case</h3>
              <p className="text-stone-400 text-sm md:text-base">Proiecte tip disponibile imediat, preț "La Roșu"</p>
            </div>
            <a href="#contact" className="text-amber-400 font-medium hover:text-amber-300 transition-colors whitespace-nowrap">
              Vezi toate proiectele →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {popularHouses.map((house, index) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone-800 rounded-sm p-5 md:p-6 hover:bg-stone-700 transition-colors group"
              >
                {/* House illustration */}
                <div className="h-28 md:h-32 mb-4 bg-gradient-to-b from-stone-700 to-stone-800 rounded-sm flex items-end justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                    {house.area}
                  </div>
                </div>

                <h4 className="font-serif text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {house.name}
                </h4>
                <div className="flex items-center gap-4 text-sm text-stone-400 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {house.bedrooms} dormitoare
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-stone-500">de la</span>
                  <span className="text-xl font-serif text-amber-400">{house.price}</span>
                  <span className="text-xs text-stone-500">EUR</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
