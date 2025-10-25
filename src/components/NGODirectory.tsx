import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const ngos = [
  {
    name: "Feeding America Network",
    type: "Food Bank",
    description: "Nationwide network of food banks providing meals to millions of families",
    address: "123 Charity Lane, Chicago, IL",
    phone: "(555) 123-4567",
    email: "info@feedingamerica.org",
    acceptedDonations: ["Packaged Food", "Fresh Produce", "Monetary"],
    hours: "Mon-Fri: 9AM-5PM",
  },
  {
    name: "Community Kitchen Alliance",
    type: "Community Kitchen",
    description: "Serving hot meals daily to homeless and underprivileged communities",
    address: "456 Hope Street, Los Angeles, CA",
    phone: "(555) 234-5678",
    email: "contact@communitykitchen.org",
    acceptedDonations: ["Cooked Meals", "Raw Ingredients", "Volunteer Time"],
    hours: "Daily: 7AM-8PM",
  },
  {
    name: "Faith & Food Initiative",
    type: "Religious Institution",
    description: "Multi-faith partnership providing food assistance through local places of worship",
    address: "789 Unity Avenue, New York, NY",
    phone: "(555) 345-6789",
    email: "help@faithfood.org",
    acceptedDonations: ["Packaged Food", "Groceries", "Monetary"],
    hours: "Tue-Sun: 10AM-6PM",
  },
  {
    name: "Mobile Meals On Wheels",
    type: "Mobile Distribution",
    description: "Delivering fresh meals to elderly and homebound individuals across the city",
    address: "321 Service Road, Houston, TX",
    phone: "(555) 456-7890",
    email: "info@mobilemeals.org",
    acceptedDonations: ["Cooked Meals", "Monetary", "Volunteer Drivers"],
    hours: "Mon-Sat: 8AM-3PM",
  },
  {
    name: "School Nutrition Program",
    type: "Educational Institution",
    description: "Ensuring no child goes hungry with breakfast and lunch programs",
    address: "654 Education Blvd, Miami, FL",
    phone: "(555) 567-8901",
    email: "program@schoolnutrition.org",
    acceptedDonations: ["Packaged Snacks", "Fresh Fruit", "Monetary"],
    hours: "School Days: 7AM-4PM",
  },
  {
    name: "Harvest Share",
    type: "Food Recovery",
    description: "Rescuing surplus food from restaurants and events to redistribute",
    address: "987 Green Avenue, Seattle, WA",
    phone: "(555) 678-9012",
    email: "rescue@harvestshare.org",
    acceptedDonations: ["Surplus Food", "Event Leftovers", "Fresh Produce"],
    hours: "24/7 Pickup Available",
  },
];

export function NGODirectory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full border border-blue-200">
            <span className="text-blue-700">Trusted Partners</span>
          </div>
          <h2 className="mb-4 text-gray-900">Partner Organizations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connect with trusted NGOs, charities, and community organizations accepting food donations in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-blue-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-gray-900">{ngo.name}</h3>
                <Badge variant="outline" className="border-blue-200 text-blue-700">{ngo.type}</Badge>
              </div>
              
              <p className="text-gray-600 mb-6">{ngo.description}</p>
              
              <div className="space-y-3 mb-6 text-gray-700">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{ngo.address}</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{ngo.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{ngo.email}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-3">Accepting:</p>
                <div className="flex flex-wrap gap-2">
                  {ngo.acceptedDonations.map((donation, i) => (
                    <Badge key={i} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                      {donation}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">⏰ {ngo.hours}</p>
              </div>

              <Button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0">
                Contact <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
