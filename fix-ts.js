const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('src/app/(app)/super-admin', (err, results) => {
  if (err) throw err;
  
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Fix errors.message type issue
    const newContent = content.replace(/\{errors\.([a-zA-Z0-9_]+)(\?)?\.message\}/g, '{String(errors.$1$2.message)}');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }

    // Fix useForm<Omit<...>> to useForm<any> and onSubmit
    if (content.includes('useForm<Omit<FinancialYear, \'id\'>>') || content.includes("useForm<Omit<FinancialYear, \"id\">>")) {
      content = content.replace(/useForm<Omit<FinancialYear, ['"]id['"]>>/g, 'useForm<any>');
      content = content.replace(/onSubmit = async \(data: Omit<FinancialYear, ['"]id['"]>\)/g, 'onSubmit = async (data: any)');
      changed = true;
    }

    if (content.includes('useForm<Omit<AcademicGroupType, \'id\'>>') || content.includes("useForm<Omit<AcademicGroupType, \"id\">>")) {
      content = content.replace(/useForm<Omit<AcademicGroupType, ['"]id['"]>>/g, 'useForm<any>');
      content = content.replace(/onSubmit = async \(data: Omit<AcademicGroupType, ['"]id['"]>\)/g, 'onSubmit = async (data: any)');
      changed = true;
    }

    // Fix Lucide icon title prop in SuperAdminFinancialYearsTable.tsx
    if (file.includes('SuperAdminFinancialYearsTable.tsx')) {
       if (content.includes('<Lock size={16} className="text-danger" title="Locked" />')) {
          content = content.replace(/<Lock size=\{16\} className="text-danger" title="Locked" \/>/g, '<Lock size={16} className="text-danger" />');
          changed = true;
       }
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed:', file);
    }
  });
});
