const fs = require('fs');
const path = require('path');

const superAdminPath = path.join(__dirname, 'src/app/(app)/super-admin');

const categories = {
  '01-dashboard': {
    prefix: 'dashboard',
    oldFolders: ['dashboard']
  },
  '02-organization-management': {
    prefix: 'organization_management',
    oldFolders: ['schools', 'school-structure']
  },
  '03-academic-setup': {
    prefix: 'academic_setup',
    oldFolders: ['sessions', 'financial-years', 'academic-master', 'holiday-working-day-master']
  },
  '04-users-access': {
    prefix: 'users_access',
    oldFolders: ['user-management', 'role-management', 'permission-management', 'device-session']
  },
  '05-system-settings': {
    prefix: 'system_settings',
    oldFolders: ['general-settings', 'language-management', 'category-master-data', 'numbering-sequence', 'school-branding']
  },
  '06-communication': {
    prefix: 'communication',
    oldFolders: ['sms-configuration', 'email-configuration', 'whatsapp-configuration', 'notification-configuration']
  },
  '07-finance-configuration': {
    prefix: 'finance_configuration',
    oldFolders: ['payment-gateway', 'fee-finance-master-settings']
  },
  '08-hr-configuration': {
    prefix: 'hr_configuration',
    oldFolders: ['hr-master-settings']
  },
  '09-library-configuration': {
    prefix: 'library_configuration',
    oldFolders: ['library-master-settings']
  },
  '10-transport-configuration': {
    prefix: 'transport_configuration',
    oldFolders: ['transport-master-settings']
  },
  '11-hostel-configuration': {
    prefix: 'hostel_configuration',
    oldFolders: ['hostel-master-settings']
  },
  '12-documents-certificates': {
    prefix: 'documents_certificates',
    oldFolders: ['document-certificate-settings']
  },
  '13-integrations': {
    prefix: 'integrations',
    oldFolders: ['integration-management']
  },
  '14-data-management': {
    prefix: 'data_management',
    oldFolders: ['data-import-export', 'backup-restore']
  },
  '15-approval-workflow': {
    prefix: 'approval_workflow',
    oldFolders: ['approval-workflow']
  },
  '16-automation': {
    prefix: 'automation',
    oldFolders: ['automation-rules']
  },
  '17-reports-analytics': {
    prefix: 'reports_analytics',
    oldFolders: ['reports-analytics', 'super-admin-export-center']
  },
  '18-audit-security': {
    prefix: 'audit_security',
    oldFolders: ['audit-logs', 'system-activity-logs', 'security-management', 'configuration-change-history', 'sensitive-data-protection', 'login-identity-settings', 'system-alerts', 'terms-privacy-consent', 'data-retention-archiving']
  },
  '19-system-health': {
    prefix: 'system_health',
    oldFolders: ['system-health']
  },
  '20-support-helpdesk': {
    prefix: 'support_helpdesk',
    oldFolders: ['support-helpdesk']
  },
  '21-system-announcements': {
    prefix: 'system_announcements',
    oldFolders: ['system-announcement']
  },
  '22-maintenance-mode': {
    prefix: 'maintenance_mode',
    oldFolders: ['maintenance-mode']
  },
  '23-module-management': {
    prefix: 'module_management',
    oldFolders: ['module-enable-disable']
  },
  '24-deleted-data-recovery': {
    prefix: 'deleted_data_recovery',
    oldFolders: ['recycle-bin']
  },
  '25-my-profile': {
    prefix: 'my_profile',
    oldFolders: ['super-admin-profile']
  },
  '26-emergency-controls': { 
    prefix: 'emergency_controls',
    oldFolders: ['super-admin-emergency-controls', 'system-wide-search']
  }
};

