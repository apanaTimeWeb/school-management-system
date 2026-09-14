import React from "react";
import AccountantStudentFeeProfileMain from "../accountant_student_fees_components/AccountantStudentFeeProfileMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Fee Profile | School ERP 360",
  description: "Detailed view of student fees, payments, and history.",
};

export default function StudentFeeProfilePage({ params }: { params: { id: string } }) {
  return <AccountantStudentFeeProfileMain studentId={params.id} />;
}
