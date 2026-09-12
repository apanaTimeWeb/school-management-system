const fs = require('fs');
const path = require('path');

const superAdminPath = path.join(__dirname, 'src/app/(app)/super-admin');

const folders = fs.readdirSync(superAdminPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name.match(/^\d{2}-/))
  .map(dirent => dirent.name);

console.log("=== SUPER ADMIN REFACTORING REPORT ===\n");
let totalComponents = 0;

for (const folder of folders) {
  const folderPath = path.join(superAdminPath, folder);
  const compFolder = fs.readdirSync(folderPath, { withFileTypes: true })
    .find(d => d.isDirectory() && d.name.endsWith('_components'));
    
  if (compFolder) {
    const compPath = path.join(folderPath, compFolder.name);
    const files = fs.readdirSync(compPath).filter(f => f.endsWith('.tsx'));
    console.log(`\n📁 [${folder}] has ${files.length} features nested:`);
    files.forEach(f => console.log(`   - ${f}`));
    totalComponents += files.length;
  }
}
console.log(`\n================================`);
console.log(`Total Nested Feature Files: ${totalComponents}`);
console.log(`================================`);
