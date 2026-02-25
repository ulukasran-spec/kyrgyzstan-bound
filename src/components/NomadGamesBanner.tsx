import { Trophy } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const NomadGamesBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary/10 border-y border-primary/20">
      <div className="container-custom py-3 flex items-center justify-center gap-3 text-center">
        <Trophy className="w-5 h-5 text-primary shrink-0" />
        <p className="text-sm md:text-base font-medium text-foreground">
          {t.nomadGames?.banner || "Don't miss World Nomad Games 2026 (September)! Combine with your tour – epic nomadic culture & competitions!"}
        </p>
      </div>
    </div>
  );
};
