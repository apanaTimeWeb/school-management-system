import React from "react";
import AccountantDocumentsMain from "./accountant_documents_components/AccountantDocumentsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Documents | School ERP 360",
  description: "Central repository for bills, invoices, cheques, and financial attachments.",
};

export default function DocumentsPage() {
  return <AccountantDocumentsMain />;
}
