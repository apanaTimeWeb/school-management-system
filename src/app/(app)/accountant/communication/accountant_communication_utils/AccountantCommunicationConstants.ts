import { CommunicationRecord } from "../accountant_communication_types/AccountantCommunicationTypes";

export const COMMUNICATION_TEMPLATES = {
  'Fee Reminder': "Dear Parent, this is a gentle reminder that the fee for {Student_Name} is due soon. Please pay by {Due_Date}.",
  'Payment Confirmation': "Thank you! We have received your payment of {Amount} for {Student_Name}.",
  'Receipt Notification': "Dear Parent, your payment receipt #{Receipt_No} is available to download from the portal.",
  'Due Fee Notification': "Dear Parent, the fee of {Amount} for {Student_Name} is due today.",
  'Overdue Reminder': "URGENT: Your fee for {Student_Name} is overdue by {Days}. Please pay immediately to avoid late fines.",
  'Refund Notification': "Dear Parent, a refund of {Amount} has been processed to your original payment method."
};

export const MOCK_COMMUNICATIONS: CommunicationRecord[] = [
  {
    id: "MSG-991",
    timestamp: "2024-04-18 10:15 AM",
    type: "Payment Confirmation",
    channel: "WhatsApp",
    recipient: "Aarav Sharma (STU-1001)",
    status: "Sent",
    sentBy: "System (Auto)",
    messagePreview: "Thank you! We have received your payment of ₹15,000 for Aarav Sharma."
  },
  {
    id: "MSG-992",
    timestamp: "2024-04-17 04:00 PM",
    type: "Overdue Reminder",
    channel: "SMS",
    recipient: "Class 10 - Defaulters (12 Students)",
    status: "Sent",
    sentBy: "Admin",
    messagePreview: "URGENT: Your fee for {Student_Name} is overdue..."
  },
  {
    id: "MSG-993",
    timestamp: "2024-04-17 09:30 AM",
    type: "Receipt Notification",
    channel: "Email",
    recipient: "Meera Reddy (STU-1002)",
    status: "Failed",
    sentBy: "System (Auto)",
    messagePreview: "Dear Parent, your payment receipt #REC-002 is available..."
  }
];
