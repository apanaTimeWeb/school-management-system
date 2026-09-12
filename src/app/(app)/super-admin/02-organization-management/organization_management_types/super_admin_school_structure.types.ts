import { z } from 'zod';

export const ClassSchema = z.object({
  className: z.string().min(1, 'Class Name is required'),
  classCode: z.string().min(1, 'Class Code is required'),
  classOrder: z.number().min(1, 'Order must be positive'),
  wingId: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type ClassType = z.infer<typeof ClassSchema> & { id: string };

export const SectionSchema = z.object({
  classId: z.string().min(1, 'Class is required'),
  sectionName: z.string().min(1, 'Section Name is required'),
  capacity: z.number().min(1, 'Capacity must be positive'),
  sectionTeacher: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type SectionType = z.infer<typeof SectionSchema> & { id: string };

export const DepartmentSchema = z.object({
  deptName: z.string().min(1, 'Department Name is required (e.g. Academic)'),
  description: z.string().optional(),
  headOfDept: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type DepartmentType = z.infer<typeof DepartmentSchema> & { id: string };

export const HouseSchema = z.object({
  houseName: z.string().min(1, 'House Name is required'),
  houseColor: z.string().optional(),
  houseCaptain: z.string().optional(),
  houseTeacher: z.string().optional(),
  allocationRules: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type HouseType = z.infer<typeof HouseSchema> & { id: string };

export const WingSchema = z.object({
  wingName: z.string().min(1, 'Wing Name is required (e.g. Primary)'),
  headOfWing: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type WingType = z.infer<typeof WingSchema> & { id: string };
