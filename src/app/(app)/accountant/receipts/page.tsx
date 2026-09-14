import React from "react";
import AccountantReceiptsMain from "./accountant_receipts_components/AccountantReceiptsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receipts | School ERP 360",
  description: "Manage, search, print, and void fee receipts.",
};

export default function ReceiptsPage() {
  return <AccountantReceiptsMain />;
}
