import React from 'react';

export function LandingModules() {
  const modules = [
    "Dashboard", "Students", "Admissions", "Parents", "Academics", "Attendance", 
    "Timetable", "Examinations", "Results", "Fees & Finance", "Staff & HR", 
    "Leave Management", "Communication", "Events", "Documents", "Library", 
    "Transport", "Hostel", "Inventory", "Purchase", "Health", "Discipline", 
    "Approval Center", "Reports", "Website Content", "Settings", "Profile", "Security & Audit"
  ];

  return (
    <section id="modules" className="py-20 bg-primary text-white text-center px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">28 COMPREHENSIVE MODULES</h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base font-medium text-white/80">
          {modules.map((mod, i) => (
            <span key={i} className="hover:text-secondary transition-colors cursor-default">{mod}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
