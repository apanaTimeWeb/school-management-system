const fs = require('fs');
const path = require('path');
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
  if (importMatch) {
    const imported = importMatch[1].split(',').map(s => s.trim());
    const used = [...content.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]);
    const uniqueUsed = [...new Set(used)];
    const missing = uniqueUsed.filter(u => 
      !imported.includes(u) && 
      !content.includes('import ' + u) && 
      !content.includes('import {' + u) &&
      !content.includes('import { ' + u) &&
      !['React', 'Link', 'Image'].includes(u)
    );
    if (missing.length > 0) {
      console.log(path.basename(filePath) + ' possible missing: ' + missing.join(', '));
    }
  }
}
function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      checkFile(fullPath);
    }
  }
}
processDir('src/app/(app)/principal/students');
