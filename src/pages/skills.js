import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { CheckCircle, Zap, Shield, Globe, Cpu } from 'lucide-react';

const skillsData = [
  { 
    category: "Network Engineering", 
    icon: Globe,
    items: [
      { name: "Cisco CCNA/CCNP", level: 95 },
      { name: "Juniper", level: 85 },
      { name: "BGP/OSPF Routing", level: 92 },
      { name: "VLAN/Subnetting", level: 98 }
    ] 
  },
  { 
    category: "Cloud & Security", 
    icon: Shield,
    items: [
      { name: "AWS VPC", level: 90 },
      { name: "Azure Networking", level: 88 },
      { name: "Firewall Configuration", level: 94 },
      { name: "VPN Tunnels", level: 95 }
    ] 
  },
  { 
    category: "DevOps & Tools", 
    icon: Cpu,
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Ansible", level: 88 },
      { name: "Wireshark", level: 95 }
    ] 
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-4 bg-white dark:bg-slate-950">
    <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Technical expertise honed over a decade of practice in high-stakes infrastructure environments.">
          Professional Skills
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <Card key={idx} className="h-full flex flex-col">
              <div className="pb-4 border-b border-slate-100 dark:border-slate-700 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <skillGroup.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-6 flex-grow">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-0.5 rounded">
                        Expert
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 dark:border-slate-800">
                <p className="text-xs text-slate-500 italic">
                  * Based on {new Date().getFullYear() - 2014}+ years of active deployment.
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-transparent to-transparent"></div>
          <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Constant Evolution</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            In the world of networking, standing still is falling behind. I continuously update my stack with the latest in SD-WAN, Zero Trust Architecture, and AI-driven network management.
          </p>
        </div>
      </div>
    </div>
  );
}
