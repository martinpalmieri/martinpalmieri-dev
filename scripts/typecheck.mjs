#!/usr/bin/env node
import { sync } from 'astro';

async function main() {
  const exitCode = await sync({});
  if (typeof exitCode === 'number' && exitCode !== 0) {
    process.exit(exitCode);
  }
  console.log('Astro content synchronization completed (stub typecheck).');
}

main().catch((error) => {
  console.error('Typecheck stub failed:', error);
  process.exit(1);
});
