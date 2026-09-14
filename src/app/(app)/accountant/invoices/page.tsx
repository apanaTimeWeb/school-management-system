import React from "react";
import AccountantInvoicesMain from "./accountant_invoices_components/AccountantInvoicesMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices | School ERP 360",
  description: "Generate and manage student invoices.",
};

export default function InvoicesPage() {
  return <AccountantInvoicesMain />;
}
