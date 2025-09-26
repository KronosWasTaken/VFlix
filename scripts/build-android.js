#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load environment variables
require('dotenv').config();

// Create a config file with environment variables
const configContent = `
// Auto-generated config for Android build
export const config = {
  TMDB_API_KEY: '${process.env.VITE_TMDB_API_KEY}',
  SUPABASE_URL: '${process.env.VITE_SUPABASE_URL}',
  SUPABASE_ANON_KEY: '${process.env.VITE_SUPABASE_ANON_KEY}',
};
`;

// Write config to src directory
fs.writeFileSync(path.join(__dirname, '../src/config.ts'), configContent);

console.log('✅ Environment variables injected for Android build');

// Build the app
console.log('🏗️ Building VFlix for production...');
execSync('pnpm build', { stdio: 'inherit' });

// Sync to Android
console.log('📱 Syncing to Android...');
execSync('npx cap sync android', { stdio: 'inherit' });

console.log('✅ Android build complete!');
