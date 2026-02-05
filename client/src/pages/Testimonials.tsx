import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Director, Brisbane Eats",
    content: "Ryan and the Protecher team transformed our delivery operations. The custom app they built has increased our efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Michael Chen",
    role: "Founder, PropTech Solutions",
    content: "The CRM system developed by Protecher is world-class. It's intuitive, powerful, and has become the backbone of our real estate business.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Amanda Ross",
    role: "Operations Manager, QLD Retail Group",
    content: "Excellent support and technical expertise. They delivered our inventory system on time and exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "David Wilson",
    role: "CEO, HealthConnect",
    content: "Protecher's commitment to security and user experience made our telemedicine platform a huge success. Highly recommended.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-lg text-slate-600">
            See how Protecher has helped businesses across Brisbane and beyond achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-lg text-slate-700 mb-8 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={t.image} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
