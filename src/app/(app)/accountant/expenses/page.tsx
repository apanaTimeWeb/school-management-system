import React from "react";
import AccountantExpensesMain from "./accountant_expenses_components/AccountantExpensesMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Management | School ERP 360",
  description: "Track, record, and manage school expenses.",
};

export default function ExpensesPage() {
  return <AccountantExpensesMain />;
}
