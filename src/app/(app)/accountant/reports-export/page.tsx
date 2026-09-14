import React from "react";
import AccountantExportMain from "./accountant_export_components/AccountantExportMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports Export Hub | School ERP 360",
  description: "Advanced data export center with powerful filters.",
};

export default function ReportsExportPage() {
  return <AccountantExportMain />;
}
