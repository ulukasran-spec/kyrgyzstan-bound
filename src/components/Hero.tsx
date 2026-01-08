import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-issyk-kul.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Issyk-Kul Lake with Tian Shan Mountains"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full mb-6 border border-primary-foreground/20">
            Discover the Heart of Central Asia
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            Experience the Magic of{' '}
            <span className="relative">
              Kyrgyzstan
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 4 100 2 150 4C200 6 250 8 298 6" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Breathtaking mountains, pristine alpine lakes, ancient Silk Road heritage, 
            and warm nomadic hospitality await you in this Central Asian gem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Explore Tours
            </Button>
            <Button variant="heroOutline" size="xl">
              Plan Your Trip
            </Button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-lg p-4 md:p-6 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Where to?</p>
                  <p className="text-sm font-medium text-foreground">All Destinations</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-xl">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">When?</p>
                  <p className="text-sm font-medium text-foreground">Select Dates</p>
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-xl">
                <Users className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Travelers</p>
                  <p className="text-sm font-medium text-foreground">2 Adults</p>
                </div>
              </div>

              {/* Search Button */}
              <Button size="lg" className="h-full min-h-[52px] gap-2">
                <Search className="w-4 h-4" />
                Search Tours
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12"
        >
          {[
            { value: '500+', label: 'Happy Travelers' },
            { value: '50+', label: 'Unique Tours' },
            { value: '4.9', label: 'Average Rating' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
};