function copyFilesByType(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    if (file === 'page.tsx') continue;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyFilesByType(srcPath, destDir);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const [newCategory, config] of Object.entries(categories)) {
  const newCatPath = path.join(superAdminPath, newCategory);
  const newCompPath = path.join(newCatPath, `${config.prefix}_components`);
  const newTypesPath = path.join(newCatPath, `${config.prefix}_types`);

  if (!fs.existsSync(newCatPath)) fs.mkdirSync(newCatPath, { recursive: true });
  if (!fs.existsSync(newCompPath)) fs.mkdirSync(newCompPath, { recursive: true });
  if (!fs.existsSync(newTypesPath)) fs.mkdirSync(newTypesPath, { recursive: true });

  let pageContent = `import React from 'react';\n\n`;
  let componentsRender = '';
  const imports = new Set();

  for (const oldFolder of config.oldFolders) {
    const oldPath = path.join(superAdminPath, oldFolder);
    if (fs.existsSync(oldPath)) {
      const oldFiles = fs.readdirSync(oldPath);
      for (const oldFile of oldFiles) {
        if (oldFile.endsWith('_components')) {
          copyFilesByType(path.join(oldPath, oldFile), newCompPath);
        } else if (oldFile.endsWith('_types')) {
          copyFilesByType(path.join(oldPath, oldFile), newTypesPath);
        }
      }
    }
  }

  // Fix imports in the moved components
  const movedComps = fs.readdirSync(newCompPath);
  for (const file of movedComps) {
    const compPath = path.join(newCompPath, file);
    if (fs.statSync(compPath).isFile()) {
      let content = fs.readFileSync(compPath, 'utf8');
      
      // Fix import path to types
      content = content.replace(/@\/app\/\(app\)\/super-admin\/[^/]+\/[^/]+_types\/([^'"]+)/g, `../${config.prefix}_types/$1`);
      
      // Fix relative imports from other old folders that were moved inside the same new folder!
      content = content.replace(/\.\.\/\.\.\/super_admin_[^/]+_types\/([^'"]+)/g, `../${config.prefix}_types/$1`);
      content = content.replace(/\.\.\/[^/]+_types\/([^'"]+)/g, `../${config.prefix}_types/$1`);

      fs.writeFileSync(compPath, content);

      // Collect for page.tsx
      if (file.endsWith('Config.tsx') || file.endsWith('Dashboard.tsx') || file.endsWith('Settings.tsx') || file.endsWith('Management.tsx') || file.endsWith('Logs.tsx') || file.endsWith('Card.tsx') || file.endsWith('Table.tsx') || file.endsWith('Form.tsx') || file.endsWith('Tools.tsx')) {
        const compName = file.replace('.tsx', '');
        // prevent drawers/modals from rendering inline normally, but scraper needs them mounted
        if (!imports.has(compName) && !compName.includes('Drawer') && !compName.includes('Modal')) {
          imports.add(compName);
          // DON'T include .tsx in the import path
          pageContent += `import ${compName} from './${config.prefix}_components/${compName}';\n`;
          componentsRender += `      <section className="mb-10">\n        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">${compName.replace('SuperAdmin', '').replace('Config', '')}</h2>\n        <${compName} />\n      </section>\n`;
        }
      }
    }
  }

  pageContent += `\nexport default function ${newCategory.replace(/[^a-zA-Z]/g, '')}Page() {\n  return (\n    <div className="p-6">\n      <h1 className="text-2xl font-bold mb-6">${newCategory.toUpperCase()}</h1>\n${componentsRender}    </div>\n  );\n}\n`;
  
  fs.writeFileSync(path.join(newCatPath, 'page.tsx'), pageContent);
  console.log(`Created ${newCategory}`);
}

// Delete old folders
for (const config of Object.values(categories)) {
  for (const oldFolder of config.oldFolders) {
    const oldPath = path.join(superAdminPath, oldFolder);
    if (fs.existsSync(oldPath)) {
      fs.rmSync(oldPath, { recursive: true, force: true });
      console.log(`Deleted ${oldFolder}`);
    }
  }
}
