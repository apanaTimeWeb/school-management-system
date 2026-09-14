import React from "react";
import AccountantOnlinePaymentsMain from "./accountant_online_payments_components/AccountantOnlinePaymentsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Payments | School ERP 360",
  description: "Monitor and reconcile online payment gateway transactions.",
};

export default function OnlinePaymentsPage() {
  return <AccountantOnlinePaymentsMain />;
}
