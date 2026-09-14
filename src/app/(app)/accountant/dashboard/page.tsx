import React from "react";
import AccountantDashboardMain from "./accountant_dashboard_components/AccountantDashboardMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accountant Dashboard | School ERP 360",
  description: "Financial overview, collections, and pending transactions.",
};

export default function AccountantDashboardPage() {
  return <AccountantDashboardMain />;
}
