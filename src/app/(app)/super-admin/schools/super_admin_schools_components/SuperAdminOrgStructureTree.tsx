import { Building2, School, MapPin, Grid, Layers, DoorOpen } from "lucide-react";
import { cn } from "@/app/(app)/super-admin/super_admin_components/SuperAdminSidebar";

export default function SuperAdminOrgStructureTree() {
  const tree = [
    {
      type: 'school', name: 'Smart Gym International School', icon: School, color: 'text-primary bg-primary-subtle',
      children: [
        {
          type: 'branch', name: 'Main Campus', icon: MapPin, color: 'text-info bg-info-bg',
          children: [
            {
              type: 'building', name: 'Academic Block A', icon: Building2, color: 'text-purple bg-purple-bg',
              children: [
                {
                  type: 'floor', name: 'Ground Floor', icon: Layers, color: 'text-warning bg-warning-bg',
                  children: [
                    { type: 'room', name: 'Room 101 (Class 1A)', icon: DoorOpen, color: 'text-text-secondary bg-bg-page' },
                    { type: 'room', name: 'Room 102 (Class 1B)', icon: DoorOpen, color: 'text-text-secondary bg-bg-page' },
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'branch', name: 'North Campus', icon: MapPin, color: 'text-info bg-info-bg',
          children: []
        }
      ]
    }
  ];

  const renderTree = (nodes: any[], depth = 0) => {
    return (
      <ul className={cn("space-y-2", depth > 0 && "pl-6 mt-2 border-l-2 border-border ml-3")}>
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <li key={idx} className="relative">
              {depth > 0 && (
                <div className="absolute -left-6 top-4 w-6 border-b-2 border-border"></div>
              )}
              <div className="flex items-center justify-between p-2 rounded-md hover:bg-bg-page border border-transparent hover:border-border transition-all group">
                <div className="flex items-center gap-3">
                  <div className={cn("p-1.5 rounded-md", node.color)}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-text-primary block">{node.name}</span>
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">{node.type}</span>
                  </div>
                </div>
                <button className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-primary-subtle rounded">
                  + Add Child
                </button>
              </div>
              {node.children && node.children.length > 0 && renderTree(node.children, depth + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {renderTree(tree)}
    </div>
  );
}
