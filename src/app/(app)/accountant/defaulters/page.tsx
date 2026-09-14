import React from "react";
import AccountantDefaultersMain from "./accountant_defaulters_components/AccountantDefaultersMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outstanding / Defaulters | School ERP 360",
  description: "Track fee defaulters, view aging, and manage follow-ups.",
};

export default function DefaultersPage() {
  return <AccountantDefaultersMain />;
}
