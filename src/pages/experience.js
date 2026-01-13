import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Server, Briefcase, Calendar, ShieldCheck } from 'lucide-react';

const experienceData = [
  {
    role: "CEO & Founder",
    company: "NetSolutions Pro",
    period: "2020 - Present",
    description: "Leading a team of 15 engineers to deliver enterprise-grade networking solutions for Fortune 500 clients. Specialized in hybrid-cloud migrations and architecting resilient infrastructure.",
    icon: ShieldCheck
  },
  {
    role: "Senior Network Engineer",
    company: "TechGlobal Corp",
    period: "2016 - 2020",
    description: "Managed core infrastructure for a global ISP. Reduced downtime by 40% through the implementation of automated redundancy protocols and proactive monitoring systems.",
    icon: Server
  },
  {
    role: "System Administrator",
    company: "DataStream Ltd",
    period: "2014 - 2016",
    description: "Maintained on-premise server farms and implemented the company's first secure remote-access VPN, ensuring business continuity during expansion phases.",
    icon: Briefcase
  }
];

export default function Experience() {
  return (
    // Added 'pt-32' (Padding Top) to ensure it clears the fixed Navbar comfortably
    <div className="min-h-screen pt-32 pb-24 px-4 bg-slate-50 dark:bg-slate-900 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle subtitle="A proven track record of architecting reliability and leading technical teams.">
          Professional Experience
        </SectionTitle>
        
        {/* Timeline Structure */}
        <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          
          {experienceData.map((job, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 last:mb-0">
              
              {/* Timeline Icon/Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-cyan-500 text-white shadow-xl shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-600">
                <job.icon className="w-5 h-5" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] transition-all duration-300 group-hover:transform md:group-odd:translate-x-2 md:group-even:-translate-x-2">
                <Card className="p-0 overflow-hidden border-none shadow-lg">
                  <div className="bg-white dark:bg-slate-800 p-8">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{job.role}</h3>
                        <p className="text-cyan-600 font-semibold text-lg">{job.company}</p>
                      </div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {job.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {job.description}
                    </p>
                    
                    {job.role.includes("CEO") && (
                      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Currently Leading Enterprise Digital Transformation
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}