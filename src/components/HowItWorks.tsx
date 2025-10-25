import { Card } from "./ui/card";
import { ClipboardList, Truck, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Donation",
    description: "Fill out our simple form with details about your food donation. Whether it's cooked meals, packaged goods, or fresh produce, every contribution matters.",
  },
  {
    icon: Truck,
    title: "We Coordinate Pickup",
    description: "Our volunteer network or partner NGOs will arrange a convenient pickup time. For immediate needs, we can connect you directly with local organizations.",
  },
  {
    icon: Heart,
    title: "Food Reaches Those in Need",
    description: "Your donation is distributed through our verified network of community kitchens, shelters, and food banks to families and individuals facing food insecurity.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Impact",
    description: "Receive updates about how your contributions are making a difference. See the number of meals served and lives touched through our platform.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-green-50 rounded-full border border-green-200">
            <span className="text-green-700">Simple Process</span>
          </div>
          <h2 className="mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our streamlined process makes it easy to donate food and help fight hunger in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 text-center relative border-2 hover:border-green-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-green-50/30">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                  <span>{index + 1}</span>
                </div>
                <h3 className="mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-transparent"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
