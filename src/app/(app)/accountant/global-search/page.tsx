import React from "react";
import AccountantSearchMain from "./accountant_search_components/AccountantSearchMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Finance Search | School ERP 360",
  description: "Omni-search for receipts, invoices, students, and transactions.",
};

export default function GlobalSearchPage() {
  return <AccountantSearchMain />;
}
