import React from "react";
import AccountantProfileMain from "./accountant_profile_components/AccountantProfileMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | School ERP 360",
  description: "Manage your profile, security settings, 2FA, and login history.",
};

export default function AccountantProfilePage() {
  return <AccountantProfileMain />;
}
