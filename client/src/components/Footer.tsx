import { Link } from "wouter";
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Rocket className="h-6 w-6 text-blue-500" />
              <span className="font-display font-bold text-xl tracking-tighter uppercase">Protecher</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions. 
              Founded and led by Yuan Dai (Ryan), Protecher is based in the heart of Brisbane.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Protecher</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Ryan</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wider text-xs">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Level 3/155 Queen St<br />Brisbane City, QLD 4000<br />Australia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>0431 781 694</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>protecherAU@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Protecher Pty Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
