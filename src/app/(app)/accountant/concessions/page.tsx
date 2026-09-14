import React from "react";
import AccountantConcessionsMain from "./accountant_concessions_components/AccountantConcessionsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Concession | School ERP 360",
  description: "Request concessions, scholarships, and track approval status.",
};

export default function ConcessionsPage() {
  return <AccountantConcessionsMain />;
}
