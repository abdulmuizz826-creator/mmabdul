import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-white text-xl font-bold mb-4">
              <Globe className="h-6 w-6 text-cyan-500 mr-2" />
              NetSolutions
            </div>
            <p className="max-w-xs text-sm">
              Empowering businesses with secure, scalable, and next-generation networking infrastructures. 
              Headquartered in Victoria Island, Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About CEO</Link></li>
              <li><Link href="/skills" className="hover:text-cyan-400 transition-colors">Expertise</Link></li>
              <li><Link href="/experience" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Security Standards</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} NetSolutions. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed by <span className="text-cyan-500 font-medium">Muhammad Abdulmuizz</span>
          </p>
        </div>
      </div>
    </footer>
  );
}