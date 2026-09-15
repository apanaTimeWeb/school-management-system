import { MOCK_CERTIFICATES_DATA } from '../student_certificates_constants/student_certificates_constants';
import type { StudentCertificatesData, CertificateRequest } from '../student_certificates_types/student_certificates_types';

/**
 * RESPONSIBILITY: Fetches generated certificates and past requests.
 */
export async function fetchStudentCertificates(): Promise<{ data: StudentCertificatesData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Certificates fetched successfully",
    data: MOCK_CERTIFICATES_DATA,
  };
}

export async function requestCertificate(payload: Partial<CertificateRequest>): Promise<{ success: boolean, message: string, data?: CertificateRequest }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const newReq: CertificateRequest = {
    id: "req_new_" + Date.now(),
    type: payload.type as any,
    requestDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    reason: payload.reason!,
    status: "Pending"
  };

  return { success: true, message: "Certificate request submitted successfully.", data: newReq };
}
