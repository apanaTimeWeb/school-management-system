import React from "react";
import AccountantCollectFeeMain from "./accountant_collect_fee_components/AccountantCollectFeeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collect Fee | School ERP 360",
  description: "Process student fee payments with various options.",
};

export default function CollectFeePage() {
  return <AccountantCollectFeeMain />;
}
