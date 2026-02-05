import { useProjects } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Building Digital <span className="text-primary">Masterpieces</span>
          </h1>
          <p className="text-xl text-slate-600 border-l-4 border-primary pl-6">
            We don't just write code; we solve real-world problems. 
            Explore how we've helped businesses across Australia achieve their goals.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-96 w-full rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {projects?.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col gap-12 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <Badge variant="secondary" className="px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {project.clientIndustry}
                  </Badge>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
