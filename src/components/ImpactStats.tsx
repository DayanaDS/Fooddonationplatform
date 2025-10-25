import { Card } from "./ui/card";
import { Users, UtensilsCrossed, Building, Heart } from "lucide-react";

const stats = [
  {
    icon: UtensilsCrossed,
    value: "2.5M+",
    label: "Meals Served",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    value: "50K+",
    label: "People Helped",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Building,
    value: "150+",
    label: "Partner Organizations",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Heart,
    value: "5K+",
    label: "Active Volunteers",
    color: "bg-red-100 text-red-600",
  },
];

export function ImpactStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white">Our Achievements</span>
          </div>
          <h2 className="text-white mb-4">Our Impact Together</h2>
          <p className="text-white/95 max-w-2xl mx-auto text-lg">
            Every donation creates a ripple effect of positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-8 text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/50">
                <div className={`${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="h-10 w-10" />
                </div>
                <div className="mb-2 text-gray-600">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
