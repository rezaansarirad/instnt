import React from "react";
import { Check, X, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RequirementProps {
  label: string;
  met: boolean;
}

const Requirement: React.FC<RequirementProps> = ({ label, met }) => (
  <div className="flex items-center space-x-2">
    {met ? (
      <Check className="h-4 w-4 text-green-500" />
    ) : (
      <Circle className="h-4 w-4 text-gray-400 fill-gray-400" />
    )}
    <span className={cn("text-sm", met ? "text-green-500" : "text-gray-400")}>
      {label}
    </span>
  </div>
);

interface PasswordRequirementsProps {
  password?: string;
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password = "" }) => {
  const requirements = [
    { label: "At least 8 characters in length", met: password.length >= 8 },
    { label: "Lower case letters (a-z)", met: /[a-z]/.test(password) },
    { label: "Upper case letters (A-Z)", met: /[A-Z]/.test(password) },
    { label: "Numbers (i.e. 0-9)", met: /[0-9]/.test(password) },
    { label: "Special characters", met: /[^A-Za-z0-9]/.test(password) },
  ];

  if (!password) return null;

  return (
    <div className="absolute z-10 w-full p-4 mt-2 bg-slate-900 rounded-lg shadow-xl text-white">
        <div className="space-y-2">
            <div className="flex items-center space-x-2">
                 {password.length >= 8 ? (
                    <Check className="h-4 w-4 text-green-500" />
                 ) : (
                    <X className="h-4 w-4 text-red-500" />
                 )}
                <span className={cn("text-sm", password.length >= 8 ? "text-green-500" : "text-red-500")}>
                    At least 8 characters in length
                </span>
            </div>
            
             <div className="flex items-center space-x-2 mt-2">
                 {requirements.slice(1).every(r => r.met) ? (
                     <Check className="h-4 w-4 text-green-500" />
                 ) : (
                     <X className="h-4 w-4 text-red-500" />
                 )}
                 <span className={cn("text-sm font-medium", requirements.slice(1).every(r => r.met) ? "text-green-500" : "text-red-500")}>
                     Should contain:
                 </span>
             </div>

            <div className="pl-6 space-y-1">
                {requirements.slice(1).map((req, index) => (
                    <Requirement key={index} label={req.label} met={req.met} />
                ))}
            </div>
        </div>
    </div>
  );
};

