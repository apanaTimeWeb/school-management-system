"use client";
// RESPONSIBILITY: Renders the Fee Collection Summary chart using ApexCharts.
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FeeCollectionData } from '../dashboard_types/PrincipalDashboard.types';

// Dynamically import ReactApexChart to prevent SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PrincipalDashboardFinancialsProps {
  data: FeeCollectionData[];
  isLoading: boolean;
}

export default function PrincipalDashboardFinancials({ data, isLoading }: PrincipalDashboardFinancialsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoading || !mounted) {
    return (
      <div className="bg-card border border-border rounded-lg p-5 h-[350px] flex flex-col">
        <div className="h-6 w-48 bg-skeleton-base animate-pulse rounded mb-4" />
        <div className="flex-1 bg-skeleton-base animate-pulse rounded" />
      </div>
    );
  }

  const series = [
    {
      name: 'Collected',
      data: data.map(item => item.collected),
    },
    {
      name: 'Pending',
      data: data.map(item => item.pending),
    }
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      stacked: true,
      toolbar: { show: false },
      background: 'transparent',
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#FACC15', '#EF4444'], // Primary Gold and Danger Red
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: data.map(item => item.month),
      labels: {
        style: {
          colors: '#A1A1AA',
          fontSize: '12px',
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return `₹${(val / 100000).toFixed(1)}L`;
        },
        style: {
          colors: '#A1A1AA',
          fontSize: '12px',
        }
      },
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.05)',
      strokeDashArray: 4,
      yaxis: {
        lines: { show: true }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: '#FFFFFF'
      },
      markers: {
        shape: 'circle',
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return "₹" + val.toLocaleString('en-IN');
        }
      }
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-[16px] font-semibold text-text-primary mb-4">Fee Collection Summary</h2>
      <div className="h-[300px]">
        <ReactApexChart options={options} series={series} type="bar" height={300} />
      </div>
    </div>
  );
}
