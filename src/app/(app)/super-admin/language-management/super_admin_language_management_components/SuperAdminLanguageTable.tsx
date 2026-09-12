"use client";

import { Check, X, Star } from "lucide-react";

export default function SuperAdminLanguageTable() {
  const languages = [
    { id: 1, name: "English", enabled: true, isDefault: true },
    { id: 2, name: "Hindi", enabled: false, isDefault: false },
    { id: 3, name: "Regional language", enabled: false, isDefault: false },
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-bold text-text-primary uppercase">Supported Languages</h2>
      </div>
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border">Language</th>
            <th className="px-4 py-3 border-b border-border w-[100px] text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {languages.map((lang) => (
            <tr key={lang.id} className="hover:bg-bg-page transition-colors">
              <td className="px-4 py-3 font-bold text-text-primary">
                {lang.name}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${lang.enabled ? 'bg-success-bg text-success border-success/20' : 'bg-bg-page text-text-secondary border-border'}`}>
                  {lang.enabled ? 'Active' : 'Inactive'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
