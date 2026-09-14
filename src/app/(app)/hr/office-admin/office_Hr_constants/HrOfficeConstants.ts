import type { OfficeNotice, OfficeTask, OfficeDocument } from "../office_admin_types/HrOfficeTypes";

export const MOCK_NOTICES: OfficeNotice[] = [
  { id: "not-1", title: "Upcoming Diwali Holidays", type: "Notice", datePublished: "2024-10-20", targetAudience: "All Staff", content: "The school will remain closed from Oct 24th to Oct 28th.", priority: "Normal" },
  { id: "cir-1", title: "Revised Duty Roster for Exam Week", type: "Circular", datePublished: "2024-10-15", targetAudience: "Teachers Only", content: "Please check the revised duty roster for the upcoming mid-term examinations attached herewith.", priority: "High" },
  { id: "not-2", title: "Urgent: Server Maintenance", type: "Notice", datePublished: "2024-10-22", targetAudience: "Admin Staff", content: "ERP servers will be down tonight for 2 hours.", priority: "Urgent" }
];

export const MOCK_TASKS: OfficeTask[] = [
  { id: "tsk-1", taskName: "Update Visitor Register", registerType: "Security Log", assignedTo: "Amit Kumar", dueDate: "2024-10-22", status: "Pending" },
  { id: "tsk-2", taskName: "Dispatch Official Letters to Board", registerType: "Dispatch Register", assignedTo: "Rakesh Singh", dueDate: "2024-10-23", status: "In Progress" },
  { id: "tsk-3", taskName: "Inventory Check for Stationery", assignedTo: "Sunita Rao", dueDate: "2024-10-20", status: "Completed" }
];

export const MOCK_DOCUMENTS: OfficeDocument[] = [
  { id: "doc-1", fileName: "CBSE_Affiliation_Renewal_2024.pdf", category: "Official Correspondence", uploadDate: "2024-08-15", size: "4.2 MB" },
  { id: "doc-2", fileName: "Staff_Policy_Manual_V2.pdf", category: "Office Document", uploadDate: "2024-09-01", size: "1.8 MB" },
  { id: "doc-3", fileName: "Fire_Safety_Audit_Report.pdf", category: "Administrative Record", uploadDate: "2024-07-20", size: "3.5 MB" }
];

