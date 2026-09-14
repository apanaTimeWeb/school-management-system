import type { LetterTemplate, GeneratedLetter } from "../hr_letters_types/AdminHrLettersTypes";

export const MOCK_LETTER_TEMPLATES: LetterTemplate[] = [
  {
    id: "tpl-1", type: "Appointment Letter", title: "Standard Appointment Letter", 
    description: "Official offer and appointment details for new teaching staff.",
    defaultContent: "Dear [Employee_Name],\n\nWe are pleased to offer you the position of [Designation] at Smart Gym 360. Your employment will commence on [Joining_Date].\n\nYour starting salary is [Salary] per annum.\n\nPlease sign and return this copy.\n\nRegards,\nHR Department"
  },
  {
    id: "tpl-2", type: "Experience Certificate", title: "Teacher Experience Certificate", 
    description: "Verifies the tenure and role of a former teacher.",
    defaultContent: "To Whomsoever It May Concern\n\nThis is to certify that [Employee_Name] was employed with us as a [Designation] from [Start_Date] to [End_Date].\n\nDuring their tenure, we found them to be highly dedicated and professional.\n\nWe wish them success in future endeavors.\n\nAuthorized Signatory"
  },
  {
    id: "tpl-3", type: "Relieving Letter", title: "Standard Relieving Letter", 
    description: "Issued upon formal exit and completion of notice period.",
    defaultContent: "Dear [Employee_Name],\n\nThis is with reference to your resignation dated [Resignation_Date]. We wish to inform you that your resignation has been accepted and you are relieved from the services of the school effective [End_Date] closing hours.\n\nAll your full and final settlements have been cleared.\n\nBest Wishes."
  },
  {
    id: "tpl-4", type: "Salary/Employment Letter", title: "Employment Verification", 
    description: "Used for bank loans and visa applications.",
    defaultContent: "To Whomsoever It May Concern\n\nThis is to certify that [Employee_Name] is a bonafide employee of our institution working as [Designation] since [Start_Date].\n\nTheir current gross salary is [Salary].\n\nThis letter is issued upon the request of the employee."
  },
  {
    id: "tpl-5", type: "Joining Letter", title: "Joining Confirmation", 
    description: "Formal confirmation of an employee reporting to duty.",
    defaultContent: "Date: [Current_Date]\n\nThis confirms that [Employee_Name] has formally reported to duty as [Designation] on [Joining_Date]."
  },
  {
    id: "tpl-6", type: "Custom HR Letter", title: "Blank Custom Letter", 
    description: "Start from a blank canvas for special HR communications.",
    defaultContent: "[Enter Custom Content Here]"
  }
];

export const MOCK_GENERATED_LETTERS: GeneratedLetter[] = [
  { id: "let-101", employeeId: "EMP-012", employeeName: "Arun Verma", letterType: "Appointment Letter", generatedDate: "2024-06-25", generatedBy: "Admin", status: "Emailed", referenceNo: "REF-2024-AP-001" },
  { id: "let-102", employeeId: "EMP-045", employeeName: "Sunita Rao", letterType: "Experience Certificate", generatedDate: "2024-05-15", generatedBy: "HR Dept", status: "Printed", referenceNo: "REF-2024-EX-012" },
  { id: "let-103", employeeId: "EMP-088", employeeName: "Vikram Singh", letterType: "Salary/Employment Letter", generatedDate: "2024-07-01", generatedBy: "Admin", status: "Generated", referenceNo: "REF-2024-SL-005" },
];
