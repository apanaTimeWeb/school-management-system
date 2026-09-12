const fs = require('fs');
const path = require('path');

function generate(moduleName, dirPath, items) {
  const componentNames = [];
  const fullDirPath = path.join(__dirname, 'src', 'app', '(app)', 'admin', dirPath, moduleName + '_components');
  
  if (!fs.existsSync(fullDirPath)) {
    fs.mkdirSync(fullDirPath, { recursive: true });
  }

  items.forEach(item => {
    // Determine title to show in UI
    let uiTitle = item;
    if (item === "2FA (यदि enabled)") {
      uiTitle = "2FA (यदि enabled)";
    }
    
    // Sanitize item specifically handling slashes, spaces and Hindi brackets
    let sanitized = item.replace(/[^a-zA-Z0-9]/g, '');
    // If sanitized starts with a number, prefix with string 'Item' or 'Config' but here we just prepend 'Admin' so 'Admin2FAConfig' is fine.
    const componentName = `Admin${sanitized}Config`;
    componentNames.push({ name: componentName, title: uiTitle });

    const content = `"use client";

import React from 'react';
import { Settings, Plus, CheckCircle } from 'lucide-react';

export default function ${componentName}() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="bg-primary/5 border-b border-border p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Settings className="text-primary" size={20} />
          ${uiTitle}
        </h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition">
          <Plus size={16} /> Add New
        </button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Total Records</span>
            <span className="text-2xl font-bold text-primary">124</span>
          </div>
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Active</span>
            <span className="text-2xl font-bold text-success">112</span>
          </div>
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Pending Review</span>
            <span className="text-2xl font-bold text-warning">12</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-md font-bold text-text-primary border-b border-border pb-2">Manage ${uiTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Configuration Name</label>
              <input type="text" placeholder="Enter details..." className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Status</label>
              <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-secondary text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-secondary/90 transition flex items-center gap-2">
              <CheckCircle size={16} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
    fs.writeFileSync(path.join(fullDirPath, `${componentName}.tsx`), content);
  });

  // Generate Page.tsx
  const pagePath = path.join(__dirname, 'src', 'app', '(app)', 'admin', dirPath, 'page.tsx');
  const pageContent = `import React from "react";
${componentNames.map(comp => `import ${comp.name} from "./${moduleName}_components/${comp.name}";`).join('\n')}

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Security Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Security</p>
        </div>
      </div>

      ${componentNames.map(comp => `<${comp.name} />`).join('\n      ')}
    </div>
  );
}
`;
  fs.writeFileSync(pagePath, pageContent);
  console.log(`Generated ${items.length} premium components for ${moduleName}`);
}

const securityItems = [
  "Login History",
  "Active Sessions",
  "Logout Other Devices",
  "Password Change",
  "2FA (यदि enabled)",
  "Permission-based access",
  "Sensitive data masking",
  "Activity History"
];

generate("security", "26-security", securityItems);
