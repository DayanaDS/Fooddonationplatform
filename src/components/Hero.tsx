import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onDonateClick: () => void;
}

export function Hero({ onDonateClick }: HeroProps) {
  return (
    <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1707129745885-9dadc8005703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBmb29kfGVufDF8fHx8MTc2MTMxMTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Food donation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-emerald-900/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-white/90">Fighting Hunger Together</span>
        </div>
        <h1 className="text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl">
          Share Food, Spread Hope
        </h1>
        <p className="text-white/95 max-w-2xl mx-auto mb-10 text-lg drop-shadow-lg">
          Join our mission to end hunger in our community. Every meal shared is a life touched, every donation is a step toward a world where no one goes to bed hungry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-gray-100 shadow-2xl"
            onClick={onDonateClick}
          >
            Donate Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 shadow-xl"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
