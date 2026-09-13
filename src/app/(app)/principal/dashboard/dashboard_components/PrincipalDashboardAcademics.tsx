"use client";
// RESPONSIBILITY: Renders the Academic Performance chart and Upcoming Exams list.
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AcademicPerformanceData, UpcomingExam } from '../dashboard_types/PrincipalDashboard.types';
import { Calendar } from 'lucide-react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PrincipalDashboardAcademicsProps {
  performanceData: AcademicPerformanceData[];
  examsData: UpcomingExam[];
  isLoading: boolean;
}

export default function PrincipalDashboardAcademics({ performanceData, examsData, isLoading }: PrincipalDashboardAcademicsProps) {
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

  const series = [{
    name: 'Average Score (%)',
    data: performanceData.map(d => d.averageScore)
  }];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'radar',
      height: 250,
      toolbar: { show: false },
      background: 'transparent',
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#FACC15'],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
      colors: ['#FACC15']
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: '#FACC15',
      strokeWidth: 2,
    },
    xaxis: {
      categories: performanceData.map(d => d.subject),
      labels: {
        style: {
          colors: ['#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA', '#A1A1AA'],
          fontSize: '11px',
        }
      }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: 'rgba(255,255,255,0.1)',
          connectorColors: 'rgba(255,255,255,0.1)',
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 p-5 border-b md:border-b-0 md:border-r border-border">
        <h2 className="text-[16px] font-semibold text-text-primary mb-4">Academic Performance</h2>
        <div className="h-[250px] flex items-center justify-center">
          <ReactApexChart options={options} series={series} type="radar" height={250} />
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-black/20 p-5 flex flex-col">
        <h2 className="text-[16px] font-semibold text-text-primary mb-4">Upcoming Exams</h2>
        <div className="flex-1 flex flex-col gap-3">
          {examsData.length === 0 ? (
            <p className="text-[13px] text-text-secondary">No upcoming exams.</p>
          ) : (
            examsData.map(exam => (
              <div key={exam.id} className="p-3 bg-card border border-border rounded-md hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="text-[14px] font-medium text-text-primary mb-1 truncate" title={exam.name}>{exam.name}</div>
                <div className="flex items-center gap-2 text-[12px] text-text-secondary mb-1">
                  <Calendar size={12} className="text-primary" />
                  {exam.date}
                </div>
                <div className="text-[11px] px-1.5 py-0.5 bg-white/5 rounded w-max text-text-secondary">
                  Classes: {exam.classes}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
