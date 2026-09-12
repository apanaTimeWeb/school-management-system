const fs = require('fs');
const path = require('path');

const features = [
  "Student List",
  "Student Profile",
  "Student Registration",
  "Admission Number",
  "Student ID",
  "Academic Details",
  "Parent/Guardian Details",
  "Contact Details",
  "Address",
  "Documents",
  "Previous School Details",
  "Medical Information",
  "Category/Reservation Details",
  "Sibling Information",
  "House",
  "Student Status",
  "Class/Section Transfer",
  "Student Promotion",
  "Student TC",
  "Student Withdrawal",
  "Student Re-admission",
  "Student Archive",
  "Student Search/Filters",
  "Bulk Import/Expor" // Using exact spelling from user
];

const componentsDir = path.join(__dirname, 'src/app/(app)/admin/02-student-management/student_management_components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

let pageImports = '';
let pageRenders = '';

features.forEach(feature => {
  const compName = 'Admin' + feature.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Config';
  
  const compContent = '"use client";\n\n' +
'import React from "react";\n\n' +
'export default function ' + compName + '() {\n' +
'  return (\n' +
'    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">\n' +
'      <div className="border-b border-border pb-3">\n' +
'        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">' + feature + '</h2>\n' +
'      </div>\n' +
'      <div className="flex flex-col gap-1.5">\n' +
'        <label className="text-sm font-medium text-text-primary">' + feature + '</label>\n' +
'        <input \n' +
'          type="text" \n' +
'          className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none transition-colors"\n' +
'        />\n' +
'      </div>\n' +
'      <div className="flex justify-end pt-4 border-t border-border">\n' +
'        <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors">\n' +
'          Save ' + feature + '\n' +
'        </button>\n' +
'      </div>\n' +
'    </div>\n' +
'  );\n' +
'}\n';
  
  fs.writeFileSync(path.join(componentsDir, compName + '.tsx'), compContent);

  pageImports += 'import ' + compName + ' from "./student_management_components/' + compName + '";\n';
  pageRenders += '      <section className="mb-10">\n        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">' + feature + '</h2>\n        <' + compName + ' />\n      </section>\n';
});

const pageContent = 'import React from "react";\n' +
pageImports + '\n' +
'export default function AdminStudentManagementPage() {\n' +
'  return (\n' +
'    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">\n' +
'      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">\n' +
'        <div>\n' +
'          <h1 className="text-2xl font-bold text-text-primary">Student Management</h1>\n' +
'          <p className="text-sm text-text-secondary mt-1">Manage complete student lifecycle, profiles, and administration.</p>\n' +
'        </div>\n' +
'      </div>\n      \n' +
pageRenders +
'    </div>\n' +
'  );\n' +
'}\n';

fs.writeFileSync(path.join(__dirname, 'src/app/(app)/admin/02-student-management/page.tsx'), pageContent);

console.log("Successfully generated all 24 components independently.");
