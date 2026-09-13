import React from 'react';
import { PrincipalStudentAcademicRecord } from '../../students_types/PrincipalStudents.types';
import { GraduationCap } from 'lucide-react';

interface AcademicHistoryTabProps {
  records: PrincipalStudentAcademicRecord[];
}

export default function AcademicHistoryTab({ records }: AcademicHistoryTabProps) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-secondary bg-card border border-border rounded-lg">
        <GraduationCap size={40} className="mb-4 text-border" />
        <p>No academic records found for this student.</p>
      </div>
    );
  }

  // Group by Academic Year and Term
  // For simplicity in this demo, we'll just list them in a table
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border bg-black/20">
        <h3 className="text-[15px] font-bold text-text-primary">Academic Performance Log</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-32">Academic Year</th>
              <th className="p-4 w-24">Term</th>
              <th className="p-4">Subject</th>
              <th className="p-4 w-24 text-center">Score</th>
              <th className="p-4 w-20 text-center">Grade</th>
              <th className="p-4">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4 text-[13px] font-medium text-text-primary">{record.academicYear}</td>
                <td className="p-4 text-[13px] text-text-secondary">{record.term}</td>
                <td className="p-4 text-[14px] font-medium text-text-primary">{record.subject}</td>
                <td className="p-4 text-[13px] text-center">
                  <span className="font-bold text-text-primary">{record.score}</span>
                  <span className="text-text-secondary">/{record.maxScore}</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2 py-1 rounded-md text-[12px] font-bold ${
                    record.grade.includes('A') ? 'bg-success/20 text-success' : 
                    record.grade.includes('B') ? 'bg-info/20 text-info' : 
                    'bg-warning/20 text-warning'
                  }`}>
                    {record.grade}
                  </span>
                </td>
                <td className="p-4 text-[13px] text-text-secondary italic">{record.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
