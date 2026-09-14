"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { formatCurrency } from "../accountant_dashboard_utils/AccountantDashboardConstants";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// RESPONSIBILITY: Renders the donut chart for payment method summary.

export default function AccountantDashboardPaymentSummary() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = 45000;

  const options: any = {
    chart: {
      type: 'donut',
      background: 'transparent',
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#22C55E', '#3B82F6', '#F59E0B', '#8B5CF6'], // UPI, Card, Cash, Bank
    labels: ['UPI', 'Card', 'Cash', 'Bank'],
    stroke: {
      show: true,
      colors: ['#111111'], // matches bg-card
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              color: '#A1A1AA', // text-secondary
              fontSize: '12px',
            },
            value: {
              show: true,
              color: '#FFFFFF', // text-primary
              fontSize: '20px',
              fontWeight: 700,
              formatter: (val: string) => `₹${Number(val).toLocaleString('en-IN')}`,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              color: '#A1A1AA',
              formatter: () => formatCurrency(total),
            }
          }
        }
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: '#FFFFFF',
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
      }
    },
    theme: { mode: 'dark' },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val: number) => formatCurrency(val) }
    }
  };

  const series = [25000, 10000, 7000, 3000]; // Values corresponding to labels

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm w-full flex flex-col">
      <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">Payment Method Summary</h2>
      <div className="flex-1 flex items-center justify-center min-h-[250px]">
        {mounted && (
          <Chart options={options} series={series} type="donut" height="100%" width="100%" />
        )}
      </div>
    </div>
  );
}
