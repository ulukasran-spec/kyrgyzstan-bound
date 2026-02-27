import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

interface TourGalleryProps {
  tourTitle: string;
}

const placeholderImages = [
  '/images/tour-gallery/placeholder1.jpg',
  '/images/tour-gallery/placeholder2.jpg',
  '/images/tour-gallery/placeholder3.jpg',
  '/images/tour-gallery/placeholder4.jpg',
  '/images/tour-gallery/placeholder5.jpg',
  '/images/tour-gallery/placeholder6.jpg',
];

export const TourGallery = ({ tourTitle }: TourGalleryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border"
    >
      <h2 className="font-display text-xl font-bold text-foreground mb-4">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {placeholderImages.map((src, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border"
          >
            <img
              src={src}
              alt={`${tourTitle} photo ${i + 1}`}
              className="w-full h-full object-cover hidden"
              onLoad={(e) => {
                (e.target as HTMLImageElement).classList.remove('hidden');
                (e.target as HTMLImageElement).nextElementSibling?.classList.add('hidden');
              }}
            />
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageIcon className="w-8 h-8" />
              <span className="text-xs">Photo {i + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Admin upload functionality — replace placeholders with real tour photos */}
      <p className="text-xs text-muted-foreground mt-4 italic">
        More photos coming soon. Contact us for additional tour imagery.
      </p>
    </motion.div>
  );
};
