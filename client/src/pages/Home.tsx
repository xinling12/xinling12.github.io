import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Layout, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Brisbane's Premier IT Consultants
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1]">
                Empowering Business Through <span className="text-primary">Technology</span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We transform complex business challenges into elegant digital solutions. 
              From custom software to strategic consulting, we are your partners in innovation.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-2">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> 10+ Years Exp.
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> Brisbane Based
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> 24/7 Support
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-[2rem] blur-3xl opacity-30 transform -rotate-6"></div>
            {/* corporate modern office architecture */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Modern Office" 
              className="relative rounded-[2rem] shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 object-cover h-[600px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive IT Solutions</h2>
            <p className="text-slate-600 text-lg">
              We offer a full spectrum of technology services tailored to your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="App Development"
              description="Native and cross-platform mobile applications that engage users and drive growth."
            />
            <ServiceCard 
              icon={<Layout className="h-10 w-10 text-purple-600" />}
              title="Web Development"
              description="High-performance, responsive websites and web applications built with modern frameworks."
            />
            <ServiceCard 
              icon={<Database className="h-10 w-10 text-emerald-600" />}
              title="IT Consulting"
              description="Strategic technology planning and digital transformation guidance for your business."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-6 bg-white p-4 rounded-xl inline-block shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
