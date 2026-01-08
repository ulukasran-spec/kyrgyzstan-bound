import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  explore: [
    { label: 'Tour Packages', href: '/tours/packages' },
    { label: 'Day Excursions', href: '/tours/excursions' },
    { label: 'Multi-Day Tours', href: '/tours/multi-day' },
    { label: 'Adventure Activities', href: '/adventure' },
    { label: 'Adventure Pass', href: '/adventure-pass' },
  ],
  destinations: [
    { label: 'Issyk-Kul Lake', href: '/destinations/issyk-kul' },
    { label: 'Song-Kul Lake', href: '/destinations/song-kul' },
    { label: 'Ala-Archa Gorge', href: '/destinations/ala-archa' },
    { label: 'Jeti-Oguz', href: '/destinations/jeti-oguz' },
    { label: 'Bishkek', href: '/destinations/bishkek' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Travel Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'FAQs', href: '/faq' },
    { label: 'Booking Terms', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Travel Insurance', href: '/insurance' },
    { label: 'Visa Information', href: '/visa' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">
                Get Travel Inspiration
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe for exclusive deals, travel tips, and Kyrgyzstan insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <Button variant="accent" size="lg" className="gap-2">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-semibold leading-tight">
                  Kyrgyz
                </span>
                <span className="text-xs text-primary -mt-1">Adventures</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Your gateway to authentic adventures in the heart of Central Asia. 
              Discover Kyrgyzstan's breathtaking landscapes and rich nomadic culture.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bishkek, Kyrgyzstan
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +996 312 123 456
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@kyrgyzadventures.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2025 Kyrgyz Adventures. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
