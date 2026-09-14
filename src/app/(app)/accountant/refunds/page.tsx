import React from "react";
import AccountantRefundsMain from "./accountant_refunds_components/AccountantRefundsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Management | School ERP 360",
  description: "Initiate, track, and process student fee refunds.",
};

export default function RefundsPage() {
  return <AccountantRefundsMain />;
}
