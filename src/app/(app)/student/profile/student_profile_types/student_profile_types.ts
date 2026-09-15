export interface ParentDetails {
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  motherName: string;
  motherContact: string;
  motherOccupation: string;
}

export interface StudentFullProfile {
  // Core Identity
  id: string; // Student ID
  studentName: string;
  profilePhotoUrl: string;
  
  // Academic Information (Read-only)
  admissionNumber: string;
  className: string; // using className to avoid reserved keyword 'class'
  section: string;
  rollNumber: string;
  academicSession: string;
  house: string; // e.g. Red, Blue, Green, Yellow
  
  // Personal & Sensitive Information (Read-only for student)
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
  
  // Contact & Address
  studentPhone: string;
  studentEmail: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  
  // Parent/Guardian Details
  parentDetails: ParentDetails;
}
