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

walkDir('./src', (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We will look for anything inside className="...", className={'...'}, className={`...`}
    // But safely, we can just replace 'bg-primary text-white' with 'bg-primary text-black'
    // Let's do a generic regex that looks for className={...} or className="..."
    
    content = content.replace(/className=(["'])(.*?)\1/g, (match, quote, classes) => {
        let newClasses = classes;
        if (newClasses.includes('bg-primary') || newClasses.includes('bg-primary-hover')) {
            newClasses = newClasses.replace(/\btext-white\b/g, 'text-black');
        }
        if (newClasses.includes('hover:bg-primary') || newClasses.includes('hover:bg-primary-hover')) {
            newClasses = newClasses.replace(/\bhover:text-white\b/g, 'hover:text-black');
        }
        if (newClasses.includes('group-hover:bg-primary')) {
            newClasses = newClasses.replace(/\bgroup-hover:text-white\b/g, 'group-hover:text-black');
        }
        return `className=${quote}${newClasses}${quote}`;
    });

    content = content.replace(/className=\{`([^`]+)`\}/g, (match, classes) => {
        let newClasses = classes;
        if (newClasses.includes('bg-primary') || newClasses.includes('bg-primary-hover')) {
            newClasses = newClasses.replace(/\btext-white\b/g, 'text-black');
        }
        if (newClasses.includes('hover:bg-primary') || newClasses.includes('hover:bg-primary-hover')) {
            newClasses = newClasses.replace(/\bhover:text-white\b/g, 'hover:text-black');
        }
        if (newClasses.includes('group-hover:bg-primary')) {
            newClasses = newClasses.replace(/\bgroup-hover:text-white\b/g, 'group-hover:text-black');
        }
        return `className={\`${newClasses}\`}`;
    });

    // Also handle clsx / tailwind-merge generic strings: 'bg-primary text-white'
    content = content.replace(/(['"`])([^'"`]*?\bbg-primary\b[^'"`]*?)\1/g, (match, quote, str) => {
        if (!str.includes('text-white')) return match;
        return `${quote}${str.replace(/\btext-white\b/g, 'text-black')}${quote}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Modified ${modifiedFiles} files.`);
