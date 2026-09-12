import { z } from 'zod';

export const SessionSchema = z.object({
  sessionName: z.string().min(1, 'Session Name is required (e.g. 2026-2027)'),
  startDate: z.string().min(1, 'Start Date is required'),
  endDate: z.string().min(1, 'End Date is required'),
  status: z.enum(['Current', 'Upcoming', 'Previous', 'Archived']).default('Upcoming'),
});

export type AcademicSession = z.infer<typeof SessionSchema> & { id: string };

export const RolloverSchema = z.object({
  fromSessionId: z.string().min(1, 'Please select the source session'),
  toSessionName: z.string().min(1, 'New Session Name is required'),
  startDate: z.string().min(1, 'Start Date is required'),
  endDate: z.string().min(1, 'End Date is required'),
  copyClasses: z.boolean().default(true),
  copySubjects: z.boolean().default(true),
  copyTeachers: z.boolean().default(true),
  copyTimetable: z.boolean().default(false),
  copyFeeStructures: z.boolean().default(false),
  copyExamConfig: z.boolean().default(false),
  copyHouses: z.boolean().default(true),
  copySections: z.boolean().default(true),
});

export type SessionRollover = z.infer<typeof RolloverSchema>;
