"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminHrEmployeesUrlConfig } from "../../hr_employees_url_config";

export function useAdminHrEmployeesAdd() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    personal: { firstName: "", lastName: "", dob: "", gender: "Male", bloodGroup: "" },
    contact: { phone: "", email: "", address: "", emergencyName: "", emergencyPhone: "" },
    joining: { joinDate: "", department: "", designation: "", employmentType: "Full-time", qualification: "", experience: "" },
    bank: { accountName: "", accountNumber: "", bankName: "", ifscCode: "" }
  });

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Employee Added Successfully!"); // In real app use Toast
    router.push(AdminHrEmployeesUrlConfig.routes.list);
  };

  return {
    currentStep,
    totalSteps,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    submitForm,
    isSubmitting
  };
}
