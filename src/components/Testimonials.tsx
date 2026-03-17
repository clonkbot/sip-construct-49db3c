import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Andrei Popescu',
    location: 'București',
    text: 'Am ales panouri SIP pentru că ne-am dorit o casă eficientă energetic. După 2 ani de locuit, consumul la încălzire este cu 60% mai mic decât la apartamentul vechi. Recomand cu încredere!',
    rating: 5,
    project: 'Casă 150 m²',
  },
  {
    name: 'Maria Ionescu',
    location: 'Cluj-Napoca',
    text: 'Viteza de construcție a fost incredibilă. Din momentul în care am semnat contractul până ne-am mutat au trecut doar 3 luni. Calitatea finisajelor a depășit așteptările.',
    rating: 5,
    project: 'Vila 200 m²',
  },
  {
    name: 'Gheorghe Munteanu',
    location: 'Timișoara',
    text: 'Ca arhitect, am lucrat cu multe materiale de construcție. Panourile SIP oferă libertate în design și performanțe termice superioare. Le recomand tuturor clienților mei.',
    rating: 5,
    project: 'Proiect comercial',
  },
];

const certifications = [
  { name: 'CE', description: 'Marcaj CE' },
  { name: 'ISO', description: 'ISO 9001:2015' },
  { name: 'ETA', description: 'Agrementare Europeană' },
  { name: 'FSC', description: 'Lemn Certificat' },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Testimoniale</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mt-3 mb-4 md:mb-6">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
            Peste 500 de familii și-au construit casa cu panouri SIP de la noi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <div>
                  <div className="font-medium text-stone-900">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-stone-500">{testimonial.location}</div>
                </div>
                <div className="text-xs md:text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {testimonial.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-sm p-6 md:p-8 lg:p-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="md:w-1/3">
              <h3 className="font-serif text-xl md:text-2xl text-stone-900 mb-2">
                Certificări & Standarde
              </h3>
              <p className="text-stone-600 text-sm md:text-base">
                Toate produsele noastre respectă cele mai stricte standarde europene de calitate și siguranță.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-stone-50 p-4 md:p-6 rounded-sm text-center hover:bg-amber-50 transition-colors"
                >
                  <div className="font-serif text-2xl md:text-3xl text-amber-600 mb-1">{cert.name}</div>
                  <div className="text-xs md:text-sm text-stone-500">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
