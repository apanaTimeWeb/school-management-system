"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalAcademicClass } from '../academics_types/PrincipalAcademics.types';
import { fetchPrincipalClasses } from '../academics_api/PrincipalAcademicsApi';
import { usePrincipalAcademicsStore } from '../academics_store/usePrincipalAcademicsStore';
import { Users, UserPlus, Building, Edit3 } from 'lucide-react';

export default function PrincipalAcademicsClassesTab() {
  const [classes, setClasses] = useState<PrincipalAcademicClass[]>([]);
  const [loading, setLoading] = useState(true);
  const { setAssignTeacherModalOpen } = usePrincipalAcademicsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalClasses().then(data => {
      if (isMounted) {
        setClasses(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-64 bg-card border border-border rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {classes.map((cls) => (
        <div key={cls.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Class Header */}
          <div className="bg-black/20 p-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <Building className="text-primary" size={20} />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold text-text-primary">{cls.className}</h2>
                  <p className="text-[12px] text-text-secondary">{cls.level} Level &bull; {cls.totalStudents} Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sections List */}
          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                  <th className="p-4 w-24">Section</th>
                  <th className="p-4 w-32">Room No</th>
                  <th className="p-4 w-40 text-center">Strength</th>
                  <th className="p-4">Class Teacher</th>
                  <th className="p-4 w-48 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {cls.sections.map(sec => (
                  <tr key={sec.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-text-primary border border-border">
                        {sec.sectionName}
                      </div>
                    </td>
                    <td className="p-4 text-[14px] text-text-secondary">{sec.roomNo}</td>
                    <td className="p-4 text-[14px] font-bold text-text-primary text-center">
                      {sec.studentCount} <span className="text-[12px] text-text-secondary font-medium">/ {sec.maxCapacity}</span>
                    </td>
                    <td className="p-4">
                      {sec.classTeacher ? (
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-info" />
                          <span className="text-[14px] font-medium text-text-primary">{sec.classTeacher}</span>
                        </div>
                      ) : (
                        <span className="text-[13px] text-danger italic">Not Assigned</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => setAssignTeacherModalOpen(true, sec.id)}
                        className="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 hover:border-primary rounded-md text-[12px] font-bold transition-colors flex items-center gap-2 ml-auto"
                      >
                        {sec.classTeacher ? <Edit3 size={14} /> : <UserPlus size={14} />}
                        {sec.classTeacher ? 'Change Teacher' : 'Assign Teacher'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
