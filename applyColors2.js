const fs = require('fs');
const path = require('path');

const roles = {
  'SuperAdmin': { primary: '#1E3A8A', dark: '#172554', soft: '#EFF6FF', accent: '#3B82F6' },
  'Admin': { primary: '#0F766E', dark: '#134E4A', soft: '#ECFDF5', accent: '#14B8A6' },
  'Principal': { primary: '#7C3AED', dark: '#4C1D95', soft: '#F5F3FF', accent: '#8B5CF6' },
  'Teacher': { primary: '#15803D', dark: '#14532D', soft: '#F0FDF4', accent: '#22C55E' },
  'Accountant': { primary: '#475569', dark: '#1E293B', soft: '#F8FAFC', accent: '#64748B' },
  'HR': { primary: '#BE185D', dark: '#831843', soft: '#FDF2F8', accent: '#EC4899' },
  'Student': { primary: '#0284C7', dark: '#0C4A6E', soft: '#F0F9FF', accent: '#38BDF8' },
  'Parent': { primary: '#B45309', dark: '#78350F', soft: '#FFFBEB', accent: '#F59E0B' },
  'Librarian': { primary: '#6D28D9', dark: '#3B0764', soft: '#FAF5FF', accent: '#A855F7' },
  'TransportManager': { primary: '#0891B2', dark: '#164E63', soft: '#ECFEFF', accent: '#06B6D4' },
  'HostelWarden': { primary: '#166534', dark: '#14532D', soft: '#F0FDF4', accent: '#4D7C0F' },
};

const rolePrefixes = {
  'super-admin': 'SuperAdmin',
  'admin': 'Admin',
  'principal': 'Principal',
  'teacher': 'Teacher',
  'accountant': 'Accountant',
  'hr': 'HR',
  'student': 'Student',
  'parent': 'Parent',
  'librarian': 'Librarian',
  'transport-manager': 'TransportManager',
  'hostel-warden': 'HostelWarden'
};

const layoutDir = path.join(__dirname, 'src', 'components', 'layout');
const appDir = path.join(__dirname, 'src', 'app', '(app)');

for (const [folder, prefix] of Object.entries(rolePrefixes)) {
  const colors = roles[prefix];
  if (!colors) continue;

  // LAYOUT
  const layoutPath = path.join(appDir, folder, 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    // Replace any bg-color for the main wrapping div
    content = content.replace(/className="[^"]*min-h-screen[^"]*"/, (match) => {
      return match.replace(/bg-[A-Za-z0-9-\[\]#]+/, `bg-[${colors.soft}]`);
    });
    content = content.replace(/className="[^"]*flex h-screen[^"]*"/, (match) => {
      return match.replace(/bg-[A-Za-z0-9-\[\]#]+/, `bg-[${colors.soft}]`);
    });
    fs.writeFileSync(layoutPath, content);
  }

  // SIDEBAR
  const sidebarPath = path.join(layoutDir, `${prefix}Sidebar.tsx`);
  if (fs.existsSync(sidebarPath)) {
    let content = fs.readFileSync(sidebarPath, 'utf8');
    // Force aside to Dark
    content = content.replace(/<aside\s+className="([^"]+)"/, (match, p1) => {
      let newClasses = p1.replace(/bg-[A-Za-z0-9-\[\]#]+/g, `bg-[${colors.dark}]`);
      // Update text colors for dark mode visibility
      newClasses = newClasses.replace(/text-sidebar-text/g, 'text-white');
      return `<aside className="${newClasses}"`;
    });
    
    // Convert all instances of standard active backgrounds to Primary
    content = content.replace(/bg-\[#[A-Fa-f0-9]+\]/g, `bg-[${colors.primary}]`);
    
    fs.writeFileSync(sidebarPath, content);
  }

  // HEADER
  const headerPath = path.join(layoutDir, `${prefix}Header.tsx`);
  if (fs.existsSync(headerPath)) {
    let content = fs.readFileSync(headerPath, 'utf8');
    // Replace text-primary with text-[Primary]
    content = content.replace(/text-primary/g, `text-[${colors.primary}]`);
    
    // Badges / Notification dots
    content = content.replace(/bg-amber-500|text-amber-500|bg-danger/g, `text-[${colors.accent}]`);
    
    fs.writeFileSync(headerPath, content);
  }
}
console.log('Advanced colors applied.');
