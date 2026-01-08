import { TourCard } from './TourCard';
import { SectionHeader } from './SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import tourYurtCamp from '@/assets/tour-yurt-camp.jpg';
import tourHorseTrek from '@/assets/tour-horse-trek.jpg';
import tourSongKul from '@/assets/tour-song-kul.jpg';
import tourAlaArcha from '@/assets/tour-ala-archa.jpg';

const tours = [
  {
    image: tourYurtCamp,
    title: '7-Day Issyk-Kul Lake & Mountain Adventure',
    location: 'Issyk-Kul Region',
    duration: '7 Days / 6 Nights',
    price: 890,
    rating: 4.9,
    reviewCount: 127,
    featured: true,
  },
  {
    image: tourHorseTrek,
    title: 'Horse Trekking through Jeti-Oguz Valley',
    location: 'Karakol, Issyk-Kul',
    duration: '3 Days / 2 Nights',
    price: 450,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    image: tourSongKul,
    title: '10-Day Silk Road & Mountain Explorer',
    location: 'Multiple Regions',
    duration: '10 Days / 9 Nights',
    price: 1290,
    rating: 5.0,
    reviewCount: 64,
    featured: true,
  },
  {
    image: tourAlaArcha,
    title: 'Ala-Archa National Park Day Hike',
    location: 'Near Bishkek',
    duration: '1 Day',
    price: 75,
    rating: 4.7,
    reviewCount: 203,
  },
];

export const PopularTours = () => {
  return (
    <section className="section-padding bg-snow">
      <div className="container-custom">
        <SectionHeader
          subtitle="Popular Tours"
          title="Unforgettable Adventures Await"
          description="Discover our most beloved tours, handpicked by travelers from around the world for their unique experiences and breathtaking scenery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
