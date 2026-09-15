import type { StudentFullProfile } from '../student_profile_types/student_profile_types';

export const MOCK_STUDENT_FULL_PROFILE: StudentFullProfile = {
  id: "STU-2024-001",
  studentName: "Aarav Sharma",
  profilePhotoUrl: "", // Leave empty to show fallback icon
  
  admissionNumber: "ADM/2020/4521",
  className: "10th",
  section: "A",
  rollNumber: "14",
  academicSession: "2024-2025",
  house: "Red House",
  
  dateOfBirth: "15-Aug-2008",
  gender: "Male",
  bloodGroup: "O+",
  
  studentPhone: "+91 9876543210",
  studentEmail: "aarav.sharma@school.edu",
  addressLine1: "123, Sunrise Apartments",
  addressLine2: "MG Road, Near Metro Station",
  city: "New Delhi",
  state: "Delhi",
  pincode: "110001",
  
  parentDetails: {
    fatherName: "Rajesh Sharma",
    fatherContact: "+91 9988776655",
    fatherOccupation: "Software Engineer",
    motherName: "Priya Sharma",
    motherContact: "+91 9988776644",
    motherOccupation: "Teacher"
  }
};
