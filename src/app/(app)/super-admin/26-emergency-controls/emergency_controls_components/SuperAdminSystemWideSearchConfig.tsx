"use client";

export default function SuperAdminSystemWideSearchConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Super Admin एक global search से खोज सके:
      </div>

      <div className="flex flex-col gap-5 max-w-[600px] pl-2 mt-[-10px]">
        {/* Actual Search Bar as requested by "खोज सके" */}
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-sm font-bold text-text-primary">Global Search Bar</label>
          <input type="text" placeholder="Search Users, Students, Payments..." className="bg-input border border-border rounded-md px-3 py-3 text-sm text-text-primary focus:border-primary outline-none" />
        </div>

        <div className="font-bold text-text-primary border-b border-border pb-2 mt-2">Search Filters:</div>

        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">User</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Student</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Parent</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Teacher</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Staff</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Admission</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Payment</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Receipt</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Certificate</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Book</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Vehicle</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Ticket</label>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
          <label className="text-sm font-bold text-text-secondary">Log</label>
        </div>
      </div>

      <div className="p-3 bg-warning-bg border border-warning/30 rounded-md text-warning text-sm font-bold w-fit mt-[-10px]">
        और search result पर permission के अनुसार ही data दिखे।
      </div>

    </div>
  );
}
