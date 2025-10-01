// bun-vite.js - Script para rodar Vite com Bun
import { spawn } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const vitePath = require.resolve('vite/bin/vite.js');

// Executa Vite usando Bun
const viteProcess = spawn('C:\\Users\\casa\\.bun\\bin\\bun.exe', [vitePath], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('close', (code) => {
  process.exit(code);
});
