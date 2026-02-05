import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, challenges, and user needs. Ryan personally oversees the strategy phase to ensure perfect alignment.",
    icon: "01"
  },
  {
    title: "Design & Prototyping",
    description: "We create intuitive user experiences and modern interfaces. You'll see high-fidelity mockups before a single line of code is written.",
    icon: "02"
  },
  {
    title: "Development & Testing",
    description: "Our engineers build your solution using modern, scalable technologies. We follow rigorous testing protocols to ensure stability.",
    icon: "03"
  },
  {
    title: "Deployment & Support",
    description: "We handle the launch and provide ongoing maintenance. Protecher is your long-term partner for growth and technical excellence.",
    icon: "04"
  }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Working Process
          </h1>
          <p className="text-lg text-slate-600">
            Transparent, efficient, and results-driven. Here's how we bring your vision to life at Protecher.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center lg:text-right w-full lg:w-auto">
                  {i % 2 === 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block"></div>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl shadow-xl shadow-primary/20">
                  {step.icon}
                </div>

                <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
                  {i % 2 !== 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="bg-slate-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-slate-600 mb-8">
              Experience the Protecher difference with a free initial consultation.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
              Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
