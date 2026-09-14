import React from "react";
import AccountantIncomeMain from "./accountant_income_components/AccountantIncomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income & Receipts | School ERP 360",
  description: "Track all school income, fees, and miscellaneous receipts.",
};

export default function IncomePage() {
  return <AccountantIncomeMain />;
}
