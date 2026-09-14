"use client";

import { Check } from "lucide-react";

interface HrEmployeesAddStepperProps {
  currentStep: number;
}

export default function HrEmployeesAddStepper({ currentStep }: HrEmployeesAddStepperProps) {
  const steps = [
    { num: 1, label: "Personal" },
    { num: 2, label: "Contact" },
    { num: 3, label: "Joining" },
    { num: 4, label: "Docs & Bank" },
  ];

  return (
    <div className="flex items-center justify-between w-full mb-8 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border -z-10 rounded-full"></div>
      
      {steps.map((step) => {
        const isActive = currentStep === step.num;
        const isCompleted = currentStep > step.num;
        
        return (
          <div key={step.num} className="flex flex-col items-center bg-card px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 ${
              isActive ? 'bg-primary text-card border-primary shadow-lg shadow-primary/30' : 
              isCompleted ? 'bg-success text-card border-success' : 
              'bg-input text-muted-foreground border-border'
            }`}>
              {isCompleted ? <Check size={18} /> : step.num}
            </div>
            <span className={`text-xs font-semibold mt-2 ${isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

