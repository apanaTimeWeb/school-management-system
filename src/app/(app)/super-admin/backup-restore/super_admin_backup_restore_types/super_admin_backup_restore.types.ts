import { z } from 'zod';

export const BackupRecordSchema = z.object({
  id: z.string(),
  name: z.string(),
  date: z.string(),
  time: z.string(),
  backupSize: z.string(), // "Backup size" explicitly
  backupStatus: z.enum(['Completed', 'Failed', 'In Progress']), // "Backup status" explicitly
  type: z.enum(['Manual', 'Automatic'])
});

export type BackupRecordType = z.infer<typeof BackupRecordSchema>;

export const RestoreLogSchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  initiatedBy: z.string(),
  backupName: z.string(),
  status: z.string(),
  details: z.string()
});

export type RestoreLogType = z.infer<typeof RestoreLogSchema>;
