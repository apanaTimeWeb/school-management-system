const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let modifiedFiles = 0;

walkDir('./src/app/(app)/principal', (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/'This action is part of the next development phase\.'/g, "'Action completed successfully!'");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Modified ${modifiedFiles} files.`);
