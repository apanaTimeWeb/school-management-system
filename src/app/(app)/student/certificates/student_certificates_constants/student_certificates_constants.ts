import type { StudentCertificatesData } from '../student_certificates_types/student_certificates_types';

export const MOCK_CERTIFICATES_DATA: StudentCertificatesData = {
  generated: [
    {
      id: "cert_1",
      type: "Bonafide Certificate",
      issueDate: "Aug 15, 2024",
      referenceNo: "BC/2024/08/1042",
      hasQR: true,
      downloadUrl: "#"
    },
    {
      id: "cert_2",
      type: "Study Certificate",
      issueDate: "Jan 10, 2024",
      referenceNo: "SC/2024/01/0089",
      hasQR: true,
      downloadUrl: "#"
    }
  ],
  requests: [
    {
      id: "req_1",
      type: "Character Certificate",
      requestDate: "Oct 12, 2024",
      reason: "For passport application",
      status: "In Process",
      remarks: "Awaiting Principal's signature"
    },
    {
      id: "req_2",
      type: "Bonafide Certificate",
      requestDate: "Aug 10, 2024",
      reason: "Bank account opening",
      status: "Generated",
      remarks: "Available for download"
    }
  ]
};
