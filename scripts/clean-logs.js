const fs = require('fs');
const path = require('path');
const logsDir = path.resolve(__dirname, '..', 'logs');
if (fs.existsSync(logsDir)) {
  fs.rmSync(logsDir, { recursive: true, force: true });
}
fs.mkdirSync(logsDir);
console.log('logs/ cleaned');
