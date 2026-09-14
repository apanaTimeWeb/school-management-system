import React from "react";
import AccountantFinesMain from "./accountant_fines_components/AccountantFinesMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine Management | School ERP 360",
  description: "Track late fees, collect fines, and request waivers.",
};

export default function FinesPage() {
  return <AccountantFinesMain />;
}
