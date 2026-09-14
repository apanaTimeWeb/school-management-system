export type ExportFormat = 'PDF' | 'Excel' | 'CSV' | 'Print';
export type ExportStatus = 'Completed' | 'Processing' | 'Failed';

export interface ExportHistoryRecord {
  id: string;
  timestamp: string;
  reportName: string;
  format: ExportFormat;
  status: ExportStatus;
  fileSize?: string;
  filtersUsed: string;
  requestedBy: string;
}
