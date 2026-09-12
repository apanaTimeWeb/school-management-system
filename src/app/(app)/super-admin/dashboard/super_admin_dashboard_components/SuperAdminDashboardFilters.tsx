import { Filter } from "lucide-react";

export default function SuperAdminDashboardFilters() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-card p-3 rounded-lg border border-border w-full sm:w-auto">
      <div className="flex items-center gap-2 text-text-secondary px-2 border-r border-border hidden sm:flex">
        <Filter size={16} />
        <span className="text-sm font-medium">Filters:</span>
      </div>
      
      <select className="bg-input border border-border rounded-md px-3 py-1.5 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all w-full sm:w-auto">
        <option value="all">All Branches</option>
        <option value="main">Main Campus</option>
        <option value="north">North Branch</option>
      </select>

      <select className="bg-input border border-border rounded-md px-3 py-1.5 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all w-full sm:w-auto">
        <option value="2026-2027">2026-2027 (Current)</option>
        <option value="2025-2026">2025-2026</option>
      </select>

      <input 
        type="date" 
        className="bg-input border border-border rounded-md px-3 py-1.5 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all w-full sm:w-auto"
        title="Date Range Start"
      />
      <span className="text-text-secondary hidden sm:inline">-</span>
      <input 
        type="date" 
        className="bg-input border border-border rounded-md px-3 py-1.5 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all w-full sm:w-auto"
        title="Date Range End"
      />
    </div>
  );
}
