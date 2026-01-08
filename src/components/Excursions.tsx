import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Button } from '@/components/ui/button';

import tourBurana from '@/assets/tour-burana.jpg';
import tourHorseTrek from '@/assets/tour-horse-trek.jpg';
import tourSongKul from '@/assets/tour-song-kul.jpg';

const excursions = [
  {
    image: tourBurana,
    title: 'Burana Tower & Silk Road History',
    description: 'Explore the ancient Burana minaret and petroglyphs from the Silk Road era.',
    duration: 'Half Day',
    price: 45,
  },
  {
    image: tourHorseTrek,
    title: 'Jeti-Oguz Seven Bulls Day Tour',
    description: 'Marvel at the famous red rock formations and enjoy traditional Kyrgyz lunch.',
    duration: 'Full Day',
    price: 85,
  },
  {
    image: tourSongKul,
    title: 'Song-Kul Lake Overnight Experience',
    description: 'Sleep in a traditional yurt by the alpine lake at 3,000m altitude.',
    duration: '2 Days',
    price: 180,
  },
];

export const Excursions = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          subtitle="Day Excursions"
          title="Perfect Day Trips from Any Base"
          description="Short on time? These carefully curated day trips pack incredible experiences into just a few hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => (
            <motion.div
              key={excursion.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-[400px]"
            >
              {/* Background Image */}
              <img
                src={excursion.image}
                alt={excursion.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{excursion.duration}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  {excursion.title}
                </h3>
                
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {excursion.description}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-primary-foreground">
                    <span className="text-2xl font-bold">${excursion.price}</span>
                    <span className="text-sm opacity-80">/person</span>
                  </p>
                  <Button 
                    size="sm" 
                    variant="heroOutline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity gap-1"
                  >
                    Book Now
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
