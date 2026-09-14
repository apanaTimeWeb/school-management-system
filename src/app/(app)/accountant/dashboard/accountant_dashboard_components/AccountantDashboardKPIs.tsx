"use client";
import React from "react";
import { TrendingUp, TrendingDown, IndianRupee, Wallet, CreditCard, AlertTriangle } from "lucide-react";
import { MOCK_KPIS, formatCurrency } from "../accountant_dashboard_utils/AccountantDashboardConstants";

// RESPONSIBILITY: Renders the top 4 KPI cards for financial overview.

export default function AccountantDashboardKPIs() {
  const kpis = [
    {
      label: "TODAY'S COLLECTION",
      value: formatCurrency(MOCK_KPIS.todaysCollection),
      trend: MOCK_KPIS.trends.today,
      icon: <IndianRupee size={24} className="text-primary" />,
      bg: "bg-primary-subtle"
    },
    {
      label: "MONTHLY COLLECTION",
      value: formatCurrency(MOCK_KPIS.monthlyCollection),
      trend: MOCK_KPIS.trends.monthly,
      icon: <Wallet size={24} className="text-info" />,
      bg: "bg-info/10"
    },
    {
      label: "TOTAL OUTSTANDING",
      value: formatCurrency(MOCK_KPIS.totalOutstanding),
      trend: MOCK_KPIS.trends.outstanding,
      icon: <CreditCard size={24} className="text-warning" />,
      bg: "bg-warning/10"
    },
    {
      label: "OVERDUE FEES",
      value: formatCurrency(MOCK_KPIS.overdueFees),
      trend: MOCK_KPIS.trends.overdue,
      icon: <AlertTriangle size={24} className="text-danger" />,
      bg: "bg-danger/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, idx) => (
        <div key={idx} className="bg-card border border-border rounded-lg p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${kpi.bg}`}>
              {kpi.icon}
            </div>
            <div className={`flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${kpi.trend > 0 ? 'text-success bg-success/10' : 'text-danger bg-danger/10'}`}>
              {kpi.trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {Math.abs(kpi.trend)}%
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-1">{kpi.label}</p>
            <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">{kpi.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
