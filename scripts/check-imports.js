const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const srcDir = path.join(repoRoot, 'src');

function gitFiles() {
  const out = execSync('git ls-files', { cwd: repoRoot, encoding: 'utf8' });
  return out.split(/\r?\n/).filter(Boolean);
}

function walk(dir, exts = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) files.push(...walk(full, exts));
    else if (exts.includes(path.extname(name))) files.push(full);
  }
  return files;
}

const gitList = gitFiles();
const files = walk(srcDir);
const importRE = /import\s+(?:[^'"\n]+)\s+from\s+['"](.+?)['"]/g;
const dynamicRE = /import\(['"](.+?)['"]\)/g;

let problems = 0;

for (const f of files) {
  const rel = path.relative(repoRoot, f).replace(/\\/g, '/');
  const content = fs.readFileSync(f, 'utf8');
  const matches = [];
  let m;
  while ((m = importRE.exec(content))) matches.push(m[1]);
  while ((m = dynamicRE.exec(content))) matches.push(m[1]);

  for (const imp of matches) {
    if (!imp.startsWith('.')) continue;
    const resolvedCandidates = [];
    const base = path.normalize(path.join(path.dirname(f), imp));
    const relBase = path.relative(repoRoot, base).replace(/\\/g, '/');
    resolvedCandidates.push(relBase);
    ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'].forEach(s => resolvedCandidates.push(relBase + s));

    const found = resolvedCandidates.find(c => gitList.includes(c));
    if (!found) {
      problems++;
      console.log(`Missing import in ${rel}: '${imp}'`);
      console.log('  Tried:');
      resolvedCandidates.forEach(c => console.log('   -', c));
      console.log('');
    }
  }
}

if (problems === 0) console.log('No relative-import mismatches detected.');
else console.log(`Detected ${problems} potential problems.`);
