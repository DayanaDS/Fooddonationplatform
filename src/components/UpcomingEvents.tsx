import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    title: "Weekend Food Collection Drive",
    date: "October 26-27, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Central Community Center",
    attendees: 45,
    type: "Collection Drive",
    description: "Join us for a weekend food collection drive. Bring your packaged food donations and help us reach our goal of 1000 meals!",
    image: "https://images.unsplash.com/photo-1615897570582-285ffe259530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGFudHJ5JTIwZG9uYXRpb25zfGVufDF8fHx8MTc2MTMxMTY4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Community Kitchen Volunteer Day",
    date: "October 29, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Hope Kitchen, Downtown",
    attendees: 30,
    type: "Cook & Serve",
    description: "Help us prepare and serve 500 meals to those in need. All cooking experience levels welcome!",
    image: "https://images.unsplash.com/photo-1752584157962-8821ce8b732b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwc2VydmluZyUyMG1lYWxzfGVufDF8fHx8MTc2MTMwNDAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Mobile Food Van - North District",
    date: "Every Friday",
    time: "6:00 PM - 9:00 PM",
    location: "Various locations in North District",
    attendees: 20,
    type: "Mobile Distribution",
    description: "Weekly mobile food distribution serving underprivileged areas. Volunteers needed for setup and serving.",
    image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB2b2x1bnRlZXJpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjEyNDk4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Corporate Food Drive Workshop",
    date: "November 2, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    attendees: 75,
    type: "Workshop",
    description: "Learn how to organize a successful food drive at your workplace. Free registration for corporate teams.",
    image: "https://images.unsplash.com/photo-1562709911-a355229de124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwaW5nJTIwcG9vcnxlbnwxfHx8fDE3NjEzMTE2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function UpcomingEvents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50/40 to-yellow-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full border border-orange-200">
            <span className="text-orange-700">Join Us</span>
          </div>
          <h2 className="mb-4 text-gray-900">Upcoming Events & Drives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Participate in our community events and food drives. Together, we can make a bigger impact!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-orange-200">
              <div className="h-56 overflow-hidden relative">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/95 backdrop-blur-sm text-orange-700 border-orange-200 shadow-lg">
                    {event.type}
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-gray-900">{event.title}</h3>

                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50">
                    <Users className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.attendees} volunteers signed up</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg">
                  Register for Event
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
