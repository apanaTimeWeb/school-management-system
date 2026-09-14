import React from "react";
import AccountantClosingMain from "./accountant_closing_components/AccountantClosingMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Closing | School ERP 360",
  description: "End of Day (EOD) daily closing and settlement.",
};

export default function DailyClosingPage() {
  return <AccountantClosingMain />;
}
