import { useState } from "react";
import { Hero } from "./components/Hero";
import { DonationMethods } from "./components/DonationMethods";
import { DonateNowForm } from "./components/DonateNowForm";
import { NGODirectory } from "./components/NGODirectory";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { HowItWorks } from "./components/HowItWorks";
import { ImpactStats } from "./components/ImpactStats";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Toaster } from "./components/ui/sonner";
import { Heart } from "lucide-react";

export default function App() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2 rounded-xl shadow-lg">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="text-gray-900">Share Food, Spread Hope</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#methods" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Methods
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#partners" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Partners
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#events" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Events
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                onClick={() => setShowDonationForm(true)}
              >
                Donate Now
              </Button>
            </nav>
            <Button 
              className="md:hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={() => setShowDonationForm(true)}
            >
              Donate
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Hero onDonateClick={() => setShowDonationForm(true)} />
        
        <HowItWorks />
        
        <div id="methods">
          <DonationMethods />
        </div>
        
        <ImpactStats />
        
        <div id="partners">
          <NGODirectory />
        </div>
        
        <div id="events">
          <UpcomingEvents />
        </div>

        {/* Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white">Take Action Now</span>
            </div>
            <h2 className="text-white mb-6 drop-shadow-2xl">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/95 mb-10 text-xl leading-relaxed drop-shadow-lg">
              Join thousands of donors who are fighting hunger in our community. Your contribution, no matter how small, can change lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl px-8 py-6 text-lg"
                onClick={() => setShowDonationForm(true)}
              >
                Start Donating Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 shadow-xl backdrop-blur-sm px-8 py-6 text-lg"
              >
                Become a Volunteer
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Donation Form Dialog */}
      <Dialog open={showDonationForm} onOpenChange={setShowDonationForm}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Submit Your Donation</DialogTitle>
            <DialogDescription>
              Fill out the form below to donate food or volunteer your time. We'll contact you shortly to coordinate the details.
            </DialogDescription>
          </DialogHeader>
          <DonateNowForm onClose={() => setShowDonationForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
