import React from "react";
import AccountantAuditMain from "./accountant_audit_components/AccountantAuditMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & History | School ERP 360",
  description: "Track all sensitive financial actions with IP and value change history.",
};

export default function AuditHistoryPage() {
  return <AccountantAuditMain />;
}
