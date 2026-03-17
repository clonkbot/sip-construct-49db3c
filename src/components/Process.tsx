import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultanță & Proiectare',
    description: 'Discutăm nevoile tale, analizăm terenul și realizăm proiectul arhitectural personalizat.',
    duration: '1-2 săptămâni',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Producție Panouri',
    description: 'Fabricăm panourile SIP la dimensiunile exacte din proiect, în fabrica noastră modernă.',
    duration: '2-3 săptămâni',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Fundație & Pregătire',
    description: 'Turnăm fundația din beton armat și pregătim amplasamentul pentru montaj.',
    duration: '1-2 săptămâni',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Montaj Structură',
    description: 'Echipa noastră montează rapid panourile SIP. Casa este închisă în doar câteva zile.',
    duration: '1-2 săptămâni',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Instalații & Finisaje',
    description: 'Instalăm toate utilitățile și finalizăm casa conform nivelului de finisare ales.',
    duration: '4-8 săptămâni',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Recepție & Predare',
    description: 'Verificăm totul împreună și îți predăm cheile casei tale noi, gata de mutat.',
    duration: 'Final',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="proces" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Cum Lucrăm</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mt-3 mb-4 md:mb-6">
            De la Idee la Casă în 2-3 Luni
          </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
            Procesul nostru este transparent și eficient. Te ținem la curent în fiecare etapă.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-orange-500" />

          <div className="space-y-8 md:space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className={`bg-stone-50 p-6 md:p-8 rounded-sm hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm flex items-center justify-center text-amber-600">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-amber-500 font-mono text-sm">{step.number}</span>
                        <h3 className="font-serif text-xl md:text-2xl text-stone-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm md:text-base mb-4">{step.description}</p>
                    <div className={`inline-flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full ${
                      index % 2 === 0 ? 'lg:float-right' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-amber-500 rounded-full ring-4 ring-white shadow" />
                    {index === steps.length - 1 && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
        >
          {[
            { value: '2-3', label: 'Luni până la predare' },
            { value: '5-7', label: 'Zile montaj structură' },
            { value: '100%', label: 'Materiale certificate' },
            { value: '25', label: 'Ani garanție structură' },
          ].map((stat, index) => (
            <div key={stat.label} className="bg-stone-50 p-4 md:p-6 rounded-sm">
              <div className="font-serif text-2xl md:text-4xl text-amber-600 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
