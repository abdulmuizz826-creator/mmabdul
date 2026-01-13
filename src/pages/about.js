import SectionTitle from '../components/SectionTitle';
import { MessageCircle, Twitter, Globe, Award, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Globe, label: "3 Continents", value: "Global Reach" },
    { icon: Award, label: "50+", value: "Deployments" },
    { icon: Users, label: "10+ Years", value: "Experience" },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Meet the visionary behind the architecture.">
          About The CEO
        </SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image Simulation */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center group">
              <div className="absolute inset-0 bg-cyan-600 mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
              {/* Generic SVG avatar */}
              <svg className="w-48 h-48 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Muhammad Abdulmuizz</h3>
            <p className="text-cyan-600 font-semibold text-lg mb-6">CEO & Lead Network Architect</p>
            
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4">
              <p className="text-lg leading-relaxed">
                Visionary leader with over 10 years of experience in designing scalable network infrastructures. 
                Dedicated to bridging the gap between complex connectivity requirements and seamless user experiences.
              </p>
              <p className="leading-relaxed">
                With a relentless passion for technology and a deep understanding of infrastructure dynamics, 
                Muhammad has successfully led over 50 large-scale network deployments across three continents.
              </p>
              <p className="text-xl font-medium text-slate-900 dark:text-white border-l-4 border-cyan-500 pl-4 italic">
                "Building the Digital Highways of Tomorrow."
              </p>
            </div>

            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/2347066566079" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a 
                href="https://x.com/lilmuizz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5" /> Follow on X
              </a>
            </div>

            
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-cyan-500" />
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}