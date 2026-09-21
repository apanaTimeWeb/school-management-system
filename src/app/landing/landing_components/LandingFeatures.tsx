import React from 'react';
import { Users, BookOpen, Settings, FileText, LayoutDashboard, Activity, Shield, Clock } from 'lucide-react';

export function LandingFeatures() {
  const features = [
    { icon: Users, label: "Student & Parent", desc: "Complete 360° profiles, attendance & medical records." },
    { icon: BookOpen, label: "Academics", desc: "Syllabus, timetable, assignments & live tracking." },
    { icon: Settings, label: "Fees & Finance", desc: "Automated fee collection, concessions & dual-entry accounting." },
    { icon: FileText, label: "Examinations", desc: "Custom grading scales, admit cards & report cards." },
    { icon: LayoutDashboard, label: "Staff & HR", desc: "Leave management, payroll & biometric sync." },
    { icon: Activity, label: "Reports & Analytics", desc: "Advanced dashboards with customizable exports." },
    { icon: Shield, label: "Security & Audit", desc: "2FA, active sessions, and Who-What-When logging." },
    { icon: Clock, label: "Operations", desc: "Library, Transport, Hostel, Inventory & Asset tracking." },
  ];

  return (
    <section id="features" className="py-24 bg-bg-page px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">EVERYTHING IN ONE PLACE</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">Powerful modules working together to run your institution efficiently.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-bg-card hover:border-secondary hover:shadow-md transition-all cursor-default group">
              <f.icon className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-primary mb-2">{f.label}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
