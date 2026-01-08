import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Unlimited access to 30+ attractions',
  'Free airport & city transfers',
  'Priority booking for popular tours',
  'Exclusive discounts at partner hotels',
  '24/7 travel support hotline',
  'Digital guide with offline maps',
];

export const AdventurePass = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="mountains" patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M0 40 L20 10 L40 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mountains)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground text-sm font-medium">Best Value</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Kyrgyzstan Adventure Pass
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8">
              Unlock unlimited access to Kyrgyzstan's best attractions, tours, and experiences 
              with our all-inclusive adventure pass. Perfect for curious explorers who want 
              to see it all.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-primary-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary-foreground" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="xl" className="gap-2">
              Get Your Pass
              <Sparkles className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Starting from
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-display font-bold text-foreground">
                    $299
                  </span>
                  <span className="text-muted-foreground">/3 days</span>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { days: '3 Days', price: '$299', popular: false },
                    { days: '7 Days', price: '$499', popular: true },
                    { days: '14 Days', price: '$749', popular: false },
                  ].map((option) => (
                    <div
                      key={option.days}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                        option.popular 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          option.popular ? 'border-primary bg-primary' : 'border-muted-foreground'
                        }`} />
                        <span className="font-medium text-foreground">{option.days}</span>
                        {option.popular && (
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-foreground">{option.price}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" size="lg">
                  Purchase Now
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Free cancellation up to 48 hours before activation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
