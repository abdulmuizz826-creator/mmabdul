import { ChevronRight, Shield, Globe, Cpu, Server } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    { 
      icon: Shield, 
      title: "Cyber Security", 
      desc: "Advanced firewall and intrusion detection systems." 
    },
    { 
      icon: Globe, 
      title: "Global Connectivity", 
      desc: "SD-WAN solutions for seamless multi-site links." 
    },
    { 
      icon: Cpu, 
      title: "Cloud Integration", 
      desc: "Hybrid cloud network architecture and optimization." 
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white dark:bg-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-8">
          <Server className="w-4 h-4 mr-2" />
          Next-Gen Networking Solutions
        </div>
        
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          Connecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Future</span>
        </h1>
        
        {/* Restored Tagline */}
        <p className="max-w-2xl text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
          We architect secure, scalable, and high-performance network infrastructures for businesses that demand reliability.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center"
          >
            Start a Project <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            href="/experience"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-cyan-500 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
          >
            View Portfolio
          </Link>
        </div>

        {/* Restored Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left w-full">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-xl transition-transform hover:-translate-y-1">
              <div className="h-12 w-12 bg-cyan-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}