import { z } from 'zod';

// For Streams, Course Groups, Curriculum Types
export const AcademicGroupSchema = z.object({
  groupName: z.string().min(1, 'Name is required'),
  groupType: z.enum(['Stream', 'Course Group', 'Curriculum Type']),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type AcademicGroupType = z.infer<typeof AcademicGroupSchema> & { id: string };

// Comprehensive Subject Configuration
export const SubjectSchema = z.object({
  subjectName: z.string().min(1, 'Subject Name is required'),
  subjectCode: z.string().min(1, 'Subject Code is required'),
  
  // Categories (Core, Elective, Optional, Practical, Language)
  subjectCategory: z.enum(['Core', 'Elective', 'Optional', 'Practical', 'Language']),
  
  // Marks Configuration
  maxMarks: z.number().min(0, 'Cannot be negative'),
  passMarks: z.number().min(0, 'Cannot be negative'),
  credit: z.number().min(0).optional(),
  
  // Marks Distribution
  theoryMarks: z.number().min(0).default(0),
  practicalMarks: z.number().min(0).default(0),
  internalAssessment: z.number().min(0).default(0),
  
  isActive: z.boolean().default(true),
});
export type SubjectType = z.infer<typeof SubjectSchema> & { id: string };
