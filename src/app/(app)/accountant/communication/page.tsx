import React from "react";
import AccountantCommunicationMain from "./accountant_communication_components/AccountantCommunicationMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Communication | School ERP 360",
  description: "Send fee reminders, receipts, and payment notifications.",
};

export default function CommunicationPage() {
  return <AccountantCommunicationMain />;
}
