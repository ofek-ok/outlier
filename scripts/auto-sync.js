/**
 * OUTLIER Auto-Sync Daemon
 * Continuously watches for file modifications in the project,
 * automatically stages, commits, and pushes to https://github.com/ofek-ok/outlier
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
let debounceTimer = null;
const DEBOUNCE_DELAY = 4000; // 4 seconds delay after last change

console.log('────────────────────────────────────────────────────────────');
console.log('⚡ OUTLIER Git Auto-Sync Daemon Started');
console.log(`📁 Watching directory: ${ROOT_DIR}`);
console.log('🔗 Target Remote: https://github.com/ofek-ok/outlier');
console.log('────────────────────────────────────────────────────────────');

function isIgnored(filepath) {
  const rel = path.relative(ROOT_DIR, filepath);
  if (!rel || rel.startsWith('.')) return true;
  if (
    rel.includes('node_modules') ||
    rel.includes('.next') ||
    rel.includes('.git') ||
    rel.includes('.DS_Store') ||
    rel.endsWith('.log')
  ) {
    return true;
  }
  return false;
}

function syncToGitHub() {
  try {
    const status = execSync('git status --porcelain', {
      cwd: ROOT_DIR,
      encoding: 'utf8',
    }).trim();

    if (!status) {
      return;
    }

    console.log(`\n[${new Date().toLocaleTimeString()}] Detected file changes:`);
    console.log(status);

    console.log('→ Staging files...');
    execSync('git add .', { cwd: ROOT_DIR });

    const timeStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const commitMsg = `auto: sync updates to website [${timeStr}]`;
    console.log(`→ Committing: "${commitMsg}"...`);
    execSync(`git commit -m "${commitMsg}"`, { cwd: ROOT_DIR });

    console.log('→ Pushing to origin main...');
    execSync('git push origin main', { cwd: ROOT_DIR, stdio: 'inherit' });

    console.log('✔ Successfully pushed to https://github.com/ofek-ok/outlier\n');
  } catch (err) {
    console.error('⚠ Auto-sync error:', err.message);
  }
}

// Watch key folders
const watchTargets = ['app', 'components', 'config', 'content', 'public', 'package.json', 'README.md'];

watchTargets.forEach((target) => {
  const fullPath = path.join(ROOT_DIR, target);
  if (!fs.existsSync(fullPath)) return;

  try {
    fs.watch(fullPath, { recursive: true }, (eventType, filename) => {
      if (filename && isIgnored(path.join(fullPath, filename))) return;

      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        syncToGitHub();
      }, DEBOUNCE_DELAY);
    });
  } catch (err) {
    console.error(`Could not watch ${target}:`, err.message);
  }
});

// Also trigger an initial check on startup
syncToGitHub();

// Keep process alive
process.stdin.resume();
