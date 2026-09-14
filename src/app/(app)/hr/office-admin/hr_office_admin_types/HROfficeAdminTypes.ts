export type HROfficeAdminRecord = {
  id: string;
  category: 'Stationery' | 'Pantry' | 'Maintenance' | 'Housekeeping' | 'Other';
  item: string;
  requestedBy: string;
  department: string;
  requestDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Approved' | 'Procured' | 'Rejected';
};
