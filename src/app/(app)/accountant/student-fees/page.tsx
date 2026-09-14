import React from "react";
import AccountantStudentFeesListMain from "./accountant_student_fees_components/AccountantStudentFeesListMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Fees | School ERP 360",
  description: "Search and manage individual student fee profiles.",
};

export default function StudentFeesListPage() {
  return <AccountantStudentFeesListMain />;
}
