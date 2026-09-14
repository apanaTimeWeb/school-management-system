import React from "react";
import AccountantCashbookMain from "./accountant_cashbook_components/AccountantCashbookMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Management | School ERP 360",
  description: "Daily cash register, handover and closing.",
};

export default function CashManagementPage() {
  return <AccountantCashbookMain />;
}
