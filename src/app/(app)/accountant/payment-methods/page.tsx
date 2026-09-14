import React from "react";
import AccountantMethodsMain from "./accountant_methods_components/AccountantMethodsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Methods | School ERP 360",
  description: "Configure and manage active payment methods.",
};

export default function PaymentMethodsPage() {
  return <AccountantMethodsMain />;
}
