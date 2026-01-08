import { motion } from 'framer-motion';
import { Compass, Mountain, Waves, Tent, Camera, Bike } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const activities = [
  {
    icon: Mountain,
    title: 'Trekking',
    description: 'Explore high-altitude trails through pristine mountain landscapes.',
    count: 24,
  },
  {
    icon: Compass,
    title: 'Horse Riding',
    description: 'Experience nomadic traditions on horseback across alpine meadows.',
    count: 18,
  },
  {
    icon: Waves,
    title: 'Paragliding',
    description: 'Soar above stunning valleys with breathtaking aerial views.',
    count: 6,
  },
  {
    icon: Tent,
    title: 'Yurt Camping',
    description: 'Sleep in traditional nomadic dwellings under starlit skies.',
    count: 15,
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description: 'Capture incredible landscapes with expert guidance.',
    count: 8,
  },
  {
    icon: Bike,
    title: 'Mountain Biking',
    description: 'Ride through diverse terrains from valleys to mountain passes.',
    count: 12,
  },
];

export const Activities = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="container-custom">
        <SectionHeader
          subtitle="Adventure Activities"
          title="Find Your Perfect Adventure"
          description="From adrenaline-pumping activities to peaceful cultural experiences, Kyrgyzstan offers something for every type of traveler."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-border/50 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <activity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {activity.count} tours
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
