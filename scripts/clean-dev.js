const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Auto-purge stale production build chunks from .next when starting dev server
const nextDir = path.join(__dirname, '..', '.next');
if (fs.existsSync(nextDir)) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('[COLLAVIAH Dev] Purged stale .next cache to prevent chunk collisions.');
  } catch (err) {
    console.warn('[COLLAVIAH Dev] Note: Could not purge .next (may be locked by another process).');
  }
}

const isWin = process.platform === 'win32';
const nextCmd = isWin ? 'next.cmd' : 'next';
const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', nextCmd);

const child = spawn(nextBin, ['dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code || 0);
});

