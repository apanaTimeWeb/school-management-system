"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// RESPONSIBILITY: Renders the collection trend chart using ApexCharts.

export default function AccountantDashboardTrendChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options: any = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
      fontFamily: 'Inter, sans-serif',
      sparkline: { enabled: false }
    },
    colors: ['#FACC15'], // Premium Gold
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 90, 100]
      }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: ['1 Nov', '5 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'],
      labels: { style: { colors: '#A1A1AA', fontSize: '11px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: '#A1A1AA', fontSize: '11px' },
        formatter: (value: number) => `₹${value / 1000}k`
      }
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.05)',
      strokeDashArray: 4,
    },
    theme: { mode: 'dark' },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val: number) => `₹${val.toLocaleString('en-IN')}` }
    }
  };

  const series = [{
    name: 'Collection',
    data: [15000, 42000, 28000, 85000, 45000, 32000, 68000]
  }];

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wide">Collection Trend</h2>
        <select className="bg-bg-input border border-border rounded-md px-2 py-1 text-xs text-text-primary outline-none focus:border-primary cursor-pointer">
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="h-64 w-full">
        {mounted && (
          <Chart options={options} series={series} type="area" height="100%" width="100%" />
        )}
      </div>
    </div>
  );
}
