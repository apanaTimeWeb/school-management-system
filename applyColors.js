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

// Define module to component prefix mapping
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

  // 1. Update Layout Soft Background
  const layoutPath = path.join(appDir, folder, 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    // Replace bg-bg-page, bg-gray-50, bg-[#...], bg-bg-main with SoftBg
    content = content.replace(/bg-bg-page|bg-bg-main|bg-gray-50|bg-\[#[A-Fa-f0-9]+\]/g, `bg-[${colors.soft}]`);
    fs.writeFileSync(layoutPath, content);
  }

  // 2. Update Sidebar (Dark bg, Primary active)
  const sidebarPath = path.join(layoutDir, `${prefix}Sidebar.tsx`);
  if (fs.existsSync(sidebarPath)) {
    let content = fs.readFileSync(sidebarPath, 'utf8');
    
    // Replace sidebar wrapper background (bg-sidebar or bg-indigo-950) with Dark Color
    content = content.replace(/bg-sidebar|bg-indigo-950|bg-slate-900|bg-zinc-950/g, `bg-[${colors.dark}]`);
    // Also fix text colors in sidebar to white/muted to match dark bg
    content = content.replace(/text-indigo-100|text-slate-100|text-gray-100/g, 'text-white/90');
    content = content.replace(/text-sidebar-text-muted|text-indigo-300|text-slate-400|text-zinc-400/g, 'text-white/60');
    content = content.replace(/hover:text-sidebar-text|hover:text-white/g, 'hover:text-white');
    content = content.replace(/text-sidebar-text|text-indigo-100/g, 'text-white');
    
    // Replace header logo background with Primary
    content = content.replace(/bg-primary|bg-indigo-600|bg-blue-600/g, `bg-[${colors.primary}]`);
    
    // Active menu background
    content = content.replace(/bg-primary\/10|bg-indigo-600|bg-indigo-900\/50/g, `bg-[${colors.primary}]`);
    content = content.replace(/text-primary|text-indigo-600/g, 'text-white');
    
    // Hover backgrounds
    content = content.replace(/hover:bg-secondary\/10|hover:bg-white\/5|hover:bg-indigo-900\/50/g, `hover:bg-[${colors.primary}]/50`);

    fs.writeFileSync(sidebarPath, content);
  }

  // 3. Update Header (Primary texts, Accent badges)
  const headerPath = path.join(layoutDir, `${prefix}Header.tsx`);
  if (fs.existsSync(headerPath)) {
    let content = fs.readFileSync(headerPath, 'utf8');
    
    // Replace text-primary or text-indigo-600 with Primary Color
    content = content.replace(/text-primary|text-indigo-600/g, `text-[${colors.primary}]`);
    // Replace bg-primary with Primary Color
    content = content.replace(/bg-primary|bg-indigo-600/g, `bg-[${colors.primary}]`);
    // Replace bg-indigo-50 with Primary/10 for hovers
    content = content.replace(/bg-indigo-50/g, `bg-[${colors.primary}]/10`);
    content = content.replace(/text-indigo-700/g, `text-[${colors.primary}]`);

    fs.writeFileSync(headerPath, content);
  }
}
console.log('Colors applied.');
