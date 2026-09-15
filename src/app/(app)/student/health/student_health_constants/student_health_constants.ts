import type { StudentHealthData } from '../student_health_types/student_health_types';

export const MOCK_HEALTH_DATA: StudentHealthData = {
  profile: {
    bloodGroup: "O+",
    heightCm: 165,
    weightKg: 58,
    bmi: 21.3, // Healthy weight
    allergies: ["Peanuts", "Dust"],
    chronicConditions: ["None reported"] // Masked or general
  },
  emergency: {
    name: "Rakesh Kumar",
    relation: "Father",
    phone: "+91 98765 43210",
    preferredHospital: "City Care Hospital"
  },
  checkups: [
    {
      id: "chk_1",
      date: "Sep 05, 2024",
      conductedBy: "Dr. Sharma (School Medical Officer)",
      remarks: "Overall healthy. Advised to drink more water.",
      vision: "Left: 6/6, Right: 6/6",
      dental: "Clean",
      status: "Healthy"
    },
    {
      id: "chk_2",
      date: "Feb 10, 2024",
      conductedBy: "Dr. Anita (Dental Specialist)",
      remarks: "Minor cavity in lower left molar. Advised to visit a dentist.",
      vision: "Not checked",
      dental: "Attention Needed",
      status: "Requires Attention"
    }
  ],
  notices: [
    {
      id: "medn_1",
      date: "Oct 01, 2024",
      title: "Flu Vaccination Drive",
      message: "The school is organizing a flu vaccination drive next Monday. Parents must submit the consent form by Friday.",
      isUrgent: false
    },
    {
      id: "medn_2",
      date: "Sep 15, 2024",
      title: "Dengue Prevention Alert",
      message: "Students are advised to wear full-sleeve shirts due to rising dengue cases in the city.",
      isUrgent: true
    }
  ]
};
