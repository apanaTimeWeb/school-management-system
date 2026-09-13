const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app/(app)/teacher/homework');

// Rename folders
try { fs.renameSync(path.join(dir, 'assignments_components'), path.join(dir, 'homework_components')); } catch(e){}
try { fs.renameSync(path.join(dir, 'assignments_constants'), path.join(dir, 'homework_constants')); } catch(e){}
try { fs.renameSync(path.join(dir, 'assignments_store'), path.join(dir, 'homework_store')); } catch(e){}

// Rename files in homework_components
const compsDir = path.join(dir, 'homework_components');
const compFiles = fs.readdirSync(compsDir);
compFiles.forEach(file => {
  const newName = file.replace('Assignments', 'Homework');
  if (newName !== file) {
    fs.renameSync(path.join(compsDir, file), path.join(compsDir, newName));
  }
});

// Rename files in constants and store
const constsDir = path.join(dir, 'homework_constants');
try { fs.renameSync(path.join(constsDir, 'TeacherAssignmentsMockData.ts'), path.join(constsDir, 'TeacherHomeworkMockData.ts')); } catch(e){}

const storeDir = path.join(dir, 'homework_store');
try { fs.renameSync(path.join(storeDir, 'useTeacherAssignmentsStore.ts'), path.join(storeDir, 'useTeacherHomeworkStore.ts')); } catch(e){}

// Now replace text content in all files
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/assignments_components/g, 'homework_components');
  content = content.replace(/assignments_constants/g, 'homework_constants');
  content = content.replace(/assignments_store/g, 'homework_store');
  content = content.replace(/TeacherAssignmentsMain/g, 'TeacherHomeworkMain');
  content = content.replace(/TeacherAssignmentsMockData/g, 'TeacherHomeworkMockData');
  content = content.replace(/useTeacherAssignmentsStore/g, 'useTeacherHomeworkStore');
  content = content.replace(/TeacherAssignmentsState/g, 'TeacherHomeworkState');
  content = content.replace(/Homework & Assignments/g, 'Homework Management');
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDir(directory) {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        replaceInFile(fullPath);
      }
    }
  });
}

processDir(dir);
console.log("Done");
