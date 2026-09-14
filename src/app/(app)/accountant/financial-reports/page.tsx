import React from "react";
import AccountantReportsMain from "./accountant_reports_components/AccountantReportsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Reports | School ERP 360",
  description: "Comprehensive financial analytics and reporting center.",
};

export default function FinancialReportsPage() {
  return <AccountantReportsMain />;
}
