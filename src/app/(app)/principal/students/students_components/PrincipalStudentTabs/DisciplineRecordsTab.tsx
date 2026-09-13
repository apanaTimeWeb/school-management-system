import React from 'react';
import { PrincipalStudentDisciplineRecord } from '../../students_types/PrincipalStudents.types';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface DisciplineRecordsTabProps {
  records: PrincipalStudentDisciplineRecord[];
}

export default function DisciplineRecordsTab({ records }: DisciplineRecordsTabProps) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-secondary bg-card border border-border rounded-lg">
        <ShieldAlert size={40} className="mb-4 text-border" />
        <p>No discipline records found. Good behavior!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-danger/5 border border-danger/20 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="text-danger shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="text-[14px] font-bold text-danger">Confidential Records</h4>
          <p className="text-[12px] text-danger/80 mt-1">Disciplinary actions are strictly confidential and should only be accessed for official purposes in accordance with the school policy.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border bg-black/20">
          <h3 className="text-[15px] font-bold text-text-primary">Discipline & Grievance Log</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                <th className="p-4 w-32">Date</th>
                <th className="p-4 w-48">Incident Type</th>
                <th className="p-4">Description & Action</th>
                <th className="p-4 w-32">Reported By</th>
                <th className="p-4 w-28 text-center">Severity</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-[13px] text-text-secondary whitespace-nowrap">{record.date}</td>
                  <td className="p-4 text-[14px] font-medium text-text-primary">{record.incidentType}</td>
                  <td className="p-4">
                    <p className="text-[13px] text-text-secondary mb-1">{record.description}</p>
                    <p className="text-[12px] font-medium text-text-primary"><span className="text-primary mr-1">Action:</span> {record.actionTaken}</p>
                  </td>
                  <td className="p-4 text-[13px] text-text-secondary">{record.reportedBy}</td>
                  <td className="p-4 text-center">
                    <span className={`px-2 py-1 rounded text-[11px] font-bold uppercase ${
                      record.severity === 'high' ? 'bg-danger/20 text-danger border border-danger/30' : 
                      record.severity === 'medium' ? 'bg-warning/20 text-warning border border-warning/30' : 
                      'bg-info/20 text-info border border-info/30'
                    }`}>
                      {record.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
