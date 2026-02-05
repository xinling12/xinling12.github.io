import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display font-bold mb-6"
          >
            We Are Protecher
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Led by Yuan Dai (Ryan), Protecher is Brisbane's most trusted technology partner, dedicated to helping local and global businesses thrive.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Founder's Vision</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Protecher was founded by Yuan Dai (Ryan) with a vision to make high-end enterprise technology accessible to local businesses in Brisbane.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With years of experience in custom software and systems architecture, Ryan brings a personalized approach to every project, ensuring that Protecher doesn't just deliver code, but real business value.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a restaurant looking to streamline orders or a property agency needing a custom CRM, Ryan and the Protecher team work directly with you to build solutions that scale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* team brainstorming */}
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" alt="Team meeting" className="rounded-2xl shadow-lg mt-8" />
            {/* developer coding */}
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" alt="Coding" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Users className="h-8 w-8 text-white" />}
              title="Client Partnership"
              text="We don't work for you; we work with you. Your success is our success."
              color="bg-blue-500"
            />
            <ValueCard 
              icon={<Target className="h-8 w-8 text-white" />}
              title="Excellence"
              text="We hold ourselves to the highest standards of code quality and design aesthetics."
              color="bg-purple-500"
            />
            <ValueCard 
              icon={<Heart className="h-8 w-8 text-white" />}
              title="Integrity"
              text="Transparent communication and honest advice, even when it's difficult."
              color="bg-pink-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, text, color }: { icon: React.ReactNode, title: string, text: string, color: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-slate-200`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
