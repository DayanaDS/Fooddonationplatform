import { Card } from "./ui/card";
import { Building2, Users, ChefHat, Smartphone, ShoppingCart, Leaf } from "lucide-react";

const methods = [
  {
    icon: Building2,
    title: "Direct Donation to NGOs & Charities",
    description: "Identify local organizations running food distribution programs",
    details: [
      "Local NGOs & Charities with food programs",
      "Religious Institutions: Temples, mosques, churches, gurudwaras",
      "Schools & Community Centers feeding programs",
    ],
    tip: "Contact them first to know what food types they accept (perishable, cooked, packaged)",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Food Collection Drives",
    description: "Organize and participate in community food drives",
    details: [
      "Organize neighborhood drives for leftover/excess food",
      "Corporate/Office drives for surplus meals",
      "Festival & Event collection programs",
    ],
    tip: "Plan ahead and coordinate with volunteers for efficient collection",
    color: "bg-purple-500",
  },
  {
    icon: ChefHat,
    title: "Cook & Serve Programs",
    description: "Prepare and serve meals directly to those in need",
    details: [
      "Community kitchens at shelters",
      "Mobile food vans for direct delivery",
      "Batch cooking partnerships with NGOs",
    ],
    tip: "Maintain food safety standards and proper hygiene protocols",
    color: "bg-orange-500",
  },
  {
    icon: Smartphone,
    title: "Digital Food Sharing Platforms",
    description: "Use technology to connect donors with recipients",
    details: [
      "Food donation apps connecting donors to needy individuals",
      "Social media groups for local food sharing",
      "Crowdsourced volunteer distribution networks",
    ],
    tip: "Verify recipients and maintain transparency in distribution",
    color: "bg-green-500",
  },
  {
    icon: ShoppingCart,
    title: "Grocery & Packaged Food Donations",
    description: "Donate non-perishable and packaged food items",
    details: [
      "Supermarket partnerships for surplus products",
      "Create food kits with staples (rice, lentils, oil)",
      "Donation boxes in public spaces",
    ],
    tip: "Check expiry dates and ensure packaging is intact",
    color: "bg-red-500",
  },
  {
    icon: Leaf,
    title: "Innovative & Sustainable Ideas",
    description: "Creative approaches to reduce waste and maximize impact",
    details: [
      "Subscription donation programs",
      "Community compost & animal feed initiatives",
      "DIY food libraries for neighborhood sharing",
    ],
    tip: "Focus on sustainability and reducing food waste at the source",
    color: "bg-teal-500",
  },
];

export function DonationMethods() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
            <span className="text-green-700">6 Ways to Help</span>
          </div>
          <h2 className="mb-4 text-gray-900">Ways to Make a Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the donation method that works best for you. Every contribution, big or small, helps fight hunger in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-200 bg-white/80 backdrop-blur-sm">
                <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <ul className="space-y-3 mb-6">
                  {method.details.map((detail, i) => (
                    <li key={i} className="text-gray-700 flex items-start text-sm">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-lg">
                  <p className="text-amber-900 text-sm">
                    <span className="font-semibold">💡 Tip:</span> {method.tip}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
