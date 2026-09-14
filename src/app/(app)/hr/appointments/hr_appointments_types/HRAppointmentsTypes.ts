export type HRLetter = {
  id: string;
  recipientName: string;
  recipientRole: string;
  letterType: 'Offer Letter' | 'Appointment Letter' | 'Experience Letter' | 'Relieving Letter' | 'Warning Letter';
  issueDate: string;
  status: 'Draft' | 'Sent' | 'Signed';
};
