import React from "react";
import AccountantBankMain from "./accountant_bank_components/AccountantBankMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank & Transaction Records | School ERP 360",
  description: "Track cheques, bank transfers, and perform bank reconciliation.",
};

export default function BankRecordsPage() {
  return <AccountantBankMain />;
}
