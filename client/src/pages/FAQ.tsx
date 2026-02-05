import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries does Protecher specialize in?",
    answer: "We have extensive experience working with restaurants, property agencies, retail, healthcare, and education providers. However, our technical expertise allows us to build solutions for almost any industry looking to modernize."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A custom web application usually takes 8-12 weeks, while a simpler website might take 4-6 weeks. We'll provide a detailed timeline during the discovery phase."
  },
  {
    question: "Will Ryan be personally involved in my project?",
    answer: "Yes! Ryan oversees the strategy, architecture, and quality assurance of every project at Protecher. You'll have direct access to his expertise throughout the process."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. We offer managed IT support and maintenance packages to ensure your application remains secure, updated, and high-performing as your business scales."
  },
  {
    question: "Where is Protecher located?",
    answer: "Our main office is located at Level 3/155 Queen St, Brisbane City. While we serve clients globally, we love working with local Brisbane businesses face-to-face."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about working with Protecher.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-100">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Still have questions? <a href="/contact" className="text-primary font-bold hover:underline">Contact Ryan directly</a>
          </p>
        </div>
      </div>
    </div>
  );
}
