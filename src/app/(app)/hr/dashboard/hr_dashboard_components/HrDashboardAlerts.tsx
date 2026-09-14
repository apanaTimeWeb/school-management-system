"use client";

// RESPONSIBILITY: Renders global HR alert banners (e.g., expiring documents, unapproved leaves).

import { TriangleAlert, Info, AlertCircle } from "lucide-react";
import type { HrAlert } from "../hr_dashboard_types/HrDashboardTypes";

interface HrDashboardAlertsProps {
  alerts: HrAlert[];
}

export default function HrDashboardAlerts({ alerts }: HrDashboardAlertsProps) {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 mb-6">
      {alerts.map((alert) => {
        let bgStyle = "";
        let borderStyle = "";
        let textStyle = "";
        let Icon = Info;

        switch (alert.type) {
          case 'warning':
            bgStyle = "bg-warning/10";
            borderStyle = "border-warning";
            textStyle = "text-warning";
            Icon = TriangleAlert;
            break;
          case 'danger':
            bgStyle = "bg-danger/10";
            borderStyle = "border-danger";
            textStyle = "text-danger";
            Icon = AlertCircle;
            break;
          case 'info':
          default:
            bgStyle = "bg-info/10";
            borderStyle = "border-info";
            textStyle = "text-info";
            Icon = Info;
            break;
        }

        return (
          <div 
            key={alert.id}
            className={`flex items-center gap-3 p-3 rounded-md border-l-4 ${borderStyle} ${bgStyle}`}
          >
            <Icon size={20} className={textStyle} />
            <span className={`text-sm font-medium ${textStyle}`}>
              {alert.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}

