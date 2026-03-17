import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: 'Beneficii', href: '#beneficii' },
    { label: 'Panouri', href: '#panouri' },
    { label: 'Pachete', href: '#pachete' },
    { label: 'Proces', href: '#proces' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm md:text-lg">S</span>
              </div>
              <span className="font-serif text-lg md:text-xl text-stone-800 tracking-tight">SIPConstruct</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-stone-600 hover:text-amber-600 transition-colors text-sm font-medium tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+40721234567" className="text-stone-600 text-sm font-medium">
                +40 721 234 567
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                Solicită Ofertă
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-stone-200 lg:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-stone-700 hover:text-amber-600 transition-colors text-lg font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-3 rounded-sm text-base font-semibold mt-4"
              >
                Solicită Ofertă
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
