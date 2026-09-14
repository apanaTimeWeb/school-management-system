import React from "react";
import AccountantReconMain from "./accountant_reconciliation_components/AccountantReconMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reconciliation | School ERP 360",
  description: "Reconcile payment gateways, bank statements, and cash records.",
};

export default function ReconciliationPage() {
  return <AccountantReconMain />;
}
