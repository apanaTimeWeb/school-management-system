import { PrincipalAnalyticsTrendMetric, PrincipalRiskStudent } from '../analytics_types/PrincipalAnalytics.types';

export const PRINCIPAL_ANALYTICS_TRENDS: PrincipalAnalyticsTrendMetric[] = [
  { id: 't1', title: 'Total Student Strength', value: '2,450', trend: 'up', percentage: '+4.5%', description: 'Compared to last academic year', category: 'Strength' },
  { id: 't2', title: 'Average Attendance', value: '92.4%', trend: 'up', percentage: '+1.2%', description: 'Over the last 30 days', category: 'Attendance' },
  { id: 't3', title: 'Academic Avg (Mid-Term)', value: '78.5%', trend: 'stable', percentage: '0.0%', description: 'Consistent with previous term', category: 'Academic' },
  { id: 't4', title: 'Top Performing Class', value: 'Class 10-A', trend: 'up', percentage: '+5.0%', description: 'Highest average in Science/Math', category: 'Class' },
  { id: 't5', title: 'Teacher Performance Rating', value: '4.6/5', trend: 'up', percentage: '+0.2', description: 'Based on student/peer feedback', category: 'Teacher' },
  { id: 't6', title: 'New Admissions YTD', value: '320', trend: 'up', percentage: '+12%', description: 'Increase in primary section intake', category: 'Admission' },
  { id: 't7', title: 'Fee Collection Rate', value: '85%', trend: 'down', percentage: '-3.5%', description: 'Slight delay in Q3 fee payments', category: 'Fee' },
  { id: 't8', title: 'Disciplinary Incidents', value: '14', trend: 'down', percentage: '-25%', description: 'Significant drop in major infractions', category: 'Discipline' },
];

export const PRINCIPAL_RISK_STUDENTS: PrincipalRiskStudent[] = [
  { id: 'rs1', studentName: 'Aarav Patel', classSection: '10-B', riskType: 'Attendance', riskLevel: 'High', reason: 'Absent for 12 consecutive days without notice.', lastActionTaken: 'Parent meeting scheduled' },
  { id: 'rs2', studentName: 'Priya Sharma', classSection: '12-Science', riskType: 'Academic', riskLevel: 'High', reason: 'Failed in 3 subjects in Pre-Boards.', lastActionTaken: 'Assigned remedial classes' },
  { id: 'rs3', studentName: 'Rohan Verma', classSection: '8-A', riskType: 'Behavioral', riskLevel: 'Medium', reason: 'Repeated classroom disruptions.', lastActionTaken: 'Counseling session held' },
  { id: 'rs4', studentName: 'Neha Gupta', classSection: '9-C', riskType: 'Academic', riskLevel: 'Medium', reason: 'Sharp drop in Math scores (-30%).', lastActionTaken: 'Alerted subject teacher' },
];
