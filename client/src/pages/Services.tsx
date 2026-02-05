import { useServices } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Code, Smartphone, Database, Globe, Cloud, Shield, Server, LineChart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Map string icons from DB to components
const iconMap: Record<string, React.ElementType> = {
  Code, Smartphone, Database, Globe, Cloud, Shield, Server, LineChart
};

export default function Services() {
  const { data: services, isLoading } = useServices();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Expertise
          </h1>
          <p className="text-lg text-slate-600">
            From custom software development to strategic IT consulting, we deliver solutions 
            that propel your business forward in the digital age.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl bg-slate-200" />
            ))}
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services?.map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div 
                  key={service.id}
                  variants={item}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
