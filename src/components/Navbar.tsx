import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Tours', 
    href: '/tours',
    submenu: [
      { label: 'Tour Packages', href: '/tours/packages' },
      { label: 'Day Excursions', href: '/tours/excursions' },
      { label: 'Multi-Day Tours', href: '/tours/multi-day' },
    ]
  },
  { label: 'Adventure', href: '/adventure' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'About Kyrgyzstan', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-foreground leading-tight">
                Kyrgyz
              </span>
              <span className="text-xs text-primary font-medium -mt-1">Adventures</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className="nav-link px-4 py-2 text-sm font-medium flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-foreground font-medium hover:bg-muted rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-border">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
