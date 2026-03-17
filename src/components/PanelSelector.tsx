import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const panelTypes = [
  {
    id: 'standard',
    name: 'SIP Standard',
    thickness: '120mm',
    uValue: '0.18 W/m²K',
    price: '45',
    description: 'Ideal pentru pereți interiori și zone cu climat temperat.',
    features: ['OSB 12mm + EPS 96mm + OSB 12mm', 'Greutate: 18 kg/m²', 'Rezistență la foc: B-s2,d0'],
    recommended: false,
    color: 'from-stone-200 to-stone-300',
  },
  {
    id: 'premium',
    name: 'SIP Premium',
    thickness: '170mm',
    uValue: '0.12 W/m²K',
    price: '65',
    description: 'Alegerea optimă pentru pereți exteriori în România.',
    features: ['OSB 15mm + EPS 140mm + OSB 15mm', 'Greutate: 22 kg/m²', 'Rezistență la foc: B-s2,d0'],
    recommended: true,
    color: 'from-amber-300 to-amber-400',
  },
  {
    id: 'ultra',
    name: 'SIP Ultra',
    thickness: '220mm',
    uValue: '0.09 W/m²K',
    price: '85',
    description: 'Performanță maximă pentru case pasive și nZEB.',
    features: ['OSB 18mm + EPS 184mm + OSB 18mm', 'Greutate: 26 kg/m²', 'Rezistență la foc: B-s2,d0'],
    recommended: false,
    color: 'from-orange-400 to-orange-500',
  },
];

const roofPanels = [
  { id: 'roof-150', name: 'Acoperiș 150mm', uValue: '0.15 W/m²K', price: '55' },
  { id: 'roof-200', name: 'Acoperiș 200mm', uValue: '0.11 W/m²K', price: '75' },
  { id: 'roof-250', name: 'Acoperiș 250mm', uValue: '0.08 W/m²K', price: '95' },
];

export function PanelSelector() {
  const [selectedPanel, setSelectedPanel] = useState('premium');
  const [selectedRoof, setSelectedRoof] = useState('roof-200');
  const [area, setArea] = useState(150);

  const currentPanel = panelTypes.find(p => p.id === selectedPanel);
  const currentRoof = roofPanels.find(r => r.id === selectedRoof);

  const wallCost = currentPanel ? parseFloat(currentPanel.price) * area : 0;
  const roofCost = currentRoof ? parseFloat(currentRoof.price) * (area * 0.6) : 0;
  const totalCost = wallCost + roofCost;

  return (
    <section id="panouri" className="py-16 md:py-24 lg:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Configurator</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-4 md:mb-6">
            Alege Panourile Potrivite
          </h2>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto">
            Selectează tipul de panouri și calculează instant costul estimativ pentru proiectul tău.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {panelTypes.map((panel, index) => (
            <motion.button
              key={panel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPanel(panel.id)}
              className={`relative text-left p-6 md:p-8 rounded-sm border-2 transition-all duration-300 ${
                selectedPanel === panel.id
                  ? 'border-amber-500 bg-stone-800'
                  : 'border-stone-700 bg-stone-800/50 hover:border-stone-600'
              }`}
            >
              {panel.recommended && (
                <div className="absolute -top-3 left-4 md:left-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMANDAT
                </div>
              )}

              {/* Panel visualization */}
              <div className="mb-6 h-20 md:h-24 flex items-end justify-center gap-1">
                <div className={`w-3 md:w-4 bg-amber-600 rounded-t`} style={{ height: '20%' }} />
                <div className={`w-12 md:w-16 bg-gradient-to-b ${panel.color} rounded-t`} style={{ height: `${panel.id === 'standard' ? 60 : panel.id === 'premium' ? 80 : 100}%` }} />
                <div className={`w-3 md:w-4 bg-amber-600 rounded-t`} style={{ height: '20%' }} />
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-white mb-2">{panel.name}</h3>
              <p className="text-stone-400 text-sm mb-4">{panel.description}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl md:text-3xl font-serif text-amber-400">{panel.price}</span>
                <span className="text-stone-500">EUR/m²</span>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-stone-400">
                  <span>Grosime:</span>
                  <span className="text-white">{panel.thickness}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Coeficient U:</span>
                  <span className="text-amber-400">{panel.uValue}</span>
                </div>
              </div>

              <ul className="space-y-1">
                {panel.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-stone-400">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {selectedPanel === panel.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Calculator section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-stone-800 rounded-sm p-6 md:p-8 lg:p-12"
        >
          <h3 className="font-serif text-xl md:text-2xl text-white mb-6 md:mb-8">Calculator Rapid</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Roof panel selector */}
            <div>
              <label className="block text-stone-400 text-sm mb-3">Panouri Acoperiș</label>
              <div className="space-y-2">
                {roofPanels.map((roof) => (
                  <button
                    key={roof.id}
                    onClick={() => setSelectedRoof(roof.id)}
                    className={`w-full text-left p-3 md:p-4 rounded-sm border transition-all ${
                      selectedRoof === roof.id
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-stone-700 hover:border-stone-600'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm md:text-base">{roof.name}</span>
                      <span className="text-amber-400 font-medium">{roof.price} EUR/m²</span>
                    </div>
                    <div className="text-xs md:text-sm text-stone-500 mt-1">U = {roof.uValue}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area slider */}
            <div>
              <label className="block text-stone-400 text-sm mb-3">Suprafață Construită (m²)</label>
              <div className="bg-stone-700/50 p-4 md:p-6 rounded-sm">
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-stone-600 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-xs md:text-sm text-stone-500">
                  <span>50 m²</span>
                  <span>500 m²</span>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-4xl md:text-5xl font-serif text-white">{area}</span>
                  <span className="text-stone-400 ml-2">m²</span>
                </div>
              </div>
            </div>

            {/* Price estimate */}
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-stone-400 text-sm mb-3">Estimare Preț Panouri</label>
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 p-4 md:p-6 rounded-sm h-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={totalCost}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Pereți ({area} m²):</span>
                      <span className="text-white">{wallCost.toLocaleString()} EUR</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Acoperiș ({Math.round(area * 0.6)} m²):</span>
                      <span className="text-white">{roofCost.toLocaleString()} EUR</span>
                    </div>
                    <div className="border-t border-amber-500/30 pt-3 mt-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-amber-400 font-medium">Total Estimat:</span>
                        <span className="text-2xl md:text-3xl font-serif text-white">
                          {totalCost.toLocaleString()} <span className="text-base md:text-lg">EUR</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <p className="text-xs text-stone-500 mt-4">
                  * Preț orientativ. Solicită ofertă personalizată pentru cost exact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-sm text-base md:text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all"
            >
              Solicită Ofertă Detaliată
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
